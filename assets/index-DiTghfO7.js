import{d as n,a as M,u as L,r as x,j as e,N as t}from"./index-CvWKwy17.js";import{o as P,a as D,N as z,F,k as b,Y as R,q as B,l as O}from"./index-BJa2s43o.js";const p="var(--text)",r="var(--muted)",d="var(--card)",i="var(--border)",o="var(--accent)",j="var(--accent-soft)",u="var(--shadow)",U=n.div`
    width: 100%;
    color: ${p};
    display: grid;
    grid-template-rows: auto auto auto auto 1fr auto;
    gap: 14px;
`,E=n.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${d};
    border: 1px solid ${i};
    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: ${u};

    .title {
        display: grid;
        gap: 4px;
    }
    h1 {
        font-family: "Antonio", sans-serif;
        font-weight: 700;
        letter-spacing: 0.4px;
        line-height: 1.2;
    }
    p {
        color: ${r};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${i};
        border-radius: 10px;
        background: ${d};
        color: ${p};
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease, transform 0.04s ease;

        &:hover {
            border-color: ${o};
            color: ${o};
        }
        &:active {
            transform: translateY(1px);
        }
        &:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        &.btn-primary {
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
        }
        &.btn-ghost {
            background: transparent;
        }
    }

    /* tiny tooltip */
    [data-tooltip]:not([data-tooltip=""]) {
        position: relative;
    }
    [data-tooltip]:not([data-tooltip=""])::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 6px);
        right: 0;
        background: ${d};
        color: ${p};
        border: 1px solid ${i};
        padding: 4px 6px;
        border-radius: 6px;
        font-size: 11px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transform: translateY(4px);
        transition: opacity 0.15s ease, transform 0.15s ease;
        box-shadow: ${u};
    }
    [data-tooltip]:hover::after {
        opacity: 1;
        transform: translateY(0);
    }
`,Y=n.nav`
    display: flex;
    gap: 6px;
    align-items: center;
    color: ${r};
    a {
        color: inherit;
    }
    strong {
        color: ${p};
    }
`,q=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    a {
        padding: 6px 10px;
        border: 1px solid ${i};
        border-radius: 999px;
        background: ${d};
        color: ${r};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;

        &:hover {
            color: ${o};
            border-color: ${o};
        }
        &.active,
        &.active:hover {
            color: ${o};
            border-color: ${o};
            box-shadow: 0 0 0 3px ${j};
        }
    }
`,H=n.section`
    display: grid;
    grid-template-columns: repeat(5, minmax(160px, 1fr));
    gap: 10px;

    .kpi {
        display: grid;
        gap: 6px;
        padding: 14px;
        background: ${d};
        border: 1px solid ${i};
        border-radius: 12px;
        box-shadow: ${u};
    }
    .kpi-label {
        color: ${r};
        font-weight: 600;
    }
    .kpi-value {
        font-size: 28px;
        font-weight: 800;
        letter-spacing: 0.2px;
    }
    .kpi-sub {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
            monospace;
    }
`,W=n.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .search {
        position: relative;
        input {
            width: 320px;
            max-width: 60vw;
            background: ${d};
            color: ${p};
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 8px 10px 8px 30px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            &::placeholder {
                color: ${r};
            }
            &:focus {
                outline: none;
                border-color: ${o};
                box-shadow: 0 0 0 3px ${j};
            }
        }
        .search-icon {
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            color: ${r};
            pointer-events: none;
        }
    }

    .chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        .chip {
            padding: 6px 10px;
            border: 1px solid ${i};
            border-radius: 999px;
            background: ${d};
            color: ${r};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            &:hover {
                border-color: ${o};
                color: ${o};
            }
        }
        .chip-on {
            color: ${o};
            border-color: ${o};
            box-shadow: 0 0 0 3px ${j};
        }
    }
`,K=n.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    .link {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: ${d};
        color: ${r};
        text-decoration: none;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;
        svg {
            opacity: 0.9;
        }
        &:hover {
            color: ${o};
            border-color: ${o};
        }
    }
`,G=n.section`
    .table-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 8px 12px 0 12px;
        h3 {
            font-family: "Antonio", sans-serif;
        }
        .muted {
            color: ${r};
        }
    }
`,V=n.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin-top: 8px;

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${d};
        border-bottom: 1px solid ${i};
        text-align: left;
        padding: 10px 12px;
        color: ${o};
    }

    tbody td {
        border-bottom: 1px solid ${i};
        padding: 10px 12px;
        vertical-align: top;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }

    code {
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 6px;
        border-radius: 6px;
    }

    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
            monospace;
    }

    .usedin a {
        margin-right: 8px;
        text-decoration: none;
    }

    .row-actions {
        display: inline-flex;
        gap: 6px;
        button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border-radius: 8px;
            background: transparent;
            color: ${r};
            border: 1px solid ${i};
            cursor: pointer;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease, transform 0.04s ease;
            &:hover {
                color: ${o};
                border-color: ${o};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
            &.danger:hover {
                border-color: #8a2b2b;
            } /* subtle danger mood without breaking theme */
        }
    }
