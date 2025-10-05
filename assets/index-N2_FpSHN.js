import{d as c,a as B,r as g,j as e,N as p,L as a}from"./index-BM8H5dnP.js";const u="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",x="var(--card, #111318)",r="var(--border, #23262d)",s="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",j="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",o={Wrap:c.div`
        color: ${u};
        display: flex;
        flex-direction: column;
        gap: 16px;

        .row-focus {
            outline: 2px dashed ${s};
            outline-offset: 2px;
            border-radius: 6px;
        }
    `,Breadcrumbs:c.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: ${d};
        a {
            color: ${d};
            text-decoration: none;
        }
        a:hover {
            color: ${s};
        }
        strong {
            color: ${u};
        }
    `,HeaderBar:c.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        background: ${x};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${j};
        .title h1 {
            font-size: 20px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .title p {
            color: ${d};
        }
        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions a,
        .actions button {
            text-decoration: none;
            border: 1px solid ${r};
            background: ${x};
            color: ${u};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${s};
            color: ${s};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .ghost {
            background: transparent;
        }
        .actions button:active {
            transform: translateY(1px);
        }
        .actions button[aria-disabled="true"] {
            opacity: 0.7;
            cursor: not-allowed;
        }
    `,StatsGrid:c.section`
        display: grid;
        grid-template-columns: repeat(5, minmax(180px, 1fr));
        gap: 12px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(1, minmax(180px, 1fr));
        }
    `,StatCard:c.div`
        background: ${x};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 14px;
        box-shadow: ${j};
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 6px;
        .k {
            color: ${d};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            font-weight: 700;
        }
        .s {
            color: ${d};
            font-size: 12px;
        }
        .s.tag.ok {
            color: ${s};
        }
    `,Row:c.section`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,Card:c.div`
        background: ${x};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${j};
        h3 {
            margin-bottom: 10px;
            font-size: 16px;
        }
        .bullets {
            padding-left: 18px;
        }
        .bullets li {
            margin: 6px 0;
            color: ${u};
        }
        .inline-links {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .inline-links a {
            color: ${d};
            text-decoration: none;
        }
        .inline-links a:hover {
            color: ${s};
        }
        .dest {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        .dest .item {
            display: grid;
            grid-template-columns: 140px 1fr;
            column-gap: 8px;
            row-gap: 2px;
            align-items: baseline;
        }
        .dest .k {
            color: ${d};
            font-size: 12px;
        }
        .dest .v {
            font-weight: 600;
        }
        .dest .s {
            color: ${d};
            font-size: 12px;
            grid-column: 2 / span 1;
        }
    `,TableCard:c.section`
        background: ${x};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 0;
        box-shadow: ${j};
        .table-head {
            padding: 14px 14px 8px;
            border-bottom: 1px solid ${r};
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            h3 {
                margin-bottom: 2px;
            }
            p {
                color: ${d};
                font-size: 12px;
            }
            input {
                width: 280px;
                max-width: 50vw;
                background: ${x};
                border: 1px solid ${r};
                border-radius: 8px;
                color: ${u};
                padding: 8px 10px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            input::placeholder {
                color: ${d};
            }
            input:focus {
                border-color: ${s};
                box-shadow: 0 0 0 3px ${$};
                outline: none;
            }
        }
        .table-foot {
            border-top: 1px solid ${r};
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            color: ${d};
            .links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            a {
                color: ${d};
                text-decoration: none;
            }
            a:hover {
                color: ${s};
            }
        }
    `,TableWrap:c.div`
        width: 100%;
        overflow: auto;
        border-radius: 12px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${x};
            border-bottom: 1px solid ${r};
            text-align: left;
            padding: 10px;
            color: ${s};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${r};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        .truncate {
            max-width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tag {
            border: 1px solid ${r};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${u};
            background: rgba(0, 0, 0, 0.06);
        }
        .tag.success {
            color: ${s};
            border-color: ${s};
            background: ${$};
        }
        .actions {
            display: flex;
            gap: 8px;
            white-space: nowrap;
        }
        .actions a,
        .actions button {
            text-decoration: none;
            border: 1px solid ${r};
            background: ${x};
            color: ${u};
            padding: 6px 8px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${s};
            color: ${s};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .small {
            padding: 4px 8px;
        }
        .actions .ghost {
            background: transparent;
        }
        @media (max-width: 900px) {
            .truncate {
                max-width: 160px;
            }
        }
    `,SectionNav:c.nav`
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(160px, 1fr);
        gap: 10px;
        overflow: auto;
        padding-bottom: 2px;
        a {
            display: block;
            text-align: center;
            padding: 10px 12px;
            border: 1px solid ${r};
            border-radius: 10px;
            text-decoration: none;
            color: ${d};
            background: ${x};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
            white-space: nowrap;
        }
        a:hover {
            color: ${s};
            border-color: ${s};
            background: rgba(0, 0, 0, 0.06);
        }
        a.active {
            color: ${s};
            border-color: ${s};
            box-shadow: 0 0 0 3px ${$} inset;
        }
    `,ModalOverlay:c.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 50;
    `,ModalCard:c.div`
        width: min(560px, 92vw);
        background: ${x};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${j};
        h3 {
            margin-bottom: 8px;
        }
        p {
            color: ${d};
            margin-bottom: 16px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .actions button {
            background: ${x};
            color: ${u};
            border: 1px solid ${r};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .actions button:hover {
            border-color: ${s};
            color: ${s};
            background: rgba(0, 0, 0, 0.08);
        }
    `},z=!0,D=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=n=>n<10?"0"+n:""+n;function L(n){const i=new Date(n);return`${D[i.getDay()]} ${P[i.getMonth()]} ${y(i.getDate())} ${i.getFullYear()}`}function k(n){const i=new Date(n),m=y(i.getHours()),b=y(i.getMinutes()),h=y(i.getSeconds());return`${L(n)} ${m}:${b}:${h}hrs`}const v=[{id:"BKP-2025-10-03-0200",type:"Full",size:"4.2 GB",createdAt:"2025-10-03T02:00:05+05:30",completedAt:"2025-10-03T02:08:41+05:30",duration:"00:08:36",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-10-02-0200",type:"Full",size:"4.2 GB",createdAt:"2025-10-02T02:00:11+05:30",completedAt:"2025-10-02T02:08:37+05:30",duration:"00:08:26",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-10-01-0200",type:"Full",size:"4.1 GB",createdAt:"2025-10-01T02:00:03+05:30",completedAt:"2025-10-01T02:07:58+05:30",duration:"00:07:55",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-09-30-0200",type:"Full",size:"4.1 GB",createdAt:"2025-09-30T02:00:02+05:30",completedAt:"2025-09-30T02:07:44+05:30",duration:"00:07:42",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-09-29-0200",type:"Full",size:"4.1 GB",createdAt:"2025-09-29T02:00:07+05:30",completedAt:"2025-09-29T02:07:51+05:30",duration:"00:07:44",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-09-28-0200",type:"Full",size:"4.0 GB",createdAt:"2025-09-28T02:00:09+05:30",completedAt:"2025-09-28T02:07:33+05:30",duration:"00:07:24",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-09-27-0200",type:"Full",size:"4.0 GB",createdAt:"2025-09-27T02:00:04+05:30",completedAt:"2025-09-27T02:07:21+05:30",duration:"00:07:17",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."},{id:"BKP-2025-09-26-0200",type:"Full",size:"3.9 GB",createdAt:"2025-09-26T02:00:03+05:30",completedAt:"2025-09-26T02:06:59+05:30",duration:"00:06:56",status:"Success",location:"S3://prod-erptheme/backups/",notes:"Scheduled full snapshot (daily@02:00)."}],F=({open:n,onClose:i,title:m="Action unavailable",message:b="This is a live demo. Write actions are disabled."})=>n?e.jsx(o.ModalOverlay,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:e.jsxs(o.ModalCard,{children:[e.jsx("h3",{id:"demo-modal-title",children:m}),e.jsx("p",{children:b}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:i,autoFocus:!0,children:"OK"})})]})}):null;function E(){const{hash:n}=B(),[i,m]=g.useState(""),[b,h]=g.useState(!1),w=g.useMemo(()=>{if(!i.trim())return v;const t=i.trim().toLowerCase();return v.filter(l=>(l.id+" "+l.type+" "+l.status+" "+l.location).toLowerCase().includes(t))},[i]),N=g.useCallback(()=>{const t=document.body;t.classList.add("print-section-mode"),requestAnimationFrame(()=>{window.print()});const l=()=>{t.classList.remove("print-section-mode"),window.removeEventListener("afterprint",l)};window.addEventListener("afterprint",l)},[]);g.useEffect(()=>{if(!n)return;const t=n.slice(1),l=document.getElementById(t);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),l.classList.add("row-focus"),setTimeout(()=>l.classList.remove("row-focus"),1200))},[n]);const A=v.length,f=v[0],C=f!=null&&f.completedAt?k(f.completedAt):"-",T="Sun Oct 05 2025 02:00:00hrs",S="30 daily snapshots";return e.jsxs(o.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(o.Breadcrumbs,{children:[e.jsx(p,{to:"/settings",end:!0,children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Backups"})]}),e.jsxs(o.HeaderBar,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Backups"}),e.jsx("p",{children:"Automated snapshots of configuration & reference datasets for disaster-readiness."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>h(!0),"aria-disabled":z,title:"Demo mode: action disabled",children:"Create Backup"}),e.jsx(a,{to:"/tools/import-export",className:"ghost",title:"Open Import/Export tool",children:"Import / Export"}),e.jsx("button",{className:"ghost",onClick:N,title:"Print this list",children:"Print List"}),e.jsx(a,{to:"/help",className:"ghost",title:"Open Help Center",children:"Docs"})]})]}),e.jsxs(o.StatsGrid,{children:[e.jsxs(o.StatCard,{children:[e.jsx("div",{className:"k",children:"Snapshots"}),e.jsx("div",{className:"v",children:A}),e.jsx("div",{className:"s",children:"retained"})]}),e.jsxs(o.StatCard,{children:[e.jsx("div",{className:"k",children:"Storage Used"}),e.jsx("div",{className:"v",children:"~4.2 GB"}),e.jsx("div",{className:"s",children:"compressed"})]}),e.jsxs(o.StatCard,{children:[e.jsx("div",{className:"k",children:"Last Backup"}),e.jsx("div",{className:"v",children:C}),e.jsx("div",{className:"s tag ok",children:"Success"})]}),e.jsxs(o.StatCard,{children:[e.jsx("div",{className:"k",children:"Next Scheduled"}),e.jsx("div",{className:"v",children:T}),e.jsx("div",{className:"s",children:"daily @ 02:00"})]}),e.jsxs(o.StatCard,{children:[e.jsx("div",{className:"k",children:"Retention"}),e.jsx("div",{className:"v",children:S}),e.jsx("div",{className:"s",children:e.jsx(a,{to:"/settings/backups#retention",children:"view policy"})})]})]}),e.jsxs(o.Row,{children:[e.jsxs(o.Card,{children:[e.jsx("h3",{id:"retention",children:"Schedule & Retention"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Schedule: Daily at 02:00hrs (IST)"}),e.jsxs("li",{children:["Policy: ",S]}),e.jsx("li",{children:"Format: tar + gzip, integrity hash (SHA-256)"}),e.jsx("li",{children:"Scope: settings, templates, reference catalogs, metadata"})]}),e.jsxs("div",{className:"inline-links",children:[e.jsx(a,{to:"/settings/print-templates",title:"Print templates",children:"Print Templates"}),e.jsx(a,{to:"/settings/numbering",title:"Document numbering",children:"Document Numbering"}),e.jsx(a,{to:"/settings/tokens",title:"API tokens",children:"API Tokens"}),e.jsx(a,{to:"/settings/notifications",title:"Notifications",children:"Notifications"})]})]}),e.jsxs(o.Card,{children:[e.jsx("h3",{children:"Destinations"}),e.jsxs("div",{className:"dest",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Primary"}),e.jsx("div",{className:"v",children:"S3 (ap-south-1)"}),e.jsx("div",{className:"s",children:"Lifecycle: 30 days"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Secondary"}),e.jsx("div",{className:"v",children:"Local (artifact store)"}),e.jsx("div",{className:"s",children:"Pruned: 7 days"})]})]}),e.jsxs("div",{className:"inline-links",children:[e.jsx(a,{to:"/settings/backups#dest",children:"view config"}),e.jsx(a,{to:"/admin/system-status",title:"System Status",children:"System Status"}),e.jsx(a,{to:"/admin/activity",title:"Recent Activity",children:"Activity"})]})]})]}),e.jsxs(o.TableCard,{children:[e.jsxs("div",{className:"table-head",children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:"Snapshots"}),e.jsx("p",{children:"Browse recent backups. Use quick search to filter by ID, type, status, or location."})]}),e.jsx("div",{className:"right",children:e.jsx("input",{type:"text",value:i,onChange:t=>m(t.target.value),placeholder:"Search backups (e.g. Success, S3, Full)","aria-label":"Search backups"})})]}),e.jsx("div",{id:"search-print-area",children:e.jsx(o.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Size"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Completed"}),e.jsx("th",{children:"Duration"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:w.map(t=>e.jsxs("tr",{id:t.id,children:[e.jsx("td",{className:"mono",children:e.jsx("a",{href:`#${t.id}`,title:"Deep link to row",children:t.id})}),e.jsx("td",{children:t.type}),e.jsx("td",{children:t.size}),e.jsx("td",{children:k(t.createdAt)}),e.jsx("td",{children:k(t.completedAt)}),e.jsx("td",{className:"mono",children:t.duration}),e.jsx("td",{children:e.jsx("span",{className:`tag ${t.status.toLowerCase()}`,children:t.status})}),e.jsx("td",{className:"truncate",title:t.location,children:t.location}),e.jsxs("td",{className:"actions",children:[e.jsx(a,{to:"/tools/import-export",className:"small",title:"Open in Import/Export",children:"View"}),e.jsx("button",{className:"small ghost",onClick:()=>h(!0),title:"Demo mode: restore disabled",children:"Restore"}),e.jsx("button",{className:"small ghost",onClick:()=>h(!0),title:"Demo mode: delete disabled",children:"Delete"})]})]},t.id))})]})})}),e.jsxs("div",{className:"table-foot",children:[e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/settings",children:"Settings Home"}),e.jsx(a,{to:"/tools/import-export",children:"Import / Export"}),e.jsx(a,{to:"/settings/backups",children:"Backups"}),e.jsx(a,{to:"/admin/audit-log",children:"Audit Log"})]}),e.jsx("div",{className:"page",children:"Page 1 of 1"})]})]}),e.jsxs(o.SectionNav,{children:[e.jsx(p,{to:"/settings/appearance",end:!0,children:"Appearance"}),e.jsx(p,{to:"/settings/profile",end:!0,children:"Profile"}),e.jsx(p,{to:"/settings/print-templates",end:!0,children:"Print Templates"}),e.jsx(p,{to:"/settings/numbering",end:!0,children:"Numbering"}),e.jsx(p,{to:"/settings/tax",end:!0,children:"Tax"}),e.jsx(p,{to:"/settings/units",end:!0,children:"Units"}),e.jsx(p,{to:"/settings/currencies",end:!0,children:"Currencies"}),e.jsx(p,{to:"/settings/locations",end:!0,children:"Locations"}),e.jsx(p,{to:"/settings/warehouses",end:!0,children:"Warehouses"}),e.jsx(p,{to:"/settings/notifications",end:!0,children:"Notifications"}),e.jsx(p,{to:"/settings/webhooks",end:!0,children:"Webhooks"})]}),e.jsx(F,{open:b,onClose:()=>h(!1)})]})}export{E as default};
