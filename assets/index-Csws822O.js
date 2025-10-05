import{d as n,_ as N,r as h,j as e,L as f,N as a}from"./index-DwhKQ_MC.js";import{a as w,a1 as C,j as P,k as T,l as y,L as R}from"./index-iMuACjyt.js";const x="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",i="var(--card, #111318)",r="var(--border, #23262d)",o="var(--accent, #5aa9ff)",u="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",E=n.div`
    width: 100%;
    color: ${x};
    background: transparent;
    padding: 16px;
`,O=n.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`,H=n.div`
    display: flex;
    gap: 8px;
    align-items: center;
    a {
        color: ${l};
    }
    a:hover {
        color: ${o};
    }
    .current {
        color: ${x};
    }
`,A=n.div`
    display: flex;
    gap: 8px;
`,g=n.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${r};
    background: ${i};
    color: ${x};
    padding: 8px 12px;
    border-radius: 10px;
    box-shadow: ${u};
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease,
        transform 0.05s ease;
    &:hover {
        border-color: ${o};
        color: ${o};
        background: rgba(0, 0, 0, 0.08);
    }
    &:active {
        transform: translateY(1px);
    }
    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,I=n.nav`
    display: flex;
    gap: 8px;
    margin: 8px 0 16px 0;
    flex-wrap: wrap;

    a {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${r};
        border-radius: 999px;
        background: ${i};
        color: ${l};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    a:hover {
        color: ${o};
        border-color: ${o};
    }
`,m=n.section`
    background: ${i};
    border: 1px solid ${r};
    border-radius: 14px;
    box-shadow: ${u};
    padding: 16px;
    width: 100%;
    overflow: hidden;

    .cardHead {
        display: flex;
        gap: 12px;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 12px;

        h2,
        h3 {
            font-weight: 700;
        }
        .muted {
            color: ${l};
            font-size: 12px;
        }
    }

    .bullets {
        display: grid;
        gap: 8px;
        margin: 8px 0;
    }

    .ctaRow {
        display: flex;
        gap: 8px;
        margin-top: 8px;
        button {
            border: 1px solid ${r};
            background: ${i};
            color: ${x};
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            &:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.08);
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    }

    .examples {
        margin-top: 12px;
        ul {
            display: grid;
            gap: 6px;
        }
        code {
            background: rgba(0, 0, 0, 0.2);
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid ${r};
        }
    }

    .tokens {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 10px;
        margin: 12px 0 4px 0;
    }
`,L=n.div`
    width: 100%;
    overflow: auto;
    border-radius: 10px;
    border: 1px solid ${r};
    background: color-mix(in oklab, ${i} 94%, transparent);

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        text-align: left;
        padding: 10px;
        background: ${i};
        color: ${o};
        position: sticky;
        top: 0;
        z-index: 1;
        border-bottom: 1px solid ${r};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${r};
        vertical-align: top;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    code {
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 6px;
        border-radius: 6px;
        border: 1px solid ${r};
    }
    .example {
        color: ${x};
        font-weight: 600;
    }
    .next {
        font-family: "Antonio", sans-serif;
        letter-spacing: 0.2px;
    }
    .rowActions {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${r};
            background: ${i};
            color: ${l};
            padding: 4px 8px;
            border-radius: 6px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            &:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.08);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        a.nav {
            color: ${l};
            text-decoration: none;
            border-bottom: 1px dashed ${r};
        }
        a.nav:hover {
            color: ${o};
            border-color: ${o};
        }
    }
`,D=n.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${r};
    background: color-mix(in oklab, ${i} 92%, transparent);
    color: ${x};
    font-size: 12px;
`,k=n.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    ${t=>t.cols&&N`
            @media (min-width: 900px) {
                grid-template-columns: repeat(${t.cols}, minmax(0, 1fr));
            }
        `}
`,G=n.div`
    border: 1px solid ${r};
    background: ${i};
    border-radius: 12px;
    padding: 12px;
    box-shadow: ${u};

    .k-label {
        color: ${l};
        font-size: 12px;
    }
    .k-value {
        font-size: 20px;
        font-weight: 700;
        margin-top: 4px;
    }
    .k-sub {
        color: ${l};
        font-size: 12px;
        margin-top: 6px;
    }
