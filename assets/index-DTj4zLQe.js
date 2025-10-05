import{d as o,a as P,r as u,j as e,L as s,w,n as L,c as V,v as M,l as z,e as E}from"./index-BM8H5dnP.js";const l="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",m="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",d="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",F=o.div`
    width: 100%;
    padding: 16px;
    color: ${l};
`,U=o.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
    background: ${m};
    border: 1px solid ${r};
    border-radius: 12px;
    padding: 16px;
    box-shadow: ${v};

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${x};
        a {
            color: ${x};
        }
        span[aria-current="page"] {
            color: ${l};
        }
    }

    .title-row {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        justify-content: space-between;
        flex-wrap: wrap;

        .left {
            h1 {
                line-height: 1.1;
            }
            .muted {
                color: ${x};
            }
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            a.ghost {
                border: 1px solid ${r};
                background: transparent;
                color: ${l};
                padding: 6px 10px;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    color 0.2s ease;
                &:hover {
                    border-color: ${a};
                    color: ${a};
                    box-shadow: 0 0 0 3px ${d};
                }
            }
        }
    }
`,H=o.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(180px, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`,K=o.div`
    border: 1px solid ${r};
    background: ${m};
    border-radius: 12px;
    box-shadow: ${v};
    padding: 14px;
    .label {
        color: ${x};
        font-weight: 600;
    }
    .value {
        font-size: 24px;
        font-weight: 700;
        margin-top: 6px;
    }
    .sub {
        margin-top: 4px;
        font-size: 12px;
    }
`,B=o.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid ${r};
    background: ${m};
    border-radius: 12px;
    box-shadow: ${v};
    padding: 10px 12px;
    margin-bottom: 12px;

    .left {
        .chip-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                border: 1px solid ${r};
                background: transparent;
                color: ${l};
                padding: 6px 10px;
                border-radius: 99px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    color 0.2s ease;
                cursor: pointer;
                &:hover {
                    border-color: ${a};
                    color: ${a};
                    box-shadow: 0 0 0 3px ${d};
                }
            }
            .chip-active {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${d};
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        .hint {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .split {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .icon {
            border: 1px solid ${r};
            background: transparent;
            color: ${l};
            padding: 6px 10px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            cursor: pointer;
            &:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${d};
            }
        }
    }
`,G=o.div`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 12px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`,C=o.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,g=o.section`
    border: 1px solid ${r};
    background: ${m};
    border-radius: 12px;
    box-shadow: ${v};
    padding: 12px;

    .section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        h2 {
            font-size: 18px;
        }
        .section-actions .ghost {
            border: 1px solid ${r};
            background: transparent;
            color: ${l};
            padding: 6px 10px;
            border-radius: 8px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${d};
            }
        }
    }

    .mt8 {
        margin-top: 8px;
    }
`,J=o.div`
    width: 100%;
    font-size: 13px;

    .thead,
    .tbody {
        display: grid;
    }
    .thead .tr,
    .tbody .tr {
        display: grid;
        grid-template-columns: 2.2fr 1.6fr 1.2fr 1.6fr 1fr 0.9fr 1.4fr;
        gap: 8px;
        padding: 10px 6px;
        align-items: center;
    }

    .thead .tr {
        background: ${m};
        border-bottom: 1px solid ${r};
        position: sticky;
        top: 0;
        z-index: 1;
    }
    .th {
        font-weight: 600;
        color: ${a};
    }
    .tbody .tr {
        border-bottom: 1px solid ${r};
    }
    .td .title {
        font-weight: 600;
    }
    .td .meta {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        font-size: 12px;
    }
    .td .tags {
        color: ${x};
    }
    .td .link {
        color: ${l};
    }
    .td .link:hover {
        color: ${a};
        text-decoration: none;
    }
    .td.actions {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .ghost.small {
        border: 1px solid ${r};
        background: transparent;
        color: ${l};
        padding: 4px 8px;
        border-radius: 8px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
        &:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${d};
        }
    }

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid ${r};
        font-size: 12px;
    }
    .badge.active {
        border-color: ${a};
        color: ${a};
    }
    .badge.vip {
        border-color: ${a};
        color: ${a};
    }
    .badge.at-risk {
        opacity: 0.9;
    }
    .badge.dormant {
        opacity: 0.7;
    }

    .table-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 6px 0 6px;
        .pager {
            display: inline-flex;
            gap: 8px;
        }
        .ghost {
            border: 1px solid ${r};
            background: transparent;
            color: ${l};
            padding: 6px 10px;
            border-radius: 8px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${d};
            }
        }
    }
