import{d as f,q as J,u as V,r as h,j as e,N as g}from"./index-BM8H5dnP.js";const x="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",y="var(--card, #111318)",o="var(--border, #23262d)",i="var(--accent, #5aa9ff)",I="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--danger, #ef4444)",L="var(--radius, 16px)",u={Page:f.div`
        padding: 24px 0 64px;
        color: ${x};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${p};
            }
            .current {
                color: ${x};
            }
        }
    `,Header:f.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${p};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${y};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${I};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDanger {
            border-color: ${$};
            color: ${$};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${$} 10%, transparent);
        }
    `,Banner:f.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${o};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${x};
    `,Grid:f.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 18px;
        }
        .twoCol {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .twoCol {
                grid-template-columns: 1fr 1fr;
            }
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${p};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .head {
            align-items: center;
        }
        .avatar {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar .pic {
            width: 96px;
            height: 96px;
            background: ${y};
            background-size: cover;
            background-position: center;
            border: 1px solid ${o};
            border-radius: ${L};
        }
        .avatar .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .avatar .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .idblocks {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(3, minmax(120px, 1fr));
        }
        .mini {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid ${o};
            background: ${y};
        }
        .mini .k {
            color: ${p};
            font-size: 12px;
        }
        .mini .v {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .badge {
            text-transform: capitalize;
            border: 1px solid ${o};
            padding: 2px 8px;
            border-radius: 999px;
            display: inline-block;
        }

        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .addr input {
            margin-bottom: 10px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${o};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${x};
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
        .hint {
            margin-top: 10px;
            color: ${p};
            font-size: 12px;
        }
        .mini {
            margin-top: 8px;
            color: ${p};
            font-size: 12px;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${p};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${y};
        }
        .links a:hover {
            color: ${i};
            border-color: ${i};
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i};
            border: 1px solid ${o};
        }
        .timeline .muted {
            color: ${p};
            font-size: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .grid .label {
            color: ${p};
            font-size: 12px;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${p};
        }
        .printSummary .v {
            color: ${x};
        }
    `,Overlay:f.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:f.div`
        width: min(520px, 92vw);
        border-radius: ${L};
        border: 1px solid ${o};
        background: ${y};
        color: ${x};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${o};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${x};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${o};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${y};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${I};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDanger {
            border-color: ${$};
            color: ${$};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${$} 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `},v=n=>String(n).padStart(2,"0"),q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=(n,t)=>{const r=n instanceof Date?n:new Date(n),l=`${q[r.getDay()]} ${K[r.getMonth()]} ${v(r.getDate())} ${r.getFullYear()}`;return t?`${l} ${v(r.getHours())}:${v(r.getMinutes())}:${v(r.getSeconds())}hrs`:l},B=n=>{const t=n instanceof Date?n:new Date(n);return`${v(t.getHours())}:${v(t.getMinutes())}:${v(t.getSeconds())}hrs`},Q=({open:n,title:t,message:r,confirmText:l="Confirm",onConfirm:D,onClose:b,tone:S="primary"})=>n?e.jsx(u.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:b,children:e.jsxs(u.Modal,{className:"card",onMouseDown:w=>w.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:t})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:r})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:b,children:"Close"}),e.jsx("button",{className:S==="danger"?"btnDanger":"btnPrimary",onClick:D,children:l})]})]})}):null,Z=({open:n,onClose:t})=>n?e.jsx(u.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:t,children:e.jsxs(u.Modal,{className:"card",onMouseDown:r=>r.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Demo mode"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:"This is a display-only preview. Create, update, and delete actions are disabled."})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:t,children:"Got it"})})]})}):null,_=()=>{const{customerId:n}=J(),t=V(),r=h.useRef(null),l=h.useMemo(()=>new Date,[]),[D,b]=h.useState(!1),[S,w]=h.useState(!1),[k,E]=h.useState(""),R=h.useMemo(()=>({id:n||"CUST-1001",code:n||"CUST-1001",firstName:"Aarav",lastName:"Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",altPhone:"+91 98111 22222",status:"active",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",company:"Bluewave Traders",website:"https://bluewave.example.com",tags:["priority","wholesale","north"],createdAt:"2025-10-04T09:18:20+05:30",updatedAt:"2025-10-04T14:28:52+05:30",contactWindow:{best:B(l),preferred:"Email"},address:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},notes:"Bulk order every last week of the month. Email preferred. Courier hard copy of invoice."}),[n,l]),[s,P]=h.useState(R),[A,z]=h.useState("");h.useEffect(()=>{if(!k)return;const a=setTimeout(()=>E(""),3500);return()=>clearTimeout(a)},[k]);const c=a=>{const{name:m,value:C}=a.target;P(N=>({...N,[m]:C}))},d=(a,m)=>{const{name:C,value:N}=m.target;P(T=>({...T,[a]:{...T[a],[C]:N}}))},U=a=>{var N;const m=(N=a.target.files)==null?void 0:N[0];if(!m)return;const C=URL.createObjectURL(m);z(C)},O=()=>z(""),G=()=>b(!0),F=()=>{t(s!=null&&s.id?`/customers/${s.id}`:"/customers")},H=()=>w(!0),W=()=>{w(!1),b(!0)},Y=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},M=`${s.firstName||""} ${s.lastName||""}`.trim();return e.jsxs(u.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Edit Customer"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(g,{to:"/customers",children:"Customers"}),e.jsx("span",{children:"/"}),e.jsx(g,{to:`/customers/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Edit"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",j(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",j(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:F,title:"Back to details",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:G,title:"Save changes (demo disabled)",children:"Save"}),e.jsx("button",{className:"btnPrimary",onClick:G,title:"Save and open details (demo disabled)",children:"Save & View"}),e.jsx("button",{className:"btnDanger",onClick:H,title:"Delete customer",children:"Delete"}),e.jsx("button",{className:"btnGhost",onClick:Y,title:"Print summary",children:"Print"})]})]}),k?e.jsx(u.Banner,{role:"status","aria-live":"polite",children:k}):null,e.jsxs(u.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"row head",children:[e.jsxs("div",{className:"avatar",children:[e.jsx("div",{className:"pic",style:{backgroundImage:`url(${A||"/avatar.svg"})`}}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"btnGhost small",children:["Upload Photo",e.jsx("input",{type:"file",accept:"image/*",onChange:U,hidden:!0})]}),A?e.jsx("button",{className:"btnGhost small",onClick:O,children:"Remove"}):null,e.jsx("a",{className:"btnGhost small",href:A||"/avatar.svg",download:!0,children:"Download"})]})]}),e.jsxs("div",{className:"idblocks",children:[e.jsxs("div",{className:"card mini",children:[e.jsx("div",{className:"k",children:"Customer"}),e.jsx("div",{className:"v",children:M||s.id})]}),e.jsxs("div",{className:"card mini",children:[e.jsx("div",{className:"k",children:"Code"}),e.jsx("div",{className:"v",children:s.code})]}),e.jsxs("div",{className:"card mini",children:[e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v badge",children:s.status})]})]})]}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"}),e.jsx("input",{name:"firstName",value:s.firstName,onChange:c,placeholder:"First name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{name:"lastName",value:s.lastName,onChange:c,placeholder:"Last name"})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{name:"email",type:"email",value:s.email,onChange:c,placeholder:"name@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{name:"phone",value:s.phone,onChange:c,placeholder:"+91 ..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Alt Phone"}),e.jsx("input",{name:"altPhone",value:s.altPhone,onChange:c,placeholder:"+91 ..."})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Company"}),e.jsx("input",{name:"company",value:s.company,onChange:c,placeholder:"Company"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{name:"website",value:s.website,onChange:c,placeholder:"https://..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:s.status,onChange:c,children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"prospect",children:"Prospect"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"GSTIN"}),e.jsx("input",{name:"gstin",value:s.gstin,onChange:c,placeholder:"GSTIN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"PAN"}),e.jsx("input",{name:"pan",value:s.pan,onChange:c,placeholder:"PAN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Customer Code"}),e.jsx("input",{name:"code",value:s.code,onChange:c,placeholder:"Customer code"})]})]})]})}),e.jsxs("div",{className:"row twoCol",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:s.address.line1,onChange:a=>d("address",a),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:s.address.line2,onChange:a=>d("address",a),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:s.address.city,onChange:a=>d("address",a),placeholder:"City"}),e.jsx("input",{name:"state",value:s.address.state,onChange:a=>d("address",a),placeholder:"State"}),e.jsx("input",{name:"zip",value:s.address.zip,onChange:a=>d("address",a),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:s.address.country,onChange:a=>d("address",a),placeholder:"Country"})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:s.shipping.line1,onChange:a=>d("shipping",a),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:s.shipping.line2,onChange:a=>d("shipping",a),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:s.shipping.city,onChange:a=>d("shipping",a),placeholder:"City"}),e.jsx("input",{name:"state",value:s.shipping.state,onChange:a=>d("shipping",a),placeholder:"State"}),e.jsx("input",{name:"zip",value:s.shipping.zip,onChange:a=>d("shipping",a),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:s.shipping.country,onChange:a=>d("shipping",a),placeholder:"Country"})]})]})]}),e.jsxs("div",{className:"row twoCol",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Tags"}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))}),e.jsx("p",{className:"hint",children:"Tags help quick filters and segments."})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Notes"}),e.jsx("textarea",{rows:6,value:s.notes,onChange:a=>P(m=>({...m,notes:a.target.value})),placeholder:"Internal notes…"}),e.jsx("div",{className:"mini",children:e.jsxs("span",{children:["Last edit: ",j(l,!0)]})})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(g,{to:`/customers/${s.id}`,children:"View Details"})}),e.jsx("li",{children:e.jsx(g,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(g,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(g,{to:"/receipts",children:"Receipts"})}),e.jsx("li",{children:e.jsx(g,{to:"/reports/customers",children:"Customer Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Profile updated"}),e.jsx("div",{className:"muted",children:j(l,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Invoice #INV-2031 emailed"}),e.jsx("div",{className:"muted",children:j(l,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Order #ORD-3456 created"}),e.jsx("div",{className:"muted",children:j(l)})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Contact Window"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Best time"}),e.jsx("div",{children:B(l)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Preferred"}),e.jsx("div",{children:s.contactWindow.preferred})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:r,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[M," (",s.id,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Address"}),e.jsxs("span",{className:"v",children:[s.address.line1,", ",s.address.line2,", ",s.address.city," ",s.address.zip,", ",s.address.state,", ",s.address.country]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:j(s.createdAt,!0)})]})]})]})]})]}),e.jsx(Z,{open:D,onClose:()=>b(!1)}),e.jsx(Q,{open:S,title:"Delete customer?",message:"This action cannot be undone. ",tone:"danger",confirmText:"Delete",onConfirm:W,onClose:()=>w(!1)})]})};export{_ as default};