`,z=n.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: start;
    gap: 10px;
    padding: 10px;
    border: 1px solid ${r};
    border-radius: 10px;
    background: color-mix(in oklab, ${i} 96%, transparent);
    kbd {
        display: inline-block;
        border: 1px solid ${r};
        border-radius: 8px;
        background: ${i};
        padding: 6px 10px;
        font-family: "Antonio", sans-serif;
    }
    span {
        color: ${l};
    }
`,v=n.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${l};
    svg {
        opacity: 0.9;
    }
`,U=n.div`
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    a {
        text-decoration: none;
        color: ${l};
        padding: 8px 10px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: ${i};
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    a:hover {
        color: ${o};
        border-color: ${o};
        background: rgba(0, 0, 0, 0.06);
    }
`,F=n.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.6);
    display: grid;
    place-items: center;
    z-index: 50;
`,K=n.div`
    width: min(560px, 96vw);
    border: 1px solid ${r};
    background: ${i};
    border-radius: 14px;
    box-shadow: ${u};
    padding: 16px;

    header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        h4 {
            margin: 0;
        }
    }
    p {
        color: ${l};
        line-height: 1.7;
    }
    .modalActions {
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            border: 1px solid ${r};
            background: ${i};
            color: ${x};
            padding: 8px 12px;
            border-radius: 10px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            &:hover {
                color: ${o};
                border-color: ${o};
                background: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;function Y(t=new Date){return t.toDateString()}function $(t=new Date){const d=b=>String(b).padStart(2,"0"),c=`${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}hrs`;return`${Y(t)} ${c}`}function V(t=new Date){const d=c=>String(c).padStart(2,"0");return`${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}hrs`}const M=[{entity:"Invoices",code:"INV",pattern:"INV-{YYYY}-{MM}-{####}",example:"INV-2025-10-0007",next:"INV-2025-10-0008",scope:"Global",reset:"Monthly (MM)",link:"/invoices"},{entity:"Receipts",code:"RCPT",pattern:"RCPT-{YYYY}-{MM}-{####}",example:"RCPT-2025-10-0041",next:"RCPT-2025-10-0042",scope:"Global",reset:"Monthly (MM)",link:"/receipts"},{entity:"Orders",code:"SO",pattern:"SO-{YYYY}-{MM}-{#####}",example:"SO-2025-10-01234",next:"SO-2025-10-01235",scope:"Global",reset:"Monthly (MM)",link:"/orders"},{entity:"Purchase Orders",code:"PO",pattern:"PO-{YYYY}-{MM}-{####}",example:"PO-2025-10-0199",next:"PO-2025-10-0200",scope:"Global",reset:"Monthly (MM)",link:"/purchase-orders"},{entity:"Shipments",code:"SHP",pattern:"SHP-{YYYY}-{MM}-{####}",example:"SHP-2025-10-0450",next:"SHP-2025-10-0451",scope:"Global",reset:"Monthly (MM)",link:"/shipments"},{entity:"Credit Notes",code:"CN",pattern:"CN-{YYYY}-{MM}-{####}",example:"CN-2025-10-0003",next:"CN-2025-10-0004",scope:"Global",reset:"Monthly (MM)",link:"/invoices/credit-notes"},{entity:"Quotes",code:"QT",pattern:"QT-{YYYY}-{MM}-{####}",example:"QT-2025-10-0221",next:"QT-2025-10-0222",scope:"Global",reset:"Monthly (MM)",link:"/sales/quotes"},{entity:"Returns",code:"RTN",pattern:"RTN-{YYYY}-{MM}-{####}",example:"RTN-2025-10-0011",next:"RTN-2025-10-0012",scope:"Global",reset:"Monthly (MM)",link:"/sales/returns"},{entity:"Payments",code:"PMT",pattern:"PMT-{YYYY}-{MM}-{####}",example:"PMT-2025-10-0300",next:"PMT-2025-10-0301",scope:"Global",reset:"Monthly (MM)",link:"/sales/payments"},{entity:"Customers",code:"CUST",pattern:"CUST-{YYYY}-{####}",example:"CUST-2025-0007",next:"CUST-2025-0008",scope:"Global",reset:"Yearly (YYYY)",link:"/customers"},{entity:"Products",code:"SKU",pattern:"SKU-{CATEGORY}-{####}",example:"SKU-MED-0421",next:"SKU-MED-0422",scope:"By Category",reset:"Never",link:"/products"}],W=[{t:"{YYYY}",desc:"Four digit year (e.g., 2025)"},{t:"{YY}",desc:"Two digit year (e.g., 25)"},{t:"{MM}",desc:"Month (01–12)"},{t:"{DD}",desc:"Day of month (01–31)"},{t:"{####}",desc:"Zero-padded auto counter (4 digits). Repeat # to change width."},{t:"{SITE}",desc:"Site code (e.g., BLR, DEL). Optional; default empty."},{t:"{WH}",desc:"Warehouse code (e.g., WH1). Optional; default empty."},{t:"{CATEGORY}",desc:"Product category code (e.g., MED, LAB)."},{t:"{PREFIX}",desc:"Custom prefix per entity (e.g., INV, PO)."},{t:"{SUFFIX}",desc:"Custom suffix (optional)."}],B=[{label:"Settings Home",to:"/settings"},{label:"Appearance",to:"/settings/appearance"},{label:"Print Templates",to:"/settings/print-templates"},{label:"Notifications",to:"/settings/notifications"},{label:"Tokens (API)",to:"/settings/tokens"},{label:"Warehouses",to:"/settings/warehouses"},{label:"Tax",to:"/settings/tax"},{label:"Units",to:"/settings/units"},{label:"Currencies",to:"/settings/currencies"},{label:"Numbering",to:"/settings/numbering"}];function J(){const[t,d]=h.useState(null),c=h.useMemo(()=>new Date,[]),b=h.useCallback(s=>d(s),[]),j=h.useCallback(()=>d(null),[]),S=h.useCallback(()=>{document.body.classList.add("print-section-mode");const s=()=>{document.body.classList.remove("print-section-mode"),window.removeEventListener("afterprint",s)};window.addEventListener("afterprint",s),window.print()},[]);return e.jsxs(E,{children:[e.jsxs(O,{children:[e.jsxs(H,{children:[e.jsx(f,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(f,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Numbering"})]}),e.jsxs(A,{children:[e.jsxs(g,{onClick:S,title:"Print this section",children:[e.jsx(w,{size:16})," Print"]}),e.jsxs(g,{disabled:!0,title:"Add scheme (demo)",children:[e.jsx(C,{size:16})," New Scheme"]}),e.jsxs(g,{disabled:!0,title:"Save changes (demo)",children:[e.jsx(P,{size:16})," Save"]})]})]}),e.jsxs(I,{role:"tablist",children:[e.jsx("a",{href:"#schemes",role:"tab",children:"Schemes"}),e.jsx("a",{href:"#placeholders",role:"tab",children:"Placeholders"}),e.jsx("a",{href:"#resets",role:"tab",children:"Resets"}),e.jsx("a",{href:"#status",role:"tab",children:"Status"}),e.jsx("a",{href:"#links",role:"tab",children:"Links"})]}),e.jsx("div",{id:"search-print-area",children:e.jsxs(k,{children:[e.jsxs(m,{id:"schemes",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h2",{children:"Document Numbering Schemes"}),e.jsxs("span",{className:"muted",children:["Generated: ",$(c)]})]}),e.jsx(L,{role:"table","aria-label":"Numbering schemes",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Entity"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Pattern"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"Scope"}),e.jsx("th",{children:"Reset"}),e.jsx("th",{children:"Next"}),e.jsx("th",{children:"Navigate"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:M.map((s,p)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:s.entity})}),e.jsx("td",{children:e.jsx(D,{children:s.code})}),e.jsx("td",{children:e.jsx("code",{children:s.pattern})}),e.jsx("td",{className:"example",children:s.example}),e.jsx("td",{children:s.scope}),e.jsx("td",{children:s.reset}),e.jsx("td",{className:"next",children:s.next}),e.jsx("td",{children:e.jsxs(a,{to:s.link,className:"nav",children:["Open ",e.jsx(T,{"aria-hidden":!0})]})}),e.jsxs("td",{className:"rowActions",children:[e.jsx("button",{disabled:!0,title:"Edit (demo)",children:"Edit"}),e.jsx("button",{disabled:!0,title:"Clone (demo)",children:"Clone"}),e.jsx("button",{onClick:()=>b("reset"),title:"Explain reset policy",children:"Reset?"})]})]},p))})]})}),e.jsxs(v,{children:[e.jsx(y,{size:16}),"Patterns expand using tokens below. Resets are evaluated at issue time; counters are independent per scheme."]})]}),e.jsxs(m,{id:"placeholders",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Placeholder Tokens"}),e.jsxs("span",{className:"muted",children:["As of ",Y(c)]})]}),e.jsx("div",{className:"tokens",children:W.map((s,p)=>e.jsxs(z,{children:[e.jsx("kbd",{children:s.t}),e.jsx("span",{children:s.desc})]},p))}),e.jsxs("div",{className:"examples",children:[e.jsx("h4",{children:"Examples"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("code",{children:["INV-","{YYYY}","-","{MM}","-","{####}"]})," → ",e.jsx("strong",{children:"INV-2025-10-0008"})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["PO-","{YY}","-","{MM}","-","{####}"]})," → ",e.jsx("strong",{children:"PO-25-10-0200"})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["SKU-","{CATEGORY}","-","{####}"]})," → ",e.jsx("strong",{children:"SKU-MED-0422"})]}),e.jsxs("li",{children:[e.jsxs("code",{children:["RCPT-","{SITE}","-","{YYYY}","-","{####}"]})," → ",e.jsx("strong",{children:"RCPT-BLR-2025-0042"})]})]})]})]}),e.jsxs(m,{id:"resets",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Auto-Reset Policies"}),e.jsxs("span",{className:"muted",children:["Last updated ",$(c)]})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Never:"})," Counter grows forever; recommended for SKUs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Yearly (YYYY):"})," Counter resets on Jan 1, e.g., ",e.jsx("em",{children:"INV-2026-01-0001"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Monthly (MM):"})," Resets on 1st of each month; common for SO/PO/INV."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Site/Warehouse scoped:"})," Separate counters for each ",e.jsx("code",{children:"{SITE}"})," or ",e.jsx("code",{children:"{WH}"}),"."]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{onClick:()=>b("reset"),title:"Learn why reset is disabled in demo",children:"Reset Counters"}),e.jsx("button",{disabled:!0,title:"Save (demo)",children:"Save Changes"})]}),e.jsxs(v,{children:[e.jsx(R,{size:16}),"This is a display-only demo. Counter changes and resets are disabled."]})]}),e.jsxs(m,{id:"status",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Sequence Status"}),e.jsxs("span",{className:"muted",children:["Snapshot ",V(c)]})]}),e.jsx(k,{cols:"5",children:M.slice(0,10).map((s,p)=>e.jsxs(G,{role:"status",children:[e.jsx("div",{className:"k-label",children:s.entity}),e.jsx("div",{className:"k-value",children:s.next}),e.jsxs("div",{className:"k-sub",children:["Pattern: ",e.jsx("code",{children:s.pattern})]})]},p))})]}),e.jsxs(m,{id:"links",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Jump to Related Settings & Modules"}),e.jsx("span",{className:"muted",children:"Navigate"})]}),e.jsxs(U,{children:[B.map((s,p)=>e.jsx(a,{to:s.to,children:s.label},p)),e.jsx(a,{to:"/invoices",children:"Invoices"}),e.jsx(a,{to:"/receipts",children:"Receipts"}),e.jsx(a,{to:"/orders",children:"Orders"}),e.jsx(a,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx(a,{to:"/shipments",children:"Shipments"}),e.jsx(a,{to:"/customers",children:"Customers"}),e.jsx(a,{to:"/products",children:"Products"}),e.jsx(a,{to:"/finance/gst-returns",children:"GST Returns"}),e.jsx(a,{to:"/reports",children:"Reports"}),e.jsx(a,{to:"/settings/print-templates",children:"Print Templates"})]})]})]})}),e.jsx("style",{children:`
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
      `}),t&&e.jsx(F,{onClick:j,role:"dialog","aria-modal":"true",children:e.jsxs(K,{onClick:s=>s.stopPropagation(),role:"document",children:[e.jsxs("header",{children:[e.jsx(y,{size:18}),e.jsx("h4",{children:"Demo Mode"})]}),t==="reset"&&e.jsx("p",{children:"Counters and resets are disabled in this demo. You can explore patterns, navigate modules, and print this page."}),t==="add"&&e.jsx("p",{children:"Adding new schemes is disabled here. Open the related module to see how numbering is used in context."}),t==="save"&&e.jsx("p",{children:"Saving configuration is disabled in this demo. Patterns shown are for display and navigation only."}),e.jsx("div",{className:"modalActions",children:e.jsx("button",{onClick:j,children:"Okay"})})]})})]})}export{J as default};