`,Y=o.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    .seg {
        border: 1px solid ${r};
        background: transparent;
        color: ${l};
        padding: 6px 10px;
        border-radius: 8px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
    }
    .seg:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${d};
    }
    .seg-active {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${d};
    }
`,Q=o.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid ${r};
        &:last-child {
            border-bottom: 0;
        }
        .title {
            font-weight: 600;
        }
        .val {
            font-weight: 700;
        }
    }
`,W=o.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: 8px;
    a {
        border: 1px solid ${r};
        background: transparent;
        color: ${l};
        padding: 8px 10px;
        border-radius: 8px;
        text-decoration: none;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
        &:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${d};
        }
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`,_=o.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    .row {
        display: grid;
        grid-template-columns: 16px 1fr;
        gap: 8px;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: ${a};
        margin-top: 6px;
    }
    .title {
        font-weight: 600;
    }
`,q=o.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
`,X=o.div`
    width: min(520px, 96vw);
    border: 1px solid ${r};
    background: ${m};
    border-radius: 12px;
    box-shadow: ${v};
    padding: 16px;

    h3 {
        margin-bottom: 6px;
    }
    p.muted {
        color: ${x};
    }
    .actions {
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            border: 1px solid ${r};
            background: transparent;
            color: ${l};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${d};
            }
        }
        .accent {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${d};
        }
    }
`,Z=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=c=>String(c).padStart(2,"0"),b=c=>{const i=new Date(c);return`${Z[i.getDay()]} ${ee[i.getMonth()]} ${f(i.getDate())} ${i.getFullYear()}`},S=c=>{const i=new Date(c);return`${f(i.getHours())}:${f(i.getMinutes())}:${f(i.getSeconds())}hrs`},j=c=>`${b(c)} ${S(c)}`,T="Demo mode: Data is read-only.";function se({open:c,title:i="Are you sure?",message:n,confirmText:$="OK",onConfirm:p,onClose:h}){return c?e.jsx(q,{role:"dialog","aria-modal":"true","aria-labelledby":"cd-title",onClick:h,children:e.jsxs(X,{className:"card",onClick:N=>N.stopPropagation(),children:[e.jsx("h3",{id:"cd-title",children:i}),e.jsx("p",{className:"muted",children:n}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:h,children:"Close"}),e.jsx("button",{onClick:()=>{p==null||p(),h()},className:"accent",children:"Confirm"})]})]})}):null}function te(){const{pathname:c}=P(),[i,n]=u.useState("all"),[$,p]=u.useState({open:!1,message:""}),[h,N]=u.useState(!1),I=u.useMemo(()=>[{label:"Total Customers",value:"1,248",sub:"incl. prospects",tooltip:"Total known customers & prospects"},{label:"Active (30d)",value:"312",sub:"recent orders",tooltip:"Placed at least one order in the last 30 days"},{label:"At Risk",value:"78",sub:"low activity",tooltip:"Haven’t ordered in 60–90 days"},{label:"VIP",value:"54",sub:"high value",tooltip:"Top segment by total revenue"}],[]),y=u.useMemo(()=>[{id:"CUST-1001",name:"Nova Health Supplies",contact:"Priya Sharma",phone:"+91 98765 43210",email:"ops@novahealth.example",joined:"2024-07-15T11:24:03+05:30",lastOrderAt:"2025-09-26T18:28:57+05:30",lifetimeValue:"₹ 12,40,000",status:"Active",tags:["Hospital","GST Registered"],lastOrderId:"ORD-3051",lastInvoiceId:"INV-2031"},{id:"CUST-1002",name:"Blue Cedar Pharmacy",contact:"Arun Kumar",phone:"+91 98200 11122",email:"owner@bluecedar.example",joined:"2023-11-02T09:12:40+05:30",lastOrderAt:"2025-08-11T14:05:12+05:30",lifetimeValue:"₹ 7,90,300",status:"At-Risk",tags:["Retail","Priority"],lastOrderId:"ORD-2998",lastInvoiceId:"INV-1997"},{id:"CUST-1003",name:"Aster Diagnostics",contact:"Meera K",phone:"+91 99876 22001",email:"procurement@asterdx.example",joined:"2022-04-19T17:01:11+05:30",lastOrderAt:"2025-09-02T10:21:45+05:30",lifetimeValue:"₹ 18,54,900",status:"VIP",tags:["Diagnostics","Enterprise"],lastOrderId:"ORD-3020",lastInvoiceId:"INV-2014"},{id:"CUST-1004",name:"City Care Clinic",contact:"Dr. Neha Gupta",phone:"+91 98111 88990",email:"hello@citycare.example",joined:"2024-02-01T12:30:00+05:30",lastOrderAt:"2025-07-28T16:03:30+05:30",lifetimeValue:"₹ 3,25,400",status:"Dormant",tags:["Clinic"],lastOrderId:"ORD-2880",lastInvoiceId:"INV-1920"}],[]),O=async()=>{try{await navigator.clipboard.writeText(window.location.href),N(!0),setTimeout(()=>N(!1),1500)}catch{p({open:!0,message:"Could not copy the link. You can manually copy from the address bar."})}},A=()=>{p({open:!0,message:"This is a display-only demo. Export is disabled."})},D=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{document.body.classList.remove("print-section-mode")}},R=e.jsxs(B,{className:"card",children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"chip-row",children:[e.jsx("button",{className:`chip ${i==="all"?"chip-active":""}`,onClick:()=>n("all"),title:"Show all",children:"All"}),e.jsx("button",{className:`chip ${i==="active"?"chip-active":""}`,onClick:()=>n("active"),title:"Active in 30 days",children:"Active"}),e.jsx("button",{className:`chip ${i==="vip"?"chip-active":""}`,onClick:()=>n("vip"),title:"High value customers",children:"VIP"}),e.jsx("button",{className:`chip ${i==="risk"?"chip-active":""}`,onClick:()=>n("risk"),title:"Low activity",children:"At-Risk"}),e.jsx("button",{className:`chip ${i==="dormant"?"chip-active":""}`,onClick:()=>n("dormant"),title:"No orders in 90+ days",children:"Dormant"})]})}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"hint muted",title:T,children:[e.jsx(L,{size:16})," ",e.jsx("span",{children:T})]}),e.jsxs("div",{className:"split",children:[e.jsxs("button",{className:"icon",title:"Filters (demo)",children:[e.jsx(V,{size:18}),e.jsx("span",{children:"Filters"})]}),e.jsxs("button",{className:"icon",onClick:A,title:"Export CSV (demo)",children:[e.jsx(M,{size:18}),e.jsx("span",{children:"Export"})]}),e.jsxs("button",{className:"icon",onClick:O,title:"Copy page link",children:[e.jsx(z,{size:18}),e.jsx("span",{children:h?"Copied":"Share"})]}),e.jsxs("button",{className:"icon",onClick:D,title:"Print this report",children:[e.jsx(E,{size:18}),e.jsx("span",{children:"Print"})]})]})]})]});return e.jsxs(F,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(U,{className:"card",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:"/reports",children:"Reports"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:"Customers"})]}),e.jsxs("div",{className:"title-row",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Customer Insights"}),e.jsxs("p",{className:"muted",children:["Snapshot generated on ",e.jsx("strong",{children:j(new Date().toISOString())})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs(s,{className:"ghost",to:"/customers",title:"Go to Customers",children:["Customers ",e.jsx(w,{size:16})]}),e.jsxs(s,{className:"ghost",to:"/reports/sales",title:"Open Sales Report",children:["Sales Report ",e.jsx(w,{size:16})]}),e.jsxs(s,{className:"ghost",to:"/reports/inventory",title:"Open Inventory Report",children:["Inventory Report ",e.jsx(w,{size:16})]})]})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsx(H,{children:I.map(t=>e.jsxs(K,{className:"card",title:t.tooltip,children:[e.jsx("div",{className:"label",children:t.label}),e.jsx("div",{className:"value",children:t.value}),e.jsx("div",{className:"sub muted",children:t.sub})]},t.label))}),R,e.jsxs(G,{children:[e.jsxs(C,{children:[e.jsxs(g,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{children:"Customer List"}),e.jsx("div",{className:"section-actions",children:e.jsx(s,{to:"/customers/new",className:"ghost",title:"Create (demo)",children:"New"})})]}),e.jsxs(J,{role:"table","aria-label":"Customers table",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Customer"}),e.jsx("div",{className:"th",role:"columnheader",children:"Contact"}),e.jsx("div",{className:"th",role:"columnheader",children:"Joined"}),e.jsx("div",{className:"th",role:"columnheader",children:"Last Order"}),e.jsx("div",{className:"th",role:"columnheader",children:"LTV"}),e.jsx("div",{className:"th",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th",role:"columnheader",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:y.map(t=>{var k;return e.jsxs("div",{className:"tr",role:"row",children:[e.jsxs("div",{className:"td",role:"cell",children:[e.jsx("div",{className:"title",children:e.jsx(s,{to:`/customers/${t.id}`,className:"link",children:t.name})}),e.jsxs("div",{className:"meta muted",children:[e.jsx("span",{children:t.id}),(k=t.tags)!=null&&k.length?e.jsx("span",{className:"tags",children:t.tags.join(" • ")}):null]})]}),e.jsxs("div",{className:"td",role:"cell",children:[e.jsx("div",{children:t.contact}),e.jsx("div",{className:"muted",children:t.phone}),e.jsx("div",{className:"muted",children:t.email})]}),e.jsxs("div",{className:"td",role:"cell",children:[e.jsx("div",{children:b(t.joined)}),e.jsx("div",{className:"muted",children:S(t.joined)})]}),e.jsxs("div",{className:"td",role:"cell",children:[e.jsx(s,{to:`/orders/${t.lastOrderId}`,className:"link",children:t.lastOrderId}),e.jsx("div",{className:"muted",children:j(t.lastOrderAt)})]}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("strong",{children:t.lifetimeValue})}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("span",{className:`badge ${t.status.toLowerCase().replace(/\s/g,"-")}`,children:t.status})}),e.jsxs("div",{className:"td actions",role:"cell",children:[e.jsx(s,{to:`/customers/${t.id}`,className:"ghost small",title:"View details",children:"View"}),e.jsx(s,{to:`/customers/${t.id}/edit`,className:"ghost small",title:"Edit (demo)",children:"Edit"}),e.jsx(s,{to:`/invoices/${t.lastInvoiceId}`,className:"ghost small",title:"Last invoice",children:"Invoice"}),e.jsx(s,{to:`/customers/${t.id}/print`,className:"ghost small",title:"Print profile",children:"Print"})]})]},t.id)})})]}),e.jsxs("div",{className:"table-footer",children:[e.jsxs("div",{className:"muted",children:["Showing 1–",y.length," of 1,248"]}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"ghost",title:"Previous (demo)",children:"Prev"}),e.jsx("button",{className:"ghost",title:"Next (demo)",children:"Next"})]})]})]}),e.jsxs(g,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Segments"})}),e.jsxs(Y,{children:[e.jsx(s,{to:"/reports/customers",className:`seg ${i==="all"?"seg-active":""}`,children:"All"}),e.jsx(s,{to:"/reports/customers",className:`seg ${i==="active"?"seg-active":""}`,children:"Active"}),e.jsx(s,{to:"/reports/customers",className:`seg ${i==="vip"?"seg-active":""}`,children:"VIP"}),e.jsx(s,{to:"/reports/customers",className:`seg ${i==="risk"?"seg-active":""}`,children:"At-Risk"}),e.jsx(s,{to:"/reports/customers",className:`seg ${i==="dormant"?"seg-active":""}`,children:"Dormant"})]}),e.jsxs("div",{className:"muted",children:["Segments are predefined for demo. Explore ",e.jsx(s,{to:"/reports/finance",className:"link",children:"Finance"})," or ",e.jsx(s,{to:"/reports/sales",className:"link",children:"Sales"})," for more."]})]})]}),e.jsxs(C,{children:[e.jsxs(g,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Top Customers"})}),e.jsxs(Q,{children:[e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"meta",children:[e.jsx(s,{to:"/customers/CUST-1003",className:"title link",children:"Aster Diagnostics"}),e.jsxs("span",{className:"muted",children:["Last purchase ",b("2025-09-02T10:21:45+05:30")]})]}),e.jsx("div",{className:"val",children:"₹ 18,54,900"})]}),e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"meta",children:[e.jsx(s,{to:"/customers/CUST-1001",className:"title link",children:"Nova Health Supplies"}),e.jsxs("span",{className:"muted",children:["Last purchase ",b("2025-09-26T18:28:57+05:30")]})]}),e.jsx("div",{className:"val",children:"₹ 12,40,000"})]}),e.jsxs("div",{className:"item",children:[e.jsxs("div",{className:"meta",children:[e.jsx(s,{to:"/customers/CUST-1002",className:"title link",children:"Blue Cedar Pharmacy"}),e.jsxs("span",{className:"muted",children:["Last purchase ",b("2025-08-11T14:05:12+05:30")]})]}),e.jsx("div",{className:"val",children:"₹ 7,90,300"})]})]}),e.jsxs("div",{className:"muted mt8",children:["View complete list from ",e.jsx(s,{to:"/reports/finance",className:"link",children:"Finance"}),"."]})]}),e.jsxs(g,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Quick Links"})}),e.jsxs(W,{children:[e.jsx(s,{to:"/customers",children:"All Customers"}),e.jsx(s,{to:"/orders",children:"Sales Orders"}),e.jsx(s,{to:"/invoices",children:"Invoices"}),e.jsx(s,{to:"/receipts",children:"Receipts"}),e.jsx(s,{to:"/reports/sales",children:"Sales Report"}),e.jsx(s,{to:"/reports/procurement",children:"Procurement Report"}),e.jsx(s,{to:"/finance/ledgers",children:"Ledgers"}),e.jsx(s,{to:"/admin/users",children:"Users"}),e.jsx(s,{to:"/settings/appearance",children:"Appearance"}),e.jsx(s,{to:"/tools/theme-tokens",children:"Theme Tokens"})]})]}),e.jsxs(g,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Recent Activity"})}),e.jsxs(_,{children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title",children:["Invoice ",e.jsx(s,{to:"/invoices/INV-2031",className:"link",children:"INV-2031"})," issued"]}),e.jsx("div",{className:"muted",children:j("2025-09-26T18:28:57+05:30")})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title",children:["Order ",e.jsx(s,{to:"/orders/ORD-3051",className:"link",children:"ORD-3051"})," completed"]}),e.jsx("div",{className:"muted",children:j("2025-09-24T10:12:00+05:30")})]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"title",children:["New customer ",e.jsx(s,{to:"/customers/CUST-1004",className:"link",children:"City Care Clinic"})," onboarded"]}),e.jsx("div",{className:"muted",children:j("2025-07-28T16:03:30+05:30")})]})]})]})]})]})]})]}),e.jsx(se,{open:$.open,message:$.message,onClose:()=>p({open:!1,message:""}),onConfirm:()=>{}})]})}export{te as default};
