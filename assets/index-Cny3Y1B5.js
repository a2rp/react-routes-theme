import{d as v,s as U,u as F,r as p,j as e,N as a}from"./index-LshBDmDj.js";const A="var(--bg, #0d1117)",s="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",l="var(--card, #111318)",r="var(--border, #23262d)",o="var(--accent, #5aa9ff)",u="var(--accent-soft, rgba(90,169,255,0.15))",f="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",W=v.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    color: ${s};
`,z=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${l};
    border: 1px solid ${r};
    padding: 12px 14px;
    border-radius: 12px;
    box-shadow: ${f};

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        .crumb {
            color: ${n};
        }
        .crumb.current {
            color: ${s};
            font-weight: 600;
        }
        .sep {
            color: ${n};
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button,
        a {
            background: ${l};
            border: 1px solid ${r};
            color: ${s};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease, transform 0.05s ease;
        }
        button.primary {
            border-color: ${o};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        button:hover:not(:disabled),
        a:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
        a.ghost,
        button.ghost {
            opacity: 0.9;
        }
        .danger {
            border-color: #b23b3b;
        } /* subtle, not green */
    }
`,K=v.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(120px, 1fr));
    gap: 10px;

    .kpi {
        background: ${l};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 12px;
        box-shadow: ${f};
        display: flex;
        flex-direction: column;
        gap: 6px;

        .label {
            color: ${n};
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
        }
        .value.small {
            font-size: 12px;
            color: ${s};
            font-weight: 500;
        }
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,q=v.div`
    background: ${l};
    border: 1px solid ${r};
    border-radius: 12px;
    box-shadow: ${f};
    padding: 12px;

    .row {
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        & + .row {
            margin-top: 10px;
        }
    }

    input[type="text"] {
        flex: 1;
        min-width: 260px;
        border: 1px solid ${r};
        background: ${A};
        color: ${s};
        padding: 10px 12px;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.25s ease, box-shadow 0.25s ease;
        &::placeholder {
            color: ${n};
        }
        &:focus {
            border-color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
    }

    .status {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        .chip {
            border: 1px solid ${r};
            background: ${l};
            color: ${s};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .chip:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
        .chip.active {
            border-color: ${o};
            color: ${o};
        }
    }

    .secondary {
        .hint {
            color: ${n};
            margin-right: 6px;
        }
        .mini {
            border: 1px solid ${r};
            padding: 4px 8px;
            border-radius: 6px;
            text-decoration: none;
            color: ${s};
        }
        .mini:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
    }
`,Q=v.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 84px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid ${r};
    font-size: 12px;
    letter-spacing: 0.2px;
    background: rgba(255, 255, 255, 0.02);

    &[data-type="approved"] {
        border-color: ${o};
        color: ${o};
    }
    &[data-type="draft"] {
        color: #b0b0b7;
    }
    &[data-type="archived"] {
        color: #b23b3b;
    }
`,X=v.div`
    background: ${l};
    border: 1px solid ${r};
    border-radius: 12px;
    box-shadow: ${f};
    overflow: hidden;

    .thead,
    .tfoot {
        background: ${A};
        border-bottom: 1px solid ${r};
    }

    .tr {
        display: grid;
        grid-template-columns: 180px 1fr 110px 120px 100px 130px 220px 220px 1fr;
        gap: 0;
        align-items: center;
        min-height: 52px;
        border-bottom: 1px solid ${r};
        padding: 0 10px;
    }

    .th {
        font-weight: 700;
        color: ${o};
        padding: 10px;
    }

    .td {
        padding: 10px;
        color: ${s};
        .muted {
            color: ${n};
        }
    }

    .td.code a {
        font-weight: 700;
        text-decoration: none;
        color: ${s};
    }
    .td.code a:hover {
        color: ${o};
        text-decoration: underline;
    }

    .td.product .sub {
        font-size: 12px;
        color: ${n};
        margin-top: 2px;
    }

    .td.actions {
        display: inline-flex;
        gap: 10px;
        flex-wrap: wrap;
        a,
        button {
            border: 1px solid ${r};
            background: ${l};
            color: ${s};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.05s ease;
        }
        a:hover,
        button:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
        .danger {
            border-color: #b23b3b;
        }
    }

    .tbody .tr:hover {
        background: rgba(255, 255, 255, 0.02);
    }

    .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 10px;
        .emptyCard {
            border: 1px solid ${r};
            background: ${l};
            padding: 18px;
            border-radius: 12px;
            text-align: center;
            box-shadow: ${f};
            h3 {
                margin-bottom: 6px;
            }
            p {
                color: ${n};
                margin-bottom: 10px;
            }
            .row {
                display: flex;
                gap: 8px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .row > * {
                border: 1px solid ${r};
                background: ${A};
                color: ${s};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
            }
            .row > *:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${u};
            }
        }
    }

    .tfoot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        .pager {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .pager button {
            border: 1px solid ${r};
            background: ${l};
            color: ${s};
            padding: 4px 8px;
            border-radius: 6px;
        }
        .pager button:hover:not(:disabled) {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
        .pager button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .pageInfo {
            color: ${n};
            padding: 0 8px;
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${n};
        }
        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${r};
        }
        .dot.a {
            border-color: ${o};
        }
        .dot.d {
            border-color: #b0b0b7;
        }
        .dot.r {
            border-color: #b23b3b;
        }
    }

    @media (max-width: 1280px) {
        .tr {
            grid-template-columns: 140px 1fr 90px 110px 90px 110px 200px 200px 1fr;
        }
    }
    @media (max-width: 1024px) {
        .tr {
            grid-template-columns: 140px 1fr 90px 110px 90px 110px 200px 1fr;
        }
        .tr .td.actions {
            grid-column: span 2;
        }
    }
    @media (max-width: 860px) {
        .thead {
            display: none;
        }
        .tr {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            padding: 10px;
        }
        .td,
        .th {
            padding: 6px;
        }
        .td.product {
            grid-column: 1 / span 2;
        }
        .td.actions {
            grid-column: 1 / span 2;
        }
    }
