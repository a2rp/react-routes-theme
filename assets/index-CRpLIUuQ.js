import{d as c,u as z,r as m,j as e,N as n,e as L,b as F,k as D,Y as B,o as X,L as h,w as U}from"./index-LshBDmDj.js";const d="var(--text, #f3f4f6)",j="var(--muted, #a0a0a7)",l="var(--card, #111318)",s="var(--border, #23262d)",t="var(--accent, #5aa9ff)",V="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",p={Page:c.div`
        width: 100%;
        color: ${d};
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 12px;
    `,HeaderBar:c.header`
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 16px;
        background: ${l};
        border: 1px solid ${s};
        border-radius: 12px;
        padding: 14px 16px;
        box-shadow: ${g};

        h2 {
            font-size: 22px;
            margin: 0 0 4px 0;
            line-height: 1.2;
        }

        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            padding: 2px 8px;
            background: color-mix(in oklab, ${t} 14%, transparent);
            border: 1px solid ${s};
            border-radius: 999px;
            color: ${d};
        }

        .quicklinks {
            display: flex;
            gap: 10px;
            a {
                padding: 6px 10px;
                border: 1px solid ${s};
                border-radius: 8px;
                background: color-mix(in oklab, ${l} 96%, transparent);
                text-decoration: none;
            }
            a:hover {
                border-color: ${t};
                color: ${t};
            }
            a.active {
                color: ${t};
                border-color: ${t};
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            button {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                border: 1px solid ${s};
                background: ${l};
                color: ${d};
                padding: 8px 12px;
                border-radius: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover {
                border-color: ${t};
                color: ${t};
                background: rgba(0, 0, 0, 0.08);
            }
            button[aria-disabled="true"] {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,Filters:c.section`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "search status"
            "hints hints";
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${l};
        box-shadow: ${g};

        .search {
            grid-area: search;
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${s};
            background: color-mix(in oklab, ${l} 96%, transparent);
            border-radius: 10px;
            padding: 8px 10px;
            svg {
                opacity: 0.9;
            }
            input {
                flex: 1;
                background: transparent;
                color: ${d};
                border: none;
                outline: none;
                font-size: 13px;
            }
            .clear {
                border: 1px solid ${s};
                background: transparent;
                color: ${j};
                border-radius: 6px;
                padding: 4px 6px;
            }
            .clear:hover {
                color: ${t};
                border-color: ${t};
            }
        }

        .statuses {
            grid-area: status;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                padding: 6px 10px;
                border: 1px solid ${s};
                background: transparent;
                color: ${d};
                border-radius: 8px;
            }
            button:hover {
                border-color: ${t};
                color: ${t};
            }
            button.active {
                border-color: ${t};
                color: ${t};
                box-shadow: 0 0 0 3px ${V};
            }
        }

        .hints {
            grid-area: hints;
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            color: ${j};
            font-size: 12px;
            svg {
                vertical-align: middle;
                margin-right: 4px;
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "search"
                "status"
                "hints";
        }
    `,TableWrap:c.div`
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${l};
        box-shadow: ${g};
        overflow: auto;

        table.rx {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;

            thead th {
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${l} 98%, transparent);
                color: ${d};
                text-align: left;
                padding: 12px;
                border-bottom: 1px solid ${s};
                z-index: 1;
            }

            tbody td {
                padding: 12px;
                border-bottom: 1px solid ${s};
                vertical-align: top;
            }

            tbody tr:hover {
                background: color-mix(in oklab, ${t} 8%, transparent);
            }

            .idlink {
                text-decoration: none;
                border: 1px dashed ${s};
                padding: 2px 6px;
                border-radius: 6px;
            }
            .idlink:hover {
                border-color: ${t};
                color: ${t};
            }

            .entity {
                text-decoration: none;
            }
            .entity:hover {
                color: ${t};
            }

            .muted {
                color: ${j};
                font-size: 12px;
            }

            ul.items {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 2px;
            }
            .pill {
                text-decoration: none;
                border-bottom: 1px dotted ${s};
            }
            .pill:hover {
                color: ${t};
                border-color: ${t};
            }

            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                font-size: 11px;
                padding: 2px 8px;
                border: 1px solid ${s};
                border-radius: 999px;
                background: color-mix(in oklab, ${l} 92%, transparent);
            }

            .status {
                padding: 4px 10px;
                border-radius: 999px;
                border: 1px solid ${s};
                font-size: 12px;
                display: inline-block;
                background: color-mix(in oklab, ${l} 94%, transparent);
            }
            .status.issued {
            }
            .status.dispensed {
            }
            .status.partially-dispensed {
            }
            .status.cancelled {
                opacity: 0.8;
                text-decoration: line-through;
            }

            .right {
                text-align: right;
            }

            .rowactions {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .ghost {
                background: transparent;
                border: 1px solid ${s};
                padding: 6px 8px;
                border-radius: 8px;
                text-decoration: none;
                color: ${d};
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .ghost:hover {
                border-color: ${t};
                color: ${t};
            }
            .ghost.danger:hover {
                color: #e35a5a;
                border-color: #e35a5a;
            }
            button.ghost {
                cursor: pointer;
            }
        }
    `,Empty:c.div`
        text-align: center;
        padding: 30px 10px;
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${j};
            margin-bottom: 12px;
        }
        .links {
            display: inline-flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .ghost {
            padding: 6px 10px;
            border: 1px solid ${s};
            border-radius: 8px;
            text-decoration: none;
            color: ${d};
            background: transparent;
        }
        .ghost:hover {
            color: ${t};
            border-color: ${t};
        }
    `,FooterBar:c.footer`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${l};
        box-shadow: ${g};

        .rlinks {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                padding: 6px 10px;
                border: 1px solid ${s};
                border-radius: 8px;
                text-decoration: none;
            }
            a:hover {
                color: ${t};
                border-color: ${t};
            }
        }
    `,ModalBackdrop:c.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
    `,ModalCard:c.div`
        width: min(460px, 92vw);
        background: ${l};
        border: 1px solid ${s};
        border-radius: 12px;
        box-shadow: ${g};
        padding: 0;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${s};
            h3 {
                margin: 0;
                font-size: 16px;
            }
            button {
                border: 1px solid ${s};
                background: transparent;
                color: ${d};
                border-radius: 8px;
                padding: 6px;
            }
            button:hover {
                color: ${t};
                border-color: ${t};
            }
        }
        .content {
            padding: 14px;
            color: ${d};
        }
        footer {
            padding: 12px 14px;
            border-top: 1px solid ${s};
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            button {
                border: 1px solid ${s};
                background: transparent;
                color: ${d};
                border-radius: 8px;
                padding: 8px 12px;
            }
            button:hover {
                color: ${t};
                border-color: ${t};
            }
        }
    `},N=[{id:"RX-2025-0001",dateISO:"2025-10-04T15:38:20+05:30",patient:{id:"PAT-1001",name:"Anita Sharma",age:34,gender:"F"},doctor:{id:"USR-45",name:"Dr. K. R. Singh",specialty:"Internal Medicine"},status:"Issued",items:[{id:"MED-AMOX-500",name:"Amoxicillin 500mg",dose:"1-0-1",days:5},{id:"MED-PCM-650",name:"Paracetamol 650mg",dose:"0-1-0",days:3}],tags:["Respiratory","Bacterial"]},{id:"RX-2025-0002",dateISO:"2025-10-03T11:05:12+05:30",patient:{id:"PAT-1008",name:"Vikram Iyer",age:52,gender:"M"},doctor:{id:"USR-31",name:"Dr. R. Mehta",specialty:"Cardiology"},status:"Dispensed",items:[{id:"MED-ATOR-20",name:"Atorvastatin 20mg",dose:"1-0-0",days:30}],tags:["Lipid","Long-term"]},{id:"RX-2025-0003",dateISO:"2025-10-02T09:20:40+05:30",patient:{id:"PAT-1015",name:"Priya Nand",age:28,gender:"F"},doctor:{id:"USR-45",name:"Dr. K. R. Singh",specialty:"Internal Medicine"},status:"Partially Dispensed",items:[{id:"MED-FEXO-120",name:"Fexofenadine 120mg",dose:"0-1-0",days:7},{id:"MED-MONT-10",name:"Montelukast 10mg",dose:"0-0-1",days:7}],tags:["Allergy"]},{id:"RX-2025-0004",dateISO:"2025-10-01T17:48:05+05:30",patient:{id:"PAT-1004",name:"Sanjay Kumar",age:41,gender:"M"},doctor:{id:"USR-12",name:"Dr. A. Verma",specialty:"Orthopedics"},status:"Cancelled",items:[{id:"MED-ETOR-90",name:"Etoricoxib 90mg",dose:"1-0-0",days:10}],tags:["Pain","Bone/Joint"]},{id:"RX-2025-0005",dateISO:"2025-09-30T10:02:33+05:30",patient:{id:"PAT-1012",name:"Ritu Chauhan",age:63,gender:"F"},doctor:{id:"USR-31",name:"Dr. R. Mehta",specialty:"Cardiology"},status:"Issued",items:[{id:"MED-METO-50",name:"Metoprolol 50mg",dose:"1-0-1",days:30},{id:"MED-ASA-75",name:"Aspirin 75mg",dose:"0-1-0",days:30}],tags:["Cardiac"]},{id:"RX-2025-0006",dateISO:"2025-09-30T08:40:10+05:30",patient:{id:"PAT-1007",name:"Aman Gupta",age:19,gender:"M"},doctor:{id:"USR-77",name:"Dr. S. Rao",specialty:"Dermatology"},status:"Issued",items:[{id:"MED-ISO-20",name:"Isotretinoin 20mg",dose:"1-0-0",days:21}],tags:["Skin"]},{id:"RX-2025-0007",dateISO:"2025-09-29T12:25:08+05:30",patient:{id:"PAT-1018",name:"Harish V",age:47,gender:"M"},doctor:{id:"USR-12",name:"Dr. A. Verma",specialty:"Orthopedics"},status:"Dispensed",items:[{id:"MED-D3-60K",name:"Vitamin D3 60K",dose:"once weekly",days:8}],tags:["Supplements"]},{id:"RX-2025-0008",dateISO:"2025-09-29T09:10:55+05:30",patient:{id:"PAT-1002",name:"Sunita Devi",age:38,gender:"F"},doctor:{id:"USR-77",name:"Dr. S. Rao",specialty:"Dermatology"},status:"Issued",items:[{id:"MED-AZI-500",name:"Azithromycin 500mg",dose:"1-0-0",days:3}],tags:["Derm Infection"]}],K=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=o=>String(o).padStart(2,"0"),R=o=>{const i=new Date(o);return`${K[i.getDay()]} ${W[i.getMonth()]} ${y(i.getDate())} ${i.getFullYear()}`},A=o=>{const i=new Date(o);return`${y(i.getHours())}:${y(i.getMinutes())}:${y(i.getSeconds())}hrs`},q=o=>`${R(o)} ${A(o)}`,$="Demo mode: action not available",H=({open:o,onClose:i,title:u="Action unavailable",message:x=$})=>o?e.jsx(p.ModalBackdrop,{role:"dialog","aria-modal":"true",children:e.jsxs(p.ModalCard,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:u}),e.jsx("button",{onClick:i,"aria-label":"Close modal",children:e.jsx(D,{size:18})})]}),e.jsx("div",{className:"content",children:e.jsx("p",{children:x})}),e.jsx("footer",{children:e.jsx("button",{onClick:i,children:"Okay"})})]})}):null,S=({children:o})=>e.jsx("span",{className:"chip",children:o});function _(){const o=z(),[i,u]=m.useState(""),[x,C]=m.useState("All"),[T,M]=m.useState(!1),b=m.useMemo(()=>{const a=i.trim().toLowerCase().split(/\s+/).filter(Boolean);return N.filter(r=>{const w=[r.id,r.patient.name,r.patient.id,r.doctor.name,r.doctor.specialty,...r.items.map(v=>v.name),...r.tags||[]].join(" ").toLowerCase(),P=a.length?a.every(v=>w.includes(v)):!0,E=x==="All"?!0:r.status===x;return P&&E})},[i,x]),f=m.useCallback(()=>M(!0),[]),O=m.useCallback(()=>M(!1),[]),I=m.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),250)}},[]),k=a=>`/prescriptions/${encodeURIComponent(a)}`;return e.jsxs(p.Page,{children:[e.jsxs(p.HeaderBar,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h2",{children:"Prescriptions"}),e.jsxs("div",{className:"meta",children:[e.jsxs(S,{children:[N.length," total"]}),e.jsxs(S,{children:["Showing ",b.length]}),e.jsxs(S,{children:["Updated ",q("2025-10-04T15:38:20+05:30")]})]})]}),e.jsxs("nav",{className:"quicklinks",children:[e.jsx(n,{to:"/patients",children:"Patients"}),e.jsx(n,{to:"/appointments",children:"Appointments"}),e.jsx(n,{to:"/appointments/calendar",children:"Calendar"}),e.jsx(n,{to:"/medicines",children:"Medicines"}),e.jsx(n,{to:"/labs",children:"Labs"}),e.jsx(n,{to:"/reports",children:"Reports"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:f,title:$,"aria-disabled":"true",children:"New Prescription"}),e.jsxs("button",{onClick:I,title:"Print this list section",children:[e.jsx(L,{size:16})," Print"]})]})]}),e.jsxs(p.Filters,{className:"card",children:[e.jsxs("div",{className:"search",children:[e.jsx(F,{size:18}),e.jsx("input",{type:"text",placeholder:"Search patient, doctor, medicine, tag…",value:i,onChange:a=>u(a.target.value),"aria-label":"Search prescriptions"}),i&&e.jsx("button",{className:"clear",onClick:()=>u(""),"aria-label":"Clear search",children:e.jsx(D,{size:16})})]}),e.jsx("div",{className:"statuses",role:"tablist","aria-label":"Filter by status",children:["All","Issued","Dispensed","Partially Dispensed","Cancelled"].map(a=>e.jsx("button",{role:"tab","aria-selected":x===a,className:x===a?"active":"",onClick:()=>C(a),children:a},a))}),e.jsxs("div",{className:"hints",children:[e.jsxs("span",{children:[e.jsx(B,{size:16})," Tip: open a patient, doctor, or medicine in a new tab for quick cross-check."]}),e.jsxs("span",{children:[e.jsx(X,{size:16})," Demo mode: create/edit/void actions are disabled."]})]})]}),e.jsx("style",{children:`
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
      `}),e.jsx("section",{id:"search-print-area",children:e.jsx(p.TableWrap,{className:"card",children:e.jsxs("table",{className:"rx",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"RX"}),e.jsx("th",{children:"Date / Time"}),e.jsx("th",{children:"Patient"}),e.jsx("th",{children:"Doctor"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsxs("tbody",{children:[b.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(h,{to:k(a.id),className:"idlink",children:a.id})}),e.jsxs("td",{children:[e.jsx("div",{className:"date",children:R(a.dateISO)}),e.jsx("div",{className:"time",children:A(a.dateISO)})]}),e.jsxs("td",{children:[e.jsx(h,{to:`/patients/${a.patient.id}`,className:"entity",children:a.patient.name}),e.jsxs("div",{className:"muted",children:[a.patient.id," • ",a.patient.gender," • ",a.patient.age,"y"]})]}),e.jsxs("td",{children:[e.jsx(h,{to:`/admin/users/${a.doctor.id}`,className:"entity",children:a.doctor.name}),e.jsx("div",{className:"muted",children:a.doctor.specialty})]}),e.jsxs("td",{children:[e.jsx("ul",{className:"items",children:a.items.map(r=>e.jsxs("li",{children:[e.jsx(h,{to:`/medicines/${r.id}`,className:"pill",children:r.name}),e.jsxs("span",{className:"muted",children:[" — ",r.dose," × ",r.days,"d"]})]},r.id))}),e.jsx("div",{className:"tags",children:(a.tags||[]).map(r=>e.jsx("span",{className:"tag",children:r},r))})]}),e.jsx("td",{children:e.jsx("span",{className:`status ${a.status.replace(/\s+/g,"-").toLowerCase()}`,children:a.status})}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"rowactions",children:[e.jsxs(h,{to:k(a.id),className:"ghost",children:["Open ",e.jsx(U,{size:14})]}),e.jsx("button",{onClick:()=>o(`${k(a.id)}`),className:"ghost",children:"View"}),e.jsx("button",{onClick:f,className:"ghost","aria-disabled":"true",title:$,children:"Edit"}),e.jsx("button",{onClick:f,className:"ghost danger","aria-disabled":"true",title:$,children:"Void"})]})})]},a.id)),b.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsxs(p.Empty,{children:[e.jsx("h3",{children:"No prescriptions match your search"}),e.jsx("p",{children:"Try adjusting the status filter or clearing your search."}),e.jsxs("div",{className:"links",children:[e.jsx(n,{to:"/patients",className:"ghost",children:"Browse Patients"}),e.jsx(n,{to:"/medicines",className:"ghost",children:"Browse Medicines"}),e.jsx(n,{to:"/appointments",className:"ghost",children:"View Appointments"})]})]})})})]})]})})}),e.jsxs(p.FooterBar,{className:"card",children:[e.jsx("div",{className:"left",children:e.jsxs("span",{children:["Showing ",b.length," of ",N.length]})}),e.jsxs("div",{className:"rlinks",children:[e.jsx(n,{to:"/reports/sales",children:"Sales Report"}),e.jsx(n,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(n,{to:"/reports/customers",children:"Customer Report"}),e.jsx(n,{to:"/labs",children:"Lab Orders"}),e.jsx(n,{to:"/imaging",children:"Imaging"})]})]}),e.jsx(H,{open:T,onClose:O})]})}export{_ as default};
