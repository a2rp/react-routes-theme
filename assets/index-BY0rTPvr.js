import{d as i,u as Q,a as W,r as p,j as e,N as s,L as M}from"./index-Dm9gfKqL.js";const d="var(--text)",l="var(--muted)",x="var(--card)",o="var(--border)",n="var(--accent)",L="var(--accent-soft)",q="var(--shadow)",_=i.div`
    width: 100%;
    color: ${d};
`,Y=i.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
    color: ${l};
    a {
        color: ${l};
    }
    a:hover {
        color: ${n};
    }
    strong {
        color: ${d};
    }
`,Z=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    .left {
        display: flex;
        align-items: baseline;
        gap: 14px;
        h1 {
            font-size: 22px;
            line-height: 1.2;
            margin: 0;
        }
        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    }

    .actions {
        display: flex;
        gap: 8px;
    }
`,P=i.span`
    background: ${x};
    border: 1px solid ${o};
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
`,b=i.button`
    background: ${x};
    border: 1px solid ${o};
    color: ${d};
    padding: 8px 12px;
    border-radius: 8px;
    transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.05s;
    &:hover {
        border-color: ${n};
        color: ${n};
        background: rgba(0, 0, 0, 0.08);
    }
    &:active {
        transform: translateY(1px);
    }
    &[disabled],
    &[aria-disabled="true"] {
        opacity: 0.55;
        cursor: not-allowed;
    }
    &[data-active="true"] {
        border-color: ${n};
        color: ${n};
    }
`,X=i.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        > *:last-child {
            order: -1;
        }
    }
