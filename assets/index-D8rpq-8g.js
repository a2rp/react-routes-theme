import{d as S,u as T,r as g,j as e,N as R}from"./index-BpMGcZ_2.js";const x="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",y="var(--card, #111318)",m="var(--border, #23262d)",n="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",L="var(--radius, 16px)",E={Page:S.div`
        padding: 18px 0 60px;
        color: ${x};

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 14px 16px;
            margin-bottom: 16px;

            .l h1 {
                font-size: 22px;
                letter-spacing: 0.4px;
            }
            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                margin-top: 6px;
            }
            .breadcrumbs a {
                color: ${c};
            }
            .breadcrumbs .current {
                color: ${x};
            }
            .meta {
                margin-top: 6px;
                display: flex;
                gap: 8px;
                color: ${c};
                font-size: 12px;
            }

            .actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .btnPrimary,
            .btnGhost,
            .btnDisabled {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${m};
                background: ${y};
                color: ${x};
                font-weight: 600;
                transition: background 0.25s, color 0.25s, border-color 0.25s,
                    box-shadow 0.25s, transform 0.08s;
            }
            .btnPrimary:hover {
                border-color: ${n};
                color: ${n};
                box-shadow: 0 0 0 3px ${w};
            }
            .btnGhost {
                opacity: 0.92;
            }
            .btnGhost:hover {
                border-color: ${n};
                color: ${n};
            }
            .btnDisabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }
        }

        .kpis {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(4, minmax(160px, 1fr));
            margin-bottom: 16px;

            .kpi {
                padding: 14px 16px;
            }
            .kpi .label {
                color: ${c};
                font-size: 12px;
            }
            .kpi .value {
                font-size: 18px;
                margin-top: 2px;
                letter-spacing: 0.3px;
            }
        }

        .toolbar.card {
            padding: 12px 14px;
            margin-bottom: 16px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;

            .filters {
                display: grid;
                grid-template-columns: 1.2fr 1fr auto;
                gap: 12px;
            }
            .field label {
                display: block;
                font-size: 12px;
                color: ${c};
                margin-bottom: 6px;
            }
            .types .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .chip {
                border: 1px solid ${m};
                padding: 6px 10px;
                border-radius: 999px;
                color: ${x};
                background: color-mix(in oklab, ${n} 8%, transparent);
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s;
            }
            .chip.active {
                border-color: ${n};
                color: ${n};
                box-shadow: 0 0 0 3px ${w};
            }
            .switch {
                display: inline-flex;
                gap: 8px;
                align-items: center;
            }
            .context {
                display: grid;
                grid-template-columns: repeat(4, minmax(160px, auto));
                gap: 16px;
            }
            .context .muted {
                color: ${c};
                font-size: 12px;
            }
        }

        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 2fr 1fr;
        }

        .tableWrap {
            padding: 0;
            overflow: hidden;
        }
        .tableWrap.dense table.listing td {
            padding-top: 6px;
            padding-bottom: 6px;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${m};
        }
        .tableHead .muted {
            color: ${c};
            font-size: 12px;
        }

        .tableScroller {
            overflow: auto;
            max-height: 70vh;
        }
        .tableScroller::-webkit-scrollbar {
            height: 12px;
            width: 12px;
        }
        .tableScroller::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #3a3a3a, #666);
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
        }

        table.listing {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            thead th {
                position: sticky;
                top: 0;
                background: ${y};
                z-index: 1;
                border-bottom: 1px solid ${m};
                text-align: left;
                padding: 10px 12px;
                color: ${n};
            }
            tbody td {
                border-bottom: 1px solid ${m};
                padding: 10px 12px;
                vertical-align: top;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
            .num {
                text-align: right;
                font-variant-numeric: tabular-nums;
            }
            .desc {
                color: ${x};
                opacity: 0.95;
            }
        }

        .linkish {
            display: inline;
            padding: 0;
            margin: 0;
            border: 0;
            background: transparent;
            color: ${x};
            cursor: pointer;
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s, border-color 0.2s;
        }
        .linkish:hover {
            color: ${n};
            border-color: ${n};
        }
        .linkish:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${w};
            border-radius: 4px;
        }

        .side {
            padding: 14px 16px;
            h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .kv {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 8px 12px;
                margin-bottom: 12px;
            }
            .kv .k {
                color: ${c};
            }
            .kv .v {
                color: ${x};
            }
            .hr {
                height: 1px;
                background: ${m};
                margin: 10px 0 14px;
            }
            .totals {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .totals .label {
                color: ${c};
                font-size: 12px;
            }
            .totals .value {
                font-size: 16px;
                margin-top: 2px;
            }
            .help {
                margin-top: 12px;
            }
            .muted {
                color: ${c};
                font-size: 12px;
            }
        }

        .card {
            background: ${y};
            border: 1px solid ${m};
            border-radius: ${L};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* make sure page expands full width naturally */
        width: 100%;
    `},r=(o,h)=>{const a=o instanceof Date?o:new Date(o),i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=N=>String(N).padStart(2,"0"),j=`${i[a.getDay()]} ${b[a.getMonth()]} ${u(a.getDate())} ${a.getFullYear()}`;return h?`${j} ${u(a.getHours())}:${u(a.getMinutes())}:${u(a.getSeconds())}hrs`:j},l=o=>new Intl.NumberFormat("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2}).format(o),t={org:"Bluewave Traders",baseCurrency:"INR",periodFrom:"2025-10-01",periodTo:"2025-10-05",preparedAt:new Date("2025-10-05T15:38:20+05:30"),totals:{debit:125e3,credit:125e3,entries:12}},I=[["2025-10-01","AC-1001","Cash & Bank","Asset","RCPT-1122","Customer receipt INV-2030",25e3,0],["2025-10-01","AC-1100","Accounts Receivable","Asset","INV-2031","Invoice to CUST-1001",0,42e3],["2025-10-01","AC-4000","Sales Revenue","Income","INV-2031","Sales income for order ORD-3456",0,42e3],["2025-10-01","AC-5000","COGS","Expense","JV-9001","Cost of goods for INV-2031",18e3,0],["2025-10-01","AC-1200","Inventory","Asset","JV-9001","COGS adjustment",0,18e3],["2025-10-02","AC-2000","Accounts Payable","Liability","BILL-7781","Vendor bill for purchase",52e3,0],["2025-10-02","AC-1200","Inventory","Asset","BILL-7781","Inventory received GRN-5544",0,52e3],["2025-10-03","AC-6100","Operating Expenses","Expense","JV-9099","Courier & packaging",3500,0],["2025-10-03","AC-1001","Cash & Bank","Asset","PMT-2203","Payment to vendor V-203",0,2e4],["2025-10-04","AC-1100","Accounts Receivable","Asset","RCPT-1125","Receipt against INV-2031",42e3,0],["2025-10-04","AC-1001","Cash & Bank","Asset","RCPT-1125","Bank deposit",0,42e3],["2025-10-05","AC-3000","Equity","Equity","JV-9105","Opening/Retained earnings adj.",0,0]],P=o=>{const h=["Date","Account Code","Account Name","Type","Reference","Description","Debit","Credit"].join(","),a=o.map(i=>[r(i.date),i.accountCode,i.accountName,i.type,i.ref,`"${(i.description||"").replace(/"/g,'""')}"`,l(i.debit),l(i.credit)].join(","));return[h,...a].join(`
`)},V=()=>{const o=T(),h=g.useRef(null),[a,i]=g.useState(""),[b,u]=g.useState("All"),[j,N]=g.useState(!1),k=g.useMemo(()=>I.map((s,d)=>({id:d+1,date:new Date(s[0]+"T10:00:00+05:30"),accountCode:s[1],accountName:s[2],type:s[3],ref:s[4],description:s[5],debit:s[6],credit:s[7]})),[]),f=g.useMemo(()=>{const s=a.trim().toLowerCase();return k.filter(d=>{const v=b==="All"?!0:d.type.toLowerCase()===b.toLowerCase();if(!s)return v;const p=`${d.accountCode} ${d.accountName} ${d.ref} ${d.description}`.toLowerCase();return v&&p.includes(s)})},[k,a,b]),C=()=>{const s=P(f),d=new Blob([s],{type:"text/csv;charset=utf-8;"}),v=URL.createObjectURL(d),p=document.createElement("a");p.href=v,p.download=`ledgers-${t.periodFrom}-to-${t.periodTo}.csv`,document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(v)},$=async()=>{const s=window.location.origin+"/react-routes-theme/finance/ledgers";try{await navigator.clipboard.writeText(s)}catch{}},A=()=>{h.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},D=s=>o(`/finance/ledgers/${encodeURIComponent(s)}`);return e.jsxs(E.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs("header",{className:"card pageHead",children:[e.jsxs("div",{className:"l",children:[e.jsx("h1",{children:"Ledgers"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(R,{to:"/finance",children:"Finance"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Ledgers"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Period: ",r(new Date(t.periodFrom))," — ",r(new Date(t.periodTo))]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Prepared: ",r(t.preparedAt,!0)]})]})]}),e.jsxs("div",{className:"r actions",children:[e.jsx("button",{className:"btnGhost",onClick:$,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Print current view",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:C,title:"Export current rows to CSV",children:"Export"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo mode",children:"New Journal"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo mode",children:"Import"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo mode",children:"Reconcile"})]})]}),e.jsxs("section",{className:"kpis",children:[e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Entries"}),e.jsx("div",{className:"value",children:t.totals.entries})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Total Debit"}),e.jsxs("div",{className:"value",children:["₹ ",l(t.totals.debit)]})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Total Credit"}),e.jsxs("div",{className:"value",children:["₹ ",l(t.totals.credit)]})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Base Currency"}),e.jsx("div",{className:"value",children:t.baseCurrency})]})]}),e.jsxs("section",{className:"toolbar card",children:[e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",value:a,onChange:s=>i(s.target.value),placeholder:"Find by account, reference, or description…","aria-label":"Search ledgers"})]}),e.jsxs("div",{className:"field types",children:[e.jsx("label",{children:"Type"}),e.jsx("div",{className:"chips",children:["All","Asset","Liability","Equity","Income","Expense"].map(s=>e.jsx("button",{className:`chip ${b===s?"active":""}`,onClick:()=>u(s),children:s},s))})]}),e.jsx("div",{className:"toggles",children:e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",checked:j,onChange:s=>N(s.target.checked)}),e.jsx("span",{children:"Dense rows"})]})})]}),e.jsxs("div",{className:"context",children:[e.jsxs("div",{children:[e.jsx("div",{className:"muted",children:"Organisation"}),e.jsx("div",{children:t.org})]}),e.jsxs("div",{children:[e.jsx("div",{className:"muted",children:"From"}),e.jsx("div",{children:r(new Date(t.periodFrom))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"muted",children:"To"}),e.jsx("div",{children:r(new Date(t.periodTo))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"muted",children:"As of"}),e.jsx("div",{children:r(new Date,!0)})]})]})]}),e.jsxs("section",{className:"grid",children:[e.jsxs("div",{className:`card tableWrap ${j?"dense":""}`,children:[e.jsxs("div",{className:"tableHead",children:[e.jsxs("div",{className:"left",children:["Showing ",e.jsx("strong",{children:f.length})," rows"]}),e.jsx("div",{className:"right",children:e.jsx("span",{className:"muted",children:"Tip: Click account to open its detail"})})]}),e.jsx("div",{className:"tableScroller",children:e.jsxs("table",{className:"listing",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{minWidth:120},children:"Date"}),e.jsx("th",{style:{minWidth:120},children:"Account Code"}),e.jsx("th",{style:{minWidth:220},children:"Account Name"}),e.jsx("th",{style:{minWidth:120},children:"Type"}),e.jsx("th",{style:{minWidth:140},children:"Reference"}),e.jsx("th",{children:"Description"}),e.jsx("th",{className:"num",style:{minWidth:140},children:"Debit"}),e.jsx("th",{className:"num",style:{minWidth:140},children:"Credit"})]})}),e.jsx("tbody",{children:f.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:e.jsx("button",{className:"linkish",onClick:()=>D(s.accountCode),title:"Open account detail",children:s.accountCode})}),e.jsx("td",{children:s.accountName}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.ref}),e.jsx("td",{className:"desc",children:s.description}),e.jsx("td",{className:"num",children:s.debit?"₹ "+l(s.debit):""}),e.jsx("td",{className:"num",children:s.credit?"₹ "+l(s.credit):""})]},s.id))})]})})]}),e.jsxs("aside",{className:"card side",id:"search-print-area",ref:h,children:[e.jsx("h3",{children:"Ledger Register"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Organisation"}),e.jsx("span",{className:"v",children:t.org})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Base Currency"}),e.jsx("span",{className:"v",children:t.baseCurrency})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"From"}),e.jsx("span",{className:"v",children:r(new Date(t.periodFrom))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"To"}),e.jsx("span",{className:"v",children:r(new Date(t.periodTo))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Prepared"}),e.jsx("span",{className:"v",children:r(t.preparedAt,!0)})]})]}),e.jsx("div",{className:"hr"}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Total Debit"}),e.jsxs("div",{className:"value",children:["₹ ",l(t.totals.debit)]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Total Credit"}),e.jsxs("div",{className:"value",children:["₹ ",l(t.totals.credit)]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Entries"}),e.jsx("div",{className:"value",children:t.totals.entries})]})]}),e.jsx("div",{className:"help",children:e.jsx("p",{className:"muted",children:"This is a display-only register for demo. Use the export above to download the current view."})})]})]})]})};export{V as default};
