import{d as c,r as v,j as e,N as s}from"./index-BG5XFThy.js";const n="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",m="var(--card, #111318)",p="var(--border, #23262d)",l="var(--accent, #5aa9ff)",u="var(--accent-soft, rgba(90,169,255,0.15))",b="var(--radius, 16px)",x={Page:c.div`
        color: ${n};
        padding: 24px 0 64px;
    `,Header:c.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 24px;
            letter-spacing: 0.4px;
        }
        .left .sub {
            margin-top: 6px;
            color: ${d};
        }
        .meta {
            margin-top: 6px;
            color: ${d};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${p};
            background: ${m};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${u};
        }
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${l};
            color: ${l};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Grid:c.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1040px) {
            grid-template-columns: 1fr 1fr;
        }

        .section {
            padding: 16px 18px;
            border-radius: ${b};
            border: 1px solid ${p};
            background: ${m};
            box-shadow: var(--shadow);
        }

        .section header {
            margin-bottom: 12px;
        }
        .section h2 {
            font-size: 18px;
        }
        .section .hint {
            color: ${d};
            margin-top: 4px;
        }

        .tiles {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;

            @media (min-width: 700px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .tiles.dense {
            @media (min-width: 700px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .tile {
            display: block;
            border: 1px solid ${p};
            background: color-mix(in oklab, ${m} 96%, transparent);
            color: ${n};
            padding: 14px;
            border-radius: 12px;
            text-decoration: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.08s ease;

            .title {
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .desc {
                margin-top: 6px;
                color: ${d};
                font-size: 12px;
                line-height: 1.6;
            }
        }

        .tile:hover {
            border-color: ${l};
            box-shadow: 0 0 0 3px ${u};
            color: ${n};
        }
        .tile:active {
            transform: translateY(1px);
        }

        .tile.sm {
            padding: 12px;
        }
    `,Toast:c.div`
        position: fixed;
        right: 16px;
        bottom: 16px;
        padding: 8px 12px;
        border: 1px solid ${p};
        background: ${m};
        color: ${n};
        border-radius: 10px;
        box-shadow: var(--shadow);
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
        z-index: 50;

        &[data-show="true"] {
            opacity: 1;
            transform: translateY(0);
        }
    `},h=i=>String(i).padStart(2,"0"),N=(i,j)=>{const a=i instanceof Date?i:new Date(i),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${`${r[a.getDay()]} ${t[a.getMonth()]} ${h(a.getDate())} ${a.getFullYear()}`} ${h(a.getHours())}:${h(a.getMinutes())}:${h(a.getSeconds())}hrs`},f=()=>{const i=v.useMemo(()=>new Date,[]),j=v.useRef(null),a=()=>{j.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},r=async t=>{try{await navigator.clipboard.writeText(window.location.origin+t);const o=document.getElementById("ex-toast");o&&(o.setAttribute("data-show","true"),setTimeout(()=>o.removeAttribute("data-show"),1200))}catch{}};return e.jsxs(x.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Examples Overview"}),e.jsx("p",{className:"sub",children:"A curated grid of demo screens—fast to browse, easy to deep-link. Display-only, zero-risk."}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Generated: ",N(i)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnPrimary",onClick:a,children:"Print Section"}),e.jsx(s,{className:"btnGhost",to:"/examples/theme",title:"Theme tokens preview",children:"Theme Tokens"})]})]}),e.jsx(x.Toast,{id:"ex-toast",role:"status","aria-live":"polite",children:"Link copied"}),e.jsxs(x.Grid,{children:[e.jsxs("section",{className:"card section",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Quick Start"}),e.jsx("p",{className:"hint",children:"Jump into the most common demo screens."})]}),e.jsxs("div",{className:"tiles",children:[e.jsxs(s,{to:"/examples/table",className:"tile",onContextMenu:t=>{t.preventDefault(),r("/examples/table")},children:[e.jsx("div",{className:"title",children:"Table"}),e.jsx("div",{className:"desc",children:"Compact data grid with sticky header & row states."})]}),e.jsxs(s,{to:"/examples/form",className:"tile",onContextMenu:t=>{t.preventDefault(),r("/examples/form")},children:[e.jsx("div",{className:"title",children:"Form"}),e.jsx("div",{className:"desc",children:"Inputs, selects, date pickers with crisp focus."})]}),e.jsxs(s,{to:"/examples/print",className:"tile",onContextMenu:t=>{t.preventDefault(),r("/examples/print")},children:[e.jsx("div",{className:"title",children:"Print Demo"}),e.jsx("div",{className:"desc",children:"Section-only print using a minimal CSS hook."})]}),e.jsxs(s,{to:"/examples/gallery",className:"tile",onContextMenu:t=>{t.preventDefault(),r("/examples/gallery")},children:[e.jsx("div",{className:"title",children:"Gallery"}),e.jsx("div",{className:"desc",children:"Responsive image grid & light density cards."})]})]})]}),e.jsxs("section",{className:"card section",id:"search-print-area",ref:j,children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Navigation Patterns"}),e.jsx("p",{className:"hint",children:"Breadcrumbs, sidebar search, and counters—pure display, deep-link friendly."})]}),e.jsxs("div",{className:"tiles",children:[e.jsxs(s,{to:"/examples/breadcrumbs",className:"tile",children:[e.jsx("div",{className:"title",children:"Breadcrumbs"}),e.jsx("div",{className:"desc",children:"Hierarchical context with truncation."})]}),e.jsxs(s,{to:"/examples/nav-search",className:"tile",children:[e.jsx("div",{className:"title",children:"Sidebar Search"}),e.jsx("div",{className:"desc",children:"Filterable left-nav with collapsible groups."})]}),e.jsxs(s,{to:"/examples/counter",className:"tile",children:[e.jsx("div",{className:"title",children:"Counter"}),e.jsx("div",{className:"desc",children:"Micro-interaction sample (display-only)."})]}),e.jsxs(s,{to:"/examples/persist-theme",className:"tile",children:[e.jsx("div",{className:"title",children:"Persist Theme"}),e.jsx("div",{className:"desc",children:"Theme tokens preview—no local storage writes."})]})]}),e.jsxs("div",{className:"tokensPreview",children:[e.jsxs("div",{className:"chipRow",children:[e.jsx("span",{className:"chip tone",title:"Background",children:"BG"}),e.jsx("span",{className:"chip tone text",title:"Text",children:"TEXT"}),e.jsx("span",{className:"chip tone card",title:"Card",children:"CARD"}),e.jsx("span",{className:"chip tone border",title:"Border",children:"BORDER"}),e.jsx("span",{className:"chip tone accent",title:"Accent",children:"ACCENT"})]}),e.jsx("p",{className:"muted",children:"Colors above are live from your CSS variables."})]})]}),e.jsxs("section",{className:"card section",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"State & Dev Tools"}),e.jsx("p",{className:"hint",children:"Display-only stubs to showcase layout and flows."})]}),e.jsxs("div",{className:"tiles",children:[e.jsxs(s,{to:"/examples/devtools-todos",className:"tile",children:[e.jsx("div",{className:"title",children:"Devtools Todos"}),e.jsx("div",{className:"desc",children:"State timeline, no writes."})]}),e.jsxs(s,{to:"/examples/subscribe-selector",className:"tile",children:[e.jsx("div",{className:"title",children:"Subscribe + Selector"}),e.jsx("div",{className:"desc",children:"Selective updates demo."})]}),e.jsxs(s,{to:"/examples/undo-redo",className:"tile",children:[e.jsx("div",{className:"title",children:"Undo / Redo"}),e.jsx("div",{className:"desc",children:"Temporal history UI, disabled actions in demo."})]}),e.jsxs(s,{to:"/examples/confirm-modal",className:"tile",children:[e.jsx("div",{className:"title",children:"Confirm Modal"}),e.jsx("div",{className:"desc",children:"Custom overlay—no browser alerts."})]})]})]}),e.jsxs("section",{className:"card section",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Helpful Pages"}),e.jsx("p",{className:"hint",children:"High-signal screens you’ll reference often."})]}),e.jsxs("div",{className:"tiles dense",children:[e.jsxs(s,{to:"/changelog",className:"tile sm",children:[e.jsx("div",{className:"title",children:"Changelog"}),e.jsx("div",{className:"desc",children:"Release notes, dates in your format."})]}),e.jsxs(s,{to:"/roadmap",className:"tile sm",children:[e.jsx("div",{className:"title",children:"Roadmap"}),e.jsx("div",{className:"desc",children:"What’s next—display-only."})]}),e.jsxs(s,{to:"/help",className:"tile sm",children:[e.jsx("div",{className:"title",children:"Help Center"}),e.jsx("div",{className:"desc",children:"FAQs and quick tips."})]}),e.jsxs(s,{to:"/feedback",className:"tile sm",children:[e.jsx("div",{className:"title",children:"Feedback"}),e.jsx("div",{className:"desc",children:"Non-interactive demo form."})]})]})]})]})]})};export{f as default};
