import{d as f,r as o,j as e,N as I}from"./index-CvWKwy17.js";const d="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",m="var(--card, #111318)",l="var(--border, #23262d)",r="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",R="var(--radius, 16px)",v={Page:f.div`
        padding: 24px 0 64px;
        color: ${d};
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
    `,Header:f.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .lhs h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${c};
        }
        .breadcrumbs .current {
            color: ${d};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${c};
            font-size: 12px;
        }

        .rhs {
            display: flex;
            gap: 18px;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .seg {
            display: grid;
            gap: 8px;
        }
        .label {
            color: ${c};
            font-size: 12px;
        }
        .btns {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${m};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.04s;
        }
        .btnPrimary {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        .hint {
            font-size: 12px;
            color: ${c};
        }
    `,Grid:f.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 1.5fr 1fr;
        }

        .card {
            background: ${m};
            border: 1px solid ${l};
            border-radius: ${R};
            padding: 16px 18px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* TOKENS */
        .tokens header {
            margin-bottom: 12px;
        }
        .tokens .muted {
            color: ${c};
        }
        .tokens .tableWrap {
            overflow: auto;
            border-radius: 10px;
            border: 1px solid ${l};
        }
        .tokens table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .tokens thead th {
            text-align: left;
            padding: 10px;
            background: ${m};
            position: sticky;
            top: 0;
            border-bottom: 1px solid ${l};
            color: ${r};
        }
        .tokens tbody td {
            padding: 10px;
            border-bottom: 1px solid ${l};
            vertical-align: middle;
        }
        .tokens .valueCell code {
            color: ${d};
        }
        .tokens .swatch {
            display: inline-block;
            width: 28px;
            height: 18px;
            border: 1px solid ${l};
            border-radius: 6px;
        }
        .tokens .swatch.none {
            background: transparent;
        }

        .tokens .foot {
            margin-top: 10px;
            color: ${c};
            font-size: 12px;
        }

        /* GALLERY */
        .gallery header {
            margin-bottom: 12px;
        }
        .gallery .muted {
            color: ${c};
        }
        .gallery .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .gallery .row {
                grid-template-columns: 1fr 1fr;
            }
        }
        .gallery .label {
            color: ${c};
            margin-bottom: 8px;
        }

        .btnPrimary,
        .btnGhost,
        .btnOutline,
        .btnSubtle,
        .btnIcon {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${m};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.04s;
        }
        .btnPrimary {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnOutline {
            background: transparent;
        }
        .btnOutline:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnSubtle {
            opacity: 0.9;
        }
        .btnIcon {
            width: 40px;
            padding: 0;
            text-align: center;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnOutline:active,
        .btnSubtle:active,
        .btnIcon:active {
            transform: translateY(1px);
        }

        .inputs {
            display: grid;
            gap: 10px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .tableWrap.small table td,
        .tableWrap.small table th {
            white-space: nowrap;
        }
        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${l};
        }
        .badge.ok {
            border-color: ${r};
            color: ${r};
        }
        .badge.warn {
            border-color: #c5a100;
            color: #c5a100;
        }
        .badge.off {
            border-color: #7a7a7a;
            color: #7a7a7a;
        }

        .codeWrap {
            border: 1px solid ${l};
            background: #0b0e13;
            color: ${d};
            padding: 12px;
            border-radius: 10px;
            overflow: auto;
        }

        /* PLAYGROUND */
        .playground header {
            margin-bottom: 10px;
        }
        .playground .muted {
            color: ${c};
        }
        .playground .controls {
            display: grid;
            gap: 16px;
            grid-template-columns: 220px 1fr;
            align-items: start;
        }
        @media (max-width: 720px) {
            .playground .controls {
                grid-template-columns: 1fr;
            }
        }
        .playground .pick label {
            display: block;
            font-size: 12px;
            color: ${c};
            margin-bottom: 6px;
        }
        .playground .examples {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
        .playground .chip {
            border: 1px solid ${l};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${r} 8%, transparent);
            color: ${d};
            font-weight: 600;
        }
        .playground .chip.soft {
            background: ${y};
            border-color: color-mix(in oklab, ${r} 40%, ${l});
        }

        .playground .inner {
            margin-top: 16px;
            border-radius: 12px;
            border: 1px solid ${l};
            background: ${m};
        }
        .playground .inner h4 {
            margin-bottom: 8px;
        }
        .playground .miniGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            margin-top: 10px;
        }
        .playground .stat .k {
            color: ${c};
            font-size: 12px;
        }
        .playground .stat .v {
            color: ${d};
        }
    `},u=a=>String(a).padStart(2,"0"),C=a=>{const n=a instanceof Date?a:new Date(a),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s[n.getDay()]} ${j[n.getMonth()]} ${u(n.getDate())} ${n.getFullYear()}`},h=a=>{const n=a instanceof Date?a:new Date(a);return`${C(n)} ${u(n.getHours())}:${u(n.getMinutes())}:${u(n.getSeconds())}hrs`},J="2025-10-05T20:32:19.337Z",z="2025-10-06T02:02:13+05:30",O=["--bg","--text","--muted","--card","--border","--accent","--accent-soft","--shadow","--picker-filter"],S=()=>{const a=getComputedStyle(document.documentElement),n=O.map(s=>[s,a.getPropertyValue(s).trim()]);return Object.fromEntries(n)},U=()=>{const[a,n]=o.useState(()=>document.documentElement.hasAttribute("data-theme")?document.documentElement.getAttribute("data-theme"):"system"),[s,j]=o.useState(()=>typeof window<"u"?S():{}),[p,T]=o.useState(()=>s["--accent"]||"#5aa9ff"),[N,b]=o.useState(""),[w,$]=o.useState(""),k=o.useRef(null),P=o.useRef(null);o.useEffect(()=>{const t=requestAnimationFrame(()=>j(S()));return()=>cancelAnimationFrame(t)},[a,p]);const g=t=>{n(t);const i=document.documentElement;t==="system"?i.removeAttribute("data-theme"):i.setAttribute("data-theme",t)};o.useEffect(()=>{const t=k.current;t&&(t.style.setProperty("--accent",p),t.style.setProperty("--accent-soft",`color-mix(in oklab, ${p} 15%, transparent)`))},[p]);const D=async()=>{try{await navigator.clipboard.writeText(JSON.stringify(s,null,2)),b("Copied!"),setTimeout(()=>b(""),1500)}catch{b("Unable to copy"),setTimeout(()=>b(""),1500)}},G=()=>{const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),x=document.createElement("a");x.download="theme-tokens.json",x.href=i,x.click(),URL.revokeObjectURL(i),$("Downloaded"),setTimeout(()=>$(""),1500)},A=o.useMemo(()=>new Date,[]),E=o.useMemo(()=>new Date(J),[]),M=o.useMemo(()=>new Date(z),[]),L=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(v.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(v.Header,{className:"card",children:[e.jsxs("div",{className:"lhs",children:[e.jsx("h1",{children:"Theme Tokens Preview"}),e.jsxs("nav",{className:"breadcrumbs",children:[e.jsx(I,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Theme"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",h(E)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last Commit: ",h(M)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Opened: ",C(A)]})]})]}),e.jsxs("div",{className:"rhs",children:[e.jsxs("div",{className:"seg",children:[e.jsx("span",{className:"label",children:"Theme"}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:a==="system"?"btnPrimary":"btnGhost",onClick:()=>g("system"),children:"System"}),e.jsx("button",{className:a==="light"?"btnPrimary":"btnGhost",onClick:()=>g("light"),children:"Light"}),e.jsx("button",{className:a==="dark"?"btnPrimary":"btnGhost",onClick:()=>g("dark"),children:"Dark"})]})]}),e.jsxs("div",{className:"seg",children:[e.jsx("span",{className:"label",children:"Tokens"}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"btnGhost",onClick:D,title:"Copy CSS variables as JSON",children:"Copy"}),e.jsx("button",{className:"btnGhost",onClick:G,title:"Download JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:L,title:"Print token sheet",children:"Print"})]}),(N||w)&&e.jsx("div",{className:"hint",children:N||w})]})]})]}),e.jsxs(v.Grid,{children:[e.jsxs("section",{className:"card tokens",id:"search-print-area",ref:P,children:[e.jsxs("header",{children:[e.jsx("h3",{children:"CSS Variables"}),e.jsxs("p",{className:"muted",children:["Live values from ",e.jsx("code",{children:":root"}),". Change theme to see them update."]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variable"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Sample"})]})}),e.jsx("tbody",{children:O.map(t=>{const i=s[t]||"",x=/(^#|rgb|hsl)/i.test(i);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:t})}),e.jsx("td",{className:"valueCell",children:e.jsx("code",{children:i})}),e.jsx("td",{children:x?e.jsx("span",{className:"swatch",style:{background:i}}):e.jsx("span",{className:"swatch none",children:"—"})})]},t)})})]})}),e.jsx("footer",{className:"foot",children:e.jsxs("span",{children:["Snapshot: ",h(new Date)]})})]}),e.jsxs("section",{className:"card gallery",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Components Gallery"}),e.jsx("p",{className:"muted",children:"Buttons, inputs, table, and a code block using your theme variables."})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Buttons"}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"btnPrimary",children:"Primary"}),e.jsx("button",{className:"btnGhost",children:"Ghost"}),e.jsx("button",{className:"btnOutline",children:"Outline"}),e.jsx("button",{className:"btnSubtle",children:"Subtle"}),e.jsx("button",{className:"btnIcon","aria-label":"Icon button",children:"★"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Inputs"}),e.jsxs("div",{className:"inputs",children:[e.jsx("input",{placeholder:"Text input"}),e.jsx("input",{type:"date"}),e.jsxs("select",{defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Choose"}),e.jsx("option",{children:"Option A"}),e.jsx("option",{children:"Option B"})]}),e.jsx("textarea",{rows:3,placeholder:"Textarea"})]})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Table"}),e.jsx("div",{className:"tableWrap small",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Updated"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"ITM-001"}),e.jsx("td",{children:"Bluewave Desk"}),e.jsx("td",{children:e.jsx("span",{className:"badge ok",children:"Active"})}),e.jsx("td",{children:h(new Date)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ITM-002"}),e.jsx("td",{children:"Orbit Chair"}),e.jsx("td",{children:e.jsx("span",{className:"badge warn",children:"Hold"})}),e.jsx("td",{children:h(new Date)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ITM-003"}),e.jsx("td",{children:"Neptune Lamp"}),e.jsx("td",{children:e.jsx("span",{className:"badge off",children:"Archived"})}),e.jsx("td",{children:h(new Date)})]})]})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Code"}),e.jsx("pre",{className:"codeWrap",children:`:root {
  --bg: ${s["--bg"]||""};
  --text: ${s["--text"]||""};
  --muted: ${s["--muted"]||""};
  --card: ${s["--card"]||""};
  --border: ${s["--border"]||""};
  --accent: ${s["--accent"]||""};
  --accent-soft: ${s["--accent-soft"]||""};
  --shadow: ${s["--shadow"]||""};
}`})]})]})]}),e.jsxs("section",{className:"card playground",ref:k,children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Accent Playground (Scoped)"}),e.jsxs("p",{className:"muted",children:["This panel overrides ",e.jsx("code",{children:"--accent"})," locally to demonstrate easy theming."]})]}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"pick",children:[e.jsx("label",{children:"Accent"}),e.jsx("input",{type:"color",value:p,onChange:t=>T(t.target.value),"aria-label":"Pick accent color"})]}),e.jsxs("div",{className:"examples",children:[e.jsx("button",{className:"btnPrimary",children:"Primary"}),e.jsx("button",{className:"btnGhost",children:"Ghost"}),e.jsx("button",{className:"btnOutline",children:"Outline"}),e.jsx("span",{className:"chip",children:"Accent Chip"}),e.jsx("span",{className:"chip soft",children:"Soft Chip"})]})]}),e.jsxs("div",{className:"card inner",children:[e.jsx("h4",{children:"Preview Card"}),e.jsxs("p",{children:["Buttons, chips, focus rings and borders in this area use the locally-scoped ",e.jsx("code",{children:"--accent"}),". Outside this card, the global theme remains unchanged."]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"k",children:"Accent"}),e.jsx("div",{className:"v",children:e.jsx("code",{children:p})})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"k",children:"Accent Soft"}),e.jsx("div",{className:"v",children:e.jsxs("code",{children:["color-mix(in oklab, ",p," 15%, transparent)"]})})]})]})]})]})]})]})};export{U as default};
