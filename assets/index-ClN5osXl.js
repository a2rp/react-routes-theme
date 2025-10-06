import{d as n,u as w,r as c,j as e,n as N,N as o,aK as C,aL as f,M as S,L as j,z as M,aM as z,k as R,ad as T}from"./index-Dvs-eF3B.js";const s="var(--text, #f3f4f6)",a="var(--muted, #a0a0a7)",p="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",E="var(--accent-soft, rgba(90,169,255,0.15))",t={Page:n.div`
        width: 100%;
        color: ${s};
    `,Banner:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 14px;
        border: 1px solid ${i};
        background: color-mix(in oklab, ${p} 94%, transparent);
        border-radius: 10px;
        margin-bottom: 16px;

        .left {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${a};
        }
        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .dot {
            color: ${a};
        }
        a {
            color: ${s};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            padding-bottom: 1px;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        a:hover {
            color: ${r};
            border-color: ${r};
        }
    `,Header:n.header`
        padding: 12px 0 10px 0;
        .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .subtitle {
            color: ${a};
            margin-top: 6px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${a};
            margin-top: 6px;
        }
    `,Body:n.div`
        display: grid;
        grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
        align-items: start;
        gap: 16px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,Card:n.div`
        background: ${p};
        border: 1px solid ${i};
        border-radius: 12px;
        padding: 16px;
        box-shadow: var(--shadow);

        h2 {
            font-size: 18px;
            margin-bottom: 12px;
        }

        .row {
            margin-top: 12px;
        }
        label {
            display: inline-block;
            margin-bottom: 6px;
            color: ${s};
            font-weight: 600;
        }

        .field {
            position: relative;
            input {
                width: 100%;
                height: 40px;
                background: ${p};
                border: 1px solid ${i};
                color: ${s};
                padding: 0 12px 0 36px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            .icon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: ${a};
            }
            input::placeholder {
                color: ${a};
            }
            input:focus {
                border-color: ${r};
                outline: none;
                box-shadow: 0 0 0 3px ${E};
            }
            &.error input {
                border-color: #b14b4b;
            }
        }

        .hint {
            margin-top: 6px;
            color: ${a};
        }
        .errorText {
            margin-top: 6px;
            color: #e07c7c;
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 16px;
            button,
            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                height: 40px;
                padding: 0 14px;
                border-radius: 8px;
                cursor: pointer;
                text-decoration: none;
                border: 1px solid ${i};
                transition: transform 0.05s ease, border-color 0.2s ease,
                    background 0.2s ease, color 0.2s ease;
            }
            .primary {
                background: color-mix(in oklab, ${r} 18%, transparent);
                color: ${s};
                border-color: ${r};
            }
            .primary:hover {
                background: color-mix(in oklab, ${r} 28%, transparent);
            }
            .primary:active {
                transform: translateY(1px);
            }

            .ghost {
                background: transparent;
                color: ${s};
            }
            .ghost:hover {
                border-color: ${r};
                color: ${r};
            }
            .ghost:active {
                transform: translateY(1px);
            }
            .ghost svg {
                margin-right: 2px;
            }
        }

        .altRoutes {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 18px;
            @media (max-width: 800px) {
                grid-template-columns: 1fr;
            }
            .label {
                font-weight: 600;
                color: ${a};
                margin-bottom: 6px;
            }
            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            a {
                display: inline-flex;
                align-items: center;
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${s};
                border: 1px dashed ${i};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                color: ${r};
                border-color: ${r};
                background: color-mix(in oklab, ${r} 10%, transparent);
            }
        }
    `,Side:n.aside`
        display: grid;
        gap: 12px;
    `,InfoCard:n.div`
        background: ${p};
        border: 1px solid ${i};
        border-radius: 12px;
        padding: 14px;
        box-shadow: var(--shadow);

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 16px;
        }
        p {
            color: ${a};
            margin-bottom: 8px;
        }
        ul {
            padding-left: 16px;
        }
        li {
            color: ${s};
            margin: 6px 0;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .chips a {
            text-decoration: none;
            color: ${s};
            border: 1px dashed ${i};
            border-radius: 999px;
            padding: 6px 10px;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .chips a:hover {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .small {
            color: ${a};
            margin-top: 10px;
            font-size: 12px;
        }
    `,TinyCard:n.div`
        background: ${p};
        border: 1px solid ${i};
        border-radius: 10px;
        padding: 10px;
        .row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px dashed ${i};
        }
        .row:last-child {
            border-bottom: 0;
        }
        .k {
            color: ${a};
        }
        .v {
            color: ${s};
        }
    `,ModalBackdrop:n.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 16px;
    `,ModalCard:n.div`
        width: min(560px, 95vw);
        background: ${p};
        border: 1px solid ${i};
        border-radius: 14px;
        padding: 16px;
        box-shadow: var(--shadow);
        position: relative;

        .close {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid ${i};
            border-radius: 8px;
            cursor: pointer;
            background: transparent;
            color: ${a};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .close:hover {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .iconWrap {
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            margin-bottom: 8px;
            background: color-mix(in oklab, ${r} 16%, transparent);
            color: ${s};
        }

        h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        p {
            color: ${a};
            margin-bottom: 12px;
        }

        .ctaRow {
            display: flex;
            gap: 10px;
            margin-top: 4px;
            margin-bottom: 8px;
            a,
            button {
                height: 40px;
                padding: 0 14px;
                border-radius: 8px;
                text-decoration: none;
                border: 1px solid ${i};
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.05s ease, border-color 0.2s ease,
                    background 0.2s ease, color 0.2s ease;
            }
            .primary {
                background: color-mix(in oklab, ${r} 18%, transparent);
                color: ${s};
                border-color: ${r};
            }
            .primary:hover {
                background: color-mix(in oklab, ${r} 28%, transparent);
            }
            .primary:active {
                transform: translateY(1px);
            }

            .ghost {
                background: transparent;
                color: ${s};
            }
            .ghost:hover {
                border-color: ${r};
                color: ${r};
            }
            .ghost:active {
                transform: translateY(1px);
            }
        }

        .footNote {
            color: ${a};
            font-size: 12px;
        }
    `};function $(l){return l.toDateString()}function v(l){const h=l.toTimeString().split(" ")[0];return`${$(l)} ${h}hrs`}function H(){w();const[l,h]=c.useState(""),[m,b]=c.useState(!1),[y,g]=c.useState(!1),u=c.useMemo(()=>new Date,[]),x=c.useMemo(()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.trim()),[l]);c.useEffect(()=>{const d=document.getElementById("forgot-email-input");if(d)try{d.focus({preventScroll:!0})}catch{d.focus()}},[]);const k=d=>{if(d.preventDefault(),b(!0),!!x){g(!0);return}};return e.jsxs(t.Page,{id:"auth-forgot-page",children:[e.jsxs(t.Banner,{role:"note","aria-live":"polite",children:[e.jsxs("div",{className:"left",children:[e.jsx(N,{size:18}),e.jsx("span",{children:"Demo preview — password reset is display-only."})]}),e.jsxs("div",{className:"right",children:[e.jsx(o,{to:"/home",title:"Go to home",children:"Home"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(o,{to:"/dashboard",title:"See dashboard",children:"Dashboard"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(o,{to:"/help",title:"Need help?",children:"Help"})]})]}),e.jsxs(t.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx(C,{size:26,"aria-hidden":!0}),e.jsx("h1",{children:"Forgot Password"})]}),e.jsx("p",{className:"subtitle",children:"Enter your email and we’ll send a reset link. This preview shows how the experience looks in production."}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Last updated: ",v(u)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx(f,{size:16,"aria-hidden":!0})," Secure by design"]})]})]}),e.jsxs(t.Body,{children:[e.jsxs(t.Card,{as:"form",onSubmit:k,"aria-labelledby":"forgot-title",children:[e.jsx("h2",{id:"forgot-title",children:"Reset link to your inbox"}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"forgot-email-input",children:"Email address"}),e.jsxs("div",{className:`field ${m&&!x?"error":""}`,children:[e.jsx(S,{"aria-hidden":!0,className:"icon"}),e.jsx("input",{id:"forgot-email-input",type:"email",inputMode:"email",autoComplete:"email",placeholder:"you@company.com",value:l,onChange:d=>h(d.target.value),onBlur:()=>b(!0),"aria-invalid":m&&!x?"true":"false","aria-describedby":"forgot-email-hint"})]}),e.jsx("div",{id:"forgot-email-hint",className:"hint",children:"We’ll never share your email. Reset link typically arrives in under a minute."}),m&&!x&&e.jsx("div",{role:"alert",className:"errorText",children:"Please enter a valid email address."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"primary",children:"Send reset link"}),e.jsxs(j,{to:"/auth/login",className:"ghost",children:[e.jsx(M,{size:18,"aria-hidden":!0}),"Back to login"]})]}),e.jsxs("div",{className:"altRoutes",children:[e.jsxs("div",{className:"col",children:[e.jsx("p",{className:"label",children:"Continue with"}),e.jsxs("div",{className:"links",children:[e.jsx(o,{to:"/auth/login",title:"Sign in",children:"Sign in"}),e.jsx(o,{to:"/auth/register",title:"Register",children:"Create account"}),e.jsx(o,{to:"/auth/verify",title:"Verify email",children:"Verify email"}),e.jsx(o,{to:"/auth/reset",title:"Reset using token",children:"Have a token?"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("p",{className:"label",children:"Explore"}),e.jsxs("div",{className:"links",children:[e.jsx(o,{to:"/home",title:"Home",children:"Home"}),e.jsx(o,{to:"/dashboard",title:"KPIs",children:"Dashboard"}),e.jsx(o,{to:"/reports",title:"Reports",children:"Reports"}),e.jsx(o,{to:"/help",title:"Help center",children:"Help Center"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("p",{className:"label",children:"Support"}),e.jsxs("div",{className:"links",children:[e.jsx(o,{to:"/faq",title:"FAQ",children:"FAQ"}),e.jsx(o,{to:"/contact",title:"Contact",children:"Contact"}),e.jsx(o,{to:"/feedback",title:"Feedback",children:"Feedback"}),e.jsx(o,{to:"/changelog",title:"Changelog",children:"Changelog"})]})]})]})]}),e.jsxs(t.Side,{children:[e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"head",children:[e.jsx(f,{size:20,"aria-hidden":!0}),e.jsx("h3",{children:"Security tips"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Only reset from a device you trust."}),e.jsx("li",{children:"Never share links or one-time codes."}),e.jsx("li",{children:"Create unique passwords for every app."}),e.jsxs("li",{children:["Enable two-factor authentication in ",e.jsx(o,{to:"/settings/notifications",children:"Settings"}),"."]})]})]}),e.jsxs(t.InfoCard,{children:[e.jsxs("div",{className:"head",children:[e.jsx(z,{size:20,"aria-hidden":!0}),e.jsx("h3",{children:"Need help?"})]}),e.jsx("p",{children:"Can’t access your email? Try the options below:"}),e.jsxs("div",{className:"chips",children:[e.jsx(o,{to:"/contact",children:"Contact Support"}),e.jsx(o,{to:"/faq",children:"Troubleshooting"}),e.jsx(o,{to:"/auth/verify",children:"Resend verification"}),e.jsx(o,{to:"/settings/profile",children:"Update profile"})]}),e.jsxs("div",{className:"small",children:["Tip: If your workspace uses SSO, ask your admin to reset from ",e.jsx(o,{to:"/admin/users",children:"Users"}),"."]})]}),e.jsxs(t.TinyCard,{children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Today"}),e.jsx("span",{className:"v",children:$(u)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Local time"}),e.jsx("span",{className:"v",children:v(u).split(" ").slice(3).join(" ")})]})]})]})]}),y&&e.jsx(t.ModalBackdrop,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:e.jsxs(t.ModalCard,{children:[e.jsx("button",{className:"close",onClick:()=>g(!1),"aria-label":"Close",children:e.jsx(R,{size:20})}),e.jsx("div",{className:"iconWrap",children:e.jsx(T,{size:28,"aria-hidden":!0})}),e.jsx("h3",{id:"demo-modal-title",children:"Check your inbox"}),e.jsxs("p",{children:["If this were live, we’d send a secure link to ",e.jsx("strong",{children:l}),". Use it within 10 minutes to set a new password."]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx(j,{to:"/auth/reset",className:"primary",children:"Open Reset Page"}),e.jsx("button",{className:"ghost",onClick:()=>g(!1),children:"Close"})]}),e.jsxs("div",{className:"footNote",children:["Didn’t receive an email? Check spam, or ",e.jsx(o,{to:"/auth/verify",children:"verify your account"}),"."]})]})})]})}export{H as default};
