import{d as r,u as te,a as ae,r as g,j as e,N as s}from"./index-LshBDmDj.js";import{o as se,F as ie,r as F,X as R,Y as U,q as O,x as z,a as G}from"./index-CyH35cVY.js";const ne="var(--bg, #0d1117)",p="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",x="var(--card, #111318)",o="var(--border, #23262d)",a="var(--accent, #5aa9ff)",W="var(--accent-soft, rgba(90,169,255,0.15))",oe=r.div`
    width: 100%;
    color: ${p};
`,re=r.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
`,de=r.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    a {
        color: ${m};
    }
    a:hover {
        color: ${a};
    }
    span {
        color: ${m};
    }
    strong {
        color: ${p};
        letter-spacing: 0.2px;
    }
`,le=r.div`
    display: flex;
    align-items: center;
    gap: 8px;
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${o};
        background: ${x};
        color: ${p};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
            background 0.2s;
    }
    .btn:hover {
        border-color: ${a};
        color: ${a};
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .ghost {
        background: transparent;
    }
`,ce=r.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`,pe=r.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    border: 1px solid ${o};
    background: ${x};
    border-radius: 10px;
    padding: 8px 12px;
    svg {
        opacity: 0.9;
    }
    input {
        background: transparent;
        color: ${p};
        border: none;
        outline: none;
        height: 28px;
    }
    .clear {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 28px;
        border: 1px solid ${o};
        background: transparent;
        color: ${m};
        border-radius: 8px;
    }
    .clear:hover {
        color: ${a};
        border-color: ${a};
    }
`,xe=r.div`
    display: flex;
    gap: 8px;
    label {
        display: grid;
        gap: 4px;
        font-size: 12px;
        color: ${m};
    }
    select {
        background: ${x};
        color: ${p};
        border: 1px solid ${o};
        border-radius: 8px;
        height: 36px;
        padding: 0 10px;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    select:focus {
        border-color: ${a};
        box-shadow: 0 0 0 3px ${W};
    }
`,me=r.div`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
    button {
        border: 1px solid ${o};
        background: ${x};
        color: ${m};
        padding: 6px 10px;
        border-radius: 999px;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    button:hover {
        color: ${a};
        border-color: ${a};
    }
    .active {
        color: ${p};
        border-color: ${a};
        box-shadow: 0 0 0 3px ${W};
    }
`,ge=r.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1.7fr 1.1fr;
    align-items: start;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`,he=r.section`
    border: 1px solid ${o};
    background: ${x};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`,ue=r.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${x};
        border-bottom: 1px solid ${o};
        text-align: left;
        padding: 10px;
        color: ${a};
        letter-spacing: 0.3px;
    }
    tbody td {
        border-bottom: 1px solid ${o};
        padding: 10px;
        vertical-align: top;
    }
    .idlink {
        color: ${p};
    }
    .idlink:hover {
        color: ${a};
    }
    .name {
        font-weight: 600;
    }
    .vars {
        display: flex;
        gap: 6px;
        margin-top: 4px;
        flex-wrap: wrap;
    }
    .rowActions {
        white-space: nowrap;
        text-align: right;
    }
    .rowActions .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${o};
        background: transparent;
        color: ${m};
        border-radius: 8px;
        height: 30px;
        width: 30px;
        margin-left: 6px;
        cursor: pointer;
    }
    .rowActions .icon:hover {
        color: ${a};
        border-color: ${a};
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody tr.selected {
        background: color-mix(in oklab, ${a} 10%, transparent);
    }
    .usage {
        font-variant-numeric: tabular-nums;
    }
    .muted {
        color: ${m};
        font-size: 12px;
        margin-top: 2px;
    }
`,be=r.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px;
    color: ${m};
    .quicklinks {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .quicklinks a {
        color: ${m};
    }
    .quicklinks a:hover {
        color: ${a};
    }
`,je=r.section`
    border: 1px solid ${o};
    background: ${x};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    min-height: 420px;
`,ye=r.div`
    padding: 16px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 12px;
    }
    .title {
        display: grid;
        gap: 8px;
    }
    h2 {
        font-size: 18px;
        letter-spacing: 0.3px;
    }
    .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${o};
        background: ${x};
        color: ${p};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${a};
        color: ${a};
    }
    .ghost {
        background: transparent;
    }
    .danger {
        border-color: ${o};
    }
    .danger:hover {
        border-color: ${a};
        color: ${a};
    }
