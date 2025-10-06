import{d as l,a as w,r as $,j as e,N as t,D as T,E as S,F as P,H as J,w as C,I as E}from"./index-Dvs-eF3B.js";const c="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",d="var(--card, #111318)",r="var(--border, #23262d)",s="var(--accent, #5aa9ff)",N="var(--accent-soft, rgba(90,169,255,0.15))",h="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",p={Page:l.div`
        padding: 20px;
        color: ${c};
    `,Head:l.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 16px;

        .left {
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${n};
                margin-bottom: 6px;
                font-size: 12px;
                a {
                    color: ${n};
                }
                a:hover {
                    color: ${s};
                }
                .sep {
                    opacity: 0.6;
                }
                .current {
                    color: ${c};
                }
            }
            h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.3px;
                margin-bottom: 6px;
            }
            .meta {
                color: ${n};
                font-size: 12px;
            }
        }

        .right {
            display: grid;
            gap: 10px;
            align-content: start;

            .quicklinks {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: flex-end;
                .chip {
                    background: ${d};
                    border: 1px solid ${r};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .chip:hover {
                    border-color: ${s};
                    color: ${s};
                }
            }

            .actions {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${r};
                    padding: 8px 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    background: ${d};
                    color: ${c};
                    transition: border-color 0.25s, color 0.25s,
                        background 0.25s;
                }
                .btn.ghost:hover {
                    border-color: ${s};
                    color: ${s};
                }
                .btn.primary {
                    border-color: ${s};
                }
                .btn.primary:hover {
                    box-shadow: 0 0 0 3px ${N};
                }
                .btn[data-disabled="true"] {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
            }
        }
    `,MetricRow:l.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 12px;

        .card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${h};
        }
        .label {
            color: ${n};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 2px;
        }
        .sub {
            color: ${n};
            font-size: 12px;
        }
        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,TabBar:l.div`
        display: flex;
        align-items: center;
        gap: 10px;
        background: ${d};
        border: 1px solid ${r};
        padding: 8px;
        border-radius: 10px;
        margin-bottom: 12px;

        .tab {
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${n};
            border: 1px solid transparent;
        }
        .tab:hover {
            color: ${s};
            border-color: ${s};
        }
        .tab.active {
            color: ${s};
            border-color: ${s};
            background: color-mix(in oklab, ${s} 12%, transparent);
        }
        .spacer {
            flex: 1;
        }

        .search {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px dashed ${r};
            padding: 6px 10px;
            border-radius: 8px;
            color: ${n};
            input {
                background: transparent;
                border: none;
                color: ${n};
                outline: none;
                width: 180px;
            }
        }
    `,TableWrap:l.div`
        background: ${d};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${h};
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${d};
            border-bottom: 1px solid ${r};
            text-align: left;
            padding: 12px 14px;
            color: ${s};
            font-weight: 600;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.05);
        }
        .num {
            text-align: right;
        }

        .link-strong {
            color: ${c};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .link-strong:hover {
            color: ${s};
        }
        .icon-open {
            opacity: 0.7;
        }

        .date {
            font-weight: 600;
        }
        .time {
            color: ${n};
            font-size: 12px;
        }

        .ref {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }
        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 11px;
            border: 1px solid ${r};
            color: ${n};
            background: rgba(255, 255, 255, 0.02);
        }
        .ref-link {
            color: ${c};
        }
        .ref-link:hover {
            color: ${s};
        }

        .accounts {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .account-chip {
            font-size: 12px;
            border: 1px solid ${r};
            padding: 3px 8px;
            border-radius: 999px;
            color: ${n};
        }
        .account-chip:hover {
            color: ${s};
            border-color: ${s};
        }

        .status {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${r};
            background: rgba(255, 255, 255, 0.02);
            color: ${n};
        }
        .status.posted {
            color: ${s};
            border-color: ${s};
            background: color-mix(in oklab, ${s} 12%, transparent);
        }
        .status.draft {
            color: ${n};
            border-color: ${r};
            background: rgba(255, 255, 255, 0.03);
        }
        .status.reversed {
            color: #ff8b5a;
            border-color: rgba(255, 139, 90, 0.45);
            background: rgba(255, 139, 90, 0.12);
        }

        .row-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .btn.tiny {
            padding: 4px 8px;
            font-size: 12px;
            border-radius: 8px;
            border: 1px solid ${r};
            background: ${d};
            color: ${c};
            cursor: pointer;
        }
        .btn.tiny:hover {
            border-color: ${s};
            color: ${s};
        }

        .legend {
            padding: 10px 14px;
            display: flex;
            gap: 8px;
            align-items: center;
            background: rgba(0, 0, 0, 0.04);
        }
    `,FooterBar:l.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        padding: 12px;
        margin-top: 12px;
        background: ${d};
        border: 1px solid ${r};
        border-radius: 10px;

        .pages {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${n};
            a {
                color: ${n};
                border: 1px solid ${r};
                border-radius: 6px;
                padding: 4px 8px;
            }
            a:hover {
                color: ${s};
                border-color: ${s};
            }
            .divider {
                opacity: 0.6;
            }
        }
        .rightlinks {
            display: flex;
            align-items: center;
            gap: 12px;
            .footlink {
                color: ${n};
            }
            .footlink:hover {
                color: ${s};
            }
        }
    `,Modal:l.div`
        position: fixed;
        inset: 0;
        z-index: 40;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(2px);
        }
        .content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(520px, 92vw);
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${h};
            padding: 18px;
        }
        h3 {
            margin-bottom: 8px;
            font-family: "Antonio", sans-serif;
        }
        p {
            color: ${n};
            margin-bottom: 14px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${r};
            padding: 8px 12px;
            border-radius: 10px;
            background: ${d};
            color: ${c};
            cursor: pointer;
        }
        .btn.primary {
            border-color: ${s};
        }
        .btn.primary:hover {
            box-shadow: 0 0 0 3px ${N};
        }
    `},M=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function b(i){return i.toString().padStart(2,"0")}function k(i){const o=new Date(i);return`${M[o.getDay()]} ${A[o.getMonth()]} ${b(o.getDate())} ${o.getFullYear()}`}function D(i){const o=new Date(i);return`${b(o.getHours())}:${b(o.getMinutes())}:${b(o.getSeconds())}hrs`}function f(i){return`${k(i)} ${D(i)}`}const L="2025-10-06T12:16:55+05:30",I="2025-10-06T06:46:59.352Z",g=[{id:"JRN-2025-0001",date:"2025-10-04T15:38:20+05:30",type:"General",reference:{type:"Invoice",id:"INV-2031",link:"/invoices/INV-2031"},lines:5,debit:"₹ 58,240.00",credit:"₹ 58,240.00",status:"Posted",accounts:[{id:"LED-1001",name:"Sales A/C"},{id:"LED-2101",name:"GST Output"}]},{id:"JRN-2025-0002",date:"2025-10-03T12:22:11+05:30",type:"Payment",reference:{type:"Receipt",id:"RCT-5127",link:"/receipts"},lines:3,debit:"₹ 18,000.00",credit:"₹ 18,000.00",status:"Posted",accounts:[{id:"LED-1301",name:"Bank A/C"},{id:"LED-1101",name:"Accounts Receivable"}]},{id:"JRN-2025-0003",date:"2025-10-03T09:05:44+05:30",type:"Adjustment",reference:{type:"Inventory",id:"ADJ-901",link:"/inventory/adjustments"},lines:4,debit:"₹ 7,950.00",credit:"₹ 7,950.00",status:"Draft",accounts:[{id:"LED-1501",name:"Inventory"},{id:"LED-5001",name:"COGS"}]},{id:"JRN-2025-0004",date:"2025-10-02T18:46:02+05:30",type:"Reversal",reference:{type:"Invoice",id:"INV-2022",link:"/invoices/INV-2022"},lines:2,debit:"₹ 1,200.00",credit:"₹ 1,200.00",status:"Reversed",accounts:[{id:"LED-1001",name:"Sales A/C"}]},{id:"JRN-2025-0005",date:"2025-10-02T08:14:30+05:30",type:"General",reference:{type:"PO Bill",id:"BILL-774",link:"/purchase-orders/BILL-774"},lines:6,debit:"₹ 92,340.00",credit:"₹ 92,340.00",status:"Posted",accounts:[{id:"LED-1401",name:"Accounts Payable"},{id:"LED-1501",name:"Inventory"}]},{id:"JRN-2025-0006",date:"2025-10-01T16:00:00+05:30",type:"Payment",reference:{type:"Vendor Payment",id:"PAY-921",link:"/finance/payments"},lines:2,debit:"₹ 40,000.00",credit:"₹ 40,000.00",status:"Posted",accounts:[{id:"LED-1401",name:"Accounts Payable"},{id:"LED-1301",name:"Bank A/C"}]},{id:"JRN-2025-0007",date:"2025-09-29T11:10:10+05:30",type:"General",reference:{type:"Manual",id:"MNL-321",link:"/finance/journals/JRN-2025-0007"},lines:8,debit:"₹ 10,500.00",credit:"₹ 10,500.00",status:"Posted",accounts:[{id:"LED-2201",name:"Round-off"}]},{id:"JRN-2025-0008",date:"2025-09-28T17:35:22+05:30",type:"Adjustment",reference:{type:"Stock Count",id:"CNT-102",link:"/inventory/adjustments"},lines:5,debit:"₹ 3,120.00",credit:"₹ 3,120.00",status:"Posted",accounts:[{id:"LED-1501",name:"Inventory"}]},{id:"JRN-2025-0009",date:"2025-09-27T10:25:55+05:30",type:"General",reference:{type:"Invoice",id:"INV-1998",link:"/invoices/INV-1998"},lines:4,debit:"₹ 25,000.00",credit:"₹ 25,000.00",status:"Posted",accounts:[{id:"LED-1001",name:"Sales A/C"},{id:"LED-2101",name:"GST Output"}]},{id:"JRN-2025-0010",date:"2025-09-27T08:02:12+05:30",type:"Payment",reference:{type:"Receipt",id:"RCT-5068",link:"/receipts"},lines:2,debit:"₹ 9,000.00",credit:"₹ 9,000.00",status:"Draft",accounts:[{id:"LED-1301",name:"Bank A/C"},{id:"LED-1101",name:"Accounts Receivable"}]}],O=[{key:"posted",label:"Posted (30d)",value:"124",sub:"Last sync "+f(L)},{key:"drafts",label:"Drafts",value:"7",sub:"Ready to review"},{key:"reversed",label:"Reversals",value:"3",sub:"Past 30 days"},{key:"balance",label:"Trial Balance",value:"₹ 0.00",sub:"Debits = Credits"}];function G(){const{search:i}=w(),[o,m]=$.useState(!1),j=new URLSearchParams(i).get("status"),y=$.useMemo(()=>g,[j]),R=()=>{const a=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),x=URL.createObjectURL(a),u=document.createElement("a");u.href=x,u.download="journals.json",document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(x)},v=()=>{const a="print-section-mode";document.body.classList.add(a),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove(a),0)},50)};return e.jsxs(p.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(p.Head,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(t,{to:"/finance",end:!0,children:"Finance"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Journals"})]}),e.jsx("h1",{children:"Journals"}),e.jsxs("p",{className:"meta",children:["Build: ",e.jsx("strong",{children:f(I)})," · Last commit: ",e.jsx("strong",{children:f(L)})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"quicklinks",role:"group","aria-label":"Quick links",children:[e.jsx(t,{to:"/finance/chart-of-accounts",className:"chip",children:"Chart of Accounts"}),e.jsx(t,{to:"/finance/ledgers",className:"chip",children:"Ledgers"}),e.jsx(t,{to:"/finance/journals",className:"chip",children:"Journals"}),e.jsx(t,{to:"/finance/taxes",className:"chip",children:"Taxes"}),e.jsx(t,{to:"/finance/gst-returns",className:"chip",children:"GST Returns"}),e.jsx(t,{to:"/finance/balance-sheet",className:"chip",children:"Balance Sheet"}),e.jsx(t,{to:"/finance/profit-loss",className:"chip",children:"P&L"}),e.jsx(t,{to:"/finance/trial-balance",className:"chip",children:"Trial Balance"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn ghost",onClick:v,title:"Print this table",children:[e.jsx(T,{size:18})," Print"]}),e.jsxs("button",{className:"btn ghost",onClick:R,title:"Download journals.json",children:[e.jsx(S,{size:18})," Export JSON"]}),e.jsxs("button",{className:"btn primary","data-disabled":"true",onClick:()=>m(!0),"aria-disabled":"true",title:"Demo mode",children:[e.jsx(P,{size:18})," New Journal"]})]})]})]}),e.jsx(p.MetricRow,{children:O.map(a=>e.jsxs("div",{className:"metric card",children:[e.jsx("div",{className:"label",children:a.label}),e.jsx("div",{className:"value",children:a.value}),e.jsx("div",{className:"sub",children:a.sub})]},a.key))}),e.jsxs(p.TabBar,{role:"tablist","aria-label":"Journal tabs",children:[e.jsx(t,{to:"/finance/journals",end:!0,className:"tab",children:"All"}),e.jsx(t,{to:"/finance/journals?status=posted",className:"tab",children:"Posted"}),e.jsx(t,{to:"/finance/journals?status=draft",className:"tab",children:"Draft"}),e.jsx(t,{to:"/finance/journals?status=reversed",className:"tab",children:"Reversed"}),e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"search",children:[e.jsx(J,{size:18}),e.jsx("input",{placeholder:"Search (demo)",disabled:!0})]})]}),e.jsx("section",{id:"search-print-area",children:e.jsxs(p.TableWrap,{"aria-label":"Journals table",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:160},children:"Journal ID"}),e.jsx("th",{style:{width:170},children:"Date"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Reference"}),e.jsx("th",{children:"Lines"}),e.jsx("th",{children:"Debit"}),e.jsx("th",{children:"Credit"}),e.jsx("th",{children:"Status"}),e.jsx("th",{style:{width:220},children:"Actions"})]})}),e.jsx("tbody",{children:y.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t,{to:`/finance/journals/${a.id}`,className:"link-strong",children:[a.id," ",e.jsx(C,{size:14,className:"icon-open"})]})}),e.jsxs("td",{children:[e.jsx("div",{className:"date",children:k(a.date)}),e.jsx("div",{className:"time",children:D(a.date)})]}),e.jsx("td",{children:a.type}),e.jsxs("td",{children:[e.jsxs("div",{className:"ref",children:[e.jsx("span",{className:"badge",children:a.reference.type}),e.jsx(t,{to:a.reference.link,className:"ref-link",children:a.reference.id})]}),e.jsx("div",{className:"accounts",children:a.accounts.map(x=>e.jsx(t,{to:`/finance/ledgers/${x.id}`,className:"account-chip",children:x.name},x.id))})]}),e.jsx("td",{className:"num",children:a.lines}),e.jsx("td",{className:"num",children:a.debit}),e.jsx("td",{className:"num",children:a.credit}),e.jsx("td",{children:e.jsx("span",{className:`status ${a.status.toLowerCase()}`,children:a.status})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsx(t,{className:"btn tiny ghost",to:`/finance/journals/${a.id}`,title:"Open details",children:"View"}),e.jsx("button",{className:"btn tiny ghost",title:"Print this entry",onClick:v,children:"Print"}),e.jsx(t,{className:"btn tiny ghost",to:"/finance/ledgers",title:"Open Ledgers",children:"Ledgers"}),a.reference.link&&e.jsx(t,{className:"btn tiny ghost",to:a.reference.link,title:"Go to reference",children:a.reference.type})]})})]},a.id))})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"status posted",children:"Posted"}),e.jsx("span",{className:"status draft",children:"Draft"}),e.jsx("span",{className:"status reversed",children:"Reversed"})]})]})}),e.jsxs(p.FooterBar,{children:[e.jsxs("div",{className:"pages",children:[e.jsxs("span",{children:["Rows: ",y.length]}),e.jsx("span",{className:"divider",children:"•"}),e.jsx(t,{to:"/finance/journals?page=1",children:"1"}),e.jsx(t,{to:"/finance/journals?page=2",children:"2"}),e.jsx(t,{to:"/finance/journals?page=3",children:"3"}),e.jsx(t,{to:"/finance/journals?page=4",children:"4"}),e.jsx(t,{to:"/finance/journals?page=5",children:"5"})]}),e.jsxs("div",{className:"rightlinks",children:[e.jsxs(t,{to:"/reports/finance",className:"footlink",children:[e.jsx(E,{size:16})," Finance Report"]}),e.jsx(t,{to:"/reports/gst",className:"footlink",children:"GST Report"}),e.jsx(t,{to:"/settings/print-templates",className:"footlink",children:"Print Templates"})]})]}),o&&e.jsxs(p.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:[e.jsx("div",{className:"overlay",onClick:()=>m(!1)}),e.jsxs("div",{className:"content card",children:[e.jsx("h3",{id:"demo-title",children:"New Journal"}),e.jsx("p",{children:"Demo mode is display-only. Creating or editing entries is disabled."}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"btn primary",onClick:()=>m(!1),children:"OK"})})]})]})]})}export{G as default};
