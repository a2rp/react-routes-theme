import{d as G,u as J,r as t,j as e,N as f,aN as K,e as U,aK as Q,M as Y,aO as Z,n as h,L as i,aL as y,k as X}from"./index-DwhKQ_MC.js";const d="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",p="var(--card, #111318)",o="var(--border, #23262d)",r="var(--accent, #5aa9ff)",v="var(--accent-soft, rgba(90,169,255,0.15))",w="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",_={Wrap:G.main`
        width: 100%;
        color: ${d};
        padding: 18px 18px 28px;

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${n};
                .crumb {
                    color: ${n};
                }
                .crumb:hover {
                    color: ${r};
                }
                .here {
                    color: ${d};
                    font-weight: 600;
                }
                .sep {
                    opacity: 0.6;
                }
            }
            .actions {
                display: flex;
                gap: 8px;
            }
        }

        .btn {
            background: ${p};
            color: ${d};
            border: 1px solid ${o};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s ease;
        }
        .btn:hover {
            border-color: ${r};
            color: ${r};
            background: rgba(0, 0, 0, 0.08);
        }
        .btn.primary {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${v};
        }
        .btn.ghost {
            background: transparent;
        }

        .link {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            color: ${n};
            text-decoration: none;
            font-weight: 600;
        }
        .link:hover {
            color: ${r};
        }

        .grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1080px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${p};
            border: 1px solid ${o};
            border-radius: 12px;
            box-shadow: ${w};
            padding: 16px;
        }
        .cardHead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .title {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            h1,
            h2 {
                margin: 0;
            }
            p.muted {
                color: ${n};
                margin-top: 4px;
            }
        }

        .resetCard {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .switcher {
            display: flex;
            gap: 8px;
            .seg {
                border: 1px solid ${o};
                background: transparent;
                border-radius: 999px;
                padding: 8px 12px;
                color: ${n};
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
            }
            .seg:hover {
                color: ${r};
                border-color: ${r};
            }
            .seg.active {
                color: ${d};
                background: color-mix(in oklab, ${r} 18%, transparent);
                border-color: ${r};
            }
        }

        .form {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 720px) {
            .row2 {
                grid-template-columns: 1fr;
            }
        }

        label {
            font-weight: 700;
            display: block;
            margin-bottom: 4px;
        }
        input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            background: ${p};
            color: ${d};
            border: 1px solid ${o};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        input:focus {
            border-color: ${r};
            outline: none;
            box-shadow: 0 0 0 3px ${v};
        }
        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .hint {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${n};
            font-size: 12px;
        }

        .ctaRow {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 6px;
        }

        .metaGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 8px;
        }
        @media (max-width: 920px) {
            .metaGrid {
                grid-template-columns: 1fr;
            }
        }

        .meta {
            border: 1px dashed ${o};
            border-radius: 10px;
            padding: 12px;
        }
        .meta h3 {
            margin: 0 0 6px 0;
        }
        .meta ul {
            margin: 0;
            padding-left: 18px;
        }

        .side {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .ticks {
            margin: 0;
            padding-left: 18px;
        }
        .ticks li {
            margin: 6px 0;
        }

        .linksCols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 10px;
        }
        .linksCols a {
            border: 1px solid ${o};
            border-radius: 8px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${n};
        }
        .linksCols a:hover {
            color: ${r};
            border-color: ${r};
        }

        .quickLinks {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }
        .quickLinks a {
            border: 1px solid ${o};
            border-radius: 8px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${n};
        }
        .quickLinks a:hover {
            color: ${r};
            border-color: ${r};
        }

        .build {
            display: grid;
            gap: 6px;
        }
        .build div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px dashed ${o};
            padding: 6px 0;
        }
        .build span {
            color: ${n};
        }
        .build strong {
            font-weight: 700;
        }

        /* Modal */
        .modalRoot {
            position: fixed;
            inset: 0;
            z-index: 60;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: saturate(120%) blur(2px);
        }
        .modalCard {
            position: relative;
            z-index: 1;
            width: min(560px, 92vw);
            background: ${p};
            border: 1px solid ${o};
            border-radius: 12px;
            box-shadow: ${w};
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${o};
        }
        .iconBtn {
            background: transparent;
            border: 1px solid ${o};
            border-radius: 8px;
            padding: 6px;
            color: ${n};
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .iconBtn:hover {
            color: ${r};
            border-color: ${r};
        }
        .modalBody {
            padding: 14px 12px;
            color: ${d};
        }
        .modalFoot {
            padding: 10px 12px;
            border-top: 1px solid ${o};
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
        }
    `};function x(a){return a<10?`0${a}`:`${a}`}function ee(a){const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${l[a.getDay()]} ${c[a.getMonth()]} ${x(a.getDate())} ${a.getFullYear()}`}function se(a){return`${x(a.getHours())}:${x(a.getMinutes())}:${x(a.getSeconds())}hrs`}function u(a){return`${ee(a)} ${se(a)}`}const ie="2025-10-05T21:23:35.172Z",ae="2025-10-06T02:53:30+05:30";function oe(){const a=J(),[l,c]=t.useState("email"),[k,N]=t.useState(""),[$,C]=t.useState(""),[S,M]=t.useState(""),[P,L]=t.useState(""),[T,R]=t.useState(""),[D,g]=t.useState(!1),[te,F]=t.useState("info"),[O,B]=t.useState(""),[z,E]=t.useState(""),H=t.useMemo(()=>new Date,[]),A=t.useMemo(()=>new Date(ie),[]),I=t.useMemo(()=>new Date(ae),[]);t.useEffect(()=>{const s=document.querySelector("#reset-email, #reset-phone");if(s)try{s.focus({preventScroll:!0})}catch{s.focus()}},[l]);const q=t.useCallback(()=>{const s=document.body;s.classList.add("print-section-mode"),window.print();const b=()=>{s.classList.remove("print-section-mode"),window.removeEventListener("afterprint",b)};window.addEventListener("afterprint",b)},[]),j=t.useCallback(s=>{F(s==="success"?"success":"info"),B(s==="success"?"Password reset link dispatched":"Demo mode"),E(s==="success"?"For the demo, this simulates sending a secure reset link. In production, the link would expire and enforce device checks.":"This is a display-only build. Actions that modify data are disabled."),g(!0)},[]),V=s=>{s.preventDefault(),j("success")},W=s=>{s.preventDefault(),j("info")},m=()=>g(!1);return e.jsxs(_.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"pageHead",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(f,{to:"/home",className:"crumb",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(f,{to:"/auth/login",className:"crumb",children:"Auth"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"here",children:"Reset"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn ghost",onClick:()=>a("/auth/login"),title:"Back to login",children:["Back to Login ",e.jsx(K,{size:18})]}),e.jsxs("button",{className:"btn",onClick:q,title:"Print this section",children:[e.jsx(U,{size:18})," Print"]})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("section",{id:"search-print-area",className:"card resetCard",children:[e.jsxs("header",{className:"cardHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(Q,{size:22}),e.jsx("h1",{children:"Reset your password"})]}),e.jsx("p",{className:"muted",children:"Pick a recovery method. This demo doesn’t perform any real action."})]}),e.jsxs("div",{className:"switcher",role:"tablist","aria-label":"Reset method",children:[e.jsxs("button",{role:"tab","aria-selected":l==="email",className:l==="email"?"seg active":"seg",onClick:()=>c("email"),title:"Send email reset link",children:[e.jsx(Y,{size:18})," Email Link"]}),e.jsxs("button",{role:"tab","aria-selected":l==="otp",className:l==="otp"?"seg active":"seg",onClick:()=>c("otp"),title:"Verify OTP then set password",children:[e.jsx(Z,{size:18})," OTP + New Password"]})]}),l==="email"?e.jsxs("form",{className:"form",onSubmit:V,"aria-labelledby":"h-email",children:[e.jsx("h2",{id:"h-email",children:"Reset via secure email link"}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"reset-email",children:"Email"}),e.jsx("input",{id:"reset-email",type:"email",autoComplete:"email",placeholder:"you@example.com",value:k,onChange:s=>N(s.target.value)}),e.jsxs("div",{className:"hint",children:[e.jsx(h,{})," We’ll send a one-time link to this address."]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{className:"btn primary",type:"submit",title:"Simulate sending reset link",children:"Send Reset Link"}),e.jsx(i,{className:"link",to:"/auth/login",children:"Back to login"}),e.jsx(i,{className:"link",to:"/auth/register",children:"Create account"}),e.jsx(i,{className:"link",to:"/auth/verify",children:"Verify email"})]})]}):e.jsxs("form",{className:"form",onSubmit:W,"aria-labelledby":"h-otp",children:[e.jsx("h2",{id:"h-otp",children:"Verify OTP then set new password"}),e.jsxs("div",{className:"row2",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"reset-phone",children:"Phone"}),e.jsx("input",{id:"reset-phone",type:"tel",placeholder:"+91 98765 43210",value:$,onChange:s=>C(s.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"reset-otp",children:"OTP"}),e.jsx("input",{id:"reset-otp",type:"text",inputMode:"numeric",placeholder:"6-digit code",value:S,onChange:s=>M(s.target.value)})]})]}),e.jsxs("div",{className:"row2",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"reset-pass",children:"New password"}),e.jsx("input",{id:"reset-pass",type:"password",placeholder:"********",value:P,onChange:s=>L(s.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"reset-confirm",children:"Confirm password"}),e.jsx("input",{id:"reset-confirm",type:"password",placeholder:"********",value:T,onChange:s=>R(s.target.value)})]})]}),e.jsxs("div",{className:"hint",children:[e.jsx(y,{})," For demo, OTP check and strength policy are simulated."]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{className:"btn primary",type:"submit",title:"Demo only",children:"Verify & Set Password"}),e.jsx(i,{className:"link",to:"/auth/login",children:"Back to login"}),e.jsx(i,{className:"link",to:"/auth/forgot",children:"Forgot password"})]})]}),e.jsxs("div",{className:"metaGrid",children:[e.jsxs("div",{className:"meta",children:[e.jsx("h3",{children:"When can I try again?"}),e.jsx("p",{children:"Anytime. This is a display build, so no throttling is enforced."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"you@example.com"})," in demos"]}),e.jsx("li",{children:"OTP field accepts any digits in this demo"})]})]}),e.jsxs("div",{className:"meta",children:[e.jsx("h3",{children:"Password rules (display)"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Min 8 characters"}),e.jsx("li",{children:"Mixed case & a number"}),e.jsx("li",{children:"Special character recommended"})]})]})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"cardHead",children:e.jsxs("div",{className:"title",children:[e.jsx(y,{size:20}),e.jsx("h2",{children:"Security tips"})]})}),e.jsxs("ul",{className:"ticks",children:[e.jsx("li",{children:"Never share one-time codes."}),e.jsx("li",{children:"Use a unique password for each app."}),e.jsx("li",{children:"Enable 2-factor where possible."}),e.jsx("li",{children:"Review active sessions regularly."})]}),e.jsxs("div",{className:"linksCols",children:[e.jsx(i,{to:"/help",children:"Help Center"}),e.jsx(i,{to:"/faq",children:"FAQ"}),e.jsx(i,{to:"/contact",children:"Contact"}),e.jsx(i,{to:"/feedback",children:"Feedback"}),e.jsx(i,{to:"/changelog",children:"Changelog"}),e.jsx(i,{to:"/roadmap",children:"Roadmap"})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"cardHead",children:e.jsxs("div",{className:"title",children:[e.jsx(h,{size:20}),e.jsx("h2",{children:"Explore the demo"})]})}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(i,{to:"/dashboard",children:"Dashboard"}),e.jsx(i,{to:"/customers",children:"Customers"}),e.jsx(i,{to:"/orders",children:"Orders"}),e.jsx(i,{to:"/products",children:"Products"}),e.jsx(i,{to:"/inventory",children:"Inventory"}),e.jsx(i,{to:"/invoices",children:"Invoices"}),e.jsx(i,{to:"/receipts",children:"Receipts"}),e.jsx(i,{to:"/reports",children:"Reports"}),e.jsx(i,{to:"/admin/users",children:"Admin › Users"}),e.jsx(i,{to:"/settings",children:"Settings"}),e.jsx(i,{to:"/tools/theme-tokens",children:"Theme Tokens"}),e.jsx(i,{to:"/examples",children:"Examples"})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"cardHead",children:e.jsxs("div",{className:"title",children:[e.jsx(h,{size:20}),e.jsx("h2",{children:"Build metadata"})]})}),e.jsxs("div",{className:"build",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Now"}),e.jsx("strong",{children:u(H)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Built"}),e.jsx("strong",{children:u(A)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Last commit"}),e.jsx("strong",{children:u(I)})]})]})]})]})]}),D&&e.jsxs("div",{className:"modalRoot",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsx("div",{className:"backdrop",onClick:m}),e.jsxs("div",{className:"modalCard",children:[e.jsxs("header",{className:"modalHead",children:[e.jsx("h3",{id:"modal-title",children:O}),e.jsx("button",{className:"iconBtn",onClick:m,"aria-label":"Close",children:e.jsx(X,{size:20})})]}),e.jsx("div",{className:"modalBody",children:e.jsx("p",{children:z})}),e.jsxs("footer",{className:"modalFoot",children:[e.jsx(i,{className:"btn ghost",to:"/auth/login",children:"Go to Login"}),e.jsx("button",{className:"btn",onClick:m,children:"Close"})]})]})]})]})}export{oe as default};
