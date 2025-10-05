import{d as A,u as B,r as f,j as e,N as i,e as H,A as E,F as L,l as M,L as t,n as $,b as z,o as I}from"./index-Dm9gfKqL.js";const p="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",l="var(--card, #111318)",r="var(--border, #23262d)",s="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",O={Wrap:A.div`
        color: ${p};
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .headerRow {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${x};
            a {
                color: ${x};
                text-decoration: none;
            }
            .current {
                color: ${p};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 10px;
                border: 1px solid ${r};
                background: ${l};
                color: ${p};
                cursor: pointer;
                transition: border-color 0.2s ease, box-shadow 0.2s ease,
                    transform 0.05s ease;
                &:hover {
                    border-color: ${s};
                    box-shadow: 0 0 0 3px ${b};
                }
                &:active {
                    transform: translateY(1px);
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
            .primary {
                border-color: ${s};
            }
            .ghost {
                background: transparent;
            }
        }

        .tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            a {
                padding: 8px 12px;
                border-radius: 999px;
                border: 1px solid ${r};
                color: ${x};
                text-decoration: none;
                background: ${l};
                transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            }
            a:hover {
                color: ${s};
                border-color: ${s};
                box-shadow: 0 0 0 3px ${b};
            }
            a.active,
            a[aria-current="page"] {
                color: ${s};
                border-color: ${s};
                box-shadow: 0 0 0 3px ${b};
            }
        }

        .gridCards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 12px;

            .card {
                background: ${l};
                border: 1px solid ${r};
                border-radius: 12px;
                box-shadow: ${y};
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 12px;

                .cardHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    h3 {
                        font-size: 16px;
                    }
                    .badge {
                        padding: 3px 8px;
                        border-radius: 999px;
                        background: color-mix(
                            in oklab,
                            ${s} 18%,
                            transparent
                        );
                        border: 1px solid ${s};
                        color: ${p};
                        font-size: 12px;
                    }
                }

                .iconBtn {
                    border: 1px solid ${r};
                    background: ${l};
                    color: ${p};
                    border-radius: 8px;
                    padding: 6px;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    &:hover {
                        border-color: ${s};
                        box-shadow: 0 0 0 3px ${b};
                    }
                }

                .kv {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 8px 12px;
                    div {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        span {
                            color: ${x};
                            font-size: 12px;
                        }
                        strong {
                            font-size: 14px;
                        }
                    }
                }

                .mutedRow {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: ${x};
                }

                .rates {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 8px;
                    .rateItem {
                        border: 1px solid ${r};
                        border-radius: 10px;
                        padding: 10px;
                        background: color-mix(
                            in oklab,
                            ${l} 96%,
                            transparent
                        );
                        .code {
                            font-weight: 700;
                        }
                        .pair {
                            color: ${x};
                            font-size: 12px;
                            margin-top: 4px;
                        }
                    }
                }

                .guideList {
                    display: grid;
                    gap: 6px;
                    li {
                        list-style: none;
                    }
                    a {
                        color: ${p};
                        text-decoration: none;
                        border-bottom: 1px dashed ${r};
                        padding-bottom: 2px;
                    }
                    a:hover {
                        color: ${s};
                        border-color: ${s};
                    }
                }

                .links {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    .link {
                        color: ${s};
                        text-decoration: none;
                    }
                }
            }
        }

        .tableSection {
            background: ${l};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${y};
            overflow: hidden;

            .tableHeadBar {
                display: flex;
                gap: 12px;
                align-items: center;
                justify-content: space-between;
                padding: 12px;
                border-bottom: 1px solid ${r};

                .search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${r};
                    background: color-mix(in oklab, ${l} 96%, transparent);
                    border-radius: 8px;
                    padding: 6px 10px;
                    input {
                        background: transparent;
                        border: none;
                        color: ${p};
                        outline: none;
                        width: 360px;
                        max-width: 55vw;
                    }
                }

                .rightLinks {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    .link {
                        color: ${s};
                        text-decoration: none;
                    }
                }
            }

            .tableWrap {
                width: 100%;
                overflow: auto;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;

                    thead th {
                        position: sticky;
                        top: 0;
                        z-index: 1;
                        text-align: left;
                        background: ${l};
                        border-bottom: 1px solid ${r};
                        padding: 10px;
                        color: ${s};
                        font-weight: 600;
                    }
                    tbody td {
                        border-bottom: 1px solid ${r};
                        padding: 10px;
                        vertical-align: middle;
                    }
                    tbody tr:hover {
                        background: rgba(0, 0, 0, 0.06);
                    }

                    .mono {
                        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                            Consolas, "Liberation Mono", "Courier New",
                            monospace;
                    }

                    .chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 12px;
                        border: 1px solid ${r};
                        &.active {
                            border-color: ${s};
                            background: color-mix(
                                in oklab,
                                ${s} 14%,
                                transparent
                            );
                        }
                        &.inactive {
                            opacity: 0.65;
                        }
                    }

                    .rowActions {
                        display: flex;
                        gap: 10px;
                        flex-wrap: wrap;
                    }

                    .linkBtn {
                        background: transparent;
                        border: none;
                        color: ${s};
                        cursor: pointer;
                        padding: 0;
                        text-decoration: none;
                    }
                    .linkBtn.danger {
                        color: #ff6b6b;
                    }

                    .actionsCol {
                        width: 260px;
                    }
                }
            }

            .footNote {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                color: ${x};
            }
        }

        .quickNav {
            display: flex;
            align-items: center;
            gap: 12px;
            a {
                color: ${s};
                text-decoration: none;
            }
            .spacer {
                flex: 1;
            }
        }

        /* Modal / toast */
        .modal {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: end center;
            pointer-events: none;
            padding: 16px;
            z-index: 50;
        }
        .modalCard {
            pointer-events: auto;
            background: ${l};
            color: ${p};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${y};
            padding: 10px 12px;
            min-width: 260px;
            animation: slideUp 0.18s ease;
        }
        .modalContent {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 2px 8px;
        }
        .closeBtn {
            width: 100%;
            margin-top: 6px;
            border-radius: 10px !important;
        }

        @keyframes slideUp {
            from {
                transform: translateY(8px);
                opacity: 0.6;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `};function v(n){return n.toString().padStart(2,"0")}function k(n){return(n instanceof Date?n:new Date(n)).toDateString()}function P(n){const d=n instanceof Date?n:new Date(n);return`${v(d.getHours())}:${v(d.getMinutes())}:${v(d.getSeconds())}hrs`}function w(n){const d=n instanceof Date?n:new Date(n);return`${k(d)} ${P(d)}`}const o={code:"INR",symbol:"₹",name:"Indian Rupee",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Banker's rounding",lastUpdated:"2025-10-04T15:38:20+05:30"},N=[{code:"INR",name:"Indian Rupee",symbol:"₹",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Banker's rounding",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"USD",name:"US Dollar",symbol:"$",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"EUR",name:"Euro",symbol:"€",format:"{amount} {symbol}",decimal:2,thousandSep:".",decimalSep:",",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"GBP",name:"Pound Sterling",symbol:"£",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"JPY",name:"Japanese Yen",symbol:"¥",format:"{symbol}{amount}",decimal:0,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"AED",name:"UAE Dirham",symbol:"د.إ",format:"{amount} {symbol}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"AUD",name:"Australian Dollar",symbol:"A$",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!1,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"CAD",name:"Canadian Dollar",symbol:"C$",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"CHF",name:"Swiss Franc",symbol:"CHF",format:"{amount} {symbol}",decimal:2,thousandSep:"’",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"CNY",name:"Chinese Yuan",symbol:"¥",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"SGD",name:"Singapore Dollar",symbol:"S$",format:"{symbol}{amount}",decimal:2,thousandSep:",",decimalSep:".",rounding:"Half up",active:!0,lastUpdated:"2025-10-04T15:38:20+05:30"},{code:"ZAR",name:"South African Rand",symbol:"R",format:"{symbol}{amount}",decimal:2,thousandSep:" ",decimalSep:",",rounding:"Half up",active:!1,lastUpdated:"2025-10-04T15:38:20+05:30"}],g={base:"INR",asOf:"2025-10-04T15:38:20+05:30",source:"Internal demo fixture",rates:{USD:.012,EUR:.011,GBP:.0095,JPY:1.85,AED:.044,AUD:.018,CAD:.016,CHF:.011,CNY:.087,SGD:.016,ZAR:.22}},F="This is a display-only demo. Actions are disabled.",G=()=>{const n=B(),[d,C]=f.useState(""),[S,m]=f.useState(""),D=f.useMemo(()=>{const a=d.trim().toLowerCase();return a?N.filter(c=>[c.code,c.name,c.symbol,c.rounding].some(u=>String(u).toLowerCase().includes(a))):N},[d]),U=()=>{const a={base:o,currencies:N,rates:g,exportedAt:new Date().toISOString()},c=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),u=URL.createObjectURL(c),h=document.createElement("a");h.href=u,h.download=`currencies_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(u)},R=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),50)},50)},T=async()=>{try{await navigator.clipboard.writeText(o.code),m("Copied base currency code to clipboard."),setTimeout(()=>m(""),1400)}catch{m("Copy not supported."),setTimeout(()=>m(""),1400)}},j=(a=F)=>m(a);return e.jsxs(O.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("div",{className:"headerRow",children:[e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(i,{to:"/settings",children:"Settings"}),e.jsx("span",{"aria-hidden":"true",children:"/"}),e.jsx(i,{to:"/settings",children:"General"}),e.jsx("span",{"aria-hidden":"true",children:"/"}),e.jsx("span",{className:"current","aria-current":"page",children:"Currencies"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"ghost",onClick:R,title:"Print",children:[e.jsx(H,{size:18})," ",e.jsx("span",{children:"Print"})]}),e.jsxs("button",{className:"ghost",onClick:U,title:"Export JSON",children:[e.jsx(E,{size:18})," ",e.jsx("span",{children:"Export"})]}),e.jsxs("button",{className:"primary",disabled:!0,onClick:()=>j(),children:[e.jsx(L,{size:18})," ",e.jsx("span",{children:"Add Currency"})]})]})]}),e.jsxs("div",{className:"tabs",children:[e.jsx(i,{to:"/settings/profile",children:"Profile"}),e.jsx(i,{to:"/settings/appearance",children:"Appearance"}),e.jsx(i,{to:"/settings/billing",children:"Billing"}),e.jsx(i,{to:"/settings/tax",children:"Tax"}),e.jsx(i,{to:"/settings/units",children:"Units"}),e.jsx(i,{to:"/settings/currencies",className:"active",children:"Currencies"}),e.jsx(i,{to:"/settings/numbering",children:"Numbering"}),e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(i,{to:"/settings/notifications",children:"Notifications"}),e.jsx(i,{to:"/settings/webhooks",children:"Webhooks"}),e.jsx(i,{to:"/settings/warehouses",children:"Warehouses"}),e.jsx(i,{to:"/settings/locations",children:"Locations"})]}),e.jsxs("section",{className:"gridCards",children:[e.jsxs("div",{className:"card",role:"region","aria-labelledby":"base-currency",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{id:"base-currency",children:"Base currency"}),e.jsx("button",{className:"iconBtn",onClick:T,title:"Copy base currency",children:e.jsx(M,{size:16})})]}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Code"}),e.jsx("strong",{children:o.code})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Name"}),e.jsx("strong",{children:o.name})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Symbol"}),e.jsx("strong",{children:o.symbol})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Format"}),e.jsx("strong",{children:o.format})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Decimals"}),e.jsx("strong",{children:o.decimal})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Separators"}),e.jsxs("strong",{children:[o.thousandSep," / ",o.decimalSep]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Rounding"}),e.jsx("strong",{children:o.rounding})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Last updated"}),e.jsx("strong",{children:w(o.lastUpdated)})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/reports/finance",className:"link",children:"View finance reports"}),e.jsx(t,{to:"/invoices",className:"link",children:"Go to invoices"})]})]}),e.jsxs("div",{className:"card",role:"region","aria-labelledby":"rate-snap",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{id:"rate-snap",children:"Exchange rates"}),e.jsx("span",{className:"badge",children:"Snapshot"})]}),e.jsxs("div",{className:"mutedRow",children:[e.jsx($,{size:16}),e.jsxs("span",{children:["Source: ",g.source," • As of ",w(g.asOf)]})]}),e.jsx("div",{className:"rates",children:Object.entries(g.rates).map(([a,c])=>e.jsxs("div",{className:"rateItem",children:[e.jsx("div",{className:"code",children:a}),e.jsxs("div",{className:"pair",children:["1 ",o.code," → ",c," ",a]})]},a))}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/finance",className:"link",children:"Open Finance"}),e.jsx(t,{to:"/reports/gst",className:"link",children:"GST reports"})]})]}),e.jsxs("div",{className:"card",role:"region","aria-labelledby":"guides",children:[e.jsx("div",{className:"cardHead",children:e.jsx("h3",{id:"guides",children:"Guides"})}),e.jsxs("ul",{className:"guideList",children:[e.jsx("li",{children:e.jsx(t,{to:"/help",children:"How currency formatting works"})}),e.jsx("li",{children:e.jsx(t,{to:"/help",children:"Multi-currency in invoices"})}),e.jsx("li",{children:e.jsx(t,{to:"/help",children:"Rounding modes & print templates"})}),e.jsx("li",{children:e.jsx(t,{to:"/help",children:"Tax & currency interplay"})})]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/settings/print-templates",className:"link",children:"Print templates"}),e.jsx(t,{to:"/settings/numbering",className:"link",children:"Document numbering"})]})]})]}),e.jsxs("section",{id:"search-print-area",className:"tableSection",children:[e.jsxs("div",{className:"tableHeadBar",children:[e.jsxs("div",{className:"search",children:[e.jsx(z,{size:18}),e.jsx("input",{type:"text",placeholder:"Search currencies (code, name, symbol, rounding)",value:d,onChange:a=>C(a.target.value),"aria-label":"Search currencies"})]}),e.jsxs("div",{className:"rightLinks",children:[e.jsx(t,{to:"/reports/finance",className:"link",children:"Reports"}),e.jsx(t,{to:"/finance/ledgers",className:"link",children:"Ledgers"}),e.jsx(t,{to:"/settings/tax",className:"link",children:"Tax"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{role:"grid","aria-label":"Currencies configuration",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Format sample"}),e.jsx("th",{children:"Decimals"}),e.jsx("th",{children:"Separators"}),e.jsx("th",{children:"Rounding"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last updated"}),e.jsx("th",{className:"actionsCol",children:"Actions"})]})}),e.jsx("tbody",{children:D.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:a.code})}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.symbol}),e.jsx("td",{className:"mono",children:a.format.replace("{symbol}",a.symbol).replace("{amount}","12,345.67")}),e.jsx("td",{children:a.decimal}),e.jsxs("td",{children:[a.thousandSep," / ",a.decimalSep]}),e.jsx("td",{children:a.rounding}),e.jsx("td",{children:e.jsx("span",{className:`chip ${a.active?"active":"inactive"}`,children:a.active?"Active":"Inactive"})}),e.jsx("td",{children:k(a.lastUpdated)}),e.jsxs("td",{className:"rowActions",children:[e.jsx("button",{className:"linkBtn",onClick:()=>n("/settings/print-templates"),children:"View format"}),e.jsx("button",{className:"linkBtn",onClick:()=>j("Demo: Edit disabled."),children:"Edit"}),e.jsx("button",{className:"linkBtn danger",onClick:()=>j("Demo: Deactivate disabled."),children:"Deactivate"})]})]},a.code))})]})}),e.jsxs("div",{className:"footNote",children:[e.jsx(I,{size:16}),e.jsx("span",{children:"Display-only demo. Exchange rates and formatting are static samples."})]})]}),e.jsxs("section",{className:"quickNav",children:[e.jsx(t,{to:"/settings",children:"← Back to Settings"}),e.jsx("div",{className:"spacer"}),e.jsx(t,{to:"/settings/numbering",children:"Next: Numbering →"})]}),S&&e.jsx("div",{className:"modal",role:"dialog","aria-live":"polite",children:e.jsxs("div",{className:"modalCard",children:[e.jsxs("div",{className:"modalContent",children:[e.jsx($,{size:18}),e.jsx("span",{children:S})]}),e.jsx("button",{className:"ghost closeBtn",onClick:()=>m(""),children:"Close"})]})})]})};export{G as default};
