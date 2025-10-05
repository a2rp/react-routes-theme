import{d as m,u as F,a as T,r as l,j as e,N as d}from"./index-CvWKwy17.js";const c="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",p="var(--card, #111318)",s="var(--border, #23262d)",o="var(--accent, #5aa9ff)",u="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--radius, 16px)",g={Wrapper:m.div`
        color: ${c};
        padding: 28px 0 64px;
    `,Toast:m.div`
        position: sticky;
        top: 8px;
        z-index: 5;
        margin-bottom: 10px;
        padding: 10px 14px;
        border: 1px solid ${s};
        border-radius: 10px;
        background: color-mix(in oklab, ${o} 10%, transparent);
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        width: fit-content;
    `,Hero:m.section`
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 18px;
        padding: 18px;
        align-items: center;
        border-radius: ${$};
        border: 1px solid ${s};
        background: ${p};
        margin-bottom: 18px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .mark {
            width: 120px;
            height: 120px;
            display: grid;
            place-items: center;
            svg {
                width: 100%;
                height: 100%;
            }
        }

        .copy {
            .eyebrow {
                color: ${h};
                font-size: 12px;
                letter-spacing: 0.3px;
            }
            h1 {
                font-size: 28px;
                line-height: 1.25;
                margin: 4px 0 6px;
                .num {
                    font-size: 32px;
                    margin-right: 8px;
                    background: linear-gradient(
                        90deg,
                        ${o},
                        color-mix(in oklab, ${o} 30%, transparent)
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            }
            .muted {
                color: ${h};
            }

            .search {
                margin-top: 12px;
                display: flex;
                gap: 8px;
                input {
                    flex: 1 1 auto;
                    border-radius: 10px;
                    border: 1px solid ${s};
                    background: ${p};
                    color: ${c};
                    padding: 10px 12px;
                    transition: border-color 0.25s, box-shadow 0.25s;
                }
                input:focus {
                    outline: none;
                    border-color: ${o};
                    box-shadow: 0 0 0 3px ${u};
                }
            }

            .actions {
                margin-top: 12px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }

            .btnPrimary,
            .btnGhost {
                border-radius: 10px;
                padding: 8px 14px;
                font-weight: 600;
                border: 1px solid ${s};
                background: ${p};
                color: ${c};
                transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.06s ease-in-out;
            }
            .btnPrimary:hover {
                color: ${o};
                border-color: ${o};
                box-shadow: 0 0 0 3px ${u};
            }
            .btnGhost:hover {
                color: ${o};
                border-color: ${o};
            }
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }
        }

        @media (max-width: 680px) {
            grid-template-columns: 1fr;
            .mark {
                display: none;
            }
        }
    `,PanelGrid:m.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1024px) {
            grid-template-columns: 1.2fr 0.8fr;
            grid-auto-rows: minmax(0, auto);
        }

        .card {
            border-radius: ${$};
            border: 1px solid ${s};
            background: ${p};
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .quick header h3,
        .info header h3,
        .map header h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .quick .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .quick .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${s};
            background: color-mix(in oklab, ${o} 8%, transparent);
            padding: 6px 10px;
            border-radius: 999px;
            color: ${c};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .quick .chip:hover {
            color: ${o};
            border-color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }

        .info .rows {
            display: grid;
            gap: 10px;
        }
        .info .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            border-bottom: 1px dashed ${s};
            padding-bottom: 10px;
        }
        .info .row:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }
        .info .k {
            color: ${h};
        }
        .info .v {
            color: ${c};
            word-break: break-word;
        }

        .info .foot {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .info .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            font-weight: 600;
            border: 1px solid ${s};
            background: ${p};
            color: ${c};
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .info .btnGhost:hover {
            color: ${o};
            border-color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }

        .map .cols {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            @media (min-width: 980px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        .map h4 {
            font-size: 13px;
            color: ${h};
            margin-bottom: 6px;
        }
        .map ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .map a {
            color: ${c};
            border-bottom: 1px dotted transparent;
        }
        .map a:hover {
            color: ${o};
            border-bottom-color: ${o};
        }
    `},M=(i,f)=>{const a=i instanceof Date?i:new Date(i),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=x=>String(x).padStart(2,"0");return`${`${b[a.getDay()]} ${v[a.getMonth()]} ${n(a.getDate())} ${a.getFullYear()}`} ${n(a.getHours())}:${n(a.getMinutes())}:${n(a.getSeconds())}hrs`},D=()=>{const i=F(),{pathname:f,search:a,hash:b}=T(),v=l.useMemo(()=>`${f}${a}${b}`,[f,a,b]),[n,j]=l.useState(""),[x,k]=l.useState(""),N=l.useRef(null),y=l.useRef(null);l.useEffect(()=>{const t=requestAnimationFrame(()=>{var r,w;try{(r=y.current)==null||r.focus({preventScroll:!0})}catch{(w=y.current)==null||w.focus()}});return()=>cancelAnimationFrame(t)},[]);const S=t=>{t.preventDefault();const r=n.trim();r&&i(`/search?q=${encodeURIComponent(r)}`)},C=()=>i(-1),G=()=>i("/home"),R=async()=>{try{await navigator.clipboard.writeText(window.location.href),k("Link copied to clipboard")}catch{k("Unable to copy link")}finally{setTimeout(()=>k(""),2800)}},L=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},P=l.useMemo(()=>new Date,[]),q=[{to:"/dashboard",label:"Dashboard"},{to:"/customers",label:"Customers"},{to:"/orders",label:"Orders"},{to:"/invoices",label:"Invoices"},{to:"/inventory",label:"Inventory"},{to:"/products",label:"Products"}],A=[{title:"Sales & Billing",links:[{to:"/sales",label:"Sales Overview"},{to:"/orders",label:"Orders"},{to:"/sales/quotes",label:"Quotes"},{to:"/invoices",label:"Invoices"},{to:"/receipts",label:"Receipts"},{to:"/invoices/credit-notes",label:"Credit Notes"}]},{title:"Catalog",links:[{to:"/products",label:"All Products"},{to:"/categories",label:"Categories"},{to:"/products/brands",label:"Brands"},{to:"/products/attributes",label:"Attributes"},{to:"/products/price-lists",label:"Price Lists"},{to:"/medicines",label:"Medicines"}]},{title:"Operations",links:[{to:"/inventory",label:"Inventory"},{to:"/inventory/lots",label:"Lots"},{to:"/inventory/batches",label:"Batches"},{to:"/shipments",label:"Shipments"},{to:"/vendors",label:"Vendors"},{to:"/purchase-orders",label:"Purchase Orders"}]},{title:"Reports & Finance",links:[{to:"/reports",label:"All Reports"},{to:"/reports/sales",label:"Sales"},{to:"/reports/inventory",label:"Inventory"},{to:"/finance",label:"Finance Overview"},{to:"/finance/profit-loss",label:"Profit & Loss"},{to:"/finance/balance-sheet",label:"Balance Sheet"}]},{title:"Admin & Settings",links:[{to:"/admin/users",label:"Users"},{to:"/admin/roles",label:"Roles"},{to:"/settings",label:"Settings"},{to:"/settings/appearance",label:"Appearance"},{to:"/changelog",label:"Changelog"},{to:"/roadmap",label:"Roadmap"}]},{title:"Help",links:[{to:"/help",label:"Help Center"},{to:"/faq",label:"FAQ"},{to:"/contact",label:"Contact"},{to:"/feedback",label:"Feedback"}]}];return e.jsxs(g.Wrapper,{className:"container",children:[e.jsx("style",{children:`
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
      `}),x?e.jsx(g.Toast,{role:"status","aria-live":"polite",children:x}):null,e.jsxs(g.Hero,{className:"card",children:[e.jsx("div",{className:"mark",children:e.jsxs("svg",{viewBox:"0 0 120 120","aria-hidden":"true",focusable:"false",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"g1",x1:"0",y1:"0",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:"var(--accent)"}),e.jsx("stop",{offset:"1",stopColor:"rgba(90,169,255,0.5)"})]})}),e.jsx("circle",{cx:"60",cy:"60",r:"52",fill:"url(#g1)",opacity:"0.15"}),e.jsx("path",{d:"M35 70 L50 50 L65 70 L85 45",stroke:"var(--accent)",strokeWidth:"3",fill:"none",strokeLinecap:"round"})]})}),e.jsxs("div",{className:"copy",children:[e.jsx("div",{className:"eyebrow",children:"Error"}),e.jsxs("h1",{children:[e.jsx("span",{className:"num",children:"404"})," Page not found"]}),e.jsx("p",{className:"muted",children:"The page you’re looking for doesn’t exist, moved, or the URL was mistyped. Use search or jump to a popular section below."}),e.jsxs("form",{className:"search",onSubmit:S,children:[e.jsx("input",{ref:y,type:"text",placeholder:"Search the app…",value:n,onChange:t=>j(t.target.value),"aria-label":"Search"}),e.jsx("button",{className:"btnPrimary",type:"submit",title:"Search",children:"Search"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:C,title:"Go back",children:"Go Back"}),e.jsx("button",{className:"btnPrimary",onClick:G,title:"Go home",children:"Go Home"}),e.jsx("button",{className:"btnGhost",onClick:R,title:"Copy URL",children:"Copy Link"}),e.jsx(d,{className:"btnGhost",to:"/feedback",title:"Report this broken link",children:"Report"}),e.jsx("button",{className:"btnGhost",onClick:L,title:"Print summary",children:"Print"})]})]})]}),e.jsxs(g.PanelGrid,{children:[e.jsxs("section",{className:"card quick",children:[e.jsx("header",{children:e.jsx("h3",{children:"Quick destinations"})}),e.jsx("div",{className:"links",children:q.map(t=>e.jsx(d,{to:t.to,className:"chip",title:t.label,children:t.label},t.to))})]}),e.jsxs("section",{className:"card info",id:"search-print-area",ref:N,children:[e.jsx("header",{children:e.jsx("h3",{children:"Request details"})}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Attempted URL"}),e.jsx("div",{className:"v",children:v||"/"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Timestamp"}),e.jsx("div",{className:"v",children:M(P)})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Referrer"}),e.jsx("div",{className:"v",children:document.referrer||"—"})]})]}),e.jsxs("div",{className:"foot",children:[e.jsx(d,{to:"/help",className:"btnGhost",title:"Help Center",children:"Help Center"}),e.jsx(d,{to:"/contact",className:"btnGhost",title:"Contact",children:"Contact"})]})]}),e.jsxs("section",{className:"card map",children:[e.jsx("header",{children:e.jsx("h3",{children:"Sitemap (popular areas)"})}),e.jsx("div",{className:"cols",children:A.map(t=>e.jsxs("div",{className:"col",children:[e.jsx("h4",{children:t.title}),e.jsx("ul",{children:t.links.map(r=>e.jsx("li",{children:e.jsx(d,{to:r.to,children:r.label})},r.to))})]},t.title))})]})]})]})};export{D as default};