`,ve=r.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
    .label {
        color: ${m};
        font-size: 12px;
    }
    .value {
        font-weight: 600;
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
`,fe=r.section`
    margin-top: 12px;
    .sectionTitle {
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: 0.3px;
    }
    .rowBtns {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${o};
        background: ${x};
        color: ${p};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${a};
        color: ${a};
    }
    .btn.danger {
        background: color-mix(in oklab, ${a} 10%, transparent);
    }
`,$e=r.div`
    border: 1px solid ${o};
    border-radius: 16px;
    padding: 12px;
    background: ${ne};
    .smsHeader {
        color: ${m};
        margin-bottom: 10px;
    }
    .smsBubble {
        background: ${x};
        border: 1px solid ${o};
        border-radius: 12px;
        padding: 12px;
        line-height: 1.6;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    .smsBubble .token {
        padding: 2px 6px;
        border-radius: 6px;
        margin: 0 2px;
        background: color-mix(in oklab, ${a} 12%, transparent);
        border: 1px dashed ${a};
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
    .smsTime {
        color: ${m};
        font-size: 12px;
        margin-top: 8px;
        text-align: right;
    }
`,Te=r.span`
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 8px;
    border: 1px solid ${o};
    border-radius: 999px;
    font-size: 12px;
    color: ${p};
    background: color-mix(in oklab, ${x} 92%, transparent);
`,Se=r.div`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    &.wrap {
        flex-wrap: wrap;
    }
    .chiplink {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        border: 1px solid ${o};
        color: ${p};
    }
    .chiplink:hover {
        border-color: ${a};
        color: ${a};
    }
`,ke=r.span`
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${o};
    color: ${p};
    &[data-status="Active"] {
        background: color-mix(in oklab, ${a} 12%, transparent);
        border-color: ${a};
    }
    &[data-status="Paused"] {
        opacity: 0.75;
    }
    &[data-status="Draft"] {
        opacity: 0.6;
        font-style: italic;
    }
`,Ne=r.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
    a {
        border: 1px solid ${o};
        border-radius: 10px;
        padding: 10px;
        color: ${p};
        text-align: center;
        background: color-mix(in oklab, ${x} 94%, transparent);
    }
    a:hover {
        border-color: ${a};
        color: ${a};
    }
`,Ae=r.div`
    display: grid;
    place-content: center;
    min-height: 380px;
    text-align: center;
    gap: 8px;
    color: ${m};
    .title {
        color: ${p};
        font-weight: 700;
        letter-spacing: 0.3px;
    }
    .sub {
        max-width: 520px;
    }
