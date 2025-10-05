import{d as v,r as m,a as ee,j as e,N as T}from"./index-BpMGcZ_2.js";const d="var(--text, #f3f4f6)",N="var(--muted, #a0a0a7)",p="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",u="var(--danger, #ef4444)",R="var(--radius, 16px)",D="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",j={Page:v.div`
        padding: 24px 0 64px;
        color: ${d};
        .muted {
            color: ${N};
        }
        code {
            background: color-mix(in oklab, ${r} 10%, transparent);
            border: 1px solid ${i};
            padding: 1px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
        }
    `,Header:v.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border-radius: ${R};
        border: 1px solid ${i};
        background: ${p};
        box-shadow: ${D};

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${N};
        }
        .breadcrumbs .current {
            color: ${d};
        }
        .meta {
            margin-top: 6px;
            color: ${N};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .right {
            display: flex;
            gap: 8px;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s ease;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnDanger {
            border-color: ${u};
            color: ${u};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${u} 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,Grid:v.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;
        align-items: start;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        > .card {
            border: 1px solid ${i};
            background: ${p};
            border-radius: ${R};
            padding: 16px 18px;
            box-shadow: ${D};
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }
        p {
            margin: 6px 0 12px;
        }
        .controls {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
            input {
                width: 100%;
                height: 40px;
                border: 1px solid ${i};
                background: ${p};
                color: ${d};
                border-radius: 8px;
                padding: 0 12px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input:focus {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${C};
                outline: none;
            }
            .btns {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .btnPrimary,
            .btnGhost,
            .btnDanger {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${i};
                background: ${p};
                color: ${d};
                font-weight: 600;
                transition: background 0.25s, color 0.25s, border-color 0.25s,
                    box-shadow 0.25s, transform 0.08s ease;
            }
            .btnPrimary:hover {
                border-color: ${r};
                color: ${r};
                box-shadow: 0 0 0 3px ${C};
            }
            .btnGhost:hover {
                border-color: ${r};
                color: ${r};
            }
            .btnDanger {
                border-color: ${u};
                color: ${u};
            }
            .btnDanger:hover {
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
                background: color-mix(in oklab, ${u} 10%, transparent);
            }
            .btnPrimary:active,
            .btnGhost:active,
            .btnDanger:active {
                transform: translateY(1px);
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${i};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${p};
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        .empty {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px 4px;
        }
        .empty .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${r};
            border: 1px solid ${i};
        }
        .empty .h {
            font-weight: 600;
        }
        .empty .p {
            color: ${N};
        }

        /* print box (aside) */
        #search-print-area .summary {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }
        #search-print-area .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        #search-print-area .k {
            color: ${N};
        }
        #search-print-area .v {
            color: ${d};
        }
        #search-print-area .printActions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
        }
        #search-print-area .btnPrimary,
        #search-print-area .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        #search-print-area .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        #search-print-area .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }

        .bullets {
            margin: 4px 0 0 16px;
            line-height: 1.8;
        }
    `,Kpis:v.div`
        margin-top: 12px;
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 920px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            border: 1px solid ${i};
            background: ${p};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${D};
            .label {
                color: ${N};
                font-size: 12px;
            }
            .value {
                margin-top: 2px;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }
    `,Toast:v.div`
        position: fixed;
        right: 16px;
        top: 16px;
        transform: translateY(-12px);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.25s, opacity 0.25s;
        background: ${p};
        color: ${d};
        border: 1px solid ${i};
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: ${D};
        &[data-show="true"] {
            transform: translateY(0);
            opacity: 1;
        }
    `,Overlay:v.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:v.div`
        width: min(520px, 92vw);
        border-radius: ${R};
        border: 1px solid ${i};
        background: ${p};
        color: ${d};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${i};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${d};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnDanger {
            border-color: ${u};
            color: ${u};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${u} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `},E=n=>String(n).padStart(2,"0"),se=n=>{const y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],$=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${y[n.getDay()]} ${$[n.getMonth()]} ${E(n.getDate())} ${n.getFullYear()}`},J=n=>`${se(n)} ${E(n.getHours())}:${E(n.getMinutes())}:${E(n.getSeconds())}hrs`,te=({open:n,title:y,message:$,onConfirm:M,onCancel:g,confirmText:k="Confirm"})=>n?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:g,children:e.jsxs(j.Modal,{className:"card",onMouseDown:c=>c.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:y})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:$})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:g,children:"Cancel"}),e.jsx("button",{className:"btnDanger",onClick:M,children:k})]})]})}):null,ae=()=>{const n=m.useMemo(()=>new Date,[]),{pathname:y}=ee(),$=m.useRef(null),M=m.useRef(null),[g,k]=m.useState(""),[c,F]=m.useState({sections:0,links:0,visible:0,hidden:0,openSecs:0,closedSecs:0}),[q,B]=m.useState([]),[W,L]=m.useState(!1),P=()=>document.getElementById("navlinksWrapper"),G=()=>document.querySelector(".searchWraper input"),O=s=>{const t=G();t&&(t.value=s,t.dispatchEvent(new Event("input",{bubbles:!0})))},z=()=>{const s=P();if(!s)return null;const t=Array.from(s.querySelectorAll("h3.title[data-sec]")),h=Array.from(s.querySelectorAll("a[href]")),S=t.map(a=>({key:a.getAttribute("data-sec"),collapsed:a.getAttribute("data-collapsed")==="true",hidden:a.getAttribute("data-hidden")==="true"})),A=h.map(a=>({text:(a.textContent||"").trim(),href:a.getAttribute("href"),title:a.getAttribute("title")||"",hidden:a.getAttribute("data-hidden")==="true"||a.getAttribute("data-collapsed")==="true",section:(()=>{let o=a.previousElementSibling;for(;o&&o.tagName!=="H3";)o=o.previousElementSibling;return(o==null?void 0:o.getAttribute("data-sec"))||""})(),active:a.classList.contains("active")}));return{sectionMap:S,linkMap:A}},w=()=>{const s=z();if(!s)return;const t=s.linkMap.filter(l=>!l.hidden).length,h=s.linkMap.length-t,S=s.sectionMap.filter(l=>!l.collapsed&&!l.hidden).length,A=s.sectionMap.filter(l=>l.collapsed&&!l.hidden).length;F({sections:s.sectionMap.length,links:s.linkMap.length,visible:t,hidden:h,openSecs:S,closedSecs:A});const a=g.trim().toLowerCase();let o=s.linkMap.filter(l=>!l.hidden);if(a){const l=a.split(/\s+/).filter(Boolean);o=o.map(x=>{const f=(x.text+" "+x.title+" "+x.href).toLowerCase(),b=l.reduce((Z,_)=>Z+(f.includes(_)?1:0),0);return{...x,score:b}}).filter(x=>x.score>0).sort((x,f)=>f.score-x.score||x.text.localeCompare(f.text))}B(o.slice(0,30))};m.useEffect(()=>{const s=G();s&&k(s.value||""),w()},[]),m.useEffect(()=>{w()},[y,g]);const Y=s=>{const t=s.target.value;k(t),O(t)},U=()=>{const s=P();if(!s)return;Array.from(s.querySelectorAll("h3.title[data-sec]")).forEach(h=>{h.getAttribute("data-collapsed")==="true"&&h.click()}),w()},I=()=>{const s=P();if(!s)return;Array.from(s.querySelectorAll("h3.title[data-sec]")).forEach(h=>{h.getAttribute("data-collapsed")!=="true"&&h.click()}),w()},K=()=>{O(""),k(""),L(!1),w()},Q=async()=>{try{await navigator.clipboard.writeText(window.location.href);const s=document.getElementById("copyToast");s&&(s.textContent="Link copied",s.setAttribute("data-show","true"),setTimeout(()=>s&&s.setAttribute("data-show","false"),1500))}catch{}},V=()=>{if(!z())return;const t=P(),S=Array.from(t.querySelectorAll("h3.title[data-sec]")).map(l=>{const f={section:l.getAttribute("data-sec"),items:[]};let b=l.nextElementSibling;for(;b&&b.tagName!=="H3";)b.tagName==="A"&&f.items.push({text:(b.textContent||"").trim(),href:b.getAttribute("href"),title:b.getAttribute("title")||""}),b=b.nextElementSibling;return f}),A=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),a=URL.createObjectURL(A),o=document.createElement("a");o.href=a,o.download="nav-map.json",document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)},X=()=>{var t;const s=G();s&&(s.focus(),(t=s.select)==null||t.call(s))},H=()=>{M.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Sidebar Nav Search"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(T,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Nav Search"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Generated: ",J(n)]})})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:Q,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:H,title:"Print summary",children:"Print"})]})]}),e.jsx(j.Toast,{id:"copyToast","aria-live":"polite",children:"Link copied"}),e.jsxs(j.Grid,{children:[e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Live Controls"}),e.jsx("p",{className:"muted",children:"This page talks to the real sidebar: type here to filter, open/close sections, export a JSON nav map, or print a summary."}),e.jsxs("div",{className:"controls",children:[e.jsx("input",{ref:$,value:g,onChange:Y,placeholder:"Type to filter sidebar (Ctrl + K focuses the sidebar box)","aria-label":"Filter sidebar"}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"btnPrimary",onClick:X,title:"Focus sidebar search",children:"Focus Sidebar"}),e.jsx("button",{className:"btnPrimary",onClick:U,title:"Expand all sections",children:"Open All"}),e.jsx("button",{className:"btnGhost",onClick:I,title:"Collapse all sections",children:"Close All"}),e.jsx("button",{className:"btnGhost",onClick:()=>L(!0),title:"Clear current query",children:"Reset"}),e.jsx("button",{className:"btnPrimary",onClick:V,title:"Download a JSON of the sidebar",children:"Export Nav JSON"})]})]}),e.jsxs(j.Kpis,{children:[e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Sections"}),e.jsx("div",{className:"value",children:c.sections})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Links"}),e.jsx("div",{className:"value",children:c.links})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Visible"}),e.jsx("div",{className:"value",children:c.visible})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Hidden"}),e.jsx("div",{className:"value",children:c.hidden})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Open Sections"}),e.jsx("div",{className:"value",children:c.openSecs})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Closed Sections"}),e.jsx("div",{className:"value",children:c.closedSecs})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Visible Matches"}),e.jsx("p",{className:"muted",children:"Top results from the sidebar after your query and section visibility."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"36px"},children:"#"}),e.jsx("th",{children:"Label"}),e.jsx("th",{children:"Section"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Path"}),e.jsx("th",{style:{width:"80px"},children:"Active"})]})}),e.jsx("tbody",{children:q.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{className:"h",children:"No visible matches"}),e.jsx("div",{className:"p",children:"Try clearing the query or opening more sections."})]})]})})}):q.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{children:t+1}),e.jsx("td",{children:s.text}),e.jsx("td",{className:"muted",children:s.section}),e.jsx("td",{className:"muted",children:s.title}),e.jsx("td",{children:e.jsx(T,{to:s.href,children:s.href})}),e.jsx("td",{children:s.active?"Yes":"—"})]},s.href+t))})]})})]}),e.jsxs("aside",{className:"card",id:"search-print-area",ref:M,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:J(n)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Current Path"}),e.jsx("span",{className:"v",children:y})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Query"}),e.jsx("span",{className:"v",children:g||"(none)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Sections"}),e.jsx("span",{className:"v",children:c.sections})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Links"}),e.jsx("span",{className:"v",children:c.links})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Visible"}),e.jsx("span",{className:"v",children:c.visible})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Hidden"}),e.jsx("span",{className:"v",children:c.hidden})]})]}),e.jsxs("div",{className:"printActions",children:[e.jsx("button",{className:"btnPrimary",onClick:H,children:"Print This"}),e.jsx(T,{className:"btnGhost",to:"/examples",children:"Back to Examples"})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"How it Works"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Sidebar headers are ",e.jsx("code",{children:"h3.title[data-sec]"}),". Each toggles collapse on click/keyboard."]}),e.jsxs("li",{children:["Links carry ",e.jsx("code",{children:"data-hidden"})," (search filter) and ",e.jsx("code",{children:"data-collapsed"})," (section collapse)."]}),e.jsx("li",{children:"The search box sets these attributes and sections auto-open when a match exists."}),e.jsx("li",{children:"This page mirrors that input, so you can demo filtering, open/close, and export the nav structure."})]})]})]}),e.jsx(te,{open:W,title:"Clear the query?",message:"This will reset the sidebar filter and show all visible links.",confirmText:"Clear",onConfirm:K,onCancel:()=>L(!1)})]})};export{ae as default};
