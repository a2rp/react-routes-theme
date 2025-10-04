import{d as x,r as h,j as e,N as v}from"./index-COs07DQL.js";import{b as L,o as F,p as I,q as E,F as R,r as z}from"./index-B8Ws-5C1.js";const l="var(--text, #f3f4f6)",N="var(--muted, #a0a0a7)",u="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--danger, #ef4444)",D="var(--radius, 16px)",b={Page:x.div`
        color: ${l};
        padding: 24px 0 64px;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${N};
            }
            .current {
                color: ${l};
            }
        }
    `,Header:x.header`
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
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${N};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${u};
            color: ${l};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${$};
            color: ${$};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${$} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnDisabled:hover {
            border-color: ${i};
            color: ${l};
            box-shadow: none;
        }
        .actions a {
            color: inherit;
        }
    `,Grid:x.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1000px) {
            grid-template-columns: 2fr 1fr;
        }
        .col.main.card {
            padding: 0;
            overflow: hidden;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }
        .card {
            background: ${u};
            border: 1px solid ${i};
            border-radius: ${D};
            box-shadow: var(--shadow);
        }
        .sticky {
            position: sticky;
            top: 16px;
            padding: 14px;
        }
    `,Toolbar:x.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${i};

        .search {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 8px;
            svg {
                opacity: 0.8;
            }
            input {
                width: 100%;
                background: ${u};
                color: ${l};
                border: 1px solid ${i};
                border-radius: 8px;
                padding: 10px 12px 10px 10px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input::placeholder {
                color: ${N};
            }
            input:focus {
                border-color: ${r};
                outline: none;
                box-shadow: 0 0 0 3px ${f};
            }
        }

        .filters {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            .seg {
                display: inline-flex;
                border: 1px solid ${i};
                border-radius: 10px;
                overflow: hidden;
                button {
                    background: ${u};
                    color: ${l};
                    padding: 8px 10px;
                    border: 0;
                    cursor: pointer;
                    font-weight: 600;
                }
                button + button {
                    border-left: 1px solid ${i};
                }
                .segActive {
                    color: ${r};
                    background: color-mix(in oklab, ${r} 12%, transparent);
                }
                button:focus-visible {
                    outline: none;
                    box-shadow: inset 0 0 0 3px ${f};
                }
            }
        }
    `,TableWrap:x.div`
        padding: 0;
        margin: 0;

        table.todos {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${u};
            color: ${r};
            text-align: left;
            border-bottom: 1px solid ${i};
            padding: 10px 12px;
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${i};
            vertical-align: top;
        }
        tbody tr {
            transition: background 0.2s;
            cursor: pointer;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }
        tbody tr.active {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .titleCell {
            font-weight: 600;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .tags .chip {
            border: 1px solid ${i};
            padding: 4px 8px;
            border-radius: 999px;
            margin-right: 6px;
            display: inline-block;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        .status.open {
            color: ${r};
        }
        .status.done {
            color: ${N};
        }

        .pri {
            border: 1px solid ${i};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .pri.high {
            box-shadow: inset 0 0 0 1px ${r};
        }
        .pri.medium {
            opacity: 0.9;
        }
        .pri.low {
            opacity: 0.8;
        }

        .empty {
            text-align: center;
            padding: 32px 16px;
            color: ${N};
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 6px;
            color: ${l};
        }
    `,Overlay:x.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:x.div`
        width: min(560px, 92vw);
        border-radius: ${D};
        border: 1px solid ${i};
        background: ${u};
        color: ${l};
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
            color: ${l};
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${i};
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${u};
            color: ${l};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `,Details:x.div``},m=(d,j)=>{const t=d instanceof Date?d:new Date(d),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=k=>String(k).padStart(2,"0"),s=`${p[t.getDay()]} ${o[t.getMonth()]} ${c(t.getDate())} ${t.getFullYear()}`;return j?`${s} ${c(t.getHours())}:${c(t.getMinutes())}:${c(t.getSeconds())}hrs`:s},A=[{id:"TD-1001",title:"Onboard supplier API mock",project:"Catalog",priority:"High",tags:["api","mock","repository"],assignee:"Aarav",status:"Open",due:"2025-10-10T16:00:00+05:30",createdAt:"2025-09-20T11:12:13+05:30",updatedAt:"2025-10-01T09:20:00+05:30",description:"Set up repository adapter for suppliers and wire sample fixtures. Ensure route loaders resolve promises for a realistic feel."},{id:"TD-1002",title:"Invoice detail printable layout",project:"Billing",priority:"Medium",tags:["print","layout"],assignee:"Meera",status:"Open",due:"2025-10-12T13:30:00+05:30",createdAt:"2025-09-18T08:40:00+05:30",updatedAt:"2025-10-02T17:05:00+05:30",description:"Use #search-print-area pattern and align totals block with tokens. Include watermark placeholder."},{id:"TD-1003",title:"Inventory batches table sticky header",project:"Inventory",priority:"Low",tags:["table","ux"],assignee:"Kabir",status:"Done",due:"2025-09-28T10:00:00+05:30",createdAt:"2025-09-10T12:10:00+05:30",updatedAt:"2025-09-28T10:15:10+05:30",description:"Keep top toolbar visible; hover highlights rows; subtle zebra on hover only."},{id:"TD-1004",title:"Patients detail: timeline component",project:"Healthcare",priority:"High",tags:["timeline","component"],assignee:"Sia",status:"Open",due:"2025-10-18T11:15:00+05:30",createdAt:"2025-09-25T12:00:00+05:30",updatedAt:"2025-10-03T19:22:00+05:30",description:"Compact timeline with dot markers; show created/updated in the specified date format."},{id:"TD-1005",title:"Nav: collapsible sections + search memory",project:"Core",priority:"Medium",tags:["nav","search"],assignee:"Ishaan",status:"Done",due:"2025-09-22T19:00:00+05:30",createdAt:"2025-09-05T14:20:00+05:30",updatedAt:"2025-09-22T19:10:00+05:30",description:"Section titles toggle with arrow; search forces open on matches; remembers state per session."},{id:"TD-1006",title:"Theme tokens preview cards",project:"Examples",priority:"Low",tags:["theme","tokens"],assignee:"Aisha",status:"Open",due:"2025-10-25T12:00:00+05:30",createdAt:"2025-09-29T09:00:00+05:30",updatedAt:"2025-10-01T18:40:00+05:30",description:"Grid of cards showing bg, text, border, accent with copy-ready CSS variables."},{id:"TD-1007",title:"Reports hub: static KPI tiles",project:"Reports",priority:"High",tags:["cards","kpi"],assignee:"Rhea",status:"Open",due:"2025-10-06T09:30:00+05:30",createdAt:"2025-09-21T16:00:00+05:30",updatedAt:"2025-10-02T08:10:00+05:30",description:"Non-interactive KPI set with icons; link to detailed pages via NavLink."},{id:"TD-1008",title:"Orders detail: address blocks",project:"Orders",priority:"Medium",tags:["address","ui"],assignee:"Dev",status:"Open",due:"2025-10-14T18:00:00+05:30",createdAt:"2025-09-15T10:00:00+05:30",updatedAt:"2025-10-01T10:05:00+05:30",description:"Two-column billing/shipping with labels and subtle dividers."},{id:"TD-1009",title:"Receipts list: compact rows + badge",project:"Billing",priority:"Low",tags:["list","badge"],assignee:"Indu",status:"Open",due:"2025-10-09T10:00:00+05:30",createdAt:"2025-09-26T17:00:00+05:30",updatedAt:"2025-10-03T11:35:00+05:30",description:"Row density targets 44px; amount and mode right-aligned; date left."},{id:"TD-1010",title:"Manufacturing BOM: read-only graph",project:"Manufacturing",priority:"Medium",tags:["graph","bom"],assignee:"Vihaan",status:"Open",due:"2025-10-30T12:30:00+05:30",createdAt:"2025-09-30T12:30:00+05:30",updatedAt:"2025-10-02T09:55:00+05:30",description:"Simple tree list with levels; expand/collapse sections only."}],H=({open:d,title:j,children:t,onClose:p})=>d?e.jsx(b.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(b.Modal,{className:"card",onMouseDown:o=>o.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:j})}),e.jsx("div",{className:"body",children:t}),e.jsx("footer",{children:e.jsxs("button",{className:"btnPrimary",onClick:p,children:[e.jsx(z,{})," Close"]})})]})}):null,q=()=>{const[d,j]=h.useState(""),[t,p]=h.useState("all"),[o,c]=h.useState("all"),[s,k]=h.useState(A[0]),[S,g]=h.useState(!1),w=h.useRef(null);h.useEffect(()=>{const a=requestAnimationFrame(()=>{var n,y;try{(n=w.current)==null||n.focus({preventScroll:!0})}catch{(y=w.current)==null||y.focus()}});return()=>cancelAnimationFrame(a)},[]);const T=h.useMemo(()=>{const a=d.trim().toLowerCase();return A.filter(n=>{const y=t==="all"||t==="open"&&n.status==="Open"||t==="done"&&n.status==="Done",P=o==="all"||o===n.priority.toLowerCase(),M=`${n.id} ${n.title} ${n.project} ${n.assignee} ${n.tags.join(" ")}`.toLowerCase(),O=!a||M.includes(a);return y&&P&&O})},[d,t,o]),C=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(b.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Devtools Todos"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(v,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Devtools Todos"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Updated: ",m(new Date,!0)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",title:"Back to Examples",children:e.jsx(v,{to:"/examples",children:"← Back"})}),e.jsx("button",{className:"btnPrimary",onClick:C,title:"Print selected",children:"Print"}),e.jsxs("button",{className:"btnPrimary",onClick:()=>g(!0),title:"Export JSON (demo only)",children:[e.jsx(L,{})," Export"]}),e.jsxs("button",{className:"btnDisabled",onClick:()=>g(!0),"aria-disabled":"true",title:"Add (disabled in demo)",children:[e.jsx(F,{})," Add"]}),e.jsxs("button",{className:"btnDisabled",onClick:()=>g(!0),"aria-disabled":"true",title:"Complete selected (disabled in demo)",children:[e.jsx(I,{})," Complete"]}),e.jsxs("button",{className:"btnDanger",onClick:()=>g(!0),title:"Delete (disabled in demo)",children:[e.jsx(E,{})," Delete"]})]})]}),e.jsxs(b.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs(b.Toolbar,{children:[e.jsxs("div",{className:"search",children:[e.jsx(R,{"aria-hidden":"true"}),e.jsx("input",{ref:w,value:d,onChange:a=>j(a.target.value),placeholder:"Search todos, tags, projects, assignees…","aria-label":"Search todos"})]}),e.jsxs("div",{className:"filters",role:"group","aria-label":"Filters",children:[e.jsxs("div",{className:"seg",children:[e.jsx("button",{className:t==="all"?"segActive":"",onClick:()=>p("all"),title:"Show all",children:"All"}),e.jsx("button",{className:t==="open"?"segActive":"",onClick:()=>p("open"),title:"Open only",children:"Open"}),e.jsx("button",{className:t==="done"?"segActive":"",onClick:()=>p("done"),title:"Completed only",children:"Done"})]}),e.jsxs("div",{className:"seg",children:[e.jsx("button",{className:o==="all"?"segActive":"",onClick:()=>c("all"),children:"All Pri"}),e.jsx("button",{className:o==="high"?"segActive":"",onClick:()=>c("high"),children:"High"}),e.jsx("button",{className:o==="medium"?"segActive":"",onClick:()=>c("medium"),children:"Medium"}),e.jsx("button",{className:o==="low"?"segActive":"",onClick:()=>c("low"),children:"Low"})]})]})]}),e.jsxs(b.TableWrap,{children:[e.jsxs("table",{className:"todos",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{children:"Assignee"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Updated"})]})}),e.jsx("tbody",{children:T.map(a=>e.jsxs("tr",{className:(s==null?void 0:s.id)===a.id?"active":"",onClick:()=>k(a),children:[e.jsx("td",{className:"mono",children:a.id}),e.jsx("td",{className:"titleCell",children:a.title}),e.jsx("td",{children:a.project}),e.jsx("td",{children:e.jsx("span",{className:`pri ${a.priority.toLowerCase()}`,children:a.priority})}),e.jsx("td",{className:"tags",children:a.tags.map(n=>e.jsx("span",{className:"chip",children:n},a.id+n))}),e.jsx("td",{children:a.assignee}),e.jsx("td",{children:e.jsx("span",{className:`status ${a.status==="Open"?"open":"done"}`,children:a.status})}),e.jsx("td",{className:"mono",children:m(a.due)}),e.jsx("td",{className:"mono",children:m(a.updatedAt,!0)})]},a.id))})]}),T.length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No todos found"}),e.jsx("div",{className:"sub",children:"Try clearing filters or search query."})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card sticky",children:[e.jsx("h3",{children:"Details"}),s?e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"ID"}),e.jsx("span",{className:"v mono",children:s.id})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Title"}),e.jsx("span",{className:"v",children:s.title})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Project"}),e.jsx("span",{className:"v",children:s.project})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Priority"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`pri ${s.priority.toLowerCase()}`,children:s.priority})})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`status ${s.status==="Open"?"open":"done"}`,children:s.status})})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Assignee"}),e.jsx("span",{className:"v",children:s.assignee})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Due"}),e.jsx("span",{className:"v mono",children:m(s.due)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v mono",children:m(s.createdAt,!0)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v mono",children:m(s.updatedAt,!0)})]}),e.jsx("div",{className:"desc",children:s.description}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},s.id+"_d_"+a))}),e.jsxs("div",{className:"links",children:[e.jsx(v,{to:"/examples",children:"Examples Overview"}),e.jsx(v,{to:"/reports",children:"Reports"}),e.jsxs(v,{to:"/billing",children:[" ","Invoices"]})]})]}):e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"Select any row"}),e.jsx("div",{className:"sub",children:"Details appear here for quick review and printing."})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",children:[e.jsx("h3",{children:"Print Summary"}),s?e.jsxs("div",{className:"printBlock",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Todo"}),e.jsx("span",{className:"v",children:s.title})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"ID"}),e.jsx("span",{className:"v mono",children:s.id})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Project"}),e.jsx("span",{className:"v",children:s.project})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Priority"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`pri ${s.priority.toLowerCase()}`,children:s.priority})})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`status ${s.status==="Open"?"open":"done"}`,children:s.status})})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Assignee"}),e.jsx("span",{className:"v",children:s.assignee})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Due"}),e.jsx("span",{className:"v mono",children:m(s.due)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v mono",children:m(s.updatedAt,!0)})]}),e.jsxs("div",{className:"line col",children:[e.jsx("span",{className:"k",children:"Description"}),e.jsx("span",{className:"v",children:s.description})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Tags"}),e.jsx("span",{className:"v",children:s.tags.join(", ")})]})]}):e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"Nothing to print"}),e.jsx("div",{className:"sub",children:"Pick a todo from the list."})]})]})]})]}),e.jsxs(H,{open:S,title:"Demo Mode",onClose:()=>g(!1),children:[e.jsx("p",{children:"This showcase is display-only. Actions like Add, Complete, Delete, and Export are disabled."}),e.jsx("p",{children:"Use the filters, select a row to preview, or print the summary for a realistic feel."})]})]})};export{q as default};
