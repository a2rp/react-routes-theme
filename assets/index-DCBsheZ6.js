import{d as S,u as B,r as d,j as e,N as i}from"./index-LshBDmDj.js";import{B as j,d as n,b as T,a as P,C as p,D as A,E as w,k as b,y as M,m as I,G as C}from"./index-CyH35cVY.js";const t="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",l="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",m="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",R={Wrap:S.div`
        width: 100%;
        color: ${t};

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
        }
        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            .crumb {
                color: ${o};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            .crumb:hover {
                color: ${a};
                border-bottom-color: ${a};
            }
            .crumb.current {
                color: ${t};
                border-bottom: none;
                cursor: default;
            }
            .sep {
                opacity: 0.7;
            }
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${l};
                border: 1px solid ${r};
                color: ${t};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${m};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.05s ease;
            }
            button:hover {
                border-color: ${a};
                color: ${a};
            }
            button:active {
                transform: translateY(1px);
            }
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${l};
                border: 1px dashed ${r};
                color: ${o};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                color: ${a};
                border-color: ${a};
            }
        }

        .filters {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;
            .fy {
                color: ${o};
            }
            .pill {
                background: ${l};
                border: 1px solid ${r};
                color: ${t};
                padding: 2px 8px;
                border-radius: 999px;
                margin-left: 8px;
            }
            .periods {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .chip {
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid ${r};
                    background: ${l};
                    color: ${o};
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                }
                .chip:hover {
                    color: ${a};
                    border-color: ${a};
                }
                .chip.active {
                    color: ${a};
                    border-color: ${a};
                    background: color-mix(in oklab, ${a} 12%, transparent);
                }
                .chip:active {
                    transform: translateY(1px);
                }
            }
        }

        .summaryGrid {
            display: grid;
            gap: 12px;
            margin-bottom: 16px;
            grid-template-columns: repeat(4, minmax(240px, 1fr));
            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, minmax(220px, 1fr));
            }
            @media (max-width: 900px) {
                grid-template-columns: repeat(2, minmax(220px, 1fr));
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }

            .card {
                background: ${l};
                border: 1px solid ${r};
                border-radius: 14px;
                padding: 14px;
                box-shadow: ${m};
                display: grid;
                gap: 4px;
            }
            .label {
                color: ${o};
                font-weight: 600;
                letter-spacing: 0.3px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
            }
            .hint {
                color: ${o};
                font-size: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .inlineLink {
                color: ${o};
                text-decoration: none;
                border-bottom: 1px dotted ${r};
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .inlineLink:hover {
                color: ${a};
                border-bottom-color: ${a};
            }
        }

        .accordion {
            border: 1px solid ${r};
            border-radius: 12px;
            background: ${l};
            margin-bottom: 12px;
            box-shadow: ${m};
            .accHeader {
                width: 100%;
                display: flex;
                gap: 8px;
                align-items: center;
                padding: 12px 14px;
                background: transparent;
                border: none;
                color: ${t};
                text-align: left;
                cursor: pointer;
                border-bottom: 1px solid ${r};
                transition: color 0.2s ease, background 0.2s ease;
            }
            .accHeader:hover {
                color: ${a};
                background: color-mix(in oklab, ${a} 10%, transparent);
            }
            .accBody {
                padding: 12px 14px;
                display: grid;
                gap: 12px;
            }
            .twoCol {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            @media (max-width: 900px) {
                .twoCol {
                    grid-template-columns: 1fr;
                }
            }
            .panel {
                border: 1px solid ${r};
                background: color-mix(in oklab, ${l} 96%, transparent);
                border-radius: 10px;
                padding: 12px;
            }
            .panelTitle {
                font-weight: 700;
                margin-bottom: 8px;
            }
            .bulleted {
                padding-left: 18px;
                line-height: 1.9;
                color: ${o};
            }
        }

        .tableWrap {
            background: ${l};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${m};
            overflow: hidden;
            .tableTitle {
                font-weight: 700;
                padding: 12px 14px;
                border-bottom: 1px solid ${r};
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            .table thead th {
                text-align: left;
                padding: 10px 12px;
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${l} 98%, transparent);
                border-bottom: 1px solid ${r};
                color: ${a};
                z-index: 1;
            }
            .table tbody td {
                padding: 12px;
                border-top: 1px solid ${r};
                color: ${t};
            }
            .table tbody tr:hover {
                background: color-mix(in oklab, ${a} 6%, transparent);
            }
            .status {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 4px 8px;
                border: 1px solid ${r};
                border-radius: 999px;
                background: color-mix(in oklab, ${l} 96%, transparent);
            }
            .status[data-status="Filed"] {
                border-color: ${a};
                color: ${a};
            }
            .status[data-status="Pending"] {
                color: ${o};
            }
            .status[data-status="Overdue"] {
                color: ${t};
            }
            .acts {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }
            .smallLink {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                text-decoration: none;
                color: ${o};
                border-bottom: 1px dotted ${r};
            }
            .smallLink:hover {
                color: ${a};
                border-bottom-color: ${a};
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
        }

        .hintRow {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            a {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                color: ${o};
                text-decoration: none;
            }
            a:hover {
                color: ${a};
            }
        }

        .footerNav {
            position: sticky;
            bottom: 0;
            padding: 10px 0;
            background: color-mix(in oklab, ${l} 96%, transparent);
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            border-top: 1px solid ${r};
            margin-top: 14px;
            button {
                background: ${l};
                border: 1px solid ${r};
                color: ${t};
                padding: 6px 10px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover {
                color: ${a};
                border-color: ${a};
            }
        }
    `,Modal:S.div`
        .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .sheet {
            position: fixed;
            left: 50%;
            top: 8%;
            transform: translateX(-50%);
            width: min(720px, 94vw);
            background: ${l};
            border: 1px solid ${r};
            border-radius: 16px;
            box-shadow: ${m};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
            max-height: 84vh;
        }
        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${r};
        }
        .title {
            font-weight: 700;
        }
        .iconClose {
            background: transparent;
            border: 1px solid ${r};
            color: ${o};
            border-radius: 10px;
            padding: 6px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .iconClose:hover {
            color: ${a};
            border-color: ${a};
        }

        .body {
            padding: 14px;
            color: ${t};
        }
        .body .bulleted {
            padding-left: 18px;
            color: ${o};
            line-height: 1.9;
        }

        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${r};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .foot button {
            background: ${l};
            border: 1px solid ${r};
            color: ${t};
            padding: 8px 12px;
            border-radius: 10px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .foot button:hover {
            border-color: ${a};
            color: ${a};
        }
    `},E=h=>{try{const c=new Date(h),v=c.toLocaleTimeString("en-GB",{hour12:!1});return`${c.toDateString()} ${v}hrs`}catch{return h}},_="2025-26",f=[{code:"2025-04",label:"Apr 2025"},{code:"2025-05",label:"May 2025"},{code:"2025-06",label:"Jun 2025"},{code:"2025-07",label:"Jul 2025"},{code:"2025-08",label:"Aug 2025"},{code:"2025-09",label:"Sep 2025"}],J=[{id:"RET-APR-1",period:"Apr 2025",type:"GSTR-1",dueDateLabel:"Sat May 10 2025",filedOnLabel:"Mon May 12 2025 11:04:20hrs",arn:"AA2704251234567",status:"Filed",links:{summary:"/reports/gst",invoices:"/invoices",drill:"/reports/sales"}},{id:"RET-APR-3B",period:"Apr 2025",type:"GSTR-3B",dueDateLabel:"Tue May 20 2025",filedOnLabel:"Wed May 21 2025 15:30:05hrs",arn:"BB2704257654321",status:"Filed",links:{summary:"/reports/finance",invoices:"/invoices",drill:"/finance/ledgers"}},{id:"RET-AUG-1",period:"Aug 2025",type:"GSTR-1",dueDateLabel:"Thu Sep 11 2025",filedOnLabel:"Fri Sep 12 2025 09:12:41hrs",arn:"CC2708251122334",status:"Filed",links:{summary:"/reports/gst",invoices:"/invoices",drill:"/reports/sales"}},{id:"RET-SEP-1",period:"Sep 2025",type:"GSTR-1",dueDateLabel:"Sat Oct 11 2025",filedOnLabel:null,arn:"-",status:"Pending",links:{summary:"/reports/gst",invoices:"/invoices",drill:"/reports/sales"}},{id:"RET-SEP-3B",period:"Sep 2025",type:"GSTR-3B",dueDateLabel:"Mon Oct 20 2025",filedOnLabel:null,arn:"-",status:"Pending",links:{summary:"/reports/finance",invoices:"/invoices",drill:"/finance/ledgers"}}],W=[{key:"gstr1Docs",label:"GSTR-1: Docs",value:"154",hint:"B2B + B2C + CDN + EXP",link:"/reports/gst"},{key:"taxableValue",label:"Taxable Value",value:"₹ 42,18,500",hint:"Outward supplies (net)",link:"/reports/sales"},{key:"outputTax",label:"Output Tax",value:"₹ 7,59,330",hint:"IGST + CGST + SGST",link:"/finance/ledgers"},{key:"itc",label:"ITC Available",value:"₹ 3,06,900",hint:"3B - Table 4(A)",link:"/reports/finance"},{key:"netPayable",label:"Net Payable",value:"₹ 4,52,430",hint:"After set-off",link:"/finance/journals"},{key:"eWay",label:"e-Way Bills",value:"23",hint:"Linked to invoices",link:"/shipments"},{key:"returnsFiled",label:"Returns Filed",value:"3 / 5",hint:"FY 2025-26 so far",link:"/reports/gst"},{key:"lastSync",label:"Last Sync",value:E(globalThis.__APP_COMMIT_ISO__||globalThis.__APP_BUILD_ISO__||new Date().toISOString()),hint:"Build/commit time",link:"/changelog"}],Y=()=>{const h=B(),[c,v]=d.useState(f[f.length-1].code),[$,L]=d.useState(!0),[N,F]=d.useState(!0),[y,g]=d.useState(null),x=d.useMemo(()=>{var s;return((s=f.find(G=>G.code===c))==null?void 0:s.label)||""},[c]),O=d.useMemo(()=>J.filter(s=>s.period===x||x===""),[x]),k=d.useCallback(s=>{g({title:s,message:"This is a display-only demo. Actions like filing, downloading JSON, or e-invoice pushes are disabled."})},[]),D=d.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),300)}},[]),u=s=>h(s);return e.jsxs(R.Wrap,{children:[e.jsxs("div",{className:"topbar",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(i,{to:"/home",className:"crumb",children:"Home"}),e.jsx(j,{className:"sep"}),e.jsx(i,{to:"/finance",className:"crumb",children:"Finance"}),e.jsx(j,{className:"sep"}),e.jsx("span",{className:"crumb current","aria-current":"page",children:"GST Returns"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:()=>k("File Return"),children:[e.jsx(n,{})," File Return"]}),e.jsxs("button",{onClick:()=>k("Download GSTR-1 JSON"),children:[e.jsx(T,{})," GSTR-1 JSON"]}),e.jsxs("button",{onClick:()=>k("Download GSTR-3B JSON"),children:[e.jsx(T,{})," GSTR-3B JSON"]}),e.jsxs("button",{onClick:D,children:[e.jsx(P,{})," Print Summary"]})]})]}),e.jsxs("div",{className:"quicklinks",children:[e.jsxs(i,{to:"/finance/taxes",children:[e.jsx(p,{})," Taxes"]}),e.jsxs(i,{to:"/finance/ledgers",children:[e.jsx(p,{})," Ledgers"]}),e.jsxs(i,{to:"/finance/journals",children:[e.jsx(p,{})," Journals"]}),e.jsxs(i,{to:"/invoices",children:[e.jsx(p,{})," Invoices"]}),e.jsxs(i,{to:"/reports/gst",children:[e.jsx(p,{})," GST Report"]}),e.jsxs(i,{to:"/reports/sales",children:[e.jsx(p,{})," Sales Report"]}),e.jsxs(i,{to:"/settings/tax",children:[e.jsx(p,{})," Tax Settings"]})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"fy",children:["FY ",e.jsx("span",{className:"pill",children:_})]}),e.jsx("div",{className:"periods",children:f.map(s=>e.jsx("button",{onClick:()=>v(s.code),className:s.code===c?"chip active":"chip","aria-pressed":s.code===c,children:s.label},s.code))})]}),e.jsx("div",{className:"summaryGrid",children:W.map(s=>e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"value",children:s.value}),e.jsxs("div",{className:"hint",children:[s.hint," ",e.jsxs(i,{to:s.link,className:"inlineLink",children:[e.jsx(A,{})," open"]})]})]},s.key))}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accHeader",onClick:()=>L(s=>!s),children:[$?e.jsx(w,{}):e.jsx(j,{})," GSTR-1 — Outward Supplies (",x,")"]}),$&&e.jsxs("div",{className:"accBody",children:[e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelTitle",children:"Document Types"}),e.jsxs("ul",{className:"bulleted",children:[e.jsx("li",{children:"B2B, B2C (Large/Small), Exports (With/Without tax)"}),e.jsx("li",{children:"Credit/Debit Notes"}),e.jsx("li",{children:"CDNR/CDNUR"}),e.jsx("li",{children:"Nil/Exempted/Non-GST"})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelTitle",children:"Cross-checks"}),e.jsxs("ul",{className:"bulleted",children:[e.jsx("li",{children:"Taxable value vs Tax summations"}),e.jsx("li",{children:"HSN summary presence"}),e.jsx("li",{children:"Place of supply distribution"}),e.jsx("li",{children:"e-Way bill coverage"})]})]})]}),e.jsxs("div",{className:"hintRow",children:[e.jsxs(i,{to:"/reports/gst",children:[e.jsx(b,{})," View detailed GST report"]}),e.jsxs(i,{to:"/invoices",children:[e.jsx(b,{})," Open invoices"]}),e.jsxs(i,{to:"/shipments",children:[e.jsx(b,{})," Linked shipments"]})]})]})]}),e.jsxs("div",{className:"accordion",children:[e.jsxs("button",{className:"accHeader",onClick:()=>F(s=>!s),children:[N?e.jsx(w,{}):e.jsx(j,{})," GSTR-3B — Summary & Liability (",x,")"]}),N&&e.jsxs("div",{className:"accBody",children:[e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelTitle",children:"Liability Snapshot"}),e.jsxs("ul",{className:"bulleted",children:[e.jsx("li",{children:"Outward tax by section (3.1(a) to 3.1(e))"}),e.jsx("li",{children:"Inter-state supplies to unregistered/comp/ UIN holders"}),e.jsx("li",{children:"Interest & late fee (if applicable)"})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panelTitle",children:"ITC & Set-off View"}),e.jsxs("ul",{className:"bulleted",children:[e.jsx("li",{children:"ITC available, reversed, net ITC (Table 4)"}),e.jsx("li",{children:"Cash/Credit ledger utilization"}),e.jsx("li",{children:"Rounding and carry forward (display-only)"})]})]})]}),e.jsxs("div",{className:"hintRow",children:[e.jsxs(i,{to:"/finance/ledgers",children:[e.jsx(b,{})," Open ledgers"]}),e.jsxs(i,{to:"/finance/journals",children:[e.jsx(b,{})," Journal entries"]}),e.jsxs(i,{to:"/reports/finance",children:[e.jsx(b,{})," Finance report"]})]})]})]}),e.jsxs("div",{className:"tableWrap",children:[e.jsxs("div",{className:"tableTitle",children:["Returns — ",x]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{children:"Return"}),e.jsx("th",{children:"Due Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Filed On"}),e.jsx("th",{children:"ARN"}),e.jsx("th",{children:"Navigate"})]})}),e.jsx("tbody",{children:O.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.period}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.dueDateLabel}),e.jsx("td",{children:e.jsxs("span",{className:"status","data-status":s.status,children:[s.status==="Filed"&&e.jsx(M,{"aria-hidden":"true"}),s.status==="Pending"&&e.jsx(I,{"aria-hidden":"true"}),s.status==="Overdue"&&e.jsx(C,{"aria-hidden":"true"}),e.jsx("span",{children:s.status})]})}),e.jsx("td",{children:s.filedOnLabel||"-"}),e.jsx("td",{className:"mono",children:s.arn}),e.jsxs("td",{className:"acts",children:[e.jsxs(i,{to:s.links.summary,className:"smallLink",children:[e.jsx(n,{})," Summary"]}),e.jsxs(i,{to:s.links.invoices,className:"smallLink",children:[e.jsx(n,{})," Invoices"]}),e.jsxs(i,{to:s.links.drill,className:"smallLink",children:[e.jsx(n,{})," Drill"]})]})]},s.id))})]})]})]}),e.jsxs("div",{className:"footerNav",children:[e.jsxs("button",{onClick:()=>u("/reports/gst"),children:[e.jsx(n,{})," Reports · GST"]}),e.jsxs("button",{onClick:()=>u("/reports/finance"),children:[e.jsx(n,{})," Reports · Finance"]}),e.jsxs("button",{onClick:()=>u("/invoices"),children:[e.jsx(n,{})," Invoices"]}),e.jsxs("button",{onClick:()=>u("/finance/taxes"),children:[e.jsx(n,{})," Taxes"]}),e.jsxs("button",{onClick:()=>u("/settings/print-templates"),children:[e.jsx(n,{})," Print Templates"]})]}),y&&e.jsxs(R.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:[e.jsx("div",{className:"backdrop",onClick:()=>g(null)}),e.jsxs("div",{className:"sheet",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"title",id:"demo-title",children:y.title}),e.jsx("button",{className:"iconClose",onClick:()=>g(null),"aria-label":"Close",children:e.jsx(C,{})})]}),e.jsxs("div",{className:"body",children:[e.jsx("p",{children:y.message}),e.jsxs("ul",{className:"bulleted",children:[e.jsx("li",{children:"Browse summaries via the links above."}),e.jsxs("li",{children:["Use ",e.jsx(i,{to:"/reports/gst",children:"GST Report"})," for a period-wise overview."]}),e.jsxs("li",{children:["Jump to ",e.jsx(i,{to:"/finance/ledgers",children:"Ledgers"})," or ",e.jsx(i,{to:"/finance/journals",children:"Journals"})," for accounting view."]})]})]}),e.jsx("div",{className:"foot",children:e.jsx("button",{onClick:()=>g(null),children:"Got it"})})]})]}),e.jsx("style",{children:`
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
      `})]})};export{Y as default};
