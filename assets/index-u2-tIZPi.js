import{d as h,u as L,r as p,j as e,N as b}from"./index-CTSbLEdo.js";const d="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",l="var(--card, #111318)",r="var(--border, #23262d)",t="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--radius, 16px)",m={Page:h.div`
        padding: 24px 0 64px;
        color: ${d};
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 12px;
        border: 1px solid ${r};
        border-radius: ${$};
        background: ${l};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .sub {
            margin-top: 6px;
            color: ${u};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .dot {
            opacity: 0.7;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.04s ease-in;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Toolbar:h.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        padding: 12px 14px;
        margin-bottom: 12px;
        border: 1px solid ${r};
        border-radius: ${$};
        background: ${l};
        box-shadow: var(--shadow);

        @media (min-width: 980px) {
            grid-template-columns: 1fr auto auto;
        }

        .search input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${u};
        }
        .search input:focus {
            border-color: ${t};
            box-shadow: 0 0 0 3px ${k};
            outline: none;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${r};
            background: color-mix(in oklab, ${t} 7%, transparent);
            padding: 6px 10px;
            border-radius: 999px;
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${t};
            color: ${t};
            background: color-mix(in oklab, ${t} 15%, transparent);
        }

        .controls {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-start;
        }
        @media (min-width: 980px) {
            .controls {
                justify-content: flex-end;
            }
        }

        .select {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${u};
        }
        .select select {
            padding: 8px 10px;
            border-radius: 8px;
            background: ${l};
            color: ${d};
            border: 1px solid ${r};
        }

        .view .toggle {
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            font-weight: 600;
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .view .toggle.active,
        .view .toggle:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${k};
        }
    `,TableCard:h.div`
        border: 1px solid ${r};
        border-radius: ${$};
        background: ${l};
        box-shadow: var(--shadow);
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
            background: ${l};
            text-align: left;
            border-bottom: 1px solid ${r};
            padding: 12px;
            color: ${t};
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        tbody td {
            border-bottom: 1px solid ${r};
            padding: 12px;
            vertical-align: top;
        }

        .cell-customer {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid ${r};
            background: ${l};
            display: grid;
            place-items: center;
            font-weight: 700;
        }
        .meta .name {
            display: inline-block;
            font-weight: 700;
        }
        .meta .name:hover {
            color: ${t};
        }
        .meta .code {
            font-size: 12px;
            color: ${u};
        }

        .contact .email {
            display: inline-block;
        }
        .contact .email:hover {
            color: ${t};
        }
        .contact .phone {
            color: ${u};
            margin-top: 2px;
        }

        .tags .tag {
            display: inline-block;
            margin: 2px 6px 2px 0;
            padding: 4px 8px;
            border: 1px solid ${r};
            border-radius: 999px;
            background: color-mix(in oklab, ${t} 10%, transparent);
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            font-weight: 700;
            background: color-mix(in oklab, ${t} 8%, transparent);
            text-transform: capitalize;
        }
        .status.inactive {
            opacity: 0.7;
        }
        .status.prospect {
            background: color-mix(in oklab, ${t} 12%, transparent);
        }

        .actions {
            white-space: nowrap;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .act {
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .act:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${k};
        }
        .act.disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
        .act.disabled:hover {
            border-color: ${r};
            color: ${d};
        }

        /* skeletons */
        .skeleton .sk {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.06),
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.06)
            );
            background-size: 300% 100%;
            animation: skAnim 1.2s infinite;
            border-radius: 8px;
        }
        .skeleton .sk-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        .skeleton .sk-line {
            height: 14px;
            width: 220px;
        }
        .skeleton .sk-line.short {
            width: 120px;
        }
        .skeleton .sk-pill {
            width: 80px;
            height: 20px;
            border-radius: 999px;
        }
        .skeleton .sk-actions {
            width: 140px;
            height: 24px;
        }
        @keyframes skAnim {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    `,CardsGrid:h.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        @media (min-width: 660px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 980px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .item {
            border: 1px solid ${r};
            border-radius: ${$};
            background: ${l};
            box-shadow: var(--shadow);
            padding: 14px;
            display: grid;
            gap: 10px;
        }

        .head {
            display: grid;
            grid-template-columns: 40px 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .head .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid ${r};
            display: grid;
            place-items: center;
            font-weight: 700;
        }
        .head .meta .name {
            font-weight: 700;
        }
        .head .meta .name:hover {
            color: ${t};
        }
        .head .meta .code {
            color: ${u};
            font-size: 12px;
        }
        .head .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${t} 10%, transparent);
            text-transform: capitalize;
        }

        .body {
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 10px;
        }
        .k {
            color: ${u};
            font-size: 12px;
        }
        .tags {
            margin-top: 6px;
        }
        .tag {
            display: inline-block;
            margin: 2px 6px 0 0;
            padding: 4px 8px;
            border: 1px solid ${r};
            border-radius: 999px;
            background: color-mix(in oklab, ${t} 10%, transparent);
        }

        .foot {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost.small {
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost.small:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost.small.disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
        .btnGhost.small.disabled:hover {
            border-color: ${r};
            color: ${d};
        }

        /* skeleton */
        .skeleton .sk {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.06),
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.06)
            );
            background-size: 300% 100%;
            animation: skAnim 1.2s infinite;
            border-radius: 8px;
        }
        .skeleton .sk-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .skeleton .sk-line {
            height: 14px;
            width: 70%;
        }
        .skeleton .sk-line.short {
            width: 40%;
        }
        .skeleton .sk-pill {
            width: 80px;
            height: 20px;
            border-radius: 999px;
        }
        @keyframes skAnim {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    `,Empty:h.div`
        padding: 24px;
        text-align: center;
        .emoji {
            font-size: 36px;
            margin-bottom: 8px;
        }
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${d};
        }
        .muted {
            color: ${u};
            font-size: 12px;
        }
    `,Overlay:h.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:h.div`
        width: min(520px, 92vw);
        border-radius: ${$};
        border: 1px solid ${r};
        background: ${l};
        color: ${d};
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
            color: ${d};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
    `},w=(N,y)=>{const c=N instanceof Date?N:new Date(N),f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=g=>String(g).padStart(2,"0"),C=`${f[c.getDay()]} ${T[c.getMonth()]} ${x(c.getDate())} ${c.getFullYear()}`;return y?`${C} ${x(c.getHours())}:${x(c.getMinutes())}:${x(c.getSeconds())}hrs`:C},M=new Date,R=[{id:"CUST-1001",code:"CUST-1001",firstName:"Aarav",lastName:"Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",status:"active",tags:["priority","wholesale","north"],createdAt:"2024-11-19T10:18:02+05:30",updatedAt:"2025-10-04T15:08:41+05:30"},{id:"CUST-1002",code:"CUST-1002",firstName:"Ishita",lastName:"Gupta",email:"ishita.gupta@example.com",phone:"+91 90000 10002",status:"prospect",tags:["inbound","trial"],createdAt:"2025-05-14T12:03:00+05:30",updatedAt:"2025-09-28T19:31:12+05:30"},{id:"CUST-1003",code:"CUST-1003",firstName:"Kabir",lastName:"Saxena",email:"kabir.saxena@example.com",phone:"+91 99220 00011",status:"inactive",tags:["overdue"],createdAt:"2023-12-09T09:00:00+05:30",updatedAt:"2024-02-28T08:20:00+05:30"},{id:"CUST-1004",code:"CUST-1004",firstName:"Meera",lastName:"Nair",email:"meera.nair@example.com",phone:"+91 98111 22233",status:"active",tags:["north","retail"],createdAt:"2025-01-20T14:10:00+05:30",updatedAt:"2025-08-01T09:45:12+05:30"},{id:"CUST-1005",code:"CUST-1005",firstName:"Rohit",lastName:"Verma",email:"rohit.verma@example.com",phone:"+91 98989 12345",status:"active",tags:["b2b","west"],createdAt:"2024-06-17T11:45:00+05:30",updatedAt:"2025-09-15T17:12:10+05:30"},{id:"CUST-1006",code:"CUST-1006",firstName:"Tanya",lastName:"Kapoor",email:"tanya.kapoor@example.com",phone:"+91 90012 44662",status:"prospect",tags:["newsletter"],createdAt:"2025-03-10T16:22:12+05:30",updatedAt:"2025-07-21T13:56:28+05:30"},{id:"CUST-1007",code:"CUST-1007",firstName:"Yash",lastName:"Patel",email:"yash.patel@example.com",phone:"+91 97000 55521",status:"active",tags:["south","wholesale"],createdAt:"2022-09-05T10:00:00+05:30",updatedAt:"2025-04-18T18:10:00+05:30"},{id:"CUST-1008",code:"CUST-1008",firstName:"Aditi",lastName:"Menon",email:"aditi.menon@example.com",phone:"+91 96543 22112",status:"inactive",tags:["returns"],createdAt:"2021-01-15T08:00:00+05:30",updatedAt:"2024-11-30T20:01:10+05:30"},{id:"CUST-1009",code:"CUST-1009",firstName:"Harsh",lastName:"Bajaj",email:"harsh.bajaj@example.com",phone:"+91 95555 88776",status:"active",tags:["priority","key-account"],createdAt:"2025-09-01T12:40:40+05:30",updatedAt:"2025-10-02T10:10:10+05:30"},{id:"CUST-1010",code:"CUST-1010",firstName:"Sana",lastName:"Qureshi",email:"sana.q@example.com",phone:"+91 99888 11223",status:"prospect",tags:["trial","email-only"],createdAt:"2025-07-09T09:09:09+05:30",updatedAt:"2025-09-14T14:14:14+05:30"},{id:"CUST-1011",code:"CUST-1011",firstName:"Dev",lastName:"Rathore",email:"dev.r@example.com",phone:"+91 88000 99001",status:"active",tags:["b2b","south"],createdAt:"2024-02-01T08:12:00+05:30",updatedAt:"2025-06-22T12:00:00+05:30"},{id:"CUST-1012",code:"CUST-1012",firstName:"Naina",lastName:"Singh",email:"naina.singh@example.com",phone:"+91 88990 11223",status:"inactive",tags:["churn-risk"],createdAt:"2023-04-18T10:30:00+05:30",updatedAt:"2024-10-10T10:10:10+05:30"}],O=[{key:"all",label:"All"},{key:"active",label:"Active"},{key:"prospect",label:"Prospect"},{key:"inactive",label:"Inactive"}],H=[{key:"name-asc",label:"Name A–Z"},{key:"name-desc",label:"Name Z–A"},{key:"created-desc",label:"Created (Newest)"},{key:"created-asc",label:"Created (Oldest)"},{key:"updated-desc",label:"Updated (Newest)"},{key:"updated-asc",label:"Updated (Oldest)"}],F=()=>{const N=L(),[y,c]=p.useState(!0),[f,T]=p.useState("table"),[x,C]=p.useState(""),[g,D]=p.useState("all"),[S,U]=p.useState("updated-desc"),[G,j]=p.useState(!1),A=p.useRef(null);p.useEffect(()=>{const a=setTimeout(()=>c(!1),600);return()=>clearTimeout(a)},[]);const v=p.useMemo(()=>{const a=x.trim().toLowerCase().split(/\s+/).filter(Boolean);let o=R.filter(s=>{if(g!=="all"&&s.status!==g)return!1;if(a.length===0)return!0;const i=[s.firstName,s.lastName,s.email,s.phone,s.code,s.id,...s.tags||[]].join(" ").toLowerCase();return a.every(E=>i.includes(E))});const n={"name-asc":(s,i)=>(s.firstName+s.lastName).localeCompare(i.firstName+i.lastName),"name-desc":(s,i)=>(i.firstName+i.lastName).localeCompare(s.firstName+s.lastName),"created-desc":(s,i)=>new Date(i.createdAt)-new Date(s.createdAt),"created-asc":(s,i)=>new Date(s.createdAt)-new Date(i.createdAt),"updated-desc":(s,i)=>new Date(i.updatedAt)-new Date(s.updatedAt),"updated-asc":(s,i)=>new Date(s.updatedAt)-new Date(i.updatedAt)}[S];return o=o.slice().sort(n),o},[x,g,S]),P=()=>{const a=new Blob([JSON.stringify(v,null,2)],{type:"application/json;charset=utf-8"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.download=`customers-export-${Date.now()}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(o)},z=()=>{A.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position:absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Customers"}),e.jsxs("div",{className:"sub",children:[e.jsxs("span",{children:[v.length," records"]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Last refreshed: ",w(M,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnDisabled",title:"Demo: disabled",onClick:()=>j(!0),children:"New Customer"}),e.jsx("button",{className:"btnDisabled",title:"Demo: disabled",onClick:()=>j(!0),children:"Import"}),e.jsx("button",{className:"btnPrimary",onClick:P,title:"Export visible list",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:z,title:"Print current view",children:"Print"})]})]}),e.jsxs(m.Toolbar,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{value:x,onChange:a=>C(a.target.value),placeholder:"Search by name, email, phone, tag…","aria-label":"Search customers"})}),e.jsx("div",{className:"chips",role:"tablist","aria-label":"Status filter",children:O.map(a=>e.jsx("button",{role:"tab","aria-selected":g===a.key,className:g===a.key?"chip active":"chip",onClick:()=>D(a.key),children:a.label},a.key))}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"select",children:[e.jsx("span",{children:"Sort"}),e.jsx("select",{value:S,onChange:a=>U(a.target.value),children:H.map(a=>e.jsx("option",{value:a.key,children:a.label},a.key))})]}),e.jsxs("div",{className:"view",children:[e.jsx("button",{className:f==="table"?"toggle active":"toggle",onClick:()=>T("table"),title:"Table view",children:"Table"}),e.jsx("button",{className:f==="cards"?"toggle active":"toggle",onClick:()=>T("cards"),title:"Cards view",children:"Cards"})]})]})]}),e.jsx("div",{id:"search-print-area",ref:A,children:f==="table"?e.jsx(m.TableCard,{className:"card",children:e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Contact"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{"aria-label":"actions"})]})}),e.jsx("tbody",{children:y?Array.from({length:8}).map((a,o)=>e.jsxs("tr",{className:"skeleton",children:[e.jsx("td",{children:e.jsx("div",{className:"sk sk-avatar"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-line"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-line"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-pill"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-line short"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-line short"})}),e.jsx("td",{children:e.jsx("div",{className:"sk sk-actions"})})]},`sk-${o}`)):v.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsxs(m.Empty,{children:[e.jsx("div",{className:"emoji","aria-hidden":!0,children:"🗂️"}),e.jsx("h3",{children:"No customers match"}),e.jsx("p",{children:"Try a different keyword or clear the status filter."}),e.jsx("div",{className:"muted",children:"Search is case-insensitive and supports multiple words."})]})})}):v.map(a=>{var o,n;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"cell-customer",children:[e.jsx("div",{className:"avatar","aria-hidden":!0,children:e.jsx("span",{children:(((o=a.firstName)==null?void 0:o[0])||"C")+(((n=a.lastName)==null?void 0:n[0])||"")})}),e.jsxs("div",{className:"meta",children:[e.jsxs(b,{className:"name",to:`/customers/${a.id}`,children:[a.firstName," ",a.lastName]}),e.jsx("div",{className:"code",children:a.code})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"contact",children:[e.jsx("a",{href:`mailto:${a.email}`,className:"email",children:a.email}),e.jsx("div",{className:"phone",children:a.phone})]})}),e.jsx("td",{className:"tags",children:(a.tags||[]).map(s=>e.jsx("span",{className:"tag",children:s},s))}),e.jsx("td",{children:e.jsx("span",{className:`status ${a.status}`,children:a.status})}),e.jsx("td",{children:w(a.createdAt)}),e.jsx("td",{children:w(a.updatedAt,!0)}),e.jsxs("td",{className:"actions",children:[e.jsx(b,{to:`/customers/${a.id}`,className:"act",children:"View"}),e.jsx(b,{to:`/customers/${a.id}/edit`,className:"act",children:"Edit"}),e.jsx(b,{to:`/customers/${a.id}/print`,className:"act",children:"Print"}),e.jsx("button",{className:"act disabled",title:"Demo: disabled",onClick:()=>j(!0),children:"Delete"})]})]},a.id)})})]})})}):e.jsx(m.CardsGrid,{children:y?Array.from({length:8}).map((a,o)=>e.jsxs("div",{className:"card item skeleton",children:[e.jsx("div",{className:"sk sk-avatar"}),e.jsx("div",{className:"sk sk-line"}),e.jsx("div",{className:"sk sk-line short"}),e.jsx("div",{className:"sk sk-pill"})]},`cks-${o}`)):v.length===0?e.jsx("div",{className:"card",children:e.jsxs(m.Empty,{children:[e.jsx("div",{className:"emoji","aria-hidden":!0,children:"🗂️"}),e.jsx("h3",{children:"No customers match"}),e.jsx("p",{children:"Try a different keyword or clear the status filter."})]})}):v.map(a=>{var o,n;return e.jsxs("div",{className:"card item",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"avatar",children:e.jsx("span",{children:(((o=a.firstName)==null?void 0:o[0])||"C")+(((n=a.lastName)==null?void 0:n[0])||"")})}),e.jsxs("div",{className:"meta",children:[e.jsxs(b,{className:"name",to:`/customers/${a.id}`,children:[a.firstName," ",a.lastName]}),e.jsx("div",{className:"code",children:a.code})]}),e.jsx("span",{className:`status ${a.status}`,children:a.status})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Email"}),e.jsx("div",{className:"v",children:e.jsx("a",{href:`mailto:${a.email}`,children:a.email})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Phone"}),e.jsx("div",{className:"v",children:a.phone})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Created"}),e.jsx("div",{className:"v",children:w(a.createdAt)})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Updated"}),e.jsx("div",{className:"v",children:w(a.updatedAt,!0)})]}),e.jsx("div",{className:"tags",children:(a.tags||[]).map(s=>e.jsx("span",{className:"tag",children:s},s))})]}),e.jsxs("div",{className:"foot",children:[e.jsx(b,{to:`/customers/${a.id}`,className:"btnGhost small",children:"View"}),e.jsx(b,{to:`/customers/${a.id}/edit`,className:"btnGhost small",children:"Edit"}),e.jsx(b,{to:`/customers/${a.id}/print`,className:"btnGhost small",children:"Print"}),e.jsx("button",{className:"btnGhost small disabled",title:"Demo: disabled",onClick:()=>j(!0),children:"Delete"})]})]},a.id)})})}),G&&e.jsx(m.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>j(!1),children:e.jsxs(m.Modal,{className:"card",onMouseDown:a=>a.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Demo"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:"This is a display-only preview. Create/Import/Delete actions are disabled."})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnPrimary",onClick:()=>j(!1),children:"Got it"}),e.jsx("button",{className:"btnGhost",onClick:()=>N("/help"),children:"Help"})]})]})})]})};export{F as default};
