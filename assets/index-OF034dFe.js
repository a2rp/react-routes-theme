import{d as j,r as c,j as t,N as D}from"./index-CqBbF2bz.js";const l="var(--text, #f3f4f6)",v="var(--muted, #a0a0a7)",i="var(--card, #111318)",o="var(--border, #23262d)",r="var(--accent, #5aa9ff)",K="var(--accent-soft, rgba(90,169,255,0.15))",T="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",S="var(--radius, 12px)",k={Page:j.div`
        padding: 16px;
        color: ${l};
    `,Header:j.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 14px 16px;
        border-radius: ${S};
        border: 1px solid ${o};
        background: ${i};
        box-shadow: ${T};
        margin-bottom: 14px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            color: ${v};
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            margin-top: 6px;
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${i};
            color: ${l};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${K};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Stats:j.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 14px;

        @media (min-width: 900px) {
            grid-template-columns: repeat(7, minmax(0, 1fr));
        }

        .stat {
            padding: 12px;
            border-radius: ${S};
            border: 1px solid ${o};
            background: color-mix(in oklab, ${i} 96%, transparent);
            box-shadow: ${T};
            display: grid;
            gap: 8px;
        }
        .k {
            color: ${v};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            font-weight: 700;
        }

        /* status tones using accent mixes */
        .stat[data-status="In Transit"] {
            background: color-mix(in oklab, ${r} 10%, ${i});
        }
        .stat[data-status="Out for Delivery"] {
            background: color-mix(in oklab, ${r} 12%, ${i});
        }
        .stat[data-status="Delivered"] {
            background: color-mix(in oklab, ${r} 8%, ${i});
        }
        .stat[data-status="Delayed"] {
            background: color-mix(in oklab, #f59e0b 16%, ${i});
        } /* amber-ish */
        .stat[data-status="Label Created"] {
            background: color-mix(in oklab, ${r} 6%, ${i});
        }
        .stat[data-status="Pending Pickup"] {
            background: color-mix(in oklab, ${r} 6%, ${i});
        }
        .stat[data-status="Returned"] {
            background: color-mix(in oklab, #ef4444 16%, ${i});
        } /* red-ish */
    `,Toolbar:j.div`
        padding: 12px;
        border-radius: ${S};
        border: 1px solid ${o};
        background: ${i};
        box-shadow: ${T};
        margin-bottom: 14px;

        .row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        @media (min-width: 900px) {
            .row {
                grid-template-columns: 1fr 200px 200px auto;
                align-items: end;
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
            border: 1px solid ${o};
            background: ${i};
            color: ${l};
            border-radius: 8px;
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        input:focus,
        select:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${K};
            outline: none;
        }
        .grow {
            flex: 1;
        }
        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${i};
            color: ${l};
            font-weight: 600;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,TableWrap:j.div`
        border-radius: ${S};
        border: 1px solid ${o};
        background: ${i};
        box-shadow: ${T};
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${i};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 10px;
            color: ${l};
            font-weight: 600;
            cursor: default;
            user-select: none;
        }
        thead th[data-sort] {
            color: ${r};
        }
        thead th:hover {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        tbody td {
            border-top: 1px solid ${o};
            padding: 10px;
            vertical-align: top;
            color: ${l};
        }
        .muted {
            color: ${v};
        }
        .small {
            font-size: 11px;
            color: ${v};
        }
        .strong {
            font-weight: 600;
        }
        .arrow {
            display: inline-block;
            margin: 0 6px;
            color: ${v};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        a {
            color: ${l};
        }
        a:hover {
            color: ${r};
        }

        .rowActions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${r} 10%, transparent);
            font-size: 12px;
        }
        .chip.prepaid {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .chip.cod {
            background: color-mix(in oklab, #f59e0b 16%, transparent);
        } /* amber */

        .chip.status {
            border: 1px solid ${o};
        }
        .chip.status[data-status="Delivered"] {
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
        .chip.status[data-status="In Transit"] {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .chip.status[data-status="Out for Delivery"] {
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
        .chip.status[data-status="Label Created"] {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .chip.status[data-status="Pending Pickup"] {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .chip.status[data-status="Delayed"] {
            background: color-mix(in oklab, #f59e0b 18%, transparent);
        }
        .chip.status[data-status="Returned"] {
            background: color-mix(in oklab, #ef4444 18%, transparent);
        }

        .empty {
            padding: 40px 20px;
            text-align: center;
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .empty .desc {
            color: ${v};
        }
    `,Overlay:j.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:j.div`
        width: min(520px, 92vw);
        border-radius: ${S};
        border: 1px solid ${o};
        background: ${i};
        color: ${l};
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
            color: ${l};
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
            background: ${i};
            color: ${l};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${K};
        }
    `},P=s=>String(s).padStart(2,"0"),R=s=>{const n=s instanceof Date?s:new Date(s),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${x[n.getDay()]} ${b[n.getMonth()]} ${P(n.getDate())} ${n.getFullYear()}`},H=s=>{const n=s instanceof Date?s:new Date(s);return`${R(n)} ${P(n.getHours())}:${P(n.getMinutes())}:${P(n.getSeconds())}hrs`},N=[{id:"SHP-5001",date:"2025-10-02T10:12:21+05:30",customer:{id:"CUST-1001",name:"Aarav Sharma"},from:{city:"New Delhi",state:"DL"},to:{city:"Mumbai",state:"MH"},carrier:"BlueDart",service:"Air Express",weightKg:2.3,cod:!1,amount:1540,status:"In Transit",tracking:"BLD123456789",items:3,eta:"2025-10-05T18:30:00+05:30"},{id:"SHP-5002",date:"2025-10-01T09:02:10+05:30",customer:{id:"CUST-1014",name:"Bluewave Traders"},from:{city:"Gurugram",state:"HR"},to:{city:"Pune",state:"MH"},carrier:"Delhivery",service:"Surface",weightKg:14.8,cod:!0,amount:23600,status:"Out for Delivery",tracking:"DLV987650012",items:12,eta:"2025-10-04T12:00:00+05:30"},{id:"SHP-5003",date:"2025-09-30T16:40:05+05:30",customer:{id:"CUST-1042",name:"Rhea Kapoor"},from:{city:"Bengaluru",state:"KA"},to:{city:"Hyderabad",state:"TG"},carrier:"DTDC",service:"Priority",weightKg:6.2,cod:!1,amount:8820,status:"Delivered",tracking:"DTDC32145009",items:5,eta:"2025-10-02T14:15:00+05:30"},{id:"SHP-5004",date:"2025-10-03T11:18:44+05:30",customer:{id:"CUST-1007",name:"Nova Wellness"},from:{city:"Jaipur",state:"RJ"},to:{city:"Chandigarh",state:"CH"},carrier:"Ecom Express",service:"Air",weightKg:1.1,cod:!1,amount:1240,status:"Label Created",tracking:"ECO4422108",items:2,eta:"2025-10-06T19:30:00+05:30"},{id:"SHP-5005",date:"2025-10-02T20:28:59+05:30",customer:{id:"CUST-1031",name:"Medico Plus"},from:{city:"Ahmedabad",state:"GJ"},to:{city:"Kolkata",state:"WB"},carrier:"Shiprocket",service:"Surface Plus",weightKg:22,cod:!1,amount:19450,status:"Delayed",tracking:"SRK55880021",items:15,eta:"2025-10-08T09:45:00+05:30"},{id:"SHP-5006",date:"2025-10-04T08:05:32+05:30",customer:{id:"CUST-1050",name:"City Care Pharmacy"},from:{city:"Lucknow",state:"UP"},to:{city:"Varanasi",state:"UP"},carrier:"BlueDart",service:"Surface",weightKg:4.6,cod:!0,amount:6720,status:"Pending Pickup",tracking:"BLD22336002",items:4,eta:"2025-10-06T16:00:00+05:30"},{id:"SHP-5007",date:"2025-09-29T13:12:02+05:30",customer:{id:"CUST-1020",name:"Care & Cure"},from:{city:"Surat",state:"GJ"},to:{city:"Bhopal",state:"MP"},carrier:"Delhivery",service:"Air Express",weightKg:3.8,cod:!1,amount:4590,status:"Returned",tracking:"DLV77660221",items:3,eta:"2025-10-01T12:30:00+05:30"},{id:"SHP-5008",date:"2025-10-04T12:22:16+05:30",customer:{id:"CUST-1067",name:"Pulse Point"},from:{city:"Kochi",state:"KL"},to:{city:"Coimbatore",state:"TN"},carrier:"DTDC",service:"Priority",weightKg:2,cod:!1,amount:3290,status:"In Transit",tracking:"DTDC99882103",items:2,eta:"2025-10-05T20:00:00+05:30"}],I=(s,n)=>{var b,g,y,f;const x=[s.id,(b=s.customer)==null?void 0:b.name,(g=s.customer)==null?void 0:g.id,s.carrier,s.service,s.tracking,(y=s.from)==null?void 0:y.city,(f=s.to)==null?void 0:f.city].join(" ").toLowerCase();return n.split(/\s+/).filter(Boolean).every(w=>x.includes(w))},W=()=>{const s=c.useMemo(()=>new Date,[]),n=c.useRef(null),[x,b]=c.useState(""),[g,y]=c.useState(""),[f,w]=c.useState(""),[p,A]=c.useState("date"),[h,U]=c.useState("desc"),[E,L]=c.useState(!1),G=c.useMemo(()=>Array.from(new Set(N.map(e=>e.carrier))).sort(),[]),C=["Label Created","Pending Pickup","In Transit","Out for Delivery","Delivered","Delayed","Returned"],M=c.useMemo(()=>{let e=N.slice();return x.trim()&&(e=e.filter(a=>I(a,x.trim().toLowerCase()))),g&&(e=e.filter(a=>a.status===g)),f&&(e=e.filter(a=>a.carrier===f)),e.sort((a,d)=>{const O=h==="asc"?1:-1;let u,m;switch(p){case"id":u=a.id,m=d.id;break;case"customer":u=a.customer.name,m=d.customer.name;break;case"carrier":u=a.carrier,m=d.carrier;break;case"status":u=a.status,m=d.status;break;case"amount":u=a.amount,m=d.amount;break;case"weight":u=a.weightKg,m=d.weightKg;break;default:u=new Date(a.date).getTime(),m=new Date(d.date).getTime()}return u<m?-1*O:u>m?1*O:0}),e},[x,g,f,p,h]),z=c.useMemo(()=>{const e=Object.fromEntries(C.map(a=>[a,0]));for(const a of N)e[a.status]=(e[a.status]||0)+1;return e},[C]),$=e=>{A(a=>e),U(a=>p===e&&a==="asc"?"desc":"asc")},B=()=>{const e=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),d=document.createElement("a");d.href=a,d.download="shipments.json",d.click(),URL.revokeObjectURL(a)},J=()=>{n.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return t.jsxs(k.Page,{children:[t.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),t.jsxs(k.Header,{className:"card",children:[t.jsxs("div",{className:"left",children:[t.jsx("h1",{children:"Shipments"}),t.jsxs("div",{className:"meta",children:[t.jsxs("span",{children:["Total: ",N.length]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Last updated: ",H(s)]})]})]}),t.jsxs("div",{className:"right",children:[t.jsx("button",{className:"btnGhost",onClick:()=>L(!0),title:"Create shipment (demo disabled)",children:"New Shipment"}),t.jsx("button",{className:"btnPrimary",onClick:B,title:"Export filtered list as JSON",children:"Export"}),t.jsx("button",{className:"btnGhost",onClick:J,title:"Print list",children:"Print"})]})]}),t.jsx(k.Stats,{children:C.map(e=>t.jsxs("div",{className:"card stat","data-status":e,children:[t.jsx("div",{className:"k",children:e}),t.jsx("div",{className:"v",children:z[e]??0})]},e))}),t.jsx(k.Toolbar,{className:"card",children:t.jsxs("div",{className:"row",children:[t.jsxs("div",{className:"field grow",children:[t.jsx("label",{children:"Search"}),t.jsx("input",{value:x,onChange:e=>b(e.target.value),placeholder:"Track no., customer, city, carrier…","aria-label":"Search shipments"})]}),t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Status"}),t.jsxs("select",{value:g,onChange:e=>y(e.target.value),children:[t.jsx("option",{value:"",children:"All"}),C.map(e=>t.jsx("option",{value:e,children:e},e))]})]}),t.jsxs("div",{className:"field",children:[t.jsx("label",{children:"Carrier"}),t.jsxs("select",{value:f,onChange:e=>w(e.target.value),children:[t.jsx("option",{value:"",children:"All"}),G.map(e=>t.jsx("option",{value:e,children:e},e))]})]}),t.jsx("div",{className:"actions",children:t.jsx("button",{className:"btnGhost",onClick:()=>{b(""),y(""),w("")},children:"Clear"})})]})}),t.jsxs(k.TableWrap,{className:"card",id:"search-print-area",ref:n,children:[t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{onClick:()=>$("id"),"data-sort":p==="id"?h:void 0,children:"ID"}),t.jsx("th",{onClick:()=>$("date"),"data-sort":p==="date"?h:void 0,children:"Date"}),t.jsx("th",{onClick:()=>$("customer"),"data-sort":p==="customer"?h:void 0,children:"Customer"}),t.jsx("th",{children:"Route"}),t.jsx("th",{onClick:()=>$("carrier"),"data-sort":p==="carrier"?h:void 0,children:"Carrier"}),t.jsx("th",{children:"Service"}),t.jsx("th",{onClick:()=>$("weight"),"data-sort":p==="weight"?h:void 0,children:"Weight"}),t.jsx("th",{children:"COD"}),t.jsx("th",{onClick:()=>$("amount"),"data-sort":p==="amount"?h:void 0,children:"Amount"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Tracking"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:M.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(D,{to:`/shipments/${e.id}`,children:e.id})}),t.jsxs("td",{children:[t.jsx("div",{className:"muted",children:R(e.date)}),t.jsx("div",{className:"small",children:H(e.date).split(" ").slice(4).join(" ")})]}),t.jsxs("td",{children:[t.jsx("div",{className:"strong",children:e.customer.name}),t.jsx("div",{className:"muted",children:e.customer.id})]}),t.jsxs("td",{children:[t.jsxs("div",{className:"muted",children:[e.from.city,", ",e.from.state]}),t.jsx("div",{className:"arrow",children:"→"}),t.jsxs("div",{className:"muted",children:[e.to.city,", ",e.to.state]})]}),t.jsx("td",{children:e.carrier}),t.jsx("td",{children:e.service}),t.jsxs("td",{children:[e.weightKg.toFixed(1)," kg"]}),t.jsx("td",{children:e.cod?t.jsx("span",{className:"chip cod",children:"COD"}):t.jsx("span",{className:"chip prepaid",children:"Prepaid"})}),t.jsxs("td",{children:["₹ ",e.amount.toLocaleString("en-IN",{maximumFractionDigits:2})]}),t.jsx("td",{children:t.jsx("span",{className:"chip status","data-status":e.status,children:e.status})}),t.jsx("td",{className:"mono",children:e.tracking}),t.jsxs("td",{className:"rowActions",children:[t.jsx(D,{to:`/shipments/${e.id}`,children:"View"}),t.jsx(D,{to:`/shipments/${e.id}/track`,children:"Track"}),t.jsx(D,{to:`/shipments/${e.id}/labels`,children:"Labels"})]})]},e.id))})]}),M.length===0&&t.jsxs("div",{className:"empty",children:[t.jsx("div",{className:"title",children:"No results"}),t.jsx("div",{className:"desc",children:"Try changing filters or search keywords."})]})]}),E&&t.jsx(k.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>L(!1),children:t.jsxs(k.Modal,{className:"card",onMouseDown:e=>e.stopPropagation(),children:[t.jsx("header",{children:t.jsx("h4",{children:"Demo only"})}),t.jsx("div",{className:"body",children:t.jsx("p",{children:"This is a display preview. Creating shipments is disabled in the demo."})}),t.jsx("footer",{children:t.jsx("button",{className:"btnPrimary",onClick:()=>L(!1),children:"Close"})})]})})]})};export{W as default};