`,Q=n.span`
    padding: 4px 8px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 12px;
    border: 1px solid ${i};
    background: ${d};
    color: ${r};
    &[data-variant="Active"] {
        color: ${o};
        border-color: ${o};
        box-shadow: 0 0 0 3px ${j};
    }
`,X=n.section`
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 12px;
    align-items: start;
    border: 1px solid ${i};
    background: ${d};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${u};

    .icon {
        color: ${o};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
    }
    .text h4 {
        margin-bottom: 6px;
    }
    .text p {
        color: ${r};
    }
    .links {
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .links a {
        text-decoration: none;
    }
`,Z=n.footer`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${r};
    span + span {
        margin-left: 2px;
    }
`,_=n.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.6);
    display: grid;
    place-items: center;
    z-index: 9999;
`,J=n.div`
    width: min(520px, 92vw);
    background: ${d};
    color: ${p};
    border: 1px solid ${i};
    border-radius: 12px;
    box-shadow: ${u};
    padding: 16px;

    h3 {
        margin-bottom: 6px;
    }
    p {
        color: ${r};
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 12px;
        .btn-primary {
            border: 1px solid ${i};
            background: ${d};
            color: ${p};
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease;
            &:hover {
                color: ${o};
                border-color: ${o};
            }
        }
    }
`,ee=!0,v=a=>String(a).padStart(2,"0"),f=a=>a?new Date(a).toDateString():"",$=a=>{const l=new Date(a);return`${v(l.getHours())}:${v(l.getMinutes())}:${v(l.getSeconds())}hrs`},g=a=>`${f(a)} ${$(a)}`,m=[{code:"PCS",name:"Pieces",decimals:0,symbol:"pc",category:"Count",status:"Active",createdAt:"2025-06-14T10:20:33+05:30",updatedAt:"2025-09-17T17:02:11+05:30",usedIn:["products","orders"]},{code:"BOX",name:"Box",decimals:0,symbol:"box",category:"Pack",status:"Active",createdAt:"2025-02-02T09:12:22+05:30",updatedAt:"2025-07-11T21:44:10+05:30",usedIn:["products","inventory"]},{code:"STRIP",name:"Strip",decimals:0,symbol:"strip",category:"Pack",status:"Active",createdAt:"2025-01-13T12:30:10+05:30",updatedAt:"2025-09-03T19:05:52+05:30",usedIn:["medicines"]},{code:"BOTTLE",name:"Bottle",decimals:0,symbol:"btl",category:"Liquid",status:"Active",createdAt:"2025-03-26T14:58:47+05:30",updatedAt:"2025-08-29T08:10:03+05:30",usedIn:["medicines","inventory"]},{code:"TAB",name:"Tablet",decimals:0,symbol:"tab",category:"Dose",status:"Active",createdAt:"2025-05-08T16:01:39+05:30",updatedAt:"2025-09-12T12:12:12+05:30",usedIn:["medicines","orders"]},{code:"CAP",name:"Capsule",decimals:0,symbol:"cap",category:"Dose",status:"Active",createdAt:"2025-04-17T11:22:45+05:30",updatedAt:"2025-09-22T18:30:01+05:30",usedIn:["medicines"]},{code:"ML",name:"Millilitre",decimals:2,symbol:"ml",category:"Volume",status:"Active",createdAt:"2025-02-21T10:02:00+05:30",updatedAt:"2025-07-09T13:40:34+05:30",usedIn:["medicines","inventory"]},{code:"L",name:"Litre",decimals:3,symbol:"L",category:"Volume",status:"Active",createdAt:"2025-02-21T10:02:00+05:30",updatedAt:"2025-07-09T13:40:34+05:30",usedIn:["inventory"]},{code:"GM",name:"Gram",decimals:2,symbol:"g",category:"Weight",status:"Active",createdAt:"2025-06-01T07:45:50+05:30",updatedAt:"2025-07-19T11:20:01+05:30",usedIn:["products","inventory"]},{code:"KG",name:"Kilogram",decimals:3,symbol:"kg",category:"Weight",status:"Active",createdAt:"2025-06-01T07:45:50+05:30",updatedAt:"2025-07-19T11:20:01+05:30",usedIn:["inventory"]},{code:"PAIR",name:"Pair",decimals:0,symbol:"pair",category:"Count",status:"Archived",createdAt:"2025-01-02T08:20:10+05:30",updatedAt:"2025-04-02T09:20:10+05:30",usedIn:[]}],se=({open:a,title:l,body:h,confirmText:k="Confirm",onClose:y})=>a?e.jsx(_,{role:"dialog","aria-modal":"true",children:e.jsxs(J,{className:"card",children:[e.jsx("h3",{children:l}),e.jsx("p",{children:h}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:y,className:"btn-primary","aria-label":"Close",children:"Okay"})})]})}):null;function ie(){const a=M(),l=L(),[h,k]=x.useState(""),[y,w]=x.useState(!1),N=x.useMemo(()=>{const s=h.trim().toLowerCase();return s?m.filter(c=>[c.code,c.name,c.symbol,c.category,c.status].join(" ").toLowerCase().includes(s)):m},[h]),I=x.useCallback(()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},[]),S=x.useCallback(()=>{var s;try{const c=window.location.href;(s=navigator.clipboard)==null||s.writeText(c)}catch{}},[]),A=x.useCallback(s=>{s.preventDefault(),w(!0)},[]),T="2025-10-05T20:32:19.337Z",C="2025-10-06T02:02:13+05:30";return e.jsxs(U,{children:[e.jsxs(E,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Units of Measure"}),e.jsx("p",{children:"Define how quantities are represented across products, inventory, and documents."})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn-primary",disabled:ee,"data-tooltip":"Demo only",onClick:A,children:[e.jsx(P,{size:16,style:{marginRight:8}}),"New Unit"]}),e.jsxs("button",{className:"btn-ghost",onClick:I,children:[e.jsx(D,{size:16,style:{marginRight:8}}),"Print"]}),e.jsxs("button",{className:"btn-ghost",onClick:S,children:[e.jsx(z,{size:16,style:{marginRight:8}}),"Copy Link"]})]})]}),e.jsxs(Y,{"aria-label":"breadcrumbs",children:[e.jsx(t,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(t,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Units"})]}),e.jsxs(q,{children:[e.jsx(t,{to:"/settings",end:!0,children:"Overview"}),e.jsx(t,{to:"/settings/profile",children:"Profile"}),e.jsx(t,{to:"/settings/appearance",children:"Appearance"}),e.jsx(t,{to:"/settings/billing",children:"Billing"}),e.jsx(t,{to:"/settings/backups",children:"Backups"}),e.jsx(t,{to:"/settings/tokens",children:"Tokens"}),e.jsx(t,{to:"/settings/warehouses",children:"Warehouses"}),e.jsx(t,{to:"/settings/locations",children:"Locations"}),e.jsx(t,{to:"/settings/tax",children:"Tax"}),e.jsx(t,{to:"/settings/units",className:"active",children:"Units"}),e.jsx(t,{to:"/settings/currencies",children:"Currencies"}),e.jsx(t,{to:"/settings/numbering",children:"Numbering"}),e.jsx(t,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(t,{to:"/settings/notifications",children:"Notifications"}),e.jsx(t,{to:"/settings/webhooks",children:"Webhooks"})]}),e.jsxs(H,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"kpi-label",children:"Total Units"}),e.jsx("div",{className:"kpi-value",children:m.length})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"kpi-label",children:"Active"}),e.jsx("div",{className:"kpi-value",children:m.filter(s=>s.status==="Active").length})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"kpi-label",children:"Categories"}),e.jsx("div",{className:"kpi-value",children:new Set(m.map(s=>s.category)).size})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"kpi-label",children:"Last Commit"}),e.jsx("div",{className:"kpi-sub",children:g(C)})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"kpi-label",children:"Built"}),e.jsx("div",{className:"kpi-sub",children:g(T)})]})]}),e.jsxs(W,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"search",children:[e.jsx(F,{className:"search-icon",size:16}),e.jsx("input",{value:h,onChange:s=>k(s.target.value),placeholder:"Search units (code, name, symbol, category)…","aria-label":"Search units"})]}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{className:`chip ${a.search.includes("active")?"chip-on":""}`,onClick:()=>l("/settings/units?active"),title:"Filter active",children:"Active"}),e.jsx("button",{className:`chip ${a.search.includes("archived")?"chip-on":""}`,onClick:()=>l("/settings/units?archived"),title:"Filter archived",children:"Archived"})]})]}),e.jsxs(K,{children:[e.jsxs(t,{to:"/products",className:"link",children:[e.jsx(b,{})," Products"]}),e.jsxs(t,{to:"/inventory",className:"link",children:[e.jsx(b,{})," Inventory"]}),e.jsxs(t,{to:"/reports/inventory",className:"link",children:[e.jsx(b,{})," Inventory Report"]}),e.jsxs(t,{to:"/help",className:"link",children:[e.jsx(b,{})," Help"]})]})]}),e.jsx("div",{id:"search-print-area",children:e.jsxs(G,{className:"card",children:[e.jsxs("div",{className:"table-head",children:[e.jsx("h3",{children:"All Units"}),e.jsxs("span",{className:"muted",children:[N.length," shown"]})]}),e.jsxs(V,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:110},children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:110},children:"Symbol"}),e.jsx("th",{style:{width:140},children:"Category"}),e.jsx("th",{style:{width:110},children:"Decimals"}),e.jsx("th",{style:{width:150},children:"Status"}),e.jsx("th",{style:{width:240},children:"Created"}),e.jsx("th",{style:{width:240},children:"Updated"}),e.jsx("th",{style:{width:270},children:"Used In"}),e.jsx("th",{style:{width:180}})]})}),e.jsx("tbody",{children:N.map(s=>{var c;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:s.code})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.symbol}),e.jsx("td",{children:s.category}),e.jsx("td",{children:s.decimals}),e.jsx("td",{children:e.jsx(Q,{"data-variant":s.status,children:s.status})}),e.jsxs("td",{children:[e.jsx("div",{className:"mono",children:f(s.createdAt)}),e.jsx("div",{className:"muted mono",children:$(s.createdAt)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"mono",children:f(s.updatedAt)}),e.jsx("div",{className:"muted mono",children:$(s.updatedAt)})]}),e.jsx("td",{className:"usedin",children:(c=s.usedIn)!=null&&c.length?e.jsxs(e.Fragment,{children:[s.usedIn.includes("products")&&e.jsx(t,{to:"/products",children:"Products"}),s.usedIn.includes("orders")&&e.jsx(t,{to:"/orders",children:"Orders"}),s.usedIn.includes("inventory")&&e.jsx(t,{to:"/inventory",children:"Inventory"}),s.usedIn.includes("medicines")&&e.jsx(t,{to:"/medicines",children:"Medicines"})]}):e.jsx("span",{className:"muted",children:"—"})}),e.jsxs("td",{className:"row-actions",children:[e.jsxs("button",{className:"btn-ghost",disabled:!0,"data-tooltip":"Demo only",children:[e.jsx(R,{size:16}),e.jsx("span",{children:"Edit"})]}),e.jsxs("button",{className:"btn-ghost danger",disabled:!0,onClick:A,"data-tooltip":"Demo only",children:[e.jsx(B,{size:16}),e.jsx("span",{children:"Delete"})]})]})]},s.code)})})]})]})}),e.jsxs(X,{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(O,{size:18})}),e.jsxs("div",{className:"text",children:[e.jsx("h4",{children:"How units are used"}),e.jsxs("p",{children:["Units standardize quantities across products, medicines, orders, and inventory. Keep the list minimal and consistent. You can navigate to ",e.jsx(t,{to:"/settings/numbering",children:"Numbering"})," or"," ",e.jsx(t,{to:"/settings/print-templates",children:"Print Templates"})," to control how units appear on documents."]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/settings/currencies",children:"Currencies"}),e.jsx(t,{to:"/settings/tax",children:"Tax"}),e.jsx(t,{to:"/products/attributes",children:"Attributes"}),e.jsx(t,{to:"/reports/inventory",children:"Inventory Report"})]})]})]}),e.jsxs(Z,{children:[e.jsx("span",{children:"Snapshot:"}),e.jsxs("span",{children:["Commit ",g(C)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Build ",g(T)]})]}),e.jsx(se,{open:y,title:"Action unavailable in demo",body:"This is a display-only preview. Create, edit, and delete actions are disabled.",onClose:()=>w(!1)}),e.jsx("style",{children:`
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
      `})]})}export{ie as default};