`,ee=i.div`
    position: relative;
    input {
        width: 100%;
        height: 40px;
        background: ${x};
        color: ${d};
        border: 1px solid ${o};
        border-radius: 8px;
        padding: 0 42px 0 12px;
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    input::placeholder {
        color: ${l};
    }
    input:focus {
        border-color: ${n};
        box-shadow: 0 0 0 3px ${L};
        outline: none;
    }
    .clear {
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        width: 40px;
        border-left: 1px solid ${o};
        background: transparent;
        color: ${l};
        cursor: pointer;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .clear:hover {
        color: ${n};
        background: rgba(0, 0, 0, 0.06);
    }
`,te=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    label {
        display: flex;
        gap: 6px;
        align-items: center;
        color: ${l};
        font-size: 13px;
        select {
            height: 32px;
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${x};
            color: ${d};
            padding: 0 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        select:focus {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${L};
            outline: none;
        }
    }
`,ae=i.div`
    display: flex;
    gap: 10px;
    margin-left: 8px;
    a {
        padding: 6px 8px;
        border: 1px solid ${o};
        border-radius: 6px;
        background: ${x};
        color: ${l};
    }
    a:hover {
        border-color: ${n};
        color: ${n};
    }
`,ie=i.div`
    background: ${x};
    border: 1px solid ${o};
    border-radius: 12px;
    box-shadow: ${q};
    overflow: hidden;

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        z-index: 2;
        background: ${x};
        color: ${n};
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid ${o};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${o};
        vertical-align: top;
    }
    tbody tr {
        cursor: pointer;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody td.actions,
    thead th.actions {
        text-align: right;
    }

    .name .nameWrap {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .name .col {
        display: flex;
        flex-direction: column;
    }
    .muted {
        color: ${l};
    }
    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .rowActions {
        white-space: nowrap;
    }
`,se=i.div`
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.08),
        rgba(0, 0, 0, 0.18)
    );
    border: 1px solid ${o};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 0.5px;
`,ne=i.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.08);
    border: 1px solid ${o};
    color: ${d};
    font-size: 12px;
`,oe=i.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${o};
    color: ${d};
    background: ${({$kind:c})=>c==="Active"?"color-mix(in oklab, var(--accent) 14%, transparent)":"rgba(0,0,0,.08)"};
`,re=i.div`
    display: inline-flex;
    gap: 8px;
    a {
        color: ${l};
        text-decoration: none;
        border-bottom: 1px dashed transparent;
    }
    a:hover {
        color: ${n};
        border-bottom-color: ${n};
    }
`,le=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;

    .info {
        color: ${l};
    }
    .pager {
        display: flex;
        gap: 8px;
    }
`,de=i.div`
    padding: 40px 20px;
    text-align: center;
    color: ${l};
    h3 {
        color: ${d};
        margin-bottom: 6px;
    }
    .links {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 8px;
    }
    .links a {
        color: ${l};
        border-bottom: 1px dashed ${o};
    }
    .links a:hover {
        color: ${n};
        border-bottom-color: ${n};
    }
`,T=[{id:"PAT-1001",name:"Ananya Sharma",gender:"Female",age:29,dob:"1996-02-11",phone:"+91 98100 10001",email:"ananya.sharma@example.com",status:"Active",tags:["Prime","Insurance"],lastVisit:"2025-09-28T10:15:20+05:30",nextAppt:"2025-10-07T09:00:00+05:30"},{id:"PAT-1002",name:"Rohit Mehta",gender:"Male",age:41,dob:"1984-07-22",phone:"+91 98100 10002",email:"rohit.mehta@example.com",status:"Active",tags:["Diabetic"],lastVisit:"2025-09-30T16:40:05+05:30",nextAppt:"2025-10-05T18:30:00+05:30"},{id:"PAT-1003",name:"Sara Khan",gender:"Female",age:35,dob:"1990-12-03",phone:"+91 98100 10003",email:"sara.khan@example.com",status:"Inactive",tags:["Self-pay"],lastVisit:"2025-07-14T11:05:00+05:30",nextAppt:null},{id:"PAT-1004",name:"Vikram Singh",gender:"Male",age:52,dob:"1973-08-19",phone:"+91 98100 10004",email:"vikram.singh@example.com",status:"Active",tags:["Cardio"],lastVisit:"2025-09-25T13:25:00+05:30",nextAppt:"2025-10-11T12:15:00+05:30"},{id:"PAT-1005",name:"Meera Iyer",gender:"Female",age:46,dob:"1979-03-08",phone:"+91 98100 10005",email:"meera.iyer@example.com",status:"Active",tags:["Allergy"],lastVisit:"2025-09-10T15:00:00+05:30",nextAppt:null},{id:"PAT-1006",name:"Kunal Verma",gender:"Male",age:33,dob:"1992-05-16",phone:"+91 98100 10006",email:"kunal.verma@example.com",status:"Active",tags:["Prime"],lastVisit:"2025-09-29T10:45:00+05:30",nextAppt:"2025-10-08T10:00:00+05:30"},{id:"PAT-1007",name:"Priya Nair",gender:"Female",age:27,dob:"1998-01-24",phone:"+91 98100 10007",email:"priya.nair@example.com",status:"Active",tags:["ENT"],lastVisit:"2025-08-18T17:20:00+05:30",nextAppt:"2025-10-06T09:30:00+05:30"},{id:"PAT-1008",name:"Aman Gupta",gender:"Male",age:38,dob:"1987-04-02",phone:"+91 98100 10008",email:"aman.gupta@example.com",status:"Inactive",tags:["Orthopedic"],lastVisit:"2025-06-03T12:10:00+05:30",nextAppt:null},{id:"PAT-1009",name:"Ishita Roy",gender:"Female",age:31,dob:"1994-09-12",phone:"+91 98100 10009",email:"ishita.roy@example.com",status:"Active",tags:["Insurance"],lastVisit:"2025-09-21T09:05:00+05:30",nextAppt:"2025-10-09T14:00:00+05:30"},{id:"PAT-1010",name:"Arjun Desai",gender:"Male",age:45,dob:"1980-11-30",phone:"+91 98100 10010",email:"arjun.desai@example.com",status:"Active",tags:["Asthma"],lastVisit:"2025-09-12T08:50:00+05:30",nextAppt:null},{id:"PAT-1011",name:"Neha Bhat",gender:"Female",age:36,dob:"1989-02-18",phone:"+91 98100 10011",email:"neha.bhat@example.com",status:"Active",tags:["Derm"],lastVisit:"2025-09-26T19:20:00+05:30",nextAppt:"2025-10-10T16:10:00+05:30"},{id:"PAT-1012",name:"Siddharth Jain",gender:"Male",age:28,dob:"1997-06-07",phone:"+91 98100 10012",email:"sid.jain@example.com",status:"Active",tags:["Prime"],lastVisit:"2025-09-22T11:10:00+05:30",nextAppt:null},{id:"PAT-1013",name:"Riya Kapoor",gender:"Female",age:22,dob:"2003-10-01",phone:"+91 98100 10013",email:"riya.kapoor@example.com",status:"Active",tags:["Peds"],lastVisit:"2025-10-01T15:30:00+05:30",nextAppt:"2025-10-15T10:00:00+05:30"},{id:"PAT-1014",name:"Kabir Arora",gender:"Male",age:54,dob:"1971-12-21",phone:"+91 98100 10014",email:"kabir.arora@example.com",status:"Active",tags:["Cardio","Insurance"],lastVisit:"2025-09-05T09:40:00+05:30",nextAppt:"2025-10-20T09:00:00+05:30"},{id:"PAT-1015",name:"Simran Gill",gender:"Female",age:34,dob:"1991-08-13",phone:"+91 98100 10015",email:"simran.gill@example.com",status:"Inactive",tags:[],lastVisit:"2025-05-10T18:00:00+05:30",nextAppt:null},{id:"PAT-1016",name:"Aarav Joshi",gender:"Male",age:19,dob:"2006-03-17",phone:"+91 98100 10016",email:"aarav.joshi@example.com",status:"Active",tags:["Sports"],lastVisit:"2025-09-17T10:10:00+05:30",nextAppt:"2025-10-14T11:30:00+05:30"},{id:"PAT-1017",name:"Zoya Ahmed",gender:"Female",age:40,dob:"1985-01-05",phone:"+91 98100 10017",email:"zoya.ahmed@example.com",status:"Active",tags:["ENT","Insurance"],lastVisit:"2025-09-08T12:35:00+05:30",nextAppt:null},{id:"PAT-1018",name:"Mohit Rao",gender:"Male",age:47,dob:"1978-06-29",phone:"+91 98100 10018",email:"mohit.rao@example.com",status:"Active",tags:["Neuro"],lastVisit:"2025-08-29T14:05:00+05:30",nextAppt:"2025-10-19T15:00:00+05:30"},{id:"PAT-1019",name:"Tara Menon",gender:"Female",age:60,dob:"1965-02-10",phone:"+91 98100 10019",email:"tara.menon@example.com",status:"Active",tags:["Prime"],lastVisit:"2025-07-30T10:00:00+05:30",nextAppt:null},{id:"PAT-1020",name:"Dev Patel",gender:"Male",age:30,dob:"1995-09-05",phone:"+91 98100 10020",email:"dev.patel@example.com",status:"Active",tags:["Allergy"],lastVisit:"2025-09-15T16:20:00+05:30",nextAppt:"2025-10-12T09:30:00+05:30"},{id:"PAT-1021",name:"Nisha Kulkarni",gender:"Female",age:26,dob:"1999-04-23",phone:"+91 98100 10021",email:"nisha.kulkarni@example.com",status:"Active",tags:["Derm"],lastVisit:"2025-09-03T11:00:00+05:30",nextAppt:null},{id:"PAT-1022",name:"Harsh Vardhan",gender:"Male",age:37,dob:"1988-10-11",phone:"+91 98100 10022",email:"harsh.vardhan@example.com",status:"Inactive",tags:[],lastVisit:"2025-03-18T13:50:00+05:30",nextAppt:null},{id:"PAT-1023",name:"Aisha Qureshi",gender:"Female",age:32,dob:"1993-01-29",phone:"+91 98100 10023",email:"aisha.qureshi@example.com",status:"Active",tags:["Prime"],lastVisit:"2025-09-27T09:10:00+05:30",nextAppt:"2025-10-16T12:00:00+05:30"},{id:"PAT-1024",name:"Rohan Kapoor",gender:"Male",age:43,dob:"1982-05-14",phone:"+91 98100 10024",email:"rohan.kapoor@example.com",status:"Active",tags:["Cardio"],lastVisit:"2025-09-20T08:40:00+05:30",nextAppt:null}],R=!0,w=c=>{try{return new Date(c).toDateString()}catch{return""}},I=c=>{try{const v=new Date(c),y=String(v.getHours()).padStart(2,"0"),h=String(v.getMinutes()).padStart(2,"0"),A=String(v.getSeconds()).padStart(2,"0");return`${y}:${h}:${A}hrs`}catch{return""}};function pe(){const c=Q(),{search:v}=W(),y=p.useRef(null),[h,A]=p.useState(""),[$,D]=p.useState("All"),[f,F]=p.useState("All"),[E,m]=p.useState(1),k=10,g=p.useMemo(()=>{const t=h.trim().toLowerCase().split(/\s+/).filter(Boolean);return T.filter(a=>{const r=[a.id,a.name,a.email,a.phone,a.tags.join(" "),a.status,a.gender].join(" ").toLowerCase(),G=t.length===0||t.every(J=>r.includes(J)),H=$==="All"||a.status===$,K=f==="All"||a.gender===f;return G&&H&&K})},[h,$,f]),N=T.length,S=T.filter(t=>t.status==="Active").length,V=T.filter(t=>!!t.nextAppt).length,j=Math.max(1,Math.ceil(g.length/k)),u=Math.min(E,j),C=p.useMemo(()=>{const t=(u-1)*k;return g.slice(t,t+k)},[g,u]),U=t=>c(`/patients/${t}`),z=()=>A(""),B=()=>{const t=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download="patients.json",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(a)},O=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)};return e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"›"}),e.jsx(s,{to:"/patients",children:"Healthcare"}),e.jsx("span",{children:"›"}),e.jsx("strong",{children:"Patients"})]}),e.jsxs(Z,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Patients"}),e.jsxs("div",{className:"meta",children:[e.jsxs(P,{title:`${N} total`,children:[N," total"]}),e.jsxs(P,{title:`${S} active`,children:[S," active"]}),e.jsxs(P,{title:`${V} with upcoming`,children:[V," upcoming"]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx(b,{title:"Demo mode",disabled:R,"aria-disabled":R,children:"New Patient"}),e.jsx(b,{onClick:B,children:"Export JSON"}),e.jsx(b,{onClick:O,children:"Print"})]})]}),e.jsxs(X,{children:[e.jsxs(ee,{children:[e.jsx("input",{ref:y,type:"text",placeholder:"Search name, phone, email, tag…",value:h,onChange:t=>{A(t.target.value),m(1)},"aria-label":"Search patients"}),h.trim()&&e.jsx("button",{className:"clear",onClick:z,"aria-label":"Clear search",children:"×"})]}),e.jsxs(te,{children:[e.jsxs("label",{children:["Status",e.jsxs("select",{value:$,onChange:t=>{D(t.target.value),m(1)},children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("label",{children:["Gender",e.jsxs("select",{value:f,onChange:t=>{F(t.target.value),m(1)},children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Female"}),e.jsx("option",{children:"Male"})]})]}),e.jsxs(ae,{children:[e.jsx(s,{to:"/appointments",title:"Appointments",children:"Appointments"}),e.jsx(s,{to:"/prescriptions",title:"Prescriptions",children:"Prescriptions"}),e.jsx(s,{to:"/labs",title:"Labs",children:"Labs"}),e.jsx(s,{to:"/imaging",title:"Imaging",children:"Imaging"}),e.jsx(s,{to:"/reports/customers",title:"Patient reports",children:"Reports"})]})]})]}),e.jsx("div",{id:"search-print-area",children:e.jsxs(ie,{children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Patient"}),e.jsx("th",{children:"Gender"}),e.jsx("th",{children:"DOB"}),e.jsx("th",{children:"Age"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Visit"}),e.jsx("th",{children:"Next Appt"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsx("tbody",{children:C.map(t=>e.jsxs("tr",{onClick:()=>U(t.id),role:"button",children:[e.jsx("td",{children:e.jsx(M,{to:`/patients/${t.id}`,onClick:a=>a.stopPropagation(),children:t.id})}),e.jsx("td",{className:"name",children:e.jsxs("div",{className:"nameWrap",children:[e.jsx(se,{children:t.name.split(" ").map(a=>a[0]).slice(0,2).join("").toUpperCase()}),e.jsxs("div",{className:"col",children:[e.jsx(M,{to:`/patients/${t.id}`,onClick:a=>a.stopPropagation(),children:t.name}),e.jsx("small",{children:t.email})]})]})}),e.jsx("td",{children:t.gender}),e.jsx("td",{children:w(t.dob)}),e.jsx("td",{children:t.age}),e.jsx("td",{children:t.phone}),e.jsx("td",{className:"muted",children:t.email}),e.jsx("td",{children:e.jsx(oe,{$kind:t.status,children:t.status})}),e.jsx("td",{children:t.lastVisit?e.jsxs("div",{children:[e.jsx("div",{children:w(t.lastVisit)}),e.jsx("small",{className:"muted",children:I(t.lastVisit)})]}):e.jsx("span",{className:"muted",children:"—"})}),e.jsx("td",{children:t.nextAppt?e.jsxs("div",{children:[e.jsx("div",{children:w(t.nextAppt)}),e.jsx("small",{className:"muted",children:I(t.nextAppt)})]}):e.jsx("span",{className:"muted",children:"—"})}),e.jsx("td",{className:"tags",children:t.tags.length?t.tags.map(a=>e.jsx(ne,{children:a},a)):e.jsx("span",{className:"muted",children:"—"})}),e.jsx("td",{className:"rowActions",onClick:a=>a.stopPropagation(),children:e.jsxs(re,{children:[e.jsx(s,{to:`/patients/${t.id}`,children:"View"}),e.jsx(s,{to:`/patients/${t.id}/visits`,children:"Visits"}),e.jsx(s,{to:`/appointments?patient=${encodeURIComponent(t.id)}`,children:"Appts"}),e.jsx(s,{to:`/prescriptions?patient=${encodeURIComponent(t.id)}`,children:"Rx"}),e.jsx(s,{to:`/labs?patient=${encodeURIComponent(t.id)}`,children:"Labs"}),e.jsx(s,{to:`/imaging?patient=${encodeURIComponent(t.id)}`,children:"Imaging"})]})})]},t.id))})]}),g.length===0&&e.jsxs(de,{children:[e.jsx("h3",{children:"No patients match your filters"}),e.jsx("p",{children:"Try clearing the search or switching status/gender filters."}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/patients",children:"Reset"}),e.jsx(s,{to:"/help",children:"Help Center"})]})]})]})}),e.jsxs(le,{children:[e.jsxs("div",{className:"info",children:["Page ",u," of ",j," · Showing ",C.length," of ",g.length]}),e.jsxs("div",{className:"pager",children:[e.jsx(b,{onClick:()=>m(t=>Math.max(1,t-1)),disabled:u===1,children:"Prev"}),Array.from({length:j}).slice(0,6).map((t,a)=>{const r=a+1;return e.jsx(b,{onClick:()=>m(r),"data-active":r===u?"true":"false",children:r},r)}),e.jsx(b,{onClick:()=>m(t=>Math.min(j,t+1)),disabled:u===j,children:"Next"})]})]}),e.jsx("style",{children:`
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
      `})]})}export{pe as default};
