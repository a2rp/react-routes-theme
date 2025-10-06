import{d as E,a as A,r as c,j as e,aP as G,aQ as I,e as O,L as o,aN as R,S as x,l as F,w as H,ad as $,N as s}from"./index-CqBbF2bz.js";const W="var(--bg, #0d1117)",l="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",t="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",h="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",B={Wrap:E.main`
    width: 100%;
    color: ${l};
    background: ${W};
    padding: 22px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 22px;

    .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

    /* Header */
    .hdr {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 16px;
      align-items: center;

      .hdr-left {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h1 {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: "Antonio", sans-serif;
          font-weight: 700;
          letter-spacing: 0.4px;
          font-size: 26px;
          line-height: 1.2;
          outline: none;
        }
        .icon {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 34px; height: 34px;
          border-radius: 10px;
          background: color-mix(in oklab, ${i} 16%, transparent);
          border: 1px solid ${r};
        }
        .sub {
          color: ${d};
        }
        .mail { color: ${l}; display: inline-flex; align-items: center; gap: 6px; }
        .pill {
          align-self: flex-start;
          font-size: 12px;
          color: ${l};
          background: color-mix(in oklab, ${i} 14%, transparent);
          border: 1px solid ${r};
          border-radius: 999px;
          padding: 4px 10px;
        }
      }

      .actions {
        display: inline-flex;
        gap: 10px;
        flex-wrap: wrap;

        .btnPrimary {
          background: ${i};
          color: #fff;
          border: 1px solid ${i};
          padding: 9px 14px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: transform .06s ease, box-shadow .2s ease, opacity .2s ease;
          box-shadow: ${h};
        }
        .btnPrimary:hover { opacity: .95; }
        .btnPrimary:active { transform: translateY(1px); }

        .btnGhost {
          background: ${t};
          color: ${l};
          border: 1px solid ${r};
          padding: 9px 14px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px;
          transition: color .2s ease, border-color .2s ease, background .2s ease;
          text-decoration: none;
        }
        .btnGhost:hover { color: ${i}; border-color: ${i}; }
      }
    }

    /* Banner (printable) */
    .banner {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 16px;
      background: ${t};
      border: 1px solid ${r};
      border-radius: 14px;
      padding: 16px;
      box-shadow: ${h};

      .banner-left {
        display: flex; flex-direction: column; gap: 14px;

        .status {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid ${r};
          background: color-mix(in oklab, ${i} 12%, transparent);
        }
        .status .dot {
          width: 8px; height: 8px; border-radius: 999px;
          background: ${i};
          box-shadow: 0 0 0 3px ${C};
        }

        .sentMeta {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .row { display: flex; flex-direction: column; gap: 4px; }
        .lbl { color: ${d}; display: inline-flex; align-items: center; gap: 6px; }
        .val { font-weight: 600; }
      }

      .banner-right {
        display: flex; flex-direction: column; gap: 12px;

        .tokenCard {
          border: 1px solid ${r};
          background: color-mix(in oklab, ${t} 96%, transparent);
          border-radius: 12px;
          padding: 12px;
          display: flex; flex-direction: column; gap: 10px;

          .tokenHead {
            display: flex; align-items: center; justify-content: space-between;
            font-weight: 600;
          }
          .btnTiny {
            background: ${t};
            border: 1px solid ${r};
            color: ${l};
            border-radius: 8px;
            padding: 6px 10px;
            cursor: pointer;
            transition: color .2s ease, border-color .2s ease, background .2s ease;
            display: inline-flex; align-items: center; gap: 6px;
          }
          .btnTiny:hover { color: ${i}; border-color: ${i}; }

          .token {
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px dashed ${r};
            background: #00000022;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            user-select: all;
            overflow-wrap: anywhere;
          }

          .metaGrid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
            .k { color: ${d}; font-size: 12px; }
            .v { font-weight: 600; }
          }
        }

        .ctaRow {
          display: flex; gap: 8px; flex-wrap: wrap;

          .btnDisabled {
            background: ${t};
            color: ${d};
            border: 1px dashed ${r};
            padding: 9px 14px;
            border-radius: 10px;
            font-weight: 600;
            cursor: not-allowed;
          }
          .btnGhost {
            background: ${t};
            color: ${l};
            border: 1px solid ${r};
            padding: 9px 14px;
            border-radius: 10px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex; align-items: center; gap: 8px;
          }
          .btnGhost:hover { color: ${i}; border-color: ${i}; }
        }
      }

      @media (max-width: 980px) {
        grid-template-columns: 1fr;
      }
    }

    /* Steps / Timeline */
    .steps {
      display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;

      .step {
        border: 1px solid ${r};
        background: ${t};
        border-radius: 12px;
        padding: 14px;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: start;

        .badge {
          width: 34px; height: 34px; border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid ${r};
          background: color-mix(in oklab, ${i} 10%, transparent);
        }
        .badge.done {
          background: color-mix(in oklab, ${i} 16%, transparent);
        }
        .badge.pulse {
          box-shadow: 0 0 0 3px ${C};
        }
        .badge.idle {
          opacity: 0.7;
        }

        .body {
          display: flex; flex-direction: column; gap: 6px;
          .title { font-weight: 700; }
          .desc { color: ${d}; }
        }
      }

      @media (max-width: 980px) {
        grid-template-columns: 1fr;
      }
    }

    /* Grid of navigation cards */
    .gridNav {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;

      .card {
        border: 1px solid ${r};
        background: ${t};
        border-radius: 12px;
        padding: 14px;
        box-shadow: ${h};

        h3 {
          font-family: "Antonio", sans-serif;
          margin-bottom: 8px;
          letter-spacing: .3px;
        }

        .links {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
        }
        .links a {
          display: inline-flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 8px;
          border: 1px solid ${r};
          background: color-mix(in oklab, ${t} 96%, transparent);
          text-decoration: none;
          color: ${l};
          transition: color .2s ease, border-color .2s ease, background .2s ease;
        }
        .links a:hover { color: ${i}; border-color: ${i}; }
        .list { margin-left: 18px; color: ${d}; }
        .list li { margin: 4px 0; }
      }

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }

    /* Footer */
    .foot {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      padding-top: 6px;
      border-top: 1px solid ${r};
      color: ${d};

      .hint { color: ${l}; font-weight: 600; margin-right: 6px; }

      .right {
        display: inline-flex; gap: 12px;
      }
      .right a {
        color: ${d}; text-decoration: none; border-bottom: 1px dashed transparent;
      }
      .right a:hover { color: ${i}; border-bottom-color: ${i}; }
    }
  `},g=a=>String(a).padStart(2,"0"),M=a=>a.toDateString(),P=a=>`${g(a.getHours())}:${g(a.getMinutes())}:${g(a.getSeconds())}hrs`,b=a=>`${M(a)} ${P(a)}`,S=a=>{try{return typeof a=="string"?a:void 0}catch{return}},u=S("2025-10-06T03:25:08.920Z"),f=S("2025-10-06T08:55:04+05:30"),_=()=>{const{search:a}=A(),j=c.useMemo(()=>new URLSearchParams(a),[a]),T=j.get("email"),v=j.get("source"),y=T||"user@example.com",[z,N]=c.useState(!1),[Y,k]=c.useState(!1),w="vfy_DEMO_3f9c7b1c4",m=c.useMemo(()=>{const n=f||u,p=n?new Date(n):new Date;return{date:M(p),time:P(p),datetime:b(p)}},[]),L=async()=>{try{await navigator.clipboard.writeText(w),N(!0);const n=setTimeout(()=>N(!1),1800);return()=>clearTimeout(n)}catch{}},D=c.useCallback(()=>{k(!0),document.body.classList.add("print-section-mode");const n=()=>{document.body.classList.remove("print-section-mode"),k(!1),window.removeEventListener("afterprint",n)};window.addEventListener("afterprint",n),setTimeout(()=>window.print(),40)},[]);return c.useEffect(()=>{const n=document.getElementById("verify-title");if(!n)return;const p=requestAnimationFrame(()=>{try{n.focus({preventScroll:!0})}catch{n.focus()}});return()=>cancelAnimationFrame(p)},[]),e.jsxs(B.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{className:"hdr",children:[e.jsxs("div",{className:"hdr-left",children:[e.jsxs("h1",{id:"verify-title",tabIndex:-1,children:[e.jsx("span",{className:"icon",children:e.jsx(G,{size:28})}),"Verify Your Email"]}),e.jsxs("p",{className:"sub",children:["We’ve sent a verification link to ",e.jsxs("span",{className:"mail",children:[e.jsx(I,{size:16})," ",y]}),". Please click the link to finish signing in."]}),v&&e.jsxs("div",{className:"pill",children:["Source: ",v]})]}),e.jsxs("div",{className:"hdr-right actions",children:[e.jsxs("button",{className:"btnPrimary",onClick:D,"aria-label":"Print confirmation",children:[e.jsx(O,{size:18})," Print Confirmation"]}),e.jsxs(o,{to:"/auth/login",className:"btnGhost","aria-label":"Back to Login",children:["Back to Login ",e.jsx(R,{size:18})]})]})]}),e.jsxs("section",{id:"search-print-area",className:"banner",children:[e.jsxs("div",{className:"banner-left",children:[e.jsxs("div",{className:"status waiting",children:[e.jsx("span",{className:"dot"}),"Waiting for verification"]}),e.jsxs("div",{className:"sentMeta",children:[e.jsxs("div",{className:"row",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(x,{size:16})," Email sent on"]}),e.jsx("span",{className:"val",children:m.datetime})]}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(x,{size:16})," Date"]}),e.jsx("span",{className:"val",children:m.date})]}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(x,{size:16})," Time"]}),e.jsx("span",{className:"val",children:m.time})]})]})]}),e.jsxs("div",{className:"banner-right",children:[e.jsxs("div",{className:"tokenCard",children:[e.jsxs("div",{className:"tokenHead",children:[e.jsx("span",{children:"Verification Token"}),e.jsxs("button",{className:"btnTiny",onClick:L,"aria-live":"polite",children:[e.jsx(F,{size:16})," ",z?"Copied":"Copy"]})]}),e.jsx("code",{className:"token",children:w}),e.jsxs("div",{className:"metaGrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Build Time"}),e.jsx("div",{className:"v",children:u?b(new Date(u)):"—"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Last Commit"}),e.jsx("div",{className:"v",children:f?b(new Date(f)):"—"})]})]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{className:"btnDisabled","aria-disabled":"true",title:"Demo only",children:"Resend Email"}),e.jsx(o,{to:"/settings/profile",className:"btnGhost",children:"Change Email"}),e.jsxs("a",{href:"https://mail.google.com",target:"_blank",rel:"noreferrer",className:"btnGhost",title:"Open your inbox in a new tab",children:["Open Inbox ",e.jsx(H,{size:16})]})]})]})]}),e.jsxs("section",{className:"steps",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"badge done",children:e.jsx($,{size:18})}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title",children:["We sent an email to ",e.jsx("strong",{children:y})]}),e.jsx("div",{className:"desc",children:"If it isn’t in your inbox, check Promotions/Spam."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"badge pulse",children:e.jsx(x,{size:18})}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"title",children:"Click the verification link"}),e.jsx("div",{className:"desc",children:"The link opens this app and marks your email as verified."})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"badge idle",children:e.jsx($,{size:18})}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"title",children:"You’re all set"}),e.jsx("div",{className:"desc",children:"Once verified, you can access everything seamlessly."})]})]})]}),e.jsxs("section",{className:"gridNav",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Next Actions"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/dashboard",children:"Dashboard"}),e.jsx(s,{to:"/customers",children:"Customers"}),e.jsx(s,{to:"/orders",children:"Orders"}),e.jsx(s,{to:"/invoices",children:"Invoices"}),e.jsx(s,{to:"/products",children:"Products"}),e.jsx(s,{to:"/inventory",children:"Inventory"}),e.jsx(s,{to:"/reports",children:"Reports"}),e.jsx(s,{to:"/settings/profile",children:"Profile"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Account & Security"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/appearance",children:"Appearance"}),e.jsx(s,{to:"/settings/notifications",children:"Notifications"}),e.jsx(s,{to:"/settings/tokens",children:"API Tokens"}),e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(s,{to:"/settings/backups",children:"Backups"}),e.jsx(s,{to:"/settings/webhooks",children:"Webhooks"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Help & Docs"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/help",children:"Help Center"}),e.jsx(s,{to:"/faq",children:"FAQ"}),e.jsx(s,{to:"/contact",children:"Contact"}),e.jsx(s,{to:"/feedback",children:"Feedback"}),e.jsx(s,{to:"/changelog",children:"Changelog"}),e.jsx(s,{to:"/roadmap",children:"Roadmap"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Troubleshooting"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Confirm the address is correct on your ",e.jsx(o,{to:"/settings/profile",children:"Profile"}),"."]}),e.jsx("li",{children:"Wait a minute; some providers delay transactional emails."}),e.jsx("li",{children:"Check Spam/Promotions. Mark as “Not spam”."}),e.jsxs("li",{children:["Try ",e.jsx("span",{className:"mono",children:"Copy"})," and paste the token if you’re testing locally."]}),e.jsxs("li",{children:["Still stuck? ",e.jsx(o,{to:"/contact",children:"Contact support"}),"."]})]})]})]}),e.jsxs("footer",{className:"foot",children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"hint",children:"Tip:"})," You can return to ",e.jsx(o,{to:"/auth/login",children:"Login"})," anytime."]}),e.jsxs("div",{className:"right",children:[e.jsx(o,{to:"/terms",children:"Terms"}),e.jsx(o,{to:"/privacy",children:"Privacy"}),e.jsx(o,{to:"/help",children:"Help"})]})]})]})};export{_ as default};
