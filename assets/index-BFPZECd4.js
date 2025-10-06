import{d as x,r as g,j as e,N as l,at as D,L as i,w as f,au as S,K as C,av as v,aw as M,ax as T,ay as L,az as P,aA as R,aB as A,e as B}from"./index-Dvs-eF3B.js";const n="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",t="var(--card, #111318)",r="var(--border, #23262d)",s="var(--accent, #5aa9ff)",p="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",h={Wrap:x.div`
        width: 100%;
        color: ${n};
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,HeaderBar:x.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: ${t};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${p};

        .left {
            display: flex;
            flex-direction: column;
            gap: 6px;
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                a {
                    color: ${o};
                }
                strong {
                    font-weight: 700;
                    color: ${n};
                }
            }
            .meta {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${o};
                .dot {
                    opacity: 0.6;
                }
            }
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            a,
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${r};
                background: ${t};
                color: ${n};
                padding: 8px 12px;
                border-radius: 10px;
                cursor: pointer;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.04s ease;
            }
            a:hover,
            button:hover {
                border-color: ${s};
                color: ${s};
            }
            a:active,
            button:active {
                transform: translateY(1px);
            }
            .ghost {
                background: transparent;
            }
            .danger {
                border-color: ${r};
            }
            .danger:hover {
                border-color: ${s};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,Main:x.div`
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .panel {
            background: ${t};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${p};
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            h3 {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .group {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .groupHead {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${o};
                font-weight: 600;
            }
            .tiny {
                color: ${o};
                font-size: 12px;
            }

            .options {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
                &.twoCol {
                    grid-template-columns: 1fr 1fr;
                }
                label {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: color-mix(in oklab, ${t} 92%, transparent);
                    border: 1px solid ${r};
                    padding: 8px 10px;
                    border-radius: 10px;
                    input[disabled] {
                        filter: grayscale(1);
                    }
                    .icon {
                        color: ${o};
                        display: inline-flex;
                    }
                }
            }

            .swatches {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .sw {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    border: 1px solid ${r};
                    box-shadow: ${p};
                }
            }

            .tokens {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                .kv {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid ${r};
                    border-radius: 10px;
                    padding: 6px 8px;
                    code {
                        color: ${o};
                    }
                    .chip {
                        min-width: 40px;
                        height: 22px;
                        border-radius: 6px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid ${r};
                    }
                    .demo-bg {
                        background: var(--bg);
                    }
                    .demo-text {
                        color: var(--text);
                        background: color-mix(
                            in oklab,
                            var(--text) 15%,
                            transparent
                        );
                    }
                    .demo-card {
                        background: var(--card);
                    }
                    .demo-border {
                        background: color-mix(
                            in oklab,
                            var(--border) 40%,
                            transparent
                        );
                    }
                    .demo-muted {
                        color: var(--muted);
                        background: color-mix(
                            in oklab,
                            var(--muted) 15%,
                            transparent
                        );
                    }
                }
            }

            .ctaRow {
                display: flex;
                gap: 8px;
                .primary,
                button.primary {
                    border: 1px solid ${r};
                    background: ${t};
                    color: ${n};
                    padding: 8px 12px;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: border-color 0.2s ease, color 0.2s ease;
                }
                .primary:hover {
                    border-color: ${s};
                    color: ${s};
                }
                .ghost {
                    text-decoration: none;
                    color: ${o};
                    border: 1px dashed ${r};
                    padding: 8px 12px;
                    border-radius: 10px;
                }
                .ghost:hover {
                    color: ${s};
                    border-color: ${s};
                }
            }

            .shadowRow {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 10px;
                .shadowBox {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 54px;
                    border: 1px solid ${r};
                    border-radius: 12px;
                    background: ${t};
                }
                .s1 {
                    box-shadow: ${p};
                }
                .s2 {
                    box-shadow: 0 12px 38px rgba(0, 0, 0, 0.28);
                }
                .s3 {
                    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.38);
                }
            }
        }

        .preview {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .titleRow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h2 {
                    font-size: 20px;
                }
                .rightLinks {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .rightLinks a {
                    color: ${o};
                    text-decoration: none;
                    border-bottom: 1px dashed ${r};
                }
                .rightLinks a:hover {
                    color: ${s};
                    border-color: ${s};
                }
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 16px;
            }

            .card {
                background: ${t};
                border: 1px solid ${r};
                border-radius: 12px;
                box-shadow: ${p};
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .kpi {
                grid-column: span 5;
            }
            .table {
                grid-column: span 7;
            }
            .typography {
                grid-column: span 6;
            }
            .buttons {
                grid-column: span 6;
            }
            .sidebar {
                grid-column: span 5;
            }
            .links {
                grid-column: span 7;
            }

            @media (max-width: 1400px) {
                .kpi,
                .table,
                .typography,
                .buttons,
                .sidebar,
                .links {
                    grid-column: span 12;
                }
            }

            .card header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4 {
                    font-size: 14px;
                    color: ${n};
                }
                .badge {
                    font-size: 11px;
                    color: ${o};
                    border: 1px solid ${r};
                    padding: 2px 6px;
                    border-radius: 999px;
                }
            }

            .kpi .kpiNums {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                .label {
                    color: ${o};
                    font-size: 12px;
                }
                .num {
                    font-size: 22px;
                    font-weight: 700;
                }
            }

            .table .tblWrap {
                border: 1px solid ${r};
                border-radius: 10px;
                overflow: hidden;
            }
            .table table {
                width: 100%;
                border-collapse: collapse;
            }
            .table th,
            .table td {
                padding: 10px;
                border-bottom: 1px solid ${r};
            }
            .table tbody tr:hover {
                background: color-mix(in oklab, ${s} 10%, transparent);
            }
            .table th {
                color: ${s};
                background: color-mix(in oklab, ${t} 92%, transparent);
            }

            .typography .inlineLink {
                color: ${s};
                text-decoration: underline;
            }
            .typography .bullets {
                margin-left: 16px;
                color: ${o};
            }

            .buttons .btnRow {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .buttons a,
            .buttons button {
                border: 1px solid ${r};
                background: ${t};
                color: ${n};
                padding: 8px 12px;
                border-radius: 10px;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.04s ease;
            }
            .buttons a:hover,
            .buttons button:hover {
                border-color: ${s};
                color: ${s};
            }
            .buttons a:active,
            .buttons button:active {
                transform: translateY(1px);
            }
            .buttons .ghost {
                background: transparent;
                color: ${o};
            }
            .buttons .primary {
            }

            .sidebar .miniNav {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                .section {
                    border: 1px solid ${r};
                    border-radius: 10px;
                    padding: 8px;
                    background: color-mix(in oklab, ${t} 96%, transparent);
                }
                .head {
                    color: ${o};
                    font-weight: 600;
                    margin-bottom: 6px;
                }
                a {
                    display: block;
                    color: ${n};
                    padding: 4px 6px;
                    text-decoration: none;
                    border-left: 2px solid transparent;
                    border-radius: 6px;
                }
                a:hover {
                    color: ${s};
                    border-left-color: ${s};
                    background: color-mix(in oklab, ${s} 12%, transparent);
                }
            }

            .links .linksGrid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .links .linksGrid a {
                border: 1px solid ${r};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${t} 94%, transparent);
                color: ${n};
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.04s ease;
            }
            .links .linksGrid a:hover {
                border-color: ${s};
                color: ${s};
                background: color-mix(in oklab, ${s} 10%, transparent);
            }
            .links .rowLinks a {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                color: ${s};
                text-decoration: none;
            }
        }
    `,ModalBackdrop:x.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `,ModalCard:x.div`
        width: min(520px, 92vw);
        background: ${t};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${p};
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        header h3 {
            margin: 0;
        }
        section p {
            color: ${o};
        }
        footer {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        footer button {
            border: 1px solid ${r};
            background: ${t};
            color: ${n};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
        }
        footer button:hover {
            color: ${s};
            border-color: ${s};
        }
        footer button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `},H=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=a=>String(a).padStart(2,"0"),N=a=>`${H[a.getDay()]} ${O[a.getMonth()]} ${b(a.getDate())} ${a.getFullYear()}`,E=a=>`${b(a.getHours())}:${b(a.getMinutes())}:${b(a.getSeconds())}hrs`,y=a=>`${N(a)} ${E(a)}`,z="2025-10-06T06:46:59.352Z",I="2025-10-06T12:16:55+05:30",W=new Date(z),F=new Date(I),G="/react-routes-theme/",k=`${window.location.origin}${G}settings/appearance`,U=({open:a,title:m,note:u,onClose:d})=>a?e.jsx(h.ModalBackdrop,{onClick:d,children:e.jsxs(h.ModalCard,{onClick:j=>j.stopPropagation(),role:"dialog","aria-modal":"true",children:[e.jsx("header",{children:e.jsx("h3",{children:m})}),e.jsx("section",{children:e.jsx("p",{children:u})}),e.jsxs("footer",{children:[e.jsx("button",{onClick:d,children:"Close"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Confirm"})]})]})}):null;function J(){const[a,m]=g.useState(!1),[u,d]=g.useState(!1),j=g.useMemo(()=>[{to:"/settings",label:"Settings Home"},{to:"/settings/profile",label:"Profile"},{to:"/settings/appearance",label:"Appearance (You are here)"},{to:"/settings/print-templates",label:"Print Templates"},{to:"/settings/notifications",label:"Notifications"},{to:"/settings/warehouses",label:"Warehouses"},{to:"/settings/locations",label:"Locations"},{to:"/settings/tax",label:"Tax"},{to:"/settings/units",label:"Units of Measure"},{to:"/settings/currencies",label:"Currencies"},{to:"/settings/numbering",label:"Document Numbering"},{to:"/tools/theme-tokens",label:"Theme Tokens"},{to:"/examples/theme",label:"Theme Demo"},{to:"/dashboard",label:"Dashboard"},{to:"/home",label:"Home"},{to:"/reports",label:"Reports"}],[]),$=()=>{const c="print-section-mode";document.body.classList.add(c),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove(c),50)},50)},w=async()=>{try{await navigator.clipboard.writeText(k),d(!0),setTimeout(()=>d(!1),1500)}catch{d(!1)}};return e.jsxs(h.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(h.HeaderBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(l,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"›"}),e.jsx("strong",{children:"Appearance"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",y(W)]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Last Commit: ",y(F)]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:w,title:"Copy deep link",children:[e.jsx(D,{size:18}),u?"Copied":"Copy Link"]}),e.jsxs(i,{to:"/tools/theme-tokens",className:"ghost",title:"Open Theme Tokens",children:[e.jsx(f,{size:18}),"Theme Tokens"]}),e.jsxs("button",{className:"danger",onClick:()=>m(!0),title:"Reset to defaults (demo)",children:[e.jsx(S,{size:18}),"Reset Defaults"]})]})]}),e.jsxs(h.Main,{id:"search-print-area",children:[e.jsxs("section",{className:"panel",children:[e.jsxs("h3",{children:[e.jsx(C,{})," Appearance Controls"]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(v,{})," Theme Mode"]}),e.jsxs("div",{className:"options",children:[e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"radio",name:"mode",disabled:!0}),e.jsx("span",{className:"icon",children:e.jsx(v,{})}),"System"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"radio",name:"mode",disabled:!0}),e.jsx("span",{className:"icon",children:e.jsx(M,{})}),"Light"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"radio",name:"mode",disabled:!0}),e.jsx("span",{className:"icon",children:e.jsx(T,{})}),"Dark"]})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(L,{})," Accent & Tokens"]}),e.jsxs("div",{className:"swatches",children:[e.jsx("span",{className:"sw",style:{background:"var(--accent)"},title:"--accent"}),e.jsx("span",{className:"sw",style:{background:"color-mix(in oklab, var(--accent) 70%, transparent)"},title:"accent 70%"}),e.jsx("span",{className:"sw",style:{background:"color-mix(in oklab, var(--accent) 40%, transparent)"},title:"accent 40%"}),e.jsx("span",{className:"sw",style:{background:"var(--accent-soft)"},title:"--accent-soft"})]}),e.jsxs("div",{className:"tokens",children:[e.jsxs("div",{className:"kv",children:[e.jsx("code",{children:"--bg"}),e.jsx("span",{className:"chip demo-bg"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("code",{children:"--text"}),e.jsx("span",{className:"chip demo-text",children:"Aa"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("code",{children:"--card"}),e.jsx("span",{className:"chip demo-card"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("code",{children:"--border"}),e.jsx("span",{className:"chip demo-border"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("code",{children:"--muted"}),e.jsx("span",{className:"chip demo-muted",children:"Aa"})]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx(i,{to:"/examples/theme",className:"ghost",children:"Preview Tokens"}),e.jsx(i,{to:"/tools/theme-tokens",className:"primary",children:"Edit Tokens"})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(P,{})," Radius & Density"]}),e.jsxs("div",{className:"options twoCol",children:[e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Compact"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Comfortable"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Spacious"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Extra Round Corners"]})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(R,{})," Shadows"]}),e.jsxs("div",{className:"shadowRow",children:[e.jsx("span",{className:"shadowBox s1",children:"Card"}),e.jsx("span",{className:"shadowBox s2",children:"Popover"}),e.jsx("span",{className:"shadowBox s3",children:"Dropdown"})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(A,{})," Layout & Sidebar"]}),e.jsxs("div",{className:"options twoCol",children:[e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Sidebar Collapsed"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Floating Submenu"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Sticky Header"]}),e.jsxs("label",{title:"Demo only",children:[e.jsx("input",{type:"checkbox",disabled:!0})," Bordered Tables"]})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"groupHead",children:[e.jsx(B,{})," Print"]}),e.jsx("div",{className:"tiny",children:"Uses a scoped print mode for the highlighted section."}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{onClick:$,title:"Print the preview area only",children:"Print Preview"}),e.jsx(i,{to:"/settings/print-templates",className:"ghost",children:"Print Templates"})]})]})]}),e.jsxs("section",{className:"preview",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{children:"Theme Preview"}),e.jsxs("div",{className:"rightLinks",children:[e.jsx(i,{to:"/dashboard",children:"Dashboard"}),e.jsx(i,{to:"/reports",children:"Reports"}),e.jsx(i,{to:"/products",children:"Products"}),e.jsx(i,{to:"/customers",children:"Customers"}),e.jsx(i,{to:"/invoices",children:"Invoices"}),e.jsx(i,{to:"/receipts",children:"Receipts"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("article",{className:"card kpi",children:[e.jsxs("header",{children:[e.jsx("h4",{children:"Surface · Card"}),e.jsx("span",{className:"badge",children:"Live"})]}),e.jsxs("div",{className:"kpiNums",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Orders"}),e.jsx("div",{className:"num",children:"1,240"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Invoiced"}),e.jsx("div",{className:"num",children:"₹86.4L"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Pending"}),e.jsx("div",{className:"num",children:"72"})]})]}),e.jsx("footer",{children:e.jsxs("span",{children:["Updated: ",N(new Date)]})})]}),e.jsxs("article",{className:"card table",children:[e.jsx("header",{children:e.jsx("h4",{children:"Table · Borders & Zebra"})}),e.jsx("div",{className:"tblWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{children:"Expiry"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"MED-AMOX-500"}),e.jsx("td",{children:"Amoxicillin 500mg"}),e.jsx("td",{children:"Antibiotic"}),e.jsx("td",{children:"₹58.00"}),e.jsx("td",{children:"Sat Oct 04 2025"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"MED-PCM-650"}),e.jsx("td",{children:"Paracetamol 650"}),e.jsx("td",{children:"Analgesic"}),e.jsx("td",{children:"₹25.00"}),e.jsx("td",{children:"Sat Oct 04 2025"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"MED-IBU-400"}),e.jsx("td",{children:"Ibuprofen 400"}),e.jsx("td",{children:"NSAID"}),e.jsx("td",{children:"₹42.00"}),e.jsx("td",{children:"Sat Oct 04 2025"})]})]})]})}),e.jsxs("footer",{className:"rowLinks",children:[e.jsx(i,{to:"/medicines",children:"Open Catalog"}),e.jsx(i,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})]})]}),e.jsxs("article",{className:"card typography",children:[e.jsx("header",{children:e.jsx("h4",{children:"Typography · Antonio + System Sans"})}),e.jsxs("div",{className:"typo",children:[e.jsx("h1",{children:"H1 Headline"}),e.jsx("h2",{children:"H2 Section"}),e.jsx("h3",{children:"H3 Subsection"}),e.jsxs("p",{children:["Body text sample. This block demonstrates contrast, line-height, and link states.",e.jsx(l,{to:"/examples/theme",className:"inlineLink",children:"Open theme demo"}),"."]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Readable density"}),e.jsx("li",{children:"Consistent spacing"}),e.jsx("li",{children:"Accessible focus rings"})]})]}),e.jsx("footer",{children:e.jsxs("span",{children:["Snapshot: ",y(new Date)]})})]}),e.jsxs("article",{className:"card buttons",children:[e.jsx("header",{children:e.jsx("h4",{children:"Buttons · States"})}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{children:"Primary"}),e.jsx("button",{className:"ghost",children:"Ghost"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Disabled"})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx(i,{to:"/orders",className:"primary",children:"View Orders"}),e.jsx(i,{to:"/sales/quotes",className:"ghost",children:"Quotes"}),e.jsx(i,{to:"/shipments",className:"primary",children:"Shipments"})]})]}),e.jsxs("article",{className:"card sidebar",children:[e.jsx("header",{children:e.jsx("h4",{children:"Sidebar Preview"})}),e.jsxs("div",{className:"miniNav",children:[e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"head",children:"Core"}),e.jsx(l,{to:"/home",end:!0,children:"Home"}),e.jsx(l,{to:"/dashboard",end:!0,children:"Dashboard"}),e.jsx(l,{to:"/search",end:!0,children:"Search"})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"head",children:"Billing"}),e.jsx(l,{to:"/invoices",end:!0,children:"Invoices"}),e.jsx(l,{to:"/receipts",end:!0,children:"Receipts"}),e.jsx(l,{to:"/invoices/credit-notes",end:!0,children:"Credit Notes"})]})]})]}),e.jsxs("article",{className:"card links",children:[e.jsx("header",{children:e.jsx("h4",{children:"Quick Links"})}),e.jsx("div",{className:"linksGrid",children:j.map(c=>e.jsx(i,{to:c.to,children:c.label},c.to))}),e.jsx("footer",{className:"rowLinks",children:e.jsxs("a",{href:k,target:"_blank",rel:"noreferrer",children:["Open this page ",e.jsx(f,{})]})})]})]})]})]}),e.jsx(U,{open:a,title:"Reset to Defaults",note:"This is a demo preview. Changes are disabled.",onClose:()=>m(!1)})]})}export{J as default};
