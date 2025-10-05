import{d as m,r,j as e,N as u}from"./index-CvWKwy17.js";const l="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",c="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",P="var(--radius, 16px)",b={Page:m.div`
        padding: 24px 0 64px;
        color: ${l};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${l};
            }
        }
    `,Header:m.header`
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
            color: ${o};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${c};
            color: ${l};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s ease;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }

        .demoDisabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        .demoDisabled:hover {
            box-shadow: none;
            border-color: ${n};
            color: ${l};
        }
    `,Banner:m.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${n};
        border-radius: 10px;
        background: color-mix(in oklab, ${t} 10%, transparent);
        color: ${l};
    `,Layout:m.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            padding: 14px;
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .filters {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            input,
            select {
                background: ${c};
                border: 1px solid ${n};
                color: ${l};
                padding: 8px 10px;
                border-radius: 8px;
                font-size: 13px;
            }
            input::placeholder {
                color: ${o};
            }
            input:disabled,
            select:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: 12px;
        }
        table.tbl {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.tbl thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${c};
            border-bottom: 1px solid ${n};
            text-align: left;
            padding: 10px;
            font-weight: 600;
            color: ${t};
        }
        table.tbl tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
            vertical-align: top;
        }
        .cellTitle {
            font-weight: 600;
        }
        .muted {
            color: ${o};
            font-size: 12px;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${t} 8%, transparent);
        }
        tbody tr.isSelected {
            outline: 1px solid ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
        }

        .selCell {
            text-align: center;
            width: 38px;
        }
        .actionsCell {
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
        }

        .badge {
            border: 1px solid ${n};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            background: ${c};
        }
        .badge.ok {
            border-color: ${t};
            color: ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
        }
        .badge.sm {
            font-size: 11px;
            padding: 3px 8px;
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .sticky {
            position: sticky;
            top: 14px;
        }
        .detail .hero {
            margin-bottom: 8px;
        }
        .detail .title {
            font-size: 16px;
            font-weight: 700;
        }
        .detail .meta {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${o};
        }
        .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }
        .label {
            color: ${o};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .notes {
            margin-top: 10px;
        }
        .updated {
            margin-top: 10px;
        }

        .printCard {
            margin-top: 14px;
            padding: 12px;
            border: 1px solid ${n};
            border-radius: 10px;
            background: ${c};
        }
        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            column-gap: 12px;
            row-gap: 6px;
        }
        .kv .k {
            color: ${o};
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${o};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${n};
            background: ${c};
        }
        .links a:hover {
            color: ${t};
            border-color: ${t};
        }

        .empty {
            color: ${o};
            padding: 8px 0;
        }
        .panelActions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
        }
    `,Overlay:m.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:m.div`
        width: min(480px, 92vw);
        border-radius: ${P};
        border: 1px solid ${n};
        background: ${c};
        color: ${l};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
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
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${c};
            color: ${l};
            font-weight: 600;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${C};
        }
    `},A=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=a=>String(a).padStart(2,"0"),p=a=>{const i=a instanceof Date?a:new Date(a);return`${A[i.getDay()]} ${L[i.getMonth()]} ${g(i.getDate())} ${i.getFullYear()}`},f=a=>{const i=a instanceof Date?a:new Date(a);return`${p(i)} ${g(i.getHours())}:${g(i.getMinutes())}:${g(i.getSeconds())}hrs`},T=({children:a,className:i="",title:x="Demo only",...d})=>e.jsx("button",{className:`btnGhost demoDisabled ${i}`,title:x,disabled:!0,"aria-disabled":"true",...d,children:a}),I=({open:a,title:i,message:x,onClose:d})=>a?e.jsx(b.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:d,children:e.jsxs(b.Modal,{className:"card",onMouseDown:h=>h.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:i})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:x})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:d,children:"Okay"})})]})}):null,R=()=>{const a=r.useMemo(()=>[{id:"PL-STD-IN-2025",name:"Standard India 2025",type:"Standard",currency:"INR",channel:"All",active:!0,validFrom:"2025-01-01T00:00:00+05:30",validTo:"2025-12-31T23:59:59+05:30",rounding:"Nearest 0.50",itemsCount:1280,updatedAt:"2025-09-28T14:05:18+05:30",updatedBy:"ops@company.com",notes:"Primary list for domestic catalog. Includes seasonal markdown windows built-in."},{id:"PL-WS-IN-2025Q4",name:"Wholesale Q4",type:"Wholesale",currency:"INR",channel:"B2B",active:!0,validFrom:"2025-10-01T00:00:00+05:30",validTo:"2025-12-31T23:59:59+05:30",rounding:"None",itemsCount:860,updatedAt:"2025-10-02T11:22:47+05:30",updatedBy:"pricing@company.com",notes:"Bulk tiers for distributors. Includes pallet pricing and carton incentives."},{id:"PL-PROMO-DIW-2025",name:"Festive Promo Diwali",type:"Promotion",currency:"INR",channel:"Retail",active:!1,validFrom:"2025-10-15T00:00:00+05:30",validTo:"2025-11-10T23:59:59+05:30",rounding:"Nearest 1.00",itemsCount:230,updatedAt:"2025-09-30T09:10:12+05:30",updatedBy:"marketing@company.com",notes:"Gift bundles + BOGO on selected SKUs. Auto-expire post festival."},{id:"PL-EXPORT-GCC",name:"Export GCC",type:"Export",currency:"AED",channel:"Export",active:!0,validFrom:"2025-07-01T00:00:00+04:00",validTo:"2026-06-30T23:59:59+04:00",rounding:"Nearest 0.25",itemsCount:410,updatedAt:"2025-09-18T18:50:02+05:30",updatedBy:"intl@company.com",notes:"HSN/GST parity mapped; includes freight buffer and FX guardrail."}],[]),[i,x]=r.useState(null),[d,h]=r.useState(""),[w,N]=r.useState(!1),S=r.useRef(null),y=r.useMemo(()=>{const s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"});return URL.createObjectURL(s)},[a]);r.useEffect(()=>()=>URL.revokeObjectURL(y),[y]),r.useEffect(()=>{if(!d)return;const s=setTimeout(()=>h(""),3500);return()=>clearTimeout(s)},[d]);const $=s=>{var v;const j=`${location.origin}${location.pathname}#${s}`;(v=navigator==null?void 0:navigator.clipboard)!=null&&v.writeText?navigator.clipboard.writeText(j).then(()=>h("Link copied")):h("Copy not supported here")},k=()=>{N(!0)},D=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return r.useEffect(()=>{if(location.hash){const s=location.hash.replace("#",""),j=a.find(v=>v.id===s);j&&x(j)}},[a]),e.jsxs(b.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Price Lists"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(u,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Price Lists"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",a.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last Updated: ",f(a[1].updatedAt)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx(T,{title:"Demo: action disabled",children:"New Price List"}),e.jsx(T,{title:"Demo: action disabled",children:"Import"}),e.jsx("a",{className:"btnPrimary",href:y,download:"price-lists.json",title:"Download JSON snapshot",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:D,title:"Print selected section",children:"Print"})]})]}),d?e.jsx(b.Banner,{role:"status",children:d}):null,e.jsxs(b.Layout,{children:[e.jsxs("section",{className:"card main",children:[e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"filters",children:[e.jsx("input",{placeholder:"Search (read-only demo)",disabled:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{children:"All types"}),e.jsx("option",{children:"Standard"}),e.jsx("option",{children:"Wholesale"}),e.jsx("option",{children:"Promotion"}),e.jsx("option",{children:"Export"})]}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{children:"All channels"}),e.jsx("option",{children:"Retail"}),e.jsx("option",{children:"B2B"}),e.jsx("option",{children:"Export"})]}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{children:"Status: Any"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsx("div",{className:"toolbarRight",children:e.jsx("button",{className:"btnGhost",onClick:()=>h("Filters reset (demo)"),children:"Reset"})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"tbl",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:38}}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Currency"}),e.jsx("th",{children:"Channel"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Valid"}),e.jsx("th",{children:"Rounding"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{style:{width:180},children:"Actions"})]})}),e.jsx("tbody",{children:a.map(s=>e.jsxs("tr",{className:(i==null?void 0:i.id)===s.id?"isSelected":"",children:[e.jsx("td",{className:"selCell",children:e.jsx("input",{type:"radio",name:"sel",checked:(i==null?void 0:i.id)===s.id,onChange:()=>x(s),"aria-label":`Select ${s.name}`})}),e.jsxs("td",{children:[e.jsx("div",{className:"cellTitle",children:s.name}),e.jsx("div",{className:"muted",children:s.id})]}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.currency}),e.jsx("td",{children:s.channel}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.active?"ok":"mutedBadge"}`,children:s.active?"Active":"Inactive"})}),e.jsxs("td",{children:[e.jsxs("div",{children:[p(s.validFrom)," →"]}),e.jsx("div",{children:p(s.validTo)})]}),e.jsx("td",{children:s.rounding}),e.jsx("td",{children:s.itemsCount}),e.jsxs("td",{children:[e.jsx("div",{children:p(s.updatedAt)}),e.jsx("div",{className:"muted",children:s.updatedBy})]}),e.jsxs("td",{className:"actionsCell",children:[e.jsx("button",{className:"btnPrimary small",onClick:()=>x(s),title:"Open details in panel",children:"View"}),e.jsx("button",{className:"btnGhost small",onClick:()=>$(s.id),title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnDanger small",onClick:k,title:"Archive list (demo)",children:"Archive"})]})]},s.id))})]})})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card sticky",children:[e.jsx("h3",{children:"Details"}),i?e.jsxs("div",{className:"detail",children:[e.jsxs("header",{className:"hero",children:[e.jsx("div",{className:"title",children:i.name}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"muted",children:i.id}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"badge sm",children:i.type}),e.jsx("span",{children:"•"}),e.jsx("span",{children:i.currency})]})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Channel"}),e.jsx("div",{children:i.channel})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{children:e.jsx("span",{className:`badge ${i.active?"ok":"mutedBadge"}`,children:i.active?"Active":"Inactive"})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Valid From"}),e.jsx("div",{children:p(i.validFrom)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Valid To"}),e.jsx("div",{children:p(i.validTo)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Rounding"}),e.jsx("div",{children:i.rounding})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Items"}),e.jsx("div",{children:i.itemsCount})]})]}),e.jsxs("div",{className:"notes",children:[e.jsx("div",{className:"label",children:"Notes"}),e.jsx("p",{children:i.notes})]}),e.jsxs("div",{className:"updated",children:[e.jsx("div",{className:"label",children:"Last Updated"}),e.jsxs("div",{children:[f(i.updatedAt)," by ",i.updatedBy]})]}),e.jsxs("div",{id:"search-print-area",ref:S,className:"printCard",children:[e.jsx("h4",{children:"Price List Summary"}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Name"}),e.jsx("div",{className:"v",children:i.name}),e.jsx("div",{className:"k",children:"ID"}),e.jsx("div",{className:"v",children:i.id}),e.jsx("div",{className:"k",children:"Type"}),e.jsx("div",{className:"v",children:i.type}),e.jsx("div",{className:"k",children:"Currency"}),e.jsx("div",{className:"v",children:i.currency}),e.jsx("div",{className:"k",children:"Channel"}),e.jsx("div",{className:"v",children:i.channel}),e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:i.active?"Active":"Inactive"}),e.jsx("div",{className:"k",children:"Valid From"}),e.jsx("div",{className:"v",children:p(i.validFrom)}),e.jsx("div",{className:"k",children:"Valid To"}),e.jsx("div",{className:"v",children:p(i.validTo)}),e.jsx("div",{className:"k",children:"Rounding"}),e.jsx("div",{className:"v",children:i.rounding}),e.jsx("div",{className:"k",children:"Items"}),e.jsx("div",{className:"v",children:i.itemsCount}),e.jsx("div",{className:"k",children:"Updated"}),e.jsxs("div",{className:"v",children:[f(i.updatedAt)," · ",i.updatedBy]})]})]}),e.jsxs("div",{className:"panelActions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>$(i.id),title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnDanger",onClick:k,title:"Archive (demo)",children:"Archive"})]})]}):e.jsx("div",{className:"empty",children:e.jsx("p",{children:"Select a price list to preview its summary, validity, and meta info."})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(u,{to:"/products",children:"Products"})}),e.jsx("li",{children:e.jsx(u,{to:"/categories",children:"Categories"})}),e.jsx("li",{children:e.jsx(u,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(u,{to:"/reports/sales",children:"Sales Report"})}),e.jsx("li",{children:e.jsx(u,{to:"/tools/import-export",children:"Import / Export"})})]})]})]})]}),e.jsx(I,{open:w,title:"Demo",message:"This action is disabled in the demo.",onClose:()=>N(!1)})]})};export{R as default};
