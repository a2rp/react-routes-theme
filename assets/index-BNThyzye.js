import{d as w,u as F,r as u,j as e,N as S,L as s}from"./index-LshBDmDj.js";import{aa as A,ab as L,ac as E,a as z,z as O,x as C,k as P}from"./index-CyH35cVY.js";const t="var(--text)",d="var(--muted)",i="var(--card)",n="var(--border)",a="var(--accent)",h="var(--accent-soft)",I="var(--shadow)",T={Page:w.div`
        color: ${t};
        padding: 18px;

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .pageHead {
            margin-bottom: 14px;
            .crumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${d};
                font-size: 12px;
                a {
                    color: ${d};
                }
                a:hover {
                    color: ${a};
                }
            }
            .headMain {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 16px;
                align-items: end;
                margin-top: 8px;
                .titles {
                    h1 {
                        font-family: "Antonio", sans-serif;
                        font-size: 28px;
                        letter-spacing: 0.5px;
                    }
                    .sub {
                        color: ${d};
                        margin-top: 6px;
                    }
                }
                .actions {
                    display: grid;
                    gap: 10px;
                    justify-items: end;
                    .mode {
                        display: inline-flex;
                        gap: 6px;
                        button {
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            border: 1px solid ${n};
                            background: ${i};
                            color: ${t};
                            padding: 8px 12px;
                            border-radius: 8px;
                            cursor: pointer;
                            transition: border-color 0.2s, box-shadow 0.2s,
                                color 0.2s, background 0.2s;
                            svg {
                                opacity: 0.9;
                            }
                            &:hover {
                                border-color: ${a};
                                color: ${a};
                                box-shadow: 0 0 0 3px ${h};
                            }
                            &.active {
                                color: ${a};
                                border-color: ${a};
                            }
                        }
                    }
                    .ctaRow {
                        display: inline-flex;
                        gap: 8px;
                        button,
                        .ghost,
                        .outline {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            padding: 8px 12px;
                            border-radius: 10px;
                            border: 1px solid ${n};
                            background: ${i};
                            color: ${t};
                            cursor: pointer;
                            transition: border-color 0.2s, color 0.2s,
                                background 0.2s, box-shadow 0.2s;
                            &:hover {
                                color: ${a};
                                border-color: ${a};
                                box-shadow: 0 0 0 3px ${h};
                            }
                            &.outline {
                                background: transparent;
                            }
                            &.ghost {
                                background: transparent;
                                border-color: transparent;
                            }
                        }
                    }
                }
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                margin-top: 10px;
                color: ${d};
                font-size: 12px;
                .mono {
                    color: ${t};
                }
            }
        }

        .quickLinks {
            margin: 8px 0 18px;
            h2 {
                font-size: 18px;
                margin-bottom: 10px;
                font-family: "Antonio", sans-serif;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                gap: 10px;
            }
            .chip {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 12px;
                border: 1px solid ${n};
                background: ${i};
                border-radius: 10px;
                color: ${t};
                text-decoration: none;
                transition: border-color 0.2s, color 0.2s, background 0.2s,
                    box-shadow 0.2s;
                &:hover {
                    border-color: ${a};
                    color: ${a};
                    box-shadow: 0 0 0 3px ${h};
                }
            }
        }

        .card {
            background: ${i};
            border: 1px solid ${n};
            border-radius: 12px;
            box-shadow: ${I};
        }

        .printArea {
            padding: 16px;
            margin-bottom: 18px;
            .printHead {
                margin-bottom: 10px;
            }
            .tokenGrid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            }
            .tokenCard {
                border: 1px solid ${n};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${i} 96%, transparent);
                .tokenTop {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    .label {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }
                    .name {
                        font-weight: 600;
                    }
                    .var {
                        color: ${d};
                    }
                    .swatchWrap {
                        display: flex;
                        align-items: center;
                    }
                    .swatch {
                        width: 42px;
                        height: 28px;
                        border-radius: 6px;
                        border: 1px solid ${n};
                    }
                    .shadowDemo {
                        width: 72px;
                        height: 28px;
                        border-radius: 6px;
                        background: ${i};
                    }
                }
                .valueRow {
                    margin-top: 8px;
                    .value {
                        font-size: 12px;
                        color: ${d};
                    }
                }
                .btns {
                    margin-top: 10px;
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    button,
                    .plain {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 6px 10px;
                        border-radius: 8px;
                        border: 1px solid ${n};
                        background: ${i};
                        color: ${t};
                        cursor: pointer;
                        text-decoration: none;
                        transition: border-color 0.2s, color 0.2s,
                            background 0.2s, box-shadow 0.2s;
                    }
                    button:hover,
                    .plain:hover {
                        border-color: ${a};
                        color: ${a};
                        box-shadow: 0 0 0 3px ${h};
                    }
                    .ghost {
                        background: transparent;
                    }
                    .outline {
                        background: transparent;
                    }
                }
            }
        }

        .preview {
            h2 {
                font-size: 18px;
                font-family: "Antonio", sans-serif;
                margin-bottom: 10px;
            }
            .previewGrid {
                display: grid;
                gap: 14px;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            }
            .panel {
                padding: 14px;
            }
            h3 {
                margin-bottom: 10px;
                font-size: 16px;
            }

            .btnRow {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                button {
                    border: 1px solid ${n};
                    border-radius: 10px;
                    background: ${i};
                    color: ${t};
                    padding: 8px 12px;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s,
                        box-shadow 0.2s, transform 0.05s;
                    &:hover {
                        border-color: ${a};
                        color: ${a};
                        box-shadow: 0 0 0 3px ${h};
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &.outline {
                        background: transparent;
                    }
                    &.ghost {
                        background: transparent;
                        border-color: transparent;
                    }
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }

            .form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                label {
                    font-size: 12px;
                    color: ${d};
                }
                input,
                textarea,
                select {
                    background: ${i};
                    color: ${t};
                    border: 1px solid ${n};
                    padding: 8px 10px;
                    border-radius: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                input::placeholder,
                textarea::placeholder {
                    color: ${d};
                }
                input:focus,
                textarea:focus,
                select:focus {
                    border-color: ${a};
                    outline: none;
                    box-shadow: 0 0 0 3px ${h};
                }
                .split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
            }

            .badgeRow {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 8px;
            }
            .badge {
                font-size: 12px;
                padding: 4px 8px;
                border-radius: 999px;
                background: ${i};
                border: 1px solid ${n};
            }
            .badge.alt {
                border-color: ${a};
                color: ${a};
            }
            .badge.soft {
                background: color-mix(in oklab, ${a} 12%, transparent);
                color: ${t};
                border-color: transparent;
            }

            .metaList {
                display: grid;
                gap: 4px;
                .mono {
                    color: ${t};
                }
            }

            .tableWrap {
                overflow: auto;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;
                }
                th,
                td {
                    border-bottom: 1px solid ${n};
                    padding: 8px 10px;
                }
                th {
                    text-align: left;
                    color: ${a};
                    background: ${i};
                    position: sticky;
                    top: 0;
                }
                tbody tr:hover {
                    background: rgba(0, 0, 0, 0.06);
                }
            }

            .links .linkCols {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 8px;
            }
            .links ul {
                list-style: none;
                padding-left: 0;
                margin: 0;
            }
            .links li {
                margin: 6px 0;
            }
            .links a {
                color: ${t};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            .links a:hover {
                color: ${a};
                border-color: ${a};
            }
        }

        .toast {
            position: fixed;
            right: 16px;
            bottom: 16px;
            padding: 10px 12px;
            display: inline-flex;
            gap: 6px;
            align-items: center;
            z-index: 40;
        }
    `,Modal:w.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        display: grid;
        place-items: center;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            border: 0;
        }
        .box {
            position: relative;
            z-index: 1;
            max-width: 440px;
            width: calc(100% - 32px);
            padding: 16px;
        }
        h3 {
            margin-bottom: 8px;
        }
        p {
            color: ${d};
        }
        .btnRow {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            justify-content: flex-end;
        }
        .btnRow button {
            border: 1px solid ${n};
            border-radius: 10px;
            background: ${i};
            color: ${t};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .btnRow button:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${h};
        }
        .btnRow .ghost {
            background: transparent;
        }
    `},m={date:l=>{if(!l)return"";const r=new Date(l),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r.getDay()],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()],c=String(r.getDate()).padStart(2,"0"),g=r.getFullYear();return`${p} ${b} ${c} ${g}`},time:l=>{if(!l)return"";const r=new Date(l),p=String(r.getHours()).padStart(2,"0"),b=String(r.getMinutes()).padStart(2,"0"),c=String(r.getSeconds()).padStart(2,"0");return`${p}:${b}:${c}hrs`},dateTime:l=>`${m.date(l)} ${m.time(l)}`},H=[{key:"--bg",label:"Background"},{key:"--text",label:"Text"},{key:"--muted",label:"Muted Text"},{key:"--card",label:"Card"},{key:"--border",label:"Border"},{key:"--accent",label:"Accent"},{key:"--accent-soft",label:"Accent Soft"},{key:"--shadow",label:"Shadow (effect)"},{key:"--picker-filter",label:"Picker Icon Filter"}];function B(){const l=F(),[r,p]=u.useState(()=>{const o=document.documentElement.getAttribute("data-theme");return o==="light"||o==="dark"?o:"system"}),[b,c]=u.useState(!1),[g,v]=u.useState(""),f="2025-10-06T06:42:50.910Z",k="2025-10-06T12:12:45+05:30",y=u.useMemo(()=>{const o=getComputedStyle(document.documentElement);return H.map(x=>({...x,value:o.getPropertyValue(x.key).trim()||"(unset)"}))},[r]);u.useEffect(()=>{r==="system"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",r)},[r]);const N=async o=>{try{await navigator.clipboard.writeText(o),v(o),setTimeout(()=>v(""),1200)}catch{}},M=()=>{const o=document.body;o.classList.add("print-section-mode");const x=()=>o.classList.remove("print-section-mode");window.addEventListener("afterprint",x,{once:!0}),window.print()},j=()=>c(!0);return e.jsxs(T.Page,{children:[e.jsxs("header",{className:"pageHead",children:[e.jsxs("nav",{className:"crumbs",children:[e.jsx(S,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(S,{to:"/tools",children:"Tools"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:"Theme Tokens"})]}),e.jsxs("div",{className:"headMain",children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Theme Tokens"}),e.jsx("p",{className:"sub",children:"Visual foundation of the UI — colors, border, card surfaces, shadows and focus rings. Quick-compare dark/light, copy variables, and see live component previews."})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("div",{className:"mode",children:[e.jsxs("button",{className:r==="system"?"active":"",onClick:()=>p("system"),title:"Follow OS theme",children:[e.jsx(A,{})," System"]}),e.jsxs("button",{className:r==="light"?"active":"",onClick:()=>p("light"),title:"Force Light",children:[e.jsx(L,{})," Light"]}),e.jsxs("button",{className:r==="dark"?"active":"",onClick:()=>p("dark"),title:"Force Dark",children:[e.jsx(E,{})," Dark"]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsxs("button",{onClick:M,className:"ghost",title:"Print token sheet",children:[e.jsx(z,{})," Print"]}),e.jsx("button",{onClick:j,className:"outline",title:"Export tokens JSON",children:"Export JSON"}),e.jsxs("button",{onClick:j,title:"Reset to system defaults",children:[e.jsx(O,{})," Reset to System"]})]})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:["Build: ",e.jsx("span",{className:"mono",children:m.dateTime(f)})]}),e.jsxs("div",{children:["Last Commit: ",e.jsx("span",{className:"mono",children:m.dateTime(k)})]}),e.jsxs("div",{children:["Route: ",e.jsx("span",{className:"mono",children:"/tools/theme-tokens"})]})]})]}),e.jsxs("section",{className:"quickLinks",children:[e.jsx("h2",{children:"Jump to"}),e.jsxs("div",{className:"grid",children:[e.jsx(s,{to:"/examples/theme",className:"chip",children:"Examples → Theme Demo"}),e.jsx(s,{to:"/settings/appearance",className:"chip",children:"Settings → Appearance"}),e.jsx(s,{to:"/reports",className:"chip",children:"Reports Overview"}),e.jsx(s,{to:"/products",className:"chip",children:"All Products"}),e.jsx(s,{to:"/inventory",className:"chip",children:"Inventory"}),e.jsx(s,{to:"/finance",className:"chip",children:"Finance Overview"}),e.jsx(s,{to:"/admin/system-status",className:"chip",children:"System Status"}),e.jsx(s,{to:"/help",className:"chip",children:"Help Center"}),e.jsx(s,{to:"/changelog",className:"chip",children:"Changelog"}),e.jsx(s,{to:"/roadmap",className:"chip",children:"Roadmap"}),e.jsx(s,{to:"/customers",className:"chip",children:"Customers"}),e.jsx(s,{to:"/orders",className:"chip",children:"Orders"}),e.jsx(s,{to:"/invoices",className:"chip",children:"Invoices"}),e.jsx(s,{to:"/shipments",className:"chip",children:"Shipments"}),e.jsx(s,{to:"/medicines",className:"chip",children:"Medicines"})]})]}),e.jsxs("section",{className:"printArea card",id:"search-print-area","aria-label":"Printable Theme Tokens",children:[e.jsxs("div",{className:"printHead",children:[e.jsx("h2",{children:"Token Sheet"}),e.jsx("p",{children:"Snapshot of current CSS custom properties."})]}),e.jsx("div",{className:"tokenGrid",children:y.map(({key:o,label:x,value:$})=>{const R=o!=="--shadow"&&o!=="--picker-filter";return e.jsxs("div",{className:"tokenCard",children:[e.jsxs("div",{className:"tokenTop",children:[e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:x}),e.jsx("code",{className:"var",children:o})]}),e.jsx("div",{className:"swatchWrap",children:R?e.jsx("span",{className:"swatch",style:{background:`var(${o})`},"aria-label":`${x} swatch`}):e.jsx("span",{className:"swatch shadowDemo",style:{boxShadow:`var(${o})`}})})]}),e.jsx("div",{className:"valueRow",children:e.jsx("code",{className:"value",children:$})}),e.jsxs("div",{className:"btns",children:[e.jsxs("button",{className:"outline",onClick:()=>N(o),title:"Copy variable name",children:[e.jsx(C,{})," var"]}),e.jsxs("button",{className:"ghost",onClick:()=>N($),title:"Copy resolved value",children:[e.jsx(C,{})," value"]}),e.jsxs("a",{className:"plain",href:"#",onClick:D=>{D.preventDefault(),l("/examples/theme")},title:"See tokens in action",children:[e.jsx(P,{})," demo"]})]})]},o)})})]}),e.jsxs("section",{className:"preview",children:[e.jsx("h2",{children:"Component Preview"}),e.jsxs("div",{className:"previewGrid",children:[e.jsxs("div",{className:"card panel",children:[e.jsx("h3",{children:"Buttons"}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{children:"Primary"}),e.jsx("button",{className:"outline",children:"Outline"}),e.jsx("button",{className:"ghost",children:"Ghost"}),e.jsx("button",{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{className:"card panel",children:[e.jsx("h3",{children:"Inputs"}),e.jsxs("div",{className:"form",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{placeholder:"Jane Doe"}),e.jsx("label",{children:"Email"}),e.jsx("input",{placeholder:"jane@example.com"}),e.jsx("label",{children:"Message"}),e.jsx("textarea",{rows:3,placeholder:"Write something…"}),e.jsxs("div",{className:"split",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Date"}),e.jsx("input",{type:"date"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Time"}),e.jsx("input",{type:"time"})]})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"outline",onClick:j,children:"Submit"}),e.jsx("button",{className:"ghost",onClick:j,children:"Cancel"})]})]})]}),e.jsxs("div",{className:"card panel",children:[e.jsx("h3",{children:"Cards & Badges"}),e.jsxs("div",{className:"badgeRow",children:[e.jsx("span",{className:"badge",children:"New"}),e.jsx("span",{className:"badge alt",children:"Active"}),e.jsx("span",{className:"badge soft",children:"Muted"})]}),e.jsxs("div",{className:"metaList",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Created"})," ",e.jsx("span",{className:"mono",children:m.dateTime(f)})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Updated"})," ",e.jsx("span",{className:"mono",children:m.dateTime(k)})]})]})]}),e.jsxs("div",{className:"card panel tableWrap",children:[e.jsx("h3",{children:"Table"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Usage"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:y.slice(0,7).map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"mono",children:o.key})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:o.value})}),e.jsx("td",{children:o.label}),e.jsx("td",{children:e.jsx(s,{to:"/examples/theme",children:"preview"})})]},o.key))})]})]}),e.jsxs("div",{className:"card panel links",children:[e.jsx("h3",{children:"Navigate"}),e.jsxs("div",{className:"linkCols",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{to:"/customers",children:"Customers"})}),e.jsx("li",{children:e.jsx(s,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(s,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(s,{to:"/receipts",children:"Receipts"})}),e.jsx("li",{children:e.jsx(s,{to:"/shipments",children:"Shipments"})})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{to:"/products",children:"Products"})}),e.jsx("li",{children:e.jsx(s,{to:"/categories",children:"Categories"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines",children:"Medicines"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance",children:"Finance"})})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{to:"/reports",children:"Reports"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/users",children:"Users"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings",children:"Settings"})}),e.jsx("li",{children:e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples",children:"Examples"})})]})]})]})]})]}),b&&e.jsxs(T.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demoTitle",children:[e.jsxs("div",{className:"box card",children:[e.jsx("h3",{id:"demoTitle",children:"Demo Mode"}),e.jsx("p",{children:"This is a display-only preview. Actions like export/reset are disabled here."}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{onClick:()=>c(!1),children:"OK"}),e.jsx("button",{className:"ghost",onClick:()=>c(!1),children:"Close"})]})]}),e.jsx("button",{className:"backdrop",onClick:()=>c(!1),"aria-label":"Close"})]}),e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),!!g&&e.jsxs("div",{className:"toast card",role:"status","aria-live":"polite",children:["Copied ",e.jsx("code",{className:"mono",children:g})]})]})}export{B as default};
