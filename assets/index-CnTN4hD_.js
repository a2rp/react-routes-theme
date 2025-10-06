import{d as c,u as M,r as j,j as e,N as H,L as s}from"./index-BauM8ZfN.js";import{x as D,b as z,a as J,o as k,A as C,k as f}from"./index-CzSw6k9g.js";const S="var(--bg, #0d1117)",n="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",r="var(--card, #111318)",t="var(--border, #23262d)",a="var(--accent, #5aa9ff)",l="var(--accent-soft, rgba(90,169,255,0.15))",m="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",p={Page:c.div`
        width: 100%;
        padding: 18px 20px 28px;
        color: ${n};
        background: ${S};
    `,Header:c.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            .crumb {
                color: ${h};
            }
            .sep {
                color: ${h};
            }
            .here {
                color: ${n};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${t};
                background: ${r};
                color: ${n};
                padding: 8px 12px;
                border-radius: 10px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    transform 0.05s ease;
                box-shadow: ${m};
                svg {
                    font-size: 16px;
                }
                &:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${l};
                }
                &:active {
                    transform: translateY(1px);
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                &.ghost {
                    background: ${r};
                }
                &.primary {
                }
                &.danger {
                }
                .chip {
                    margin-left: 6px;
                    font-size: 11px;
                    padding: 2px 6px;
                    border-radius: 999px;
                    background: ${l};
                    color: ${n};
                    border: 1px solid ${t};
                }
            }
        }
    `,TopMeta:c.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 14px;
        margin-bottom: 16px;
        .left h1 {
            font-size: 26px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .left .muted {
            color: ${h};
        }
        .right.links {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${t};
                color: ${n};
                background: ${r};
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
                &:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${l};
                }
                svg {
                    position: relative;
                    top: 1px;
                }
            }
        }
    `,Tabs:c.div`
        display: flex;
        gap: 8px;
        margin-bottom: 14px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${t};
            background: ${r};
            color: ${n};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
            &.active {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
                color: ${a};
            }
        }
    `,Stats:c.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        gap: 12px;
        margin-bottom: 14px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
        .card {
            background: ${r};
            border: 1px solid ${t};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${m};
            h4 {
                font-size: 13px;
                color: ${h};
                margin-bottom: 8px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 6px;
            }
            .sub {
                color: ${h};
                font-size: 12px;
            }
        }
    `,GridTwo:c.div`
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;
        margin-bottom: 14px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
        .panel {
            background: ${r};
            border: 1px solid ${t};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${m};
        }
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .linksList {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 8px;
            .item {
                display: block;
                padding: 10px 12px;
                border: 1px solid ${t};
                border-radius: 10px;
                color: ${n};
                background: color-mix(in oklab, ${r} 96%, transparent);
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    transform 0.05s ease;
                &:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${l};
                    transform: translateY(1px);
                }
            }
        }
        .calendar {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
            li {
                display: grid;
                grid-template-columns: 120px 1fr auto;
                gap: 8px;
                padding: 10px 12px;
                border: 1px solid ${t};
                border-radius: 10px;
                background: color-mix(in oklab, ${r} 96%, transparent);
                span {
                    font-weight: 600;
                }
                em {
                    color: ${h};
                    font-style: normal;
                }
                strong {
                    color: ${n};
                }
            }
            .note {
                margin-top: 10px;
                color: ${h};
            }
        }
    `,Activity:c.div`
        background: ${r};
        border: 1px solid ${t};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${m};
        .panelHead {
            margin-bottom: 8px;
        }
        ol {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        li {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 12px;
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
            time {
                color: ${h};
            }
            p {
                margin: 0;
            }
        }
    `,Rates:c.div`
        background: ${r};
        border: 1px solid ${t};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${m};
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .panelActions button {
            border: 1px solid ${t};
            background: ${S};
            color: ${n};
            padding: 8px 10px;
            border-radius: 10px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                transform 0.05s ease;
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            svg {
                position: relative;
                top: 1px;
            }
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${t};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px 12px;
            border-bottom: 1px solid ${t};
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${r};
            color: ${n};
            z-index: 1;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${r} 92%, transparent);
        }
        .lnk {
            color: ${n};
            text-decoration: none;
            border-bottom: 1px dashed ${t};
            &:hover {
                color: ${a};
                border-color: ${a};
            }
        }
        .pill {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${t};
            background: color-mix(in oklab, ${r} 94%, transparent);
        }
        .pill.active {
            color: ${a};
            border-color: ${a};
        }
        td.go {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${t};
            border-radius: 999px;
            text-decoration: none;
            color: ${n};
            background: ${S};
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
        }
    `,Returns:c.div`
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions {
            display: flex;
            gap: 8px;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border: 1px solid ${t};
            border-radius: 999px;
            color: ${n};
            text-decoration: none;
            background: ${r};
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(4, minmax(220px, 1fr));
            gap: 12px;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(220px, 1fr));
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }
            .card {
                background: ${r};
                border: 1px solid ${t};
                border-radius: 14px;
                padding: 14px;
                box-shadow: ${m};
                .head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                h4 {
                    margin: 0;
                }
                .pill {
                    display: inline-flex;
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${t};
                }
                .pill.filed {
                    color: ${a};
                    border-color: ${a};
                }
                .body {
                    display: grid;
                    gap: 8px;
                    margin-bottom: 10px;
                }
                .row {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 8px;
                }
                .foot {
                    display: flex;
                    gap: 8px;
                }
                .linkBtn {
                    display: inline-flex;
                    align-items: center;
                    padding: 6px 10px;
                    border: 1px solid ${t};
                    border-radius: 999px;
                    text-decoration: none;
                    color: ${n};
                    &:hover {
                        border-color: ${a};
                        box-shadow: 0 0 0 3px ${l};
                    }
                }
            }
        }
    `,Exemptions:c.div`
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions button {
            border: 1px solid ${t};
            background: ${r};
            color: ${n};
            padding: 8px 10px;
            border-radius: 10px;
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${t};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px 12px;
            border-bottom: 1px solid ${t};
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${r};
            color: ${n};
            z-index: 1;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${r} 92%, transparent);
        }
        td.go {
            display: flex;
            gap: 8px;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${t};
            border-radius: 999px;
            text-decoration: none;
            color: ${n};
            background: color-mix(in oklab, ${r} 96%, transparent);
            &:hover {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${l};
            }
        }
    `,Settings:c.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(280px, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
        .panel {
            background: ${r};
            border: 1px solid ${t};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${m};
            .panelHead {
                margin-bottom: 10px;
            }
            .links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .links a {
                display: block;
                padding: 10px 12px;
                border: 1px solid ${t};
                border-radius: 10px;
                color: ${n};
                text-decoration: none;
                background: color-mix(in oklab, ${r} 96%, transparent);
                &:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${l};
                }
            }
        }
    `,Modal:c.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .scrim {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
        }
        .dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(520px, 92vw);
            background: ${r};
            border: 1px solid ${t};
            border-radius: 14px;
            box-shadow: ${m};
            padding: 16px;
            h3 {
                margin: 0 0 8px 0;
            }
            p {
                color: ${h};
                margin: 0 0 12px;
            }
            .actions {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
            }
            .actions button {
                border: 1px solid ${t};
                background: ${r};
                color: ${n};
                padding: 8px 12px;
                border-radius: 10px;
                &:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${l};
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
            .actions .primary {
            }
        }
    `},x={jurisdiction:"India",regime:"GST",lastUpdatedISO:"2025-10-04T15:38:20+05:30",lastFiledPeriod:"Q2 FY2025-26",lastFiledOnISO:"2025-10-03T12:15:10+05:30",totals:{taxCollected:"₹ 12,84,500.00",inputCredit:"₹ 4,12,300.00",netTaxPayable:"₹ 8,72,200.00",exemptTurnover:"₹ 1,34,000.00"}},A=[{code:"GST-000",name:"Zero Rated",type:"IGST",rate:"0%",effectiveFrom:"2024-04-01",effectiveTo:"",status:"Active"},{code:"GST-005",name:"Essential Goods",type:"CGST+SGST",rate:"5%",effectiveFrom:"2024-04-01",effectiveTo:"",status:"Active"},{code:"GST-012",name:"Standard (Lower)",type:"CGST+SGST",rate:"12%",effectiveFrom:"2023-10-01",effectiveTo:"",status:"Active"},{code:"GST-018",name:"Standard",type:"IGST",rate:"18%",effectiveFrom:"2023-04-01",effectiveTo:"",status:"Active"},{code:"GST-028",name:"Luxury & Sin Goods",type:"CGST+SGST",rate:"28%",effectiveFrom:"2022-04-01",effectiveTo:"",status:"Active"},{code:"EXEMPT",name:"Exempt Supplies",type:"N/A",rate:"Exempt",effectiveFrom:"2021-07-01",effectiveTo:"",status:"Active"}],L=[{hsn:"3004",description:"Prescription medicines (select)",note:"As notified"},{hsn:"4901",description:"Printed books",note:"Educational"},{hsn:"1006",description:"Rice (unbranded)",note:"As notified"}],O=[{period:"Apr 2025",form:"GSTR-1",status:"Filed",filedOnISO:"2025-05-10T10:02:30+05:30"},{period:"May 2025",form:"GSTR-3B",status:"Filed",filedOnISO:"2025-06-18T14:22:05+05:30"},{period:"Jun 2025",form:"GSTR-9 (Draft)",status:"Draft",filedOnISO:""},{period:"Q2 FY2025-26",form:"CMP-08",status:"Filed",filedOnISO:"2025-10-03T12:15:10+05:30"}],U=[{whenISO:"2025-10-04T15:38:20+05:30",text:"Rates reviewed and verified by Finance Admin"},{whenISO:"2025-09-28T11:05:02+05:30",text:"HSN-to-rate mapping updated (batch import)"},{whenISO:"2025-09-14T09:20:41+05:30",text:"GSTR-3B offsets validated against ledgers"},{whenISO:"2025-08-31T18:12:10+05:30",text:"Jurisdiction thresholds reconfirmed"}],B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(o){if(!o)return"";const d=new Date(o);return`${B[d.getDay()]} ${Y[d.getMonth()]} ${String(d.getDate()).padStart(2,"0")} ${d.getFullYear()}`}function v(o){if(!o)return"";const d=new Date(o),N=String(d.getHours()).padStart(2,"0"),b=String(d.getMinutes()).padStart(2,"0"),w=String(d.getSeconds()).padStart(2,"0");return`${y(o)} ${N}:${b}:${w}hrs`}const $="Demo only — action disabled",X=()=>{M();const[o,d]=j.useState("overview"),[N,b]=j.useState(!1),[w,T]=j.useState(!1),F=j.useRef(null),G=j.useMemo(()=>`${window.location.origin}/react-routes-theme/finance/taxes`,[]),E=async()=>{try{await navigator.clipboard.writeText(G),T(!0),setTimeout(()=>T(!1),1500)}catch{}},I=()=>{const i={summary:x,rates:A,exemptions:L,returns:O},g=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),R=URL.createObjectURL(g),u=document.createElement("a");u.href=R,u.download="taxes-export.json",document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(R)},P=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)};return e.jsxs(p.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(p.Header,{children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(H,{to:"/finance",className:"crumb",children:"Finance"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"here",children:"Taxes"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"ghost",onClick:E,title:"Copy deep link",children:[e.jsx(D,{})," ",e.jsx("span",{children:"Copy Link"}),w&&e.jsx("em",{className:"chip",children:"Copied"})]}),e.jsxs("button",{className:"ghost",onClick:I,title:"Export JSON snapshot",children:[e.jsx(z,{})," ",e.jsx("span",{children:"Export"})]}),e.jsxs("button",{className:"ghost",onClick:P,title:"Print section",children:[e.jsx(J,{})," ",e.jsx("span",{children:"Print"})]}),e.jsxs("button",{className:"primary",disabled:!0,title:$,children:[e.jsx(k,{})," ",e.jsx("span",{children:"New Rate"})]}),e.jsxs("button",{className:"danger",onClick:()=>b(!0),title:"Open confirm",children:[e.jsx(C,{})," ",e.jsx("span",{children:"Reset All Rates"})]})]})]}),e.jsxs(p.TopMeta,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Taxes"}),e.jsxs("p",{className:"muted",children:[x.jurisdiction," • ",x.regime," • Last updated ",v(x.lastUpdatedISO)]})]}),e.jsxs("div",{className:"right links",children:[e.jsxs(s,{to:"/finance/gst-returns",className:"link",children:["Returns ",e.jsx(f,{})]}),e.jsxs(s,{to:"/reports/gst",className:"link",children:["GST Report ",e.jsx(f,{})]}),e.jsxs(s,{to:"/settings/tax",className:"link",children:["Tax Settings ",e.jsx(f,{})]}),e.jsxs(s,{to:"/finance/ledgers",className:"link",children:["Ledgers ",e.jsx(f,{})]}),e.jsxs(s,{to:"/finance/journals",className:"link",children:["Journals ",e.jsx(f,{})]})]})]}),e.jsxs(p.Tabs,{children:[e.jsx("button",{className:o==="overview"?"active":"",onClick:()=>d("overview"),children:"Overview"}),e.jsx("button",{className:o==="rates"?"active":"",onClick:()=>d("rates"),children:"Rates"}),e.jsx("button",{className:o==="returns"?"active":"",onClick:()=>d("returns"),children:"Returns"}),e.jsx("button",{className:o==="exemptions"?"active":"",onClick:()=>d("exemptions"),children:"Exemptions"}),e.jsx("button",{className:o==="settings"?"active":"",onClick:()=>d("settings"),children:"Settings"})]}),e.jsxs("div",{id:"search-print-area",ref:F,children:[o==="overview"&&e.jsxs(e.Fragment,{children:[e.jsxs(p.Stats,{children:[e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:"Total Tax Collected"}),e.jsx("div",{className:"value",children:x.totals.taxCollected}),e.jsxs("p",{className:"sub",children:["Up to ",y(x.lastUpdatedISO)]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:"Input Tax Credit"}),e.jsx("div",{className:"value",children:x.totals.inputCredit}),e.jsx("p",{className:"sub",children:"Voucher verified"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:"Net Tax Payable"}),e.jsx("div",{className:"value",children:x.totals.netTaxPayable}),e.jsx("p",{className:"sub",children:"As per filings"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h4",{children:"Exempt Turnover"}),e.jsx("div",{className:"value",children:x.totals.exemptTurnover}),e.jsx("p",{className:"sub",children:"Disclosure ready"})]})]}),e.jsxs(p.GridTwo,{children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelHead",children:e.jsx("h3",{children:"Quick Links"})}),e.jsxs("div",{className:"linksList",children:[e.jsx(s,{to:"/invoices",className:"item",children:"Invoices"}),e.jsx(s,{to:"/invoices/credit-notes",className:"item",children:"Credit Notes"}),e.jsx(s,{to:"/receipts",className:"item",children:"Receipts"}),e.jsx(s,{to:"/reports/gst",className:"item",children:"GST: Summary"}),e.jsx(s,{to:"/reports/finance",className:"item",children:"Finance Report"}),e.jsx(s,{to:"/settings/tax",className:"item",children:"Configure Taxes"}),e.jsx(s,{to:"/tools/import-export",className:"item",children:"Import / Export"})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelHead",children:e.jsx("h3",{children:"Compliance Calendar"})}),e.jsxs("ul",{className:"calendar",children:[e.jsxs("li",{children:[e.jsx("span",{children:"GSTR-1"})," ",e.jsx("em",{children:"Monthly"})," ",e.jsx("strong",{children:"Due by 11th"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"GSTR-3B"})," ",e.jsx("em",{children:"Monthly"})," ",e.jsx("strong",{children:"Due by 20th"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"GSTR-9"})," ",e.jsx("em",{children:"Annually"})," ",e.jsx("strong",{children:"As per rule"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"CMP-08"})," ",e.jsx("em",{children:"Quarterly"})," ",e.jsx("strong",{children:"As per rule"})]})]}),e.jsxs("div",{className:"note",children:["Last filed: ",e.jsx("strong",{children:x.lastFiledPeriod})," on ",e.jsx("strong",{children:v(x.lastFiledOnISO)})]})]})]}),e.jsxs(p.Activity,{children:[e.jsx("div",{className:"panelHead",children:e.jsx("h3",{children:"Activity"})}),e.jsx("ol",{children:U.map((i,g)=>e.jsxs("li",{children:[e.jsx("time",{children:v(i.whenISO)}),e.jsx("p",{children:i.text})]},g))})]})]}),o==="rates"&&e.jsxs(p.Rates,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h3",{children:"Rates Catalogue"}),e.jsxs("div",{className:"panelActions",children:[e.jsxs("button",{disabled:!0,title:$,children:[e.jsx(k,{})," Add Rate"]}),e.jsxs("button",{onClick:()=>b(!0),title:"Open confirm",children:[e.jsx(C,{})," Reset All"]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Rate"}),e.jsx("th",{children:"Effective From"}),e.jsx("th",{children:"Effective To"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Navigate"})]})}),e.jsx("tbody",{children:A.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{to:"/settings/tax",className:"lnk",children:i.code})}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.type}),e.jsx("td",{children:i.rate}),e.jsx("td",{children:i.effectiveFrom?y(i.effectiveFrom):""}),e.jsx("td",{children:i.effectiveTo?y(i.effectiveTo):"—"}),e.jsx("td",{children:e.jsx("span",{className:`pill ${i.status.toLowerCase()}`,children:i.status})}),e.jsxs("td",{className:"go",children:[e.jsx(s,{to:"/reports/gst",className:"chipLink",children:"Report"}),e.jsx(s,{to:"/finance/ledgers",className:"chipLink",children:"Ledgers"}),e.jsx(s,{to:"/finance/journals",className:"chipLink",children:"Journals"})]})]},i.code))})]})})]}),o==="returns"&&e.jsxs(p.Returns,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h3",{children:"Returns"}),e.jsxs("div",{className:"panelActions",children:[e.jsx(s,{to:"/finance/gst-returns",className:"chipLink",children:"Open Returns"}),e.jsx(s,{to:"/reports/gst",className:"chipLink",children:"View GST Report"})]})]}),e.jsx("div",{className:"cards",children:O.map((i,g)=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h4",{children:i.form}),e.jsx("span",{className:`pill ${i.status.toLowerCase()}`,children:i.status})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Period"}),e.jsx("strong",{children:i.period})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Filed On"}),e.jsx("strong",{children:i.filedOnISO?v(i.filedOnISO):"—"})]})]}),e.jsxs("div",{className:"foot",children:[e.jsx(s,{to:"/finance/gst-returns",className:"linkBtn",children:"Open"}),e.jsx(s,{to:"/reports/gst",className:"linkBtn",children:"Report"})]})]},g))})]}),o==="exemptions"&&e.jsxs(p.Exemptions,{children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h3",{children:"Exemptions & HSN Mapping"}),e.jsx("div",{className:"panelActions",children:e.jsxs("button",{disabled:!0,title:$,children:[e.jsx(k,{})," Add Exemption"]})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Note"}),e.jsx("th",{children:"Navigate"})]})}),e.jsx("tbody",{children:L.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.hsn}),e.jsx("td",{children:i.description}),e.jsx("td",{children:i.note}),e.jsxs("td",{className:"go",children:[e.jsx(s,{to:"/products",className:"chipLink",children:"Products"}),e.jsx(s,{to:"/reports/gst",className:"chipLink",children:"GST Report"}),e.jsx(s,{to:"/settings/tax",className:"chipLink",children:"Settings"})]})]},i.hsn))})]})})]}),o==="settings"&&e.jsxs(p.Settings,{children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelHead",children:e.jsx("h3",{children:"Setup"})}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/settings/tax",children:"Tax Settings"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/numbering",children:"Document Numbering"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/currencies",children:"Currencies"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/notifications",children:"Notifications"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/webhooks",children:"Webhooks"})})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelHead",children:e.jsx("h3",{children:"Related"})}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(s,{to:"/invoices/credit-notes",children:"Credit Notes"})}),e.jsx("li",{children:e.jsx(s,{to:"/receipts",children:"Receipts"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/ledgers",children:"Ledgers"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/journals",children:"Journals"})}),e.jsx("li",{children:e.jsx(s,{to:"/reports/gst",children:"GST Reports"})})]})]})]})]}),N&&e.jsxs(p.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"tax-reset-title",children:[e.jsx("div",{className:"scrim",onClick:()=>b(!1)}),e.jsxs("div",{className:"dialog",children:[e.jsx("h3",{id:"tax-reset-title",children:"Reset All Rates?"}),e.jsx("p",{children:"This is a demo. No changes will be applied."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>b(!1),children:"Close"}),e.jsx("button",{className:"primary",disabled:!0,title:$,children:"Confirm"})]})]})]})]})};export{X as default};
