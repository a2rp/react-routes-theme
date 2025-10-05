import{d as m,s as z,u as W,r as l,j as e,N as j}from"./index-DwhKQ_MC.js";const w="var(--text, #f3f4f6)",g="var(--muted, #a0a0a7)",$="var(--card, #111318)",d="var(--border, #23262d)",i="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",I="var(--danger, #ef4444)",u={Page:m.div`
        padding: 24px 0 64px;
        color: ${w};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${g};
            }
            .current {
                color: ${w};
            }
        }
    `,Header:m.header`
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
            display: flex;
            gap: 8px;
            color: ${g};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${d};
            background: ${$};
            color: ${w};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Toolbar:m.div`
        padding: 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 1080px) {
                grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        label {
            color: ${g};
            font-size: 12px;
        }

        .chipset {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 14px;
            color: ${w};
            background: color-mix(in oklab, ${i} 8%, transparent);
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${D};
        }
    `,Split:m.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2fr 1fr;
        }

        .list.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 16px;
        }
    `,Empty:m.div`
        padding: 40px 20px;
        text-align: center;
        .icon {
            font-size: 38px;
            opacity: 0.5;
            margin-bottom: 10px;
        }
        h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }
        p {
            color: ${g};
        }
    `,Preview:m.div`
        padding: 14px;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            .right .badge {
                text-transform: uppercase;
                font-size: 11px;
                letter-spacing: 0.4px;
                border: 1px solid ${d};
                border-radius: 999px;
                padding: 4px 10px;
                background: color-mix(in oklab, ${i} 10%, transparent);
            }
        }

        .label {
            color: ${g};
            font-size: 12px;
        }
        .mt8 {
            margin-top: 8px;
        }

        .grid.two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 520px) {
                grid-template-columns: 1fr 1fr;
            }
            margin-bottom: 10px;
        }

        .line {
            margin: 12px 0;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .tag {
            border: 1px solid ${d};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 8%, transparent);
        }

        .metrics {
            margin-top: 8px;
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            @media (min-width: 520px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .metric {
            border: 1px solid ${d};
            border-radius: 12px;
            padding: 10px;
            background: ${$};
        }
        .metric .k {
            color: ${g};
            font-size: 12px;
        }
        .metric .v {
            font-weight: 600;
            margin-top: 4px;
        }

        .actions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${d};
            background: ${$};
            color: ${w};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnGhost.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    `,HintCard:m.div`
        padding: 16px;
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        p {
            color: ${g};
        }
    `,TableStyles:m.div``,TableHeader:m.div``,TableWrap:m.div``},K=m.div`
    .tableHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${d};
        .left {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }
        .muted {
            color: ${g};
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 12px;
            color: ${g};
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 6px;
            border: 1px solid ${d};
        }
        .dot.active {
            background: color-mix(in oklab, ${i} 30%, transparent);
        }
        .dot.inactive {
            background: color-mix(in oklab, ${I} 30%, transparent);
        }
    }

    .tableWrap {
        overflow: auto;
    }
    table.table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        background: ${$};
        z-index: 1;
        border-bottom: 1px solid ${d};
        text-align: left;
        padding: 10px;
        color: ${i};
    }
    tbody td {
        border-bottom: 1px solid ${d};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr {
        transition: background 0.15s, border-color 0.15s;
        cursor: pointer;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody tr.selected {
        outline: 2px solid ${i};
        outline-offset: -2px;
        background: color-mix(in oklab, ${i} 10%, transparent);
    }

    .titleCell {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .status {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid ${d};
    }
    .status.active {
        background: color-mix(in oklab, ${i} 35%, transparent);
    }
    .status.inactive {
        background: color-mix(in oklab, ${I} 35%, transparent);
    }

    .name {
        font-weight: 600;
    }
    .sub {
        font-size: 12px;
    }

    .stack {
        display: grid;
        gap: 2px;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    .tag {
        border: 1px solid ${d};
        padding: 4px 8px;
        border-radius: 999px;
        background: color-mix(in oklab, ${i} 8%, transparent);
    }

    .rating {
        display: inline-block;
        min-width: 38px;
        text-align: center;
        border: 1px solid ${d};
        border-radius: 8px;
        padding: 2px 6px;
        background: ${$};
    }

    td.links {
        white-space: nowrap;
    }
    .lnk {
        display: inline-block;
        padding: 4px 8px;
        border: 1px solid ${d};
        border-radius: 8px;
        background: ${$};
        color: ${w};
        margin-right: 6px;
        transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
    }
    .lnk:hover {
        border-color: ${i};
        color: ${i};
        box-shadow: 0 0 0 3px ${D};
    }
    .lnk.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;u.Page=m(u.Page)`
    .list.card {
        ${K}
    }
