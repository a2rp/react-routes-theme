import{d as R,r as c,j as e,N as B}from"./index-CqBbF2bz.js";const x="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",p="var(--card, #111318)",i="var(--border, #23262d)",o="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",f="var(--radius, 16px)",y="var(--danger, #ef4444)",E={Page:R.div`
        color: ${x};
        padding: 20px 0 56px;

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 14px 16px;
        }

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${n};
            }
            .current {
                color: ${x};
            }
        }

        .subMeta {
            margin-top: 6px;
            color: ${n};
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
            background: ${p};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s ease-in-out;
        }
        .btnPrimary:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${P};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${o};
            color: ${o};
            transform: translateY(1px);
        }
        .btnPrimary[disabled],
        .btnGhost[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        [data-tooltip] {
            position: relative;
        }
        [data-tooltip]:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + 6px);
            white-space: nowrap;
            background: ${p};
            border: 1px solid ${i};
            padding: 4px 8px;
            border-radius: 6px;
            color: ${x};
            font-size: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            pointer-events: none;
        }

        .metrics {
            margin: 16px 0;
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 1024px) {
                grid-template-columns: repeat(4, 1fr);
            }

            .metric {
                padding: 14px;
                border-radius: ${f};
                border: 1px solid ${i};
                background: ${p};
                box-shadow: var(--shadow);
                .k {
                    color: ${n};
                    font-size: 12px;
                }
                .v {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                    margin-top: 6px;
                }
                .hint {
                    color: ${n};
                    margin-top: 6px;
                    font-size: 12px;
                }
            }
        }

        .filters.card {
            padding: 14px;
            border-radius: ${f};
            border: 1px solid ${i};
            background: ${p};
            .row {
                display: grid;
                gap: 12px;
                grid-template-columns: 1fr;
            }
            @media (min-width: 900px) {
                .row {
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                }
            }
            .field label {
                display: block;
                color: ${n};
                font-size: 12px;
                margin-bottom: 6px;
            }
            .filterMeta {
                margin-top: 10px;
                color: ${n};
                font-size: 12px;
            }
        }

        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 2fr 1fr;
            }
        }

        .tableWrap {
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${i};
            .title {
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .legend {
                display: flex;
                gap: 8px;
                align-items: center;
            }
        }

        .scroll {
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
            background: ${p};
            border-bottom: 1px solid ${i};
            padding: 10px;
            text-align: left;
            color: ${n};
            font-weight: 600;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${o} 8%, transparent);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${n};
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${i};
            background: color-mix(in oklab, ${o} 10%, transparent);
            font-weight: 600;
        }
        .chip.pending {
            background: color-mix(in oklab, ${o} 5%, transparent);
        }
        .chip.rejected {
            background: color-mix(in oklab, ${y} 10%, transparent);
            border-color: color-mix(in oklab, ${y} 40%, ${i});
        }
        .chip.approved {
            background: color-mix(in oklab, ${o} 12%, transparent);
        }

        .rowActions {
            text-align: right;
        }
        .tableFoot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            border-top: 1px solid ${i};
            .pageNote {
                color: ${n};
                font-size: 12px;
            }
        }

        .side {
            padding: 14px;
            border-radius: ${f};
            border: 1px solid ${i};
            background: ${p};
            h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .sum {
                display: grid;
                gap: 8px;
            }
            .line {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
            }
            .k {
                color: ${n};
            }
            .v {
                color: ${x};
            }

            .miniList {
                margin-top: 14px;
            }
            .miniList h4 {
                margin-bottom: 8px;
            }
            .miniList ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .miniList li {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .help {
                margin-top: 14px;
                color: ${n};
                font-size: 13px;
            }
        }
    `},j=r=>String(r).padStart(2,"0"),A=r=>{const t=r instanceof Date?r:new Date(r),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${g[t.getDay()]} ${l[t.getMonth()]} ${j(t.getDate())} ${t.getFullYear()}`},v=r=>{const t=r instanceof Date?r:new Date(r);return`${A(t)} ${j(t.getHours())}:${j(t.getMinutes())}:${j(t.getSeconds())}hrs`},d={total:128,pending:4,approved:120,rejected:4},N=[{id:"ADJ-2025-0001",warehouse:"Central WH",reason:"Damage",items:3,reference:"RCV-7831",createdBy:"Ananya Gupta",createdAt:"2025-10-04T15:38:20+05:30",status:"Approved"},{id:"ADJ-2025-0002",warehouse:"South Hub",reason:"Cycle Count",items:12,reference:"CC-2025-09-30",createdBy:"Rohan Verma",createdAt:"2025-10-03T18:12:05+05:30",status:"Pending"},{id:"ADJ-2025-0003",warehouse:"Central WH",reason:"Expiry",items:5,reference:"BATCH-AX91",createdBy:"Lisa D’Souza",createdAt:"2025-10-02T11:46:51+05:30",status:"Rejected"},{id:"ADJ-2025-0004",warehouse:"East Depot",reason:"Transfer Correction",items:8,reference:"TRF-1189",createdBy:"Vikram Iyer",createdAt:"2025-10-01T09:25:10+05:30",status:"Approved"},{id:"ADJ-2025-0005",warehouse:"Central WH",reason:"Cycle Count",items:10,reference:"CC-2025-09-27",createdBy:"Ananya Gupta",createdAt:"2025-09-30T17:02:41+05:30",status:"Approved"},{id:"ADJ-2025-0006",warehouse:"South Hub",reason:"Damage",items:2,reference:"RET-5521",createdBy:"Aman Khan",createdAt:"2025-09-29T14:00:12+05:30",status:"Approved"},{id:"ADJ-2025-0007",warehouse:"East Depot",reason:"Expiry",items:7,reference:"BATCH-RZ14",createdBy:"Meera Patel",createdAt:"2025-09-28T16:40:33+05:30",status:"Approved"},{id:"ADJ-2025-0008",warehouse:"Central WH",reason:"Transfer Correction",items:1,reference:"TRF-1180",createdBy:"Rohit Kumar",createdAt:"2025-09-27T10:05:59+05:30",status:"Approved"},{id:"ADJ-2025-0009",warehouse:"West Node",reason:"Cycle Count",items:9,reference:"CC-2025-09-26",createdBy:"Riya Sen",createdAt:"2025-09-26T12:21:48+05:30",status:"Approved"},{id:"ADJ-2025-0010",warehouse:"West Node",reason:"Damage",items:6,reference:"RET-5466",createdBy:"Zaid Sheikh",createdAt:"2025-09-25T19:35:14+05:30",status:"Approved"},{id:"ADJ-2025-0011",warehouse:"South Hub",reason:"Expiry",items:4,reference:"BATCH-KD55",createdBy:"Aman Khan",createdAt:"2025-09-24T08:17:22+05:30",status:"Approved"},{id:"ADJ-2025-0012",warehouse:"East Depot",reason:"Cycle Count",items:11,reference:"CC-2025-09-20",createdBy:"Meera Patel",createdAt:"2025-09-22T13:11:03+05:30",status:"Approved"}],J=["Central WH","South Hub","East Depot","West Node"],M=["Approved","Pending","Rejected"],H=["Cycle Count","Damage","Expiry","Transfer Correction"],W=()=>{const r=c.useRef(null),[t,g]=c.useState(""),[l,w]=c.useState(""),[h,$]=c.useState(""),[u,k]=c.useState(""),b=c.useMemo(()=>{const s=a=>a.toLowerCase(),m=t.trim().toLowerCase().split(/\s+/).filter(Boolean);return N.filter(a=>{if(l&&a.warehouse!==l||h&&a.status!==h||u&&a.reason!==u)return!1;if(m.length){const D=s(`${a.id} ${a.warehouse} ${a.reason} ${a.reference} ${a.createdBy} ${a.status}`);if(!m.every(T=>D.includes(T)))return!1}return!0})},[t,l,h,u]),C=()=>{const s=new Blob([JSON.stringify({items:b},null,2)],{type:"application/json"}),m=URL.createObjectURL(s),a=document.createElement("a");a.href=m,a.download="inventory-adjustments.json",document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(m)},S=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(E.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{className:"card pageHead",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Inventory Adjustments"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(B,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Adjustments"})]}),e.jsx("div",{className:"subMeta",children:e.jsxs("span",{children:["Last sync: ",v("2025-10-04T15:38:20+05:30")]})})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:S,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:C,title:"Download JSON",children:"Export"}),e.jsx("button",{className:"btnPrimary",disabled:!0,"data-tooltip":"Demo mode",children:"New Adjustment"})]})]}),e.jsxs("section",{className:"metrics",children:[e.jsxs("div",{className:"card metric",children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:d.total}),e.jsx("div",{className:"hint",children:"All time"})]}),e.jsxs("div",{className:"card metric",children:[e.jsx("div",{className:"k",children:"Approved"}),e.jsx("div",{className:"v",children:d.approved}),e.jsx("div",{className:"hint",children:"Auto-posted to stock"})]}),e.jsxs("div",{className:"card metric",children:[e.jsx("div",{className:"k",children:"Pending"}),e.jsx("div",{className:"v",children:d.pending}),e.jsx("div",{className:"hint",children:"Awaiting review"})]}),e.jsxs("div",{className:"card metric",children:[e.jsx("div",{className:"k",children:"Rejected"}),e.jsx("div",{className:"v",children:d.rejected}),e.jsx("div",{className:"hint",children:"Needs follow-up"})]})]}),e.jsxs("section",{className:"filters card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:t,onChange:s=>g(s.target.value),placeholder:"ID, warehouse, reason, reference, user, status…","aria-label":"Search adjustments"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{value:l,onChange:s=>w(s.target.value),"aria-label":"Warehouse filter",children:[e.jsx("option",{value:"",children:"All"}),J.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:h,onChange:s=>$(s.target.value),"aria-label":"Status filter",children:[e.jsx("option",{value:"",children:"All"}),M.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Reason"}),e.jsxs("select",{value:u,onChange:s=>k(s.target.value),"aria-label":"Reason filter",children:[e.jsx("option",{value:"",children:"All"}),H.map(s=>e.jsx("option",{value:s,children:s},s))]})]})]}),e.jsxs("div",{className:"filterMeta",children:["Showing ",e.jsx("strong",{children:b.length})," of ",e.jsx("strong",{children:N.length})," adjustments"]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("section",{className:"card tableWrap",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("div",{className:"title",children:"Adjustments"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"chip approved",children:"Approved"}),e.jsx("span",{className:"chip pending",children:"Pending"}),e.jsx("span",{className:"chip rejected",children:"Rejected"})]})]}),e.jsx("div",{className:"scroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Reason"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Reference"}),e.jsx("th",{children:"Created By"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Status"}),e.jsx("th",{style:{width:80}})]})}),e.jsx("tbody",{children:b.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:s.warehouse}),e.jsx("td",{children:s.reason}),e.jsx("td",{className:"mono",children:s.items}),e.jsx("td",{className:"muted",children:s.reference}),e.jsx("td",{children:s.createdBy}),e.jsx("td",{className:"muted",children:v(s.createdAt)}),e.jsx("td",{children:e.jsx("span",{className:"chip "+(s.status==="Approved"?"approved":s.status==="Pending"?"pending":"rejected"),children:s.status})}),e.jsx("td",{className:"rowActions",children:e.jsx("button",{className:"btnGhost small","data-tooltip":"Demo mode",children:"View"})})]},s.id))})]})}),e.jsxs("footer",{className:"tableFoot",children:[e.jsx("div",{className:"pageNote",children:"Page 1 of 8"}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"btnGhost small",disabled:!0,children:"← Prev"}),e.jsx("button",{className:"btnGhost small",disabled:!0,children:"Next →"})]})]})]}),e.jsxs("aside",{className:"side card",id:"search-print-area",ref:r,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"sum",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Report"}),e.jsx("span",{className:"v",children:"Inventory Adjustments"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:v("2025-10-04T15:38:20+05:30")})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:d.total})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Approved"}),e.jsx("span",{className:"v",children:d.approved})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Pending"}),e.jsx("span",{className:"v",children:d.pending})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Rejected"}),e.jsx("span",{className:"v",children:d.rejected})]})]}),e.jsxs("div",{className:"miniList",children:[e.jsx("h4",{children:"Recent"}),e.jsx("ul",{children:N.slice(0,5).map(s=>e.jsxs("li",{children:[e.jsx("span",{className:"mono",children:s.id}),e.jsx("span",{className:"muted",children:A(s.createdAt)})]},s.id))})]}),e.jsxs("div",{className:"help",children:[e.jsx("h4",{children:"What is an Adjustment?"}),e.jsx("p",{children:"A record that reconciles physical stock with system quantities—triggered by cycle counts, damage, expiry, or transfer corrections."})]})]})]})]})};export{W as default};
