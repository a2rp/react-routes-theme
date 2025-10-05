import{d as h,s as z,u as I,r as x,j as e,N as g}from"./index-CvWKwy17.js";const o="var(--text, #f3f4f6)",v="var(--muted, #a0a0a7)",w="var(--card, #111318)",i="var(--border, #23262d)",a="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",U="var(--danger, #ef4444)",H="var(--warn, #f59e0b)",B="var(--info, #60a5fa)",m={Page:h.div`
        padding: 24px 0 64px;
        color: ${o};
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .meta h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${v};
        }
        .breadcrumbs .current {
            color: ${o};
        }
        .sub {
            margin-top: 6px;
            color: ${v};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${w};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
    `,Banner:h.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${a} 10%, transparent);
    `,Filters:h.section`
        padding: 14px 16px;
        margin-bottom: 16px;
        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 960px) {
                grid-template-columns: 1.5fr 0.8fr 0.8fr 0.8fr;
            }
        }
        label {
            display: block;
            font-size: 12px;
            color: ${v};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .toolbar {
            margin-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .chip {
                border: 1px solid ${i};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${a} 8%, transparent);
            }
        }
    `,TableCard:h.section`
        padding: 0;

        .tableHeader {
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${i};
            .counts {
                display: flex;
                gap: 8px;
                align-items: baseline;
            }
            .muted {
                color: ${v};
                font-size: 12px;
            }
        }

        .tableWrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${w};
            text-align: left;
            padding: 10px 12px;
            border-bottom: 1px solid ${i};
            color: ${a};
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${i};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${a} 6%, transparent);
        }
        .right {
            text-align: right;
        }

        .mutedCell {
            color: ${v};
        }

        .badge {
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid ${i};
            font-weight: 600;
            font-size: 12px;
        }
        .status-draft {
            background: color-mix(in oklab, ${B} 10%, transparent);
            color: ${o};
        }
        .status-sent {
            background: color-mix(in oklab, ${a} 12%, transparent);
            color: ${o};
        }
        .status-accepted {
            background: color-mix(in oklab, ${a} 20%, transparent);
            color: ${o};
        }
        .status-rejected {
            background: color-mix(in oklab, ${U} 14%, transparent);
            color: ${o};
        }
        .status-expired {
            background: color-mix(in oklab, ${H} 16%, transparent);
            color: ${o};
        }

        td.actions .link {
            background: transparent;
            border: 0;
            padding: 0;
            cursor: pointer;
            color: ${o};
            text-decoration: none;
            margin-left: 10px;
        }
        td.actions .link:hover {
            color: ${a};
            text-decoration: underline;
        }
    `,Pagination:h.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 16px;
        button {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${i};
            background: ${w};
            color: ${o};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        button:hover:not(:disabled) {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .page {
            color: ${v};
        }
    `,Empty:h.div`
        padding: 38px 16px;
        text-align: center;
        .icon {
            font-size: 30px;
            margin-bottom: 8px;
            opacity: 0.8;
        }
        .title {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .sub {
            color: ${v};
        }
    `,SidebarRow:h.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .card {
            padding: 14px 16px;
        }
        .info ul {
            margin: 10px 0 0 16px;
        }
        .info .tips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .info .chip {
            border: 1px solid ${i};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${a} 8%, transparent);
        }

        .shortcuts .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 8px;
        }
        .shortcuts a {
            border: 1px solid ${i};
            border-radius: 8px;
            padding: 8px 10px;
            background: ${w};
            color: ${o};
        }
        .shortcuts a:hover {
            border-color: ${a};
            color: ${a};
        }
    `,Overlay:h.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:h.div`
        width: min(520px, 92vw);
        border: 1px solid ${i};
        background: ${w};
        color: ${o};
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${i};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
        }
        footer {
            padding: 12px 16px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }
        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${w};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
    `},y=(n,$)=>{const s=n instanceof Date?n:new Date(n),j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=T=>String(T).padStart(2,"0"),l=`${j[s.getDay()]} ${r[s.getMonth()]} ${f(s.getDate())} ${s.getFullYear()}`;return $?`${l} ${f(s.getHours())}:${f(s.getMinutes())}:${f(s.getSeconds())}hrs`:l},G=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n),J=[{id:"Q-1001",customer:"Bluewave Traders",createdAt:"2025-10-01T10:12:03+05:30",validTill:"2025-10-10",status:"Sent",items:12,amount:184e3,salesperson:"Aarav",lastActivity:"2025-10-04T16:38:20+05:30"},{id:"Q-1002",customer:"Nimbus Pharma",createdAt:"2025-09-28T09:31:44+05:30",validTill:"2025-10-06",status:"Draft",items:7,amount:78e3,salesperson:"Ishita",lastActivity:"2025-10-03T12:05:10+05:30"},{id:"Q-1003",customer:"Urban Stores",createdAt:"2025-09-25T15:02:18+05:30",validTill:"2025-10-05",status:"Accepted",items:5,amount:52e3,salesperson:"Kabir",lastActivity:"2025-10-04T09:18:00+05:30"},{id:"Q-1004",customer:"Vertex Labs",createdAt:"2025-09-29T11:44:02+05:30",validTill:"2025-10-08",status:"Rejected",items:3,amount:22e3,salesperson:"Ishita",lastActivity:"2025-10-02T18:26:45+05:30"},{id:"Q-1005",customer:"Meadow Retail",createdAt:"2025-09-23T12:07:55+05:30",validTill:"2025-10-03",status:"Expired",items:9,amount:132e3,salesperson:"Aarav",lastActivity:"2025-10-01T10:52:11+05:30"},{id:"Q-1006",customer:"Skyline Distributors",createdAt:"2025-10-02T13:21:00+05:30",validTill:"2025-10-12",status:"Sent",items:11,amount:201500,salesperson:"Zara",lastActivity:"2025-10-04T11:00:00+05:30"},{id:"Q-1007",customer:"Crescent Care",createdAt:"2025-10-03T08:19:12+05:30",validTill:"2025-10-11",status:"Draft",items:6,amount:61e3,salesperson:"Kabir",lastActivity:"2025-10-04T13:42:29+05:30"},{id:"Q-1008",customer:"Oakridge Chem",createdAt:"2025-09-30T17:40:00+05:30",validTill:"2025-10-07",status:"Accepted",items:10,amount:157e3,salesperson:"Zara",lastActivity:"2025-10-04T14:14:14+05:30"},{id:"Q-1009",customer:"Silverline Clinic",createdAt:"2025-09-22T10:10:10+05:30",validTill:"2025-09-30",status:"Expired",items:4,amount:43e3,salesperson:"Ishita",lastActivity:"2025-09-30T19:22:45+05:30"},{id:"Q-1010",customer:"Pacific Healthcare",createdAt:"2025-10-04T09:09:09+05:30",validTill:"2025-10-15",status:"Sent",items:8,amount:98e3,salesperson:"Aarav",lastActivity:"2025-10-04T12:34:56+05:30"},{id:"Q-1011",customer:"Northwind Mart",createdAt:"2025-09-27T14:25:00+05:30",validTill:"2025-10-09",status:"Rejected",items:2,amount:12e3,salesperson:"Kabir",lastActivity:"2025-10-03T16:11:11+05:30"},{id:"Q-1012",customer:"Suncrest Stores",createdAt:"2025-09-26T11:11:11+05:30",validTill:"2025-10-06",status:"Sent",items:13,amount:245500,salesperson:"Zara",lastActivity:"2025-10-04T10:45:00+05:30"}],V=["All","Draft","Sent","Accepted","Rejected","Expired"],W=({open:n,title:$,message:s,onClose:j})=>n?e.jsx(m.Overlay,{onMouseDown:j,role:"dialog","aria-modal":"true",children:e.jsxs(m.Modal,{className:"card",onMouseDown:r=>r.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:$})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:s})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:j,children:"Close"})})]})}):null,Z=()=>{const[n,$]=z();I();const[s,j]=x.useState(()=>n.get("q")||""),[r,f]=x.useState(()=>n.get("status")||"All"),[l,T]=x.useState(()=>n.get("from")||""),[b,P]=x.useState(()=>n.get("to")||""),[d,u]=x.useState(()=>Number(n.get("page")||1)),[M,Q]=x.useState(!1),[S,C]=x.useState(""),L=x.useRef(null),A=8;x.useEffect(()=>{const t=new URLSearchParams;s&&t.set("q",s),r&&r!=="All"&&t.set("status",r),l&&t.set("from",l),b&&t.set("to",b),d>1&&t.set("page",String(d)),$(t,{replace:!0})},[s,r,l,b,d,$]),x.useEffect(()=>{if(!S)return;const t=setTimeout(()=>C(""),3e3);return()=>clearTimeout(t)},[S]);const k=x.useMemo(()=>{let t=J;if(r!=="All"&&(t=t.filter(c=>c.status===r)),s.trim()){const c=s.trim().toLowerCase();t=t.filter(p=>(p.id+" "+p.customer+" "+p.salesperson).toLowerCase().includes(c))}return l&&(t=t.filter(c=>new Date(c.createdAt)>=new Date(l))),b&&(t=t.filter(c=>new Date(c.createdAt)<=new Date(b+"T23:59:59"))),t},[s,r,l,b]),N=Math.max(1,Math.ceil(k.length/A));x.useEffect(()=>{d>N&&u(1)},[d,N]);const E=k.slice((d-1)*A,(d-1)*A+A),O=()=>{const t=new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),c=URL.createObjectURL(t),p=document.createElement("a");p.href=c,p.download="quotes.json",document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(c),C(`Exported at ${y(new Date,!0)}`)},q=t=>{var p;const c=`${location.origin}/react-routes-theme/sales/quotes/${t}`.replace(/\/+$/,"/").replace(/\/{2,}/g,"/");(p=navigator.clipboard)==null||p.writeText(c).then(()=>{C(`Link copied • ${t}`)})},R=()=>{L.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},F=()=>{j(""),f("All"),T(""),P(""),u(1)};return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"meta",children:[e.jsx("h1",{children:"Sales Quotes"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(g,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Quotes"})]}),e.jsx("div",{className:"sub",children:e.jsxs("span",{children:["Last refreshed: ",y(new Date,!0)]})})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:R,title:"Print visible list",children:"Print"}),e.jsx("button",{className:"btnGhost",onClick:O,title:"Export to JSON",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:()=>Q(!0),title:"Create new quote",children:"New Quote"})]})]}),S?e.jsx(m.Banner,{role:"status","aria-live":"polite",children:S}):null,e.jsxs(m.Filters,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:s,onChange:t=>{j(t.target.value),u(1)},placeholder:"Search by Quote ID, Customer, Salesperson","aria-label":"Search quotes"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsx("select",{value:r,onChange:t=>{f(t.target.value),u(1)},children:V.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"date",value:l,onChange:t=>{T(t.target.value),u(1)}})]}),e.jsxs("div",{children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"date",value:b,onChange:t=>{P(t.target.value),u(1)}})]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"chips",children:[r!=="All"?e.jsxs("span",{className:"chip",children:["Status: ",r]}):null,s?e.jsxs("span",{className:"chip",children:["Query: ",s]}):null,l?e.jsxs("span",{className:"chip",children:["From: ",y(new Date(l))]}):null,b?e.jsxs("span",{className:"chip",children:["To: ",y(new Date(b))]}):null]}),e.jsx("div",{className:"right",children:e.jsx("button",{className:"btnGhost",onClick:F,children:"Clear"})})]})]}),e.jsxs(m.TableCard,{className:"card",id:"search-print-area",ref:L,children:[e.jsx("div",{className:"tableHeader",children:e.jsxs("div",{className:"counts",children:[e.jsx("span",{className:"muted",children:"Showing"}),e.jsx("strong",{children:E.length}),e.jsx("span",{className:"muted",children:"of"}),e.jsx("strong",{children:k.length}),e.jsx("span",{className:"muted",children:"quotes"})]})}),k.length===0?e.jsxs(m.Empty,{children:[e.jsx("div",{className:"icon",children:"⊘"}),e.jsx("div",{className:"title",children:"No quotes match the filters"}),e.jsx("div",{className:"sub",children:"Try clearing filters or adjusting the date range."})]}):e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Quote"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Valid Till"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Items"}),e.jsx("th",{className:"right",children:"Amount"}),e.jsx("th",{children:"Salesperson"}),e.jsx("th",{children:"Last Activity"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsx("tbody",{children:E.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(g,{to:`/sales/quotes/${t.id}`,title:"Open details",children:t.id})}),e.jsx("td",{className:"mutedCell",children:t.customer}),e.jsx("td",{children:y(t.createdAt)}),e.jsx("td",{children:y(t.validTill)}),e.jsx("td",{children:e.jsx("span",{className:`badge status-${t.status.toLowerCase()}`,children:t.status})}),e.jsx("td",{children:t.items}),e.jsx("td",{className:"right",children:G(t.amount)}),e.jsx("td",{className:"mutedCell",children:t.salesperson}),e.jsx("td",{children:y(t.lastActivity,!0)}),e.jsxs("td",{className:"right actions",children:[e.jsx(g,{className:"link",to:`/sales/quotes/${t.id}`,title:"View",children:"View"}),e.jsx("button",{className:"link",onClick:()=>q(t.id),title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"link",onClick:R,title:"Print list",children:"Print"})]})]},t.id))})]})}),e.jsxs(m.Pagination,{children:[e.jsx("button",{disabled:d<=1,onClick:()=>u(1),children:"« First"}),e.jsx("button",{disabled:d<=1,onClick:()=>u(t=>t-1),children:"‹ Prev"}),e.jsxs("span",{className:"page",children:["Page ",e.jsx("strong",{children:d})," of ",e.jsx("strong",{children:N})]}),e.jsx("button",{disabled:d>=N,onClick:()=>u(t=>t+1),children:"Next ›"}),e.jsx("button",{disabled:d>=N,onClick:()=>u(N),children:"Last »"})]})]}),e.jsxs(m.SidebarRow,{children:[e.jsxs("div",{className:"card info",children:[e.jsx("h3",{children:"How quotes work"}),e.jsx("p",{children:"Send a formal offer with pricing and validity. When accepted, convert it to an order or invoice."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Draft → internal only"}),e.jsx("li",{children:"Sent → delivered to customer"}),e.jsx("li",{children:"Accepted / Rejected → final decision"}),e.jsx("li",{children:"Expired → after validity date"})]}),e.jsxs("div",{className:"tips",children:[e.jsx("span",{className:"chip",children:"Deep links"}),e.jsx("span",{className:"chip",children:"Print-ready"}),e.jsx("span",{className:"chip",children:"Export JSON"})]})]}),e.jsxs("div",{className:"card shortcuts",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("div",{className:"grid",children:[e.jsx(g,{to:"/customers",children:"Customers"}),e.jsx(g,{to:"/products",children:"Products"}),e.jsx(g,{to:"/invoices",children:"Invoices"}),e.jsx(g,{to:"/orders",children:"Orders"}),e.jsx(g,{to:"/reports/sales",children:"Sales Report"})]})]})]}),e.jsx(W,{open:M,title:"Demo Mode",message:"This is a display-only theme. Creating new quotes is disabled here.",onClose:()=>Q(!1)})]})};export{Z as default};
