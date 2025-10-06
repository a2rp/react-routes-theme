import{d as j,r as h,j as e,L as s}from"./index-LshBDmDj.js";const t="var(--text, #f3f4f6)",r="var(--muted, #a0a0a7)",p="var(--card, #111318)",a="var(--border, #23262d)",i="var(--accent, #5aa9ff)",m="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",f={Page:j.main`
        color: ${t};
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;

        .card {
            background: ${p};
            border: 1px solid ${a};
            border-radius: 12px;
            box-shadow: ${g};
        }

        /* top bar */
        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 4px;
            border-bottom: 1px dashed ${a};
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${r};
            font-size: 12px;
        }
        .crumb {
            color: ${r};
            text-decoration: none;
        }
        .crumb:hover {
            color: ${i};
        }
        .current {
            color: ${t};
        }
        .sep {
            opacity: 0.6;
        }
        .build-meta {
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${r};
            font-size: 12px;
        }
        .build-meta .dot {
            opacity: 0.6;
        }

        /* hero */
        .hero {
            padding: 10px 4px 0;
        }
        .hero h1 {
            font-family: "Antonio", sans-serif;
            font-size: 32px;
            line-height: 1.2;
            margin-bottom: 6px;
        }
        .hero .sub {
            color: ${r};
            margin-bottom: 12px;
        }
        .quick-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${a};
            background: color-mix(in oklab, ${p} 92%, transparent);
            color: ${t};
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .chip:hover {
            border-color: ${i};
            color: ${i};
        }

        /* content grid (full width, no max container) */
        .content {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            width: 100%;
        }
        @media (max-width: 1100px) {
            .content {
                grid-template-columns: 1fr;
            }
        }

        /* form card */
        .formCard {
            padding: 16px;
        }
        .formHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .badge.demo {
            padding: 2px 8px;
            border: 1px solid ${a};
            border-radius: 999px;
            font-size: 11px;
            color: ${r};
            background: color-mix(in oklab, ${i} 8%, transparent);
        }

        form .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 10px;
        }
        @media (max-width: 700px) {
            form .grid {
                grid-template-columns: 1fr;
            }
        }
        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .field label {
            color: ${r};
            font-size: 12px;
        }
        .field .hint {
            color: ${r};
            font-size: 11px;
        }

        .agreements {
            /* display: grid;
            gap: 8px; */
            margin: 10px 0 4px;
        }
        .ck {
            color: ${r};
            font-size: 13px;
            display: flex;
            justify-content: flex-start;
            gap: 8px;
            margin-bottom: 15px;

            span {
                white-space: nowrap;
            }

            .link {
                /* width: 100%; */
            }
        }
        .ck input {
            border: 1px solid #f00;
            /* display: none; */
            /* transform: translateY(1px); */
            width: 30px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0 14px;
        }
        .actions .grow {
            flex: 1;
        }
        .link {
            color: ${t};
            text-decoration: none;
            border-bottom: 1px dashed ${a};
        }
        .link:hover {
            color: ${i};
            border-color: ${i};
        }

        .btnPrimary,
        .btnGhost,
        .ssoBtn {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            transition: all 0.2s ease;
            cursor: pointer;
            background: ${p};
            color: ${t};
        }
        .btnPrimary {
            border-color: ${i};
            box-shadow: 0 0 0 0 ${m};
        }
        .btnPrimary:hover {
            color: ${i};
            background: rgba(0, 0, 0, 0.08);
            box-shadow: 0 0 0 3px ${m};
        }
        .btnGhost:hover {
            color: ${i};
            border-color: ${i};
        }
        .ssoRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .ssoBtn[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* print block */
        .printBlock {
            margin-top: 18px;
            padding: 16px;
            border-radius: 10px;
            border: 1px dashed ${a};
        }
        .printBlock h3 {
            margin-bottom: 6px;
        }
        .bullets {
            margin: 10px 0 12px 18px;
        }
        .bullets li {
            margin: 4px 0;
        }
        .meta {
            display: grid;
            gap: 4px;
            color: ${r};
        }
        .meta .k {
            color: ${t};
            margin-right: 6px;
        }

        /* side card */
        .sideCard {
            padding: 16px;
            display: grid;
            gap: 16px;
        }
        .section h3 {
            margin-bottom: 8px;
        }
        .linksGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
        }
        @media (max-width: 700px) {
            .linksGrid {
                grid-template-columns: 1fr;
            }
        }
        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 10px;
            border: 1px solid ${a};
            border-radius: 10px;
            text-decoration: none;
            color: ${t};
            background: color-mix(in oklab, ${p} 94%, transparent);
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .pill:hover {
            color: ${i};
            border-color: ${i};
        }

        .stack {
            display: grid;
            gap: 6px;
        }
        .row {
            color: ${t};
            text-decoration: none;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${a};
        }
        .row:hover {
            color: ${i};
            border-color: ${i};
        }
        .section.muted {
            color: ${r};
            border-top: 1px dashed ${a};
            padding-top: 8px;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
        }
        .kv .k {
            color: ${r};
        }
        .kv .v {
            color: ${t};
        }

        /* modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            z-index: 40;
            padding: 16px;
        }
        .modal {
            max-width: 640px;
            width: 100%;
            padding: 0;
        }
        .modalHeader {
            padding: 14px 16px;
            border-bottom: 1px solid ${a};
        }
        .modalBody {
            padding: 16px;
            display: grid;
            gap: 12px;
        }
        .modalLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .modalFooter {
            padding: 12px 16px;
            border-top: 1px solid ${a};
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        /* focus styles */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible,
        select:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${m};
            border-color: ${i};
        }
    `},c=l=>String(l).padStart(2,"0"),N=l=>{try{return new Date(l).toDateString()}catch{return new Date().toDateString()}},x=l=>{const n=(()=>{try{return new Date(l)}catch{return new Date}})(),d=`${c(n.getHours())}:${c(n.getMinutes())}:${c(n.getSeconds())}hrs`;return`${n.toDateString()} ${d}`};function w(){const[l,n]=h.useState(!1),d=h.useMemo(()=>({buildDate:x("2025-10-06T06:42:50.910Z"),commitDate:x("2025-10-06T12:12:45+05:30")}),[]),u=o=>{o.preventDefault(),n(!0)},b=()=>{try{document.body.classList.add("print-section-mode"),setTimeout(()=>window.print(),0);const o=()=>document.body.classList.remove("print-section-mode");window.addEventListener("afterprint",o,{once:!0})}catch{}};return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{className:"topbar",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(s,{to:"/home",className:"crumb",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(s,{to:"/auth/login",className:"crumb",children:"Auth"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Register"})]}),e.jsxs("div",{className:"build-meta",children:[e.jsxs("span",{title:"Build timestamp",children:["Build: ",d.buildDate]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{title:"Last commit timestamp",children:["Commit: ",d.commitDate]})]})]}),e.jsxs("section",{className:"hero",children:[e.jsx("h1",{children:"Create your account"}),e.jsx("p",{className:"sub",children:"One account for everything — dashboard, customers, orders, invoices, reports, and more."}),e.jsxs("div",{className:"quick-links",children:[e.jsx(s,{to:"/dashboard",className:"chip",title:"Go to Dashboard",children:"Dashboard"}),e.jsx(s,{to:"/customers",className:"chip",title:"Browse Customers",children:"Customers"}),e.jsx(s,{to:"/orders",className:"chip",title:"View Orders",children:"Orders"}),e.jsx(s,{to:"/products",className:"chip",title:"See Products",children:"Products"}),e.jsx(s,{to:"/reports",className:"chip",title:"Open Reports",children:"Reports"}),e.jsx(s,{to:"/help",className:"chip",title:"Help Center",children:"Help"})]})]}),e.jsxs("section",{className:"content",children:[e.jsxs("div",{className:"formCard card",children:[e.jsxs("div",{className:"formHeader",children:[e.jsx("h2",{children:"Sign up"}),e.jsx("span",{className:"badge demo",children:"Demo"})]}),e.jsxs("form",{onSubmit:u,noValidate:!0,children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{type:"text",placeholder:"e.g. Ashish Ranjan"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Work Email"}),e.jsx("input",{type:"email",placeholder:"e.g. ashish@example.com"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Mobile"}),e.jsx("input",{type:"tel",placeholder:"+91 98xxxxxxx"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Company"}),e.jsx("input",{type:"text",placeholder:"Company / Clinic Name"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Country"}),e.jsxs("select",{defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Choose country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Singapore"}),e.jsx("option",{children:"Australia"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Role"}),e.jsxs("select",{defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Select role"}),e.jsx("option",{children:"Owner"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"Manager"}),e.jsx("option",{children:"Staff"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Password"}),e.jsx("input",{type:"password",placeholder:"Create password"}),e.jsx("div",{className:"hint",children:"8+ characters, mixed case, a number, a symbol."})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Confirm Password"}),e.jsx("input",{type:"password",placeholder:"Re-enter password"})]})]}),e.jsxs("div",{className:"agreements",children:[e.jsxs("label",{className:"ck",children:[e.jsx("input",{type:"checkbox"})," ",e.jsxs("span",{children:["I agree to the"," "]}),e.jsx(s,{to:"/settings/print-templates",className:"link",children:"Terms"})," and"," ",e.jsx(s,{to:"/settings/privacy",className:"link",children:"Privacy"}),"."]}),e.jsxs("label",{className:"ck",children:[e.jsx("input",{type:"checkbox"})," Send me product updates."]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"btnPrimary",title:"Display-only demo — action disabled",children:"Create Account"}),e.jsx("button",{type:"button",className:"btnGhost",onClick:b,title:"Print the summary section",children:"Print Summary"}),e.jsx("div",{className:"grow"}),e.jsx(s,{to:"/auth/login",className:"link",children:"Already have an account? Log in"})]}),e.jsxs("div",{className:"ssoRow",children:[e.jsx("button",{type:"button",className:"ssoBtn",disabled:!0,title:"Disabled in demo",children:"Continue with Google"}),e.jsx("button",{type:"button",className:"ssoBtn",disabled:!0,title:"Disabled in demo",children:"Continue with Microsoft"}),e.jsx("button",{type:"button",className:"ssoBtn",disabled:!0,title:"Disabled in demo",children:"Continue with GitHub"})]})]}),e.jsxs("div",{id:"search-print-area",className:"printBlock",children:[e.jsx("h3",{children:"Registration Summary (Preview)"}),e.jsxs("p",{children:["This is a display-only preview of the registration details for printing. For full onboarding, see"," ",e.jsx(s,{to:"/help",className:"link",children:"Help Center"})," and"," ",e.jsx(s,{to:"/roadmap",className:"link",children:"Roadmap"}),"."]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Account scope: multi-warehouse, multi-user."}),e.jsx("li",{children:"Core modules: Customers, Orders, Products, Inventory, Billing, Finance."}),e.jsx("li",{children:"Optional modules: Manufacturing, Healthcare, Labs, Imaging."})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Printed on:"})," ",x(new Date().toISOString())]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Build:"})," ",d.buildDate]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Commit:"})," ",d.commitDate]})]})]})]}),e.jsxs("aside",{className:"sideCard card",children:[e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Jump to a module"}),e.jsxs("div",{className:"linksGrid",children:[e.jsx(s,{to:"/customers",className:"pill",children:"Customers"}),e.jsx(s,{to:"/orders",className:"pill",children:"Orders"}),e.jsx(s,{to:"/products",className:"pill",children:"Products"}),e.jsx(s,{to:"/inventory",className:"pill",children:"Inventory"}),e.jsx(s,{to:"/invoices",className:"pill",children:"Invoices"}),e.jsx(s,{to:"/receipts",className:"pill",children:"Receipts"}),e.jsx(s,{to:"/reports",className:"pill",children:"Reports"}),e.jsx(s,{to:"/finance",className:"pill",children:"Finance"}),e.jsx(s,{to:"/shipments",className:"pill",children:"Shipments"}),e.jsx(s,{to:"/vendors",className:"pill",children:"Vendors"}),e.jsx(s,{to:"/purchase-orders",className:"pill",children:"Purchase Orders"}),e.jsx(s,{to:"/medicines",className:"pill",children:"Medicines"}),e.jsx(s,{to:"/manufacturing",className:"pill",children:"Manufacturing"}),e.jsx(s,{to:"/patients",className:"pill",children:"Patients"}),e.jsx(s,{to:"/appointments",className:"pill",children:"Appointments"}),e.jsx(s,{to:"/prescriptions",className:"pill",children:"Prescriptions"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Useful account links"}),e.jsxs("div",{className:"stack",children:[e.jsx(s,{to:"/auth/forgot",className:"row",children:"Forgot password"}),e.jsx(s,{to:"/auth/reset",className:"row",children:"Reset with token"}),e.jsx(s,{to:"/auth/verify",className:"row",children:"Verify email"}),e.jsx(s,{to:"/settings/profile",className:"row",children:"Profile settings"}),e.jsx(s,{to:"/settings/appearance",className:"row",children:"Appearance"}),e.jsx(s,{to:"/settings/notifications",className:"row",children:"Notifications"})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Documentation"}),e.jsxs("div",{className:"stack",children:[e.jsx(s,{to:"/help",className:"row",children:"Help Center"}),e.jsx(s,{to:"/faq",className:"row",children:"FAQ"}),e.jsx(s,{to:"/contact",className:"row",children:"Contact"}),e.jsx(s,{to:"/feedback",className:"row",children:"Send feedback"}),e.jsx(s,{to:"/changelog",className:"row",children:"Changelog"}),e.jsx(s,{to:"/roadmap",className:"row",children:"Roadmap"})]})]}),e.jsxs("div",{className:"section muted",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Today"}),e.jsx("span",{className:"v",children:N(new Date().toISOString())})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Time now"}),e.jsx("span",{className:"v",children:(()=>{const o=new Date;return`${c(o.getHours())}:${c(o.getMinutes())}:${c(o.getSeconds())}hrs`})()})]})]})]})]}),l&&e.jsx("div",{className:"modalOverlay",role:"dialog","aria-modal":"true","aria-labelledby":"demoTitle",children:e.jsxs("div",{className:"modal card",children:[e.jsx("div",{className:"modalHeader",children:e.jsx("h3",{id:"demoTitle",children:"Registration is disabled in this demo"})}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{children:"This is a display-only theme. Account creation isn’t available here. Explore the modules using the links below."}),e.jsxs("div",{className:"modalLinks",children:[e.jsx(s,{to:"/dashboard",className:"pill",children:"Dashboard"}),e.jsx(s,{to:"/customers",className:"pill",children:"Customers"}),e.jsx(s,{to:"/orders",className:"pill",children:"Orders"}),e.jsx(s,{to:"/reports",className:"pill",children:"Reports"}),e.jsx(s,{to:"/auth/login",className:"pill",children:"Login"})]})]}),e.jsxs("div",{className:"modalFooter",children:[e.jsx("button",{className:"btnPrimary",onClick:()=>n(!1),children:"Close"}),e.jsx(s,{to:"/auth/login",className:"btnGhost",children:"Go to Login"})]})]})})]})}export{w as default};
