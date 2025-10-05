import{d as o,u as N,q as L,r as m,j as e,N as v,L as a}from"./index-P_7RwasD.js";import{L as C,a as I,b as T,c as P,d as A,e as D,f as M,g as R,h as B,i as S,j as z,k as O}from"./index-X8URwR3f.js";import{M as E}from"./index-B9VUTsVq.js";const F="var(--bg, #0d1117)",r="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",d="var(--card, #111318)",n="var(--border, #23262d)",s="var(--accent, #5aa9ff)",G="var(--accent-soft, rgba(90,169,255,0.15))",c={Page:o.div`
        width: 100%;
        color: ${r};
        padding: 18px;
        display: grid;
        gap: 16px;
        background: ${F};

        a {
            color: ${r};
        }
        a:hover {
            color: ${s};
        }
        .card {
            background: ${d};
            border: 1px solid ${n};
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .chip {
            display: inline-flex;
            align-items: center;
            height: 26px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${n};
            background: rgba(0, 0, 0, 0.12);
            font-weight: 600;
            font-size: 12px;
            color: ${r};
        }
        .chip.status.completed {
            border-color: ${s};
            background: color-mix(in oklab, ${s} 12%, transparent);
            color: ${s};
        }
    `,Breadcrumbs:o.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${x};
        font-size: 13px;
        .current {
            color: ${r};
            font-weight: 600;
        }
        a {
            color: ${x};
        }
        a:hover {
            color: ${s};
        }
    `,Header:o.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;

        .title {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
            h1 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-family: "Antonio", sans-serif;
                letter-spacing: 0.5px;
                font-size: 24px;
                line-height: 1.2;
            }
            .badges {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
            button {
                background: ${d};
                color: ${r};
                border: 1px solid ${n};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    transform 0.05s;
            }
            button:hover {
                color: ${s};
                border-color: ${s};
                background: rgba(0, 0, 0, 0.08);
            }
            button:active {
                transform: translateY(1px);
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        @media (max-width: 920px) {
            grid-template-columns: 1fr;
            .actions {
                justify-content: flex-start;
            }
        }
    `,MetaGrid:o.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1.2fr 1.2fr 1fr;

        .meta header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: ${r};
            margin-bottom: 10px;
        }
        .meta .rows {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 14px;
        }
        .meta .rows .wide {
            grid-column: span 2;
        }
        .meta .rows span {
            color: ${x};
            display: block;
        }
        .meta .rows strong {
            color: ${r};
            display: block;
        }
        .meta .quicklinks {
            margin-top: 12px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .notes p {
            color: ${r};
            background: color-mix(in oklab, ${s} 10%, transparent);
            border: 1px dashed ${n};
            padding: 10px;
            border-radius: 8px;
        }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
            .meta .rows {
                grid-template-columns: 1fr;
            }
            .meta .rows .wide {
                grid-column: span 1;
            }
        }
    `,Section:o.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
            .section-links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
        }

        .test-block {
            border: 1px solid ${n};
            border-radius: 10px;
            margin-top: 10px;
            background: color-mix(in oklab, ${d} 96%, transparent);
        }
        .test-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
            .info {
                display: flex;
                gap: 10px;
                align-items: baseline;
                flex-wrap: wrap;
            }
            .test-name {
                font-weight: 700;
            }
            .test-group {
                color: ${x};
                font-size: 12px;
            }
        }
        .table-wrap {
            overflow: auto;
        }
        table.results {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.results th,
        table.results td {
            padding: 10px 12px;
            border-bottom: 1px solid ${n};
        }
        table.results th {
            text-align: left;
            background: ${d};
            color: ${s};
            position: sticky;
            top: 0;
        }
        table.results tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }
        td.result {
            font-weight: 700;
        }
        td.ref {
            color: ${x};
        }
        td.flag.has-flag {
            color: ${s};
            font-weight: 700;
        }

        .comment {
            padding: 12px 14px;
            color: ${r};
            display: flex;
            gap: 8px;
            align-items: center;
            border-top: 1px dashed ${n};
            background: color-mix(in oklab, ${s} 8%, transparent);
            border-radius: 0 0 10px 10px;
        }
    `,Attachments:o.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
            .section-links {
                display: flex;
                gap: 12px;
            }
        }
        .files {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        .file {
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: color-mix(in oklab, ${d} 96%, transparent);
        }
        .file .meta {
            display: grid;
            gap: 4px;
        }
        .file .meta span {
            color: ${x};
            font-size: 12px;
        }
        .file .cta {
            display: flex;
            gap: 8px;
        }
        .file .cta button {
            background: ${d};
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
            color: ${r};
        }
        .file .cta button:hover {
            color: ${s};
            border-color: ${s};
        }
        .file .cta button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        @media (max-width: 900px) {
            .files {
                grid-template-columns: 1fr;
            }
        }
    `,Timeline:o.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 6px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
        }
        .steps {
            list-style: none;
            margin: 0;
            padding: 0;
            position: relative;
        }
        .steps li {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 10px;
            align-items: flex-start;
            padding: 8px 0;
            border-bottom: 1px dashed ${n};
        }
        .steps li:last-child {
            border-bottom: none;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: ${s};
            margin-top: 6px;
            box-shadow: 0 0 0 3px ${G};
        }
        .content .line {
            display: flex;
            gap: 8px;
            align-items: baseline;
            flex-wrap: wrap;
        }
        .content .line .by {
            color: ${x};
            font-size: 12px;
        }
        .content .ts {
            color: ${x};
            font-size: 12px;
            margin-top: 2px;
        }
    `,QuickNav:o.section`
        header {
            font-weight: 700;
            margin-bottom: 10px;
        }
        .links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .links a {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            background: color-mix(in oklab, ${d} 92%, transparent);
            font-size: 13px;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .links a:hover {
            color: ${s};
            border-color: ${s};
        }
    `,ModalOverlay:o.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:o.div`
        width: min(560px, 92%);
        background: ${d};
        color: ${r};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);

        .modal-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
            h3 {
                font-size: 18px;
            }
            button {
                border: 1px solid ${n};
                background: ${d};
                color: ${r};
                border-radius: 8px;
                padding: 6px 10px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${s};
                color: ${s};
            }
        }
        .modal-body {
            padding: 14px;
            color: ${r};
        }
        .modal-foot {
            padding: 12px 14px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
            button {
                background: ${d};
                color: ${r};
                border: 1px solid ${n};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            }
            button:hover {
                color: ${s};
                border-color: ${s};
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `},y=l=>new Date(l).toDateString(),H=l=>new Date(l).toLocaleTimeString("en-GB",{hour12:!1})+"hrs",j=l=>`${y(l)} ${H(l)}`,U=({open:l,title:h,children:i,onClose:b,onConfirm:u,confirmText:f="Confirm",disabled:g})=>l?e.jsx(c.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(c.ModalCard,{className:"card",children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("h3",{children:h}),e.jsx("button",{onClick:b,"aria-label":"Close modal",children:"✕"})]}),e.jsx("div",{className:"modal-body",children:i}),e.jsxs("div",{className:"modal-foot",children:[e.jsx("button",{onClick:b,children:"Close"}),e.jsx("button",{onClick:u,disabled:g,title:g?"Demo mode":void 0,children:f})]})]})}):null,Q=()=>{const l=N(),{labId:h}=L(),i=m.useMemo(()=>({lab:{id:h||"LAB-240153",code:"LAB-240153",status:"Completed",priority:"Routine",collectedAt:"2025-10-04T09:20:05+05:30",receivedAt:"2025-10-04T10:02:17+05:30",reportedAt:"2025-10-04T14:45:52+05:30",orderingProviderId:"USR-0031",orderingProvider:"Dr. Meera Shah",department:"Pathology",specimen:"Venous Blood",container:"Vacutainer (Red Top)",notes:"Fasting sample. No anticoagulant medication in last 48 hours.",invoiceId:"INV-2031",appointmentId:"APT-88211",relatedImagingId:"IMG-11107",prescriptionId:"RX-55472"},patient:{id:"PAT-1002",name:"Ravi Kumar",gender:"Male",dob:"1986-07-09T00:00:00+05:30",phone:"+91 98xxxxxx23",email:"ravi.kumar@example.com",mrn:"MRN-774210",bloodGroup:"O+",address:"A-203, Lake View Residency, BTM Layout, Bengaluru 560076"},tests:[{key:"CBC",name:"Complete Blood Count",group:"Hematology",results:[{analyte:"Hemoglobin",value:"14.1",unit:"g/dL",ref:"13.0 – 17.0",flag:""},{analyte:"WBC",value:"6.3",unit:"10^3/µL",ref:"4.0 – 10.0",flag:""},{analyte:"Platelets",value:"235",unit:"10^3/µL",ref:"150 – 400",flag:""}],comment:"All CBC indices within reference range."},{key:"CMP",name:"Comprehensive Metabolic Panel",group:"Biochemistry",results:[{analyte:"Glucose (Fasting)",value:"94",unit:"mg/dL",ref:"70 – 99",flag:""},{analyte:"Creatinine",value:"0.9",unit:"mg/dL",ref:"0.7 – 1.3",flag:""},{analyte:"ALT (SGPT)",value:"32",unit:"U/L",ref:"0 – 45",flag:""},{analyte:"AST (SGOT)",value:"28",unit:"U/L",ref:"0 – 40",flag:""}],comment:"Liver and kidney markers within reference limits."},{key:"LIPID",name:"Lipid Profile",group:"Biochemistry",results:[{analyte:"Total Cholesterol",value:"186",unit:"mg/dL",ref:"< 200",flag:""},{analyte:"HDL",value:"52",unit:"mg/dL",ref:"> 40",flag:""},{analyte:"LDL (calc.)",value:"112",unit:"mg/dL",ref:"< 130",flag:""},{analyte:"Triglycerides",value:"128",unit:"mg/dL",ref:"< 150",flag:""}],comment:"Lipid profile optimal."}],activity:[{ts:"2025-10-04T08:52:11+05:30",label:"Order created",by:"Front Desk",icon:"file"},{ts:"2025-10-04T09:20:05+05:30",label:"Specimen collected",by:"Nurse Station 2",icon:"beaker"},{ts:"2025-10-04T10:02:17+05:30",label:"Sample received in lab",by:"Pathology Desk",icon:"microscope"},{ts:"2025-10-04T14:30:04+05:30",label:"Results validated",by:"Dr. Meera Shah",icon:"check"},{ts:"2025-10-04T14:45:52+05:30",label:"Report finalized",by:"LIS",icon:"file-check"}],attachments:[{id:"ATT-1",name:"LAB-240153-Report.pdf",kind:"PDF",size:"182 KB"},{id:"ATT-2",name:"Microscopy-Image-01.png",kind:"Image",size:"1.2 MB"}]}),[h]),[b,u]=m.useState(!1),[f,g]=m.useState(!1),k=m.useCallback(async()=>{try{await navigator.clipboard.writeText(window.location.href),g(!0),setTimeout(()=>g(!1),1500)}catch{}},[]),$=m.useCallback(()=>{document.body.classList.add("print-section-mode");const t=()=>{document.body.classList.remove("print-section-mode"),window.removeEventListener("afterprint",t)};window.addEventListener("afterprint",t),window.print()},[]);return m.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[h]),e.jsxs(c.Page,{"data-testid":"lab-detail-page",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(c.Breadcrumbs,{"aria-label":"breadcrumbs",children:[e.jsx(v,{to:"/home",children:"Home"}),e.jsx("span",{children:"›"}),e.jsx(v,{to:"/labs",children:"Labs"}),e.jsx("span",{children:"›"}),e.jsx("span",{className:"current",children:i.lab.code})]}),e.jsxs(c.Header,{className:"card",children:[e.jsxs("div",{className:"title",children:[e.jsxs("h1",{children:[e.jsx(C,{})," ",i.lab.code]}),e.jsxs("div",{className:"badges",children:[e.jsx("span",{className:`chip status ${i.lab.status.toLowerCase()}`,children:i.lab.status}),e.jsx("span",{className:"chip",children:i.lab.priority}),e.jsx("span",{className:"chip",children:i.lab.department})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:()=>l("/labs"),title:"Back to Labs",children:[e.jsx(I,{})," Labs"]}),e.jsxs("button",{onClick:k,"aria-live":"polite",title:"Copy deep link",children:[e.jsx(T,{})," ",f?"Copied":"Copy Link"]}),e.jsxs("button",{onClick:$,title:"Print this report",children:[e.jsx(P,{})," Print"]}),e.jsxs("button",{disabled:!0,title:"Demo mode",children:[e.jsx(E,{})," Edit"]}),e.jsxs("button",{onClick:()=>u(!0),title:"Delete (demo protected)",disabled:!0,children:[e.jsx(A,{})," Delete"]})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(c.MetaGrid,{children:[e.jsxs("div",{className:"card meta",children:[e.jsxs("header",{children:[e.jsx(D,{})," Patient"]}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Name"}),e.jsx("strong",{children:e.jsx(a,{to:`/patients/${i.patient.id}`,children:i.patient.name})})]}),e.jsxs("div",{children:[e.jsx("span",{children:"MRN"}),e.jsx("strong",{children:i.patient.mrn})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Gender"}),e.jsx("strong",{children:i.patient.gender})]}),e.jsxs("div",{children:[e.jsx("span",{children:"DOB"}),e.jsx("strong",{children:y(i.patient.dob)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Contact"}),e.jsx("strong",{children:i.patient.phone})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Email"}),e.jsx("strong",{children:e.jsx("a",{href:`mailto:${i.patient.email}`,children:i.patient.email})})]}),e.jsxs("div",{className:"wide",children:[e.jsx("span",{children:"Address"}),e.jsx("strong",{children:i.patient.address})]})]}),e.jsxs("div",{className:"quicklinks",children:[e.jsx(a,{to:`/patients/${i.patient.id}`,children:"Open Patient"}),e.jsx(a,{to:`/appointments/${i.lab.appointmentId}`,children:"Appointment"}),e.jsx(a,{to:`/prescriptions/${i.lab.prescriptionId}`,children:"Prescription"})]})]}),e.jsxs("div",{className:"card meta",children:[e.jsxs("header",{children:[e.jsx(M,{})," Order"]}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Provider"}),e.jsx("strong",{children:e.jsx(a,{to:`/admin/users/${i.lab.orderingProviderId}`,children:i.lab.orderingProvider})})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Specimen"}),e.jsx("strong",{children:i.lab.specimen})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Container"}),e.jsx("strong",{children:i.lab.container})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Collected"}),e.jsx("strong",{children:j(i.lab.collectedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Received"}),e.jsx("strong",{children:j(i.lab.receivedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Reported"}),e.jsx("strong",{children:j(i.lab.reportedAt)})]})]}),e.jsxs("div",{className:"quicklinks",children:[e.jsxs(a,{to:`/invoices/${i.lab.invoiceId}`,children:["Invoice ",i.lab.invoiceId]}),e.jsxs(a,{to:`/imaging/${i.lab.relatedImagingId}`,children:["Imaging ",i.lab.relatedImagingId]}),e.jsx(a,{to:"/labs/catalog",children:"Lab Catalog"})]})]}),e.jsxs("div",{className:"card meta notes",children:[e.jsxs("header",{children:[e.jsx(R,{})," Notes"]}),e.jsx("p",{children:i.lab.notes})]})]}),e.jsxs(c.Section,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("h2",{children:[e.jsx(B,{})," Results"]}),e.jsxs("div",{className:"section-links",children:[e.jsx(a,{to:"/reports/lab",title:"(demo link)",children:"Reports"}),e.jsx(a,{to:"/labs",title:"All labs",children:"All Labs"}),e.jsx(a,{to:`/labs/${i.lab.id}/print`,title:"(demo link)",children:"Print Page"})]})]}),i.tests.map(t=>e.jsxs("div",{className:"test-block",children:[e.jsx("div",{className:"test-head",children:e.jsxs("div",{className:"info",children:[e.jsx("span",{className:"test-name",children:t.name}),e.jsx("span",{className:"test-group",children:t.group})]})}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{className:"results",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Analyte"}),e.jsx("th",{children:"Result"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{children:"Reference Range"}),e.jsx("th",{children:"Flag"})]})}),e.jsx("tbody",{children:t.results.map((p,w)=>e.jsxs("tr",{children:[e.jsx("td",{children:p.analyte}),e.jsx("td",{className:"result",children:p.value}),e.jsx("td",{children:p.unit}),e.jsx("td",{className:"ref",children:p.ref}),e.jsx("td",{className:`flag ${p.flag?"has-flag":""}`,children:p.flag||"-"})]},w))})]})}),t.comment&&e.jsxs("div",{className:"comment",children:[e.jsx(S,{})," ",e.jsx("em",{children:t.comment})]})]},t.key))]}),e.jsxs(c.Attachments,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("h2",{children:[e.jsx(z,{})," Attachments"]}),e.jsx("div",{className:"section-links",children:e.jsx(a,{to:`/invoices/${i.lab.invoiceId}/print`,children:"(Demo) Print Invoice"})})]}),e.jsx("div",{className:"files",children:i.attachments.map(t=>e.jsxs("div",{className:"file",children:[e.jsxs("div",{className:"meta",children:[e.jsx("strong",{children:t.name}),e.jsxs("span",{children:[t.kind," · ",t.size]})]}),e.jsxs("div",{className:"cta",children:[e.jsx("button",{disabled:!0,title:"Demo mode",children:"View"}),e.jsx("button",{disabled:!0,title:"Demo mode",children:"Download"})]})]},t.id))})]}),e.jsxs(c.Timeline,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsxs("h2",{children:[e.jsx(O,{})," Activity"]}),e.jsx("div",{className:"section-links",children:e.jsx(a,{to:"/admin/audit-log",children:"Audit Log"})})]}),e.jsx("ul",{className:"steps",children:i.activity.map((t,p)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"line",children:[e.jsx("strong",{children:t.label}),e.jsxs("span",{className:"by",children:["by ",t.by]})]}),e.jsx("div",{className:"ts",children:j(t.ts)})]})]},p))})]}),e.jsxs(c.QuickNav,{className:"card",children:[e.jsx("header",{children:"Navigate"}),e.jsxs("nav",{className:"links",children:[e.jsx(a,{to:"/labs",children:"All Labs"}),e.jsx(a,{to:"/labs/catalog",children:"Lab Catalog"}),e.jsx(a,{to:`/patients/${i.patient.id}`,children:"Patient"}),e.jsx(a,{to:`/appointments/${i.lab.appointmentId}`,children:"Appointment"}),e.jsx(a,{to:`/prescriptions/${i.lab.prescriptionId}`,children:"Prescription"}),e.jsx(a,{to:`/invoices/${i.lab.invoiceId}`,children:"Invoice"}),e.jsx(a,{to:`/imaging/${i.lab.relatedImagingId}`,children:"Imaging"}),e.jsx(a,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(a,{to:"/reports/finance",children:"Finance Report"}),e.jsx(a,{to:"/settings/print-templates",children:"Print Templates"})]})]})]}),e.jsx(U,{open:b,title:"Delete Lab Order",onClose:()=>u(!1),onConfirm:()=>{},confirmText:"Delete",disabled:!0,children:e.jsx("p",{children:"This action is disabled in the demo."})})]})};export{Q as default};