`,we=r.div`
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: ${x};
    color: ${p};
    border: 1px solid ${o};
    border-radius: 10px;
    padding: 10px 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`,Ce=r.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.55);
    .box {
        width: min(620px, 92vw);
        background: ${x};
        border: 1px solid ${o};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    }
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${o};
    }
    .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        border-radius: 8px;
        border: 1px solid ${o};
        background: transparent;
        color: ${m};
    }
    .icon:hover {
        color: ${a};
        border-color: ${a};
    }
    .body {
        padding: 14px;
        display: grid;
        gap: 8px;
    }
    .foot {
        padding: 12px 14px;
        border-top: 1px solid ${o};
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${o};
        background: ${x};
        color: ${p};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${a};
        color: ${a};
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
`,i={Wrap:oe,HeaderBar:re,Breadcrumbs:de,HeaderActions:le,TopStrip:ce,SearchBox:pe,Filters:xe,Tabs:me,Grid:ge,ListPane:he,Table:ue,ListFooter:be,DetailPane:je,PreviewCard:ye,MetaGrid:ve,Section:fe,SmsScreen:$e,Badge:Te,Chips:Se,Status:ke,LinksGrid:Ne,EmptyState:Ae,Toast:we,Modal:Ce},N=[{id:"TMP-1001",name:"Login OTP",type:"OTP",category:"Transactional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000001",status:"Active",lastUpdated:"2025-10-04T15:38:20+05:30",variables:["otp","minutes"],body:"Your OTP is {{otp}}. It expires in {{minutes}} minutes. Do not share this with anyone.",usage:{last30d:12890,lastSentAt:"2025-10-04T12:10:05+05:30"}},{id:"TMP-1002",name:"Order Confirmed",type:"System",category:"Transactional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000002",status:"Active",lastUpdated:"2025-09-30T09:12:43+05:30",variables:["order_id","amount"],body:"Order {{order_id}} confirmed. Payment of ₹{{amount}} received. Track from account → Orders.",usage:{last30d:7852,lastSentAt:"2025-10-04T10:28:18+05:30"}},{id:"TMP-1003",name:"Delivery Out for Delivery",type:"Alert",category:"Transactional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000003",status:"Active",lastUpdated:"2025-09-26T18:28:57+05:30",variables:["shipment_id","eta"],body:"Shipment {{shipment_id}} is out for delivery. ETA: {{eta}}. Keep phone reachable.",usage:{last30d:5090,lastSentAt:"2025-10-04T09:13:42+05:30"}},{id:"TMP-1004",name:"Low Balance Reminder",type:"Reminder",category:"System",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000004",status:"Active",lastUpdated:"2025-09-21T11:05:23+05:30",variables:["balance"],body:"Heads up! Your wallet balance is ₹{{balance}}. Recharge to avoid interruptions.",usage:{last30d:2130,lastSentAt:"2025-10-03T20:22:28+05:30"}},{id:"TMP-1005",name:"Welcome Promo",type:"Campaign",category:"Promotional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000005",status:"Paused",lastUpdated:"2025-09-20T14:55:01+05:30",variables:["code"],body:"Welcome aboard! Use code {{code}} on your first purchase. T&C apply.",usage:{last30d:1200,lastSentAt:"2025-09-28T19:01:31+05:30"}},{id:"TMP-1006",name:"Password Reset",type:"System",category:"Transactional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000006",status:"Active",lastUpdated:"2025-09-18T08:10:10+05:30",variables:["link","minutes"],body:"Reset password link: {{link}}. Valid for {{minutes}} minutes.",usage:{last30d:3400,lastSentAt:"2025-10-04T13:48:04+05:30"}},{id:"TMP-1007",name:"Invoice Paid",type:"System",category:"Transactional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000007",status:"Active",lastUpdated:"2025-09-17T17:37:11+05:30",variables:["invoice_id","amount"],body:"Invoice {{invoice_id}} for ₹{{amount}} has been paid. Thank you.",usage:{last30d:980,lastSentAt:"2025-10-01T16:12:57+05:30"}},{id:"TMP-1008",name:"New Device Login",type:"Alert",category:"System",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000008",status:"Active",lastUpdated:"2025-09-15T19:00:42+05:30",variables:["device","location"],body:"New login from {{device}} at {{location}}. If this wasn't you, secure your account.",usage:{last30d:560,lastSentAt:"2025-10-02T07:25:33+05:30"}},{id:"TMP-1009",name:"Abandoned Cart",type:"Campaign",category:"Promotional",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000009",status:"Draft",lastUpdated:"2025-09-10T10:02:20+05:30",variables:["percent"],body:"Items are waiting! Complete your order and save {{percent}} today.",usage:{last30d:0,lastSentAt:null}},{id:"TMP-1010",name:"Appointment Reminder",type:"Reminder",category:"System",language:"en",senderId:"ACME",dltTemplateId:"1107167354321000010",status:"Active",lastUpdated:"2025-09-08T21:16:55+05:30",variables:["date","time"],body:"Reminder: Appointment on {{date}} at {{time}}. Reply 1 to confirm.",usage:{last30d:260,lastSentAt:"2025-10-03T08:45:02+05:30"}}],Me=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ie=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=l=>l<10?`0${l}`:`${l}`;function q(l){const c=new Date(l);return`${Me[c.getDay()]} ${Ie[c.getMonth()]} ${S(c.getDate())} ${c.getFullYear()}`}function A(l){const c=new Date(l);return`${S(c.getHours())}:${S(c.getMinutes())}:${S(c.getSeconds())}hrs`}function T(l){const c=new Date(l);return`${q(c)} ${A(c)}`}const h=({children:l})=>e.jsx(i.Badge,{children:l}),H=({status:l})=>e.jsx(i.Status,{"data-status":l,children:l}),Pe=["All","Transactional","Promotional","System","OTP","Reminder","Alert"],De=()=>{var D,B;te();const{pathname:l}=ae(),[c,w]=g.useState(""),[u,V]=g.useState("All"),[b,_]=g.useState("Any"),[j,Y]=g.useState("Any"),[y,k]=g.useState("TMP-1001"),[v,C]=g.useState({open:!1,action:null,template:null}),[M,f]=g.useState("");g.useEffect(()=>{const t=l.split("/").slice(-1)[0];/^TMP-\d{4,}$/.test(t)&&k(t)},[l]);const $=g.useMemo(()=>{const t=c.trim().toLowerCase().split(/\s+/).filter(Boolean);return N.filter(d=>{const J=u==="All"||d.category===u||d.type===u,X=b==="Any"||d.status===b,Q=j==="Any"||d.language===j,K=(d.name+" "+d.body+" "+d.id+" "+d.type+" "+d.category+" "+d.senderId).toLowerCase(),Z=t.length===0||t.every(ee=>K.includes(ee));return J&&X&&Q&&Z})},[c,u,b,j]),n=g.useMemo(()=>$.find(t=>t.id===y)||N.find(t=>t.id===y),[$,y]),I=async t=>{try{await navigator.clipboard.writeText(t),f("Copied template body"),setTimeout(()=>f(""),1600)}catch{f("Copy failed"),setTimeout(()=>f(""),1600)}},P=(t,d)=>C({open:!0,action:t,template:d}),L=()=>C({open:!1,action:null,template:null}),E=()=>{document.getElementById("search-print-area")&&(document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),50))};return e.jsxs(i.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(i.HeaderBar,{children:[e.jsxs(i.Breadcrumbs,{children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:"/admin",children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"SMS Templates"})]}),e.jsxs(i.HeaderActions,{children:[e.jsx(s,{className:"btn ghost",to:"/admin/email-templates",title:"Go to Email Templates",children:"Email Templates"}),e.jsx(s,{className:"btn ghost",to:"/settings/notifications",title:"Notification Settings",children:"Notifications"}),e.jsx(s,{className:"btn ghost",to:"/admin/audit-log",title:"View Audit Log",children:"Audit Log"}),e.jsxs("button",{className:"btn",disabled:!0,title:"Demo: disabled",children:[e.jsx(se,{})," New Template"]})]})]}),e.jsxs(i.TopStrip,{children:[e.jsxs(i.SearchBox,{children:[e.jsx(ie,{}),e.jsx("input",{value:c,onChange:t=>w(t.target.value),placeholder:"Search templates (e.g., OTP, invoice, reminder)","aria-label":"Search SMS templates"}),c&&e.jsx("button",{className:"clear",onClick:()=>w(""),"aria-label":"Clear search",children:e.jsx(F,{})})]}),e.jsxs(i.Filters,{children:[e.jsxs("label",{children:["Status",e.jsxs("select",{value:b,onChange:t=>_(t.target.value),children:[e.jsx("option",{children:"Any"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Paused"}),e.jsx("option",{children:"Draft"})]})]}),e.jsxs("label",{children:["Language",e.jsxs("select",{value:j,onChange:t=>Y(t.target.value),children:[e.jsx("option",{children:"Any"}),e.jsx("option",{children:"en"})]})]})]})]}),e.jsx(i.Tabs,{children:Pe.map(t=>e.jsx("button",{className:u===t?"active":"",onClick:()=>V(t),"aria-pressed":u===t,children:t},t))}),e.jsxs(i.Grid,{children:[e.jsxs(i.ListPane,{children:[e.jsxs(i.Table,{role:"table","aria-label":"SMS template listing",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Template"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Lang"}),e.jsx("th",{children:"Sender"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Updated"}),e.jsx("th",{children:"Usage (30d)"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:$.map(t=>e.jsxs("tr",{className:t.id===y?"selected":"",onClick:()=>k(t.id),children:[e.jsx("td",{children:e.jsx(s,{to:`/admin/sms-templates/${t.id}`,className:"idlink",title:"Open details",children:t.id})}),e.jsxs("td",{children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"vars",children:t.variables.map(d=>e.jsx(h,{children:`{{${d}}}`},d))})]}),e.jsx("td",{children:e.jsxs(i.Chips,{children:[e.jsx(h,{children:t.type}),t.category!==t.type&&e.jsx(h,{children:t.category})]})}),e.jsx("td",{children:t.language}),e.jsx("td",{children:t.senderId}),e.jsx("td",{children:e.jsx(H,{status:t.status})}),e.jsx("td",{title:T(t.lastUpdated),children:q(t.lastUpdated)}),e.jsxs("td",{children:[e.jsx("div",{className:"usage",children:t.usage.last30d.toLocaleString()}),e.jsx("div",{className:"muted",children:t.usage.lastSentAt?T(t.usage.lastSentAt):"—"})]}),e.jsxs("td",{className:"rowActions",onClick:d=>d.stopPropagation(),children:[e.jsx(s,{className:"icon",to:`/admin/sms-templates/${t.id}`,title:"View",children:e.jsx(R,{})}),e.jsx(s,{className:"icon",to:`/admin/sms-templates/${t.id}/edit`,title:"Edit",children:e.jsx(U,{})}),e.jsx("button",{className:"icon",onClick:()=>P("archive",t),title:"Archive (demo)",children:e.jsx(O,{})}),e.jsx("button",{className:"icon",onClick:()=>I(t.body),title:"Copy body",children:e.jsx(z,{})}),e.jsx("button",{className:"icon",onClick:()=>{k(t.id),E()},title:"Print preview",children:e.jsx(G,{})})]})]},t.id))})]}),e.jsxs(i.ListFooter,{children:[e.jsxs("div",{className:"hint",children:["Showing ",e.jsx("strong",{children:$.length})," of ",e.jsx("strong",{children:N.length})," templates"]}),e.jsxs("div",{className:"quicklinks",children:[e.jsx(s,{to:"/admin/integrations",children:"Integrations"}),e.jsx(s,{to:"/admin/users",children:"Users"}),e.jsx(s,{to:"/admin/roles",children:"Roles"}),e.jsx(s,{to:"/settings/appearance",children:"Appearance"}),e.jsx(s,{to:"/reports/customers",children:"Reports → Customers"}),e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})]})]})]}),e.jsx(i.DetailPane,{id:"search-print-area","aria-live":"polite",children:n?e.jsxs(i.PreviewCard,{children:[e.jsxs("header",{children:[e.jsxs("div",{className:"title",children:[e.jsx("h2",{children:n.name}),e.jsxs(i.Chips,{children:[e.jsx(h,{children:n.type}),n.category!==n.type&&e.jsx(h,{children:n.category}),e.jsxs(h,{children:["lang: ",n.language]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs(s,{className:"btn ghost",to:`/admin/sms-templates/${n.id}`,children:[e.jsx(R,{})," View"]}),e.jsxs(s,{className:"btn ghost",to:`/admin/sms-templates/${n.id}/edit`,children:[e.jsx(U,{})," Edit"]}),e.jsxs("button",{className:"btn",onClick:()=>E(),children:[e.jsx(G,{})," Print"]})]})]}),e.jsxs(i.MetaGrid,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Template ID"}),e.jsx("div",{className:"value mono",children:n.id})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"DLT ID"}),e.jsx("div",{className:"value mono",children:n.dltTemplateId})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Sender ID"}),e.jsx("div",{className:"value",children:n.senderId})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{className:"value",children:e.jsx(H,{status:n.status})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Last Updated"}),e.jsx("div",{className:"value",children:T(n.lastUpdated)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Last Sent"}),e.jsx("div",{className:"value",children:n.usage.lastSentAt?T(n.usage.lastSentAt):"—"})]})]}),e.jsxs(i.Section,{children:[e.jsx("div",{className:"sectionTitle",children:"Variables"}),e.jsx(i.Chips,{className:"wrap",children:n.variables.map(t=>e.jsx(h,{children:`{{${t}}}`},t))})]}),e.jsxs(i.Section,{children:[e.jsx("div",{className:"sectionTitle",children:"Body"}),e.jsxs(i.SmsScreen,{children:[e.jsxs("div",{className:"smsHeader",children:["@",n.senderId]}),e.jsx("div",{className:"smsBubble",children:n.body.split(/(\{\{.*?\}\})/g).map((t,d)=>t.startsWith("{{")?e.jsx("span",{className:"token",children:t},d):e.jsx("span",{children:t},d))}),e.jsx("div",{className:"smsTime",children:n.usage.lastSentAt?A(n.usage.lastSentAt):A(n.lastUpdated)})]}),e.jsxs("div",{className:"rowBtns",children:[e.jsxs("button",{className:"btn ghost",onClick:()=>I(n.body),children:[e.jsx(z,{})," Copy Body"]}),e.jsx(s,{className:"btn ghost",to:`/tools/playground?tab=sms&tmpl=${n.id}`,children:"Open in Playground"}),e.jsx(s,{className:"btn ghost",to:`/admin/sms-templates/new?from=${n.id}`,children:"Duplicate"}),e.jsxs("button",{className:"btn danger",onClick:()=>P("archive",n),children:[e.jsx(O,{})," Archive"]})]})]}),e.jsxs(i.Section,{children:[e.jsx("div",{className:"sectionTitle",children:"Navigation"}),e.jsxs(i.LinksGrid,{children:[e.jsx(s,{to:"/admin/email-templates",children:"Email Templates"}),e.jsx(s,{to:"/admin/integrations",children:"Integrations"}),e.jsx(s,{to:"/settings/notifications",children:"Notification Settings"}),e.jsx(s,{to:"/reports/sales",children:"Reports → Sales"}),e.jsx(s,{to:"/reports/inventory",children:"Reports → Inventory"}),e.jsx(s,{to:"/reports/gst",children:"Reports → GST"}),e.jsx(s,{to:"/tools/import-export",children:"Import / Export"}),e.jsx(s,{to:"/admin/audit-log",children:"Audit Log"}),e.jsx(s,{to:"/admin/system-status",children:"System Status"})]})]})]}):e.jsxs(i.EmptyState,{children:[e.jsx("div",{className:"title",children:"Select a template to preview"}),e.jsx("div",{className:"sub",children:"Pick from the left list to see variables, DLT details, and a live preview."})]})})]}),M&&e.jsx(i.Toast,{role:"status","aria-live":"polite",children:M}),v.open&&e.jsx(i.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{id:"demo-modal-title",children:"Action unavailable in demo"}),e.jsx("button",{className:"icon",onClick:L,"aria-label":"Close",children:e.jsx(F,{})})]}),e.jsxs("div",{className:"body",children:[e.jsxs("p",{children:["This is a display-only theme. ",e.jsx("strong",{children:v.action})," for ",e.jsx("span",{className:"mono",children:(D=v.template)==null?void 0:D.id})," is disabled."]}),e.jsx("p",{children:"Explore other areas instead:"}),e.jsxs(i.Chips,{className:"wrap",children:[e.jsx(s,{className:"chiplink",to:"/admin/audit-log",children:"Audit Log"}),e.jsx(s,{className:"chiplink",to:"/admin/integrations",children:"Integrations"}),e.jsx(s,{className:"chiplink",to:"/settings/notifications",children:"Notifications"}),e.jsx(s,{className:"chiplink",to:`/admin/sms-templates/${(B=v.template)==null?void 0:B.id}`,children:"View Template"})]})]}),e.jsx("div",{className:"foot",children:e.jsx("button",{className:"btn",onClick:L,children:"Got it"})})]})})]})};export{De as default};
