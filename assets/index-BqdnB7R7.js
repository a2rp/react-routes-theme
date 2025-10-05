import{d as p,u as S,r as u,j as e,N as T,L as i}from"./index-DwhKQ_MC.js";const d="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",n="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",x={Page:p.div`
        width: 100%;
        color: ${d};
    `,HeaderBar:p.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        border: 1px solid ${r};
        border-radius: 12px;
        background: ${n};
        box-shadow: ${g};
        margin-bottom: 14px;

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            a {
                color: ${o};
                text-decoration: none;
            }
            a:hover {
                color: ${a};
            }
            .sep {
                color: ${o};
            }
        }

        .headerRight {
            display: flex;
            gap: 8px;
        }

        .btn {
            border: 1px solid ${r};
            background: ${n};
            color: ${d};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                color 0.2s ease;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);

            &:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${f};
            }

            &.outline {
                background: transparent;
            }
            &.subtle {
                color: ${o};
            }
        }
    `,TopStrip:p.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-bottom: 12px;

        .metrics {
            display: grid;
            grid-template-columns: repeat(6, minmax(120px, 1fr));
            gap: 10px;
        }
        .card {
            background: ${n};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 12px 14px;
            box-shadow: ${g};
        }
        .k {
            color: ${o};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .v {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            letter-spacing: 0.3px;
        }

        .quickLinks {
            display: flex;
            gap: 8px;
            align-items: stretch;
        }
        .quickLinks .ql {
            display: inline-flex;
            align-items: center;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${n} 92%, transparent);
            padding: 8px 12px;
            border-radius: 10px;
            text-decoration: none;
            color: ${o};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .quickLinks .ql:hover {
            color: ${a};
            border-color: ${a};
            background: color-mix(in oklab, ${a} 12%, transparent);
        }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
            .metrics {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 700px) {
            .metrics {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `,Grid:p.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Side:p.aside`
        border: 1px solid ${r};
        border-radius: 12px;
        background: ${n};
        padding: 12px;
        box-shadow: ${g};
        align-self: start;

        .searchBox {
            position: relative;
            margin-bottom: 12px;
        }
        .searchBox input {
            width: 100%;
            height: 38px;
            background: ${n};
            border: 1px solid ${r};
            color: ${d};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .searchBox input::placeholder {
            color: ${o};
        }
        .searchBox input:focus {
            outline: none;
            border-color: ${a};
            box-shadow: 0 0 0 3px ${f};
        }

        .section {
            margin-top: 14px;
        }
        .sectionTitle {
            font-size: 12px;
            color: ${o};
            margin-bottom: 8px;
            padding: 0 2px;
            user-select: none;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${r};
            background: color-mix(in oklab, ${n} 94%, transparent);
            color: ${o};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, box-shadow 0.2s ease;
            font-size: 12px;
        }
        .chip:hover {
            color: ${a};
            border-color: ${a};
            background: color-mix(in oklab, ${a} 10%, transparent);
            box-shadow: 0 0 0 3px ${f};
        }
        .chip.active {
            color: ${a};
            border-color: ${a};
            background: color-mix(in oklab, ${a} 12%, transparent);
        }

        .links {
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${o};
            text-decoration: none;
            padding: 6px 8px;
            border-radius: 8px;
            transition: background 0.2s ease, color 0.2s ease;
        }
        .links a:hover {
            color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
    `,Main:p.main`
        border: 1px solid ${r};
        border-radius: 12px;
        background: ${n};
        padding: 12px;
        box-shadow: ${g};
        overflow: hidden;
    `,TableWrap:p.div`
        width: 100%;
        overflow: auto;

        table.labs {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${n};
            color: ${a};
            text-align: left;
            padding: 12px 10px;
            border-bottom: 1px solid ${r};
            z-index: 1;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${n} 86%, transparent);
        }

        .idcell .id {
            color: ${d};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .idcell .id:hover {
            color: ${a};
            border-color: ${a};
        }
        .idcell .meta {
            color: ${o};
            font-size: 12px;
            display: flex;
            gap: 12px;
            margin-top: 4px;
        }

        .patient {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid ${r};
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${a} 10%, transparent);
            color: ${d};
            font-weight: 600;
            font-size: 12px;
        }
        .pinfo .pname {
            color: ${d};
            text-decoration: none;
        }
        .pinfo .pname:hover {
            color: ${a};
        }
        .psub {
            color: ${o};
            font-size: 12px;
        }

        .tests {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .test {
            border: 1px solid ${r};
            background: color-mix(in oklab, ${n} 94%, transparent);
            border-radius: 8px;
            padding: 4px 8px;
            font-size: 12px;
        }
        .test a {
            color: ${o};
            text-decoration: none;
        }
        .test a:hover {
            color: ${a};
        }

        .badge {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${a} 8%, transparent);
            color: ${d};
            font-size: 12px;
        }
        .badge.routine {
        }
        .badge.high {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }

        .dates .d {
            font-weight: 600;
        }
        .dates .t {
            color: ${o};
            font-size: 12px;
        }

        .status {
            padding: 4px 10px;
            border-radius: 8px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${n} 92%, transparent);
            color: ${d};
            font-size: 12px;
            white-space: nowrap;
        }
        .status.pending {
            background: color-mix(in oklab, ${a} 9%, transparent);
        }
        .status.in-lab {
            background: color-mix(in oklab, ${a} 12%, transparent);
        }
        .status.approved {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }
        .status.completed {
            background: color-mix(in oklab, ${a} 16%, transparent);
        }
        .status.cancelled {
            background: color-mix(in oklab, ${n} 85%, transparent);
            color: ${o};
        }

        .go {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
        }
        .go a {
            color: ${o};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .go a:hover {
            color: ${a};
            border-color: ${a};
        }
        .dot {
            color: ${o};
        }

        .empty {
            text-align: center;
            padding: 40px 10px;
            color: ${o};
        }
        .empty .title {
            font-family: "Antonio", sans-serif;
            font-size: 20px;
            margin-bottom: 6px;
            color: ${d};
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 1000;

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .box {
            position: relative;
            width: min(560px, 92vw);
            border: 1px solid ${r};
            border-radius: 12px;
            background: ${n};
            box-shadow: ${g};
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${r};
        }
        .ttl {
            font-weight: 700;
        }
        .x {
            background: transparent;
            border: none;
            color: ${o};
            font-size: 22px;
            cursor: pointer;
            line-height: 1;
        }
        .x:hover {
            color: ${a};
        }

        .body {
            padding: 14px;
            color: ${d};
        }
        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${r};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .btn {
            border: 1px solid ${r};
            background: ${n};
            color: ${d};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .btn:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${f};
        }
    `},A="Asia/Kolkata";function L(c){const l=new Date(c);return new Intl.DateTimeFormat("en-US",{weekday:"short",month:"short",day:"2-digit",year:"numeric",timeZone:A}).format(l).replaceAll(",","")}function D(c){const l=new Date(c),j=L(c),h=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:A}).format(l);return`${j} ${h}hrs`}function R(c){const l=new Date(c);return new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:A}).format(l)+"hrs"}const M="Demo only — actions are disabled.",y=[{id:"LAB-2025-0001",patientId:"PAT-1001",patient:"Riya Sharma",age:32,gender:"F",tests:["CBC","LFT"],status:"Completed",collectedAt:"2025-10-03T09:35:12+05:30",verifiedAt:"2025-10-03T13:05:44+05:30",total:"₹ 1,250.00",clinician:"Dr. K. Anand",priority:"Routine"},{id:"LAB-2025-0002",patientId:"PAT-1002",patient:"Arjun Verma",age:41,gender:"M",tests:["Fasting Glucose","HbA1c"],status:"Approved",collectedAt:"2025-10-04T08:12:59+05:30",verifiedAt:null,total:"₹ 980.00",clinician:"Dr. P. Sinha",priority:"Routine"},{id:"LAB-2025-0003",patientId:"PAT-1013",patient:"Neha Gupta",age:27,gender:"F",tests:["TSH","T3","T4"],status:"Pending",collectedAt:"2025-10-05T10:04:21+05:30",verifiedAt:null,total:"₹ 1,450.00",clinician:"Dr. V. Rao",priority:"High"},{id:"LAB-2025-0004",patientId:"PAT-1007",patient:"Rohit Mehta",age:36,gender:"M",tests:["Vitamin D 25-OH"],status:"Completed",collectedAt:"2025-10-02T16:12:00+05:30",verifiedAt:"2025-10-02T19:40:10+05:30",total:"₹ 1,200.00",clinician:"Dr. H. Wadhwa",priority:"Routine"},{id:"LAB-2025-0005",patientId:"PAT-1026",patient:"Ankit Patel",age:45,gender:"M",tests:["Lipid Profile"],status:"Cancelled",collectedAt:"2025-10-04T14:22:34+05:30",verifiedAt:null,total:"₹ 0.00",clinician:"—",priority:"Routine"},{id:"LAB-2025-0006",patientId:"PAT-1019",patient:"Pooja Nair",age:30,gender:"F",tests:["Urine Routine","Urine Culture"],status:"In Lab",collectedAt:"2025-10-05T11:28:10+05:30",verifiedAt:null,total:"₹ 1,150.00",clinician:"Dr. R. Kapoor",priority:"High"},{id:"LAB-2025-0007",patientId:"PAT-1033",patient:"Karan Singh",age:52,gender:"M",tests:["PSA"],status:"Approved",collectedAt:"2025-10-03T18:44:50+05:30",verifiedAt:null,total:"₹ 1,650.00",clinician:"Dr. T. Bose",priority:"Routine"},{id:"LAB-2025-0008",patientId:"PAT-1045",patient:"Sneha Joshi",age:24,gender:"F",tests:["Beta-hCG"],status:"Pending",collectedAt:"2025-10-05T12:02:14+05:30",verifiedAt:null,total:"₹ 1,350.00",clinician:"Dr. S. Mathur",priority:"High"},{id:"LAB-2025-0009",patientId:"PAT-1003",patient:"Vikram Iyer",age:40,gender:"M",tests:["CRP","ESR"],status:"Completed",collectedAt:"2025-10-01T09:12:31+05:30",verifiedAt:"2025-10-01T12:22:06+05:30",total:"₹ 890.00",clinician:"Dr. R. Bhalla",priority:"Routine"},{id:"LAB-2025-0010",patientId:"PAT-1052",patient:"Ishita Desai",age:34,gender:"F",tests:["D-Dimer"],status:"In Lab",collectedAt:"2025-10-05T09:50:01+05:30",verifiedAt:null,total:"₹ 1,050.00",clinician:"Dr. P. Batra",priority:"High"},{id:"LAB-2025-0011",patientId:"PAT-1064",patient:"Saurabh Jain",age:29,gender:"M",tests:["KFT"],status:"Approved",collectedAt:"2025-10-04T17:33:47+05:30",verifiedAt:null,total:"₹ 1,200.00",clinician:"Dr. Q. Singh",priority:"Routine"},{id:"LAB-2025-0012",patientId:"PAT-1070",patient:"Tanya Kapoor",age:38,gender:"F",tests:["Ferritin","Iron","TIBC"],status:"Pending",collectedAt:"2025-10-05T13:41:25+05:30",verifiedAt:null,total:"₹ 1,420.00",clinician:"Dr. L. Menon",priority:"Routine"}],$=["Pending","In Lab","Approved","Completed","Cancelled"];function q(){const c=S(),[l,j]=u.useState(""),[h,C]=u.useState("All"),[k,v]=u.useState(null),w=u.useMemo(()=>{const t=l.trim().toLowerCase();return y.filter(s=>{const b=!t||s.id.toLowerCase().includes(t)||s.patient.toLowerCase().includes(t)||s.tests.join(", ").toLowerCase().includes(t)||s.patientId.toLowerCase().includes(t)||s.clinician.toLowerCase().includes(t),N=h==="All"?!0:s.status===h;return b&&N}).sort((s,b)=>{const N=$.indexOf(s.status),I=$.indexOf(b.status);return N-I||b.collectedAt.localeCompare(s.collectedAt)})},[l,h]),m=u.useMemo(()=>{const t={All:y.length};for(const s of $)t[s]=y.filter(b=>b.status===s).length;return t},[]),P=()=>{if(document.getElementById("search-print-area")){document.body.classList.add("print-section-mode");try{window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),250)}}},B=t=>{v({title:t,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginBottom:8},children:M}),e.jsx("p",{children:"Use the existing orders for navigation and printing."})]})})};return u.useEffect(()=>{document.title="Labs — Orders"},[]),e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.HeaderBar,{children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(T,{to:"/home",children:"Home"}),e.jsx("span",{className:"sep",children:"›"}),e.jsx(T,{to:"/labs",children:"Labs"}),e.jsx("span",{className:"sep",children:"›"}),e.jsx("span",{children:"Orders"})]}),e.jsxs("div",{className:"headerRight",children:[e.jsx("button",{className:"btn subtle",onClick:()=>c("/labs/catalog"),title:"Browse test catalog",children:"Open Catalog"}),e.jsx("button",{className:"btn",onClick:()=>B("New Lab Order"),"aria-label":"New lab order",children:"New Lab Order"}),e.jsx("button",{className:"btn outline",onClick:P,"aria-label":"Print list",children:"Print"})]})]}),e.jsxs(x.TopStrip,{children:[e.jsxs("div",{className:"metrics",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:m.All})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"Pending"}),e.jsx("div",{className:"v",children:m.Pending})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"In Lab"}),e.jsx("div",{className:"v",children:m["In Lab"]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"Approved"}),e.jsx("div",{className:"v",children:m.Approved})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"Completed"}),e.jsx("div",{className:"v",children:m.Completed})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"k",children:"Cancelled"}),e.jsx("div",{className:"v",children:m.Cancelled})]})]}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(i,{to:"/patients",className:"ql",children:"Patients"}),e.jsx(i,{to:"/appointments",className:"ql",children:"Appointments"}),e.jsx(i,{to:"/prescriptions",className:"ql",children:"Prescriptions"}),e.jsx(i,{to:"/labs/catalog",className:"ql",children:"Lab Catalog"}),e.jsx(i,{to:"/finance",className:"ql",children:"Finance"}),e.jsx(i,{to:"/reports",className:"ql",children:"Reports"})]})]}),e.jsxs(x.Grid,{children:[e.jsxs(x.Side,{children:[e.jsx("div",{className:"searchBox",children:e.jsx("input",{value:l,onChange:t=>j(t.target.value),placeholder:"Search by ID / patient / test / clinician","aria-label":"Search labs"})}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionTitle",children:"Status"}),e.jsx("div",{className:"chips",children:["All",...$].map(t=>e.jsx("button",{className:`chip ${h===t?"active":""}`,onClick:()=>C(t),children:t},t))})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionTitle",children:"Shortcuts"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/labs",children:"Orders"}),e.jsx(i,{to:"/labs/catalog",children:"Catalog"}),e.jsx(i,{to:"/labs/catalog",state:{q:"CBC"},children:"CBC in Catalog"}),e.jsx(i,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(i,{to:"/reports/finance",children:"Finance Report"}),e.jsx(i,{to:"/admin/users",children:"Admin · Users"}),e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionTitle",children:"Help"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/help",children:"Help Center"}),e.jsx(i,{to:"/faq",children:"FAQ"}),e.jsx(i,{to:"/contact",children:"Contact"}),e.jsx(i,{to:"/changelog",children:"Changelog"}),e.jsx(i,{to:"/roadmap",children:"Roadmap"})]})]})]}),e.jsx(x.Main,{id:"search-print-area",children:e.jsxs(x.TableWrap,{children:[e.jsxs("table",{className:"labs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Patient"}),e.jsx("th",{children:"Tests"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Collected"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Total"}),e.jsx("th",{children:"Navigate"})]})}),e.jsx("tbody",{children:w.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"idcell",children:[e.jsx(i,{className:"id",to:`/labs/${t.id}`,children:t.id}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Clinician: ",t.clinician]}),t.verifiedAt?e.jsxs("span",{children:["Verified: ",D(t.verifiedAt)]}):e.jsx("span",{children:"—"})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"patient",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:t.patient.split(" ").map(s=>s[0]).join("").slice(0,2)}),e.jsxs("div",{className:"pinfo",children:[e.jsx(i,{to:`/patients/${t.patientId}`,className:"pname",children:t.patient}),e.jsxs("div",{className:"psub",children:[e.jsxs("span",{children:[t.gender," · ",t.age,"y"]}),e.jsxs("span",{children:[" · ID: ",t.patientId]})]})]})]})}),e.jsx("td",{children:e.jsx("div",{className:"tests",children:t.tests.map(s=>e.jsx("span",{className:"test",children:e.jsx(i,{to:"/labs/catalog",state:{q:s},children:s})},s))})}),e.jsx("td",{children:e.jsx("span",{className:`badge ${t.priority.toLowerCase()}`,children:t.priority})}),e.jsx("td",{children:e.jsxs("div",{className:"dates",children:[e.jsx("div",{className:"d",children:L(t.collectedAt)}),e.jsx("div",{className:"t",children:R(t.collectedAt)})]})}),e.jsx("td",{children:e.jsx("span",{className:`status ${t.status.replace(/\s+/g,"-").toLowerCase()}`,children:t.status})}),e.jsx("td",{children:t.total}),e.jsx("td",{children:e.jsxs("div",{className:"go",children:[e.jsx(i,{to:`/labs/${t.id}`,children:"View"}),e.jsx("span",{className:"dot",children:"·"}),e.jsx(i,{to:`/labs/${t.id}/print`,children:"Print"}),e.jsx("span",{className:"dot",children:"·"}),e.jsx(i,{to:"/appointments",children:"Schedule"})]})})]},t.id))})]}),w.length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No results"}),e.jsx("div",{className:"sub",children:"Try a different search or status filter."})]})]})})]}),k&&e.jsxs(x.Modal,{role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"overlay",onClick:()=>v(null)}),e.jsxs("div",{className:"box",role:"document",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"ttl",children:k.title}),e.jsx("button",{className:"x",onClick:()=>v(null),"aria-label":"Close",children:"×"})]}),e.jsx("div",{className:"body",children:k.body}),e.jsx("div",{className:"foot",children:e.jsx("button",{className:"btn",onClick:()=>v(null),children:"Okay"})})]})]})]})}export{q as default};
