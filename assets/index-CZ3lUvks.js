import{d as o,_ as $,u as O,r as T,j as e,N as i}from"./index-DwhKQ_MC.js";const x="var(--bg, #0d1117)",a="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",N="var(--card, #111318)",r="var(--border, #23262d)",d="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",P=o.div`
    width: 100%;
    color: ${a};
    padding: 16px 16px 28px;
`,F=o.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 14px;
    align-items: end;

    .breadcrumbs {
        grid-column: 1 / -1;
        display: flex;
        gap: 8px;
        align-items: center;
        a {
            color: ${t};
        }
        .current {
            color: ${a};
            font-weight: 600;
        }
        span {
            color: ${t};
        }
    }

    .title {
        h1 {
            font-size: 28px;
            line-height: 1.2;
            margin: 4px 0;
        }
        .meta {
            color: ${t};
            display: flex;
            gap: 16px;
            font-size: 12px;
        }
    }
`,H=o.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-self: end;

    button {
        background: ${N};
        border: 1px solid ${r};
        color: ${a};
        padding: 8px 12px;
        border-radius: 10px;
        font-weight: 600;
        transition: all 0.2s ease;
        box-shadow: ${y};
        &:hover {
            color: ${d};
            border-color: ${d};
            background: rgba(0, 0, 0, 0.08);
            transform: translateY(-1px);
        }
        &:active {
            transform: translateY(0);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${b};
        }
    }
`,U=o.nav`
    position: sticky;
    top: 0;
    z-index: 3;
    background: ${x};
    padding: 8px 0 10px;
    border-bottom: 1px solid ${r};
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    a {
        padding: 6px 10px;
        border: 1px dashed ${r};
        border-radius: 8px;
        color: ${t};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        &:hover {
            color: ${d};
            border-color: ${d};
            background: rgba(0, 0, 0, 0.06);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${b};
        }
    }
`,C=o.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 12px;
    margin: 14px 0;

    & > div,
    & > section {
        grid-column: span 6;
    }
    @media (max-width: 1200px) {
        & > div,
        & > section {
            grid-column: span 12;
        }
    }
