import{d as j,r as u,a as Y,j as e,L as i}from"./index-P_7RwasD.js";const B="var(--bg, #0d1117)",$="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",h="var(--card, #111318)",l="var(--border, #23262d)",r="var(--accent, #5aa9ff)",V="var(--accent-soft, rgba(90,169,255,0.15))",v={Page:j.div`
        width: 100%;
        color: ${$};
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,Toolbar:j.div`
        position: sticky;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        background: ${B};
        border: 1px solid ${l};
        border-radius: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
        }
        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .titleBlock h1 {
            font-size: 20px;
            line-height: 1.2;
            letter-spacing: 0.2px;
        }
        .titleBlock .sub {
            color: ${b};
            font-size: 12px;
        }

        .segment {
            display: inline-flex;
            border: 1px solid ${l};
            border-radius: 10px;
            overflow: hidden;
            height: 34px;
        }
        .segment button {
            background: ${h};
            border: none;
            padding: 0 12px;
            font-weight: 600;
            letter-spacing: 0.2px;
            border-right: 1px solid ${l};
        }
        .segment button:last-child {
            border-right: 0;
        }
        .segment button.on {
            color: ${r};
            outline: none;
            box-shadow: 0 0 0 3px ${V} inset;
        }

        .nav {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .nav .period {
            color: ${b};
            padding-left: 6px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .links {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links .link {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${l};
            border-radius: 8px;
            background: ${h};
            text-decoration: none;
            color: ${$};
        }
        .links .link:hover {
            color: ${r};
            border-color: ${r};
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .actions button {
            height: 34px;
        }

        .copied {
            font-size: 12px;
            color: ${r};
            border: 1px solid ${l};
            padding: 4px 8px;
            border-radius: 6px;
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
    `,Legend:j.div`
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 8px 12px;
        border: 1px solid ${l};
        border-radius: 10px;
        background: ${h};
        color: ${b};
        font-size: 12px;

        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 6px;
            border: 1px solid ${l};
            vertical-align: middle;
        }
        .confirmed {
            background: color-mix(in oklab, ${r} 45%, transparent);
        }
        .tentative {
            background: color-mix(in oklab, ${r} 20%, transparent);
        }
        .cancelled {
            background: #444;
        }
    `,Month:j.div`
        border: 1px solid ${l};
        border-radius: 12px;
        background: ${h};
        overflow: hidden;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .head {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            border-bottom: 1px solid ${l};
            background: color-mix(in oklab, ${h} 96%, transparent);
        }
        .colHead {
            padding: 10px;
            font-weight: 700;
            color: ${r};
            letter-spacing: 0.4px;
            border-right: 1px solid ${l};
        }
        .colHead:last-child {
            border-right: 0;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-auto-rows: 140px;
        }

        .cell {
            position: relative;
            padding: 8px;
            border-right: 1px solid ${l};
            border-bottom: 1px solid ${l};
            background: ${h};
            transition: background 0.2s ease;
            outline: none;
        }
        .cell:hover {
            background: rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
        .cell.dim {
            opacity: 0.55;
        }
        .cell.active {
            box-shadow: inset 0 0 0 2px ${r};
        }

        .date {
            position: absolute;
            top: 6px;
            right: 8px;
            font-weight: 700;
            color: ${b};
            font-size: 12px;
        }

        .events {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 18px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: color-mix(in oklab, ${r} 12%, transparent);
            color: ${$};
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .chip:hover {
            color: ${r};
            border-color: ${r};
        }
        .chip .time {
            font-weight: 700;
        }
        .chip.tentative {
            background: color-mix(in oklab, ${r} 8%, transparent);
            border-style: dashed;
        }
        .chip.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }
    `,Day:j.div`
        border: 1px solid ${l};
        border-radius: 12px;
        background: ${h};
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .dayHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-bottom: 1px solid ${l};
            background: color-mix(in oklab, ${h} 96%, transparent);
        }
        .dayHead .when h2 {
            font-size: 18px;
            line-height: 1.2;
        }
        .dayHead .when .meta {
            color: ${b};
            font-size: 12px;
        }
        .dayHead .links {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .dayHead .lnk {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${l};
            border-radius: 8px;
            background: ${h};
            text-decoration: none;
            color: ${$};
        }
        .dayHead .lnk:hover {
            color: ${r};
            border-color: ${r};
        }

        .list {
            display: flex;
            flex-direction: column;
        }
        .row {
            display: grid;
            grid-template-columns: 180px 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-bottom: 1px solid ${l};
        }
        .row:last-child {
            border-bottom: 0;
        }

        .row .time {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .row .summary .title {
            color: ${$};
            text-decoration: none;
            font-weight: 700;
        }
        .row .summary .title:hover {
            color: ${r};
        }
        .row .summary .meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            color: ${b};
            font-size: 12px;
            margin-top: 4px;
        }
        .row .summary .meta a {
            color: inherit;
            text-decoration: none;
        }
        .row .summary .meta a:hover {
            color: ${r};
        }

        .row.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }

        .actions {
            display: inline-flex;
            gap: 8px;
        }
        .actions .btn {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${l};
            border-radius: 8px;
            background: ${h};
            text-decoration: none;
            color: ${$};
        }
        .actions .btn:hover {
            color: ${r};
            border-color: ${r};
        }

        @media (max-width: 900px) {
            .row {
                grid-template-columns: 1fr;
                align-items: flex-start;
            }
            .actions {
                justify-content: flex-start;
            }
        }

        .empty {
            padding: 20px;
            color: ${b};
            text-align: center;
        }
    `,FooterNav:j.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${l};
        border-radius: 12px;
        background: ${h};
        padding: 10px 12px;
        color: ${b};
        font-size: 12px;

        .group {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .group .lnk {
            color: ${$};
            text-decoration: none;
            border: 1px solid ${l};
            border-radius: 8px;
            background: ${h};
            padding: 4px 8px;
        }
        .group .lnk:hover {
            color: ${r};
            border-color: ${r};
        }
    `},R=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=t=>String(t).padStart(2,"0"),S=t=>`${R[t.getDay()]} ${C[t.getMonth()]} ${g(t.getDate())} ${t.getFullYear()}`,w=t=>`${g(t.getHours())}:${g(t.getMinutes())}:${g(t.getSeconds())}hrs`,G=t=>`${S(t)} ${w(t)}`,M=t=>{const a=t.getFullYear(),n=g(t.getMonth()+1),m=g(t.getDate()),s=g(t.getHours()),p=g(t.getMinutes()),c=g(t.getSeconds());return`${a}${n}${m}T${s}${p}${c}`},I=[{id:"APP-1001",title:"Consultation · Fever & Headache",patient:{id:"PAT-2001",name:"Riya Sharma"},doctor:{id:"USR-88",name:"Dr. A. Kapoor"},room:"OPD 3",status:"confirmed",startISO:"2025-10-04T09:30:00+05:30",endISO:"2025-10-04T10:00:00+05:30"},{id:"APP-1002",title:"Follow-up · BP Review",patient:{id:"PAT-2002",name:"Manish Gupta"},doctor:{id:"USR-92",name:"Dr. S. Malik"},room:"OPD 1",status:"confirmed",startISO:"2025-10-04T11:00:00+05:30",endISO:"2025-10-04T11:20:00+05:30"},{id:"APP-1003",title:"New Patient Registration",patient:{id:"PAT-2003",name:"Ananya Bose"},doctor:{id:"USR-88",name:"Dr. A. Kapoor"},room:"Reception",status:"tentative",startISO:"2025-10-05T10:30:00+05:30",endISO:"2025-10-05T10:45:00+05:30"},{id:"APP-1004",title:"Lab Report Discussion",patient:{id:"PAT-2004",name:"Raghav Verma"},doctor:{id:"USR-88",name:"Dr. A. Kapoor"},room:"OPD 2",status:"confirmed",startISO:"2025-10-06T16:00:00+05:30",endISO:"2025-10-06T16:20:00+05:30"},{id:"APP-1005",title:"Prescription Review",patient:{id:"PAT-2005",name:"Meera Saxena"},doctor:{id:"USR-92",name:"Dr. S. Malik"},room:"Telehealth",status:"cancelled",startISO:"2025-10-07T12:00:00+05:30",endISO:"2025-10-07T12:30:00+05:30"},{id:"APP-1006",title:"Diabetes Diet Counselling",patient:{id:"PAT-2006",name:"Sanjay Patil"},doctor:{id:"USR-95",name:"Dietician P. Rao"},room:"Nutrition",status:"confirmed",startISO:"2025-10-08T09:15:00+05:30",endISO:"2025-10-08T09:45:00+05:30"}];function K(t,a){const m=new Date(t,a,1).getDay();new Date(t,a+1,0).getDate();const s=[];let p=1-m;for(let c=0;c<42;c++,p++)s.push(new Date(t,a,p));return s}function J(t){const a=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Demo ERP//Appointments//EN"];t.forEach(p=>{const c=new Date(p.startISO),d=new Date(p.endISO);a.push("BEGIN:VEVENT"),a.push(`UID:${p.id}@demo-erp`),a.push(`DTSTAMP:${M(new Date)}`),a.push(`DTSTART:${M(c)}`),a.push(`DTEND:${M(d)}`),a.push(`SUMMARY:${p.title}`),a.push(`LOCATION:${p.room||""}`),a.push(`DESCRIPTION:Patient ${p.patient.name} with ${p.doctor.name}`),a.push("END:VEVENT")}),a.push("END:VCALENDAR");const n=new Blob([a.join(`\r
`)],{type:"text/calendar;charset=utf-8"}),m=URL.createObjectURL(n),s=document.createElement("a");s.href=m,s.download="appointments.ics",document.body.appendChild(s),s.click(),s.remove(),URL.revokeObjectURL(m)}const X=()=>{const[t,a]=u.useState(2025),[n,m]=u.useState(9),[s,p]=u.useState("month"),[c,d]=u.useState(()=>new Date(2025,9,4)),[P,N]=u.useState(!1);Y();const T=u.useMemo(()=>K(t,n),[t,n]),D=`${C[n]} ${t}`,y=u.useMemo(()=>{const o=new Map;return I.forEach(x=>{const k=new Date(x.startISO),A=`${k.getFullYear()}-${k.getMonth()}-${k.getDate()}`;o.has(A)||o.set(A,[]),o.get(A).push(x)}),o},[]),f=(o,x)=>o.getFullYear()===x.getFullYear()&&o.getMonth()===x.getMonth()&&o.getDate()===x.getDate(),O=new Date,E=()=>{if(s==="month"){let o=t,x=n-1;x<0&&(x=11,o-=1),a(o),m(x)}else{const o=new Date(c);o.setDate(o.getDate()-1),d(o)}},L=()=>{if(s==="month"){let o=t,x=n+1;x>11&&(x=0,o+=1),a(o),m(x)}else{const o=new Date(c);o.setDate(o.getDate()+1),d(o)}},F=()=>{s==="month"?(a(O.getFullYear()),m(O.getMonth())):d(new Date)},H=u.useMemo(()=>{const o=`${c.getFullYear()}-${c.getMonth()}-${c.getDate()}`;return(y.get(o)||[]).slice().sort((x,k)=>+new Date(x.startISO)-+new Date(k.startISO))},[y,c]),z=async()=>{try{await navigator.clipboard.writeText(window.location.href),N(!0),setTimeout(()=>N(!1),1500)}catch{}},U=()=>{const o=document.body;o.classList.add("print-section-mode"),window.requestAnimationFrame(()=>{window.print(),window.setTimeout(()=>o.classList.remove("print-section-mode"),300)})};return e.jsxs(v.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(v.Toolbar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleBlock",children:[e.jsx("h1",{children:"Appointment Calendar"}),e.jsxs("span",{className:"sub",children:["Deep-link friendly · Display-only · ",S(new Date)]})]}),e.jsxs("div",{className:"segment",children:[e.jsx("button",{className:s==="month"?"on":"",onClick:()=>p("month"),"aria-pressed":s==="month",title:"Month view",children:"Month"}),e.jsx("button",{className:s==="day"?"on":"",onClick:()=>p("day"),"aria-pressed":s==="day",title:"Day agenda view",children:"Day"})]}),e.jsxs("div",{className:"nav",children:[e.jsx("button",{onClick:E,title:"Previous",children:"‹"}),e.jsx("button",{onClick:F,title:"Go to Today",children:"Today"}),e.jsx("button",{onClick:L,title:"Next",children:"›"}),e.jsx("span",{className:"period",children:s==="month"?D:S(c)})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/appointments",className:"link",children:"All Appointments"}),e.jsx(i,{to:"/patients",className:"link",children:"Patients"}),e.jsx(i,{to:"/prescriptions",className:"link",children:"Prescriptions"}),e.jsx(i,{to:"/labs",className:"link",children:"Labs"}),e.jsx(i,{to:"/imaging",className:"link",children:"Imaging"}),e.jsx(i,{to:"/reports/sales",className:"link",children:"Reports"}),e.jsx(i,{to:"/help",className:"link",children:"Help"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"New Appointment"}),e.jsx("button",{onClick:()=>J(I),title:"Export iCal",children:"Export ICS"}),e.jsx("button",{onClick:z,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:U,title:"Print this view",children:"Print"})]}),P&&e.jsx("span",{className:"copied",children:"Link copied"})]})]}),e.jsxs(v.Legend,{role:"note","aria-label":"Legend",children:[e.jsx("span",{className:"dot confirmed"})," Confirmed",e.jsx("span",{className:"dot tentative"})," Tentative",e.jsx("span",{className:"dot cancelled"})," Cancelled"]}),e.jsx("div",{id:"search-print-area",children:s==="month"?e.jsx(q,{year:t,month:n,grid:T,selectedDate:c,onSelectDate:d,isSameDay:f,eventsByDay:y}):e.jsx(Q,{date:c,events:H})}),e.jsx(v.FooterNav,{children:e.jsxs("div",{className:"group",children:[e.jsx("span",{children:"Quick jump:"}),e.jsx(i,{to:"/appointments",className:"lnk",children:"Appointments"}),e.jsx(i,{to:"/appointments/APP-1001",className:"lnk",children:"/appointments/APP-1001"}),e.jsx(i,{to:"/patients/PAT-2001",className:"lnk",children:"/patients/PAT-2001"}),e.jsx(i,{to:"/admin/users/USR-88",className:"lnk",children:"/admin/users/USR-88"}),e.jsx(i,{to:"/reports/inventory",className:"lnk",children:"/reports/inventory"}),e.jsx(i,{to:"/settings/appearance",className:"lnk",children:"/settings/appearance"}),e.jsx(i,{to:"/tools/import-export",className:"lnk",children:"/tools/import-export"})]})})]})};function q({year:t,month:a,grid:n,selectedDate:m,onSelectDate:s,isSameDay:p,eventsByDay:c}){return e.jsxs(v.Month,{children:[e.jsx("div",{className:"head",children:R.map(d=>e.jsx("div",{className:"colHead",children:d},d))}),e.jsx("div",{className:"grid",role:"grid","aria-label":"Month grid",children:n.map((d,P)=>{const N=d.getMonth()===a&&d.getFullYear()===t,T=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,D=c.get(T)||[],y=p(d,m);return e.jsxs("div",{className:`cell ${N?"":"dim"} ${y?"active":""}`,role:"gridcell","aria-selected":y,onClick:()=>s(new Date(d)),tabIndex:0,onKeyDown:f=>(f.key==="Enter"||f.key===" ")&&s(new Date(d)),children:[e.jsx("div",{className:"date",children:g(d.getDate())}),D.length>0&&e.jsx("div",{className:"events",children:D.map(f=>e.jsx(W,{e:f},f.id))})]},P)})})]})}function Q({date:t,events:a}){return e.jsxs(v.Day,{children:[e.jsxs("div",{className:"dayHead",children:[e.jsxs("div",{className:"when",children:[e.jsx("h2",{children:S(t)}),e.jsxs("div",{className:"meta",children:["Generated at ",G(new Date)]})]}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/appointments",className:"lnk",children:"Back to Appointments"}),e.jsx(i,{to:"/appointments/calendar",className:"lnk",children:"Calendar"}),e.jsx(i,{to:"/patients",className:"lnk",children:"Patients"}),e.jsx(i,{to:"/help",className:"lnk",children:"Help"})]})]}),e.jsx("div",{className:"list",children:a.length===0?e.jsx("div",{className:"empty",children:"No appointments on this day."}):a.map(n=>e.jsxs("div",{className:`row ${n.status}`,children:[e.jsxs("div",{className:"time",children:[e.jsx("span",{children:w(new Date(n.startISO))})," – ",e.jsx("span",{children:w(new Date(n.endISO))})]}),e.jsxs("div",{className:"summary",children:[e.jsx(i,{to:`/appointments/${n.id}`,className:"title",children:n.title}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Patient: ",e.jsx(i,{to:`/patients/${n.patient.id}`,children:n.patient.name})]}),e.jsxs("span",{children:["Doctor: ",e.jsx(i,{to:`/admin/users/${n.doctor.id}`,children:n.doctor.name})]}),n.room?e.jsxs("span",{children:["Room: ",n.room]}):null]})]}),e.jsxs("div",{className:"actions",children:[e.jsx(i,{className:"btn",to:`/appointments/${n.id}`,children:"View"}),e.jsx(i,{className:"btn",to:"/prescriptions",children:"Prescription"}),e.jsx(i,{className:"btn",to:"/labs",children:"Lab"}),e.jsx(i,{className:"btn",to:"/imaging",children:"Imaging"})]})]},n.id))})]})}function W({e:t}){const a=new Date(t.startISO),n=new Date(t.endISO);return e.jsxs(i,{to:`/appointments/${t.id}`,className:`chip ${t.status}`,title:`${w(a)} – ${w(n)} · ${t.patient.name}`,children:[e.jsxs("span",{className:"time",children:[w(a),"–",w(n)]}),e.jsx("span",{className:"txt",children:t.patient.name})]})}export{X as default};
