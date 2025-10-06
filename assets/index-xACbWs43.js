import{d as h,q,a as Q,u as K,r as p,j as e,L as r}from"./index-LshBDmDj.js";const l="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",x="var(--card, #111318)",o="var(--border, #23262d)",t="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",m={Wrap:h.div`
        width: 100%;
        color: ${l};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .pageHeader {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${d};
            a {
                color: ${d};
            }
            a:hover {
                color: ${t};
            }
            span {
                opacity: 0.7;
            }
        }

        .heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            .title {
                h1 {
                    font-size: 22px;
                    margin: 0;
                }
                .sub {
                    color: ${d};
                }
                a {
                    color: ${t};
                }
            }
            .headerActions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    background: ${x};
                    color: ${l};
                    border: 1px solid ${o};
                    padding: 8px 12px;
                    border-radius: 8px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease,
                        color 0.2s ease, background 0.2s ease;
                }
                button:hover {
                    border-color: ${t};
                    color: ${t};
                }
                .primary {
                    border-color: ${t};
                    box-shadow: 0 0 0 3px ${g};
                }
            }
        }

        .card {
            background: ${x};
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .pageFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${d};
            padding-top: 4px;
            a {
                color: ${d};
            }
            a:hover {
                color: ${t};
            }
            .right,
            .left {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
            }
        }
    `,Tabs:h.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 2px;
        a {
            border: 1px solid ${o};
            color: ${d};
            background: ${x};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            transition: color 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        a:hover {
            color: ${t};
            border-color: ${t};
        }
        a.active {
            color: ${t};
            border-color: ${t};
            box-shadow: 0 0 0 3px ${g};
        }
    `,Grid:h.main`
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .metaCard {
            h2 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .metaList {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
                dt {
                    color: ${d};
                    font-weight: 500;
                }
                dd {
                    color: ${l};
                }
                .muted {
                    color: ${d};
                    font-size: 12px;
                    margin-top: 2px;
                }
                div {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 8px;
                    align-items: baseline;
                }
            }
            .divider {
                height: 1px;
                background: ${o};
                margin: 14px 0;
            }

            .optionRow {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
                align-items: center;
                margin-bottom: 10px;
                .label {
                    color: ${d};
                }
                .chipRow {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .chip {
                    border: 1px solid ${o};
                    background: ${x};
                    color: ${l};
                    padding: 6px 10px;
                    border-radius: 999px;
                    cursor: pointer;
                }
                .chip:hover {
                    border-color: ${t};
                    color: ${t};
                }
                .chip.selected {
                    border-color: ${t};
                    color: ${t};
                    box-shadow: 0 0 0 3px ${g};
                }
            }

            .toggleRow {
                display: flex;
                gap: 14px;
                flex-wrap: wrap;
                label {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                    color: ${l};
                    input {
                        accent-color: ${t};
                    }
                }
            }

            .links {
                margin-top: 8px;
                h3 {
                    font-size: 14px;
                    margin-bottom: 6px;
                    color: ${d};
                }
                ul {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    gap: 6px;
                }
                a {
                    color: ${l};
                }
                a:hover {
                    color: ${t};
                }
            }
        }

        .preview {
            display: flex;
            flex-direction: column;
            gap: 12px;
            .previewHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
                h2 {
                    font-size: 16px;
                    margin: 0;
                }
                .rowBtns {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .rowBtns button {
                    background: ${x};
                    color: ${l};
                    border: 1px solid ${o};
                    padding: 6px 10px;
                    border-radius: 8px;
                }
                .rowBtns button:hover {
                    color: ${t};
                    border-color: ${t};
                }
                .rowBtns .primary {
                    border-color: ${t};
                    box-shadow: 0 0 0 3px ${g};
                }
            }

            .sheet {
                width: 100%;
                display: grid;
                gap: 12px;
            }
            .columns-1 {
                grid-template-columns: 1fr;
            }
            .columns-2 {
                grid-template-columns: repeat(2, 1fr);
            }
            .columns-3 {
                grid-template-columns: repeat(3, 1fr);
            }
            .columns-4 {
                grid-template-columns: repeat(4, 1fr);
            }

            /* Sticker size presets (visual preview only) */
            .size-25x25 .sticker {
                height: 110px;
            }
            .size-50x25 .sticker {
                height: 140px;
            }
            .size-100x75 .sticker {
                height: 220px;
            }
        }
    `,Sticker:h.article`
        border: 1px dashed ${o};
        border-radius: 10px;
        padding: 10px 12px;
        background: color-mix(in oklab, ${x} 96%, transparent);
        display: grid;
        grid-template-rows: auto auto auto auto 1fr;
        gap: 6px;

        .line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .a .brand {
            font-weight: 700;
            letter-spacing: 0.2px;
            font-family: "Antonio", sans-serif;
        }
        .a .sku {
            color: ${d};
            font-size: 12px;
        }

        .b .name {
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .c,
        .d {
            gap: 12px;
            flex-wrap: wrap;
        }
        .pair {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .pair span {
            color: ${d};
            font-size: 12px;
        }
        .pair strong {
            font-size: 12px;
        }

        .e {
            gap: 10px;
            align-items: flex-end;
        }
        .barcode {
            display: grid;
            place-items: center;
            gap: 6px;
            .bars {
                width: 180px;
                height: 44px;
                border-radius: 4px;
                background: repeating-linear-gradient(
                    to right,
                    ${l} 0 2px,
                    transparent 2px 4px
                );
                opacity: 0.85;
            }
            .code {
                font-size: 12px;
                letter-spacing: 2px;
                color: ${d};
            }
        }

        .qr {
            width: 54px;
            height: 54px;
            border: 1px solid ${o};
            border-radius: 6px;
            position: relative;
            background: linear-gradient(90deg, transparent 50%, ${o} 50%) 0
                    0/10px 10px,
                linear-gradient(0deg, transparent 50%, ${o} 50%) 0 0/10px
                    10px;
            box-shadow: inset 0 0 0 3px
                color-mix(in oklab, ${t} 15%, transparent);
        }

        /* Size fine-tuning */
        &.size-25x25 .barcode .bars {
            width: 140px;
            height: 36px;
        }
        &.size-25x25 .qr {
            width: 44px;
            height: 44px;
        }

        &.size-100x75 .barcode .bars {
            width: 220px;
            height: 56px;
        }
        &.size-100x75 .qr {
            width: 64px;
            height: 64px;
        }
    `,ModalBackdrop:h.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
        z-index: 70;
    `,ModalCard:h.div`
        width: min(520px, 92vw);
        .modalHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 8px;
            h3 {
                margin: 0;
                font-size: 16px;
            }
            button {
                border: 1px solid ${o};
                background: ${x};
                color: ${l};
                padding: 6px 10px;
                border-radius: 8px;
            }
            button:hover {
                border-color: ${t};
                color: ${t};
            }
        }
        .modalBody {
            color: ${l};
            margin-bottom: 10px;
        }
        .modalFooter {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .primary {
            border: 1px solid ${t};
            box-shadow: 0 0 0 3px ${g};
        }
    `},f=i=>String(i).padStart(2,"0"),G=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=i=>{const n=new Date(i);return`${G[n.getDay()]} ${W[n.getMonth()]} ${f(n.getDate())} ${n.getFullYear()}`},_=i=>{const n=new Date(i);return`${f(n.getHours())}:${f(n.getMinutes())}:${f(n.getSeconds())}hrs`},u=i=>`${b(i)} ${_(i)}`,$=[{id:"STK-00045",productId:"MED-AMOX-500",sku:"AMOX-500-TAB",name:"Amoxicillin 500 mg Tablets",brand:"HealPharm",mfg:"HealPharm Labs Pvt. Ltd.",hsn:"30049099",batch:"B23K7A",mrp:"₹ 145.00",mfgDate:"2025-04-12T10:15:07+05:30",expDate:"2027-03-31T23:59:59+05:30",pack:"10 x 10",qty:1,price:"₹ 120.00",barcode:"8901234567894",lot:"LOT-7781"},{id:"STK-00046",productId:"MED-PARA-650",sku:"PARA-650-TAB",name:"Paracetamol 650 mg Tablets",brand:"Medico",mfg:"Medico Formulations",hsn:"30045039",batch:"P65X9C",mrp:"₹ 75.00",mfgDate:"2025-02-02T09:11:02+05:30",expDate:"2026-12-31T23:59:59+05:30",pack:"10 x 15",qty:1,price:"₹ 60.00",barcode:"8906543210987",lot:"LOT-9213"}],M="2025-10-06T06:42:50.910Z",C="2025-10-06T12:12:45+05:30";function J({open:i,title:n="Demo Mode",message:j,onClose:c}){return i?e.jsx(m.ModalBackdrop,{role:"dialog","aria-modal":"true","aria-label":n,children:e.jsxs(m.ModalCard,{className:"card",children:[e.jsxs("header",{className:"modalHeader",children:[e.jsx("h3",{children:n}),e.jsx("button",{onClick:c,title:"Close",children:"✕"})]}),e.jsx("div",{className:"modalBody",children:e.jsx("p",{children:j||"This action is disabled in the demo."})}),e.jsx("footer",{className:"modalFooter",children:e.jsx("button",{onClick:c,className:"primary",children:"OK"})})]})}):null}function X(){const{id:i}=q(),n=Q(),j=K(),[c,v]=p.useState("50x25"),[w,T]=p.useState(2),[k,R]=p.useState(!0),[y,O]=p.useState(!0),[N,B]=p.useState(!0),[z,S]=p.useState(!1),a=p.useMemo(()=>i&&$.find(s=>s.id===i)||$[0],[i]),A=p.useMemo(()=>new Date().toISOString(),[n.key]),P=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),300)}},I=async()=>{const s=window.location.href;try{await navigator.clipboard.writeText(s)}catch{}},L=()=>{window.open(window.location.href,"_blank","noopener,noreferrer")},D=()=>S(!0),H=()=>S(!1),E=s=>()=>j(s);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(m.Wrap,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(r,{to:"/home",title:"Home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/orders",title:"Orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/orders/ORD-3001",title:"Order details",children:"ORD-3001"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:`/print/sticker/${a.id}`,title:"Sticker print",children:"Sticker"})]}),e.jsxs("div",{className:"heading",children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Print Sticker"}),e.jsxs("p",{className:"sub",children:["Sticker ID: ",e.jsx("strong",{children:a.id})," • Product: ",e.jsx(r,{to:`/products/${a.productId}`,children:a.productId})]})]}),e.jsxs("div",{className:"headerActions",children:[e.jsx("button",{onClick:P,className:"primary",title:"Print section",children:"Print Sticker"}),e.jsx("button",{onClick:I,title:"Copy URL",children:"Copy Link"}),e.jsx("button",{onClick:L,title:"Open in new tab",children:"Open in New Tab"}),e.jsx("button",{onClick:D,title:"Download PNG (demo disabled)",children:"↓ Download PNG"})]})]})]}),e.jsxs(m.Tabs,{role:"tablist","aria-label":"Print views",children:[e.jsx(r,{to:"/print/invoice/INV-2031",role:"tab",title:"Print Invoice",children:"Invoice"}),e.jsx(r,{to:"/print/quote/Q-1099",role:"tab",title:"Print Quote",children:"Quote"}),e.jsx(r,{to:`/print/sticker/${a.id}`,role:"tab","aria-selected":"true",title:"Print Sticker",className:"active",children:"Sticker"})]}),e.jsxs(m.Grid,{children:[e.jsxs("section",{"aria-labelledby":"meta-title",className:"card metaCard",children:[e.jsx("h2",{id:"meta-title",children:"Sticker Meta"}),e.jsxs("dl",{className:"metaList",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Sticker ID"}),e.jsx("dd",{children:a.id})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Product"}),e.jsxs("dd",{children:[e.jsx(r,{to:`/products/${a.productId}`,children:a.name}),e.jsxs("div",{className:"muted",children:["SKU: ",a.sku]})]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Brand"}),e.jsx("dd",{children:a.brand})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Manufacturer"}),e.jsx("dd",{children:a.mfg})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"HSN"}),e.jsx("dd",{children:a.hsn})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Batch"}),e.jsx("dd",{children:a.batch})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Lot"}),e.jsx("dd",{children:e.jsx(r,{to:"/inventory/lots",children:a.lot})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"MRP"}),e.jsx("dd",{children:a.mrp})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Pack"}),e.jsx("dd",{children:a.pack})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Manufactured"}),e.jsx("dd",{children:b(a.mfgDate)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Expiry"}),e.jsx("dd",{children:b(a.expDate)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Printed At"}),e.jsx("dd",{children:u(A)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Build"}),e.jsx("dd",{children:u(M)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Last Commit"}),e.jsx("dd",{children:u(C)})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"optionRow",children:[e.jsx("span",{className:"label",children:"Sticker Size"}),e.jsx("div",{className:"chipRow",role:"group","aria-label":"Sticker size",children:["25x25","50x25","100x75"].map(s=>e.jsxs("button",{className:`chip ${c===s?"selected":""}`,onClick:()=>v(s),title:s.replace("x"," × ")+" mm",children:[s.replace("x","×")," mm"]},s))})]}),e.jsxs("div",{className:"optionRow",children:[e.jsx("span",{className:"label",children:"Columns"}),e.jsx("div",{className:"chipRow",role:"group","aria-label":"Columns",children:[1,2,3,4].map(s=>e.jsx("button",{className:`chip ${w===s?"selected":""}`,onClick:()=>T(s),title:`${s} per row`,children:s},s))})]}),e.jsxs("div",{className:"optionRow",children:[e.jsx("span",{className:"label",children:"Elements"}),e.jsxs("div",{className:"toggleRow",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:k,onChange:s=>R(s.target.checked)}),e.jsx("span",{children:"Barcode"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:y,onChange:s=>O(s.target.checked)}),e.jsx("span",{children:"QR"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:N,onChange:s=>B(s.target.checked)}),e.jsx("span",{children:"Price"})]})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"links",children:[e.jsx("h3",{children:"Related Links"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(r,{to:"/orders/ORD-3001",children:"Order ORD-3001"})}),e.jsx("li",{children:e.jsx(r,{to:"/invoices/INV-2031",children:"Invoice INV-2031"})}),e.jsx("li",{children:e.jsx(r,{to:"/receipts",children:"Receipts"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory/batches",children:"Batches"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory/warehouses",children:"Warehouses"})}),e.jsx("li",{children:e.jsx(r,{to:"/medicines",children:"Medicines Catalog"})}),e.jsx("li",{children:e.jsx(r,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})}),e.jsx("li",{children:e.jsx(r,{to:"/reports/inventory",children:"Inventory Report"})}),e.jsx("li",{children:e.jsx(r,{to:"/tools/print-templates",children:"Print Templates"})})]})]})]}),e.jsxs("section",{className:"preview card",children:[e.jsxs("header",{className:"previewHead",children:[e.jsx("h2",{children:"Preview"}),e.jsxs("div",{className:"rowBtns",children:[e.jsx("button",{onClick:P,className:"primary",title:"Print section",children:"Print"}),e.jsx("button",{onClick:D,title:"Duplicate (demo disabled)",children:"Duplicate"}),e.jsx("button",{onClick:E(`/products/${a.productId}`),title:"Go to product",children:"Open Product"})]})]}),e.jsx("div",{id:"search-print-area",className:`sheet columns-${w} size-${c}`,"aria-label":"Sticker sheet",children:Array.from({length:w*6}).map((s,F)=>e.jsx(U,{record:a,showBarcode:k,showQR:y,showPrice:N,size:c},F))})]})]}),e.jsxs("footer",{className:"pageFooter",children:[e.jsxs("div",{className:"left",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"•"}),e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx("span",{children:"•"}),e.jsx(r,{to:"/settings/appearance",children:"Appearance"}),e.jsx("span",{children:"•"}),e.jsx(r,{to:"/help",children:"Help"})]}),e.jsxs("div",{className:"right",children:[e.jsxs("span",{children:["Built: ",u(M)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Commit: ",u(C)]})]})]})]}),e.jsx(J,{open:z,onClose:H,message:"Nice try. Downloads and write operations are disabled in this demo."})]})}function U({record:i,showBarcode:n,showQR:j,showPrice:c,size:v}){return e.jsxs(m.Sticker,{className:`sticker size-${v}`,role:"group","aria-label":`${i.name} sticker`,children:[e.jsxs("div",{className:"line a",children:[e.jsx("div",{className:"brand",children:i.brand}),e.jsx("div",{className:"sku",children:i.sku})]}),e.jsx("div",{className:"line b",children:e.jsx("div",{className:"name",title:i.name,children:i.name})}),e.jsxs("div",{className:"line c",children:[e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"Batch"}),e.jsx("strong",{children:i.batch})]}),e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"Mfg"}),e.jsx("strong",{children:b(i.mfgDate)})]}),e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"Exp"}),e.jsx("strong",{children:b(i.expDate)})]})]}),e.jsxs("div",{className:"line d",children:[e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"Pack"}),e.jsx("strong",{children:i.pack})]}),e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"HSN"}),e.jsx("strong",{children:i.hsn})]}),c&&e.jsxs("div",{className:"pair",children:[e.jsx("span",{children:"MRP"}),e.jsx("strong",{children:i.mrp})]})]}),e.jsxs("div",{className:"line e",children:[n&&e.jsxs("div",{className:"barcode","aria-label":`Barcode ${i.barcode}`,children:[e.jsx("div",{className:"bars"}),e.jsx("div",{className:"code",children:i.barcode})]}),j&&e.jsx("div",{className:"qr",role:"img","aria-label":`QR ${i.sku}`})]})]})}export{X as default};
