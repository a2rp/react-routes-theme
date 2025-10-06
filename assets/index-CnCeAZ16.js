import{d as p,u as R,a as F,r as l,j as e,N as r,b as H,aI as O,aJ as T,n as E}from"./index-CqBbF2bz.js";import{f as G,e as U,g as q,h as Y}from"./index-DnDBPzjb.js";const $="var(--bg, #0d1117)",d="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",c="var(--card, #111318)",a="var(--border, #23262d)",o="var(--accent, #5aa9ff)",K="var(--accent-soft, rgba(90,169,255,0.15))",x="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",h={Wrap:p.div`
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: 24px;
        min-height: calc(100dvh - 0px);
        background: ${$};
        color: ${d};
        padding: 24px;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
            padding: 16px;
        }
    `,BrandPane:p.section`
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 18px;

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            .logo {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: ${c};
                border: 1px solid ${a};
                display: grid;
                place-items: center;
                font-weight: 700;
                box-shadow: ${x};
            }
            .name {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }

        .headline {
            h1 {
                font-size: 28px;
                line-height: 1.2;
                margin-bottom: 6px;
            }
            p {
                color: ${i};
                max-width: 72ch;
            }
        }

        .featureGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            @media (max-width: 1280px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }

            .card {
                background: ${c};
                border: 1px solid ${a};
                border-radius: 14px;
                padding: 16px;
                box-shadow: ${x};
            }
            h3 {
                font-size: 16px;
                margin-bottom: 6px;
            }
            p {
                color: ${i};
                margin-bottom: 10px;
            }
            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                a {
                    font-size: 12px;
                    padding: 6px 10px;
                    border: 1px solid ${a};
                    border-radius: 999px;
                    background: color-mix(in oklab, ${o} 10%, transparent);
                    color: ${d};
                    text-decoration: none;
                    transition: border-color 0.2s, background 0.2s, color 0.2s;
                }
                a:hover {
                    border-color: ${o};
                    color: ${o};
                    background: color-mix(in oklab, ${o} 14%, transparent);
                }
            }
        }

        .quick {
            display: grid;
            gap: 10px;

            .searchHint {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 10px;
                background: color-mix(in oklab, ${o} 10%, transparent);
                border: 1px solid ${a};
                color: ${d};
                b {
                    color: ${o};
                }
            }
            .quickLinks {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                a {
                    font-size: 12px;
                    padding: 6px 10px;
                    border: 1px solid ${a};
                    border-radius: 8px;
                    text-decoration: none;
                    color: ${i};
                    transition: color 0.2s, border-color 0.2s, background 0.2s;
                }
                a:hover {
                    color: ${o};
                    border-color: ${o};
                    background: rgba(0, 0, 0, 0.08);
                }
            }
        }

        .buildInfo {
            background: ${c};
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${x};
            .row {
                display: flex;
                justify-content: space-between;
                gap: 12px;
                padding: 6px 0;
                &:not(:last-child) {
                    border-bottom: 1px dashed ${a};
                }
                .k {
                    color: ${i};
                }
                .v {
                    font-variant-numeric: tabular-nums;
                }
            }
        }
    `,FormPane:p.section`
        display: grid;
        align-content: center;
        gap: 16px;
    `,Card:p.div`
        background: ${c};
        border: 1px solid ${a};
        border-radius: 16px;
        box-shadow: ${x};
        padding: 20px;

        .cardHeader {
            margin-bottom: 10px;
            h2 {
                font-size: 20px;
                line-height: 1.3;
            }
            p {
                color: ${i};
            }
        }

        .form {
            display: grid;
            gap: 12px;
            margin-top: 8px;
            .row {
                display: grid;
                gap: 6px;
                label {
                    font-size: 12px;
                    color: ${i};
                }
                input[type="email"],
                input[type="password"],
                input[type="text"] {
                    background: ${c};
                    color: ${d};
                    border: 1px solid ${a};
                    border-radius: 10px;
                    padding: 10px 12px;
                    transition: border-color 0.25s, box-shadow 0.25s;
                }
                input::placeholder {
                    color: ${i};
                }
                input:focus {
                    border-color: ${o};
                    outline: none;
                    box-shadow: 0 0 0 3px ${K};
                }

                .pwdWrap {
                    position: relative;
                    display: grid;
                    input {
                        padding-right: 40px;
                    }
                    .iconBtn {
                        position: absolute;
                        right: 6px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 32px;
                        height: 32px;
                        display: grid;
                        place-items: center;
                        border: 1px solid ${a};
                        background: ${c};
                        color: ${i};
                        border-radius: 8px;
                        cursor: pointer;
                        transition: color 0.2s, border-color 0.2s,
                            background 0.2s;
                    }
                    .iconBtn:hover {
                        color: ${o};
                        border-color: ${o};
                        background: rgba(0, 0, 0, 0.06);
                    }
                }

                .hint {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: ${i};
                }
            }

            .rowInline {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .checkbox {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    cursor: default;
                }
                .muted {
                    color: ${i};
                    text-decoration: none;
                }
                .muted:hover {
                    color: ${o};
                }
            }

            .actions {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 10px;
                margin-top: 6px;
                @media (max-width: 520px) {
                    grid-template-columns: 1fr;
                }

                .primary {
                    background: color-mix(in oklab, ${o} 14%, transparent);
                    border: 1px solid ${o};
                    color: ${d};
                    padding: 10px 14px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: transform 0.06s ease, background 0.2s,
                        border-color 0.2s, color 0.2s, box-shadow 0.2s;
                    box-shadow: ${x};
                }
                .primary:hover {
                    background: color-mix(in oklab, ${o} 18%, transparent);
                }
                .primary:active {
                    transform: translateY(1px);
                }
                .primary:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .ghost {
                    border: 1px solid ${a};
                    background: transparent;
                    color: ${d};
                    padding: 10px 14px;
                    border-radius: 12px;
                    text-decoration: none;
                    display: inline-grid;
                    place-items: center;
                    transition: color 0.2s, border-color 0.2s, background 0.2s,
                        transform 0.06s ease;
                }
                .ghost:hover {
                    color: ${o};
                    border-color: ${o};
                    background: rgba(0, 0, 0, 0.06);
                }
                .ghost:active {
                    transform: translateY(1px);
                }
            }
        }

        .divLine {
            display: grid;
            place-items: center;
            margin: 14px 0;
            position: relative;
            height: 24px;
            color: ${i};
            span {
                background: ${c};
                padding: 0 8px;
                z-index: 1;
            }
        }
        .divLine::before {
            content: "";
            position: absolute;
            inset: 50% 0 auto 0;
            height: 1px;
            background: ${a};
            z-index: 0;
            transform: translateY(-50%);
        }

        .ssoGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
            .ssoBtn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                border: 1px solid ${a};
                border-radius: 12px;
                background: ${$};
                color: ${d};
                padding: 10px 12px;
                cursor: pointer;
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    transform 0.06s ease;
            }
            .ssoBtn:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.06);
            }
            .ssoBtn:active {
                transform: translateY(1px);
            }
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
            a {
                text-decoration: none;
                color: ${i};
                border: 1px solid ${a};
                padding: 6px 10px;
                border-radius: 999px;
                transition: color 0.2s, border-color 0.2s, background 0.2s;
            }
            a:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,MetaRow:p.div`
        display: grid;
        gap: 6px;
        .muted {
            color: ${i};
        }
        a {
            color: inherit;
            text-decoration: none;
            border-bottom: 1px dashed ${a};
        }
        a:hover {
            color: ${o};
            border-color: ${o};
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        padding: 16px;
        z-index: 999;

        .sheet {
            width: min(720px, 96vw);
            background: ${c};
            border: 1px solid ${a};
            border-radius: 16px;
            box-shadow: ${x};
            padding: 18px;
            display: grid;
            gap: 12px;
        }

        .head h3 {
            font-size: 18px;
        }
        .head p {
            color: ${i};
        }

        .gridLinks {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            @media (max-width: 840px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
            a {
                text-decoration: none;
                color: ${d};
                border: 1px solid ${a};
                border-radius: 10px;
                padding: 10px 12px;
                background: color-mix(in oklab, ${o} 10%, transparent);
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    transform 0.06s ease;
            }
            a:hover {
                color: ${o};
                border-color: ${o};
                background: color-mix(in oklab, ${o} 14%, transparent);
            }
            a:active {
                transform: translateY(1px);
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            .primary,
            .ghost {
                padding: 10px 14px;
                border-radius: 12px;
                cursor: pointer;
                transition: transform 0.06s ease, background 0.2s,
                    border-color 0.2s, color 0.2s;
                border: 1px solid ${a};
                background: ${$};
                color: ${d};
            }
            .primary {
                border-color: ${o};
                background: color-mix(in oklab, ${o} 14%, transparent);
            }
            .primary:hover {
                background: color-mix(in oklab, ${o} 18%, transparent);
            }
            .primary:active,
            .ghost:active {
                transform: translateY(1px);
            }
            .ghost:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `};function w(m){const t=m?new Date(m):new Date,g=t.toDateString(),u=String(t.getHours()).padStart(2,"0"),b=String(t.getMinutes()).padStart(2,"0"),j=String(t.getSeconds()).padStart(2,"0");return`${g} ${u}:${b}:${j}hrs`}function W(m){const t=new Date,g=String(t.getHours()).padStart(2,"0"),u=String(t.getMinutes()).padStart(2,"0"),b=String(t.getSeconds()).padStart(2,"0");return`${g}:${u}:${b}hrs`}function X(){var y;const m=R(),{state:t}=F(),[g,u]=l.useState(""),[b,j]=l.useState(""),[v,N]=l.useState(!1),[S,k]=l.useState(!1),[C,n]=l.useState(!1),[D,V]=l.useState(!1),I="2025-10-06T03:25:08.920Z",L="2025-10-06T08:55:04+05:30";(y=t==null?void 0:t.from)!=null&&y.pathname,l.useEffect(()=>{const s=document.getElementById("login-email");s&&requestAnimationFrame(()=>{try{s.focus({preventScroll:!0})}catch{s.focus()}})},[]);function M(s){s.preventDefault();{n(!0);return}}function B(s){{n(!0);return}}function f(s){s.getModifierState&&s.getModifierState("CapsLock")?k(!0):k(!1)}const z=l.useMemo(()=>[{key:"google",label:"Continue with Google",Icon:G},{key:"github",label:"Continue with GitHub",Icon:U},{key:"microsoft",label:"Continue with Microsoft",Icon:q},{key:"apple",label:"Continue with Apple",Icon:Y}],[]);return e.jsxs(h.Wrap,{id:"search-print-area",children:[e.jsxs(h.BrandPane,{children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-hidden":"true",children:"AR"}),e.jsx("div",{className:"name",children:"Ashish Ranjan"})]}),e.jsxs("div",{className:"headline",children:[e.jsx("h1",{children:"Welcome back"}),e.jsx("p",{children:"Access the unified ERP demo—fast navigation, clean typography, and consistent theming across every module."})]}),e.jsxs("div",{className:"featureGrid",children:[e.jsxs("div",{className:"feature card",children:[e.jsx("h3",{children:"Deep Links"}),e.jsx("p",{children:"Jump straight to entity views with stable URLs for lists, details, and print-friendly pages."}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/customers",children:"Customers"}),e.jsx(r,{to:"/orders",children:"Orders"}),e.jsx(r,{to:"/products",children:"Products"}),e.jsx(r,{to:"/invoices",children:"Invoices"})]})]}),e.jsxs("div",{className:"feature card",children:[e.jsx("h3",{children:"Display-only Demo"}),e.jsx("p",{children:"Buttons that would mutate data are gated. Explore UI, layouts, and flows without any side effects."}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx(r,{to:"/finance",children:"Finance"}),e.jsx(r,{to:"/inventory",children:"Inventory"})]})]}),e.jsxs("div",{className:"feature card",children:[e.jsx("h3",{children:"Consistent UX"}),e.jsx("p",{children:"Shared tokens, cards, shadows, and focus states ensure a cohesive experience across the app."}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/examples/theme",children:"Theme Tokens"}),e.jsx(r,{to:"/examples/table",children:"Tables"}),e.jsx(r,{to:"/examples/print",children:"Print Demo"})]})]})]}),e.jsxs("div",{className:"quick",children:[e.jsxs("div",{className:"searchHint",children:[e.jsx(H,{size:18,"aria-hidden":"true"}),e.jsxs("span",{children:["Tip: Press ",e.jsx("b",{children:"Ctrl + K"})," to search nav"]})]}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(r,{to:"/dashboard",children:"Dashboard"}),e.jsx(r,{to:"/reports/sales",children:"Sales Report"}),e.jsx(r,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(r,{to:"/admin/users",children:"Admin > Users"}),e.jsx(r,{to:"/settings/appearance",children:"Settings > Appearance"}),e.jsx(r,{to:"/help",children:"Help Center"})]})]}),e.jsxs("div",{className:"buildInfo card",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Build"}),e.jsx("span",{className:"v",children:w(I)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Last Commit"}),e.jsx("span",{className:"v",children:w(L)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Local Time"}),e.jsx("span",{className:"v",children:W()})]})]})]}),e.jsxs(h.FormPane,{children:[e.jsxs(h.Card,{role:"region","aria-label":"Sign in",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h2",{children:"Sign in"}),e.jsx("p",{children:"Use demo credentials shown below or continue with an identity provider."})]}),e.jsxs("form",{onSubmit:M,className:"form",autoComplete:"on",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"login-email",children:"Email"}),e.jsx("input",{id:"login-email",type:"email",inputMode:"email",placeholder:"you@example.com",value:g,onChange:s=>u(s.target.value),onKeyUp:f,onKeyDown:f,required:!0})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"login-password",children:"Password"}),e.jsxs("div",{className:"pwdWrap",children:[e.jsx("input",{id:"login-password",type:v?"text":"password",placeholder:"••••••••",value:b,onChange:s=>j(s.target.value),onKeyUp:f,onKeyDown:f,required:!0}),e.jsx("button",{type:"button",className:"iconBtn","aria-label":v?"Hide password":"Show password",onClick:()=>N(s=>!s),children:v?e.jsx(O,{size:18}):e.jsx(T,{size:18})})]}),S&&e.jsxs("div",{className:"hint",children:[e.jsx(E,{size:16,"aria-hidden":"true"}),e.jsx("span",{children:"Caps Lock is ON"})]})]}),e.jsxs("div",{className:"row rowInline",children:[e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox"})," ",e.jsx("span",{children:"Remember me"})]}),e.jsx(r,{to:"/auth/forgot",className:"muted",children:"Forgot password?"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"primary",disabled:D,children:"Sign in (Demo)"}),e.jsx(r,{to:"/auth/register",className:"ghost",children:"Create account"})]})]}),e.jsx("div",{className:"divLine",role:"separator","aria-label":"or continue with",children:e.jsx("span",{children:"or continue with"})}),e.jsx("div",{className:"ssoGrid",children:z.map(({key:s,label:P,Icon:A})=>e.jsxs("button",{className:"ssoBtn",type:"button",onClick:()=>B(),children:[e.jsx(A,{size:18,"aria-hidden":"true"}),e.jsx("span",{children:P})]},s))}),e.jsxs("div",{className:"footerLinks",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx(r,{to:"/about",children:"About"}),e.jsx(r,{to:"/contact",children:"Contact"}),e.jsx(r,{to:"/faq",children:"FAQ"}),e.jsx(r,{to:"/changelog",children:"Changelog"}),e.jsx(r,{to:"/roadmap",children:"Roadmap"}),e.jsx(r,{to:"/settings",children:"Settings"})]})]}),e.jsxs(h.MetaRow,{children:[e.jsxs("div",{className:"muted",children:["By continuing, you agree to our ",e.jsx(r,{to:"/settings/print-templates",children:"Terms"})," & ",e.jsx(r,{to:"/settings/privacy",children:"Privacy"}),"."]}),e.jsxs("div",{className:"muted",children:["Need access? Visit ",e.jsx(r,{to:"/admin/users",children:"Admin > Users"})," or ",e.jsx(r,{to:"/help",children:"Help Center"}),"."]})]})]}),C&&e.jsx(h.Modal,{onClick:()=>n(!1),role:"dialog","aria-modal":"true","aria-label":"Demo mode",children:e.jsxs("div",{className:"sheet",onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{children:"Demo Mode"}),e.jsx("p",{children:"Authentication is disabled in this demo. Explore the app using navigation links below."})]}),e.jsxs("div",{className:"gridLinks",children:[e.jsx(r,{to:"/dashboard",onClick:()=>n(!1),children:"Open Dashboard"}),e.jsx(r,{to:"/customers",onClick:()=>n(!1),children:"Browse Customers"}),e.jsx(r,{to:"/orders",onClick:()=>n(!1),children:"View Orders"}),e.jsx(r,{to:"/products",onClick:()=>n(!1),children:"Products"}),e.jsx(r,{to:"/invoices",onClick:()=>n(!1),children:"Invoices"}),e.jsx(r,{to:"/reports",onClick:()=>n(!1),children:"Reports"}),e.jsx(r,{to:"/inventory",onClick:()=>n(!1),children:"Inventory"}),e.jsx(r,{to:"/admin/users",onClick:()=>n(!1),children:"Admin > Users"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"primary",onClick:()=>{n(!1),m("/dashboard")},children:"Go to Dashboard"}),e.jsx("button",{className:"ghost",onClick:()=>n(!1),children:"Close"})]})]})}),e.jsx("style",{children:`
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
      `})]})}export{X as default};