`,J=v.div`
    position: fixed;
    inset: 0;
    z-index: 60;
    .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .card {
        position: relative;
        z-index: 1;
        max-width: 520px;
        width: calc(100% - 24px);
        margin: 10vh auto 0;
        background: ${l};
        border: 1px solid ${r};
        border-radius: 14px;
        box-shadow: ${f};
        padding: 16px;

        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${n};
            margin-bottom: 14px;
        }

        .meta {
            display: grid;
            grid-template-columns: 120px 1fr;
            border: 1px dashed ${r};
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 12px;
            .label {
                color: ${n};
            }
            .value {
                font-weight: 700;
            }
        }

        .buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .buttons > * {
            border: 1px solid ${r};
            background: ${l};
            color: ${s};
            padding: 8px 12px;
            border-radius: 10px;
            text-decoration: none;
        }
        .buttons > *:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${u};
        }
    }
`,P=!0,O=d=>{try{return new Date(d).toDateString()}catch{return d}},G=d=>{try{const j=new Date(d),w=String(j.getHours()).padStart(2,"0"),x=String(j.getMinutes()).padStart(2,"0"),N=String(j.getSeconds()).padStart(2,"0");return`${w}:${x}:${N}hrs`}catch{return d}},D=d=>`${O(d)} ${G(d)}`,b=[{id:"BOM-1001",productId:"PROD-AXN-100",productName:'Axon Monitor 24"',revision:"R3",status:"Approved",uom:"Unit",components:12,effectiveFrom:"2025-07-01T09:30:00+05:30",effectiveTo:null,updatedAt:"2025-10-02T15:38:20+05:30"},{id:"BOM-1002",productId:"PROD-AXN-200",productName:'Axon Monitor 27"',revision:"R1",status:"Draft",uom:"Unit",components:15,effectiveFrom:"2025-09-14T10:05:00+05:30",effectiveTo:null,updatedAt:"2025-10-01T12:12:40+05:30"},{id:"BOM-1003",productId:"PROD-SMC-500",productName:"Smart Cart v2",revision:"R7",status:"Approved",uom:"Assembly",components:28,effectiveFrom:"2025-08-10T11:00:00+05:30",effectiveTo:null,updatedAt:"2025-10-04T09:10:05+05:30"},{id:"BOM-1004",productId:"PROD-PWR-90",productName:"Power Supply 90W",revision:"R2",status:"Archived",uom:"Unit",components:7,effectiveFrom:"2024-12-01T00:00:00+05:30",effectiveTo:"2025-06-30T23:59:59+05:30",updatedAt:"2025-07-02T18:00:00+05:30"},{id:"BOM-1005",productId:"PROD-MED-AMOX-500",productName:"Amoxicillin 500mg (Tab)",revision:"R5",status:"Approved",uom:"Pack",components:6,effectiveFrom:"2025-05-12T08:40:00+05:30",effectiveTo:null,updatedAt:"2025-09-30T14:22:30+05:30"},{id:"BOM-1006",productId:"PROD-RCK-12",productName:"Server Rack 12U",revision:"R1",status:"Draft",uom:"Assembly",components:19,effectiveFrom:"2025-09-02T10:20:00+05:30",effectiveTo:null,updatedAt:"2025-10-03T13:50:10+05:30"},{id:"BOM-1007",productId:"PROD-CART-KIT",productName:"Pharma Cart Kit",revision:"R4",status:"Approved",uom:"Kit",components:11,effectiveFrom:"2025-06-01T10:00:00+05:30",effectiveTo:null,updatedAt:"2025-10-04T08:05:11+05:30"},{id:"BOM-1008",productId:"PROD-LBL-TTP",productName:"Thermal Label Printer",revision:"R2",status:"Approved",uom:"Unit",components:9,effectiveFrom:"2025-03-22T09:00:00+05:30",effectiveTo:null,updatedAt:"2025-09-25T18:48:59+05:30"}],H=["All","Approved","Draft","Archived"];function _(){const[d,j]=U(),w=F(),[x,N]=p.useState(d.get("q")||""),[c,T]=p.useState(d.get("status")||"All"),[k,y]=p.useState(null),M=p.useRef(null);p.useEffect(()=>{document.title="BOMs · Manufacturing"},[]),p.useEffect(()=>{const t=new URLSearchParams(d);x?t.set("q",x):t.delete("q"),c&&c!=="All"?t.set("status",c):t.delete("status"),j(t,{replace:!0})},[x,c]),p.useEffect(()=>{const t=requestAnimationFrame(()=>{var i;return(i=M.current)==null?void 0:i.focus()});return()=>cancelAnimationFrame(t)},[]);const R=p.useMemo(()=>{const t=(x||"").trim().toLowerCase();return b.filter(i=>{const g=!t||i.id.toLowerCase().includes(t)||i.productName.toLowerCase().includes(t)||i.productId.toLowerCase().includes(t)||i.revision.toLowerCase().includes(t),m=c==="All"?!0:i.status===c;return g&&m})},[x,c]),$=p.useMemo(()=>{var S;const t=b.length,i=b.filter(h=>h.status==="Approved").length,g=b.filter(h=>h.status==="Draft").length,m=b.filter(h=>h.status==="Archived").length,I=(S=b.slice().sort((h,E)=>new Date(E.updatedAt)-new Date(h.updatedAt))[0])==null?void 0:S.updatedAt;return{total:t,approved:i,draft:g,archived:m,latest:I}},[]),B=()=>{try{const t=JSON.stringify(b,null,2),i=new Blob([t],{type:"application/json"}),g=URL.createObjectURL(i),m=document.createElement("a");m.href=g,m.download=`bom-export-${Date.now()}.json`,m.click(),URL.revokeObjectURL(g)}catch{}},C=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},L=t=>w(t);return e.jsxs(W,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(z,{role:"region","aria-label":"BOM toolbar",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(a,{to:"/manufacturing",className:"crumb",children:"Manufacturing"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb current",children:"Bill of Materials"})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:P,title:"Demo only","aria-disabled":P,className:"primary",onClick:()=>L("/manufacturing/bom/new"),children:"New BOM"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Import"}),e.jsx("button",{onClick:B,title:"Export JSON",children:"Export"}),e.jsx("button",{onClick:C,title:"Print current view",children:"Print"}),e.jsx(a,{to:"/manufacturing/work-orders",title:"Work Orders",className:"ghost",children:"Work Orders"}),e.jsx(a,{to:"/manufacturing/production",title:"Production",className:"ghost",children:"Production"})]})]}),e.jsxs(K,{"aria-label":"BOM summary",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Total"}),e.jsx("div",{className:"value",children:$.total})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Approved"}),e.jsx("div",{className:"value",children:$.approved})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Draft"}),e.jsx("div",{className:"value",children:$.draft})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Archived"}),e.jsx("div",{className:"value",children:$.archived})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Last Update"}),e.jsx("div",{className:"value small",children:D($.latest||"2025-10-04T00:00:00+05:30")})]})]}),e.jsxs(q,{role:"search","aria-label":"BOM filters",children:[e.jsxs("div",{className:"row",children:[e.jsx("input",{ref:M,type:"text",placeholder:"Search by BOM / Product / Revision…",value:x,onChange:t=>N(t.target.value),"aria-label":"Search"}),e.jsx("div",{className:"status",children:H.map(t=>e.jsx("button",{className:t===c?"chip active":"chip",onClick:()=>T(t),"aria-pressed":t===c,children:t},t))})]}),e.jsxs("div",{className:"row secondary",children:[e.jsx("div",{className:"hint",children:"Quick links:"}),e.jsx(a,{to:"/products",className:"mini",children:"Products"}),e.jsx(a,{to:"/inventory/lots",className:"mini",children:"Inventory Lots"}),e.jsx(a,{to:"/vendors",className:"mini",children:"Vendors"}),e.jsx(a,{to:"/reports/inventory",className:"mini",children:"Inventory Report"}),e.jsx(a,{to:"/manufacturing/bom",className:"mini",children:"All BOMs"})]})]}),e.jsxs(X,{id:"search-print-area",role:"table","aria-label":"BOM list",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"BOM"}),e.jsx("div",{className:"th",role:"columnheader",children:"Product"}),e.jsx("div",{className:"th",role:"columnheader",children:"Revision"}),e.jsx("div",{className:"th",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th",role:"columnheader",children:"UoM"}),e.jsx("div",{className:"th",role:"columnheader",children:"Components"}),e.jsx("div",{className:"th",role:"columnheader",children:"Effective"}),e.jsx("div",{className:"th",role:"columnheader",children:"Updated"}),e.jsx("div",{className:"th",role:"columnheader",children:"Actions"})]})}),e.jsxs("div",{className:"tbody",role:"rowgroup",children:[R.map(t=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td code",role:"cell",children:e.jsx(a,{to:`/manufacturing/bom/${t.id}`,title:"Open BOM details",children:t.id})}),e.jsxs("div",{className:"td product",role:"cell",children:[e.jsx(a,{to:`/products/${t.productId}`,title:"Open product",children:t.productName}),e.jsx("div",{className:"sub",children:t.productId})]}),e.jsx("div",{className:"td",role:"cell",children:t.revision}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(Q,{"data-type":t.status.toLowerCase(),children:t.status})}),e.jsx("div",{className:"td",role:"cell",children:t.uom}),e.jsxs("div",{className:"td",role:"cell",children:[t.components,e.jsx("span",{className:"muted",children:" parts"})]}),e.jsxs("div",{className:"td",role:"cell",children:[e.jsx("div",{children:O(t.effectiveFrom)}),t.effectiveTo?e.jsxs("div",{className:"muted",children:["to ",O(t.effectiveTo)]}):e.jsx("div",{className:"muted",children:"current"})]}),e.jsx("div",{className:"td",role:"cell",children:D(t.updatedAt)}),e.jsxs("div",{className:"td actions",role:"cell",children:[e.jsx(a,{to:`/manufacturing/bom/${t.id}`,title:"BOM details",children:"Detail"}),e.jsx(a,{to:`/manufacturing/work-orders?bom=${t.id}`,title:"Work orders",children:"Work Orders"}),e.jsx(a,{to:`/manufacturing/production?bom=${t.id}`,title:"Production",children:"Production"}),e.jsx("button",{className:"danger ghost",onClick:()=>y(t.id),title:"Archive (demo modal)",children:"Archive"})]})]},t.id)),R.length===0&&e.jsx("div",{className:"empty",children:e.jsxs("div",{className:"emptyCard",children:[e.jsx("h3",{children:"No results"}),e.jsx("p",{children:"Try clearing filters or search with a different term."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{onClick:()=>N(""),children:"Clear Search"}),e.jsx("button",{onClick:()=>T("All"),children:"Reset Status"}),e.jsx(a,{to:"/products",children:"Go to Products"})]})]})})]}),e.jsxs("div",{className:"tfoot",children:[e.jsxs("div",{className:"pager",children:[e.jsx("button",{disabled:!0,title:"First page",children:"«"}),e.jsx("button",{disabled:!0,title:"Previous",children:"‹"}),e.jsx("div",{className:"pageInfo",children:"Page 1 of 3"}),e.jsx("button",{disabled:!0,title:"Next",children:"›"}),e.jsx("button",{disabled:!0,title:"Last page",children:"»"})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot a"})," Approved",e.jsx("span",{className:"dot d"})," Draft",e.jsx("span",{className:"dot r"})," Archived"]})]})]}),k&&e.jsxs(J,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{id:"demo-modal-title",children:"Archive BOM"}),e.jsx("p",{children:"This is a live demo. Destructive actions are disabled."}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"label",children:"BOM"}),e.jsx("div",{className:"value",children:k})]}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{onClick:()=>y(null),children:"OK"}),e.jsx(a,{to:`/manufacturing/bom/${k}`,onClick:()=>y(null),children:"Open Details"})]})]}),e.jsx("div",{className:"backdrop",onClick:()=>y(null)})]})]})}export{_ as default};
