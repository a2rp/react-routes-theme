import{d as u,r as c,j as e,N as f}from"./index-P_7RwasD.js";const n="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",p="var(--card, #111318)",o="var(--border, #23262d)",r="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--radius, 16px)",x={Page:u.div`
        padding: 24px 0 64px;
        color: ${n};
    `,Header:u.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${m};
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
            border: 1px solid ${o};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Cards:u.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(6, 1fr);
        }

        .stat {
            padding: 14px;
            border: 1px solid ${o};
            border-radius: ${$};
            background: color-mix(in oklab, ${r} 8%, transparent);
            display: grid;
            gap: 6px;
            .k {
                color: ${m};
                font-size: 12px;
            }
            .v {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }
    `,Toolbar:u.div`
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${o};
        border-radius: ${$};
        background: ${p};

        .row {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
            align-items: center;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 1fr auto;
            }
        }

        .search input {
            width: 100%;
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${p};
            color: ${n};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${m};
        }
        .search input:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${k};
            outline: none;
        }

        .filters {
            display: grid;
            gap: 8px;
        }
        @media (min-width: 1100px) {
            .filters {
                grid-auto-flow: column;
                grid-auto-columns: max-content;
            }
        }

        .group {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .pill {
            border: 1px solid ${o};
            background: ${p};
            color: ${n};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .pill:hover {
            border-color: ${r};
            color: ${r};
        }
        .pill.active {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
    `,TableWrap:u.div`
        padding: 0;
        overflow: hidden;
        border: 1px solid ${o};
        border-radius: ${$};
        background: ${p};

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${p};
            border-bottom: 1px solid ${o};
            padding: 12px;
            text-align: left;
            color: ${m};
            font-weight: 600;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${o};
            vertical-align: middle;
        }

        .empty {
            display: grid;
            place-items: center;
            padding: 40px 0;
            color: ${m};
            .icon {
                font-size: 20px;
                opacity: 0.7;
                margin-bottom: 8px;
            }
            .text h4 {
                font-size: 16px;
                margin-bottom: 4px;
                color: ${n};
            }
            .text p {
                color: ${m};
            }
        }

        .link {
            color: ${n};
            border-bottom: 1px dashed ${o};
        }
        .link:hover {
            color: ${r};
            border-bottom-color: ${r};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            height: 24px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${r} 8%, transparent);
            font-size: 12px;
            font-weight: 600;
        }

        .status {
            display: inline-flex;
            align-items: center;
            height: 26px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${o};
            font-weight: 700;
            letter-spacing: 0.2px;
            font-size: 12px;
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .status.s-pending {
            opacity: 0.95;
        }
        .status.s-approved {
            background: color-mix(in oklab, ${r} 14%, transparent);
        }
        .status.s-intransit {
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
        .status.s-received {
            background: color-mix(in oklab, ${r} 16%, transparent);
        }
        .status.s-rejected {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .muted {
            color: ${m};
        }
        .sub {
            font-size: 12px;
            color: ${n};
            opacity: 0.9;
        }

        .actions {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .btnRow,
        .btnRow.ghost {
            border: 1px solid ${o};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${p};
            color: ${n};
            font-size: 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnRow:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnRow.ghost[aria-disabled="true"] {
            opacity: 0.7;
        }
        .btnRow.ghost[aria-disabled="true"]:hover {
            border-color: ${r};
            color: ${r};
        }
    `,PrintCard:u.div`
        margin-top: 16px;
        padding: 14px;
        border: 1px solid ${o};
        border-radius: ${$};
        background: ${p};
        h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 900px) {
                grid-template-columns: repeat(5, 1fr);
            }
        }
        .k {
            color: ${m};
            font-size: 12px;
        }
        .v {
            color: ${n};
            font-weight: 700;
        }
    `,Overlay:u.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 80;
    `,Modal:u.div`
        width: min(520px, 92vw);
        border-radius: ${$};
        border: 1px solid ${o};
        background: ${p};
        color: ${n};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${o};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${n};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${o};
        }
        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
        }
    `},y=i=>String(i).padStart(2,"0"),D=i=>{const a=i instanceof Date?i:new Date(i),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${g[a.getDay()]} ${d[a.getMonth()]} ${y(a.getDate())} ${a.getFullYear()}`},w=i=>{const a=i instanceof Date?i:new Date(i);return`${D(a)} ${y(a.getHours())}:${y(a.getMinutes())}:${y(a.getSeconds())}hrs`},U=({open:i,title:a,message:g,onClose:d})=>i?e.jsx(x.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:d,children:e.jsxs(x.Modal,{className:"card",onMouseDown:T=>T.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:a})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:g})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:d,children:"Close"})})]})}):null,J=()=>{c.useRef(null);const i=c.useRef(null),[a,g]=c.useState(""),[d,T]=c.useState("all"),[h,M]=c.useState("all"),[R,P]=c.useState({open:!1,title:"",message:""});c.useEffect(()=>{const t=requestAnimationFrame(()=>{var s,l;try{(s=i.current)==null||s.focus({preventScroll:!0})}catch{(l=i.current)==null||l.focus()}});return()=>cancelAnimationFrame(t)},[]);const j=c.useMemo(()=>[{id:"RTN-5001",orderId:"ORD-3456",customer:{id:"CUST-1001",name:"Aarav Sharma"},itemsCount:3,amount:"₹ 2,450.00",status:"Pending",method:"Pickup",tags:["damaged","priority"],requestedAt:"2025-10-04T11:08:20+05:30",updatedAt:"2025-10-04T11:12:32+05:30"},{id:"RTN-5002",orderId:"ORD-3491",customer:{id:"CUST-1004",name:"Ishita Kapoor"},itemsCount:1,amount:"₹ 650.00",status:"Approved",method:"Dropoff",tags:["unused"],requestedAt:"2025-10-02T16:20:01+05:30",updatedAt:"2025-10-03T09:05:10+05:30"},{id:"RTN-5003",orderId:"ORD-3495",customer:{id:"CUST-1007",name:"Rahul Verma"},itemsCount:2,amount:"₹ 1,280.00",status:"In Transit",method:"Courier",tags:["exchange"],requestedAt:"2025-10-01T14:38:48+05:30",updatedAt:"2025-10-04T10:02:20+05:30"},{id:"RTN-5004",orderId:"ORD-3502",customer:{id:"CUST-1012",name:"Neha Singh"},itemsCount:4,amount:"₹ 3,240.00",status:"Received",method:"Pickup",tags:["restock"],requestedAt:"2025-09-28T12:02:00+05:30",updatedAt:"2025-10-01T18:30:00+05:30"},{id:"RTN-5005",orderId:"ORD-3508",customer:{id:"CUST-1018",name:"Ankit Jain"},itemsCount:1,amount:"₹ 299.00",status:"Rejected",method:"Dropoff",tags:["opened"],requestedAt:"2025-09-30T09:25:41+05:30",updatedAt:"2025-10-01T10:00:00+05:30"},{id:"RTN-5006",orderId:"ORD-3510",customer:{id:"CUST-1021",name:"Priya Nair"},itemsCount:2,amount:"₹ 1,120.00",status:"Pending",method:"Courier",tags:["wrong-item"],requestedAt:"2025-10-03T19:02:02+05:30",updatedAt:"2025-10-04T08:51:45+05:30"},{id:"RTN-5007",orderId:"ORD-3513",customer:{id:"CUST-1024",name:"Vikram Mehta"},itemsCount:5,amount:"₹ 4,420.00",status:"Approved",method:"Pickup",tags:["bulk"],requestedAt:"2025-09-27T10:10:10+05:30",updatedAt:"2025-09-27T18:00:00+05:30"},{id:"RTN-5008",orderId:"ORD-3517",customer:{id:"CUST-1028",name:"Kritika Joshi"},itemsCount:3,amount:"₹ 1,980.00",status:"In Transit",method:"Courier",tags:["restock"],requestedAt:"2025-10-04T07:45:30+05:30",updatedAt:"2025-10-04T09:00:10+05:30"},{id:"RTN-5009",orderId:"ORD-3521",customer:{id:"CUST-1030",name:"Sana Qureshi"},itemsCount:2,amount:"₹ 820.00",status:"Received",method:"Dropoff",tags:["sealed"],requestedAt:"2025-09-26T11:44:44+05:30",updatedAt:"2025-09-29T15:10:12+05:30"},{id:"RTN-5010",orderId:"ORD-3525",customer:{id:"CUST-1034",name:"Mohit Gupta"},itemsCount:1,amount:"₹ 499.00",status:"Pending",method:"Pickup",tags:["short-expiry"],requestedAt:"2025-10-04T12:12:12+05:30",updatedAt:"2025-10-04T12:45:00+05:30"}],[]),C={all:"All",pending:"Pending",approved:"Approved",in_transit:"In Transit",received:"Received",rejected:"Rejected"},A={all:"All",pickup:"Pickup",dropoff:"Dropoff",courier:"Courier"},b=c.useMemo(()=>{const t={all:j.length,pending:0,approved:0,in_transit:0,received:0,rejected:0};return j.forEach(s=>{const l=s.status==="In Transit"?"in_transit":s.status.toLowerCase();t[l]!==void 0&&(t[l]+=1)}),t},[j]),N=c.useMemo(()=>{const t=a.trim().toLowerCase();return j.filter(s=>{const l=d==="all"?!0:d==="in_transit"?s.status==="In Transit":s.status.toLowerCase()===d,v=h==="all"?!0:s.method.toLowerCase()===h,q=`${s.id} ${s.orderId} ${s.customer.name} ${s.status} ${s.method} ${s.tags.join(" ")}`.toLowerCase(),z=t.length===0||q.includes(t);return l&&v&&z})},[j,a,d,h]),S=(t,s)=>P({open:!0,title:t,message:s}),I=()=>{const t={exportedAt:w(new Date),filters:{query:a,status:C[d],method:A[h]},rows:N},s=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),l=URL.createObjectURL(s),v=document.createElement("a");v.href=l,v.download=`sales-returns-${Date.now()}.json`,v.click(),URL.revokeObjectURL(l)},O=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(x.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Sales Returns"}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Updated: ",w("2025-10-04T12:45:00+05:30")]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{"aria-disabled":"true",className:"btnGhost",onClick:()=>S("Demo Mode","Creating a return is disabled in this demo."),title:"Demo only",children:"New Return"}),e.jsx("button",{"aria-disabled":"true",className:"btnGhost",onClick:()=>S("Demo Mode","Bulk actions are disabled in this demo."),title:"Demo only",children:"Bulk Approve"}),e.jsx("button",{className:"btnPrimary",onClick:I,title:"Download filtered JSON",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:O,title:"Print current view",children:"Print"})]})]}),e.jsxs(x.Cards,{children:[e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"All"}),e.jsx("div",{className:"v",children:b.all})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Pending"}),e.jsx("div",{className:"v",children:b.pending})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Approved"}),e.jsx("div",{className:"v",children:b.approved})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"In Transit"}),e.jsx("div",{className:"v",children:b.in_transit})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Received"}),e.jsx("div",{className:"v",children:b.received})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Rejected"}),e.jsx("div",{className:"v",children:b.rejected})]})]}),e.jsx(x.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"search",children:e.jsx("input",{ref:i,value:a,onChange:t=>g(t.target.value),placeholder:"Search by return id, customer, order, tags…","aria-label":"Search sales returns"})}),e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"group",children:Object.entries(C).map(([t,s])=>e.jsx("button",{onClick:()=>T(t),className:t===d?"pill active":"pill",title:`Filter: ${s}`,"aria-pressed":t===d,children:s},t))}),e.jsx("div",{className:"group",children:Object.entries(A).map(([t,s])=>e.jsx("button",{onClick:()=>M(t),className:t===h?"pill active":"pill",title:`Method: ${s}`,"aria-pressed":t===h,children:s},t))})]})]})}),e.jsx(x.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:140},children:"Return"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{style:{width:140},children:"Order"}),e.jsx("th",{style:{width:110},children:"Method"}),e.jsx("th",{style:{width:90,textAlign:"right"},children:"Items"}),e.jsx("th",{style:{width:140,textAlign:"right"},children:"Amount"}),e.jsx("th",{style:{width:130},children:"Status"}),e.jsx("th",{style:{width:200},children:"Requested"}),e.jsx("th",{style:{width:200},children:"Updated"}),e.jsx("th",{style:{width:200},children:"Actions"})]})}),e.jsx("tbody",{children:N.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"icon",children:"⟡"}),e.jsxs("div",{className:"text",children:[e.jsx("h4",{children:"No results"}),e.jsx("p",{children:"Try a different keyword or clear filters."})]})]})})}):N.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(f,{to:`/sales/returns/${t.id}`,title:"Open return details",className:"link",children:t.id})}),e.jsx("td",{children:e.jsx(f,{to:`/customers/${t.customer.id}`,className:"link",children:t.customer.name})}),e.jsx("td",{children:e.jsx(f,{to:`/orders/${t.orderId}`,className:"link",children:t.orderId})}),e.jsx("td",{children:e.jsx("span",{className:"badge",children:t.method})}),e.jsx("td",{style:{textAlign:"right"},children:t.itemsCount}),e.jsx("td",{style:{textAlign:"right"},children:t.amount}),e.jsx("td",{children:e.jsx("span",{className:`status s-${t.status.replace(" ","").toLowerCase()}`,children:t.status})}),e.jsxs("td",{children:[e.jsx("div",{className:"muted",children:D(t.requestedAt)}),e.jsx("div",{className:"sub",children:w(t.requestedAt)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"muted",children:D(t.updatedAt)}),e.jsx("div",{className:"sub",children:w(t.updatedAt)})]}),e.jsxs("td",{className:"actions",children:[e.jsx(f,{to:`/sales/returns/${t.id}`,className:"btnRow",children:"View"}),e.jsx(f,{to:`/sales/returns/${t.id}/print`,className:"btnRow",children:"Print"}),e.jsx("button",{"aria-disabled":"true",className:"btnRow ghost",onClick:()=>S("Demo Mode","Mark Received is disabled in demo."),title:"Demo only",children:"Mark Received"})]})]},t.id))})]})}),e.jsxs(x.PrintCard,{id:"search-print-area",className:"card",children:[e.jsx("h3",{children:"Sales Returns — Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Exported"}),e.jsx("div",{className:"v",children:w(new Date)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Query"}),e.jsx("div",{className:"v",children:a||"—"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:C[d]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Method"}),e.jsx("div",{className:"v",children:A[h]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Visible Rows"}),e.jsx("div",{className:"v",children:N.length})]})]})]}),e.jsx(U,{open:R.open,title:R.title,message:R.message,onClose:()=>P({open:!1,title:"",message:""})})]})};export{J as default};
