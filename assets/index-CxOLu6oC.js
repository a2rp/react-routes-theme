import{d as c,u as z,r as x,j as s,N as l}from"./index-CvWKwy17.js";import{a2 as L,b as r,a as V,m as k,a3 as d,k as t,a4 as w,a5 as y,D as H}from"./index-BJa2s43o.js";const p="var(--text, #f3f4f6)",j="var(--muted, #a0a0a7)",g="var(--card, #111318)",n="var(--border, #23262d)",i="var(--accent, #5aa9ff)",E="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",T=c.div`
    width: 100%;
    color: ${p};
    display: block;
    padding: 18px;
`,J=c.header`
    display: grid;
    gap: 14px;
    margin-bottom: 14px;

    .title {
        display: flex;
        align-items: center;
        gap: 12px;

        h1 {
            font-size: 20px;
            line-height: 1.2;
            margin: 0 0 2px;
        }
        .muted {
            color: ${j};
        }
        svg {
            opacity: 0.85;
        }
    }
`,A=c.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid ${n};
        border-radius: 8px;
        background: ${g};
        color: ${p};
        box-shadow: ${E};
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            transform 0.05s ease;
        cursor: pointer;
    }
    button:hover {
        border-color: ${i};
        box-shadow: 0 10px 30px rgba(2, 6, 23, 0.15);
        color: ${i};
    }
    button:active {
        transform: translateY(1px);
    }
`,B=c.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    color: ${j};
    font-size: 12px;

    svg {
        vertical-align: -2px;
        margin-right: 4px;
        opacity: 0.8;
    }
    strong {
        color: ${p};
    }
`,U=c.div`
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`,N=c.section`
    background: ${g};
    border: 1px solid ${n};
    border-radius: 12px;
    box-shadow: ${E};
    padding: 14px;

    .cardHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        h3 {
            font-size: 16px;
        }
        .badge {
            border: 1px solid ${n};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${j};
            font-size: 12px;
            user-select: none;
        }
    }

    .rows {
        display: grid;
        gap: 8px;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.08);
        border: 1px solid ${n};
        border-radius: 10px;
        padding: 10px 12px;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: ${i};
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
        .right {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 8px;
                border-radius: 8px;
                border: 1px dashed ${n};
                text-decoration: none;
                color: ${p};
            }
            .link:hover {
                border-color: ${i};
                color: ${i};
            }

            button {
                padding: 6px 10px;
                border: 1px solid ${n};
                border-radius: 8px;
                background: ${g};
                color: ${p};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.05s ease;
            }
            button:hover {
                border-color: ${i};
                color: ${i};
            }
            button:active {
                transform: translateY(1px);
            }

            .meta {
                color: ${j};
                font-size: 12px;
                margin-right: 8px;
            }
        }
    }

    .importWrap {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }

        .dropZone {
            display: grid;
            place-items: center;
            gap: 6px;
            height: 180px;
            border: 2px dashed ${n};
            border-radius: 12px;
            user-select: none;
            transition: border-color 0.2s ease, color 0.2s ease;
            cursor: pointer;
        }
        .dropZone:hover {
            border-color: ${i};
            color: ${i};
        }

        .map {
            border: 1px solid ${n};
            border-radius: 12px;
            padding: 12px;

            h4 {
                margin-bottom: 6px;
            }
            .mapRows {
                display: grid;
                gap: 6px;
                margin-top: 8px;
            }
            .mapRow {
                display: grid;
                grid-template-columns: 1fr 24px 1fr;
                align-items: center;
                border: 1px solid ${n};
                border-radius: 8px;
                padding: 6px 8px;
            }
            .mapRow span:nth-child(2) {
                text-align: center;
                color: ${j};
            }
            .buttons {
                margin-top: 10px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
        }
    }

    .quickLinks {
        h4 {
            margin-bottom: 6px;
        }
        ul {
            display: grid;
            gap: 6px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            margin-left: 15px;
        }
        .link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px dashed ${n};
            color: ${p};
            text-decoration: none;
        }
        .link:hover {
            border-color: ${i};
            color: ${i};
        }
    }
`,Y=c.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 8px 0;
    display: grid;
    gap: 8px;

    li .link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid ${n};
        text-decoration: none;
        color: ${p};
    }
    li .link:hover {
        border-color: ${i};
        color: ${i};
    }
`,Z=c.p`
    color: ${j};
    font-size: 12px;
    margin: 0;
`,K=c.hr`
    border: none;
    height: 1px;
    margin: 12px 0;
    background: ${n};
