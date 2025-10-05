import{d as P,r as a,j as e}from"./index-P_7RwasD.js";const j="var(--text, #f3f4f6)",y="var(--muted, #a0a0a7)",x="var(--card, #111318)",n="var(--border, #23262d)",d="var(--accent, #5aa9ff)",B="var(--accent-soft, rgba(90,169,255,0.15))",O="var(--radius, 16px)",C={Page:P.div`
        display: grid;
        gap: 16px;

        .head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 18px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .muted {
            color: ${y};
        }

        .ctaRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${x};
            color: ${j};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${B};
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }

        .banner {
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid ${n};
            background: color-mix(in oklab, ${d} 10%, transparent);
        }

        .grid {
            display: grid;
            grid-template-columns: 1.5fr 2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1180px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .panel,
        .preview,
        .snapshot {
            padding: 16px;
        }

        .panel h3,
        .preview h3,
        .snapshot h3 {
            margin-bottom: 12px;
        }

        .controls {
            display: grid;
            gap: 14px;
        }
        .row {
            display: grid;
            gap: 10px;
        }
        .row.two {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 640px) {
            .row.two {
                grid-template-columns: 1fr;
            }
        }

        label {
            font-size: 12px;
            color: ${y};
        }

        .seg {
            display: inline-flex;
            border: 1px solid ${n};
            border-radius: 999px;
            background: ${x};
        }
        .segBtn {
            padding: 6px 12px;
            border: 0;
            background: transparent;
            color: ${j};
            border-radius: 999px;
        }
        .segBtn:hover {
            color: ${d};
        }
        .segBtn.active {
            color: ${d};
            box-shadow: inset 0 0 0 1px ${d};
            background: color-mix(in oklab, ${d} 10%, transparent);
        }

        .swatches {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .swatch {
            width: 28px;
            height: 28px;
            border-radius: 999px;
            border: 2px solid transparent;
            cursor: pointer;
        }
        .swatch.sel {
            outline: none;
            border-color: ${d};
        }
        .customPick {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .customPick input[type="color"] {
            width: 32px;
            height: 32px;
            padding: 0;
            border: 1px solid ${n};
            border-radius: 8px;
            background: ${x};
        }
        .customPick span {
            font-family: monospace;
            padding: 2px 6px;
            border: 1px solid ${n};
            border-radius: 6px;
        }

        input[type="range"] {
            accent-color: ${d};
        }

        .preview .ui {
            display: grid;
            gap: 14px;
        }
        .preview .row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .preview .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 640px) {
            .preview .cards {
                grid-template-columns: 1fr;
            }
        }
        .mini {
            padding: 12px;
        }
        .mini .k {
            font-size: 12px;
            color: ${y};
            margin-bottom: 6px;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${n};
        }
        th {
            text-align: left;
            color: ${d};
            background: ${x};
        }

        .snapshot .rows {
            display: grid;
            gap: 8px;
            margin-bottom: 10px;
        }
        .snapshot .k {
            color: ${y};
            width: 140px;
            display: inline-block;
        }
        .snapshot .v {
            color: ${j};
        }
        .snapshot .code {
            border: 1px solid ${n};
            border-radius: 10px;
            background: ${x};
            overflow: auto;
        }
        .snapshot pre {
            margin: 0;
            padding: 12px;
            font-size: 12px;
            line-height: 1.6;
        }

        .shareLine {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        .shareLine input {
            flex: 1;
            background: ${x};
            color: ${j};
            border: 1px solid ${n};
            border-radius: 8px;
            padding: 8px 10px;
        }
    `,ModalOverlay:P.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 60;
    `,Modal:P.div`
        width: min(760px, 92vw);
        border: 1px solid ${n};
        border-radius: ${O};
        background: ${x};
        color: ${j};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header,
        footer {
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
        }
        footer {
            border-top: 1px solid ${n};
            border-bottom: 0;
            display: flex;
            justify-content: flex-end;
        }
        .body {
            padding: 14px;
            display: grid;
            gap: 10px;
        }
        .muted {
            color: ${y};
        }

        .code {
            border: 1px solid ${n};
            border-radius: 10px;
            background: ${x};
            padding: 10px;
            overflow: auto;
        }
        pre {
            margin: 0;
            font-size: 12px;
            line-height: 1.6;
        }
    `},A=s=>getComputedStyle(s||document.documentElement),p=s=>(s||"").toString().trim(),R=(s,c=.15)=>{const o=s.replace("#",""),h=parseInt(o.length===3?o.split("").map(b=>b+b).join(""):o,16),r=h>>16&255,u=h>>8&255,l=h&255;return`rgba(${r}, ${u}, ${l}, ${c})`},w=(s,c,o)=>Math.min(Math.max(s,c),o),W=()=>{const s=document.documentElement,c=a.useMemo(()=>{const t=A();return{theme:s.getAttribute("data-theme")||"",accent:p(t.getPropertyValue("--accent"))||"#5aa9ff",radius:p(t.getPropertyValue("--radius"))||"16px",shadow:p(t.getPropertyValue("--shadow")),fontSize:p(A(document.body).fontSize)||"13px"}},[]),[o,h]=a.useState(c.theme),[r,u]=a.useState(c.accent),[l,b]=a.useState(parseInt(c.radius,10)||16),[g,k]=a.useState(parseInt(c.fontSize,10)||13),[v,m]=a.useState(""),[z,$]=a.useState(!1),E=a.useRef(null);a.useEffect(()=>{o?s.setAttribute("data-theme",o):s.removeAttribute("data-theme")},[o]),a.useEffect(()=>{s.style.setProperty("--accent",r),s.style.setProperty("--accent-soft",R(r,.12))},[r]),a.useEffect(()=>{s.style.setProperty("--radius",`${w(l,6,28)}px`)},[l]),a.useEffect(()=>{document.body.style.fontSize=`${w(g,11,18)}px`},[g]),a.useEffect(()=>{if(!v)return;const t=setTimeout(()=>m(""),3e3);return()=>clearTimeout(t)},[v]);const I=()=>{s.style.removeProperty("--accent"),s.style.removeProperty("--accent-soft"),s.style.removeProperty("--radius"),document.body.style.removeProperty("font-size"),h(""),u(c.accent),b(parseInt(c.radius,10)||16),k(parseInt(c.fontSize,10)||13),m("Reverted to theme defaults")},U=()=>{const t=new URL(window.location.href),i=t.searchParams.get("theme"),f=t.searchParams.get("accent"),N=t.searchParams.get("radius"),S=t.searchParams.get("font");(i==="light"||i==="dark"||i==="")&&h(i||""),f&&/^#?[0-9a-f]{3,8}$/i.test(f)&&u(f.startsWith("#")?f:"#"+f),N&&!isNaN(+N)&&b(w(parseInt(N,10),6,28)),S&&!isNaN(+S)&&k(w(parseInt(S,10),11,18)),m("Applied theme from URL parameters")},L=()=>{const t=new URL(window.location.href),i=t.searchParams;return i.set("theme",o||""),i.set("accent",r.replace("#","")),i.set("radius",String(l)),i.set("font",String(g)),t.search=i.toString(),t.toString()},T=async()=>{const t=L();try{await navigator.clipboard.writeText(t),m("Share URL copied")}catch{m("Copy failed — select and copy manually")}},D=async()=>{const t=A(),i=`:root {
  --bg: ${p(t.getPropertyValue("--bg"))};
  --text: ${p(t.getPropertyValue("--text"))};
  --muted: ${p(t.getPropertyValue("--muted"))};
  --card: ${p(t.getPropertyValue("--card"))};
  --border: ${p(t.getPropertyValue("--border"))};
  --accent: ${r};
  --accent-soft: ${R(r,.12)};
  --shadow: ${p(t.getPropertyValue("--shadow"))};
  --radius: ${l}px;
}`;try{await navigator.clipboard.writeText(i),m("Current CSS variables copied")}catch{m("Copy failed — select and copy manually")}},V=()=>{E.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},G=[{key:"",label:"Auto (OS)"},{key:"light",label:"Light"},{key:"dark",label:"Dark"}],M=["#5aa9ff","#2f74ff","#7da3ff","#9bb7ff","#5f7eff","#8aa7ff"];return e.jsxs(C.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("header",{className:"card head",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Theme — Appearance & Persistence (Demo)"}),e.jsx("p",{className:"muted",children:"Tweak live tokens below. Nothing is stored. Use the shareable URL or copy the CSS variables for your app."})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{className:"btnGhost",onClick:I,children:"Reset"}),e.jsx("button",{className:"btnPrimary",onClick:D,title:"Copy current CSS variables",children:"Copy CSS"}),e.jsx("button",{className:"btnPrimary",onClick:T,title:"Copy link with current theme params",children:"Copy Share URL"}),e.jsx("button",{className:"btnGhost",onClick:U,title:"Apply ?theme=&accent=&radius=&font=",children:"Apply From URL"}),e.jsx("button",{className:"btnDanger",onClick:()=>$(!0),children:"Persistence Snippet"}),e.jsx("button",{className:"btnGhost",onClick:V,children:"Print Summary"})]})]}),v?e.jsx("div",{className:"banner card",children:v}):null,e.jsxs("div",{className:"grid",children:[e.jsxs("section",{className:"card panel",children:[e.jsx("h3",{children:"Controls"}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Theme"}),e.jsx("div",{className:"seg",children:G.map(t=>e.jsx("button",{className:`segBtn ${o===t.key?"active":""}`,onClick:()=>h(t.key),children:t.label},t.key||"auto"))})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{children:"Accent"}),e.jsxs("div",{className:"swatches",children:[M.map(t=>e.jsx("button",{className:`swatch ${t===r?"sel":""}`,style:{background:t},onClick:()=>u(t),title:t,"aria-label":`Accent ${t}`},t)),e.jsxs("div",{className:"customPick",children:[e.jsx("input",{type:"color",value:r,onChange:t=>u(t.target.value),"aria-label":"Custom accent"}),e.jsx("span",{children:r})]})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{children:[e.jsxs("label",{children:["Corner Radius: ",l,"px"]}),e.jsx("input",{type:"range",min:"6",max:"28",value:l,onChange:t=>b(parseInt(t.target.value,10))})]}),e.jsxs("div",{children:[e.jsxs("label",{children:["Base Font Size: ",g,"px"]}),e.jsx("input",{type:"range",min:"11",max:"18",value:g,onChange:t=>k(parseInt(t.target.value,10))})]})]})]})]}),e.jsxs("section",{className:"card preview",children:[e.jsx("h3",{children:"Preview"}),e.jsxs("div",{className:"ui",children:[e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"btnPrimary",children:"Primary"}),e.jsx("button",{className:"btnGhost",children:"Ghost"}),e.jsx("button",{className:"btnDanger",children:"Danger"}),e.jsx("button",{className:"btnPrimary",disabled:!0,children:"Disabled"})]}),e.jsxs("div",{className:"row",children:[e.jsx("input",{placeholder:"Input"}),e.jsxs("select",{children:[e.jsx("option",{children:"Option A"}),e.jsx("option",{children:"Option B"})]}),e.jsx("input",{type:"date"})]}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"mini card",children:[e.jsx("div",{className:"k",children:"Text"}),e.jsx("div",{className:"v",children:"A quick brown fox jumps over the lazy dog."})]}),e.jsxs("div",{className:"mini card",children:[e.jsx("div",{className:"k",children:"Muted"}),e.jsx("div",{className:"v muted",children:"Subtle description and explanatory copy styles live here."})]}),e.jsxs("div",{className:"mini card",children:[e.jsx("div",{className:"k",children:"Link"}),e.jsx("div",{className:"v",children:e.jsx("a",{href:"#",children:"Explore components"})})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"--bg"}),e.jsx("td",{children:"Canvas"}),e.jsx("td",{children:"App background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--card"}),e.jsx("td",{children:"Panel surface"}),e.jsx("td",{children:"Cards & inputs"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--accent"}),e.jsx("td",{children:r}),e.jsx("td",{children:"Highlights"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--radius"}),e.jsxs("td",{children:[l,"px"]}),e.jsx("td",{children:"Corners"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"--shadow"}),e.jsx("td",{children:"Soft"}),e.jsx("td",{children:"Elevation"})]})]})]})})]})]}),e.jsxs("aside",{className:"card snapshot",id:"search-print-area",ref:E,children:[e.jsx("h3",{children:"Theme Summary"}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Theme"}),e.jsx("span",{className:"v",children:o||"Auto (OS)"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Accent"}),e.jsx("span",{className:"v",children:r})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Radius"}),e.jsxs("span",{className:"v",children:[l,"px"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Base Font"}),e.jsxs("span",{className:"v",children:[g,"px"]})]})]}),e.jsx("div",{className:"code",children:e.jsx("pre",{children:`:root {
  --accent: ${r};
  --accent-soft: ${R(r,.12)};
  --radius: ${l}px;
}`})}),e.jsxs("div",{className:"shareLine",children:[e.jsx("input",{value:L(),readOnly:!0}),e.jsx("button",{className:"btnGhost",onClick:T,children:"Copy Link"})]})]})]}),z&&e.jsx(C.ModalOverlay,{onMouseDown:()=>$(!1),children:e.jsxs(C.Modal,{onMouseDown:t=>t.stopPropagation(),className:"card",children:[e.jsx("header",{children:e.jsx("h4",{children:"Persistence Snippet"})}),e.jsxs("div",{className:"body",children:[e.jsx("p",{className:"muted",children:"This example doesn’t store anything. If you want to persist in your app, drop this in your root file:"}),e.jsx("pre",{className:"code",children:`// Read once on startup
const saved = localStorage.getItem("theme");
if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
else if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
else document.documentElement.removeAttribute("data-theme");

// Toggle sample
function setThemePref(next) {
  if (!next) { localStorage.removeItem("theme"); document.documentElement.removeAttribute("data-theme"); return; }
  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-theme", next);
}`}),e.jsxs("p",{className:"muted",children:["You can also persist custom tokens (accent, radius) by saving CSS variables into localStorage and replaying via ",e.jsx("code",{children:"documentElement.style.setProperty"})," on load."]})]}),e.jsx("footer",{children:e.jsx("button",{className:"btnGhost",onClick:()=>$(!1),children:"Close"})})]})})]})};export{W as default};
