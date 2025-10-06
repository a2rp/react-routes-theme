import{d as k,a as T,r as d,j as e,N as l,L as n}from"./index-LshBDmDj.js";const c="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",r="var(--card, #111318)",i="var(--border, #23262d)",o="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",D=k.div`
    width: 100%;
    padding: 16px;
    color: ${c};

    .muted {
        color: ${p};
    }

    .breadcrumbs {
        display: flex;
        gap: 6px;
        align-items: center;
        margin-bottom: 10px;
        a {
            color: ${p};
        }
        .sep {
            color: ${p};
            padding: 0 4px;
        }
        [aria-current="page"] {
            color: ${c};
            font-weight: 600;
        }
    }

    .pagehead {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;
        h1 {
            font-size: 28px;
            line-height: 1.2;
        }
        p {
            margin-top: 4px;
        }
        .head-actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .head-actions a.ghost,
        .head-actions .ghost {
            background: transparent;
        }
    }

    .grid-summ {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${r};
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            .stat {
                display: grid;
                gap: 6px;
            }
            .k {
                font-size: 24px;
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .l {
                font-size: 12px;
                color: ${p};
                letter-spacing: 0.3px;
            }
            .meta {
                font-size: 12px;
            }
        }

        .secret {
            position: relative;
            .label {
                font-size: 12px;
                color: ${p};
                margin-bottom: 6px;
            }
            .secretCode {
                display: inline-block;
                font-size: 12px;
                padding: 6px 8px;
                border: 1px dashed ${i};
                border-radius: 8px;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .danger {
                border-color: ${i};
            }
            .toast {
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-size: 12px;
                background: ${o};
                color: #fff;
                padding: 4px 8px;
                border-radius: 6px;
            }
        }
    }

    .quick-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 10px;
        a {
            border: 1px solid ${i};
            background: ${r};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${c};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        a:hover {
            border-color: ${o};
            box-shadow: 0 0 0 3px ${g};
        }
    }

    .tableWrap {
        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 8px 0;
            .left {
                display: flex;
                gap: 10px;
                align-items: baseline;
            }
            .right input[type="search"] {
                background: ${r};
                border: 1px solid ${i};
                color: ${c};
                padding: 8px 12px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            .right input[type="search"]:focus {
                border-color: ${o};
                box-shadow: 0 0 0 3px ${g};
                outline: none;
            }
        }

        .table {
            width: 100%;
            overflow: auto;
            border-radius: 12px;
            .thead,
            .trow {
                display: grid;
                grid-template-columns: 2.1fr 2.2fr 2fr 0.9fr 1.1fr 1.2fr 1.3fr;
                gap: 12px;
                align-items: center;
            }

            .thead {
                position: sticky;
                top: 0;
                z-index: 1;
                background: ${r};
                border: 1px solid ${i};
                padding: 10px 12px;
                border-bottom: none;
                font-weight: 600;
                color: ${c};
            }

            .trow {
                border: 1px solid ${i};
                border-top: none;
                padding: 12px;
                background: color-mix(in oklab, ${r} 94%, transparent);
                transition: background 0.2s ease, border-color 0.2s ease;
            }
            .trow:hover {
                border-color: ${o};
                background: color-mix(in oklab, ${o} 8%, ${r});
            }

            .cell .title {
                font-weight: 600;
            }
            .cell .sub {
                font-size: 12px;
                margin-top: 2px;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            .chip {
                font-size: 12px;
                padding: 4px 8px;
                border: 1px solid ${i};
                border-radius: 999px;
                background: color-mix(in oklab, ${o} 10%, transparent);
            }

            .badge {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 999px;
                border: 1px solid ${i};
                text-transform: capitalize;
                font-size: 12px;
            }
            .badge.active {
                background: color-mix(in oklab, ${o} 12%, transparent);
            }
            .badge.paused {
                background: color-mix(in oklab, ${r} 92%, transparent);
                color: ${p};
            }

            .actions {
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
            }
        }
    }

    .grid-io {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr;
        gap: 16px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
        .card {
            background: ${r};
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 16px;
        }
        .tit {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .code {
            background: color-mix(in oklab, ${r} 94%, transparent);
            border: 1px solid ${i};
            border-radius: 8px;
            padding: 12px;
            overflow: auto;
            font-size: 12px;
            line-height: 1.6;
        }
        ul {
            padding-left: 18px;
        }
        li {
            margin: 6px 0;
        }
    }

    .footer-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 18px 0 8px;
        a {
            text-decoration: none;
            color: ${c};
            border: 1px solid ${i};
            background: ${r};
            padding: 6px 10px;
            border-radius: 8px;
        }
        a:hover {
            border-color: ${o};
            box-shadow: 0 0 0 3px ${g};
        }
    }

    /* Buttons (inherit base styles from index.css; add variants) */
    button.ghost {
        background: transparent;
    }
    button.primary {
        border-color: ${o};
        box-shadow: 0 0 0 3px ${g};
    }

    /* Responsive grid fallback for smaller screens */
    @media (max-width: 980px) {
        .table .thead,
        .table .trow {
            grid-template-columns: 2.2fr 2.2fr 2fr 1fr 1fr 1.3fr 1.3fr;
        }
    }
`,C=k.div`
    position: fixed;
    inset: 0;
    z-index: 60;
    .overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
    }
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: clamp(280px, 520px, 90vw);
        background: var(--card, #111318);
        color: var(--text, #f3f4f6);
        border: 1px solid var(--border, #23262d);
        border-radius: 12px;
        padding: 16px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
    }
    h3 {
        margin-bottom: 6px;
    }
    p {
        margin: 0 0 12px;
    }
    .row {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
`,A=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=a=>String(a).padStart(2,"0"),m=a=>{const t=new Date(a);return`${A[t.getDay()]} ${M[t.getMonth()]} ${f(t.getDate())} ${t.getFullYear()}`},w=a=>{const t=new Date(a);return`${f(t.getHours())}:${f(t.getMinutes())}:${f(t.getSeconds())}hrs`},L=a=>`${m(a)} ${w(a)}`,y="whsec_***_demo_only_***",N=[{id:"wh_live_orders",name:"Orders: Created & Updated",url:"https://hooks.example-app.com/orders",events:["order.created","order.updated","order.cancelled"],status:"active",createdAt:"2025-08-19T09:28:13+05:30",lastDeliveryAt:"2025-10-04T14:05:27+05:30",recentSuccess:42,recentFail:1,avgLatencyMs:318},{id:"wh_billing_paid",name:"Billing: Invoice Paid",url:"https://hooks.example-app.com/invoices",events:["invoice.paid","invoice.refund"],status:"active",createdAt:"2025-07-05T12:41:10+05:30",lastDeliveryAt:"2025-10-03T19:44:10+05:30",recentSuccess:27,recentFail:0,avgLatencyMs:261},{id:"wh_inventory_low",name:"Inventory: Low Stock Alerts",url:"https://hooks.example-app.com/alerts/inventory",events:["inventory.low","inventory.back-in-stock"],status:"paused",createdAt:"2025-04-22T10:11:00+05:30",lastDeliveryAt:"2025-09-28T11:12:48+05:30",recentSuccess:8,recentFail:0,avgLatencyMs:402}];function z({open:a,title:t,body:h,onClose:b}){return a?e.jsxs(C,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[e.jsx("div",{className:"overlay",onClick:b}),e.jsxs("div",{className:"content",role:"document",children:[e.jsx("h3",{id:"confirm-title",children:t}),e.jsx("p",{className:"muted",children:h}),e.jsx("div",{className:"row",children:e.jsx("button",{onClick:b,className:"primary",children:"Okay"})})]})]}):null}function W(){const{pathname:a}=T(),[t,h]=d.useState(!1),[b,v]=d.useState(!1),$=d.useCallback(async()=>{try{await navigator.clipboard.writeText(y.replace("***","xxxx")),h(!0),setTimeout(()=>h(!1),1200)}catch{}},[]),u=d.useCallback(()=>{v(!0)},[]),S=d.useCallback(()=>{const s="print-section-mode";document.body.classList.add(s),window.print(),setTimeout(()=>document.body.classList.remove(s),300)},[]),j=d.useMemo(()=>[{to:"/settings",label:"Settings"},{to:a,label:"Webhooks"}],[a]);return d.useEffect(()=>{const s=document.querySelector('button[data-focus="first"]');if(s)try{s.focus({preventScroll:!0})}catch{s.focus()}},[]),e.jsxs(D,{children:[e.jsx("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:j.map((s,x)=>e.jsxs("span",{children:[x>0&&e.jsx("span",{className:"sep",children:"/"}),x<j.length-1?e.jsx(l,{to:s.to,children:s.label}):e.jsx("span",{"aria-current":"page",children:s.label})]},s.to))}),e.jsxs("header",{className:"pagehead",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Webhooks"}),e.jsx("p",{className:"muted",children:"Outbound event notifications to your endpoints. Review delivery health, subscribed events, and signing options."})]}),e.jsxs("div",{className:"head-actions",children:[e.jsx("button",{onClick:u,"data-focus":"first",title:"Demo: disabled",children:"New Endpoint"}),e.jsx("button",{onClick:S,className:"ghost",children:"Print"}),e.jsx(n,{to:"/help",className:"ghost",children:"Docs"})]})]}),e.jsxs("section",{className:"grid-summ",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"k",children:"3"}),e.jsx("div",{className:"l",children:"Active Endpoints"})]}),e.jsxs("div",{className:"meta muted",children:["Last delivery: ",L("2025-10-04T14:05:27+05:30")]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"k",children:"~ 260–400ms"}),e.jsx("div",{className:"l",children:"Typical Latency"})]}),e.jsxs("div",{className:"meta muted",children:["Window: ",m("2025-09-28")," – ",m("2025-10-04")]})]}),e.jsxs("div",{className:"card secret",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Signing Secret"}),e.jsx("code",{className:"secretCode",children:y})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:$,className:"ghost",title:"Copy to clipboard",children:"Copy"}),e.jsx("button",{onClick:u,className:"danger",title:"Demo: disabled",children:"Regenerate"})]}),t&&e.jsx("div",{className:"toast",children:"Copied"})]})]}),e.jsxs("section",{className:"quick-links",children:[e.jsx(n,{to:"/settings/notifications",children:"Notifications"}),e.jsx(n,{to:"/settings/tokens",children:"API Tokens"}),e.jsx(n,{to:"/settings/backups",children:"Backups"}),e.jsx(n,{to:"/tools/import-export",children:"Import / Export"}),e.jsx(n,{to:"/reports",children:"Reports"}),e.jsx(n,{to:"/admin/system-status",children:"System Status"})]}),e.jsxs("section",{className:"tableWrap",id:"search-print-area","aria-label":"Webhook endpoints",children:[e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"left",children:[e.jsx("strong",{children:"Endpoints"}),e.jsxs("span",{className:"muted",children:["Showing ",N.length]})]}),e.jsx("div",{className:"right",children:e.jsx("input",{type:"search",placeholder:"Filter by name or URL…","aria-label":"Filter webhooks"})})]}),e.jsxs("div",{className:"table card",children:[e.jsxs("div",{className:"thead",children:[e.jsx("div",{children:"Name"}),e.jsx("div",{children:"URL"}),e.jsx("div",{children:"Events"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Deliveries"}),e.jsx("div",{children:"Last Delivery"}),e.jsx("div",{children:"Actions"})]}),N.map(s=>e.jsxs("div",{className:"trow",children:[e.jsxs("div",{className:"cell name",children:[e.jsx("div",{className:"title",children:s.name}),e.jsxs("div",{className:"sub muted",children:[s.id," • Created ",m(s.createdAt)]})]}),e.jsx("div",{className:"cell url",children:e.jsx("code",{className:"mono",children:s.url})}),e.jsx("div",{className:"cell events",children:e.jsx("div",{className:"chips",children:s.events.map(x=>e.jsx("span",{className:"chip",children:x},x))})}),e.jsx("div",{className:"cell status",children:e.jsx("span",{className:`badge ${s.status}`,children:s.status})}),e.jsxs("div",{className:"cell dsum",children:[e.jsxs("div",{className:"mono",children:[s.recentSuccess," ok"]}),e.jsxs("div",{className:"mono",children:[s.recentFail," fail"]}),e.jsxs("div",{className:"muted",children:["~",s.avgLatencyMs,"ms"]})]}),e.jsxs("div",{className:"cell when",children:[e.jsx("div",{children:m(s.lastDeliveryAt)}),e.jsx("div",{className:"muted",children:w(s.lastDeliveryAt)})]}),e.jsxs("div",{className:"cell actions",children:[e.jsx("button",{onClick:u,title:"Demo: disabled",children:"Test"}),e.jsx("button",{onClick:u,className:"ghost",title:"Demo: disabled",children:"Disable"}),e.jsx(n,{to:"/settings/webhooks",className:"ghost",children:"Open"})]})]},s.id))]})]}),e.jsxs("section",{className:"grid-io",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"tit",children:"Sample Request"}),e.jsx("pre",{className:"code",children:`POST /your-endpoint HTTP/1.1
Host: hooks.example-app.com
User-Agent: ReactRoutesTheme/1.0
Content-Type: application/json
X-Signature: t=1696418727,v1=hex-hmac-sha256

{"event":"order.created","data":{"id":"ORD-3001","total":1299.00}}`})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"tit",children:"Sample Verification (pseudo)"}),e.jsx("pre",{className:"code",children:`const ok = verifyHmacSHA256({
  secret: "whsec_xxxx",
  payload: body,
  header: signatureHeader
});`})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"tit",children:"Retry Policy"}),e.jsxs("ul",{className:"muted",children:[e.jsx("li",{children:"Immediate retry x1 on 5xx."}),e.jsx("li",{children:"Exponential backoff thereafter."}),e.jsx("li",{children:"Max attempts: 6 within 24 hours."}),e.jsx("li",{children:"Timeout per request: 5s."})]})]})]}),e.jsxs("section",{className:"footer-nav",children:[e.jsx(l,{to:"/settings",children:"← Settings Home"}),e.jsx(l,{to:"/settings/notifications",children:"Notifications"}),e.jsx(l,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(l,{to:"/settings/appearance",children:"Appearance"}),e.jsx(l,{to:"/settings/numbering",children:"Numbering"}),e.jsx(l,{to:"/settings/webhooks",children:"Webhooks"})]}),e.jsx("style",{children:`
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
      `}),e.jsx(z,{open:b,onClose:()=>v(!1),title:"Unavailable in Demo",body:"This is a display-only theme. Actions like creating, disabling, or regenerating secrets are turned off."})]})}export{W as default};
