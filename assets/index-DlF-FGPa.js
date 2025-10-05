import{d as j,u as H,r as c,j as e,N}from"./index-CvWKwy17.js";const d="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",x="var(--card, #111318)",o="var(--border, #23262d)",n="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",D="var(--danger, #ef4444)",T="var(--radius, 16px)",g={Page:j.div`
    padding: 24px 0 64px;
    color: ${d};

    .breadcrumbs {
      display: flex; gap: 8px; align-items: center; margin-top: 6px;
      a { color: ${m}; }
      .current { color: ${d}; }
    }
  `,Header:j.header`
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 16px 20px; margin-bottom: 16px;

    .left h1 { font-size: 22px; letter-spacing: .4px; }
    .meta { margin-top: 6px; display: flex; gap: 8px; color: ${m}; font-size: 12px; }

    .actions { display: flex; gap: 8px; flex-wrap: wrap; }

    .btnPrimary, .btnGhost, .btnDanger {
      border-radius: 8px; padding: 8px 14px; border: 1px solid ${o};
      background: ${x}; color: ${d}; font-weight: 600;
      transition: background .25s, color .25s, border-color .25s, box-shadow .25s, transform .05s ease-in-out;
    }
    .btnPrimary:hover { border-color: ${n}; color: ${n}; box-shadow: 0 0 0 3px ${k}; }
    .btnPrimary:active, .btnGhost:active, .btnDanger:active { transform: translateY(1px); }
    .btnDanger { border-color: ${D}; color: ${D}; }
    .btnDanger:hover { box-shadow: 0 0 0 3px rgba(239,68,68,.18); background: color-mix(in oklab, ${D} 10%, transparent); }
    .btnGhost { opacity: .9; }
    .btnGhost:hover { border-color: ${n}; color: ${n}; }
  `,Banner:j.div`
    margin: 12px 0; padding: 10px 14px;
    border: 1px solid ${o}; border-radius: 10px;
    background: color-mix(in oklab, ${n} 10%, transparent);
    color: ${d};
  `,Grid:j.div`
    display: grid; gap: 16px; grid-template-columns: 1fr;
    @media (min-width: 1100px) { grid-template-columns: 2fr 1fr; }

    .col.main.card { padding: 16px 18px; }

    .row { display: grid; gap: 16px; grid-template-columns: 1fr; margin-bottom: 18px; }
    .row.stack { align-items: start; }
    @media (min-width: 900px) { .row.stack { grid-template-columns: 280px 1fr; } }

    .two { display: grid; gap: 16px; grid-template-columns: 1fr; }
    .two.compact { gap: 12px; }
    @media (min-width: 900px) { .two { grid-template-columns: 1fr 1fr; } }

    .three { display: grid; gap: 16px; grid-template-columns: 1fr; }
    @media (min-width: 900px) { .three { grid-template-columns: repeat(3, 1fr); } }

    label { display: block; font-size: 12px; color: ${m}; margin-bottom: 6px; }
    input, select, textarea { width: 100%; }

    .sub { padding: 14px; }
    .sub h3 { font-size: 14px; margin-bottom: 10px; }

    .mini { margin-top: 8px; color: ${m}; font-size: 12px; }

    /* avatar */
    .avatar { display: grid; gap: 10px; }
    .avatar .pic {
      width: 120px; height: 120px; background: ${x}; background-size: cover; background-position: center;
      border: 1px solid ${o}; border-radius: ${T};
    }
    .avatar .controls { display: flex; flex-wrap: wrap; gap: 8px; }
    .avatar .small { padding: 6px 10px; font-weight: 600; }
    .avatar .fileName { font-size: 12px; }

    /* radio */
    .radioRow { display: flex; gap: 10px; flex-wrap: wrap; }
    .radio {
      display: inline-flex; gap: 8px; align-items: center; padding: 6px 10px; border: 1px solid ${o};
      background: ${x}; border-radius: 999px; cursor: pointer; user-select: none;
      transition: border-color .2s, box-shadow .2s, color .2s;
    }
    .radio input { display: none; }
    .radio.active, .radio:hover { border-color: ${n}; box-shadow: 0 0 0 3px ${k}; color: ${n}; }

    /* password row */
    .pwdRow { margin-top: 12px; }
    .pwdBox { display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center; }

    /* switches */
    .switch { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 10px; cursor: pointer; }
    .switch input { display: none; }
    .switch .slider {
      width: 44px; height: 24px; border-radius: 20px; border: 1px solid ${o}; background: ${x};
      position: relative; transition: background .25s, border-color .25s, box-shadow .25s;
    }
    .switch .slider::after {
      content: ""; position: absolute; top: 50%; transform: translateY(-50%);
      left: 2px; width: 18px; height: 18px; border-radius: 50%; background: ${d};
      transition: left .25s ease;
    }
    .switch input:checked + .slider { border-color: ${n}; box-shadow: 0 0 0 3px ${k}; }
    .switch input:checked + .slider::after { left: 24px; }
    .switch .label { color: ${d}; }

    /* range */
    .range { margin-top: 12px; }
    .range input[type="range"] { width: 100%; }

    /* tips */
    .tips { margin: 0; padding-left: 18px; display: grid; gap: 6px; }
    .tips li { color: ${m}; }

    /* summary */
    .printSummary { display: grid; gap: 8px; }
    .printSummary .line { display: grid; grid-template-columns: 120px 1fr; gap: 10px; }
    .printSummary .k { color: ${m}; }
    .printSummary .v { color: ${d}; }

    /* side */
    .side { display: grid; gap: 16px; }
    .preview { display: grid; grid-template-columns: 56px 1fr; gap: 10px; align-items: center; }
    .avatar.sm { width: 56px; height: 56px; background-size: cover; background-position: center; border: 1px solid ${o}; border-radius: ${T}; }
    .details .muted { color: ${m}; font-size: 12px; }
    .badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
    .chip {
      border: 1px solid ${o}; padding: 6px 10px; border-radius: 999px; color: ${d};
      background: color-mix(in oklab, ${n} 8%, transparent);
    }

    /* links list */
    .links { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
    .links a { color: ${m}; padding: 6px 8px; border-radius: 8px; border: 1px solid ${o}; background: ${x}; }
    .links a:hover { color: ${n}; border-color: ${n}; }
  `,Overlay:j.div`
    position: fixed; inset: 0; background: rgba(2,6,23,.55);
    display: grid; place-items: center; z-index: 50;
  `,Modal:j.div`
    width: min(520px, 92vw);
    border-radius: ${T};
    border: 1px solid ${o};
    background: ${x};
    color: ${d};
    box-shadow: 0 20px 60px rgba(0,0,0,.35);
    overflow: hidden;

    header { padding: 14px 16px; border-bottom: 1px solid ${o}; }
    h4 { font-size: 18px; }
    .body { padding: 16px; color: ${d}; }
    footer { padding: 12px 16px; display: flex; gap: 8px; justify-content: flex-end; border-top: 1px solid ${o}; }

    .btnPrimary {
      border-radius: 8px; padding: 8px 14px; border: 1px solid ${o};
      background: ${x}; color: ${d}; font-weight: 600;
      transition: background .25s, color .25s, border-color .25s, box-shadow .25s;
    }
    .btnPrimary:hover { border-color: ${n}; color: ${n}; box-shadow: 0 0 0 3px ${k}; }
  `},h=i=>String(i).padStart(2,"0"),b=(i,r)=>{const t=i instanceof Date?i:new Date(i),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=`${p[t.getDay()]} ${u[t.getMonth()]} ${h(t.getDate())} ${t.getFullYear()}`;return r?`${s} ${h(t.getHours())}:${h(t.getMinutes())}:${h(t.getSeconds())}hrs`:s},J=i=>{const r=i instanceof Date?i:new Date(i);return`${h(r.getHours())}:${h(r.getMinutes())}:${h(r.getSeconds())}hrs`},Z=({open:i,title:r,message:t,onClose:p})=>i?e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(g.Modal,{className:"card",onMouseDown:u=>u.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:r})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:t})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:p,children:"OK"})})]})}):null,Q=()=>{const i=H(),r=c.useMemo(()=>new Date,[]),t=c.useRef(null),p=c.useRef(null),u=c.useMemo(()=>({firstName:"Aarav",lastName:"Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",country:"IN",tz:"Asia/Kolkata",accountType:"business",dob:"1996-10-04",meetingAt:new Date().toISOString().slice(0,16),newsletter:!0,marketing:!1,theme:"system",password:"••••••••",about:"Short bio goes here. Keep things crisp and focused. This is just a demo text.",street1:"221B Baker Street",street2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",avatarName:"",avatarUrl:"",satisfaction:80}),[]),[s,w]=c.useState(u),[P,M]=c.useState(!1),[U,B]=c.useState(""),[C,A]=c.useState(!1),[f,G]=c.useState(`Opened at ${b(r,!0)}`);c.useEffect(()=>{let l;return f&&(l=setTimeout(()=>G(""),3500)),()=>l&&clearTimeout(l)},[f]);const a=l=>{const{name:v,value:$,type:y,checked:S}=l.target;w(Y=>({...Y,[v]:y==="checkbox"?S:$}))},R=l=>{var y;const v=(y=l.target.files)==null?void 0:y[0];if(!v)return;const $=URL.createObjectURL(v);w(S=>({...S,avatarName:v.name,avatarUrl:$}))},E=()=>{w(l=>({...l,avatarName:"",avatarUrl:""})),p.current&&(p.current.value="")},L=()=>w(u),O=()=>i("/examples"),F=!0,I=()=>{B("This is a display-only theme. Submissions are disabled in demo mode."),A(!0)},K=()=>{t.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},z=`${s.firstName} ${s.lastName}`.trim();return e.jsxs(g.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Form Demo"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(N,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Form"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",b(r,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Best time to call: ",J(r)]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:O,title:"Back to Examples",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:K,children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:F,title:"Disabled in demo",children:"Save"}),e.jsx("button",{className:"btnDanger",onClick:L,children:"Reset"}),e.jsx("button",{className:"btnPrimary",onClick:I,title:"Submit (demo)",children:"Submit"})]})]}),f?e.jsx(g.Banner,{children:f}):null,e.jsxs(g.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"row stack",children:[e.jsxs("div",{className:"avatar",children:[e.jsx("div",{className:"pic",style:{backgroundImage:`url(${s.avatarUrl||"/avatar.svg"})`}}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"btnGhost small",children:["Upload Photo",e.jsx("input",{ref:p,type:"file",accept:"image/*",hidden:!0,onChange:R})]}),s.avatarUrl?e.jsx("button",{className:"btnGhost small",onClick:E,children:"Remove"}):null,e.jsx("a",{className:"btnGhost small",href:s.avatarUrl||"/avatar.svg",download:!0,children:"Download"})]}),s.avatarName?e.jsx("div",{className:"muted fileName",children:s.avatarName}):null]}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"}),e.jsx("input",{name:"firstName",value:s.firstName,onChange:a,placeholder:"First name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{name:"lastName",value:s.lastName,onChange:a,placeholder:"Last name"})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{name:"email",type:"email",value:s.email,onChange:a,placeholder:"name@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{name:"phone",value:s.phone,onChange:a,placeholder:"+91 ..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Date of Birth"}),e.jsx("input",{name:"dob",type:"date",value:s.dob,onChange:a})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Country"}),e.jsxs("select",{name:"country",value:s.country,onChange:a,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"IN",children:"India"}),e.jsx("option",{value:"US",children:"United States"}),e.jsx("option",{value:"AE",children:"United Arab Emirates"}),e.jsx("option",{value:"SG",children:"Singapore"}),e.jsx("option",{value:"GB",children:"United Kingdom"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Time Zone"}),e.jsxs("select",{name:"tz",value:s.tz,onChange:a,children:[e.jsx("option",{value:"Asia/Kolkata",children:"Asia/Kolkata"}),e.jsx("option",{value:"Asia/Dubai",children:"Asia/Dubai"}),e.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore"}),e.jsx("option",{value:"Europe/London",children:"Europe/London"}),e.jsx("option",{value:"America/New_York",children:"America/New_York"})]})]})]})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Address line 1"}),e.jsx("input",{name:"street1",value:s.street1,onChange:a,placeholder:"Street, building"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Address line 2"}),e.jsx("input",{name:"street2",value:s.street2,onChange:a,placeholder:"Area, landmark"})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"City"}),e.jsx("input",{name:"city",value:s.city,onChange:a,placeholder:"City"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"State"}),e.jsx("input",{name:"state",value:s.state,onChange:a,placeholder:"State"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"PIN / ZIP"}),e.jsx("input",{name:"zip",value:s.zip,onChange:a,placeholder:"110003"})]})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Account"}),e.jsxs("div",{className:"radioRow",children:[e.jsxs("label",{className:`radio ${s.accountType==="personal"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"accountType",value:"personal",checked:s.accountType==="personal",onChange:a}),e.jsx("span",{children:"Personal"})]}),e.jsxs("label",{className:`radio ${s.accountType==="business"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"accountType",value:"business",checked:s.accountType==="business",onChange:a}),e.jsx("span",{children:"Business"})]})]}),e.jsxs("div",{className:"pwdRow",children:[e.jsx("label",{children:"Password"}),e.jsxs("div",{className:"pwdBox",children:[e.jsx("input",{name:"password",type:P?"text":"password",value:s.password,onChange:a,placeholder:"••••••••"}),e.jsx("button",{type:"button",className:"btnGhost small",onClick:()=>M(l=>!l),children:P?"Hide":"Show"})]})]}),e.jsxs("div",{className:"two compact",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Meeting (local)"}),e.jsx("input",{type:"datetime-local",name:"meetingAt",value:s.meetingAt,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Theme"}),e.jsxs("select",{name:"theme",value:s.theme,onChange:a,children:[e.jsx("option",{value:"system",children:"System"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"light",children:"Light"})]})]})]}),e.jsxs("div",{className:"two compact",children:[e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",name:"newsletter",checked:s.newsletter,onChange:a}),e.jsx("span",{className:"slider"}),e.jsx("span",{className:"label",children:"Subscribe to newsletter"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",name:"marketing",checked:s.marketing,onChange:a}),e.jsx("span",{className:"slider"}),e.jsx("span",{className:"label",children:"Allow marketing emails"})]})]}),e.jsxs("div",{className:"range",children:[e.jsx("label",{children:"Experience with our product (demo)"}),e.jsx("input",{type:"range",min:"0",max:"100",step:"5",name:"satisfaction",value:s.satisfaction,onChange:a}),e.jsxs("div",{className:"muted",children:[s.satisfaction,"%"]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"About"}),e.jsx("textarea",{rows:6,name:"about",value:s.about,onChange:a,placeholder:"Tell us something…"}),e.jsxs("div",{className:"mini",children:["Last edited: ",b(r,!0)]})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Quick Tips"}),e.jsxs("ul",{className:"tips",children:[e.jsx("li",{children:"Use accurate contact details so invoices reach the right inbox."}),e.jsx("li",{children:"Choose “Business” if you need GST-compliant documents."}),e.jsx("li",{children:"Set your preferred theme; we respect OS defaults."}),e.jsx("li",{children:"Printing will use the focused summary on the right."})]})]}),e.jsxs("div",{className:"card sub",id:"search-print-area",ref:t,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Name"}),e.jsx("span",{className:"v",children:z||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Type"}),e.jsx("span",{className:"v",children:s.accountType})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Country"}),e.jsx("span",{className:"v",children:s.country||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Time Zone"}),e.jsx("span",{className:"v",children:s.tz})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"DOB"}),e.jsx("span",{className:"v",children:b(s.dob)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Meeting"}),e.jsx("span",{className:"v",children:b(new Date(s.meetingAt),!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Address"}),e.jsxs("span",{className:"v",children:[s.street1,", ",s.street2,", ",s.city," ",s.zip,", ",s.state]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Newsletter"}),e.jsx("span",{className:"v",children:s.newsletter?"Yes":"No"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Marketing"}),e.jsx("span",{className:"v",children:s.marketing?"Yes":"No"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Theme"}),e.jsx("span",{className:"v",children:s.theme})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Now"}),e.jsx("span",{className:"v",children:b(r,!0)})]})]})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Live Preview"}),e.jsxs("div",{className:"preview",children:[e.jsx("div",{className:"avatar sm",style:{backgroundImage:`url(${s.avatarUrl||"/avatar.svg"})`}}),e.jsxs("div",{className:"details",children:[e.jsx("strong",{children:z||"Unnamed"}),e.jsxs("div",{className:"muted",children:[s.email," • ",s.phone]}),e.jsxs("div",{className:"muted",children:["Type: ",s.accountType," • Theme: ",s.theme]})]})]}),e.jsxs("div",{className:"badges",children:[s.newsletter&&e.jsx("span",{className:"chip",children:"newsletter"}),s.marketing&&e.jsx("span",{className:"chip",children:"marketing"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(N,{to:"/examples/print",children:"Print Demo"})}),e.jsx("li",{children:e.jsx(N,{to:"/settings/appearance",children:"Appearance"})}),e.jsx("li",{children:e.jsx(N,{to:"/reports/customers",children:"Customer Report"})}),e.jsx("li",{children:e.jsx(N,{to:"/tools/theme-tokens",children:"Theme Tokens"})})]})]})]})]}),e.jsx(Z,{open:C,title:"Demo mode",message:U,onClose:()=>A(!1)})]})};export{Q as default};
