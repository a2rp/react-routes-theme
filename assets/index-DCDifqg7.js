import{d as x,r as l,j as e,N as A}from"./index-Be6a9TQd.js";const i="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",h="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",S="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--danger, #ef4444)",$="var(--warn, #f59e0b)",W="var(--radius, 16px)",g={Page:x.div`
        padding: 24px 0 64px;
        color: ${i};
    `,Header:x.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${b};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${h};
            color: ${i};
            font-weight: 600;
            cursor: pointer;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${S};
        }
        .btnDanger {
            border-color: ${y};
            color: ${y};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px
                color-mix(in oklab, ${y} 22%, transparent);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,Toolbar:x.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 14px;
        margin-bottom: 16px;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .search input {
            width: 320px;
            max-width: 60vw;
            background: ${h};
            border: 1px solid ${r};
            color: ${i};
            padding: 8px 12px;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${b};
        }
        .search input:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${S};
        }

        .stat {
            color: ${b};
            font-size: 12px;
        }
        .spacer {
            width: 1px;
            height: 22px;
            background: ${r};
        }
        .psize {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${b};
            font-size: 12px;
        }
        .psize select {
            background: ${h};
            color: ${i};
            border: 1px solid ${r};
            padding: 6px 8px;
            border-radius: 8px;
            outline: none;
        }
        .psize select:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${S};
        }
    `,TableCard:x.div`
        padding: 0;

        .tableWrap {
            overflow: auto;
            border-radius: ${W};
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            color: ${i};
            min-width: 920px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${h};
            border-bottom: 1px solid ${r};
            padding: 10px 12px;
            text-align: left;
            color: ${b};
            font-weight: 600;
            letter-spacing: 0.2px;
            user-select: none;
        }
        thead th.right {
            text-align: right;
        }
        thead th.left {
            text-align: left;
        }

        thead th.sortable {
            cursor: pointer;
        }
        thead th.sortable:hover {
            color: ${a};
        }
        thead th.sorted.asc span::after,
        thead th.sorted.desc span::after {
            content: "";
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 6px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            transform: translateY(-1px);
        }
        thead th.sorted.asc span::after {
            border-bottom: 6px solid ${a};
        }
        thead th.sorted.desc span::after {
            border-top: 6px solid ${a};
        }

        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${r};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${a} 6%, transparent);
        }
        tbody td.right {
            text-align: right;
        }
        tbody td.left {
            text-align: left;
        }

        .empty {
            text-align: center;
            padding: 36px 0;
            color: ${b};
        }

        .id .idLink {
            color: ${i};
            border-bottom: 1px dashed ${r};
        }
        .id .idLink:hover {
            color: ${a};
            border-color: ${a};
        }

        .customer .name {
            font-weight: 600;
        }
        .customer .muted {
            color: ${b};
            font-size: 12px;
        }

        .amount {
            font-variant-numeric: tabular-nums;
        }
        .rowActions {
            display: inline-flex;
            gap: 6px;
        }
        .xs {
            padding: 6px 8px;
            font-size: 12px;
            border-radius: 8px;
            border: 1px solid ${r};
            background: ${h};
            color: ${i};
        }
        .xs:hover {
            border-color: ${a};
            color: ${a};
        }
        .xs:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Pager:x.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 12px;
        border-top: 1px solid ${r};

        .info {
            color: ${b};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${r};
            background: ${h};
            color: ${i};
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,StatusChip:x.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px solid ${r};
        background: ${h};
        padding: 4px 10px;
        border-radius: 999px;
        text-transform: capitalize;
        font-size: 12px;
        letter-spacing: 0.2px;

        &[data-variant="paid"] {
            border-color: ${a};
            color: ${a};
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
        &[data-variant="pending"] {
            border-color: ${$};
            color: ${$};
            background: color-mix(in oklab, ${$} 10%, transparent);
        }
        &[data-variant="shipped"] {
            border-color: ${a};
            color: ${a};
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
        &[data-variant="refunded"] {
            border-color: ${$};
            color: ${$};
            background: color-mix(in oklab, ${$} 10%, transparent);
        }
        &[data-variant="cancelled"] {
            border-color: ${y};
            color: ${y};
            background: color-mix(in oklab, ${y} 10%, transparent);
        }
    `,Overlay:x.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:x.div`
        width: min(520px, 92vw);
        border-radius: ${W};
        border: 1px solid ${r};
        background: ${h};
        color: ${i};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${i};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${h};
            color: ${i};
            font-weight: 600;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${S};
        }
    `},M=(n,j)=>{const s=n instanceof Date?n:new Date(n),T=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=R=>String(R).padStart(2,"0");return`${`${T[s.getDay()]} ${v[s.getMonth()]} ${f(s.getDate())} ${s.getFullYear()}`} ${f(s.getHours())}:${f(s.getMinutes())}:${f(s.getSeconds())}hrs`},P=[{id:"ORD-3001",date:"2025-09-21T12:32:11+05:30",customer:"Aarav Sharma",city:"New Delhi",channel:"Web",status:"paid",amount:23890,items:7},{id:"ORD-3002",date:"2025-09-22T09:14:05+05:30",customer:"Diya Kapoor",city:"Mumbai",channel:"POS",status:"pending",amount:5890.5,items:2},{id:"ORD-3003",date:"2025-09-22T18:20:31+05:30",customer:"Rahul Verma",city:"Pune",channel:"Web",status:"shipped",amount:12990,items:3},{id:"ORD-3004",date:"2025-09-23T10:02:00+05:30",customer:"Ishita Mehta",city:"Ahmedabad",channel:"Phone",status:"paid",amount:8190,items:4},{id:"ORD-3005",date:"2025-09-23T16:45:42+05:30",customer:"Kabir Khanna",city:"Chandigarh",channel:"Web",status:"cancelled",amount:2999,items:1},{id:"ORD-3006",date:"2025-09-24T11:08:17+05:30",customer:"Neha Gupta",city:"Lucknow",channel:"POS",status:"paid",amount:9990,items:2},{id:"ORD-3007",date:"2025-09-24T14:19:53+05:30",customer:"Arjun Patel",city:"Surat",channel:"Web",status:"refunded",amount:4590,items:1},{id:"ORD-3008",date:"2025-09-25T09:55:09+05:30",customer:"Sara Khan",city:"Bengaluru",channel:"Web",status:"paid",amount:1590,items:1},{id:"ORD-3009",date:"2025-09-25T17:28:44+05:30",customer:"Nikhil Singh",city:"Jaipur",channel:"Marketplace",status:"shipped",amount:6990,items:2},{id:"ORD-3010",date:"2025-09-26T11:41:27+05:30",customer:"Ananya Iyer",city:"Chennai",channel:"Web",status:"paid",amount:18990,items:5},{id:"ORD-3011",date:"2025-09-26T13:06:12+05:30",customer:"Viraj Nair",city:"Kochi",channel:"POS",status:"pending",amount:2490,items:1},{id:"ORD-3012",date:"2025-09-27T10:18:03+05:30",customer:"Meera Rao",city:"Hyderabad",channel:"Phone",status:"paid",amount:4590,items:2},{id:"ORD-3013",date:"2025-09-27T19:40:55+05:30",customer:"Rohit Sinha",city:"Patna",channel:"Web",status:"paid",amount:7590,items:2},{id:"ORD-3014",date:"2025-09-28T08:12:22+05:30",customer:"Pooja Jain",city:"Indore",channel:"Marketplace",status:"pending",amount:2290,items:1},{id:"ORD-3015",date:"2025-09-28T22:01:49+05:30",customer:"Zara Ali",city:"Srinagar",channel:"Web",status:"paid",amount:9999,items:3},{id:"ORD-3016",date:"2025-09-29T12:20:00+05:30",customer:"Ahaan Bose",city:"Kolkata",channel:"POS",status:"shipped",amount:8990,items:2},{id:"ORD-3017",date:"2025-09-29T16:30:11+05:30",customer:"Naira Dutta",city:"Guwahati",channel:"Web",status:"paid",amount:4390,items:1},{id:"ORD-3018",date:"2025-09-30T10:05:37+05:30",customer:"Ritesh K",city:"Mysuru",channel:"Phone",status:"cancelled",amount:1290,items:1},{id:"ORD-3019",date:"2025-09-30T18:44:19+05:30",customer:"Tanya Arora",city:"Noida",channel:"Web",status:"paid",amount:12990,items:4},{id:"ORD-3020",date:"2025-10-01T09:21:54+05:30",customer:"Dev Malhotra",city:"Amritsar",channel:"Marketplace",status:"paid",amount:5990,items:2},{id:"ORD-3021",date:"2025-10-01T12:40:33+05:30",customer:"Yash Anand",city:"Varanasi",channel:"Web",status:"pending",amount:3290,items:1},{id:"ORD-3022",date:"2025-10-02T11:09:05+05:30",customer:"Simran Kaur",city:"Ludhiana",channel:"POS",status:"paid",amount:7490,items:2},{id:"ORD-3023",date:"2025-10-03T15:20:40+05:30",customer:"Harshita M",city:"Bhopal",channel:"Web",status:"shipped",amount:2590,items:1},{id:"ORD-3024",date:"2025-10-03T19:02:14+05:30",customer:"Pranav Joshi",city:"Nagpur",channel:"Web",status:"refunded",amount:1990,items:1},{id:"ORD-3025",date:"2025-10-04T09:12:28+05:30",customer:"Anvi Kulkarni",city:"Thane",channel:"Web",status:"paid",amount:8999,items:3}],G=[{key:"id",label:"Order ID",align:"left"},{key:"date",label:"Date",align:"left"},{key:"customer",label:"Customer",align:"left"},{key:"city",label:"City",align:"left"},{key:"channel",label:"Channel",align:"left"},{key:"status",label:"Status",align:"left"},{key:"items",label:"Items",align:"right"},{key:"amount",label:"Amount (₹)",align:"right"},{key:"actions",label:"",align:"right",sortable:!1}],L=(n,j)=>n>j?1:n<j?-1:0,U=()=>{const[n,j]=l.useState(""),[s,T]=l.useState("date"),[v,f]=l.useState("desc"),[c,R]=l.useState(10),[E,k]=l.useState(1),[K,N]=l.useState(!1),C=l.useRef(null),z=l.useMemo(()=>{const t=n.trim().toLowerCase();return t?P.filter(o=>{const D=`${o.id} ${o.customer} ${o.city} ${o.channel} ${o.status}`.toLowerCase();return t.split(/\s+/).every(p=>D.includes(p))}):P},[n]),u=l.useMemo(()=>{const t=[...z];return s&&t.sort((o,D)=>{let p=o[s],d=D[s];return s==="date"&&(p=new Date(p).getTime(),d=new Date(d).getTime()),v==="asc"?L(p,d):L(d,p)}),t},[z,s,v]),I=Math.max(1,Math.ceil(u.length/c)),w=Math.min(Math.max(E,1),I),O=l.useMemo(()=>{const t=(w-1)*c;return u.slice(t,t+c)},[u,c,w]),V=t=>{if(t!=="actions"){if(s!==t){T(t),f("asc");return}f(o=>o==="asc"?"desc":"asc")}},B=()=>{const o=[["Order ID","Date","Customer","City","Channel","Status","Items","Amount"].join(",")];u.forEach(m=>{o.push([m.id,M(m.date).replace(/,/g,""),`"${m.customer}"`,`"${m.city}"`,m.channel,m.status,m.items,m.amount.toFixed(2)].join(","))});const D=new Blob([o.join(`
`)],{type:"text/csv;charset=utf-8"}),p=URL.createObjectURL(D),d=document.createElement("a");d.href=p,d.download=`orders-export-${Date.now()}.csv`,document.body.appendChild(d),d.click(),d.remove(),setTimeout(()=>URL.revokeObjectURL(p),5e3)},H=()=>{C.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},J=new Date;return e.jsxs(g.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Table Demo"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Updated: ",M(J)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Total orders: ",P.length]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:H,title:"Print section",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:B,title:"Export visible as CSV",children:"Export CSV"}),e.jsx("button",{className:"btnDanger",onClick:()=>N(!0),title:"Demo only – delete disabled",children:"Delete Selected"})]})]}),e.jsxs(g.Toolbar,{className:"card",children:[e.jsx("div",{className:"left",children:e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",placeholder:"Search orders (e.g. paid delhi web)",value:n,onChange:t=>{j(t.target.value),k(1)},"aria-label":"Search orders"})})}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"stat",children:["Showing ",e.jsx("strong",{children:O.length})," of ",e.jsx("strong",{children:u.length})]}),e.jsx("div",{className:"spacer"}),e.jsxs("label",{className:"psize",children:["Rows",e.jsxs("select",{value:c,onChange:t=>{R(+t.target.value),k(1)},children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"}),e.jsx("option",{value:50,children:"50"})]})]})]})]}),e.jsxs(g.TableCard,{className:"card",id:"search-print-area",ref:C,children:[e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:G.map(t=>e.jsx("th",{className:[t.align==="right"?"right":"left",t.key!=="actions"?"sortable":"",s===t.key?`sorted ${v}`:""].join(" ").trim(),onClick:()=>V(t.key),scope:"col",children:e.jsx("span",{children:t.label})},t.key))})}),e.jsx("tbody",{children:O.length===0?e.jsx("tr",{children:e.jsxs("td",{colSpan:G.length,className:"empty",children:["No results for “",n,"”."]})}):O.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"left id",children:e.jsx(A,{to:`/orders/${t.id}`,className:"idLink",title:"Open order",children:t.id})}),e.jsx("td",{className:"left",children:M(t.date)}),e.jsx("td",{className:"left",children:e.jsxs("div",{className:"customer",children:[e.jsx("div",{className:"name",children:t.customer}),e.jsx("div",{className:"muted",children:t.city})]})}),e.jsx("td",{className:"left",children:t.city}),e.jsx("td",{className:"left",children:t.channel}),e.jsx("td",{className:"left",children:e.jsx(g.StatusChip,{"data-variant":t.status,children:t.status})}),e.jsx("td",{className:"right",children:t.items}),e.jsxs("td",{className:"right amount",children:["₹ ",t.amount.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"rowActions",children:[e.jsx(A,{className:"btnGhost xs",to:`/orders/${t.id}`,title:"View",children:"View"}),e.jsx("button",{className:"btnGhost xs",title:"Demo only – edit disabled",disabled:!0,children:"Edit"}),e.jsx("button",{className:"btnDanger xs",onClick:()=>N(!0),title:"Demo only – delete disabled",children:"Delete"})]})})]},t.id))})]})}),e.jsxs(g.Pager,{children:[e.jsx("button",{className:"btnGhost",onClick:()=>k(t=>Math.max(1,t-1)),disabled:w===1,title:"Previous page",children:"‹ Prev"}),e.jsxs("div",{className:"info",children:["Page ",e.jsx("strong",{children:w})," of ",e.jsx("strong",{children:Math.max(1,Math.ceil(u.length/c))})]}),e.jsx("button",{className:"btnGhost",onClick:()=>k(t=>Math.min(Math.ceil(u.length/c),t+1)),disabled:w>=Math.ceil(u.length/c),title:"Next page",children:"Next ›"})]})]}),K&&e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>N(!1),children:e.jsxs(g.Modal,{className:"card",onMouseDown:t=>t.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Action disabled in demo"})}),e.jsx("div",{className:"body",children:e.jsxs("p",{children:["This theme is display-only. Destructive actions like ",e.jsx("strong",{children:"delete"})," or ",e.jsx("strong",{children:"edit"})," are turned off."]})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:()=>N(!1),children:"Got it"})})]})})]})};export{U as default};
