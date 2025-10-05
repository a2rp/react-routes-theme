import{d as u,u as W,r,j as e,N as R,l as J,e as Z,A as q,w as Q,b as Y,C as K}from"./index-BpMGcZ_2.js";const m="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",j="var(--card, #111318)",o="var(--border, #23262d)",n="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",V="var(--warn, #f59e0b)",z="var(--danger, #ef4444)",p={Page:u.div`
        color: ${m};
        display: grid;
        gap: 16px;
        padding-bottom: 48px;
    `,Header:u.header`
        padding: 16px 18px;

        .titleRow {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            align-items: flex-start;
        }

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${h};
            }
            .current {
                color: ${m};
            }
        }

        .meta {
            margin-top: 6px;
            color: ${h};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${j};
            color: ${m};
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Banner:u.div`
        margin-top: 12px;
        border: 1px solid ${o};
        border-radius: 10px;
        background: color-mix(in oklab, ${n} 10%, transparent);
        padding: 8px 12px;
        font-weight: 600;
    `,Tiles:u.div`
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 12px;
        margin-top: 14px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .tile {
            border: 1px solid ${o};
            border-radius: 14px;
            padding: 12px;
            background: ${j};
            box-shadow: var(--shadow);
            display: grid;
            gap: 6px;
            .k {
                color: ${h};
                font-size: 12px;
            }
            .v {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
            .v.warn {
                color: ${V};
            }
        }
        .sm {
            padding: 10px;
        }
    `,Filters:u.div`
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;

        .searchBox {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${o};
            border-radius: 10px;
            background: ${j};
            padding: 8px 12px;
            input {
                flex: 1;
                background: transparent;
                border: 0;
                color: ${m};
                outline: none;
                font-size: 13px;
            }
        }

        .filterRow {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            label {
                color: ${h};
                font-size: 12px;
            }
            select {
                border: 1px solid ${o};
                background: ${j};
                color: ${m};
                border-radius: 8px;
                padding: 6px 10px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            select:focus {
                border-color: ${n};
                box-shadow: 0 0 0 3px ${D};
            }
        }
    `,TableWrap:u.div`
        padding: 0;
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${j};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 12px;
            color: ${m};
            user-select: none;
        }
        thead th[role="button"] {
            cursor: pointer;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${o};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .num {
            text-align: right;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .sub {
            color: ${h};
            font-size: 12px;
            margin-top: 2px;
        }

        .rowActions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .btnLink {
            border: 1px solid ${o};
            background: ${j};
            color: ${m};
            border-radius: 8px;
            padding: 4px 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnLink:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }

        .pill {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${n} 10%, transparent);
            font-weight: 600;
            font-size: 12px;
            &.overdue {
                background: color-mix(in oklab, ${V} 18%, transparent);
                border-color: color-mix(in oklab, ${V} 30%, ${o});
            }
            &.partially-paid {
                background: color-mix(in oklab, ${n} 14%, transparent);
            }
            &.draft {
                background: rgba(120, 120, 120, 0.15);
            }
            &.cancelled {
                background: color-mix(in oklab, ${z} 16%, transparent);
                border-color: color-mix(in oklab, ${z} 28%, ${o});
            }
            &.paid {
                /* default accent mix already applied */
            }
        }
    `,Pagination:u.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        color: ${h};

        .right {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        button {
            border: 1px solid ${o};
            background: ${j};
            color: ${m};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        button:hover:not(:disabled) {
            color: ${n};
            border-color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,PrintCard:u.div`
        padding: 14px 16px;

        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .meta {
            color: ${h};
            font-size: 12px;
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }
        th,
        td {
            padding: 8px;
            border-bottom: 1px solid ${o};
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `,Empty:u.div`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${h};
        .icon {
            color: ${n};
        }
    `},f=i=>{const s=i instanceof Date?i:new Date(i),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],M=T=>String(T).padStart(2,"0");return`${b[s.getDay()]} ${d[s.getMonth()]} ${M(s.getDate())} ${s.getFullYear()}`},B=i=>{const s=i instanceof Date?i:new Date(i),b=d=>String(d).padStart(2,"0");return`${f(s)} ${b(s.getHours())}:${b(s.getMinutes())}:${b(s.getSeconds())}hrs`},X=[{id:"INV-2031",customer:"Bluewave Traders",customerId:"CUST-1001",date:"2025-10-04T10:25:32+05:30",due:"2025-10-18T23:59:59+05:30",status:"Paid",amountText:"₹ 18,650.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7712"},{id:"INV-2032",customer:"Nova Health Pvt Ltd",customerId:"CUST-1012",date:"2025-10-03T16:11:02+05:30",due:"2025-10-17T23:59:59+05:30",status:"Overdue",amountText:"₹ 42,300.00",balanceText:"₹ 3,200.00",currency:"INR",po:"PO-7720"},{id:"INV-2033",customer:"Urban Mart",customerId:"CUST-1024",date:"2025-10-02T12:02:09+05:30",due:"2025-10-09T23:59:59+05:30",status:"Partially Paid",amountText:"₹ 9,990.00",balanceText:"₹ 2,000.00",currency:"INR",po:"PO-7709"},{id:"INV-2034",customer:"Pinnacle Labs",customerId:"CUST-1031",date:"2025-10-01T18:45:41+05:30",due:"2025-10-15T23:59:59+05:30",status:"Paid",amountText:"₹ 75,000.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7715"},{id:"INV-2035",customer:"Skyline Retail",customerId:"CUST-1045",date:"2025-09-30T09:13:21+05:30",due:"2025-10-14T23:59:59+05:30",status:"Draft",amountText:"₹ 5,450.00",balanceText:"₹ 5,450.00",currency:"INR",po:"—"},{id:"INV-2036",customer:"Apex Surgical",customerId:"CUST-1049",date:"2025-09-29T13:00:02+05:30",due:"2025-10-13T23:59:59+05:30",status:"Paid",amountText:"₹ 21,300.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7722"},{id:"INV-2037",customer:"Orion Pharma",customerId:"CUST-1054",date:"2025-09-28T15:08:36+05:30",due:"2025-10-12T23:59:59+05:30",status:"Cancelled",amountText:"₹ 0.00",balanceText:"₹ 0.00",currency:"INR",po:"—"},{id:"INV-2038",customer:"Zenith Clinics",customerId:"CUST-1060",date:"2025-09-27T11:04:10+05:30",due:"2025-10-11T23:59:59+05:30",status:"Paid",amountText:"₹ 13,280.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7699"},{id:"INV-2039",customer:"Northwind Stores",customerId:"CUST-1065",date:"2025-09-26T10:22:03+05:30",due:"2025-10-10T23:59:59+05:30",status:"Overdue",amountText:"₹ 3,120.00",balanceText:"₹ 3,120.00",currency:"INR",po:"—"},{id:"INV-2040",customer:"Everest Diagnostics",customerId:"CUST-1069",date:"2025-09-25T19:05:50+05:30",due:"2025-10-09T23:59:59+05:30",status:"Paid",amountText:"₹ 56,400.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7688"},{id:"INV-2041",customer:"Metro Care",customerId:"CUST-1072",date:"2025-09-24T08:18:19+05:30",due:"2025-10-08T23:59:59+05:30",status:"Partially Paid",amountText:"₹ 12,000.00",balanceText:"₹ 4,500.00",currency:"INR",po:"PO-7683"},{id:"INV-2042",customer:"Trident Enterprises",customerId:"CUST-1081",date:"2025-09-23T10:42:41+05:30",due:"2025-10-07T23:59:59+05:30",status:"Paid",amountText:"₹ 7,840.00",balanceText:"₹ 0.00",currency:"INR",po:"—"},{id:"INV-2043",customer:"Sapphire Wholesale",customerId:"CUST-1085",date:"2025-09-22T14:31:55+05:30",due:"2025-10-06T23:59:59+05:30",status:"Paid",amountText:"₹ 28,000.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7668"},{id:"INV-2044",customer:"Nimbus Partners",customerId:"CUST-1090",date:"2025-09-21T16:49:27+05:30",due:"2025-10-05T23:59:59+05:30",status:"Draft",amountText:"₹ 2,200.00",balanceText:"₹ 2,200.00",currency:"INR",po:"—"},{id:"INV-2045",customer:"Regal Medicals",customerId:"CUST-1093",date:"2025-09-20T09:55:31+05:30",due:"2025-10-04T23:59:59+05:30",status:"Paid",amountText:"₹ 33,120.00",balanceText:"₹ 0.00",currency:"INR",po:"PO-7659"}],v={totalInvoices:"15",totalValue:"₹ 3,25,650.00",paidCount:"7",overdueCount:"2",drafts:"2",partially:"2",cancelled:"1"},ee=()=>{const i=W(),[s,b]=r.useState(""),[d,M]=r.useState("All"),[T,A]=r.useState({key:"date",dir:"desc"}),[g,$]=r.useState(1),L=10,[k,O]=r.useState(""),E=r.useRef(null);r.useEffect(()=>{if(!k)return;const t=setTimeout(()=>O(""),3e3);return()=>clearTimeout(t)},[k]);const N=r.useMemo(()=>{const t=s.trim().toLowerCase();let c=X.filter(l=>{const x=(l.id+" "+l.customer+" "+l.po).toLowerCase(),a=t.length===0||x.includes(t),y=d==="All"?!0:l.status===d;return a&&y});const I=(l,x)=>{const{key:a,dir:y}=T;let S,P;return a==="date"||a==="due"?(S=new Date(l[a]).getTime(),P=new Date(x[a]).getTime()):(S=(l[a]||"").toString(),P=(x[a]||"").toString()),S<P?y==="asc"?-1:1:S>P?y==="asc"?1:-1:0};return c.sort(I),c},[s,d,T]),w=Math.max(1,Math.ceil(N.length/L)),U=r.useMemo(()=>{const t=(g-1)*L;return N.slice(t,t+L)},[N,g]);r.useEffect(()=>{$(1)},[s,d]);const C=t=>{A(c=>c.key===t?{key:t,dir:c.dir==="asc"?"desc":"asc"}:{key:t,dir:"asc"})},F=()=>{const t=["Invoice","Customer","Date","Due","Status","Amount","Balance","PO"],c=a=>[a.id,a.customer,f(a.date),f(a.due),a.status,a.amountText,a.balanceText,a.po],I=[t.join(","),...N.map(a=>c(a).map(y=>`"${String(y).replace(/"/g,'""')}"`).join(","))],l=new Blob([I.join(`
`)],{type:"text/csv;charset=utf-8"}),x=document.createElement("a");x.href=URL.createObjectURL(l),x.download="invoices.csv",x.click(),URL.revokeObjectURL(x.href),O("Exported invoices.csv")},G=()=>{const t=location.origin+"/react-routes-theme/invoices";navigator.clipboard.writeText(t).then(()=>O("Link copied"))},H=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(p.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(p.Header,{className:"card",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Invoices"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(R,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Invoices"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Updated: ",B(new Date)]})})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btnGhost",title:"Copy link",onClick:G,children:[e.jsx(J,{})," Copy Link"]}),e.jsxs("button",{className:"btnGhost",title:"Print list",onClick:H,children:[e.jsx(Z,{})," Print"]}),e.jsxs("button",{className:"btnPrimary",title:"Export CSV",onClick:F,children:[e.jsx(q,{})," Export"]}),e.jsxs("button",{className:"btnPrimary",disabled:!0,title:"Demo only",children:[e.jsx(Q,{})," New Invoice"]})]})]}),k?e.jsx(p.Banner,{role:"status",children:k}):null,e.jsxs(p.Tiles,{children:[e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Total Invoices"}),e.jsx("div",{className:"v",children:v.totalInvoices})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Total Value"}),e.jsx("div",{className:"v",children:v.totalValue})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Paid"}),e.jsx("div",{className:"v",children:v.paidCount})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Overdue"}),e.jsx("div",{className:"v warn",children:v.overdueCount})]}),e.jsxs("div",{className:"tile sm",children:[e.jsx("div",{className:"k",children:"Drafts"}),e.jsx("div",{className:"v",children:v.drafts})]}),e.jsxs("div",{className:"tile sm",children:[e.jsx("div",{className:"k",children:"Partially"}),e.jsx("div",{className:"v",children:v.partially})]}),e.jsxs("div",{className:"tile sm",children:[e.jsx("div",{className:"k",children:"Cancelled"}),e.jsx("div",{className:"v",children:v.cancelled})]})]}),e.jsxs(p.Filters,{children:[e.jsxs("div",{className:"searchBox",children:[e.jsx(Y,{size:18}),e.jsx("input",{value:s,onChange:t=>b(t.target.value),placeholder:"Search invoice, customer, PO…","aria-label":"Search invoices"})]}),e.jsxs("div",{className:"filterRow",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:d,onChange:t=>M(t.target.value),"aria-label":"Status filter",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Paid"}),e.jsx("option",{children:"Partially Paid"}),e.jsx("option",{children:"Overdue"}),e.jsx("option",{children:"Draft"}),e.jsx("option",{children:"Cancelled"})]}),e.jsx("label",{children:"Sort"}),e.jsxs("select",{value:`${T.key}:${T.dir}`,onChange:t=>{const[c,I]=t.target.value.split(":");A({key:c,dir:I})},"aria-label":"Sort by",children:[e.jsx("option",{value:"date:desc",children:"Date ↓"}),e.jsx("option",{value:"date:asc",children:"Date ↑"}),e.jsx("option",{value:"due:desc",children:"Due ↓"}),e.jsx("option",{value:"due:asc",children:"Due ↑"}),e.jsx("option",{value:"customer:asc",children:"Customer A–Z"}),e.jsx("option",{value:"customer:desc",children:"Customer Z–A"}),e.jsx("option",{value:"id:asc",children:"Invoice ↑"}),e.jsx("option",{value:"id:desc",children:"Invoice ↓"})]})]})]})]}),e.jsxs(p.TableWrap,{className:"card",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>C("id"),role:"button",tabIndex:0,children:"Invoice"}),e.jsx("th",{onClick:()=>C("customer"),role:"button",tabIndex:0,children:"Customer"}),e.jsx("th",{onClick:()=>C("date"),role:"button",tabIndex:0,children:"Date"}),e.jsx("th",{onClick:()=>C("due"),role:"button",tabIndex:0,children:"Due"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{className:"num",children:"Balance"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:U.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsxs(p.Empty,{children:[e.jsx("div",{className:"icon",children:e.jsx(K,{size:24})}),e.jsx("div",{children:"No invoices match your filters."})]})})}):U.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(R,{to:`/invoices/${t.id}`,className:"mono",children:t.id}),e.jsxs("div",{className:"sub",children:["PO: ",t.po]})]}),e.jsx("td",{children:e.jsx(R,{to:`/customers/${t.customerId}`,children:t.customer})}),e.jsx("td",{children:f(t.date)}),e.jsx("td",{children:f(t.due)}),e.jsx("td",{children:e.jsx("span",{className:`pill ${t.status.replace(/\s+/g,"-").toLowerCase()}`,children:t.status})}),e.jsx("td",{className:"num",children:t.amountText}),e.jsx("td",{className:"num",children:t.balanceText}),e.jsxs("td",{className:"rowActions",children:[e.jsx(R,{to:`/invoices/${t.id}`,className:"btnLink",children:"View"}),e.jsx("button",{className:"btnLink",title:"Open customer",onClick:()=>i(`/customers/${t.customerId}`),children:"Customer"})]})]},t.id))})]}),e.jsxs(p.Pagination,{children:[e.jsxs("div",{className:"left",children:["Showing ",e.jsx("strong",{children:U.length})," of ",e.jsx("strong",{children:N.length})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{onClick:()=>$(1),disabled:g===1,children:"First"}),e.jsx("button",{onClick:()=>$(t=>Math.max(1,t-1)),disabled:g===1,children:"Prev"}),e.jsxs("span",{children:["Page ",g," / ",w]}),e.jsx("button",{onClick:()=>$(t=>Math.min(w,t+1)),disabled:g===w,children:"Next"}),e.jsx("button",{onClick:()=>$(w),disabled:g===w,children:"Last"})]})]})]}),e.jsxs(p.PrintCard,{className:"card",id:"search-print-area",ref:E,children:[e.jsx("h3",{children:"Invoices — Print Summary"}),e.jsxs("div",{className:"meta",children:["Generated: ",B(new Date)]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{className:"num",children:"Balance"})]})}),e.jsx("tbody",{children:N.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:t.id}),e.jsx("td",{children:t.customer}),e.jsx("td",{children:f(t.date)}),e.jsx("td",{children:f(t.due)}),e.jsx("td",{children:t.status}),e.jsx("td",{className:"num",children:t.amountText}),e.jsx("td",{className:"num",children:t.balanceText})]},`p-${t.id}`))})]})]})]})};export{ee as default};
