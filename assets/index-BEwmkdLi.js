import{d as u,u as R,r as N,j as e,N as $}from"./index-BM8H5dnP.js";const d="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",l="var(--card, #111318)",t="var(--border, #23262d)",a="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",I="var(--danger, #ef4444)",y="var(--radius, 16px)",m={Page:u.div`
        padding: 20px 0 64px;
        color: ${d};

        .muted {
            color: ${c};
        }

        .breadcrumbs {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${c};
            }
            .current {
                color: ${d};
            }
        }
    `,Header:u.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }

        .meta {
            margin-top: 6px;
            color: ${c};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnGhost,
        .btnPrimary,
        .btnDisabled {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${t};
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary {
            border-color: ${a};
            color: ${a};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Metrics:u.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        @media (min-width: 1000px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .metric {
            padding: 14px;
            border: 1px solid ${t};
            border-radius: ${y};
            background: ${l};
            box-shadow: var(--shadow);
        }
        .k {
            color: ${c};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 4px;
        }
        .s {
            margin-top: 2px;
            color: ${c};
            font-size: 12px;
        }
    `,Tools:u.section`
        padding: 12px 14px;
        margin-top: 16px;
        margin-bottom: 12px;
        border: 1px solid ${t};
        border-radius: ${y};
        background: ${l};

        .row {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }

        .search {
            flex: 1 1 280px;
            min-width: 260px;
        }
        .search input {
            width: 100%;
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${t};
            background: ${l};
            color: ${d};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${c};
        }
        .search input:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${f};
            outline: none;
        }

        .quick {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .quick .label {
            color: ${c};
            font-size: 12px;
            margin-right: 2px;
        }
        .chip {
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${l};
            color: ${d};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${f};
        }
    `,TableWrap:u.section`
        padding: 0;
        border: 1px solid ${t};
        border-radius: ${y};
        background: ${l};
        overflow: hidden;

        .tableMeta {
            padding: 12px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${t};
            color: ${c};
            font-size: 12px;
            .legend {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                display: inline-block;
                border: 1px solid ${t};
            }
            .dot.open {
                background: color-mix(in oklab, ${a} 40%, transparent);
            }
            .dot.adjusted {
                background: color-mix(in oklab, ${a} 20%, transparent);
            }
            .dot.void {
                background: color-mix(in oklab, ${I} 30%, transparent);
            }
        }

        .tableScroller {
            overflow: auto;
        }

        table.grid {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            line-height: 1.6;
            th,
            td {
                padding: 12px;
                border-bottom: 1px solid ${t};
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${l};
                z-index: 1;
                text-align: left;
            }
            th.right,
            td.right {
                text-align: right;
            }

            tbody tr:hover {
                background: color-mix(in oklab, ${a} 8%, transparent);
            }
            tbody tr.empty:hover {
                background: transparent;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .status {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 999px;
                font-weight: 600;
                font-size: 12px;
                border: 1px solid ${t};
                background: color-mix(in oklab, ${a} 10%, transparent);
                color: ${d};
            }
            .status.adjusted {
                background: color-mix(in oklab, ${a} 6%, transparent);
            }
            .status.void {
                background: color-mix(in oklab, ${I} 8%, transparent);
                border-color: color-mix(in oklab, ${I} 30%, ${t});
            }

            .actions {
                white-space: nowrap;
            }
            .link {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                color: ${a};
                text-decoration: none;
                font-weight: 600;
            }
            .link:hover {
                text-decoration: underline;
            }
            .link.disabled {
                opacity: 0.5;
                cursor: not-allowed;
                text-decoration: none;
            }
        }

        .emptyWrap {
            text-align: center;
            padding: 30px 10px;
        }
        .emptyWrap .title {
            font-weight: 700;
        }
        .emptyWrap .sub {
            color: ${c};
            margin-top: 6px;
        }
    `,Overlay:u.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:u.div`
        width: min(520px, 92vw);
        border-radius: ${y};
        border: 1px solid ${t};
        background: ${l};
        color: ${d};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${t};
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
            border-top: 1px solid ${t};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${t};
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${f};
        }
    `},D=(o,p=!1)=>{const r=o instanceof Date?o:new Date(o),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=k=>String(k).padStart(2,"0"),v=`${h[r.getDay()]} ${j[r.getMonth()]} ${n(r.getDate())} ${r.getFullYear()}`;return p?`${v} ${n(r.getHours())}:${n(r.getMinutes())}:${n(r.getSeconds())}hrs`:v},V=o=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(o),T=[{id:"CN-2101",invoiceId:"INV-2031",customer:"Bluewave Traders",date:"2025-10-04T15:38:20+05:30",reason:"Damaged goods",status:"open",amount:12450,balance:12450,user:"Arjun"},{id:"CN-2102",invoiceId:"INV-2032",customer:"Sapphire Retail",date:"2025-09-28T11:20:45+05:30",reason:"Short supply",status:"adjusted",amount:5600,balance:0,user:"Nikita"},{id:"CN-2103",invoiceId:"INV-2033",customer:"Nimbus Wholesale",date:"2025-09-22T09:10:30+05:30",reason:"Expired stock",status:"void",amount:3100,balance:3100,user:"Karan"},{id:"CN-2104",invoiceId:"INV-2070",customer:"Vertex Pharmaceuticals",date:"2025-09-15T14:05:10+05:30",reason:"Rate difference",status:"adjusted",amount:9900,balance:0,user:"Pooja"},{id:"CN-2105",invoiceId:"INV-2080",customer:"Northwind Clinic",date:"2025-09-12T16:15:33+05:30",reason:"Wrong item delivered",status:"open",amount:4425,balance:4425,user:"Ameya"},{id:"CN-2106",invoiceId:"INV-2091",customer:"Greenbridge Chemists",date:"2025-09-10T12:30:00+05:30",reason:"Partial return",status:"open",amount:2750,balance:2750,user:"Isha"},{id:"CN-2107",invoiceId:"INV-2100",customer:"Aster Hospitals",date:"2025-09-06T10:08:10+05:30",reason:"Order cancelled",status:"void",amount:15250,balance:15250,user:"Arjun"},{id:"CN-2108",invoiceId:"INV-2105",customer:"Medico Hub",date:"2025-09-01T18:41:05+05:30",reason:"Promotional credit",status:"adjusted",amount:2300,balance:0,user:"Nikita"}],g={openCount:3,adjustedCount:3,voidCount:2,totalValue:"₹68,775.00",lastSync:"Sat Oct 04 2025 15:38:20hrs"},O=({open:o,onClose:p})=>o?e.jsx(m.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(m.Modal,{className:"card",onMouseDown:r=>r.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Action unavailable"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:"This is a demo preview. Create/Update/Delete actions are disabled."})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:p,children:"Okay"})})]})}):null,z=()=>{R();const[o,p]=N.useState(""),[r,h]=N.useState(!1),j=N.useRef(null),n=N.useMemo(()=>{const s=o.trim().toLowerCase();return s?T.filter(x=>{const C=`${x.id} ${x.invoiceId} ${x.customer} ${x.reason} ${x.status} ${x.user}`.toLowerCase();return s.split(/\s+/).every(S=>C.includes(S))}):T},[o]),v=()=>{const s=["CreditNote","Invoice","Customer","Date","Status","Reason","Amount","Balance","User"],x=n.map(i=>[i.id,i.invoiceId,i.customer,D(i.date,!0),i.status,i.reason,i.amount,i.balance,i.user]),C=[s,...x].map(i=>i.map(A=>`"${String(A).replaceAll('"','""')}"`).join(",")).join(`
`),S=new Blob([C],{type:"text/csv;charset=utf-8"}),M=URL.createObjectURL(S),b=document.createElement("a");b.href=M,b.download="credit-notes.csv",document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(M)},k=()=>{j.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},w=s=>p(s);return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Credit Notes"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx($,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Credit Notes"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["As of ",g.lastSync]})})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnDisabled",title:"Demo preview only",onClick:()=>h(!0),children:"New Credit Note"}),e.jsx("button",{className:"btnGhost",onClick:v,title:"Download CSV of visible rows",children:"Export CSV"}),e.jsx("button",{className:"btnGhost",onClick:k,title:"Print summary/table",children:"Print"})]})]}),e.jsxs(m.Metrics,{children:[e.jsxs("div",{className:"metric card",children:[e.jsx("div",{className:"k",children:"Open"}),e.jsx("div",{className:"v",children:g.openCount}),e.jsx("div",{className:"s",children:"Awaiting adjustment"})]}),e.jsxs("div",{className:"metric card",children:[e.jsx("div",{className:"k",children:"Adjusted"}),e.jsx("div",{className:"v",children:g.adjustedCount}),e.jsx("div",{className:"s",children:"Applied to invoices"})]}),e.jsxs("div",{className:"metric card",children:[e.jsx("div",{className:"k",children:"Voided"}),e.jsx("div",{className:"v",children:g.voidCount}),e.jsx("div",{className:"s",children:"Cancelled records"})]}),e.jsxs("div",{className:"metric card",children:[e.jsx("div",{className:"k",children:"Total Value"}),e.jsx("div",{className:"v",children:g.totalValue}),e.jsx("div",{className:"s",children:"Cumulative credits"})]})]}),e.jsx(m.Tools,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",placeholder:"Search: CN / invoice / customer / status / reason / user",value:o,onChange:s=>p(s.target.value),"aria-label":"Search credit notes list"})}),e.jsxs("div",{className:"quick",children:[e.jsx("span",{className:"label",children:"Quick:"}),e.jsx("button",{className:"chip",onClick:()=>w("open"),children:"Open"}),e.jsx("button",{className:"chip",onClick:()=>w("adjusted"),children:"Adjusted"}),e.jsx("button",{className:"chip",onClick:()=>w("void"),children:"Voided"}),e.jsx("button",{className:"chip",onClick:()=>p(""),children:"Reset"})]})]})}),e.jsxs(m.TableWrap,{className:"card",id:"search-print-area",ref:j,children:[e.jsxs("div",{className:"tableMeta",children:[e.jsxs("div",{className:"count",children:[n.length," records"]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot open"})," Open",e.jsx("span",{className:"dot adjusted"})," Adjusted",e.jsx("span",{className:"dot void"})," Voided"]})]}),e.jsx("div",{className:"tableScroller",children:e.jsxs("table",{className:"grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Credit Note"}),e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Reason"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"right",children:"Amount"}),e.jsx("th",{className:"right",children:"Balance"}),e.jsx("th",{children:"By"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsxs("tbody",{children:[n.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx($,{className:"mono",to:`/invoices/credit-notes/${s.id}`,title:"Open credit note",children:s.id})}),e.jsx("td",{children:e.jsx($,{className:"mono",to:`/invoices/${s.invoiceId}`,title:"Open invoice",children:s.invoiceId})}),e.jsx("td",{children:s.customer}),e.jsxs("td",{children:[e.jsx("div",{className:"date",children:D(s.date)}),e.jsx("div",{className:"time muted",children:D(s.date,!0).split(" ").slice(4).join(" ")})]}),e.jsx("td",{children:s.reason}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status}`,children:s.status})}),e.jsx("td",{className:"right",children:V(s.amount)}),e.jsx("td",{className:"right",children:V(s.balance)}),e.jsx("td",{children:s.user}),e.jsxs("td",{className:"actions",children:[e.jsx($,{className:"link",to:`/invoices/credit-notes/${s.id}`,children:"View"}),e.jsx("button",{className:"link disabled",title:"Demo preview only",onClick:()=>h(!0),children:"Void"})]})]},s.id)),n.length===0&&e.jsx("tr",{className:"empty",children:e.jsx("td",{colSpan:10,children:e.jsxs("div",{className:"emptyWrap",children:[e.jsx("div",{className:"title",children:"No results"}),e.jsx("div",{className:"sub",children:"Try a different keyword or clear the search."})]})})})]})]})})]}),e.jsx(O,{open:r,onClose:()=>h(!1)})]})};export{z as default};
