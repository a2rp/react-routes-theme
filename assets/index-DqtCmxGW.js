import{d as y,a as P,r as f,j as e,N as c}from"./index-BscvFKDB.js";const d="var(--text, #f3f4f6)",w="var(--muted, #a0a0a7)",u="var(--card, #111318)",l="var(--border, #23262d)",o="var(--accent, #5aa9ff)",v="var(--accent-soft, rgba(90,169,255,0.15))",k={Page:y.div`
        padding: 24px 0 64px;
        color: ${d};
    `,Header:y.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${w};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost {
            border: 1px solid ${l};
            background: ${u};
            color: ${d};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${v};
        }
    `,SearchBar:y.section`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            input {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                padding: 0 12px;
                border: 1px solid ${l};
                background: ${u};
                color: ${d};
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input::placeholder {
                color: ${w};
            }
            input:focus {
                border-color: ${o};
                outline: none;
                box-shadow: 0 0 0 3px ${v};
            }

            .btnGhost {
                height: 40px;
                padding: 0 12px;
                border-radius: 8px;
                border: 1px solid ${l};
                background: ${u};
                color: ${d};
                font-weight: 600;
            }
            .btnGhost:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${v};
            }
        }

        .chips {
            margin-top: 12px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 8px;
            align-items: center;
            .chipLabel {
                color: ${w};
                font-size: 12px;
                padding: 0 4px;
            }
            .chipWrap {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .chip {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${l};
                border-radius: 999px;
                padding: 6px 10px;
                background: ${u};
                color: ${d};
                font-weight: 600;
                font-size: 12px;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    box-shadow 0.25s;
            }
            .chip .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
            }
            .chip.on {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${v};
            }
            .chipActions .small {
                padding: 6px 10px;
                border-radius: 8px;
            }
            .btnGhost.small {
                border: 1px solid ${l};
                background: ${u};
                color: ${d};
            }
            .btnGhost.small:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${v};
            }
        }

        .stats {
            margin-top: 10px;
            color: ${d};
            font-size: 13px;
        }
        .stats .muted {
            color: ${w};
            margin-left: 8px;
        }
    `,Columns:y.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .quick ul {
            list-style: none;
            padding: 0;
            margin: 8px 0 0;
            display: grid;
            gap: 8px;
        }
        .quick a {
            display: block;
            border: 1px solid ${l};
            background: ${u};
            color: ${d};
            border-radius: 10px;
            padding: 8px 10px;
        }
        .quick a:hover {
            border-color: ${o};
            color: ${o};
        }
    `,Group:y.section`
        padding: 14px 16px;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
            h3 {
                font-size: 14px;
                letter-spacing: 0.3px;
            }
            .count {
                color: ${o};
                border: 1px solid ${l};
                background: color-mix(in oklab, ${o} 10%, transparent);
                padding: 2px 8px;
                border-radius: 999px;
                font-weight: 700;
                font-size: 12px;
            }
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${l};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${u};
            transition: border-color 0.25s, background 0.25s, transform 0.06s;
        }
        .row:hover {
            border-color: ${o};
            background: color-mix(in oklab, ${o} 6%, transparent);
        }

        .main .title {
            color: ${d};
            font-weight: 700;
        }
        .main .title:hover {
            color: ${o};
        }
        .sub {
            color: ${w};
            font-size: 12px;
            margin-top: 2px;
        }

        .meta {
            display: grid;
            gap: 6px;
            justify-items: end;
            .when {
                color: ${w};
                font-size: 12px;
            }
            .actions {
                display: flex;
                gap: 6px;
            }
            .btnGhost.small {
                border: 1px solid ${l};
                background: ${u};
                color: ${d};
                border-radius: 8px;
                padding: 6px 10px;
                font-weight: 600;
                font-size: 12px;
                transition: border-color 0.25s, box-shadow 0.25s, color 0.25s;
            }
            .btnGhost.small:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${v};
            }
        }
    `,Empty:y.div`
        padding: 24px;
        text-align: center;
        .big {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${w};
        }
        .helpLinks {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .helpLinks a {
            border: 1px solid ${l};
            background: ${u};
            color: ${d};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .helpLinks a:hover {
            border-color: ${o};
            color: ${o};
        }
    `},A=(p,m=!1)=>{const a=p instanceof Date?p:new Date(p),j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=T=>String(T).padStart(2,"0"),S=`${j[a.getDay()]} ${x[a.getMonth()]} ${b(a.getDate())} ${a.getFullYear()}`;return m?`${S} ${b(a.getHours())}:${b(a.getMinutes())}:${b(a.getSeconds())}hrs`:S},I=p=>{const m=p instanceof Date?p:new Date(p),a=j=>String(j).padStart(2,"0");return`${a(m.getHours())}:${a(m.getMinutes())}:${a(m.getSeconds())}hrs`},U={customers:[{id:"CUST-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",tags:["priority","wholesale"],updatedAt:"2025-10-04T10:15:10+05:30"},{id:"CUST-1002",name:"Isha Verma",email:"isha.verma@example.com",phone:"+91 98765 41230",tags:["north"],updatedAt:"2025-09-20T18:05:00+05:30"}],orders:[{id:"ORD-3456",customerId:"CUST-1001",customer:"Aarav Sharma",status:"Packed",total:"₹ 84,300",updatedAt:"2025-10-03T19:28:20+05:30"},{id:"ORD-3461",customerId:"CUST-1002",customer:"Isha Verma",status:"Pending",total:"₹ 12,990",updatedAt:"2025-09-29T16:05:21+05:30"}],products:[{id:"PROD-AX12",name:"Thermal Label Printer X12",sku:"AX12-THERM",category:"Hardware",price:"₹ 8,999",updatedAt:"2025-09-28T09:00:00+05:30"},{id:"PROD-SCAN9",name:"Handheld Scanner S9",sku:"SCAN-9",category:"Hardware",price:"₹ 4,499",updatedAt:"2025-09-11T15:21:15+05:30"}],medicines:[{id:"MED-AMOX-500",name:"Amoxicillin 500mg",form:"Capsule",strength:"500mg",mrp:"₹ 120",manufacturer:"ZenPharma",updatedAt:"2025-10-01T13:11:11+05:30"},{id:"MED-PARA-650",name:"Paracetamol 650mg",form:"Tablet",strength:"650mg",mrp:"₹ 35",manufacturer:"Bluewave Biotech",updatedAt:"2025-09-23T08:45:00+05:30"}],invoices:[{id:"INV-2031",orderId:"ORD-3456",customer:"Aarav Sharma",amount:"₹ 84,300",status:"Sent",updatedAt:"2025-10-03T19:29:01+05:30"},{id:"INV-2036",orderId:"ORD-3461",customer:"Isha Verma",amount:"₹ 12,990",status:"Draft",updatedAt:"2025-09-29T16:15:00+05:30"}],vendors:[{id:"VEND-901",name:"Shakti Med Supplies",city:"Mumbai",contact:"+91 99871 22334",updatedAt:"2025-09-26T12:40:00+05:30"},{id:"VEND-902",name:"NorthChem Traders",city:"Delhi",contact:"+91 99111 44556",updatedAt:"2025-09-14T09:40:00+05:30"}]},N=[{key:"customers",label:"Customers",color:"var(--accent)"},{key:"orders",label:"Orders",color:"var(--accent)"},{key:"products",label:"Products",color:"var(--accent)"},{key:"medicines",label:"Medicines",color:"var(--accent)"},{key:"invoices",label:"Invoices",color:"var(--accent)"},{key:"vendors",label:"Vendors",color:"var(--accent)"}],q=()=>{const p=P(),m=f.useRef(null),[a,j]=f.useState(""),[x,b]=f.useState(()=>{const t={};return N.forEach(r=>t[r.key]=!0),t}),[S]=f.useState(()=>new Date);f.useEffect(()=>{const r=new URLSearchParams(p.search).get("q")||"";r&&!a&&j(r)},[]),f.useEffect(()=>{const t=m.current;if(t){const r=requestAnimationFrame(()=>{try{t.focus({preventScroll:!0})}catch{t.focus()}});return()=>cancelAnimationFrame(r)}},[]),f.useEffect(()=>{const t=r=>{var n;const i=navigator.platform.toUpperCase().includes("MAC");(i&&r.metaKey&&r.key.toLowerCase()==="k"||!i&&r.ctrlKey&&r.key.toLowerCase()==="k")&&(r.preventDefault(),(n=m.current)==null||n.focus())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]);const T=t=>b(r=>({...r,[t]:!r[t]})),D=()=>{const t={};N.forEach(r=>t[r.key]=!0),b(t)},L=()=>{const t={};N.forEach(r=>t[r.key]=!1),b(t)},G=()=>j(""),C=f.useMemo(()=>{const t=a.trim().toLowerCase(),r=[],i=(n,$)=>t.length===0||$.some(g=>(n[g]||"").toString().toLowerCase().includes(t));return N.forEach(({key:n,label:$})=>{if(!x[n])return;const g=U[n]||[];let h=[];switch(n){case"customers":h=g.filter(s=>i(s,["id","name","email","phone","tags"])).map(s=>({id:s.id,title:s.name,sub:s.email||s.phone,right:s.id,when:s.updatedAt,to:`/customers/${s.id}`}));break;case"orders":h=g.filter(s=>i(s,["id","customer","status","total"])).map(s=>({id:s.id,title:`${s.id} · ${s.customer}`,sub:`Status: ${s.status} · Total: ${s.total}`,right:s.id,when:s.updatedAt,to:`/orders/${s.id}`}));break;case"products":h=g.filter(s=>i(s,["id","name","sku","category","price"])).map(s=>({id:s.id,title:s.name,sub:`SKU: ${s.sku} · ${s.category} · ${s.price}`,right:s.id,when:s.updatedAt,to:`/products/${s.id}`}));break;case"medicines":h=g.filter(s=>i(s,["id","name","form","strength","manufacturer","mrp"])).map(s=>({id:s.id,title:s.name,sub:`${s.form} · ${s.strength} · ${s.manufacturer} · MRP ${s.mrp}`,right:s.id,when:s.updatedAt,to:`/medicines/${s.id}`}));break;case"invoices":h=g.filter(s=>i(s,["id","orderId","customer","amount","status"])).map(s=>({id:s.id,title:`${s.id} · ${s.customer}`,sub:`Amount: ${s.amount} · ${s.status}`,right:s.id,when:s.updatedAt,to:`/invoices/${s.id}`}));break;case"vendors":h=g.filter(s=>i(s,["id","name","city","contact"])).map(s=>({id:s.id,title:s.name,sub:`${s.city} · ${s.contact}`,right:s.id,when:s.updatedAt,to:`/vendors/${s.id}`}));break;default:h=[]}h.length&&r.push({key:n,label:$,rows:h})}),r},[a,x]),E=C.reduce((t,r)=>t+r.rows.length,0),R=async t=>{var r;try{const i=window.location.origin+"/react-routes-theme/"+t.replace(/^\//,"");await((r=navigator.clipboard)==null?void 0:r.writeText(i))}catch{}},M=()=>{const t={query:a,generatedAt:A(new Date,!0),groups:C.map($=>({group:$.label,count:$.rows.length,items:$.rows}))},r=new Blob([JSON.stringify(t,null,2)],{type:"application/json;charset=utf-8"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=`search-export-${Date.now()}.json`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(i)},O=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(k.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(k.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Global Search"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Indexed: ",A(S,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Local time: ",I(new Date)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:M,title:"Export visible results as JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:O,title:"Print summary",children:"Print"})]})]}),e.jsxs(k.SearchBar,{className:"card",role:"search",children:[e.jsxs("div",{className:"row",children:[e.jsx("input",{ref:m,value:a,onChange:t=>j(t.target.value),placeholder:"Search customers, orders, products, invoices… (Ctrl + K)","aria-label":"Search input"}),a?e.jsx("button",{className:"btnGhost",onClick:G,title:"Clear",children:"Clear"}):null]}),e.jsxs("div",{className:"chips",children:[e.jsx("div",{className:"chipLabel",children:"Entities:"}),e.jsx("div",{className:"chipWrap",children:N.map(t=>e.jsxs("button",{className:`chip ${x[t.key]?"on":""}`,onClick:()=>T(t.key),type:"button","aria-pressed":x[t.key],title:x[t.key]?"Enabled":"Disabled",children:[e.jsx("span",{className:"dot",style:{background:t.color}}),t.label]},t.key))}),e.jsxs("div",{className:"chipActions",children:[e.jsx("button",{className:"btnGhost small",onClick:D,children:"All"}),e.jsx("button",{className:"btnGhost small",onClick:L,children:"None"})]})]}),e.jsxs("div",{className:"stats",children:[e.jsxs("span",{children:[E," results"]}),a?e.jsxs("span",{className:"muted",children:["for “",a,"”"]}):e.jsx("span",{className:"muted",children:"type to search"})]})]}),e.jsxs(k.Columns,{children:[e.jsx("section",{className:"col",children:C.length===0?e.jsxs(k.Empty,{className:"card",children:[e.jsx("div",{className:"big",children:"No results"}),e.jsx("div",{className:"muted",children:"Try enabling more entities or changing the query."}),e.jsxs("div",{className:"helpLinks",children:[e.jsx(c,{to:"/customers",children:"Browse Customers"}),e.jsx(c,{to:"/orders",children:"View Orders"}),e.jsx(c,{to:"/products",children:"All Products"}),e.jsx(c,{to:"/reports",children:"Reports"})]})]}):C.map(t=>e.jsxs(k.Group,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:t.label}),e.jsx("span",{className:"count",children:t.rows.length})]}),e.jsx("ul",{className:"list",children:t.rows.map(r=>e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"main",children:[e.jsx(c,{to:r.to,className:"title",children:r.title}),e.jsx("div",{className:"sub",children:r.sub})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"when",title:A(r.when,!0),children:A(r.when)}),e.jsxs("div",{className:"actions",children:[e.jsx(c,{to:r.to,className:"btnGhost small",title:"Open",children:"Open"}),e.jsx("a",{href:r.to,className:"btnGhost small",target:"_blank",rel:"noreferrer",title:"Open in new tab",children:"New Tab"}),e.jsx("button",{className:"btnGhost small",onClick:()=>R(r.to),title:"Copy deep link",children:"Copy Link"})]})]})]},r.id))})]},t.key))}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",id:"search-print-area",children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Query"}),e.jsx("span",{className:"v",children:a||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:A(new Date,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Entities"}),e.jsx("span",{className:"v",children:N.filter(t=>x[t.key]).map(t=>t.label).join(", ")||"None"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:E})]})]}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:["Tip: use ",e.jsx("kbd",{children:"Ctrl"}),"/",e.jsx("kbd",{children:"⌘"})," + ",e.jsx("kbd",{children:"K"})," to focus search."]}),e.jsx("div",{className:"tip",children:"Deep links open respective detail pages with display-only content."})]})]}),e.jsxs("div",{className:"card quick",children:[e.jsx("h3",{children:"Quick Access"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(c,{to:"/customers",children:"Customers"})}),e.jsx("li",{children:e.jsx(c,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(c,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(c,{to:"/medicines",children:"Medicines"})}),e.jsx("li",{children:e.jsx(c,{to:"/reports",children:"Reports"})}),e.jsx("li",{children:e.jsx(c,{to:"/admin/users",children:"Admin · Users"})})]})]})]})]})]})};export{q as default};
