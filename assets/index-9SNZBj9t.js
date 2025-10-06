import{d as f,u as L,r as v,j as e,N as g}from"./index-LshBDmDj.js";const h="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",w="var(--card, #111318)",u="var(--border, #23262d)",c="var(--accent, #5aa9ff)",R="var(--accent-soft, rgba(90,169,255,0.15))",T="var(--radius, 16px)",y={Page:f.div`
        padding: 24px 0 64px;
        color: ${h};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${x};
            }
            .current {
                color: ${h};
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
            color: ${x};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${u};
            background: ${w};
            color: ${h};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${c};
            color: ${c};
            box-shadow: 0 0 0 3px ${R};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${c};
            color: ${c};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,InfoBanner:f.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${u};
        border-radius: 10px;
        background: color-mix(in oklab, ${c} 10%, transparent);
        color: ${h};
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

        .twoCols {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .twoCols {
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
            color: ${x};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
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

        /* avatar */
        .avatar {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar .pic {
            width: 96px;
            height: 96px;
            background: ${w};
            background-size: cover;
            background-position: center;
            border: 1px solid ${u};
            border-radius: ${T};
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

        /* tags */
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
        }
        .chip {
            border: 1px solid ${u};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${h};
            background: color-mix(in oklab, ${c} 8%, transparent);
            cursor: pointer;
            user-select: none;
        }
        .tagInput {
            margin-top: 6px;
        }

        .hint {
            margin-top: 10px;
            color: ${x};
            font-size: 12px;
        }
        .mini {
            margin-top: 8px;
            color: ${x};
            font-size: 12px;
        }

        /* sidebar cards */
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
            color: ${x};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${u};
            background: ${w};
        }
        .links a:hover {
            color: ${c};
            border-color: ${c};
        }

        .preview {
            display: grid;
            gap: 12px;
        }
        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .label {
            color: ${x};
            font-size: 12px;
        }
        .value {
            color: ${h};
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border: 1px solid ${u};
            border-radius: 999px;
            background: color-mix(in oklab, ${c} 10%, transparent);
            text-transform: capitalize;
        }

        .tagsView {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tagsView .tag {
            border: 1px solid ${u};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${c} 8%, transparent);
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
            color: ${x};
        }
        .printSummary .v {
            color: ${h};
        }
    `},$=(o,p)=>{const n=o instanceof Date?o:new Date(o),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=N=>String(N).padStart(2,"0");return`${`${m[n.getDay()]} ${s[n.getMonth()]} ${d(n.getDate())} ${n.getFullYear()}`} ${d(n.getHours())}:${d(n.getMinutes())}:${d(n.getSeconds())}hrs`},B=o=>{const p=o instanceof Date?o:new Date(o),n=m=>String(m).padStart(2,"0");return`${n(p.getHours())}:${n(p.getMinutes())}:${n(p.getSeconds())}hrs`},E=()=>{const o=L(),p=v.useMemo(()=>new Date,[]),n=v.useRef(null),m=v.useRef(null),[s,d]=v.useState({firstName:"",lastName:"",email:"",phone:"",altPhone:"",gender:"",dob:"",company:"",website:"",status:"active",gstin:"",pan:"",address:{line1:"",line2:"",city:"",state:"",zip:"",country:"India"},shipping:{line1:"",line2:"",city:"",state:"",zip:"",country:"India"},tags:["prospect"],notes:"",avatar:""}),[b,N]=v.useState(""),C=`${s.firstName||""} ${s.lastName||""}`.trim()||"New Customer",k="Will be assigned on save",l=a=>{const{name:i,value:t}=a.target;d(j=>({...j,[i]:t}))},r=(a,i)=>{const{name:t,value:j}=i.target;d(S=>({...S,[a]:{...S[a],[t]:j}}))},P=a=>{var j;const i=(j=a.target.files)==null?void 0:j[0];if(!i)return;const t=URL.createObjectURL(i);N(t)},D=()=>{N(""),m.current&&(m.current.value="")},z=a=>{if(a.key!=="Enter")return;const i=a.target.value.trim();i&&(d(t=>t.tags.includes(i)?t:{...t,tags:[...t.tags,i]}),a.target.value="")},I=a=>{d(i=>({...i,tags:i.tags.filter(t=>t!==a)}))},A=()=>{n.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},G=()=>o("/customers");return e.jsxs(y.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(y.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Customer"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(g,{to:"/customers",children:"Customers"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Draft started: ",$(p)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Best time to contact: ",B(p)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:G,title:"Back to list",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",disabled:!0,"aria-disabled":"true",title:"Demo mode",children:"Save Draft"}),e.jsx("button",{className:"btnPrimary",disabled:!0,"aria-disabled":"true",title:"Demo mode",children:"Create Customer"}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Print summary",children:"Print"})]})]}),e.jsx(y.InfoBanner,{role:"status","aria-live":"polite",children:"Display-only demo. Actions like “Create” and “Save” are disabled."}),e.jsxs(y.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"row head",children:[e.jsxs("div",{className:"avatar",children:[e.jsx("div",{className:"pic",style:{backgroundImage:`url(${b||"/avatar.svg"})`}}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"btnGhost small",children:["Upload Photo",e.jsx("input",{ref:m,type:"file",accept:"image/*",onChange:P,hidden:!0})]}),b?e.jsx("button",{className:"btnGhost small",onClick:D,children:"Remove"}):null,e.jsx("a",{className:"btnGhost small",href:b||"/avatar.svg",download:!0,children:"Download"})]})]}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"}),e.jsx("input",{name:"firstName",value:s.firstName,onChange:l,placeholder:"First name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{name:"lastName",value:s.lastName,onChange:l,placeholder:"Last name"})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{name:"email",type:"email",value:s.email,onChange:l,placeholder:"name@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{name:"phone",value:s.phone,onChange:l,placeholder:"+91 ..."})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Alt Phone"}),e.jsx("input",{name:"altPhone",value:s.altPhone,onChange:l,placeholder:"+91 ..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{name:"gender",value:s.gender,onChange:l,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"}),e.jsx("option",{value:"na",children:"N/A"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Date of Birth"}),e.jsx("input",{name:"dob",type:"date",value:s.dob,onChange:l})]})]})]})]}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Company"}),e.jsx("input",{name:"company",value:s.company,onChange:l,placeholder:"Company name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{name:"website",value:s.website,onChange:l,placeholder:"https://..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:s.status,onChange:l,children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"prospect",children:"Prospect"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"GSTIN"}),e.jsx("input",{name:"gstin",value:s.gstin,onChange:l,placeholder:"GSTIN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"PAN"}),e.jsx("input",{name:"pan",value:s.pan,onChange:l,placeholder:"PAN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Customer Code"}),e.jsx("input",{value:k,readOnly:!0})]})]})]})}),e.jsxs("div",{className:"row twoCols",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:s.address.line1,onChange:a=>r("address",a),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:s.address.line2,onChange:a=>r("address",a),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:s.address.city,onChange:a=>r("address",a),placeholder:"City"}),e.jsx("input",{name:"state",value:s.address.state,onChange:a=>r("address",a),placeholder:"State"}),e.jsx("input",{name:"zip",value:s.address.zip,onChange:a=>r("address",a),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:s.address.country,onChange:a=>r("address",a),placeholder:"Country"})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:s.shipping.line1,onChange:a=>r("shipping",a),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:s.shipping.line2,onChange:a=>r("shipping",a),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:s.shipping.city,onChange:a=>r("shipping",a),placeholder:"City"}),e.jsx("input",{name:"state",value:s.shipping.state,onChange:a=>r("shipping",a),placeholder:"State"}),e.jsx("input",{name:"zip",value:s.shipping.zip,onChange:a=>r("shipping",a),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:s.shipping.country,onChange:a=>r("shipping",a),placeholder:"Country"})]})]})]}),e.jsxs("div",{className:"row twoCols",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Tags"}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",role:"button",title:"Remove",onClick:()=>I(a),children:a},a))}),e.jsx("input",{className:"tagInput",placeholder:"Add tag and press Enter",onKeyDown:z}),e.jsx("p",{className:"hint",children:"Use tags for quick filters and segments."})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Notes"}),e.jsx("textarea",{rows:6,value:s.notes,onChange:a=>d(i=>({...i,notes:a.target.value})),placeholder:"Internal notes…"}),e.jsx("div",{className:"mini",children:e.jsxs("span",{children:["Last edit: ",$(p)]})})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(g,{to:"/customers",children:"All Customers"})}),e.jsx("li",{children:e.jsx(g,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(g,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(g,{to:"/reports/customers",children:"Customer Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Preview"}),e.jsxs("div",{className:"preview",children:[e.jsxs("div",{className:"row2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Name"}),e.jsx("div",{className:"value",children:C})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{className:"value badge",children:s.status})]})]}),e.jsxs("div",{className:"row2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Email"}),e.jsx("div",{className:"value",children:s.email||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Phone"}),e.jsx("div",{className:"value",children:s.phone||"-"})]})]}),e.jsxs("div",{className:"row2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Company"}),e.jsx("div",{className:"value",children:s.company||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Code"}),e.jsx("div",{className:"value",children:k})]})]}),e.jsxs("div",{className:"row2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"GSTIN"}),e.jsx("div",{className:"value",children:s.gstin||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"PAN"}),e.jsx("div",{className:"value",children:s.pan||"-"})]})]}),e.jsx("div",{className:"tagsView",children:s.tags.map(a=>e.jsx("span",{className:"tag",children:a},a))})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:n,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:C})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email||"-"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone||"-"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Address"}),e.jsx("span",{className:"v",children:[s.address.line1,s.address.line2,[s.address.city,s.address.zip].filter(Boolean).join(" "),s.address.state,s.address.country].filter(Boolean).join(", ")||"-"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Draft"}),e.jsx("span",{className:"v",children:$(p)})]})]})]})]})]})]})};export{E as default};
