import{d as j,a as M,u as T,r as p,j as e,L as c,N as E,R as D}from"./index-BM8H5dnP.js";const d="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",f="var(--card, #111318)",u="var(--border, #23262d)",i="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",v={Page:j.div`
        padding: 24px 0 64px;
        color: ${d};
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
    `,Header:j.header`
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
        .crumbs {
            margin-top: 6px;
            ol {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding: 0;
                margin: 0;
            }
            li {
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            a {
                color: ${m};
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${i};
                border-color: ${i};
            }
            .sep {
                color: ${m};
                opacity: 0.9;
            }
            [aria-current="page"] {
                color: ${d};
                font-weight: 700;
            }
        }
        .meta {
            margin-top: 6px;
            color: ${m};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .segPicker {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        select {
            background: ${f};
            color: ${d};
            border: 1px solid ${u};
            border-radius: 8px;
            padding: 6px 8px;
            &:focus {
                outline: none;
                border-color: ${i};
                box-shadow: 0 0 0 3px ${P};
            }
        }

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${u};
            background: ${f};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${P};
        }
    `,Banner:j.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${u};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${d};
    `,Grid:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 1.2fr 1fr;
        }

        section.card {
            padding: 16px 18px;
        }

        .sectionHead {
            margin-bottom: 8px;
        }
        .sectionHead h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .hint {
            color: ${m};
            font-size: 12px;
        }

        .demoRow {
            padding-top: 8px;
        }

        /* generic crumbs demo */
        .demoCrumbs,
        .iconCrumbs ol,
        .menuCrumbs ol {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            padding: 0;
            margin: 0;
        }
        .demoCrumbs li,
        .iconCrumbs li,
        .menuCrumbs li {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            min-height: 28px;
        }
        .demoCrumbs a,
        .menuCrumbs a,
        .menuCrumbs button,
        .iconCrumbs a {
            color: ${m};
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 8px;
            padding: 4px 8px;
        }
        .demoCrumbs a:hover,
        .menuCrumbs a:hover,
        .menuCrumbs button:hover,
        .iconCrumbs a:hover {
            color: ${i};
            border-color: ${i};
            background: color-mix(in oklab, ${i} 10%, transparent);
        }
        .demoCrumbs .sep,
        .iconCrumbs .sep,
        .menuCrumbs .sep {
            color: ${m};
        }

        /* icons demo */
        .iconCrumbs .ico.home::before {
            content: "⌂";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .ico.box::before {
            content: "▣";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .ico.tag::before {
            content: "#";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .truncate {
            max-width: 520px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 700;
            color: ${d};
        }

        /* menu crumb */
        .menuCrumbs .menu {
            position: relative;
        }
        .menuCrumbs .menu .tiny {
            padding: 4px 10px;
        }
        .menuCrumbs .menu .menuList {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 6px;
            min-width: 200px;
            border: 1px solid ${u};
            background: ${f};
            border-radius: 10px;
            padding: 6px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
            display: none;
            z-index: 10;
        }
        .menuCrumbs .menu:hover .menuList {
            display: grid;
        }
        .menuCrumbs .menu .menuList a {
            padding: 8px 10px;
            border-radius: 8px;
        }
        .menuCrumbs .menu .menuList a:hover {
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${i};
        }

        /* print */
        .printPreview {
            display: grid;
            gap: 10px;
        }
        .printPreview .title {
            font-weight: 700;
        }
        .printPreview .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printPreview .k {
            color: ${m};
        }
        .printPreview .v {
            color: ${d};
        }

        /* code block */
        .code {
            margin-top: 10px;
            padding: 12px;
            border: 1px solid ${u};
            border-radius: 10px;
            background: ${f};
            color: ${d};
            font-size: 12px;
            max-height: 360px;
            overflow: auto;
        }
    `},C=(h,k)=>{const n=h instanceof Date?h:new Date(h),y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=t=>String(t).padStart(2,"0");return`${`${y[n.getDay()]} ${N[n.getMonth()]} ${o(n.getDate())} ${n.getFullYear()}`} ${o(n.getHours())}:${o(n.getMinutes())}:${o(n.getSeconds())}hrs`},S=new Date,A={"":"Home",home:"Home",about:"About",dashboard:"Dashboard",search:"Search",examples:"Examples",breadcrumbs:"Breadcrumbs",table:"Table",products:"Products",categories:"Categories",orders:"Orders",customers:"Customers",invoices:"Invoices","credit-notes":"Credit Notes",receipts:"Receipts",inventory:"Inventory",vendors:"Vendors","purchase-orders":"Purchase Orders",shipments:"Shipments",reports:"Reports",finance:"Finance",settings:"Settings"},$=[{id:"slash",label:" / ",glyph:"/"},{id:"chev",label:" › ",glyph:"›"},{id:"dot",label:" • ",glyph:"•"}],z=()=>{const h=M(),k=T(),[n,y]=p.useState("chev"),[N,o]=p.useState(!1),w=p.useRef(null),t=p.useMemo(()=>{const a=h.pathname.replace(/\/+$/,"").split("/"),r=[];let L="";for(let b=0;b<a.length;b++){const g=a[b];L+=(b===0?"":"/")+g;const B=A[g||""]||(g?g.replace(/-/g," "):"Home");r.push({label:B,href:L||"/"})}return r.length===0&&r.push({label:"Home",href:"/"}),r},[h.pathname]),l=p.useMemo(()=>$.find(s=>s.id===n)||$[0],[n]),R=async()=>{try{const s=window.location.href;await navigator.clipboard.writeText(s),o(!0),setTimeout(()=>o(!1),2e3)}catch{o(!0),setTimeout(()=>o(!1),2e3)}},G=()=>{w.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},x=s=>()=>k(s),H=p.useMemo(()=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:t.map((a,r)=>({"@type":"ListItem",position:r+1,name:a.label,item:a.href}))}),[t]);return p.useEffect(()=>{document.title="Breadcrumbs · Examples"},[]),e.jsxs(v.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(v.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Breadcrumbs"}),e.jsx("nav",{"aria-label":"Breadcrumb",className:"crumbs",children:e.jsx("ol",{children:t.map((s,a)=>{const r=a===t.length-1;return e.jsxs("li",{children:[r?e.jsx("span",{"aria-current":"page",children:s.label}):e.jsx(c,{to:s.href,children:s.label}),!r&&e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]},s.href)})})}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Updated: ",C(S)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsxs("div",{className:"segPicker",children:[e.jsx("label",{htmlFor:"sep",children:"Separator"}),e.jsx("select",{id:"sep",value:n,onChange:s=>y(s.target.value),children:$.map(s=>e.jsx("option",{value:s.id,children:s.label.trim()},s.id))})]}),e.jsx("button",{className:"btnGhost",onClick:R,title:"Copy current URL",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:G,title:"Print section",children:"Print"})]})]}),N&&e.jsxs(v.Banner,{role:"status","aria-live":"polite",children:["Link copied • ",C(new Date)]}),e.jsxs(v.Grid,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Auto (from URL)"}),e.jsxs("div",{className:"hint",children:["Reads ",e.jsx("code",{children:"location.pathname"})," and maps segments using a title dictionary."]})]}),e.jsx("div",{className:"demoRow",children:e.jsx("nav",{"aria-label":"Breadcrumb",children:e.jsx("ol",{className:"demoCrumbs",children:t.map((s,a)=>{const r=a===t.length-1;return e.jsxs("li",{children:[r?e.jsx("span",{"aria-current":"page",children:s.label}):e.jsx(E,{to:s.href,children:s.label}),!r&&e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]},s.href)})})})}),e.jsxs("div",{className:"rowBtns",children:[e.jsx("button",{className:"btnGhost small",onClick:x("/examples"),children:"Go: /examples"}),e.jsx("button",{className:"btnGhost small",onClick:x("/products/brands"),children:"Go: /products/brands"}),e.jsx("button",{className:"btnGhost small",onClick:x("/invoices/credit-notes"),children:"Go: /invoices/credit-notes"}),e.jsx("button",{className:"btnGhost small",onClick:x("/reports/finance"),children:"Go: /reports/finance"})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Truncate + Icons"}),e.jsx("div",{className:"hint",children:"End item clamps to 1 line; icons on major nodes. Useful for deep catalogs."})]}),e.jsx("div",{className:"demoRow",children:e.jsx("nav",{"aria-label":"Breadcrumb",className:"iconCrumbs",children:e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx(c,{to:"/home",title:"Home",className:"ico home",children:e.jsx("span",{className:"sr-only",children:"Home"})}),e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]}),e.jsxs("li",{children:[e.jsx(c,{to:"/products",className:"ico box",children:"Products"}),e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]}),e.jsxs("li",{children:[e.jsx(c,{to:"/products/brands",className:"ico tag",children:"Bluewave Industrial Supplies Pvt Ltd"}),e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]}),e.jsx("li",{className:"truncate","aria-current":"page",children:"Premium Anti-rust Coating Aerosol – 500ml, Pack of 24 (Limited Launch Edition)"})]})})})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Crumb Menu"}),e.jsx("div",{className:"hint",children:"Intermediate segment can expose quick picks—handy for switching siblings."})]}),e.jsx("div",{className:"demoRow",children:e.jsx("nav",{"aria-label":"Breadcrumb",className:"menuCrumbs",children:e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx(c,{to:"/reports",children:"Reports"}),e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]}),e.jsxs("li",{className:"menu",children:[e.jsx("button",{className:"btnGhost tiny",type:"button","aria-haspopup":"menu","aria-expanded":"false",children:"Sales"}),e.jsxs("div",{className:"menuList",role:"menu",children:[e.jsx(c,{to:"/reports/sales",role:"menuitem",children:"Sales"}),e.jsx(c,{to:"/reports/inventory",role:"menuitem",children:"Inventory"}),e.jsx(c,{to:"/reports/finance",role:"menuitem",children:"Finance"}),e.jsx(c,{to:"/reports/procurement",role:"menuitem",children:"Procurement"})]}),e.jsx("span",{className:"sep","aria-hidden":"true",children:l.glyph})]}),e.jsx("li",{"aria-current":"page",children:"FY 2024-25 Q2"})]})})})]}),e.jsxs("section",{className:"card",id:"search-print-area",ref:w,children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Print Preview"}),e.jsx("div",{className:"hint",children:"This block is printer-focused using the shared print CSS. Try the Print button above."})]}),e.jsxs("div",{className:"printPreview",children:[e.jsx("div",{className:"title",children:"Report Path"}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Breadcrumb"}),e.jsx("span",{className:"v",children:t.map((s,a)=>e.jsxs(D.Fragment,{children:[e.jsx("span",{children:s.label}),a<t.length-1&&e.jsxs("span",{className:"sep","aria-hidden":"true",children:[" ",l.glyph," "]})]},s.href))})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:C(S)})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Structured Data (JSON-LD)"}),e.jsxs("div",{className:"hint",children:["Preview of ",e.jsx("code",{children:"BreadcrumbList"}),". Inject via ",e.jsx("code",{children:'<script type="application/ld+json">'})," in real apps."]})]}),e.jsx("pre",{className:"code",children:JSON.stringify(H,null,2)})]})]})]})};export{z as default};
