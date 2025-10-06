import{d as C,q as O,u as B,r as l,j as e,N as t,L as N}from"./index-CqBbF2bz.js";import{a as I,b as A,x as E,y as V,z as D,k as m,r as z}from"./index-BGrfC-E0.js";const o="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",p="var(--card, #111318)",r="var(--border, #23262d)",n="var(--accent, #5aa9ff)",h="var(--accent-soft, rgba(90,169,255,0.15))",S="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",P={Wrap:C.div`
        color: ${o};
        width: 100%;
        padding: 16px;

        .topbar {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;

            .crumbs {
                a {
                    color: ${d};
                }
                a:hover {
                    color: ${n};
                }
                .current {
                    color: ${o};
                }
            }

            .quick-tabs {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                .tab {
                    padding: 6px 10px;
                    border: 1px solid ${r};
                    border-radius: 8px;
                    background: ${p};
                    color: ${d};
                    text-decoration: none;
                }
                .tab:hover {
                    color: ${n};
                    border-color: ${n};
                }
                .tab.active {
                    color: ${n};
                    border-color: ${n};
                    box-shadow: 0 0 0 3px ${h};
                }
            }
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;

            .title {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
                h1 {
                    font-family: "Antonio", sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                    font-weight: 600;
                }
            }

            .actions {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;

                button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border: 1px solid ${r};
                    background: ${p};
                    color: ${o};
                    border-radius: 8px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease,
                        color 0.2s ease, background 0.2s ease;
                }
                button:hover {
                    border-color: ${n};
                    color: ${n};
                    box-shadow: 0 0 0 3px ${h};
                }
                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .ghost {
                    background: transparent;
                }
                .danger {
                    border-color: ${r};
                }
                .danger:hover {
                    border-color: ${n};
                }

                .sep {
                    width: 1px;
                    height: 24px;
                    background: ${r};
                    margin: 0 4px;
                }
            }
        }

        .inline-banner {
            margin: 12px 0;
            background: color-mix(in oklab, ${n} 12%, transparent);
            border: 1px dashed ${n};
            color: ${o};
            border-radius: 10px;
            padding: 10px 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${p};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${S};
            padding: 16px;
        }

        .voucher {
            .voucher-head {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 12px;
                .brand h2 {
                    font-family: "Antonio", sans-serif;
                    letter-spacing: 0.5px;
                }
                .sub {
                    color: ${d};
                    .mono {
                        font-family: ui-monospace, Menlo, Consolas, monospace;
                    }
                }
                .meta {
                    display: grid;
                    gap: 6px;
                    .k {
                        color: ${d};
                        margin-right: 8px;
                    }
                    .v {
                    }
                }
            }

            .lines {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
                thead th {
                    text-align: left;
                    padding: 10px;
                    border-bottom: 1px solid ${r};
                    position: sticky;
                    top: 0;
                    background: ${p};
                    z-index: 1;
                }
                tbody td,
                tfoot td {
                    padding: 10px;
                    border-bottom: 1px solid ${r};
                    vertical-align: top;
                }
                tbody tr:hover {
                    background: rgba(0, 0, 0, 0.06);
                }
                .right {
                    text-align: right;
                }
                .strong {
                    font-weight: 600;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                }
                .account {
                    color: ${o};
                    text-decoration: none;
                }
                .account:hover {
                    color: ${n};
                }
                .account .ext {
                    margin-left: 6px;
                    opacity: 0.7;
                }
                .pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid ${r};
                }
                .pill.deb {
                    background: color-mix(in oklab, ${n} 12%, transparent);
                }
                .pill.cre {
                    background: color-mix(in oklab, ${n} 12%, transparent);
                }
            }

            .notes {
                margin-top: 12px;
                .k {
                    font-weight: 600;
                    color: ${d};
                    margin-bottom: 4px;
                }
                p {
                    color: ${o};
                }
            }

            .voucher-foot {
                margin-top: 14px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                .sig {
                    border: 1px dashed ${r};
                    border-radius: 10px;
                    padding: 10px;
                }
                .k {
                    color: ${d};
                    margin-bottom: 4px;
                }
                .v {
                    font-weight: 600;
                }
            }
            @media (max-width: 900px) {
                .voucher-foot {
                    grid-template-columns: 1fr;
                }
            }
        }

        .side {
            display: grid;
            gap: 16px;

            .meta .grid2 {
                margin-top: 8px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                .k {
                    color: ${d};
                    display: block;
                }
                .v {
                    display: block;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                }
            }
            .meta .row {
                display: flex;
                justify-content: space-between;
                gap: 8px;
                margin-top: 8px;
                .k {
                    color: ${d};
                }
            }

            .related .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 8px;
            }
            .related .chip {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                padding: 6px 10px;
                border: 1px solid ${r};
                border-radius: 999px;
                background: color-mix(in oklab, ${n} 10%, transparent);
                color: ${o};
                text-decoration: none;
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                    opacity: 0.8;
                }
            }
            .related .links {
                display: grid;
                gap: 6px;
            }
            .related a {
                color: ${o};
                text-decoration: none;
            }
            .related a:hover {
                color: ${n};
            }

            .quick {
                display: flex;
                gap: 8px;
                margin-top: 8px;
                flex-wrap: wrap;
            }
            .ghost {
                padding: 6px 10px;
                border: 1px solid ${r};
                border-radius: 8px;
                background: transparent;
                color: ${d};
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .ghost:hover {
                color: ${n};
                border-color: ${n};
                box-shadow: 0 0 0 3px ${h};
            }
            .small {
                font-size: 12px;
            }

            .attach ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .attach li {
                display: grid;
                grid-template-columns: 1fr auto auto;
                gap: 8px;
                align-items: center;
            }
            .attach .file {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .activity ol {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 12px;
            }
            .activity li {
                display: grid;
                grid-template-columns: 12px 1fr;
                gap: 10px;
            }
            .activity .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${n};
                margin-top: 6px;
            }
            .activity .evt .line {
                font-weight: 500;
            }
            .activity .evt .meta {
                margin-top: 2px;
            }
        }

        .status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 2px 10px;
            border-radius: 999px;
            border: 1px solid ${r};
            font-size: 12px;
            font-weight: 600;
            &.ok {
                background: color-mix(in oklab, ${n} 15%, transparent);
            }
            &.warn {
                background: color-mix(in oklab, ${n} 15%, transparent);
            }
            &.muted {
                color: ${d};
            }
        }
    `,Modal:C.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 1000;

        .panel {
            width: min(640px, 92vw);
            background: ${p};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${S};
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        .head {
            padding: 12px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${r};
            h3 {
                margin: 0;
            }
            .icon {
                border: 1px solid ${r};
                background: transparent;
                color: ${o};
                border-radius: 8px;
                width: 34px;
                height: 34px;
                display: grid;
                place-items: center;
                cursor: pointer;
            }
            .icon:hover {
                border-color: ${n};
                color: ${n};
                box-shadow: 0 0 0 3px ${h};
            }
        }
        .body {
            padding: 14px;
            color: ${o};
        }
        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${r};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${r};
                background: ${p};
                color: ${o};
                cursor: pointer;
            }
            button:hover {
                border-color: ${n};
                color: ${n};
                box-shadow: 0 0 0 3px ${h};
            }
            .ghost {
                background: transparent;
            }
            .danger {
            }
        }
    `},U=!0,q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=i=>String(i).padStart(2,"0"),y=i=>{const s=new Date(i);return`${q[s.getDay()]} ${H[s.getMonth()]} ${b(s.getDate())} ${s.getFullYear()}`},R=i=>{const s=new Date(i);return`${b(s.getHours())}:${b(s.getMinutes())}:${b(s.getSeconds())}hrs`},u=i=>`${y(i)} ${R(i)}`,W={"JRN-2025-0007":{id:"JRN-2025-0007",refNo:"MAN-POST/2025/07",status:"Posted",date:"2025-10-04T15:38:20+05:30",createdAt:"2025-10-03T11:12:08+05:30",createdBy:{id:"USR-101",name:"Ritika Singh"},postedAt:"2025-10-04T15:39:02+05:30",postedBy:{id:"USR-103",name:"Arun Sharma"},notes:"Month-end accruals and reversals aligned to COA policy FY25.",lines:[{id:"L1",type:"Debit",accountId:"AC-2101",accountName:"Purchases - Medicines",narration:"Batch AMOX-500",amount:"₹ 75,000.00"},{id:"L2",type:"Credit",accountId:"AC-1101",accountName:"Accounts Payable - Vendors",narration:"PO P-20341",amount:"₹ 75,000.00"},{id:"L3",type:"Debit",accountId:"AC-5102",accountName:"Freight & Logistics",narration:"Shipment S-00419",amount:"₹ 3,200.00"},{id:"L4",type:"Credit",accountId:"AC-1001",accountName:"Cash & Bank - HDFC CA",narration:"UPI REF 9482",amount:"₹ 3,200.00"}],totals:{debit:"₹ 78,200.00",credit:"₹ 78,200.00"},related:{purchaseOrders:[{id:"PO-20341"}],invoices:[{id:"INV-2031"}],receipts:[{id:"RCPT-5560"}],shipments:[{id:"SHP-00419"}],vendors:[{id:"VND-3021",name:"Medico Labs Pvt Ltd"}]},activity:[{id:"A1",at:"2025-10-03T11:12:08+05:30",by:"Ritika Singh",msg:"Created journal draft"},{id:"A2",at:"2025-10-04T15:37:55+05:30",by:"Arun Sharma",msg:"Reviewed and validated accounts"},{id:"A3",at:"2025-10-04T15:39:02+05:30",by:"Arun Sharma",msg:"Posted journal"}],attachments:[{id:"AT1",name:"goods-received-note.pdf",size:"214 KB"},{id:"AT2",name:"freight-receipt.jpg",size:"482 KB"}]}},v=({status:i})=>{const s=i==="Posted"?"ok":i==="Draft"?"muted":"warn";return e.jsx("span",{className:`status ${s}`,children:i})},Y=({open:i,title:s,message:f,onConfirm:g,onClose:j,confirmLabel:x="Confirm"})=>i?e.jsx(P.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"confirmTitle",children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{id:"confirmTitle",children:s}),e.jsx("button",{className:"icon",onClick:j,"aria-label":"Close",children:e.jsx(z,{})})]}),e.jsx("div",{className:"body",children:e.jsx("p",{children:f})}),e.jsxs("div",{className:"foot",children:[e.jsx("button",{onClick:j,className:"ghost",children:"Cancel"}),e.jsxs("button",{onClick:g,className:"danger",children:[e.jsx(D,{style:{marginRight:6}}),x]})]})]})}):null;function _(){const{journalId:i="JRN-2025-0007"}=O();B();const s=l.useMemo(()=>W[i]??null,[i]),[f,g]=l.useState(!1),[j,x]=l.useState(!1),[T,$]=l.useState(!1);l.useEffect(()=>{$(!1)},[i]);const J=async()=>{try{await navigator.clipboard.writeText(window.location.href),g(!0),setTimeout(()=>g(!1),1200)}catch{}},L=()=>{const a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=`${i}.json`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)},F=l.useCallback(()=>{document.body.classList.add("print-section-mode");const a=()=>document.body.classList.remove("print-section-mode");window.addEventListener("afterprint",a,{once:!0}),window.print()},[]),k=a=>{$(!0)},M=()=>{x(!1),k()},w=!s;return e.jsxs(P.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs("div",{className:"topbar",children:[e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(t,{to:"/finance",end:!0,children:"Finance"}),e.jsx("span",{children:" / "}),e.jsx(t,{to:"/finance/journals",end:!0,children:"Journals"}),e.jsx("span",{children:" / "}),e.jsx("span",{className:"current",children:i})]}),e.jsxs("div",{className:"quick-tabs",role:"tablist","aria-label":"Finance quick access",children:[e.jsx(t,{to:"/finance/journals",end:!0,className:"tab",children:"Journals"}),e.jsx(t,{to:"/finance/ledgers",end:!0,className:"tab",children:"Ledgers"}),e.jsx(t,{to:"/finance/chart-of-accounts",end:!0,className:"tab",children:"COA"}),e.jsx(t,{to:"/finance/taxes",end:!0,className:"tab",children:"Taxes"}),e.jsx(t,{to:"/finance/gst-returns",end:!0,className:"tab",children:"GST Returns"}),e.jsx(t,{to:"/reports/finance",end:!0,className:"tab",children:"Reports"})]})]}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"title",children:[e.jsxs("h1",{children:["Journal Voucher ",e.jsx("span",{className:"mono",children:i})]}),!w&&e.jsx(v,{status:s.status}),w&&e.jsx("span",{className:"status warn",children:"Not Found"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:F,title:"Print voucher",children:[e.jsx(I,{})," Print"]}),e.jsxs("button",{onClick:L,title:"Export as JSON",children:[e.jsx(A,{})," Export"]}),e.jsxs("button",{onClick:J,title:"Copy deep link",children:[e.jsx(E,{})," ",f?"Copied":"Copy Link"]}),e.jsx("span",{className:"sep"}),e.jsxs("button",{className:"ghost",disabled:U,title:"Post (demo disabled)",onClick:()=>k(),children:[e.jsx(V,{})," Post"]}),e.jsxs("button",{className:"danger",onClick:()=>x(!0),title:"Void journal (demo)",children:[e.jsx(D,{})," Void"]})]})]}),T&&e.jsx("div",{className:"inline-banner",role:"status",children:"Actions are disabled in demo. You can browse, print and export."}),e.jsxs("div",{className:"grid",children:[e.jsx("section",{className:"card voucher",id:"search-print-area","aria-label":"Journal voucher",children:s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"voucher-head",children:[e.jsxs("div",{className:"brand",children:[e.jsx("h2",{children:"Voucher"}),e.jsxs("div",{className:"sub",children:["Reference: ",e.jsx("span",{className:"mono",children:s.refNo})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:y(s.date)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Time"}),e.jsx("span",{className:"v",children:R(s.date)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx(v,{status:s.status})})]})]})]}),e.jsxs("div",{className:"voucher-body",children:[e.jsxs("table",{className:"lines","aria-label":"Journal lines",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"12ch"},children:"Type"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Narration"}),e.jsx("th",{style:{width:"16ch"},className:"right",children:"Amount"})]})}),e.jsx("tbody",{children:s.lines.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:`pill ${a.type==="Debit"?"deb":"cre"}`,children:a.type})}),e.jsx("td",{children:e.jsxs(t,{to:`/finance/ledgers/${a.accountId}`,className:"account",children:[a.accountName," ",e.jsx("span",{className:"muted mono",children:a.accountId})," ",e.jsx(m,{className:"ext"})]})}),e.jsx("td",{className:"muted",children:a.narration}),e.jsx("td",{className:"right mono",children:a.amount})]},a.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:3,className:"right strong",children:"Total Debit"}),e.jsx("td",{className:"right mono strong",children:s.totals.debit})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:3,className:"right strong",children:"Total Credit"}),e.jsx("td",{className:"right mono strong",children:s.totals.credit})]})]})]}),e.jsxs("div",{className:"notes",children:[e.jsx("div",{className:"k",children:"Notes"}),e.jsx("p",{children:s.notes})]})]}),e.jsxs("div",{className:"voucher-foot",children:[e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"k",children:"Prepared by"}),e.jsx("div",{className:"v",children:s.createdBy.name}),e.jsx("div",{className:"muted",children:u(s.createdAt)})]}),e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"k",children:"Posted by"}),e.jsx("div",{className:"v",children:s.postedBy.name}),e.jsx("div",{className:"muted",children:u(s.postedAt)})]}),e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"k",children:"Approved by"}),e.jsx("div",{className:"v muted",children:"—"}),e.jsx("div",{className:"muted",children:"—"})]})]})]}):e.jsxs("div",{className:"empty",children:[e.jsxs("p",{children:["We couldn’t find ",e.jsx("strong",{children:i}),"."]}),e.jsxs("div",{className:"links",children:[e.jsx(N,{to:"/finance/journals",children:"Back to Journals"}),e.jsx(N,{to:"/finance",children:"Finance Home"})]})]})}),e.jsxs("aside",{className:"side",children:[e.jsxs("section",{className:"card meta",children:[e.jsx("h3",{children:"Details"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Journal ID"}),e.jsx("span",{className:"v mono",children:i})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v mono",children:(s==null?void 0:s.refNo)||"—"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx(v,{status:(s==null?void 0:s.status)||"Draft"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:s?y(s.date):"—"})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:s?`${u(s.createdAt)} · ${s.createdBy.name}`:"—"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Posted"}),e.jsx("span",{className:"v",children:s?`${u(s.postedAt)} · ${s.postedBy.name}`:"—"})]})]}),e.jsxs("section",{className:"card related",children:[e.jsx("h3",{children:"Related"}),e.jsx("div",{className:"chips",children:s==null?void 0:s.related.vendors.map(a=>e.jsxs(N,{to:`/vendors/${a.id}`,className:"chip",children:[a.name," ",e.jsx("span",{className:"mono",children:a.id})]},a.id))}),e.jsxs("div",{className:"links",children:[s==null?void 0:s.related.purchaseOrders.map(a=>e.jsxs(t,{to:`/purchase-orders/${a.id}`,children:["PO ",a.id," ",e.jsx(m,{})]},a.id)),s==null?void 0:s.related.invoices.map(a=>e.jsxs(t,{to:`/invoices/${a.id}`,children:["Invoice ",a.id," ",e.jsx(m,{})]},a.id)),s==null?void 0:s.related.receipts.map(a=>e.jsxs(t,{to:"/receipts",children:["Receipt ",a.id," ",e.jsx(m,{})]},a.id)),s==null?void 0:s.related.shipments.map(a=>e.jsxs(t,{to:`/shipments/${a.id}`,children:["Shipment ",a.id," ",e.jsx(m,{})]},a.id))]}),e.jsxs("div",{className:"quick",children:[e.jsx(t,{to:"/finance/ledgers",className:"ghost small",children:"Open Ledgers"}),e.jsx(t,{to:"/finance/chart-of-accounts",className:"ghost small",children:"Open COA"}),e.jsx(t,{to:"/reports/finance",className:"ghost small",children:"Finance Reports"})]})]}),e.jsxs("section",{className:"card attach",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{children:s==null?void 0:s.attachments.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"file",children:a.name}),e.jsx("span",{className:"muted",children:a.size}),e.jsxs("button",{className:"ghost small",disabled:!0,title:"Demo: download disabled",children:[e.jsx(A,{})," Download"]})]},a.id))})]}),e.jsxs("section",{className:"card activity",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ol",{children:s==null?void 0:s.activity.map(a=>e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"evt",children:[e.jsx("div",{className:"line",children:a.msg}),e.jsxs("div",{className:"meta small muted",children:[u(a.at)," · ",a.by]})]})]},a.id))})]}),e.jsxs("section",{className:"card more",children:[e.jsx("h3",{children:"Navigate"}),e.jsxs("div",{className:"grid2",children:[e.jsx(t,{to:"/finance/journals",className:"ghost",children:"All Journals"}),e.jsx(t,{to:"/finance/journals/JRN-2025-0006",className:"ghost",children:"Prev Journal"}),e.jsx(t,{to:"/finance/journals/JRN-2025-0008",className:"ghost",children:"Next Journal"}),e.jsx(t,{to:"/help",className:"ghost",children:"Help Center"})]})]})]})]}),e.jsx(Y,{open:j,title:"Void Journal",message:"This will mark the journal as void. In demo, no data is changed.",onConfirm:M,onClose:()=>x(!1),confirmLabel:"Void"})]})}export{_ as default};