`,l=o.section`
    background: ${N};
    border: 1px solid ${r};
    border-radius: 12px;
    box-shadow: ${y};
    padding: 12px;
    margin: 12px 0;

    .cardHeader {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        h3 {
            font-size: 18px;
        }
        .tools {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        input {
            background: ${x};
            border: 1px solid ${r};
            color: ${a};
            border-radius: 8px;
            padding: 6px 10px;
            min-width: 260px;
            &:focus {
                outline: none;
                border-color: ${d};
                box-shadow: 0 0 0 3px ${b};
            }
            &::placeholder {
                color: ${t};
            }
        }
    }

    .cardBody {
        margin-top: 8px;
    }
    .cardBody.cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
    }

    .kv {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 0;
        border-bottom: 1px dashed ${r};
    }
    .kv span {
        color: ${t};
    }
    .kv strong {
        letter-spacing: 0.2px;
    }

    .bullets {
        margin: 6px 0 0 14px;
    }
    .bullets li {
        margin: 6px 0;
    }
    .note {
        margin-top: 10px;
        color: ${t};
    }

    .chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 8px;
    }

    .quickLinks {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        a {
            background: ${x};
            border: 1px solid ${r};
            padding: 8px 10px;
            border-radius: 10px;
            text-decoration: none;
            color: ${a};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
            &:hover {
                color: ${d};
                border-color: ${d};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    }

    .tableLinks {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 8px;
        color: ${t};
        a {
            color: ${a};
            text-decoration: none;
        }
        a:hover {
            color: ${d};
        }
    }
`,G=o.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 13px;

    ${({dense:n})=>n&&$`
            font-size: 12px;
        `}

    thead th {
        text-align: left;
        padding: 10px;
        background: ${x};
        color: ${d};
        border-bottom: 1px solid ${r};
        position: sticky;
        top: 42px;
        z-index: 2;
    }

    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${r};
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }

    .code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
    }

    .empty {
        text-align: center;
        color: ${t};
        padding: 18px 0;
    }
`,h=o.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid ${r};
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 12px;
    color: ${a};
    background: ${x};

    ${({tone:n})=>n==="success"&&$`
            color: ${a};
            border-color: ${d};
            box-shadow: 0 0 0 2px ${b} inset;
        `}
    ${({tone:n})=>n==="muted"&&$`
            color: ${t};
        `}
`,z=o.kbd`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    border: 1px solid ${r};
    padding: 2px 6px;
    border-radius: 6px;
    color: ${t};
    background: ${x};
    user-select: none;
`,f=o.span`
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid ${r};
    color: ${a};
    background: ${x};
    font-size: 12px;
    margin-right: 6px;
`,B=o.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 9999;
    backdrop-filter: blur(2px);
`,X=o.div`
    width: min(640px, 96vw);
    background: ${N};
    color: ${a};
    border: 1px solid ${r};
    border-radius: 14px;
    box-shadow: ${y};
    padding: 16px;

    h3 {
        font-size: 18px;
        margin-bottom: 6px;
    }
    p {
        color: ${t};
        margin: 6px 0;
    }
    .modalActions {
        margin-top: 12px;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        button {
            background: ${x};
            color: ${a};
            border: 1px solid ${r};
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.2s ease;
            &:hover {
                color: ${d};
                border-color: ${d};
                background: rgba(0, 0, 0, 0.06);
            }
            &:focus-visible {
                outline: none;
                box-shadow: 0 0 0 3px ${b};
            }
        }
    }
`,J="2025-10-05T21:23:35.172Z",Z="2025-10-06T02:53:30+05:30",S=n=>String(n).padStart(2,"0"),L=n=>new Date(n),j=n=>L(n).toDateString(),g=n=>{const c=L(n);return`${c.toDateString()} ${S(c.getHours())}:${S(c.getMinutes())}:${S(c.getSeconds())}hrs`},q="This is a display-only theme. Changes will not be saved.",k=[{id:"TAX-CGST-9",name:"CGST 9%",kind:"CGST",rate:"9%",jurisdiction:"India",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Active",updatedAt:"2025-09-28T10:18:30+05:30"},{id:"TAX-SGST-9",name:"SGST 9%",kind:"SGST",rate:"9%",jurisdiction:"India",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Active",updatedAt:"2025-09-28T10:18:30+05:30"},{id:"TAX-IGST-18",name:"IGST 18%",kind:"IGST",rate:"18%",jurisdiction:"Interstate (India)",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Active",updatedAt:"2025-09-28T10:18:30+05:30"},{id:"TAX-ZERO",name:"Zero Rated (0%)",kind:"GST",rate:"0%",jurisdiction:"India",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Active",updatedAt:"2025-05-01T12:00:00+05:30"},{id:"TAX-EXEMPT",name:"Exempt (N/A)",kind:"GST",rate:"—",jurisdiction:"India",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Active",updatedAt:"2025-05-01T12:00:00+05:30"},{id:"TAX-CESS-12",name:"Compensation Cess 12%",kind:"Cess",rate:"12%",jurisdiction:"India",effectiveFrom:"2024-04-01T00:00:00+05:30",status:"Inactive",updatedAt:"2025-03-15T09:35:20+05:30"}],I=[{id:"TG-STD-18",label:"GST Standard 18%",components:["CGST 9%","SGST 9%"],appliesTo:["Domestic Sales"],updatedAt:"2025-09-30T14:45:10+05:30"},{id:"TG-INT-18",label:"Interstate 18%",components:["IGST 18%"],appliesTo:["Interstate Sales","Exports (as applicable)"],updatedAt:"2025-09-30T14:45:10+05:30"},{id:"TG-ZERO",label:"Zero Rated (0%)",components:["0%"],appliesTo:["SEZ / LUT / Exports"],updatedAt:"2025-09-30T14:45:10+05:30"}],R=[{code:"IN-DL",name:"Delhi"},{code:"IN-MH",name:"Maharashtra"},{code:"IN-KA",name:"Karnataka"},{code:"IN-TN",name:"Tamil Nadu"},{code:"IN-WB",name:"West Bengal"},{code:"IN-UP",name:"Uttar Pradesh"},{code:"IN-GJ",name:"Gujarat"}];function W(){const n=O(),[c,D]=T.useState(""),[v,m]=T.useState(null),w=T.useMemo(()=>{const s=c.trim().toLowerCase();return s?k.filter(p=>[p.name,p.kind,p.rate,p.jurisdiction,p.id].join(" ").toLowerCase().includes(s)):k},[c]),E=()=>{const s=document.body;s&&(s.classList.add("print-section-mode"),window.focus(),window.print(),setTimeout(()=>s.classList.remove("print-section-mode"),300))},M=()=>{const s={exportedAt:g(new Date().toISOString()),rates:k,groups:I,jurisdictions:R},p=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),A=URL.createObjectURL(p),u=document.createElement("a");u.href=A,u.download=`settings-tax-export-${Date.now()}.json`,document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(A)};return e.jsxs(P,{children:[e.jsxs(F,{children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(i,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(i,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Tax"})]}),e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Tax Settings"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Last updated: ",g(Z)]}),e.jsxs("span",{children:["Build: ",j(J)]})]})]}),e.jsxs(H,{children:[e.jsx("button",{onClick:()=>m("save"),title:"Save changes (demo)",children:"Save Changes"}),e.jsx("button",{onClick:()=>m("reset"),title:"Reset to defaults (demo)",children:"Reset to Defaults"}),e.jsx("button",{onClick:M,title:"Export visible configuration",children:"Export JSON"}),e.jsx("button",{onClick:E,title:"Print this page",children:"Print"})]})]}),e.jsxs(U,{children:[e.jsx("a",{href:"#overview",children:"Overview"}),e.jsx("a",{href:"#rates",children:"Tax Rates"}),e.jsx("a",{href:"#groups",children:"Tax Groups"}),e.jsx("a",{href:"#jurisdictions",children:"Jurisdictions"}),e.jsx("a",{href:"#compliance",children:"Compliance"}),e.jsx("a",{href:"#links",children:"Quick Links"})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(C,{id:"overview",children:[e.jsxs(l,{children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Organization Tax Profile"}),e.jsx(h,{children:"Read-only"})]}),e.jsxs("div",{className:"cardBody cols",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Legal Name"}),e.jsx("strong",{children:"Arena Lifecare Pvt Ltd"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"GSTIN"}),e.jsx("strong",{children:"07AALCA0001Z5"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"PAN"}),e.jsx("strong",{children:"AALCA0001"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Registration Type"}),e.jsx("strong",{children:"Regular"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Filing Frequency"}),e.jsx("strong",{children:"Monthly (GSTR-1/3B)"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"FY Start"}),e.jsx("strong",{children:j("2025-04-01T00:00:00+05:30")})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"FY End"}),e.jsx("strong",{children:j("2026-03-31T23:59:59+05:30")})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Timezone"}),e.jsx("strong",{children:"Asia/Kolkata"})]})]})]})]}),e.jsxs(l,{children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Calculation Preferences"}),e.jsx(f,{children:"Inclusive Pricing"}),e.jsx(f,{children:"Round per Line"}),e.jsx(f,{children:"Tax on Shipping"})]}),e.jsxs("div",{className:"cardBody",children:[e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Price list is inclusive of GST; line tax shown separately on invoices."}),e.jsx("li",{children:"Rounding precision: 2 decimals at line-level; totals can differ by ±0.01."}),e.jsx("li",{children:"Shipping charges considered taxable by default."})]}),e.jsxs("div",{className:"note",children:["Need other behaviours? See ",e.jsx(i,{to:"/settings/numbering",children:"Numbering"})," and ",e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"}),"."]})]})]})]}),e.jsxs(l,{id:"rates",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Tax Rates"}),e.jsxs("div",{className:"tools",children:[e.jsx("input",{type:"text",placeholder:"Filter rates (e.g., 18, CGST, interstate)",value:c,onChange:s=>D(s.target.value),"aria-label":"Filter tax rates"}),e.jsx(z,{children:"/"})]})]}),e.jsxs(G,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Rate"}),e.jsx("th",{children:"Kind"}),e.jsx("th",{children:"Jurisdiction"}),e.jsx("th",{children:"Effective From"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Updated"})]})}),e.jsxs("tbody",{children:[w.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"code",children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.kind}),e.jsx("td",{children:s.jurisdiction}),e.jsx("td",{children:j(s.effectiveFrom)}),e.jsx("td",{children:s.status==="Active"?e.jsx(h,{tone:"success",children:"Active"}):e.jsx(h,{tone:"muted",children:"Inactive"})}),e.jsx("td",{children:g(s.updatedAt)})]},s.id)),w.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"empty",children:"No rates match your filter."})})]})]}),e.jsxs("div",{className:"tableLinks",children:[e.jsx(i,{to:"/products/price-lists",children:"Go to Price Lists"}),e.jsx("span",{children:"•"}),e.jsx(i,{to:"/medicines/hsn-gst",children:"HSN / GST Mapping"})]})]}),e.jsxs(l,{id:"groups",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Tax Groups"}),e.jsx(h,{children:"Display"})]}),e.jsxs(G,{dense:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Group ID"}),e.jsx("th",{children:"Label"}),e.jsx("th",{children:"Components"}),e.jsx("th",{children:"Applies To"}),e.jsx("th",{children:"Updated"})]})}),e.jsx("tbody",{children:I.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"code",children:s.id}),e.jsx("td",{children:s.label}),e.jsx("td",{children:s.components.join(" + ")}),e.jsx("td",{children:s.appliesTo.join(", ")}),e.jsx("td",{children:g(s.updatedAt)})]},s.id))})]})]}),e.jsxs(l,{id:"jurisdictions",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Jurisdictions"}),e.jsx(h,{children:"India"})]}),e.jsx("div",{className:"chips",children:R.map(s=>e.jsx(f,{as:"span",title:s.code,children:s.name},s.code))}),e.jsxs("div",{className:"note",children:["Configure warehouse-region mapping in ",e.jsx(i,{to:"/settings/warehouses",children:"Warehouses"})," and company branches in ",e.jsx(i,{to:"/settings/locations",children:"Locations"}),"."]})]}),e.jsxs(C,{id:"compliance",children:[e.jsxs(l,{children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"GST Returns"}),e.jsx(h,{children:"Monthly"})]}),e.jsxs("div",{className:"cardBody cols",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"GSTR-1"}),e.jsxs("strong",{children:["Due by ",j("2025-10-11T00:00:00+05:30")]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"GSTR-3B"}),e.jsxs("strong",{children:["Due by ",j("2025-10-20T00:00:00+05:30")]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Next Window"}),e.jsx("strong",{children:g("2025-10-05T09:00:00+05:30")})]})]}),e.jsx("div",{children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Report center: ",e.jsx(i,{to:"/reports/gst",children:"GST"})]}),e.jsxs("li",{children:["Upload mapping available in ",e.jsx(i,{to:"/tools/import-export",children:"Import/Export"})]}),e.jsxs("li",{children:["Tax ledgers view in ",e.jsx(i,{to:"/finance/ledgers",children:"Finance → Ledgers"})]})]})})]})]}),e.jsxs(l,{children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("h3",{children:"Documents Affected"}),e.jsx(h,{children:"Read-only"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Invoices ",e.jsx(i,{to:"/invoices",children:"list"}),", credit notes ",e.jsx(i,{to:"/invoices/credit-notes",children:"here"}),"."]}),e.jsxs("li",{children:["Sales Orders ",e.jsx(i,{to:"/orders",children:"overview"}),", Returns ",e.jsx(i,{to:"/sales/returns",children:"here"}),"."]}),e.jsxs("li",{children:["Products and HSN mapping in ",e.jsx(i,{to:"/medicines/hsn-gst",children:"HSN / GST"})," and ",e.jsx(i,{to:"/products",children:"Catalog"}),"."]})]})]})]}),e.jsxs(l,{id:"links",children:[e.jsx("div",{className:"cardHeader",children:e.jsx("h3",{children:"Quick Links"})}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(i,{to:"/settings",children:"Settings Home"}),e.jsx(i,{to:"/settings/appearance",children:"Appearance"}),e.jsx(i,{to:"/settings/currencies",children:"Currencies"}),e.jsx(i,{to:"/settings/units",children:"Units"}),e.jsx(i,{to:"/settings/numbering",children:"Document Numbering"}),e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(i,{to:"/reports/finance",children:"Finance Reports"}),e.jsx(i,{to:"/finance/gst-returns",children:"GST Returns"}),e.jsx(i,{to:"/products/price-lists",children:"Price Lists"}),e.jsx(i,{to:"/invoices",children:"Invoices"}),e.jsx(i,{to:"/receipts",children:"Receipts"}),e.jsx(i,{to:"/tools/import-export",children:"Import / Export"})]})]})]}),e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),v&&e.jsx(B,{onClick:()=>m(null),"aria-modal":"true",role:"dialog","aria-labelledby":"demo-modal-title",children:e.jsxs(X,{onClick:s=>s.stopPropagation(),children:[e.jsx("h3",{id:"demo-modal-title",children:"Demo Mode"}),e.jsx("p",{children:q}),v==="save"&&e.jsx("p",{children:"“Save Changes” is disabled on this demo. Explore other pages using the links provided."}),v==="reset"&&e.jsx("p",{children:"“Reset to Defaults” is disabled on this demo. Configuration shown here is illustrative."}),v==="info"&&e.jsx("p",{children:"Use the quick links to navigate. Deep links are stable for showcasing flows."}),e.jsxs("div",{className:"modalActions",children:[e.jsx("button",{onClick:()=>m(null),children:"Close"}),e.jsx("button",{onClick:()=>{m(null),n("/reports/gst")},children:"Open Reports → GST"})]})]})})]})}export{W as default};
