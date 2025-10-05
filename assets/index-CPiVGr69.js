import{d as n,q as M,a as P,r as v,j as e,N as j,i as u,L as d,e as N,w as I,l as B,$ as z,a0 as D,a1 as L,a2 as X,k as q}from"./index-DwhKQ_MC.js";const E="var(--bg, #0d1117)",m="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",p="var(--card, #111318)",t="var(--border, #23262d)",o="var(--accent, #5aa9ff)",H="var(--accent-soft, rgba(90,169,255,0.15))",i={Page:n.div`
        width: 100%;
        color: ${m};
    `,StickyBar:n.div`
        position: sticky;
        top: 0;
        z-index: 10;
        background: ${E};
        border-bottom: 1px solid ${t};
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 10px 12px;
        gap: 12px;
    `,Breadcrumbs:n.nav`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        a,
        span {
            color: ${c};
            text-decoration: none;
            font-weight: 500;
        }
        a:hover {
            color: ${o};
        }
        svg {
            opacity: 0.7;
        }
    `,Actions:n.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;

        a,
        button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid ${t};
            background: ${p};
            color: ${m};
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        a:hover,
        button:hover {
            border-color: ${o};
            color: ${o};
            background: rgba(0, 0, 0, 0.06);
        }
        button:active {
            transform: translateY(1px);
        }
    `,HeaderBlock:n.section`
        padding: 14px 12px;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 12px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        .left h1 {
            font-size: 22px;
            line-height: 1.3;
        }
        .left .dim {
            color: ${c};
            font-weight: 400;
        }
        .left .meta {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }
    `,PillNav:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
        a {
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            color: ${c};
            background: ${p};
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        a:hover {
            color: ${o};
            border-color: ${o};
        }
        @media (max-width: 900px) {
            justify-content: flex-start;
        }
    `,Badge:n.span`
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: 1px solid ${t};
        background: ${a=>a.tone==="danger"?"rgba(255, 99, 99, .12)":a.tone==="warn"?"rgba(255, 165, 0, .12)":"rgba(90,169,255,.12)"};
        color: ${a=>a.tone==="danger"?"#ff6b6b":a.tone==="warn"?"#ffb84d":o};
    `,Tag:n.span`
        display: inline-block;
        padding: 4px 8px;
        border: 1px solid ${t};
        border-radius: 8px;
        color: ${c};
        background: ${p};
    `,TagsRow:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        a {
            text-decoration: none;
        }
    `,Card:n.section`
        background: ${p};
        border: 1px solid ${t};
        border-radius: 12px;
        padding: 14px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,CardHeader:n.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        h2,
        h3 {
            font-size: 16px;
        }
        p {
            color: ${c};
        }
    `,SmallLinks:n.div`
        display: inline-flex;
        gap: 12px;
        a,
        button {
            color: ${c};
            text-decoration: none;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        a:hover,
        button:hover {
            color: ${o};
        }
    `,KeyValue:n.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 8px 16px;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }

        > div {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 10px;
            align-items: center;
            border-bottom: 1px dashed ${t};
            padding: 6px 0;
        }
        span {
            color: ${c};
        }
        a {
            color: ${o};
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `,Divider:n.hr`
        margin: 12px 0;
        border: 0;
        border-top: 1px solid ${t};
    `,ThreeCol:n.div`
        padding: 0 12px;
        display: grid;
        grid-template-columns: 1.2fr 1.2fr 1fr;
        gap: 12px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,TwoCol:n.div`
        padding: 0 12px;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Table:n.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;

        thead th {
            text-align: left;
            padding: 10px;
            background: ${p};
            color: ${o};
            border-bottom: 1px solid ${t};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${t};
        }
        .num {
            text-align: right;
        }
        td.actions,
        th.actions {
            text-align: right;
            white-space: nowrap;
        }
        td.actions a,
        td.actions button {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            border: 1px solid ${t};
            background: ${p};
            color: ${m};
            border-radius: 8px;
            padding: 4px 8px;
            margin-left: 6px;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        td.actions a:hover,
        td.actions button:hover {
            border-color: ${o};
            color: ${o};
            background: rgba(0, 0, 0, 0.06);
        }
        td.actions button {
            cursor: pointer;
        }
        td.actions button:active {
            transform: translateY(1px);
        }
    `,AttachList:n.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
        li {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            border: 1px solid ${t};
            border-radius: 10px;
            padding: 10px;
            background: ${p};
        }
        .meta {
            display: grid;
            grid-template-columns: 26px 1fr;
            gap: 10px;
            align-items: center;
        }
        .meta .icon {
            font-size: 20px;
            opacity: 0.8;
        }
        .meta .muted {
            color: ${c};
            font-size: 12px;
        }
        .actions {
            display: inline-flex;
            gap: 10px;
            align-items: center;
        }
        .actions a,
        .actions button {
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${p};
            color: ${m};
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${o};
            color: ${o};
            background: rgba(0, 0, 0, 0.06);
        }
        .actions button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }
    `,Empty:n.div`
        border: 1px dashed ${t};
        border-radius: 10px;
        padding: 24px;
        text-align: center;
        color: ${c};
    `,Timeline:n.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
        li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 10px;
            align-items: start;
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${o};
            box-shadow: 0 0 0 3px ${H};
            margin-top: 6px;
        }
        .content .when {
            color: ${c};
            font-size: 12px;
        }
        .content .label {
            margin-top: 2px;
        }
    `,Related:n.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        h4 {
            margin-bottom: 6px;
        }
        ul {
            padding-left: 16px;
        }
        .muted {
            color: ${c};
        }
    `,PrintGrid:n.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ModalOverlay:n.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:n.div`
        width: min(560px, 96vw);
        background: ${p};
        border: 1px solid ${t};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        overflow: hidden;

        header {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 10px 12px;
            border-bottom: 1px solid ${t};
            h3 {
                font-size: 16px;
            }
            .icon {
                border: 1px solid ${t};
                background: ${p};
                color: ${m};
                border-radius: 8px;
                padding: 4px;
                cursor: pointer;
            }
            .icon:hover {
                border-color: ${o};
                color: ${o};
            }
        }
        .body {
            padding: 14px 12px;
            color: ${m};
        }
        footer {
            padding: 10px 12px;
            border-top: 1px solid ${t};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        footer button {
            border: 1px solid ${t};
            background: ${p};
            color: ${m};
            border-radius: 8px;
            padding: 6px 10px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        footer button:hover {
            border-color: ${o};
            color: ${o};
            background: rgba(0, 0, 0, 0.06);
        }
    `},b=a=>String(a).padStart(2,"0"),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function G(a){const x=new Date(a);return`${O[x.getDay()]} ${U[x.getMonth()]} ${b(x.getDate())} ${x.getFullYear()}`}function K(a){const x=new Date(a);return`${b(x.getHours())}:${b(x.getMinutes())}:${b(x.getSeconds())}hrs`}function g(a){return`${G(a)} ${K(a)}`}const k={"IMG-1001":{id:"IMG-1001",modality:"CT",bodyPart:"Abdomen & Pelvis",priority:"Routine",status:"Reported",requestedAt:"2025-10-04T09:35:20+05:30",performedAt:"2025-10-04T12:10:42+05:30",reportedAt:"2025-10-04T16:05:07+05:30",site:"Main Campus — Scanner CT-02",radiologist:{id:"USR-502",name:"Dr. N. Bhattacharya"},requestedBy:{id:"USR-410",name:"Dr. R. Sharma"},patient:{id:"PAT-2007",name:"Aarav Verma",sex:"M",age:"34y",mrn:"MRN-874233",phone:"+91 98XXXXXX21",tags:["Self-pay","Allergy: Iodine"],nextApptId:"APP-2317"},series:[{id:"SER-1",desc:"Scout (Topogram)",images:2,res:"1024×1024",size:"3.2 MB"},{id:"SER-2",desc:"Axial Contrast (Venous Phase)",images:312,res:"512×512",size:"412 MB"},{id:"SER-3",desc:"Coronal MPR",images:180,res:"512×512",size:"210 MB"},{id:"SER-4",desc:"Sagittal MPR",images:172,res:"512×512",size:"198 MB"}],attachments:[{id:"ATT-1",name:"CT_Abdomen_Report.pdf",type:"application/pdf",size:"236 KB"},{id:"ATT-2",name:"KeyImages.zip",type:"application/zip",size:"12.4 MB"}],impression:["No acute intra-abdominal pathology.","Mild fatty liver changes.","No free air/fluid. No obstructive uropathy."],timeline:[{when:"2025-10-04T09:35:20+05:30",label:"Requested by ordering physician"},{when:"2025-10-04T10:00:00+05:30",label:"Patient checked-in & consented"},{when:"2025-10-04T12:10:42+05:30",label:"Scan completed"},{when:"2025-10-04T15:12:10+05:30",label:"Preliminary findings saved"},{when:"2025-10-04T16:05:07+05:30",label:"Report finalized by radiologist"}],related:{labs:[{id:"LAB-5001",label:"LFT Panel"}],prescriptions:[{id:"RX-4401",label:"Liver support meds"}],invoices:[{id:"INV-2031",label:"Imaging invoice"}]}},"IMG-1002":{id:"IMG-1002",modality:"MRI",bodyPart:"Lumbar Spine",priority:"Urgent",status:"In Review",requestedAt:"2025-10-03T18:28:10+05:30",performedAt:"2025-10-04T08:22:11+05:30",reportedAt:null,site:"Main Campus — MRI-01",radiologist:{id:"USR-503",name:"Dr. K. Ahuja"},requestedBy:{id:"USR-411",name:"Dr. P. Joshi"},patient:{id:"PAT-2012",name:"Ishita Kapoor",sex:"F",age:"29y",mrn:"MRN-874912",phone:"+91 99XXXXXX73",tags:["Corporate plan"],nextApptId:null},series:[{id:"SER-1",desc:"Localizer",images:3,res:"1024×1024",size:"4.7 MB"},{id:"SER-2",desc:"T1 Sagittal",images:24,res:"512×512",size:"28 MB"},{id:"SER-3",desc:"T2 Axial",images:36,res:"512×512",size:"42 MB"}],attachments:[],impression:["Pending radiologist review."],timeline:[{when:"2025-10-03T18:28:10+05:30",label:"Requested"},{when:"2025-10-04T08:22:11+05:30",label:"Scan completed"}],related:{labs:[],prescriptions:[],invoices:[]}},"IMG-1003":{id:"IMG-1003",modality:"X-Ray",bodyPart:"Chest PA",priority:"Routine",status:"Scheduled",requestedAt:"2025-10-05T09:05:00+05:30",performedAt:null,reportedAt:null,site:"Satellite Center — XR-03",radiologist:{id:"USR-502",name:"Dr. N. Bhattacharya"},requestedBy:{id:"USR-510",name:"Dr. A. Sen"},patient:{id:"PAT-2040",name:"Ravi Kumar",sex:"M",age:"41y",mrn:"MRN-877110",phone:"+91 98XXXXXX88",tags:[],nextApptId:"APP-2325"},series:[{id:"SER-1",desc:"PA View",images:1,res:"2048×2048",size:"6.8 MB"}],attachments:[],impression:["Scheduled — report will be available after scan."],timeline:[{when:"2025-10-05T09:05:00+05:30",label:"Requested & scheduled"}],related:{labs:[],prescriptions:[],invoices:[]}}};function F(){var A;const{imageId:a}=M(),x=P(),[y,f]=v.useState(null),[R,$]=v.useState(!1),r=v.useMemo(()=>k[a]||null,[a]),w=(s,h)=>f({title:s,body:h}),T=()=>f(null),C=async()=>{var s;try{await((s=navigator.clipboard)==null?void 0:s.writeText(window.location.href)),$(!0),setTimeout(()=>$(!1),1800)}catch{f({title:"Copy Link",body:"Could not access clipboard. You can manually copy the URL from the address bar."})}},S=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>window.print(),0),setTimeout(()=>document.body.classList.remove("print-section-mode"),350)};if(!r)return e.jsxs(i.Page,{children:[e.jsxs(i.StickyBar,{role:"region","aria-label":"Breadcrumb",children:[e.jsxs(i.Breadcrumbs,{children:[e.jsx(j,{to:"/home",children:"Home"}),e.jsx(u,{}),e.jsx(j,{to:"/imaging",children:"Imaging"}),e.jsx(u,{}),e.jsx("span",{children:"Not Found"})]}),e.jsx("div",{})]}),e.jsxs(i.Card,{style:{marginTop:16},children:[e.jsx(i.CardHeader,{children:e.jsx("h2",{children:"Imaging study not found"})}),e.jsxs("p",{children:["We couldn’t locate ",e.jsx("code",{children:a}),". Try the"," ",e.jsx(d,{to:"/imaging",children:"Imaging catalog"})," or search above."]})]})]});const{patient:l}=r;return e.jsxs(i.Page,{children:[e.jsxs(i.StickyBar,{role:"region","aria-label":"Breadcrumb and actions",children:[e.jsxs(i.Breadcrumbs,{children:[e.jsx(j,{to:"/home",children:"Home"}),e.jsx(u,{}),e.jsx(j,{to:"/imaging",children:"Imaging"}),e.jsx(u,{}),e.jsx("span",{children:r.id})]}),e.jsxs(i.Actions,{children:[e.jsxs("button",{onClick:S,title:"Print this report",children:[e.jsx(N,{size:18}),e.jsx("span",{children:"Print"})]}),e.jsxs(d,{to:x.pathname,target:"_blank",rel:"noreferrer",title:"Open in new tab",children:[e.jsx(I,{size:18}),e.jsx("span",{children:"Open"})]}),e.jsxs("button",{onClick:C,title:"Copy link to clipboard",children:[e.jsx(B,{size:18}),e.jsx("span",{children:R?"Copied":"Copy Link"})]}),e.jsxs("button",{onClick:()=>w("Archive (Demo)","This is a display-only demo. Archiving is disabled."),title:"Archive study (demo disabled)",children:[e.jsx(z,{size:18}),e.jsx("span",{children:"Archive"})]})]})]}),e.jsxs(i.HeaderBlock,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:[r.modality," — ",r.bodyPart," ",e.jsxs("span",{className:"dim",children:["(",r.id,")"]})]}),e.jsxs("div",{className:"meta",children:[e.jsx(i.Badge,{title:`Status: ${r.status}`,children:r.status}),e.jsx(i.Badge,{tone:r.priority==="Urgent"?"danger":"info",children:r.priority}),e.jsx(i.Tag,{children:r.site})]})]}),e.jsx("div",{className:"right",children:e.jsxs(i.PillNav,{children:[e.jsx(d,{to:"/imaging",children:"All Imaging"}),e.jsx(d,{to:`/patients/${l.id}`,children:"Patient"}),l.nextApptId&&e.jsx(d,{to:`/appointments/${l.nextApptId}`,children:"Appointment"}),e.jsx(d,{to:"/labs",children:"Labs"}),e.jsx(d,{to:"/prescriptions",children:"Prescriptions"}),e.jsx(d,{to:"/reports/inventory",children:"Reports"})]})})]}),e.jsx("div",{id:"search-print-area",style:{padding:0},children:e.jsxs(i.Card,{className:"print-only",children:[e.jsx(i.CardHeader,{children:e.jsxs("div",{children:[e.jsxs("h2",{children:["Imaging Report — ",r.modality," ",r.bodyPart]}),e.jsxs("p",{children:["Study ID: ",e.jsx("strong",{children:r.id}),"  |  Patient:"," ",e.jsx("strong",{children:l.name})," (",l.sex,", ",l.age,")"]})]})}),e.jsxs(i.PrintGrid,{children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Dates"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Requested: ",g(r.requestedAt)]}),r.performedAt&&e.jsxs("li",{children:["Performed: ",g(r.performedAt)]}),r.reportedAt&&e.jsxs("li",{children:["Reported: ",g(r.reportedAt)]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Clinicians"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Requested by: ",r.requestedBy.name]}),e.jsxs("li",{children:["Radiologist: ",r.radiologist.name]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Impression"}),e.jsx("ul",{children:r.impression.map((s,h)=>e.jsx("li",{children:s},h))})]})]})]})}),e.jsxs(i.ThreeCol,{children:[e.jsxs(i.Card,{children:[e.jsxs(i.CardHeader,{children:[e.jsx("h3",{children:"Patient"}),e.jsxs(i.SmallLinks,{children:[e.jsx(d,{to:`/patients/${l.id}`,children:"Open card"}),l.nextApptId&&e.jsx(d,{to:`/appointments/${l.nextApptId}`,children:"Next appointment"})]})]}),e.jsxs(i.KeyValue,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Name"}),e.jsx("strong",{children:l.name})]}),e.jsxs("div",{children:[e.jsx("span",{children:"MRN"}),e.jsx("strong",{children:l.mrn})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Sex / Age"}),e.jsxs("strong",{children:[l.sex," / ",l.age]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Phone"}),e.jsx("strong",{children:l.phone})]})]}),((A=l.tags)==null?void 0:A.length)>0&&e.jsx(i.TagsRow,{style:{marginTop:8},children:l.tags.map(s=>e.jsx(i.Tag,{children:s},s))})]}),e.jsxs(i.Card,{children:[e.jsxs(i.CardHeader,{children:[e.jsx("h3",{children:"Study"}),e.jsxs(i.SmallLinks,{children:[e.jsx(d,{to:"/imaging",children:"All studies"}),e.jsx(d,{to:`/users/${r.requestedBy.id}`,children:"Ordering physician"})]})]}),e.jsxs(i.KeyValue,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Modality"}),e.jsx("strong",{children:r.modality})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Body part"}),e.jsx("strong",{children:r.bodyPart})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Priority"}),e.jsx("strong",{children:r.priority})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Status"}),e.jsx("strong",{children:r.status})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Requested"}),e.jsx("strong",{children:g(r.requestedAt)})]}),r.performedAt&&e.jsxs("div",{children:[e.jsx("span",{children:"Performed"}),e.jsx("strong",{children:g(r.performedAt)})]}),r.reportedAt&&e.jsxs("div",{children:[e.jsx("span",{children:"Reported"}),e.jsx("strong",{children:g(r.reportedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Radiologist"}),e.jsx("strong",{children:e.jsx(d,{to:`/users/${r.radiologist.id}`,children:r.radiologist.name})})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Site"}),e.jsx("strong",{children:r.site})]})]}),e.jsx(i.Divider,{}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:8},children:"Impression"}),e.jsx("ul",{children:r.impression.map((s,h)=>e.jsx("li",{children:s},h))})]})]}),e.jsxs(i.Card,{children:[e.jsxs(i.CardHeader,{children:[e.jsx("h3",{children:"Attachments"}),e.jsx(i.SmallLinks,{children:e.jsx(d,{to:`/print/sticker/${r.id}`,children:"Print label"})})]}),r.attachments.length===0?e.jsx(i.Empty,{children:e.jsx("p",{children:"No attachments uploaded."})}):e.jsx(i.AttachList,{children:r.attachments.map(s=>e.jsxs("li",{children:[e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:s.type==="application/pdf"?e.jsx(D,{}):e.jsx(L,{})}),e.jsxs("div",{children:[e.jsx("strong",{children:s.name}),e.jsxs("div",{className:"muted",children:[s.type," · ",s.size]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("a",{href:"#",title:"View / Download",children:"Open"}),e.jsxs("button",{onClick:()=>w("Remove (Demo)","This is a display-only demo. Removing files is disabled."),title:"Remove (demo disabled)",children:[e.jsx(X,{size:16}),"Remove"]})]})]},s.id))})]})]}),e.jsxs(i.Card,{style:{marginTop:16},children:[e.jsxs(i.CardHeader,{children:[e.jsx("h3",{children:"Series"}),e.jsxs(i.SmallLinks,{children:[e.jsx(d,{to:`/imaging/${r.id}?viewer=web`,children:"Open viewer"}),e.jsx(d,{to:"/tools/playground",children:"Open tools"})]})]}),e.jsxs(i.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Series ID"}),e.jsx("th",{children:"Description"}),e.jsx("th",{className:"num",children:"Images"}),e.jsx("th",{children:"Resolution"}),e.jsx("th",{children:"Size"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsx("tbody",{children:r.series.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.id})}),e.jsx("td",{children:s.desc}),e.jsx("td",{className:"num",children:s.images}),e.jsx("td",{children:s.res}),e.jsx("td",{children:s.size}),e.jsxs("td",{className:"actions",children:[e.jsx(d,{to:`/imaging/${r.id}?series=${encodeURIComponent(s.id)}`,title:"Open series",children:"Open"}),e.jsx(d,{to:`/print/sticker/${r.id}`,title:"Print label",children:"Label"}),e.jsx("a",{href:"#",title:"Download as ZIP",children:"Download"})]})]},s.id))})]})]}),e.jsxs(i.TwoCol,{style:{marginTop:16},children:[e.jsxs(i.Card,{children:[e.jsx(i.CardHeader,{children:e.jsx("h3",{children:"Timeline"})}),e.jsx(i.Timeline,{children:r.timeline.map((s,h)=>e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"when",children:g(s.when)}),e.jsx("div",{className:"label",children:s.label})]})]},h))})]}),e.jsxs(i.Card,{children:[e.jsx(i.CardHeader,{children:e.jsx("h3",{children:"Related"})}),e.jsxs(i.Related,{children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Labs"}),r.related.labs.length?e.jsx("ul",{children:r.related.labs.map(s=>e.jsx("li",{children:e.jsx(d,{to:`/labs/${s.id}`,children:s.label})},s.id))}):e.jsx("p",{className:"muted",children:"No linked labs."})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Prescriptions"}),r.related.prescriptions.length?e.jsx("ul",{children:r.related.prescriptions.map(s=>e.jsx("li",{children:e.jsx(d,{to:`/prescriptions/${s.id}`,children:s.label})},s.id))}):e.jsx("p",{className:"muted",children:"No linked prescriptions."})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Billing"}),r.related.invoices.length?e.jsx("ul",{children:r.related.invoices.map(s=>e.jsx("li",{children:e.jsx(d,{to:`/invoices/${s.id}`,children:s.label})},s.id))}):e.jsx("p",{className:"muted",children:"No linked invoices."})]})]})]})]}),e.jsxs(i.Card,{style:{marginTop:16},children:[e.jsx(i.CardHeader,{children:e.jsx("h3",{children:"Explore"})}),e.jsxs(i.TagsRow,{children:[Object.keys(k).map(s=>e.jsx(d,{to:`/imaging/${s}`,children:e.jsx(i.Tag,{as:"span",children:s})},s)),e.jsx(d,{to:"/imaging",children:e.jsx(i.Tag,{as:"span",children:"View catalog"})}),e.jsx(d,{to:"/reports/inventory",children:e.jsx(i.Tag,{as:"span",children:"Go to reports"})})]})]}),y&&e.jsx(i.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(i.ModalCard,{children:[e.jsxs("header",{children:[e.jsx("h3",{children:y.title}),e.jsx("button",{className:"icon",onClick:T,"aria-label":"Close",children:e.jsx(q,{size:18})})]}),e.jsx("div",{className:"body",children:e.jsx("p",{children:y.body})}),e.jsx("footer",{children:e.jsx("button",{onClick:T,children:"Close"})})]})}),e.jsx("style",{children:`
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
      `})]})}export{F as default};