`,W=c.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(2, 6, 23, 0.6);
    z-index: 9999;
`,X=c.div`
    width: min(560px, 94vw);
    background: ${g};
    border: 1px solid ${n};
    border-radius: 12px;
    box-shadow: ${E};
    padding: 12px;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        h3 {
            font-size: 16px;
        }
        .ghost {
            border: 1px solid ${n};
            background: transparent;
            color: ${p};
            padding: 6px 8px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease;
        }
        .ghost:hover {
            border-color: ${i};
            color: ${i};
        }
    }
    .body {
        color: ${p};
    }
    .footer {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            padding: 8px 12px;
            border: 1px solid ${n};
            border-radius: 8px;
            background: ${g};
            color: ${p};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                transform 0.05s ease;
        }
        button:hover {
            border-color: ${i};
            color: ${i};
        }
        button:active {
            transform: translateY(1px);
        }
    }
`;function f(o){return o.toDateString()}function $(o){return String(o).padStart(2,"0")}function q(o){const h=$(o.getHours()),u=$(o.getMinutes()),b=$(o.getSeconds());return`${h}:${u}:${b}hrs`}function C(o){return`${f(o)} ${q(o)}`}const O=new Date,G=({open:o,onClose:h,title:u="Demo mode",children:b})=>o?s.jsx(W,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:s.jsxs(X,{children:[s.jsxs("div",{className:"header",children:[s.jsx("h3",{id:"demo-modal-title",children:u}),s.jsx("button",{onClick:h,className:"ghost","aria-label":"Close modal",children:"×"})]}),s.jsx("div",{className:"body",children:b}),s.jsx("div",{className:"footer",children:s.jsx("button",{onClick:h,children:"OK"})})]})}):null,ss=()=>{z();const[o,h]=x.useState(!1),[u,b]=x.useState(null),m=x.useCallback(a=>{b(a),h(!0)},[]),D=x.useCallback(()=>h(!1),[]),S=x.useMemo(()=>C(new Date(O.getTime()-1e3*60*60*26)),[]),R=x.useMemo(()=>C(new Date(O.getTime()-1e3*60*40)),[]),I=x.useMemo(()=>C(new Date(O.getTime()-1e3*60*5)),[]),F=x.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),50)}},[]),e=x.useCallback(a=>{m(s.jsxs("div",{children:[s.jsxs("p",{children:[s.jsx("strong",{children:a})," export is disabled in this showcase."]}),s.jsx("p",{children:"You can still browse, copy deep links, or print this summary."})]}))},[m]),v=x.useCallback(()=>{m(s.jsxs("div",{children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Import"})," is disabled in this showcase."]}),s.jsx("p",{children:"In a real app, you would upload a JSON/CSV and map columns here."})]}))},[m]),M=[{to:"/customers",label:"Customers"},{to:"/orders",label:"Orders"},{to:"/products",label:"Products"},{to:"/categories",label:"Categories"},{to:"/inventory",label:"Inventory"},{to:"/vendors",label:"Vendors"},{to:"/purchase-orders",label:"Purchase Orders"},{to:"/shipments",label:"Shipments"},{to:"/invoices",label:"Invoices"},{to:"/receipts",label:"Receipts"},{to:"/finance",label:"Finance"},{to:"/reports",label:"Reports"},{to:"/settings",label:"Settings"},{to:"/admin/users",label:"Admin → Users"}],P=[{label:"Customer CUST-1001",to:"/customers/CUST-1001"},{label:"Order ORD-3001",to:"/orders/ORD-3001"},{label:"Product MED-AMOX-500",to:"/products/MED-AMOX-500"},{label:"Invoice INV-2031",to:"/invoices/INV-2031"},{label:"Shipment SHP-5501",to:"/shipments/SHP-5501"},{label:"Vendor VEND-2002",to:"/vendors/VEND-2002"}];return s.jsxs(T,{children:[s.jsxs("section",{id:"search-print-area",children:[s.jsxs(J,{children:[s.jsxs("div",{className:"title",children:[s.jsx(L,{"aria-hidden":!0,size:22}),s.jsxs("div",{children:[s.jsx("h1",{children:"Import / Export"}),s.jsx("p",{className:"muted",children:"Display-only showcase. Explore exports, print summaries, and jump via deep links."})]})]}),s.jsxs(A,{children:[s.jsxs("button",{onClick:()=>e("Full"),title:"Export all data as JSON",children:[s.jsx(r,{size:16})," Export All (JSON)"]}),s.jsxs("button",{onClick:()=>e("Customers"),title:"Export customers as JSON",children:[s.jsx(r,{size:16})," Export Customers"]}),s.jsxs("button",{onClick:()=>e("Invoices"),title:"Export invoices as JSON",children:[s.jsx(r,{size:16})," Export Invoices"]}),s.jsxs("button",{onClick:F,title:"Print the summary section",children:[s.jsx(V,{size:16})," Print Summary"]})]}),s.jsxs(B,{children:[s.jsxs("span",{children:[s.jsx(k,{})," Last full export: ",s.jsx("strong",{children:S})]}),s.jsxs("span",{children:[s.jsx(k,{})," Customers: ",s.jsx("strong",{children:R})]}),s.jsxs("span",{children:[s.jsx(k,{})," Invoices: ",s.jsx("strong",{children:I})]})]})]}),s.jsxs(U,{children:[s.jsxs(N,{children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("h3",{children:"Collections"}),s.jsx("span",{className:"badge",children:"Export"})]}),s.jsxs("div",{className:"rows",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Customers"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/customers",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Customers"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Orders"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/orders",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Orders"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Products"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/products",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Products"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Categories"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/categories",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Categories"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Inventory"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/inventory",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Inventory"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Vendors"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/vendors",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Vendors"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Purchase Orders"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/purchase-orders",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Purchase Orders"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Shipments"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/shipments",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Shipments"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Invoices"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/invoices",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Invoices"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Receipts"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/receipts",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Receipts"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Finance (Ledgers, Journals)"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/finance",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Finance"),children:[s.jsx(r,{})," Export"]})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(d,{})," ",s.jsx("span",{children:"Reports"})]}),s.jsxs("div",{className:"right",children:[s.jsxs(l,{to:"/reports",end:!0,className:"link",children:[s.jsx(t,{})," Open"]}),s.jsxs("button",{onClick:()=>e("Reports"),children:[s.jsx(r,{})," Export"]})]})]})]})]}),s.jsxs(N,{children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("h3",{children:"Import"}),s.jsx("span",{className:"badge",children:"Disabled"})]}),s.jsxs("div",{className:"importWrap",children:[s.jsxs("div",{className:"dropZone",role:"button",tabIndex:0,onClick:v,onKeyDown:a=>(a.key==="Enter"||a.key===" ")&&v(),children:[s.jsx(w,{size:24}),s.jsx("p",{children:"Drag & drop JSON/CSV here"}),s.jsx(Z,{children:"Or click to select a file"})]}),s.jsxs("div",{className:"map",children:[s.jsx("h4",{children:"Column Mapping"}),s.jsx("p",{children:"Preview how incoming columns would map to entities."}),s.jsxs("div",{className:"mapRows",children:[s.jsxs("div",{className:"mapRow",children:[s.jsx("span",{children:"customer_id"}),s.jsx("span",{children:"→"}),s.jsx("strong",{children:"Customer ID"})]}),s.jsxs("div",{className:"mapRow",children:[s.jsx("span",{children:"name"}),s.jsx("span",{children:"→"}),s.jsx("strong",{children:"Display Name"})]}),s.jsxs("div",{className:"mapRow",children:[s.jsx("span",{children:"email"}),s.jsx("span",{children:"→"}),s.jsx("strong",{children:"Email"})]}),s.jsxs("div",{className:"mapRow",children:[s.jsx("span",{children:"phone"}),s.jsx("span",{children:"→"}),s.jsx("strong",{children:"Phone"})]})]}),s.jsxs("div",{className:"buttons",children:[s.jsxs("button",{onClick:v,children:[s.jsx(w,{})," Validate"]}),s.jsxs("button",{onClick:v,children:[s.jsx(w,{})," Import"]})]})]})]})]}),s.jsxs(N,{children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("h3",{children:"Snapshots"}),s.jsx("span",{className:"badge",children:"Read-only"})]}),s.jsxs("div",{className:"rows",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(y,{})," ",s.jsx("span",{children:"Baseline (Demo)"})]}),s.jsxs("div",{className:"right",children:[s.jsxs("span",{className:"meta",children:[f(new Date(2025,9,1))," 09:30:00hrs"]}),s.jsxs("button",{onClick:()=>e("Snapshot: Baseline"),children:[s.jsx(r,{})," Download"]}),s.jsx("button",{onClick:()=>m(s.jsx("p",{children:"Restore is disabled in the demo."})),children:"Restore"})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(y,{})," ",s.jsx("span",{children:"Sales Only"})]}),s.jsxs("div",{className:"right",children:[s.jsxs("span",{className:"meta",children:[f(new Date(2025,9,3))," 12:05:12hrs"]}),s.jsxs("button",{onClick:()=>e("Snapshot: Sales Only"),children:[s.jsx(r,{})," Download"]}),s.jsx("button",{onClick:()=>m(s.jsx("p",{children:"Restore is disabled in the demo."})),children:"Restore"})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"left",children:[s.jsx(y,{})," ",s.jsx("span",{children:"Inventory Focus"})]}),s.jsxs("div",{className:"right",children:[s.jsxs("span",{className:"meta",children:[f(new Date(2025,9,4))," 18:28:57hrs"]}),s.jsxs("button",{onClick:()=>e("Snapshot: Inventory Focus"),children:[s.jsx(r,{})," Download"]}),s.jsx("button",{onClick:()=>m(s.jsx("p",{children:"Restore is disabled in the demo."})),children:"Restore"})]})]})]})]}),s.jsxs(N,{children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("h3",{children:"Deep Links"}),s.jsx("span",{className:"badge",children:"Navigate"})]}),s.jsx(Y,{children:P.map(a=>s.jsx("li",{children:s.jsxs(l,{to:a.to,className:"link",children:[s.jsx(H,{})," ",a.label]})},a.to))}),s.jsx(K,{}),s.jsxs("div",{className:"quickLinks",children:[s.jsx("h4",{children:"Quick sections"}),s.jsx("ul",{children:M.map(a=>s.jsx("li",{children:s.jsxs(l,{to:a.to,end:!0,className:"link",children:[s.jsx(t,{})," ",a.label]})},a.to))})]})]})]})]}),s.jsx("style",{children:`
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
      `}),s.jsx(G,{open:o,onClose:D,children:u})]})};export{ss as default};
