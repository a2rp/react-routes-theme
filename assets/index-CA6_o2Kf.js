import{d as r,u as w,r as f,j as s,N as i,A as b,e as T,w as S,L as a,ad as $,ae as C,C as R,af as I,l as B}from"./index-DwhKQ_MC.js";const x="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",m="var(--card, #111318)",n="var(--border, #23262d)",l="var(--accent, #5aa9ff)",G="var(--accent-soft, rgba(90,169,255,0.15))",t={Page:r.div`
        width: 100%;
        color: ${x};
        display: flex;
        flex-direction: column;
        gap: 16px;

        a {
            color: ${x};
        }
        a:hover {
            color: ${l};
        }

        .card {
            background: ${m};
            border: 1px solid ${n};
            border-radius: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        button {
            background: ${m};
            color: ${x};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        button:hover {
            border-color: ${l};
            color: ${l};
        }
        button:active {
            transform: translateY(1px);
        }
        button.ghost {
            background: transparent;
        }
        button.linkish {
            padding: 0;
            border: none;
            background: transparent;
            color: ${l};
        }
    `,Topbar:r.div`
        position: sticky;
        top: 0;
        z-index: 10;
        background: var(--bg, #0d1117);
        border-bottom: 1px solid ${n};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 10px;

        h1 {
            font-size: 20px;
            letter-spacing: 0.3px;
            margin-bottom: 4px;
        }
        .left {
            display: flex;
            flex-direction: column;
        }
        .right {
            display: flex;
            gap: 8px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${d};
            a {
                color: ${d};
            }
            a:hover {
                color: ${l};
            }
            strong {
                color: ${x};
            }
        }
    `,Filters:r.div`
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .row {
            display: grid;
            grid-template-columns: repeat(5, minmax(160px, 1fr));
            gap: 12px;
        }
        label {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 12px;
            color: ${d};
        }
        select {
            background: ${m};
            color: ${x};
            border: 1px solid ${n};
            padding: 8px 10px;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        select:focus {
            border-color: ${l};
            box-shadow: 0 0 0 3px ${G};
        }

        .asof {
            align-self: center;
            color: ${d};
        }
        .asof span {
            color: ${x};
        }

        .quick {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .quick a {
            padding: 6px 10px;
            border: 1px solid ${n};
            border-radius: 8px;
        }
        .quick a:hover {
            border-color: ${l};
            color: ${l};
        }
    `,Kpis:r.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(240px, 1fr));
        gap: 12px;

        .kpi {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .kpi .label {
            color: ${d};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .kpi .meta {
            color: ${d};
            font-size: 12px;
        }
        .kpi .links {
            display: flex;
            gap: 10px;
            margin-top: 6px;
        }
        .kpi .links a {
            border-bottom: 1px dashed ${n};
        }
        .kpi .links a:hover {
            color: ${l};
            border-color: ${l};
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(240px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,StatusRow:r.div`
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${n};
            font-size: 12px;
        }
        .pill.ok {
            box-shadow: inset 0 0 0 1000px
                color-mix(in oklab, ${l} 12%, transparent);
        }
        .pill.warn {
            box-shadow: inset 0 0 0 1000px rgba(255, 196, 0, 0.12);
        }
        .pill.info {
            box-shadow: inset 0 0 0 1000px rgba(147, 197, 253, 0.12);
        }
        .spacer {
            flex: 1;
        }
    `,ThreeCol:r.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(280px, 1fr));
        gap: 12px;

        .panel {
            display: flex;
            flex-direction: column;
        }
        .panelHead {
            padding: 12px 12px 8px;
            border-bottom: 1px solid ${n};
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .panelBody {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .numRow {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .numRow .num {
            font-size: 18px;
            font-weight: 700;
            display: block;
        }
        .numRow .cap {
            color: ${d};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions a {
            padding: 6px 10px;
            border: 1px solid ${n};
            border-radius: 8px;
        }
        .actions a:hover {
            border-color: ${l};
            color: ${l};
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,TableBlock:r.div`
        padding: 10px;

        .head {
            padding: 4px 6px 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            h3 {
                font-size: 16px;
            }
            .links {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            .links a {
                border-bottom: 1px dashed ${n};
            }
            .links a:hover {
                color: ${l};
                border-color: ${l};
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: 8px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            position: sticky;
            top: 0;
            background: ${m};
            border-bottom: 1px solid ${n};
            color: ${l};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${l} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .links {
            display: inline-flex;
            gap: 10px;
            align-items: center;
        }
    `,Timeline:r.div`
        padding: 12px;

        h3 {
            margin-bottom: 10px;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 14px;
        }
        li {
            display: grid;
            grid-template-columns: 16px 1fr;
            align-items: start;
            gap: 10px;
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            margin-top: 6px;
            border: 2px solid ${n};
        }
        .dot.ok {
            background: color-mix(in oklab, ${l} 40%, transparent);
        }
        .dot.info {
            background: rgba(147, 197, 253, 0.4);
        }
        .dot.warn {
            background: rgba(255, 196, 0, 0.5);
        }
        .content .t {
            font-weight: 600;
        }
        .content .d {
            color: ${d};
            font-size: 12px;
            margin-top: 2px;
        }
        .content .links {
            display: flex;
            gap: 10px;
            margin-top: 6px;
        }
    `,QuickGrid:r.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        gap: 12px;

        .q {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .q .t {
            font-weight: 600;
        }
        .q .c {
            color: ${d};
            font-size: 12px;
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,ModalBackdrop:r.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:r.div`
        width: min(560px, 96vw);
        background: ${m};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        display: flex;
        flex-direction: column;

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 12px 8px;
            border-bottom: 1px solid ${n};
        }
        .body {
            padding: 12px;
            color: ${x};
        }
        .body p {
            margin-bottom: 8px;
        }
        .hints {
            color: ${d};
            font-size: 12px;
            margin-left: 18px;
        }
        .foot {
            padding: 12px;
            border-top: 1px solid ${n};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `},v=o=>{try{return new Date(o).toDateString()}catch{return o}},u=o=>{try{const c=new Date(o),p=c.toDateString(),h=c.toTimeString().slice(0,8);return`${p} ${h}hrs`}catch{return o}},D=()=>u(new Date().toISOString());function E({open:o,title:c,message:p,onClose:h}){return o?s.jsx(t.ModalBackdrop,{children:s.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[s.jsxs("div",{className:"head",children:[s.jsx("h4",{id:"confirm-title",children:c}),s.jsx("button",{onClick:h,className:"ghost","aria-label":"Close modal",children:"✕"})]}),s.jsxs("div",{className:"body",children:[s.jsx("p",{children:p}),s.jsxs("ul",{className:"hints",children:[s.jsxs("li",{children:[s.jsx(i,{to:"/tools/import-export",children:"Use Import / Export"})," to try file actions."]}),s.jsx("li",{children:"All critical actions are disabled in demo."})]})]}),s.jsx("div",{className:"foot",children:s.jsx("button",{onClick:h,children:"Close"})})]})}):null}function M(){const o=w(),[c,p]=f.useState({open:!1,title:"",message:""}),h=f.useMemo(()=>D(),[]),j=(e,g)=>p({open:!0,title:e,message:g}),N=()=>p({open:!1,title:"",message:""}),k=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),600)}},y=e=>{var g;try{(g=navigator.clipboard)==null||g.writeText(window.location.origin+e)}catch{}};return s.jsxs(t.Page,{id:"gst-report-page",children:[s.jsxs(t.Topbar,{children:[s.jsxs("div",{className:"left",children:[s.jsx("h1",{children:"GST Summary"}),s.jsxs("div",{className:"breadcrumbs",children:[s.jsx(i,{to:"/home",children:"Home"}),s.jsx("span",{children:"›"}),s.jsx(i,{to:"/reports",children:"Reports"}),s.jsx("span",{children:"›"}),s.jsx("strong",{children:"GST"})]})]}),s.jsxs("div",{className:"right",children:[s.jsxs("button",{onClick:()=>j("Export Disabled","This is a demo. File export is disabled."),title:"Export CSV",children:[s.jsx(b,{})," Export"]}),s.jsxs("button",{onClick:k,title:"Print this section",children:[s.jsx(T,{})," Print"]}),s.jsxs("button",{className:"ghost",onClick:()=>o("/finance/gst-returns"),title:"Open GST Returns",children:[s.jsx(S,{})," GST Returns"]})]})]}),s.jsxs(t.Filters,{className:"card",children:[s.jsxs("div",{className:"row",children:[s.jsxs("label",{children:["Period",s.jsxs("select",{disabled:!0,defaultValue:"2025-10",children:[s.jsx("option",{value:"2025-10",children:"Oct 2025"}),s.jsx("option",{value:"2025-09",children:"Sep 2025"}),s.jsx("option",{value:"2025-08",children:"Aug 2025"})]})]}),s.jsxs("label",{children:["FY",s.jsxs("select",{disabled:!0,defaultValue:"2025-2026",children:[s.jsx("option",{children:"2025-2026"}),s.jsx("option",{children:"2024-2025"}),s.jsx("option",{children:"2023-2024"})]})]}),s.jsxs("label",{children:["Branch",s.jsxs("select",{disabled:!0,defaultValue:"All",children:[s.jsx("option",{children:"All"}),s.jsx("option",{children:"HQ"}),s.jsx("option",{children:"Warehouse-A"}),s.jsx("option",{children:"Store-1"})]})]}),s.jsxs("label",{children:["GSTIN",s.jsxs("select",{disabled:!0,defaultValue:"27ABCDE1234Z5Z6",children:[s.jsx("option",{children:"27ABCDE1234Z5Z6"}),s.jsx("option",{children:"07ABCDE1234Z5Z6"})]})]}),s.jsxs("div",{className:"asof",children:["as of ",s.jsx("span",{children:h})]})]}),s.jsxs("div",{className:"quick",children:[s.jsx(a,{to:"/reports/gst",children:"Refresh"}),s.jsx(a,{to:"/reports/sales",children:"Sales Report"}),s.jsx(a,{to:"/invoices",children:"Invoices"}),s.jsx(a,{to:"/receipts",children:"Receipts"}),s.jsx(a,{to:"/finance/taxes",children:"Tax Settings"}),s.jsx(a,{to:"/tools/import-export",children:"Import / Export"})]})]}),s.jsxs("section",{id:"search-print-area",children:[s.jsxs(t.Kpis,{children:[s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"label",children:"Outward GST (GSTR-1)"}),s.jsx("div",{className:"value",children:"₹ 12,48,900"}),s.jsx("div",{className:"meta",children:"B2B + B2C + Exports"}),s.jsxs("div",{className:"links",children:[s.jsx(i,{to:"/reports/sales",children:"View Sales"}),s.jsx(i,{to:"/invoices",children:"Open Invoices"})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"label",children:"Input Tax Credit (ITC)"}),s.jsx("div",{className:"value",children:"₹ 3,82,450"}),s.jsx("div",{className:"meta",children:"Eligible ITC from purchases"}),s.jsxs("div",{className:"links",children:[s.jsx(i,{to:"/purchase-orders",children:"Purchase Orders"}),s.jsx(i,{to:"/vendors",children:"Vendors"})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"label",children:"Net GST Liability"}),s.jsx("div",{className:"value",children:"₹ 8,66,450"}),s.jsx("div",{className:"meta",children:"After ITC adjustments"}),s.jsxs("div",{className:"links",children:[s.jsx(i,{to:"/finance",children:"Finance"}),s.jsx(i,{to:"/finance/journals",children:"Journals"})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"label",children:"Payable Due"}),s.jsx("div",{className:"value",children:"₹ 8,66,450"}),s.jsxs("div",{className:"meta",children:["Due by ",s.jsx("span",{children:v("2025-10-20T00:00:00Z")})]}),s.jsxs("div",{className:"links",children:[s.jsx(i,{to:"/finance/gst-returns",children:"GST Returns"}),s.jsx(i,{to:"/reports/gst",children:"GST Summary"})]})]})]}),s.jsxs(t.StatusRow,{className:"card",children:[s.jsxs("div",{className:"pill ok",children:[s.jsx($,{})," GSTR-1 Prepared"]}),s.jsxs("div",{className:"pill warn",children:[s.jsx(C,{})," 2 Invoices Missing HSN"]}),s.jsxs("div",{className:"pill info",children:[s.jsx(R,{})," Reconciliation Pending"]}),s.jsx("div",{className:"spacer"}),s.jsxs("button",{onClick:()=>j("Filing Disabled","Filing actions are disabled in demo."),title:"File GSTR-3B",children:[s.jsx(I,{})," File GSTR-3B"]})]}),s.jsxs(t.ThreeCol,{children:[s.jsxs("div",{className:"panel card",children:[s.jsx("div",{className:"panelHead",children:"Outward Supplies (Sales)"}),s.jsxs("div",{className:"panelBody",children:[s.jsxs("div",{className:"numRow",children:[s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 9,21,500"}),s.jsx("span",{className:"cap",children:"B2B"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 2,98,400"}),s.jsx("span",{className:"cap",children:"B2C"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 29,000"}),s.jsx("span",{className:"cap",children:"Exports/SEZ"})]})]}),s.jsxs("div",{className:"actions",children:[s.jsx(i,{to:"/reports/sales",children:"Sales Report"}),s.jsx(i,{to:"/invoices",children:"Invoices"}),s.jsx(i,{to:"/sales/returns",children:"Sales Returns"})]})]})]}),s.jsxs("div",{className:"panel card",children:[s.jsx("div",{className:"panelHead",children:"Input Tax Credit (Purchases)"}),s.jsxs("div",{className:"panelBody",children:[s.jsxs("div",{className:"numRow",children:[s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 2,44,300"}),s.jsx("span",{className:"cap",children:"IGST"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 1,10,750"}),s.jsx("span",{className:"cap",children:"CGST"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"num",children:"₹ 27,400"}),s.jsx("span",{className:"cap",children:"SGST"})]})]}),s.jsxs("div",{className:"actions",children:[s.jsx(i,{to:"/purchase-orders",children:"Purchase Orders"}),s.jsx(i,{to:"/vendors",children:"Vendors"}),s.jsx(i,{to:"/inventory/batches",children:"Batches"})]})]})]}),s.jsxs("div",{className:"panel card",children:[s.jsx("div",{className:"panelHead",children:"Reconciliation"}),s.jsxs("div",{className:"panelBody",children:[s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:["2 invoices missing HSN — ",s.jsx(a,{to:"/invoices",children:"review"})]}),s.jsxs("li",{children:["1 supplier GSTIN unverified — ",s.jsx(a,{to:"/vendors",children:"check vendor"})]}),s.jsxs("li",{children:["3 e-way bills not linked — ",s.jsx(a,{to:"/shipments",children:"link shipment"})]})]}),s.jsxs("div",{className:"actions",children:[s.jsx(i,{to:"/finance/ledgers",children:"Ledgers"}),s.jsx(i,{to:"/admin/audit-log",children:"Audit Log"})]})]})]})]}),s.jsxs(t.TableBlock,{className:"card",children:[s.jsxs("div",{className:"head",children:[s.jsx("h3",{children:"Invoice Register — Outward"}),s.jsxs("div",{className:"links",children:[s.jsx(a,{to:"/invoices",children:"Open List"}),s.jsxs("button",{onClick:()=>j("Export Disabled","Exporting tables is disabled in demo."),children:[s.jsx(b,{})," Export"]})]})]}),s.jsx("div",{className:"tableWrap",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Invoice"}),s.jsx("th",{children:"Date"}),s.jsx("th",{children:"Customer"}),s.jsx("th",{children:"Place of Supply"}),s.jsx("th",{children:"Taxable"}),s.jsx("th",{children:"IGST"}),s.jsx("th",{children:"CGST"}),s.jsx("th",{children:"SGST"}),s.jsx("th",{children:"Total"}),s.jsx("th",{children:"Links"})]})}),s.jsx("tbody",{children:[{inv:"INV-2031",date:"2025-10-02T11:21:08Z",cust:"Medicare Pvt Ltd",pos:"MH",tx:"₹ 1,10,000",igst:"₹ 0",cgst:"₹ 9,900",sgst:"₹ 9,900",total:"₹ 1,29,800"},{inv:"INV-2032",date:"2025-10-03T06:40:12Z",cust:"Aster Hospital",pos:"KA",tx:"₹ 2,45,000",igst:"₹ 22,050",cgst:"₹ 0",sgst:"₹ 0",total:"₹ 2,67,050"},{inv:"INV-2033",date:"2025-10-03T10:14:44Z",cust:"Retail Walk-in",pos:"MH",tx:"₹ 18,500",igst:"₹ 0",cgst:"₹ 832",sgst:"₹ 832",total:"₹ 20,164"}].map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(i,{to:`/invoices/${e.inv}`,children:e.inv})}),s.jsx("td",{children:v(e.date)}),s.jsx("td",{children:e.cust}),s.jsx("td",{children:e.pos}),s.jsx("td",{className:"num",children:e.tx}),s.jsx("td",{className:"num",children:e.igst}),s.jsx("td",{className:"num",children:e.cgst}),s.jsx("td",{className:"num",children:e.sgst}),s.jsx("td",{className:"num",children:e.total}),s.jsxs("td",{className:"links",children:[s.jsx(a,{to:`/invoices/${e.inv}/print`,children:"Print"}),s.jsxs("button",{className:"linkish",onClick:()=>y(`/invoices/${e.inv}`),title:"Copy deep link",children:[s.jsx(B,{})," Copy"]})]})]},e.inv))})]})})]}),s.jsxs(t.TableBlock,{className:"card",children:[s.jsxs("div",{className:"head",children:[s.jsx("h3",{children:"Input Tax Credit — Purchases"}),s.jsxs("div",{className:"links",children:[s.jsx(a,{to:"/purchase-orders",children:"Purchases"}),s.jsxs("button",{onClick:()=>j("Export Disabled","Exporting tables is disabled in demo."),children:[s.jsx(b,{})," Export"]})]})]}),s.jsx("div",{className:"tableWrap",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Bill No"}),s.jsx("th",{children:"Date"}),s.jsx("th",{children:"Vendor"}),s.jsx("th",{children:"GSTIN"}),s.jsx("th",{children:"Taxable"}),s.jsx("th",{children:"IGST"}),s.jsx("th",{children:"CGST"}),s.jsx("th",{children:"SGST"}),s.jsx("th",{children:"Total"}),s.jsx("th",{children:"Links"})]})}),s.jsx("tbody",{children:[{bill:"BILL-5581",date:"2025-10-01T09:00:03Z",vendor:"Trinity Pharma",gstin:"27ABCDE1234Z5Z6",tx:"₹ 1,55,000",igst:"₹ 0",cgst:"₹ 13,950",sgst:"₹ 13,950",total:"₹ 1,82,900"},{bill:"BILL-5589",date:"2025-10-03T05:11:33Z",vendor:"Supreme Drugs",gstin:"07ABCDE1234Z5Z6",tx:"₹ 98,500",igst:"₹ 17,730",cgst:"₹ 0",sgst:"₹ 0",total:"₹ 1,16,230"}].map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:e.bill}),s.jsx("td",{children:v(e.date)}),s.jsx("td",{children:s.jsxs(i,{to:"/vendors",children:[" ",e.vendor," "]})}),s.jsx("td",{children:e.gstin}),s.jsx("td",{className:"num",children:e.tx}),s.jsx("td",{className:"num",children:e.igst}),s.jsx("td",{className:"num",children:e.cgst}),s.jsx("td",{className:"num",children:e.sgst}),s.jsx("td",{className:"num",children:e.total}),s.jsxs("td",{className:"links",children:[s.jsx(a,{to:"/vendors",children:"Vendor"}),s.jsx(a,{to:"/inventory/batches",children:"Batches"})]})]},e.bill))})]})})]}),s.jsxs(t.Timeline,{className:"card",children:[s.jsx("h3",{children:"Filing Timeline"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("div",{className:"dot ok"}),s.jsxs("div",{className:"content",children:[s.jsx("div",{className:"t",children:"GSTR-1 prepared"}),s.jsx("div",{className:"d",children:u("2025-10-05T06:18:11Z")}),s.jsxs("div",{className:"links",children:[s.jsx(a,{to:"/reports/sales",children:"Sales"}),s.jsx(a,{to:"/invoices",children:"Invoices"})]})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:"dot info"}),s.jsxs("div",{className:"content",children:[s.jsx("div",{className:"t",children:"Reconciliation review"}),s.jsx("div",{className:"d",children:u("2025-10-07T10:01:22Z")}),s.jsxs("div",{className:"links",children:[s.jsx(a,{to:"/finance/ledgers",children:"Ledgers"}),s.jsx(a,{to:"/admin/audit-log",children:"Audit log"})]})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:"dot warn"}),s.jsxs("div",{className:"content",children:[s.jsx("div",{className:"t",children:"2 invoices missing HSN"}),s.jsx("div",{className:"d",children:u("2025-10-08T08:42:00Z")}),s.jsx("div",{className:"links",children:s.jsx(a,{to:"/invoices",children:"Fix invoices"})})]})]})]})]}),s.jsx(t.QuickGrid,{children:[{to:"/reports",title:"Reports Home",caption:"All reports"},{to:"/reports/sales",title:"Sales Report",caption:"GSTR-1 basis"},{to:"/finance/gst-returns",title:"GST Returns",caption:"Filings & challans"},{to:"/invoices",title:"Invoices",caption:"Outward supplies"},{to:"/purchase-orders",title:"Purchases",caption:"ITC sources"},{to:"/inventory/batches",title:"Batches",caption:"HSN & expiry"},{to:"/tools/import-export",title:"Import / Export",caption:"Data snapshots"},{to:"/settings/tax",title:"Tax Settings",caption:"Rates & codes"}].map(e=>s.jsxs(i,{to:e.to,className:"q card",children:[s.jsx("div",{className:"t",children:e.title}),s.jsx("div",{className:"c",children:e.caption})]},e.to))})]}),s.jsx("style",{children:`
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
      `}),s.jsx(E,{open:c.open,title:c.title,message:c.message,onClose:N})]})}export{M as default};
