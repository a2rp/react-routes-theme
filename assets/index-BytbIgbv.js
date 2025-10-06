import{d as G,_ as q,u as E,r as u,j as e,L as d}from"./index-BauM8ZfN.js";import{l as w,m as H,c as R,n as K,o as V,e as M,p as I,q as z,r as Y,s as W,a as X,t as _}from"./index-B6hBVdE9.js";const s="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",c="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",J="var(--accent-soft, rgba(90,169,255,0.15))",f="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",Q=q`
    box-shadow: 0 0 0 3px ${J};
`,Z={Page:G.div`
        width: 100%;
        min-height: 100%;
        color: ${s};

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            color: ${m};
            margin-bottom: 10px;
            a {
                color: ${m};
            }
            .sep {
                opacity: 0.6;
            }
        }

        .pageHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${c};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px 18px;
            box-shadow: ${f};
            margin-bottom: 14px;

            .l {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .iconCircle {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: color-mix(in oklab, ${a} 12%, transparent);
                border: 1px solid ${r};
                color: ${a};
            }
            h1 {
                font-family: "Antonio", sans-serif;
                font-size: 22px;
                line-height: 1.2;
                letter-spacing: 0.4px;
            }
            p {
                color: ${m};
                margin-top: 2px;
            }
            .meta {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                font-size: 12px;
                color: ${m};
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 12px;
            margin: 14px 0;

            .searchBox {
                position: relative;
                input {
                    width: 100%;
                    background: ${c};
                    color: ${s};
                    border: 1px solid ${r};
                    border-radius: 10px;
                    padding: 10px 12px 10px 36px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                }
                input::placeholder {
                    color: ${m};
                }
                input:focus {
                    border-color: ${a};
                    ${Q}
                }
                .ico {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: ${m};
                }
            }

            .filters {
                display: flex;
                gap: 12px;
                align-items: center;
                flex-wrap: wrap;

                .seg {
                    display: flex;
                    gap: 6px;
                }
                .chip {
                    background: ${c};
                    color: ${s};
                    border: 1px solid ${r};
                    border-radius: 20px;
                    padding: 6px 10px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                .chip.on {
                    border-color: ${a};
                    color: ${a};
                    background: color-mix(in oklab, ${a} 12%, transparent);
                }
            }

            .acts {
                display: flex;
                gap: 8px;
                justify-self: end;
                .btn {
                    display: inline-flex;
                    gap: 8px;
                    align-items: center;
                    border: 1px solid ${r};
                    background: ${c};
                    color: ${s};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, border-color 0.2s ease,
                        color 0.2s ease;
                }
                .btn.ghost:hover {
                    border-color: ${a};
                    color: ${a};
                    background: color-mix(in oklab, ${a} 10%, transparent);
                }
                .btn.primary {
                    border-color: ${r};
                }
                .btn.primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .quickLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
            .ql {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                padding: 8px 12px;
                border-radius: 10px;
                background: ${c};
                border: 1px solid ${r};
                color: ${s};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            .ql:hover {
                border-color: ${a};
                color: ${a};
                background: color-mix(in oklab, ${a} 10%, transparent);
            }
            .ql.active {
                border-color: ${a};
                color: ${a};
                background: color-mix(in oklab, ${a} 14%, transparent);
            }
            svg {
                opacity: 0.9;
            }
        }

        .tableWrap {
            background: color-mix(in oklab, ${c} 96%, transparent);
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${f};

            .subhead {
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 10px 12px;
                color: ${m};
                font-size: 12px;
                border-bottom: 1px solid ${r};
            }
            .dot {
                opacity: 0.6;
            }

            .scroll {
                width: 100%;
                overflow: auto;
                scrollbar-gutter: stable;
            }

            table.grid {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${c};
                color: ${a};
                text-align: left;
                border-bottom: 1px solid ${r};
                padding: 10px 12px;
                z-index: 1;
            }
            tbody td {
                border-bottom: 1px solid ${r};
                padding: 10px 12px;
                vertical-align: top;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
            .w120 {
                width: 120px;
            }

            .sticky {
                position: sticky;
                left: 0;
                background: inherit;
                z-index: 0; /* below header but above body bg */
            }

            .idLink {
                color: ${s};
                font-weight: 600;
                border-bottom: 1px dashed transparent;
            }
            .idLink:hover {
                color: ${a};
                border-bottom-color: ${a};
            }

            .metaRow {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                font-size: 12px;
                color: ${m};
                margin-top: 2px;
            }

            .patient {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                .avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background: color-mix(in oklab, ${a} 12%, transparent);
                    color: ${a};
                    border: 1px solid ${r};
                    font-size: 12px;
                }
                .name {
                    font-weight: 600;
                }
                .muted {
                    color: ${m};
                    margin-left: 4px;
                }
            }

            .dt {
                white-space: nowrap;
            }
            .tm {
                white-space: nowrap;
                color: ${m};
                font-size: 12px;
            }

            .badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 3px 8px;
                border-radius: 999px;
                border: 1px solid ${r};
                background: ${c};
                color: ${s};
                font-size: 12px;
                margin-right: 6px;
            }
            .badge.final {
                color: ${a};
                border-color: ${a};
                background: color-mix(in oklab, ${a} 12%, transparent);
            }
            .badge.preliminary {
                color: ${s};
                border-color: ${r};
                opacity: 0.9;
            }
            .badge.stat {
                color: ${s};
                border-color: ${r};
                background: rgba(255, 255, 255, 0.06);
            }

            .acts {
                display: flex;
                gap: 6px;
                align-items: center;
                .btn {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                    padding: 6px 8px;
                    border-radius: 6px;
                    border: 1px solid ${r};
                    background: ${c};
                    color: ${s};
                    font-size: 12px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                }
                .btn:hover {
                    border-color: ${a};
                    color: ${a};
                    background: color-mix(in oklab, ${a} 10%, transparent);
                }
                .btn:active {
                    transform: translateY(1px);
                }
                .btn.ghost {
                    opacity: 0.9;
                }
                .btn.tiny {
                    padding: 5px 8px;
                }
                a.btn {
                    text-decoration: none;
                }
            }
        }

        .navCards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 12px;
            margin: 14px 0 4px;

            .card {
                display: block;
                border: 1px solid ${r};
                background: ${c};
                color: ${s};
                border-radius: 12px;
                padding: 14px;
                text-decoration: none;
                box-shadow: ${f};
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.08s ease, background 0.2s ease;
            }
            .card:hover {
                border-color: ${a};
                color: ${a};
                background: color-mix(in oklab, ${a} 8%, transparent);
                transform: translateY(-1px);
            }
            .head {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-weight: 700;
                margin-bottom: 6px;
            }
            p {
                color: ${m};
            }
        }

        /* modal */
        .modalBackdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modal {
            width: min(560px, calc(100% - 24px));
            border: 1px solid ${r};
            background: ${c};
            border-radius: 12px;
            box-shadow: ${f};
            padding: 14px;
            animation: pop 0.12s ease-out;
        }
        @keyframes pop {
            from {
                transform: translateY(4px);
                opacity: 0.7;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .mHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
            font-weight: 700;
        }
        .mBody {
            color: ${s};
            opacity: 0.95;
        }
        .mActs {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        .mActs .btn {
            border: 1px solid ${r};
            background: ${c};
            color: ${s};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .mActs .btn:hover {
            border-color: ${a};
            color: ${a};
            background: color-mix(in oklab, ${a} 10%, transparent);
        }

        /* links inside table cells */
        a.plain {
            color: ${s};
            text-decoration: none;
        }
        a.plain:hover {
            color: ${a};
        }

        @media (max-width: 900px) {
            .toolbar {
                grid-template-columns: 1fr;
            }
            .tableWrap .w120 {
                width: auto;
            }
            .tableWrap .sticky {
                position: static;
            }
        }
    `},T=l=>l?new Date(l).toDateString():"-",S=l=>{if(!l)return"-";const p=new Date(l),o=String(p.getHours()).padStart(2,"0"),h=String(p.getMinutes()).padStart(2,"0"),x=String(p.getSeconds()).padStart(2,"0");return`${o}:${h}:${x}hrs`},y=l=>{if(!l)return"-";const p=new Date(l),o=p.toDateString(),h=String(p.getHours()).padStart(2,"0"),x=String(p.getMinutes()).padStart(2,"0"),$=String(p.getSeconds()).padStart(2,"0");return`${o} ${h}:${x}:${$}hrs`},ee=[{id:"IMG-20251004-001",patient:{id:"PAT-1001",name:"Rahul Verma",age:42,sex:"M"},modality:"CT",bodyPart:"Chest",images:342,status:"Final",priority:"Routine",createdAt:"2025-10-04T09:20:11+05:30",performedAt:"2025-10-04T10:02:33+05:30",reportedAt:"2025-10-04T12:21:09+05:30",notes:"CT Thorax with contrast. Rule out PE."},{id:"IMG-20251003-007",patient:{id:"PAT-1035",name:"Nisha Sharma",age:29,sex:"F"},modality:"MRI",bodyPart:"Brain",images:188,status:"Preliminary",priority:"STAT",createdAt:"2025-10-03T18:40:03+05:30",performedAt:"2025-10-03T19:08:42+05:30",reportedAt:"",notes:"Headache, r/o demyelination."},{id:"IMG-20250927-112",patient:{id:"PAT-1113",name:"Arun Kumar",age:64,sex:"M"},modality:"XR",bodyPart:"Knee",images:6,status:"Final",priority:"Routine",createdAt:"2025-09-27T12:10:21+05:30",performedAt:"2025-09-27T12:25:10+05:30",reportedAt:"2025-09-27T14:19:57+05:30",notes:"AP/Lateral knee. OA assessment."},{id:"IMG-20250925-054",patient:{id:"PAT-1022",name:"Sneha Iyer",age:35,sex:"F"},modality:"USG",bodyPart:"Abdomen",images:72,status:"Final",priority:"Routine",createdAt:"2025-09-25T11:02:09+05:30",performedAt:"2025-09-25T11:15:43+05:30",reportedAt:"2025-09-25T12:36:01+05:30",notes:"Upper abdomen screening."},{id:"IMG-20250922-019",patient:{id:"PAT-1189",name:"Pooja Singh",age:47,sex:"F"},modality:"MAMMO",bodyPart:"Breast",images:44,status:"Final",priority:"Routine",createdAt:"2025-09-22T09:50:14+05:30",performedAt:"2025-09-22T10:20:00+05:30",reportedAt:"2025-09-22T12:59:35+05:30",notes:"Screening mammography."},{id:"IMG-20250922-020",patient:{id:"PAT-1189",name:"Pooja Singh",age:47,sex:"F"},modality:"USG",bodyPart:"Breast",images:23,status:"Final",priority:"Routine",createdAt:"2025-09-22T13:10:14+05:30",performedAt:"2025-09-22T13:30:00+05:30",reportedAt:"2025-09-22T14:05:35+05:30",notes:"Targeted ultrasound."},{id:"IMG-20250921-081",patient:{id:"PAT-1066",name:"Imran Khan",age:51,sex:"M"},modality:"CT",bodyPart:"Abdomen",images:256,status:"Final",priority:"Routine",createdAt:"2025-09-21T16:03:41+05:30",performedAt:"2025-09-21T16:55:10+05:30",reportedAt:"2025-09-21T18:47:17+05:30",notes:"CT Abdomen triphasic."},{id:"IMG-20250920-014",patient:{id:"PAT-1200",name:"Ritika Desai",age:38,sex:"F"},modality:"XR",bodyPart:"Cervical Spine",images:8,status:"Preliminary",priority:"Routine",createdAt:"2025-09-20T08:14:10+05:30",performedAt:"2025-09-20T08:26:55+05:30",reportedAt:"",notes:"Neck pain."},{id:"IMG-20250918-301",patient:{id:"PAT-1150",name:"Kapil Mehra",age:23,sex:"M"},modality:"USG",bodyPart:"KUB",images:36,status:"Final",priority:"Routine",createdAt:"2025-09-18T13:45:00+05:30",performedAt:"2025-09-18T14:05:11+05:30",reportedAt:"2025-09-18T15:38:20+05:30",notes:"Renal calculus follow-up."},{id:"IMG-20250915-222",patient:{id:"PAT-1010",name:"Aisha Khan",age:33,sex:"F"},modality:"MRI",bodyPart:"Knee",images:210,status:"Final",priority:"Routine",createdAt:"2025-09-15T10:10:21+05:30",performedAt:"2025-09-15T11:02:07+05:30",reportedAt:"2025-09-15T13:25:49+05:30",notes:"ACL/PCL integrity."}],te=!0;function ie(){E();const[l,p]=u.useState(""),[o,h]=u.useState("all"),[x,$]=u.useState("all"),[F,k]=u.useState(!1),P=u.useRef(null),A=u.useMemo(()=>{const t=l.trim().toLowerCase().split(/\s+/).filter(Boolean);return ee.filter(n=>{var i,g;const v=o==="all"||o==="final"&&n.status==="Final"||o==="preliminary"&&n.status==="Preliminary",N=x==="all"||n.modality===x,j=[n.id,(i=n.patient)==null?void 0:i.name,(g=n.patient)==null?void 0:g.id,n.modality,n.bodyPart,n.priority,n.status,n.notes].join(" ").toLowerCase(),b=t.length===0||t.every(O=>j.includes(O));return v&&N&&b})},[l,o,x]),B=()=>{const t=["Study ID","Patient","Patient ID","Modality","Body Part","Images","Status","Priority","Created","Performed","Reported","Notes"],n=A.map(i=>{var g;return[i.id,i.patient.name,i.patient.id,i.modality,i.bodyPart,i.images,i.status,i.priority,y(i.createdAt),y(i.performedAt),i.reportedAt?y(i.reportedAt):"",(g=i.notes)==null?void 0:g.replace(/\n/g," ")]}),v=[t,...n].map(i=>i.map(g=>`"${String(g??"").replace(/"/g,'""')}"`).join(",")).join(`
`),N=new Blob([v],{type:"text/csv;charset=utf-8;"}),j=URL.createObjectURL(N),b=document.createElement("a");b.href=j,b.download=`imaging-list-${Date.now()}.csv`,document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(j)},C=()=>{P.current&&(document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300))},L=t=>typeof t=="string"&&t?t:new Date().toISOString(),D=L("2025-10-06T11:25:17+05:30"),U=L("2025-10-06T05:55:22.539Z");return e.jsxs(Z.Page,{children:[e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumbs",children:[e.jsx(d,{to:"/home",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(d,{to:"/patients",children:"Healthcare"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{"aria-current":"page",children:"Imaging"})]}),e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"l",children:[e.jsx("div",{className:"iconCircle",children:e.jsx(w,{size:20,"aria-hidden":!0})}),e.jsxs("div",{children:[e.jsx("h1",{children:"Imaging"}),e.jsx("p",{children:"Viewer-ready studies from multiple modalities with clean deep links and premium display."})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{title:"Build time",children:["Build: ",y(U)]}),e.jsxs("span",{title:"Last commit time",children:["Last commit: ",y(D)]})]})]}),e.jsxs("section",{className:"toolbar",children:[e.jsxs("div",{className:"searchBox",children:[e.jsx(H,{size:18,className:"ico","aria-hidden":!0}),e.jsx("input",{value:l,onChange:t=>p(t.target.value),placeholder:"Search (study id, patient, modality, body part)…","aria-label":"Search studies"})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"seg",children:[e.jsx("button",{className:`chip ${o==="all"?"on":""}`,onClick:()=>h("all"),children:"All"}),e.jsx("button",{className:`chip ${o==="final"?"on":""}`,onClick:()=>h("final"),children:"Final"}),e.jsx("button",{className:`chip ${o==="preliminary"?"on":""}`,onClick:()=>h("preliminary"),children:"Preliminary"})]}),e.jsx("div",{className:"seg",children:["all","CT","MRI","XR","USG","MAMMO"].map(t=>e.jsx("button",{className:`chip ${x===t?"on":""}`,onClick:()=>$(t),children:t},t))})]}),e.jsxs("div",{className:"acts",children:[e.jsxs("button",{className:"btn ghost",onClick:C,title:"Print visible list",children:[e.jsx(R,{size:16})," Print"]}),e.jsxs("button",{className:"btn ghost",onClick:B,title:"Download as CSV",children:[e.jsx(K,{size:16})," Export"]}),e.jsxs("button",{className:"btn primary",disabled:te,onClick:()=>k(!0),title:"Create imaging study (disabled in demo)",children:[e.jsx(V,{size:16})," New Study"]})]})]}),e.jsxs("section",{className:"quickLinks",children:[e.jsxs(d,{to:"/patients",className:"ql",children:[e.jsx(M,{})," Patients"]}),e.jsxs(d,{to:"/appointments",className:"ql",children:[e.jsx(I,{})," Appointments"]}),e.jsxs(d,{to:"/labs",className:"ql",children:[e.jsx(z,{})," Labs"]}),e.jsxs(d,{to:"/reports",className:"ql",children:[e.jsx(Y,{})," Reports"]}),e.jsxs(d,{to:"/imaging",className:"ql active",children:[e.jsx(w,{})," Imaging"]})]}),e.jsxs("section",{ref:P,id:"search-print-area",className:"tableWrap",children:[e.jsxs("div",{className:"subhead",children:[e.jsxs("span",{children:[A.length," studies"]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Showing: ",o==="all"?"All":o==="final"?"Final":"Preliminary"]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Modality: ",x]})]}),e.jsx("div",{className:"scroll",children:e.jsxs("table",{className:"grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Study"}),e.jsx("th",{children:"Patient"}),e.jsx("th",{children:"Modality"}),e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Images"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Performed"}),e.jsx("th",{children:"Reported"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"w120",children:"Actions"})]})}),e.jsx("tbody",{children:A.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{className:"sticky",children:[e.jsx(d,{className:"idLink",to:`/imaging/${encodeURIComponent(t.id)}`,title:"Open study detail",children:t.id}),e.jsxs("div",{className:"metaRow",children:[e.jsx(I,{"aria-hidden":!0})," ",y(t.createdAt)]})]}),e.jsx("td",{children:e.jsx(d,{to:`/patients/${encodeURIComponent(t.patient.id)}`,className:"plain",children:e.jsxs("div",{className:"patient",children:[e.jsx("span",{className:"avatar","aria-hidden":!0,children:t.patient.name[0]}),e.jsx("span",{className:"name",children:t.patient.name}),e.jsxs("span",{className:"muted",children:["(",t.patient.id,")"]})]})})}),e.jsx("td",{children:t.modality}),e.jsx("td",{children:t.bodyPart}),e.jsx("td",{children:t.images}),e.jsxs("td",{children:[e.jsx("div",{className:"dt",children:T(t.createdAt)}),e.jsx("div",{className:"tm",children:S(t.createdAt)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"dt",children:T(t.performedAt)}),e.jsx("div",{className:"tm",children:S(t.performedAt)})]}),e.jsx("td",{children:t.reportedAt?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dt",children:T(t.reportedAt)}),e.jsx("div",{className:"tm",children:S(t.reportedAt)})]}):e.jsx("span",{className:"muted",children:"—"})}),e.jsxs("td",{children:[e.jsx("span",{className:`badge ${t.status.toLowerCase()}`,children:t.status}),t.priority==="STAT"&&e.jsx("span",{className:"badge stat",children:"STAT"})]}),e.jsxs("td",{className:"acts",children:[e.jsxs(d,{to:`/imaging/${encodeURIComponent(t.id)}`,className:"btn tiny",children:[e.jsx(W,{})," View"]}),e.jsxs("button",{className:"btn tiny ghost",onClick:()=>k(!0),title:"Open viewer",children:[e.jsx(X,{})," Viewer"]}),e.jsx("button",{className:"btn tiny ghost",onClick:C,title:"Print this list",children:e.jsx(R,{})})]})]},t.id))})]})})]}),e.jsxs("section",{className:"navCards",children:[e.jsxs(d,{to:"/imaging",className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx(w,{})," All Studies"]}),e.jsx("p",{children:"Browse every study with filters, search, and deep links to detail pages."})]}),e.jsxs(d,{to:"/patients",className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx(M,{})," Patient Registry"]}),e.jsx("p",{children:"Open the patient’s timeline and navigate to labs, appointments, and prescriptions."})]}),e.jsxs(d,{to:"/reports",className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx(z,{})," Reporting"]}),e.jsx("p",{children:"Jump to report dashboards for sales, inventory, and finance."})]})]}),F&&e.jsx("div",{className:"modalBackdrop",role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"mHead",children:[e.jsx(_,{"aria-hidden":!0}),e.jsx("h3",{id:"demo-title",children:"Demo mode"})]}),e.jsx("div",{className:"mBody",children:"This is a display-only theme. Create/Update actions are disabled for a smooth walkthrough."}),e.jsx("div",{className:"mActs",children:e.jsx("button",{className:"btn",onClick:()=>k(!1),children:"Close"})})]})}),e.jsx("style",{children:`
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
      `})]})}export{ie as default};