`;const O=r=>String(r).padStart(2,"0"),q=r=>{const o=r instanceof Date?r:new Date(r),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${v[o.getDay()]} ${x[o.getMonth()]} ${O(o.getDate())} ${o.getFullYear()}`},L=r=>{const o=r instanceof Date?r:new Date(r);return`${q(o)} ${O(o.getHours())}:${O(o.getMinutes())}:${O(o.getSeconds())}hrs`},S=[{id:"VEND-1001",name:"Apex Pharmaceuticals",code:"APX",contact:"Meera Iyer",email:"meera@apexpharma.co",phone:"+91 98990 12001",gstin:"07APXPH1234F1Z7",pan:"APXPH1234F",address:{city:"Bengaluru",state:"KA",country:"India"},tags:["pharma","priority","api"],rating:4.7,categories:["API","Packaging"],spendYTD:"₹58,40,000",spendLifetime:"₹3,12,50,000",openPOs:4,lastOrderAt:"2025-09-21T10:30:00+05:30",status:"active",leadTimeDays:4,payment:"Net 30",accountManager:"Anita Desai",portalUrl:"https://portal.apexpharma.co"},{id:"VEND-1002",name:"Bluewave Traders",code:"BWT",contact:"Siddharth Rao",email:"sid@bluewave.trade",phone:"+91 99870 44556",gstin:"29BWTTR9876T1Z3",pan:"BWTTR9876T",address:{city:"Mumbai",state:"MH",country:"India"},tags:["wholesale","priority"],rating:4.4,categories:["Consumables"],spendYTD:"₹22,90,500",spendLifetime:"₹1,07,80,000",openPOs:2,lastOrderAt:"2025-08-27T14:55:12+05:30",status:"active",leadTimeDays:2,payment:"Advance",accountManager:"R. Nair",portalUrl:"https://bluewave.example.com"},{id:"VEND-1003",name:"Nimbus Packaging",code:"NIM",contact:"Anmol Kapoor",email:"ops@nimbuspack.in",phone:"+91 97654 22119",gstin:"23NIMPK4455L1Z2",pan:"NIMPK4455L",address:{city:"Indore",state:"MP",country:"India"},tags:["packaging"],rating:4.2,categories:["Packaging"],spendYTD:"₹12,60,000",spendLifetime:"₹56,40,000",openPOs:1,lastOrderAt:"2025-09-17T11:14:40+05:30",status:"active",leadTimeDays:6,payment:"Net 15",accountManager:"Dev S",portalUrl:""},{id:"VEND-1004",name:"Zen Lifesciences",code:"ZEN",contact:"Trisha G",email:"trisha@zenlife.co",phone:"+91 98200 11812",gstin:"06ZNLFS9021H1Z6",pan:"ZNLFS9021H",address:{city:"Gurugram",state:"HR",country:"India"},tags:["pharma","formulation"],rating:4.8,categories:["API","Formulations"],spendYTD:"₹64,10,000",spendLifetime:"₹2,81,00,000",openPOs:5,lastOrderAt:"2025-10-02T16:08:03+05:30",status:"active",leadTimeDays:3,payment:"Net 45",accountManager:"A Kumar",portalUrl:"https://zenlife.example"},{id:"VEND-1005",name:"Orbit Chemicals",code:"ORB",contact:"Prakash Jain",email:"sales@orbitchem.com",phone:"+91 99450 66778",gstin:"33ORBCM3344J1Z8",pan:"ORBCM3344J",address:{city:"Chennai",state:"TN",country:"India"},tags:["raw-material"],rating:3.9,categories:["API"],spendYTD:"₹8,90,000",spendLifetime:"₹40,70,000",openPOs:0,lastOrderAt:"2025-07-12T09:10:05+05:30",status:"inactive",leadTimeDays:7,payment:"Advance",accountManager:"—",portalUrl:""},{id:"VEND-1006",name:"Silverline Logistics",code:"SLV",contact:"Guneet K",email:"guneet@silverline.log",phone:"+91 98001 20022",gstin:"19SLVLG7782Q1Z6",pan:"SLVLG7782Q",address:{city:"Kolkata",state:"WB",country:"India"},tags:["logistics"],rating:4.1,categories:["Freight"],spendYTD:"₹4,70,000",spendLifetime:"₹19,80,000",openPOs:1,lastOrderAt:"2025-09-30T18:22:40+05:30",status:"active",leadTimeDays:5,payment:"Per Shipment",accountManager:"M. Bose",portalUrl:""},{id:"VEND-1007",name:"Crystal Printworks",code:"CRY",contact:"Parul Shah",email:"hello@crystalprint.in",phone:"+91 99000 77882",gstin:"24CRYPR5512V1Z3",pan:"CRYPR5512V",address:{city:"Ahmedabad",state:"GJ",country:"India"},tags:["labels","packaging"],rating:4.3,categories:["Labels","Packaging"],spendYTD:"₹9,40,000",spendLifetime:"₹42,60,000",openPOs:1,lastOrderAt:"2025-09-19T13:44:10+05:30",status:"active",leadTimeDays:5,payment:"Net 15",accountManager:"P. Mehta",portalUrl:""},{id:"VEND-1008",name:"Northwind Instruments",code:"NWI",contact:"Kritika R",email:"k.raj@nwind.io",phone:"+91 98188 55321",gstin:"05NWINM8833W1Z7",pan:"NWINM8833W",address:{city:"Dehradun",state:"UK",country:"India"},tags:["equipment"],rating:4,categories:["Equipment"],spendYTD:"₹15,20,000",spendLifetime:"₹61,90,000",openPOs:0,lastOrderAt:"2025-08-11T12:05:50+05:30",status:"active",leadTimeDays:10,payment:"Milestones",accountManager:"—",portalUrl:""},{id:"VEND-1009",name:"Metro Courier",code:"MTC",contact:"Arnav D",email:"ops@metrocourier.co",phone:"+91 97222 11145",gstin:"27MTCCR9090M1Z4",pan:"MTCCR9090M",address:{city:"Pune",state:"MH",country:"India"},tags:["courier","logistics"],rating:3.8,categories:["Courier"],spendYTD:"₹3,10,000",spendLifetime:"₹14,90,000",openPOs:3,lastOrderAt:"2025-09-26T10:18:22+05:30",status:"active",leadTimeDays:2,payment:"Per Shipment",accountManager:"L. Patil",portalUrl:""},{id:"VEND-1010",name:"Orion Biotech",code:"ORN",contact:"Bhavya M",email:"b.m@orionbio.co",phone:"+91 90000 11234",gstin:"21ORNBT4411Y1Z9",pan:"ORNBT4411Y",address:{city:"Bhubaneswar",state:"OD",country:"India"},tags:["pharma","biotech","priority"],rating:4.6,categories:["API","Reagents"],spendYTD:"₹44,80,000",spendLifetime:"₹1,88,00,000",openPOs:2,lastOrderAt:"2025-09-29T17:45:55+05:30",status:"active",leadTimeDays:5,payment:"Net 30",accountManager:"Bhaskar",portalUrl:""},{id:"VEND-1011",name:"Saffron Office Supplies",code:"SAS",contact:"Komal V",email:"sales@saffronos.in",phone:"+91 98888 66002",gstin:"09SASOS2210D1Z5",pan:"SASOS2210D",address:{city:"Noida",state:"UP",country:"India"},tags:["consumables"],rating:4.1,categories:["Stationery"],spendYTD:"₹2,80,000",spendLifetime:"₹10,70,000",openPOs:0,lastOrderAt:"2025-06-13T15:30:20+05:30",status:"active",leadTimeDays:3,payment:"Advance",accountManager:"—",portalUrl:""},{id:"VEND-1012",name:"Helio Labs",code:"HEL",contact:"Raghav S",email:"raghav@helio-labs.com",phone:"+91 99555 33001",gstin:"36HELIO9901P1Z1",pan:"HELIO9901P",address:{city:"Hyderabad",state:"TS",country:"India"},tags:["pharma","formulation"],rating:4.5,categories:["Formulations"],spendYTD:"₹31,50,000",spendLifetime:"₹1,21,60,000",openPOs:1,lastOrderAt:"2025-10-03T19:12:00+05:30",status:"active",leadTimeDays:4,payment:"Net 30",accountManager:"A. Khan",portalUrl:""}],J=r=>{const o=["ID","Name","Code","Contact","Email","Phone","City","State","Country","Tags","Rating","Categories","SpendYTD","SpendLifetime","OpenPOs","LastOrderAt","Status","LeadTimeDays","Payment","AccountManager","PortalURL"],v=s=>{if(s==null)return"";const c=String(s);return/[",\n]/.test(c)?`"${c.replace(/"/g,'""')}"`:c},x=r.map(s=>[s.id,s.name,s.code,s.contact,s.email,s.phone,s.address.city,s.address.state,s.address.country,(s.tags||[]).join(" | "),s.rating,(s.categories||[]).join(" | "),s.spendYTD,s.spendLifetime,s.openPOs,L(s.lastOrderAt),s.status,s.leadTimeDays,s.payment,s.accountManager,s.portalUrl].map(v).join(",")).join(`
`);return[o.join(","),x].join(`
`)},Q=()=>{const[r,o]=z(),v=W(),[x,s]=l.useState(()=>r.get("q")||""),[c,V]=l.useState(()=>r.get("status")||"all"),[f,E]=l.useState(()=>r.get("tag")||"all"),[y,U]=l.useState(()=>r.get("category")||"all"),[N,Y]=l.useState(()=>r.get("sort")||"name:asc"),[t,H]=l.useState(null),C=l.useRef(null),A=l.useRef(null);l.useEffect(()=>{const a=new URLSearchParams;x&&a.set("q",x),c!=="all"&&a.set("status",c),f!=="all"&&a.set("tag",f),y!=="all"&&a.set("category",y),N!=="name:asc"&&a.set("sort",N),o(a,{replace:!0})},[x,c,f,y,N,o]),l.useEffect(()=>{const a=A.current;if(!a)return;const p=requestAnimationFrame(()=>{try{a.focus({preventScroll:!0})}catch{a.focus()}});return()=>cancelAnimationFrame(p)},[]);const B=l.useMemo(()=>{const a=new Set;return S.forEach(p=>(p.tags||[]).forEach(h=>a.add(h))),["all",...Array.from(a)]},[]),G=l.useMemo(()=>{const a=new Set;return S.forEach(p=>(p.categories||[]).forEach(h=>a.add(h))),["all",...Array.from(a)]},[]),k=l.useMemo(()=>{const a=x.trim().toLowerCase().split(/\s+/).filter(Boolean),p=n=>{if(c!=="all"&&n.status!==c||f!=="all"&&!(n.tags||[]).includes(f)||y!=="all"&&!(n.categories||[]).includes(y))return!1;if(a.length){const T=[n.name,n.code,n.contact,n.email,n.phone,n.address.city,n.address.state,n.address.country,(n.tags||[]).join(" "),(n.categories||[]).join(" ")].join(" ").toLowerCase();if(!a.every(P=>T.includes(P)))return!1}return!0},h=S.filter(p),[b,M]=N.split(":");return h.sort((n,T)=>{const P=b==="rating"?n.rating:String(n[b]||n.name).toLowerCase(),R=b==="rating"?T.rating:String(T[b]||T.name).toLowerCase();return P<R?M==="asc"?-1:1:P>R?M==="asc"?1:-1:0}),h},[x,c,f,y,N]),F=()=>{const a=J(k),p=new Blob([a],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(p),b=document.createElement("a");b.href=h,b.download="vendors.csv",b.click(),URL.revokeObjectURL(h)},Z=()=>{C.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(u.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Vendors"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(j,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Vendors"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",S.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",L(new Date)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>v("/purchase-orders"),title:"Open Purchase Orders",children:"POs"}),e.jsx("button",{className:"btnGhost",onClick:()=>v("/invoices"),title:"Open Invoices",children:"Invoices"}),e.jsx("button",{className:"btnGhost",onClick:Z,title:"Print current view",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:F,title:"Export filtered list to CSV",children:"Export CSV"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Disabled in demo",children:"New Vendor"})]})]}),e.jsx(u.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{ref:A,value:x,onChange:a=>s(a.target.value),placeholder:"Search name, code, email, city…","aria-label":"Search vendors"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("div",{className:"chipset",children:["all","active","inactive"].map(a=>e.jsx("button",{className:`chip ${c===a?"active":""}`,onClick:()=>V(a),"aria-pressed":c===a,title:`Filter status: ${a}`,children:a[0].toUpperCase()+a.slice(1)},a))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Tag"}),e.jsx("select",{value:f,onChange:a=>E(a.target.value),children:B.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Category"}),e.jsx("select",{value:y,onChange:a=>U(a.target.value),children:G.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Sort"}),e.jsxs("select",{value:N,onChange:a=>Y(a.target.value),children:[e.jsx("option",{value:"name:asc",children:"Name ↑"}),e.jsx("option",{value:"name:desc",children:"Name ↓"}),e.jsx("option",{value:"rating:desc",children:"Rating ↑"}),e.jsx("option",{value:"rating:asc",children:"Rating ↓"})]})]})]})}),e.jsxs(u.Split,{children:[e.jsxs("section",{className:"list card",id:"search-print-area",ref:C,children:[e.jsxs("header",{className:"tableHeader",children:[e.jsxs("div",{className:"left",children:[e.jsx("strong",{children:"Results"}),e.jsxs("span",{className:"muted",children:["(",k.length,")"]})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot active"})," Active",e.jsx("span",{className:"dot inactive"})," Inactive"]})]}),k.length===0?e.jsxs(u.Empty,{children:[e.jsx("div",{className:"icon","aria-hidden":"true",children:"⌁"}),e.jsx("h3",{children:"No vendors found"}),e.jsx("p",{children:"Try a different keyword or clear filters."})]}):e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"Contact"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{children:"Rating"}),e.jsx("th",{children:"Spend (YTD)"}),e.jsx("th",{children:"Open POs"}),e.jsx("th",{children:"Last Order"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:k.map(a=>e.jsxs("tr",{"data-status":a.status,className:(t==null?void 0:t.id)===a.id?"selected":"",onClick:()=>H(a),title:"Select to preview details",children:[e.jsx("td",{children:e.jsxs("div",{className:"titleCell",children:[e.jsx("div",{className:`status ${a.status}`,"aria-hidden":"true"}),e.jsxs("div",{children:[e.jsx("div",{className:"name",children:a.name}),e.jsxs("div",{className:"sub muted",children:[a.id," · ",a.code]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"stack",children:[e.jsx("div",{children:a.contact}),e.jsx("div",{className:"muted",children:a.email}),e.jsx("div",{className:"muted",children:a.phone})]})}),e.jsxs("td",{children:[a.address.city,", ",a.address.state]}),e.jsx("td",{children:e.jsx("div",{className:"tags",children:(a.tags||[]).map(p=>e.jsx("span",{className:"tag",children:p},p))})}),e.jsx("td",{children:e.jsx("span",{className:"rating",title:"Vendor rating",children:a.rating.toFixed(1)})}),e.jsx("td",{children:a.spendYTD}),e.jsx("td",{children:a.openPOs}),e.jsx("td",{children:L(a.lastOrderAt)}),e.jsxs("td",{className:"links",children:[e.jsx(j,{to:`/vendors/${a.id}`,className:"lnk",title:"View details",children:"View"}),e.jsx(j,{to:`/vendors/${a.id}/edit`,className:"lnk disabled","aria-disabled":"true",title:"Disabled in demo",children:"Edit"}),e.jsx(j,{to:`/purchase-orders?vendor=${encodeURIComponent(a.id)}`,className:"lnk",title:"POs",children:"POs"}),e.jsx(j,{to:`/invoices?vendor=${encodeURIComponent(a.id)}`,className:"lnk",title:"Invoices",children:"Invoices"})]})]},a.id))})]})})]}),e.jsx("aside",{className:"side",children:t?e.jsxs(u.Preview,{className:"card",children:[e.jsxs("header",{children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:t.name}),e.jsxs("div",{className:"muted",children:[t.id," · ",t.code]})]}),e.jsx("div",{className:"right",children:e.jsx("span",{className:"badge",children:t.status})})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Contact"}),e.jsx("div",{children:t.contact}),e.jsx("div",{className:"muted",children:t.email}),e.jsx("div",{className:"muted",children:t.phone})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Account Manager"}),e.jsx("div",{children:t.accountManager||"—"}),e.jsx("div",{className:"label mt8",children:"Payment"}),e.jsx("div",{children:t.payment})]})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Location"}),e.jsxs("div",{children:[t.address.city,", ",t.address.state]}),e.jsx("div",{className:"muted",children:t.address.country})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Lead Time"}),e.jsxs("div",{children:[t.leadTimeDays," days"]}),e.jsx("div",{className:"label mt8",children:"Rating"}),e.jsx("div",{children:t.rating.toFixed(1)})]})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"GSTIN"}),e.jsx("div",{children:t.gstin})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"PAN"}),e.jsx("div",{children:t.pan})]})]}),e.jsxs("div",{className:"line",children:[e.jsx("div",{className:"label",children:"Categories"}),e.jsx("div",{className:"tags",children:(t.categories||[]).map(a=>e.jsx("span",{className:"tag",children:a},a))})]}),e.jsxs("div",{className:"metrics",children:[e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Spend (YTD)"}),e.jsx("div",{className:"v",children:t.spendYTD})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Spend (Lifetime)"}),e.jsx("div",{className:"v",children:t.spendLifetime})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Open POs"}),e.jsx("div",{className:"v",children:t.openPOs})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Last Order"}),e.jsx("div",{className:"v",children:L(t.lastOrderAt)})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx(j,{to:`/vendors/${t.id}`,className:"btnPrimary",title:"Open vendor details",children:"Open"}),e.jsx("a",{href:t.portalUrl||"#",className:`btnGhost ${t.portalUrl?"":"disabled"}`,"aria-disabled":!t.portalUrl,title:t.portalUrl?"Vendor portal":"No portal",children:"Portal"}),e.jsx(j,{to:`/purchase-orders?vendor=${encodeURIComponent(t.id)}`,className:"btnGhost",title:"View POs",children:"View POs"}),e.jsx(j,{to:`/invoices?vendor=${encodeURIComponent(t.id)}`,className:"btnGhost",title:"View Invoices",children:"View Invoices"})]})]}):e.jsxs(u.HintCard,{className:"card",children:[e.jsx("h3",{children:"Vendor preview"}),e.jsx("p",{children:"Select a row to see a quick profile, compliance, and quick links."})]})})]})]})};export{Q as default};
