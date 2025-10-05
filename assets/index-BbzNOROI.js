import{d as A,r as g,j as e,R as z,N as f}from"./index-CvWKwy17.js";const y="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",b="var(--card, #111318)",p="var(--border, #23262d)",r="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",N={Page:A.div`
        padding: 18px 0 64px;
        color: ${y};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${u};
        }
        .breadcrumbs .current {
            color: ${y};
        }
    `,Header:A.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 14px;
        border: 1px solid ${p};
        border-radius: 12px;
        background: ${b};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${u};
            font-size: 12px;
        }
        .right {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-content: center;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${p};
            background: ${b};
            color: ${y};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Tools:A.div`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        gap: 16px;
        padding: 14px 16px;
        margin-bottom: 14px;
        border: 1px solid ${p};
        border-radius: 12px;
        background: ${b};

        .search {
            display: grid;
            grid-template-columns: 80px 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .search label {
            color: ${u};
            font-size: 12px;
        }
        .search input {
            height: 36px;
        }
        .small {
            padding: 6px 10px;
        }
        .legend {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            color: ${u};
            font-size: 12px;
        }
        .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${p};
            display: inline-block;
            margin-right: 6px;
        }
        .legend .asset {
            background: color-mix(in oklab, ${r} 22%, transparent);
        }
        .legend .liability {
            background: color-mix(in oklab, ${r} 16%, transparent);
        }
        .legend .equity {
            background: color-mix(in oklab, ${r} 18%, transparent);
        }
        .legend .income {
            background: color-mix(in oklab, ${r} 20%, transparent);
        }
        .legend .expense {
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
    `,Stats:A.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(6, minmax(140px, 1fr));
        margin-bottom: 14px;
        @media (max-width: 1300px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .stat {
            padding: 12px 14px;
            border: 1px solid ${p};
            border-radius: 12px;
            background: ${b};
            box-shadow: var(--shadow);
        }
        .stat .label {
            color: ${u};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .stat .value {
            font-size: 22px;
            font-weight: 700;
        }
    `,Grid:A.div`
        display: grid;
        grid-template-columns: 2.2fr 1fr;
        gap: 16px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .tree.card {
            padding: 0;
            border: 1px solid ${p};
            border-radius: 12px;
            background: ${b};
            overflow: hidden;
        }

        .thead,
        .row {
            display: grid;
            grid-template-columns: 220px 120px 1.2fr 120px 110px 110px 1fr 220px 200px;
            align-items: center;
        }
        @media (max-width: 1300px) {
            .thead,
            .row {
                grid-template-columns: 220px 110px 1.1fr 110px 90px 90px 1fr 200px 160px;
            }
        }
        @media (max-width: 1024px) {
            .thead,
            .row {
                grid-template-columns: 200px 100px 1fr 100px 90px 90px 1fr 180px 140px;
            }
        }
        @media (max-width: 860px) {
            .thead,
            .row {
                grid-template-columns: 200px 90px 1fr 90px 80px 80px 1fr 160px 120px;
            }
        }

        .thead {
            padding: 10px 12px;
            border-bottom: 1px solid ${p};
            background: color-mix(in oklab, ${b} 96%, transparent);
            color: ${u};
            position: sticky;
            top: 0;
            z-index: 5;
        }

        .tbody {
            padding: 6px 0;
        }

        .row {
            padding: 8px 12px;
            border-bottom: 1px solid ${p};
            transition: background 0.2s;
            min-height: 42px; /* ensures visible rows */
        }
        .row:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .tree {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .tree .indent {
            width: calc(var(--d) * 16px);
            display: inline-block;
        }
        .tree .chev {
            border: 1px solid ${p};
            background: ${b};
            color: ${y};
            border-radius: 6px;
            padding: 2px 6px;
            cursor: pointer;
            line-height: 1;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .tree .chev:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        .tree .leaf {
            color: ${u};
        }

        .code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
        }
        .name {
            font-weight: 600;
        }
        .type,
        .normal,
        .status {
            color: ${u};
            font-size: 12px;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .tag {
            border: 1px solid ${p};
            border-radius: 999px;
            padding: 4px 8px;
            background: color-mix(in oklab, ${r} 8%, transparent);
            font-size: 12px;
        }
        .updated {
            color: ${u};
            font-size: 12px;
        }
        .actions {
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .panel {
            display: grid;
            gap: 16px;
        }
        .panel .head {
            padding: 14px 16px;
        }
        .muted {
            color: ${u};
        }

        .summary {
            display: grid;
            gap: 12px;
        }
        .summary .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .summary .k {
            color: ${u};
            font-size: 12px;
        }
        .summary .v {
            color: ${y};
        }
        .summary .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${r};
            border: 1px solid ${p};
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${u};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${p};
            background: ${b};
        }
        .links a:hover {
            color: ${r};
            border-color: ${r};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${p};
            background: ${b};
            color: ${y};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `},j=(c,v)=>{const l=c instanceof Date?c:new Date(c),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=x=>String(x).padStart(2,"0"),o=`${m[l.getDay()]} ${i[l.getMonth()]} ${s(l.getDate())} ${l.getFullYear()}`;return v?`${o} ${s(l.getHours())}:${s(l.getMinutes())}:${s(l.getSeconds())}hrs`:o},E=[{id:"1000",code:"1000",name:"Assets",type:"Asset",normal:"Debit",status:"Active",tags:["group"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"1100",code:"1100",name:"Current Assets",type:"Asset",normal:"Debit",status:"Active",tags:["group","current"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"1110",code:"1110",name:"Cash in Hand",type:"Asset",normal:"Debit",status:"Active",tags:["cash","daily"],createdAt:"2025-09-22T10:10:00+05:30",updatedAt:"2025-10-04T11:20:05+05:30",children:[]},{id:"1120",code:"1120",name:"Bank - HDFC",type:"Asset",normal:"Debit",status:"Active",tags:["bank"],createdAt:"2025-09-22T10:30:00+05:30",updatedAt:"2025-10-04T11:20:05+05:30",children:[]},{id:"1130",code:"1130",name:"Accounts Receivable",type:"Asset",normal:"Debit",status:"Active",tags:["receivable","ar"],createdAt:"2025-09-23T15:00:00+05:30",updatedAt:"2025-10-04T11:40:12+05:30",children:[{id:"1131",code:"1131",name:"AR - Domestic",type:"Asset",normal:"Debit",status:"Active",tags:["ar","india"],createdAt:"2025-09-23T15:10:00+05:30",updatedAt:"2025-10-04T11:40:12+05:30",children:[]},{id:"1132",code:"1132",name:"AR - Export",type:"Asset",normal:"Debit",status:"Active",tags:["ar","export"],createdAt:"2025-09-23T15:20:00+05:30",updatedAt:"2025-10-04T11:40:12+05:30",children:[]}]}]},{id:"1200",code:"1200",name:"Fixed Assets",type:"Asset",normal:"Debit",status:"Active",tags:["group","fixed"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"1210",code:"1210",name:"Plant & Machinery",type:"Asset",normal:"Debit",status:"Active",tags:["depreciable"],createdAt:"2025-09-25T13:55:00+05:30",updatedAt:"2025-10-04T12:00:00+05:30",children:[]},{id:"1220",code:"1220",name:"Office Equipment",type:"Asset",normal:"Debit",status:"Active",tags:["depreciable"],createdAt:"2025-09-25T13:55:00+05:30",updatedAt:"2025-10-04T12:00:00+05:30",children:[]}]}]},{id:"2000",code:"2000",name:"Liabilities",type:"Liability",normal:"Credit",status:"Active",tags:["group"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"2100",code:"2100",name:"Current Liabilities",type:"Liability",normal:"Credit",status:"Active",tags:["group","current"],createdAt:"2025-09-24T08:15:00+05:30",updatedAt:"2025-10-04T12:12:00+05:30",children:[{id:"2110",code:"2110",name:"Accounts Payable",type:"Liability",normal:"Credit",status:"Active",tags:["ap","payable"],createdAt:"2025-09-24T08:15:00+05:30",updatedAt:"2025-10-04T12:12:00+05:30",children:[]},{id:"2120",code:"2120",name:"GST Payable",type:"Liability",normal:"Credit",status:"Active",tags:["gst","compliance"],createdAt:"2025-09-26T10:00:00+05:30",updatedAt:"2025-10-04T12:12:00+05:30",children:[]}]}]},{id:"3000",code:"3000",name:"Equity",type:"Equity",normal:"Credit",status:"Active",tags:["group"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"3100",code:"3100",name:"Share Capital",type:"Equity",normal:"Credit",status:"Active",tags:[],createdAt:"2025-09-27T12:00:00+05:30",updatedAt:"2025-10-04T12:12:00+05:30",children:[]},{id:"3200",code:"3200",name:"Retained Earnings",type:"Equity",normal:"Credit",status:"Active",tags:[],createdAt:"2025-09-27T12:00:00+05:30",updatedAt:"2025-10-04T12:12:00+05:30",children:[]}]},{id:"4000",code:"4000",name:"Income",type:"Income",normal:"Credit",status:"Active",tags:["group"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"4100",code:"4100",name:"Sales",type:"Income",normal:"Credit",status:"Active",tags:["primary"],createdAt:"2025-09-28T14:00:00+05:30",updatedAt:"2025-10-04T12:20:00+05:30",children:[{id:"4110",code:"4110",name:"Domestic Sales",type:"Income",normal:"Credit",status:"Active",tags:[],createdAt:"2025-09-28T14:20:00+05:30",updatedAt:"2025-10-04T12:20:00+05:30",children:[]},{id:"4120",code:"4120",name:"Export Sales",type:"Income",normal:"Credit",status:"Active",tags:[],createdAt:"2025-09-28T14:20:00+05:30",updatedAt:"2025-10-04T12:20:00+05:30",children:[]}]},{id:"4200",code:"4200",name:"Other Income",type:"Income",normal:"Credit",status:"Active",tags:[],createdAt:"2025-09-28T14:00:00+05:30",updatedAt:"2025-10-04T12:20:00+05:30",children:[]}]},{id:"5000",code:"5000",name:"Expense",type:"Expense",normal:"Debit",status:"Active",tags:["group"],createdAt:"2025-09-21T09:25:10+05:30",updatedAt:"2025-10-04T11:15:22+05:30",children:[{id:"5100",code:"5100",name:"COGS",type:"Expense",normal:"Debit",status:"Active",tags:[],createdAt:"2025-09-29T09:00:00+05:30",updatedAt:"2025-10-04T12:22:00+05:30",children:[]},{id:"5200",code:"5200",name:"Operating Expenses",type:"Expense",normal:"Debit",status:"Active",tags:["opex"],createdAt:"2025-09-29T09:00:00+05:30",updatedAt:"2025-10-04T12:22:00+05:30",children:[{id:"5210",code:"5210",name:"Salaries",type:"Expense",normal:"Debit",status:"Active",tags:[],createdAt:"2025-09-29T09:20:00+05:30",updatedAt:"2025-10-04T12:22:00+05:30",children:[]},{id:"5220",code:"5220",name:"Rent",type:"Expense",normal:"Debit",status:"Active",tags:[],createdAt:"2025-09-29T09:20:00+05:30",updatedAt:"2025-10-04T12:22:00+05:30",children:[]},{id:"5230",code:"5230",name:"Utilities",type:"Expense",normal:"Debit",status:"Active",tags:[],createdAt:"2025-09-29T09:20:00+05:30",updatedAt:"2025-10-04T12:22:00+05:30",children:[]}]}]}],I=(c,v=null,l=0,m=[])=>(c.forEach(i=>{var s;m.push({...i,parentId:v,depth:l}),(s=i.children)!=null&&s.length&&I(i.children,i.id,l+1,m)}),m),F=c=>{const v=["code","name","type","normal","status","tags","parentCode","createdAt","updatedAt"].join(","),l=new Map(c.map(s=>[s.id,s])),m=s=>{if(s==null)return"";const o=String(s);return o.includes(",")||o.includes('"')||o.includes(`
`)?`"${o.replace(/"/g,'""')}"`:o},i=c.map(s=>{var o;return[s.code,s.name,s.type,s.normal,s.status,(s.tags||[]).join("|"),s.parentId&&((o=l.get(s.parentId))==null?void 0:o.code)||"",s.createdAt,s.updatedAt].map(m).join(",")});return[v,...i].join(`
`)},U=()=>{const[c,v]=g.useState(""),[l,m]=g.useState(()=>({})),[i,s]=g.useState(null),o=g.useRef(null),x=g.useMemo(()=>I(E),[]),G=g.useMemo(()=>{const a=d=>x.filter(t=>t.type===d).length;return[{label:"Assets",value:a("Asset")},{label:"Liabilities",value:a("Liability")},{label:"Equity",value:a("Equity")},{label:"Income",value:a("Income")},{label:"Expense",value:a("Expense")},{label:"Total Accounts",value:x.length}]},[x]),S=g.useCallback(a=>{if(!c.trim())return!0;const d=c.trim().toLowerCase(),t=[a.code,a.name,a.type,a.normal,a.status,...a.tags||[]].join(" ").toLowerCase();return d.split(/\s+/).every(n=>t.includes(n))},[c]),k=g.useMemo(()=>{const a=new Map,d=t=>{const n=S(t),w=(t.children||[]).map(d).some(Boolean),h=n||w;return a.set(t.id,h),h};return E.forEach(d),a},[S]);g.useEffect(()=>{if(!c.trim())return;const a={...l},d=new Map(x.map(t=>[t.id,t]));x.forEach(t=>{if(k.get(t.id)&&t.parentId){let n=d.get(t.parentId);for(;n;)a[n.id]=!1,n=n.parentId?d.get(n.parentId):null}}),m(a)},[c]);const R=()=>{const a={};x.forEach(d=>{d.parentId!=null&&(a[d.id]=!1)}),m(a)},M=()=>{const a={};x.forEach(d=>{var t;(t=d.children)!=null&&t.length&&(a[d.id]=!0)}),m(a)},P=()=>{const a=F(x),d=new Blob([a],{type:"text/csv;charset=utf-8"}),t=URL.createObjectURL(d),n=document.createElement("a");n.href=t,n.download=`chart-of-accounts-${Date.now()}.csv`,document.body.appendChild(n),n.click(),n.remove(),URL.revokeObjectURL(t)},q=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},D=g.useCallback((a,d=0)=>a.map(t=>{var w;if(!k.get(t.id))return null;const n=(((w=t.children)==null?void 0:w.length)||0)>0,$=!!l[t.id];return e.jsxs(z.Fragment,{children:[e.jsxs("div",{className:"row",id:`acc-${t.code}`,onClick:()=>s(t),role:"button",tabIndex:0,onKeyDown:h=>{h.key==="Enter"&&s(t)},children:[e.jsxs("div",{className:"tree",children:[e.jsx("span",{className:"indent","aria-hidden":"true",style:{"--d":d}}),n?e.jsx("button",{className:"chev","aria-label":$?"Expand":"Collapse",onClick:h=>{h.stopPropagation(),m(T=>({...T,[t.id]:!T[t.id]}))},children:$?"▸":"▾"}):e.jsx("span",{className:"leaf","aria-hidden":"true",children:"•"})]}),e.jsx("div",{className:"code",children:t.code}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"type",children:t.type}),e.jsx("div",{className:"normal",children:t.normal}),e.jsx("div",{className:"status",children:t.status}),e.jsx("div",{className:"tags",children:(t.tags||[]).map(h=>e.jsx("span",{className:"tag",children:h},h))}),e.jsx("div",{className:"updated",children:j(t.updatedAt,!0)}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost small",onClick:h=>{var L;h.stopPropagation();const T=`${location.origin}/react-routes-theme/finance/chart-of-accounts#acc-${t.code}`;(L=navigator.clipboard)==null||L.writeText(T)},children:"Copy Link"}),e.jsx("button",{className:"btnGhost small",disabled:!0,title:"Demo: edit disabled",children:"Details"})]})]}),n&&!$?D(t.children,d+1):null]},t.id)}),[l,k]);return g.useEffect(()=>{if(location.hash){const a=location.hash.replace("#acc-",""),d=x.find(t=>t.code===a);d&&s(d)}},[x]),e.jsxs(N.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Chart of Accounts"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(f,{to:"/finance",children:"Finance"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Chart of Accounts"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Snapshot: ",j(new Date)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Server Time: ",j(new Date,!0)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo: disabled",children:"New Account"}),e.jsx("button",{className:"btnGhost",onClick:R,children:"Expand All"}),e.jsx("button",{className:"btnGhost",onClick:M,children:"Collapse All"}),e.jsx("button",{className:"btnPrimary",onClick:P,children:"Export CSV"}),e.jsx("button",{className:"btnGhost",onClick:q,children:"Print"})]})]}),e.jsxs(N.Tools,{className:"card",children:[e.jsxs("div",{className:"search",children:[e.jsx("label",{htmlFor:"coa-search",children:"Search"}),e.jsx("input",{id:"coa-search",placeholder:"Search code, name, type, tags…",value:c,onChange:a=>v(a.target.value)}),c&&e.jsx("button",{className:"btnGhost small",onClick:()=>v(""),children:"Clear"})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot asset"})," Asset",e.jsx("span",{className:"dot liability"})," Liability",e.jsx("span",{className:"dot equity"})," Equity",e.jsx("span",{className:"dot income"})," Income",e.jsx("span",{className:"dot expense"})," Expense"]})]}),e.jsx(N.Stats,{children:G.map(a=>e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"label",children:a.label}),e.jsx("div",{className:"value",children:a.value})]},a.label))}),e.jsxs(N.Grid,{children:[e.jsxs("section",{className:"tree card",id:"search-print-area",ref:o,children:[e.jsxs("header",{className:"thead sticky",children:[e.jsx("div",{className:"tree",children:"Tree"}),e.jsx("div",{className:"code",children:"Code"}),e.jsx("div",{className:"name",children:"Name"}),e.jsx("div",{className:"type",children:"Type"}),e.jsx("div",{className:"normal",children:"Normal"}),e.jsx("div",{className:"status",children:"Status"}),e.jsx("div",{className:"tags",children:"Tags"}),e.jsx("div",{className:"updated",children:"Updated"}),e.jsx("div",{className:"actions",children:"Actions"})]}),e.jsx("div",{className:"tbody",children:D(E)})]}),e.jsxs("aside",{className:"panel",children:[e.jsxs("div",{className:"card head",children:[e.jsx("h3",{children:"Account Summary"}),i?e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Code"}),e.jsx("div",{className:"v",children:i.code})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Name"}),e.jsx("div",{className:"v",children:i.name})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Type"}),e.jsx("div",{className:"v",children:i.type})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Normal"}),e.jsx("div",{className:"v",children:i.normal})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:i.status})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Tags"}),e.jsx("div",{className:"v tags",children:(i.tags||[]).length?i.tags.map(a=>e.jsx("span",{className:"tag",children:a},a)):"—"})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Created"}),e.jsx("div",{className:"v",children:j(i.createdAt,!0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Updated"}),e.jsx("div",{className:"v",children:j(i.updatedAt,!0)})]})]}),e.jsxs("div",{className:"row actions",children:[e.jsx("button",{className:"btnGhost",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo: disabled",children:"Edit"})]})]}):e.jsx("p",{className:"muted",children:"Select an account from the list to view details."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Recent Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Structure reviewed"}),e.jsx("div",{className:"muted",children:j("2025-10-04T15:38:20+05:30",!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Code mapping updated"}),e.jsx("div",{className:"muted",children:j("2025-10-02T18:00:00+05:30",!0)})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(f,{to:"/finance/ledgers",children:"Ledgers"})}),e.jsx("li",{children:e.jsx(f,{to:"/finance/journals",children:"Journals"})}),e.jsx("li",{children:e.jsx(f,{to:"/finance/taxes",children:"Taxes"})}),e.jsx("li",{children:e.jsx(f,{to:"/reports/finance",children:"Finance Report"})})]})]})]})]})]})};export{U as default};
