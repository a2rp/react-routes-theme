import{d as z,a as F,r as p,j as e,N as m}from"./index-CTSbLEdo.js";const l="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",d="var(--card, #111318)",s="var(--border, #23262d)",r="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",U={Page:z.div`
        color: ${l};
        display: grid;
        gap: 16px;
        padding: 16px;

        .header {
            display: grid;
            gap: 12px;
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow);

            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${i};
                a {
                    color: ${i};
                }
                a:hover {
                    color: ${r};
                }
                span {
                    opacity: 0.8;
                }
            }

            .meta {
                display: grid;
                gap: 6px;
                .title {
                    font-family: "Antonio", sans-serif;
                    font-size: 24px;
                    line-height: 1.2;
                }
                .sub {
                    color: ${i};
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                }
                .sep {
                    opacity: 0.5;
                }
                .pill {
                    background: color-mix(in oklab, ${r} 14%, transparent);
                    border: 1px solid ${r};
                    color: ${l};
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                }
            }

            .actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button,
                a.ghost {
                    background: ${d};
                    color: ${l};
                    border: 1px solid ${s};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                        background 0.2s, transform 0.05s;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                button:hover,
                a.ghost:hover {
                    color: ${r};
                    border-color: ${r};
                    box-shadow: 0 0 0 3px ${b};
                }
                button:active {
                    transform: translateY(1px);
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .ghost {
                    background: transparent;
                }
            }
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                border: 1px solid ${s};
                background: ${d};
                color: ${i};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            }
            .chip:hover {
                color: ${r};
                border-color: ${r};
                box-shadow: 0 0 0 3px ${b};
            }
            .chip.active {
                color: ${r};
                border-color: ${r};
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            gap: 12px;
            .card {
                background: ${d};
                border: 1px solid ${s};
                border-radius: 12px;
                padding: 14px;
                box-shadow: var(--shadow);
                display: grid;
                gap: 4px;
                .label {
                    color: ${i};
                    font-weight: 600;
                }
                .value {
                    font-family: "Antonio", sans-serif;
                    font-size: 22px;
                }
                .hint {
                    color: ${i};
                    font-size: 12px;
                }
            }
            .warning .label {
                color: ${i};
            }
            .warning .value {
                color: ${l};
            }
        }

        .toolbar {
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            gap: 12px;
            .group {
                display: grid;
                gap: 6px;
            }
            label {
                color: ${i};
                font-size: 12px;
            }
            input {
                background: ${d};
                border: 1px solid ${s};
                color: ${l};
                border-radius: 8px;
                padding: 8px 10px;
                transition: border-color 0.2s, box-shadow 0.2s;
            }
            input:focus {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${b};
                outline: none;
            }
        }

        .sheet {
            border: 1px solid ${s};
            background: color-mix(in oklab, ${d} 96%, transparent);
            border-radius: 12px;
            padding: 8px 8px 16px 8px;
            box-shadow: var(--shadow);

            .sheet-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px;
                border-bottom: 1px solid ${s};
                .sheet-title {
                    font-family: "Antonio", sans-serif;
                    font-size: 20px;
                }
                .sheet-sub {
                    color: ${i};
                    font-size: 12px;
                }
                .sheet-brand {
                    text-align: right;
                }
                .name {
                    font-weight: 700;
                }
                .muted {
                    color: ${i};
                    font-size: 12px;
                }
            }

            .table {
                display: grid;
                gap: 8px;
                padding: 8px 8px 0 8px;

                .thead,
                .row,
                .group-head {
                    display: grid;
                    grid-template-columns: 140px 1fr 180px 180px;
                    align-items: center;
                }

                .thead {
                    position: sticky;
                    top: 0;
                    z-index: 2;
                    background: ${d};
                    border: 1px solid ${s};
                    padding: 8px 10px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: ${i};
                    .num {
                        text-align: right;
                    }
                }

                .group {
                    background: transparent;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid ${s};
                    .group-head {
                        width: 100%;
                        background: color-mix(
                            in oklab,
                            ${d} 94%,
                            transparent
                        );
                        color: ${l};
                        border: 0;
                        text-align: left;
                        cursor: pointer;
                        padding: 8px 10px;
                        display: grid;
                        align-items: center;
                        border-bottom: 1px solid ${s};
                        transition: background 0.2s, color 0.2s;
                    }
                    .group-head:hover {
                        color: ${r};
                    }
                    .group-head .chev {
                        margin-right: 6px;
                    }
                    .group-head .gname {
                        font-weight: 700;
                    }
                    .group-head .gnote {
                        color: ${i};
                        margin-left: 10px;
                    }
                    .group-head .spacer {
                        flex: 1;
                    }
                    .group-head .subt {
                        display: grid;
                        grid-template-columns: 180px 180px;
                        gap: 0;
                        justify-items: end;
                        color: ${i};
                    }

                    .tbody {
                        display: grid;
                    }
                    .row {
                        padding: 8px 10px;
                        border-bottom: 1px dashed ${s};
                        transition: background 0.15s;
                    }
                    .row:last-child {
                        border-bottom: 0;
                    }
                    .row:hover {
                        background: color-mix(
                            in oklab,
                            ${r} 10%,
                            transparent
                        );
                    }

                    .code {
                        color: ${i};
                    }
                    .name a {
                        color: ${l};
                        text-decoration: none;
                        border-bottom: 1px dashed transparent;
                        transition: color 0.2s, border-color 0.2s;
                    }
                    .name a:hover {
                        color: ${r};
                        border-bottom-color: ${r};
                    }
                    .num {
                        text-align: right;
                        font-variant-numeric: tabular-nums;
                    }
                }
            }

            .foot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 12px;
                border-top: 1px solid ${s};
                margin-top: 8px;
                color: ${i};
                .legend {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .legend .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: ${i};
                    display: inline-block;
                }
            }
        }

        /* Mini modal */
        .modal {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
        }
        .modal-card {
            width: min(560px, 96vw);
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }
        .modal-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${s};
            font-weight: 700;
        }
        .modal-head button {
            background: transparent;
            border: 1px solid ${s};
            color: ${l};
            border-radius: 8px;
            padding: 4px 8px;
            cursor: pointer;
        }
        .modal-head button:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${b};
        }

        .modal-body {
            padding: 14px;
            color: ${l};
        }
        .modal-actions {
            padding: 12px 14px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${s};
        }
        .modal-actions button,
        .modal-actions a.ghost {
            background: ${d};
            border: 1px solid ${s};
            color: ${l};
            border-radius: 8px;
            padding: 8px 12px;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .modal-actions button:hover,
        .modal-actions a.ghost:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${b};
        }
    `},$=n=>String(n).padStart(2,"0"),S=(n=new Date,t="Asia/Kolkata")=>new Intl.DateTimeFormat("en-US",{timeZone:t,weekday:"short",month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(n).reduce((g,c)=>(g[c.type]=c.value,g),{}),D=(n=new Date)=>{const t=S(n);return`${t.weekday} ${t.month} ${t.day} ${t.year}`},T=(n=new Date)=>{const t=S(n);return`${$(t.hour)}:${$(t.minute)}:${$(t.second)}hrs`},w=(n=new Date)=>`${D(n)} ${T(n)}`,u=[{group:"Assets",note:"Current & non-current assets",rows:[{code:"1000",name:"Cash & Cash Equivalents",debit:"₹150,000.00",credit:"₹0.00"},{code:"1100",name:"Accounts Receivable",debit:"₹320,500.00",credit:"₹0.00"},{code:"1200",name:"Inventory",debit:"₹410,200.00",credit:"₹0.00"},{code:"1300",name:"Prepaid Expenses",debit:"₹24,800.00",credit:"₹0.00"},{code:"1400",name:"Fixed Assets",debit:"₹960,000.00",credit:"₹0.00"},{code:"1410",name:"Accumulated Depreciation",debit:"₹0.00",credit:"₹120,000.00"}],subtotal:{debit:"₹1,865,500.00",credit:"₹120,000.00"}},{group:"Liabilities",note:"Current & long-term liabilities",rows:[{code:"2000",name:"Accounts Payable",debit:"₹0.00",credit:"₹285,400.00"},{code:"2100",name:"Accrued Liabilities",debit:"₹0.00",credit:"₹62,500.00"},{code:"2200",name:"Deferred Revenue",debit:"₹0.00",credit:"₹40,000.00"},{code:"2300",name:"Short-term Borrowings",debit:"₹0.00",credit:"₹110,000.00"},{code:"2400",name:"Long-term Debt",debit:"₹0.00",credit:"₹450,000.00"}],subtotal:{debit:"₹0.00",credit:"₹947,900.00"}},{group:"Equity",note:"Share capital & retained earnings",rows:[{code:"3000",name:"Share Capital",debit:"₹0.00",credit:"₹500,000.00"},{code:"3100",name:"Securities Premium",debit:"₹0.00",credit:"₹75,000.00"},{code:"3200",name:"Retained Earnings",debit:"₹0.00",credit:"₹155,000.00"}],subtotal:{debit:"₹0.00",credit:"₹730,000.00"}},{group:"Income",note:"Revenue & other income",rows:[{code:"4000",name:"Sales Revenue",debit:"₹0.00",credit:"₹1,520,000.00"},{code:"4100",name:"Other Income",debit:"₹0.00",credit:"₹48,500.00"}],subtotal:{debit:"₹0.00",credit:"₹1,568,500.00"}},{group:"Expenses",note:"COGS & operating expenses",rows:[{code:"5000",name:"Cost of Goods Sold",debit:"₹890,000.00",credit:"₹0.00"},{code:"5100",name:"Salaries & Wages",debit:"₹230,000.00",credit:"₹0.00"},{code:"5200",name:"Rent & Utilities",debit:"₹96,000.00",credit:"₹0.00"},{code:"5300",name:"Marketing",debit:"₹45,000.00",credit:"₹0.00"},{code:"5400",name:"Professional Fees",debit:"₹18,000.00",credit:"₹0.00"},{code:"5500",name:"Miscellaneous",debit:"₹13,000.00",credit:"₹0.00"}],subtotal:{debit:"₹1,292,000.00",credit:"₹0.00"}}],h={asOf:w(new Date),overall:{debit:"₹3,157,500.00",credit:"₹3,366,400.00"},difference:{label:"Imbalance",value:"₹208,900.00"}},G=[{to:"/finance",label:"Finance Overview"},{to:"/finance/chart-of-accounts",label:"Chart of Accounts"},{to:"/finance/ledgers",label:"Ledgers"},{to:"/finance/journals",label:"Journals"},{to:"/finance/taxes",label:"Taxes"},{to:"/finance/gst-returns",label:"GST Returns"},{to:"/finance/balance-sheet",label:"Balance Sheet"},{to:"/finance/profit-loss",label:"Profit & Loss"},{to:"/reports/finance",label:"Finance Reports"},{to:"/invoices",label:"Invoices"}];function q(){const{pathname:n}=F(),[t,g]=p.useState(""),[c,y]=p.useState(()=>u.reduce((a,o)=>(a[o.group]=!0,a),{})),[A,N]=p.useState(!1),[L,j]=p.useState(!1);p.useEffect(()=>{t.trim()&&y(u.reduce((a,o)=>(a[o.group]=!0,a),{}))},[t]);const R=p.useMemo(()=>{const a=t.trim().toLowerCase();return a?u.map(o=>({...o,rows:o.rows.filter(f=>(f.code+" "+f.name).toLowerCase().includes(a))})).filter(o=>o.rows.length>0):u},[t]),P=()=>{const o=[["Group","Code","Account","Debit","Credit"].join(",")];u.forEach(C=>{C.rows.forEach(v=>o.push([C.group,v.code,v.name,v.debit,v.credit].map(B=>`"${String(B).replace(/"/g,'""')}"`).join(",")))});const f=new Blob([o.join(`
`)],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(f),x=document.createElement("a");x.href=k,x.download="trial-balance.csv",document.body.appendChild(x),x.click(),x.remove(),URL.revokeObjectURL(k)},O=async()=>{try{await navigator.clipboard.writeText(window.location.href),N(!0),setTimeout(()=>N(!1),1800)}catch{}},E=()=>{const a="print-section-mode";document.body.classList.add(a),window.print(),setTimeout(()=>document.body.classList.remove(a),0)},I=a=>y(o=>({...o,[a]:!o[a]}));return e.jsxs(U.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"header",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(m,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(m,{to:"/finance",children:"Finance"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:"Trial Balance"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"title",children:"Trial Balance"}),e.jsxs("div",{className:"sub",children:["As of ",e.jsx("strong",{children:h.asOf}),e.jsx("span",{className:"sep",children:"•"}),"Period ",e.jsx("span",{className:"pill",children:"FY 2025–26"}),e.jsx("span",{className:"sep",children:"•"}),"Base Currency ",e.jsx("span",{className:"pill",children:"INR"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:P,title:"Export CSV",children:"Export CSV"}),e.jsx("button",{onClick:O,title:"Copy deep link",children:A?"Copied!":"Copy Link"}),e.jsx("button",{onClick:E,title:"Print section",children:"Print"}),e.jsx("button",{onClick:()=>j(!0),disabled:!0,title:"Demo Only",children:"Post Adjustment"})]})]}),e.jsx("div",{className:"quicklinks",children:G.map(a=>e.jsx(m,{to:a.to,className:"chip",title:a.label,children:a.label},a.to))}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"label",children:"Total Debit"}),e.jsx("div",{className:"value",children:h.overall.debit}),e.jsx("div",{className:"hint",children:"Includes all asset & expense accounts"})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"label",children:"Total Credit"}),e.jsx("div",{className:"value",children:h.overall.credit}),e.jsx("div",{className:"hint",children:"Includes liabilities, equity & income"})]}),e.jsxs("div",{className:"card warning",children:[e.jsx("div",{className:"label",children:h.difference.label}),e.jsx("div",{className:"value",children:h.difference.value}),e.jsx("div",{className:"hint",children:"Display-only sample data"})]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"Search accounts"}),e.jsx("input",{type:"text",placeholder:"Code or account name",value:t,onChange:a=>g(a.target.value),"aria-label":"Search accounts"})]}),e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"As of"}),e.jsx("input",{type:"text",value:D(new Date),readOnly:!0})]}),e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"Time"}),e.jsx("input",{type:"text",value:T(new Date),readOnly:!0})]})]}),e.jsxs("div",{id:"search-print-area",className:"sheet",children:[e.jsxs("div",{className:"sheet-head",children:[e.jsxs("div",{children:[e.jsx("div",{className:"sheet-title",children:"Trial Balance"}),e.jsxs("div",{className:"sheet-sub",children:["As of ",w(new Date)," • INR"]})]}),e.jsxs("div",{className:"sheet-brand",children:[e.jsx("div",{className:"name",children:"Ashish ERP"}),e.jsx("div",{className:"muted",children:"reports / trial-balance"})]})]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"thead",children:[e.jsx("div",{children:"Code"}),e.jsx("div",{children:"Account"}),e.jsx("div",{className:"num",children:"Debit"}),e.jsx("div",{className:"num",children:"Credit"})]}),R.map(a=>e.jsxs("div",{className:"group",children:[e.jsxs("button",{className:"group-head",onClick:()=>I(a.group),"aria-expanded":c[a.group]?"true":"false",title:"Toggle section",children:[e.jsx("span",{className:"chev","aria-hidden":"true",children:c[a.group]?"▾":"▸"}),e.jsx("span",{className:"gname",children:a.group}),a.note&&e.jsx("span",{className:"gnote",children:a.note}),e.jsx("span",{className:"spacer"}),e.jsxs("span",{className:"subt",children:[e.jsx("span",{className:"num",children:a.subtotal.debit}),e.jsx("span",{className:"num",children:a.subtotal.credit})]})]}),c[a.group]&&e.jsx("div",{className:"tbody",children:a.rows.map(o=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"code",children:o.code}),e.jsx("div",{className:"name",children:e.jsx(m,{to:`/finance/ledgers/${encodeURIComponent(o.code)}`,title:"Open ledger",children:o.name})}),e.jsx("div",{className:"num",children:o.debit}),e.jsx("div",{className:"num",children:o.credit})]},a.group+o.code))})]},a.group))]}),e.jsxs("div",{className:"foot",children:[e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot"})," Display-only theme. Values are illustrative."]}),e.jsxs("div",{className:"signoff",children:["Generated on ",w(new Date)]})]})]}),L&&e.jsx("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:e.jsxs("div",{className:"modal-card",children:[e.jsxs("div",{className:"modal-head",children:[e.jsx("div",{id:"demo-title",children:"Action unavailable in demo"}),e.jsx("button",{onClick:()=>j(!1),"aria-label":"Close",children:"✕"})]}),e.jsx("div",{className:"modal-body",children:"This is a display-only preview. Posting manual adjustments is disabled."}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{onClick:()=>j(!1),children:"Close"}),e.jsx(m,{to:"/finance/journals",className:"ghost",children:"Open Journals"})]})]})})]})}export{q as default};
