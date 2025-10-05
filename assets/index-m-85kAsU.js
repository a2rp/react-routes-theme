import{d as c,r as l,j as e,N as w}from"./index-CTSbLEdo.js";const p="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",N="var(--card, #111318)",o="var(--border, #23262d)",a="var(--accent, #5aa9ff)",L="var(--accent-soft, rgba(90,169,255,0.15))",x={Page:c.div`
        padding: 24px 0 64px;
        color: ${p};
    `,Header:c.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${i};
        }
        .breadcrumbs .current {
            color: ${p};
        }

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${i};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${N};
            color: ${p};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${L};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnGhost:disabled,
        .btnPrimary:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .small {
            padding: 6px 10px;
        }

        .viewToggle {
            display: flex;
            border: 1px solid ${o};
            border-radius: 10px;
            overflow: hidden;
        }
        .viewToggle .small {
            border: 0;
        }
        .viewToggle .btnGhost.small {
            background: transparent;
        }
    `,Banner:c.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${o};
        border-radius: 10px;
        background: color-mix(in oklab, ${a} 10%, transparent);
        color: ${p};
    `,Toolbar:c.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            @media (min-width: 900px) {
                grid-template-columns: 1.2fr 0.6fr 0.6fr;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${i};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .chip {
            border: 1px solid ${o};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${p};
            cursor: pointer;
            background: color-mix(in oklab, ${a} 7%, transparent);
            user-select: none;
        }
        .chip.active {
            box-shadow: 0 0 0 3px ${L};
            border-color: ${a};
            color: ${a};
        }
        .chip.clear {
            opacity: 0.85;
        }
    `,GridCards:c.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1140px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .category {
            padding: 0;
            overflow: hidden;
            .cover {
                width: 100%;
                height: 140px;
                background: ${N};
                background-size: cover;
                background-position: center;
                border-bottom: 1px solid ${o};
            }
            .body {
                padding: 12px 14px 8px;
                .topline {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                }
                .name {
                    font-size: 16px;
                }
                .status {
                    font-size: 12px;
                    border: 1px solid ${o};
                    padding: 2px 8px;
                    border-radius: 999px;
                    color: ${i};
                    text-transform: capitalize;
                }
                .status.active {
                    color: ${p};
                    border-color: ${a};
                }
                .meta {
                    display: flex;
                    gap: 8px;
                    color: ${i};
                    font-size: 12px;
                    margin-top: 6px;
                }
                .code {
                    font-family: Menlo, Consolas, monospace;
                    font-size: 12px;
                }
                .path {
                    color: ${i};
                    margin-top: 6px;
                    font-size: 12px;
                }
                .tags {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    margin-top: 10px;
                }
                .tag {
                    border: 1px solid ${o};
                    padding: 4px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .dates {
                    margin-top: 10px;
                    color: ${i};
                    font-size: 12px;
                }
            }
            .actions {
                display: flex;
                gap: 8px;
                padding: 10px 14px 14px;
            }
            .btnGhost.small {
                border-radius: 8px;
                padding: 6px 10px;
                border: 1px solid ${o};
                background: ${N};
                color: ${p};
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .btnGhost.small:hover {
                border-color: ${a};
                color: ${a};
            }
        }
    `,TableWrap:c.div`
        overflow: auto;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${N};
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${o};
            color: ${a};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${o};
            vertical-align: middle;
        }
        .cellName {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            background: ${N};
            background-size: cover;
            background-position: center;
            border: 1px solid ${o};
            border-radius: 10px;
        }
        .name {
            font-weight: 600;
        }
        .path {
            color: ${i};
            font-size: 12px;
        }
        .code {
            font-family: Menlo, Consolas, monospace;
            font-size: 12px;
        }
        .num {
            text-align: right;
        }
        .pill {
            font-size: 12px;
            border: 1px solid ${o};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${i};
            text-transform: capitalize;
        }
        .pill.active {
            color: ${p};
            border-color: ${a};
        }
        .actions {
            display: flex;
            gap: 6px;
        }
        .btnGhost.tiny {
            border-radius: 8px;
            padding: 4px 8px;
            border: 1px solid ${o};
            background: ${N};
            color: ${p};
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost.tiny:hover {
            border-color: ${a};
            color: ${a};
        }
    `,Empty:c.div`
        text-align: center;
        padding: 28px 16px;
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${i};
        }
    `,EmptyPad:c.div`
        text-align: center;
        padding: 24px 8px;
        h4 {
            margin-bottom: 6px;
        }
        p {
            color: ${i};
        }
    `,Footnote:c.div`
        display: flex;
        gap: 16px;
        margin-top: 12px;
        color: ${i};
        font-size: 12px;
    `},g=(h,$)=>{const s=h instanceof Date?h:new Date(h),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=f=>String(f).padStart(2,"0"),u=`${v[s.getDay()]} ${m[s.getMonth()]} ${j(s.getDate())} ${s.getFullYear()}`;return $?`${u} ${j(s.getHours())}:${j(s.getMinutes())}:${j(s.getSeconds())}hrs`:u},b=[{id:"CAT-ELC",name:"Electronics",code:"ELC",parent:null,productCount:248,attributesCount:12,path:"Electronics",tags:["Top","Seasonal"],cover:"/covers/electronics.jpg",createdAt:"2025-07-18T11:42:12+05:30",updatedAt:"2025-10-04T15:38:20+05:30",status:"active"},{id:"CAT-MOB",name:"Mobile Phones",code:"MOB",parent:"CAT-ELC",productCount:96,attributesCount:9,path:"Electronics › Mobile Phones",tags:["Hot"],cover:"/covers/mobiles.jpg",createdAt:"2025-08-02T09:10:01+05:30",updatedAt:"2025-10-04T13:25:11+05:30",status:"active"},{id:"CAT-LAP",name:"Laptops",code:"LAP",parent:"CAT-ELC",productCount:72,attributesCount:11,path:"Electronics › Laptops",tags:["B2B"],cover:"/covers/laptops.jpg",createdAt:"2025-06-22T10:03:21+05:30",updatedAt:"2025-10-03T19:12:44+05:30",status:"active"},{id:"CAT-ACC",name:"Accessories",code:"ACC",parent:"CAT-ELC",productCount:80,attributesCount:7,path:"Electronics › Accessories",tags:["Add-on"],cover:"/covers/accessories.jpg",createdAt:"2025-03-11T18:28:19+05:30",updatedAt:"2025-10-01T10:48:10+05:30",status:"active"},{id:"CAT-HHC",name:"Health & Hygiene",code:"HHC",parent:null,productCount:56,attributesCount:6,path:"Health & Hygiene",tags:["Essentials"],cover:"/covers/health.jpg",createdAt:"2025-02-01T08:17:55+05:30",updatedAt:"2025-09-29T16:02:01+05:30",status:"active"},{id:"CAT-DIS",name:"Discontinued",code:"DIS",parent:null,productCount:14,attributesCount:3,path:"Discontinued",tags:["Archive"],cover:"/covers/archive.jpg",createdAt:"2024-12-12T12:30:10+05:30",updatedAt:"2025-08-18T12:00:00+05:30",status:"inactive"}],M="/react-routes-theme/".replace(/\/+$/,""),O=()=>{const[h,$]=l.useState(""),[s,v]=l.useState("all"),[m,j]=l.useState("updated-desc"),[u,f]=l.useState(""),[C,A]=l.useState(!0),k=l.useRef(null);l.useEffect(()=>{if(!u)return;const t=setTimeout(()=>f(""),3e3);return()=>clearTimeout(t)},[u]);const y=l.useMemo(()=>{let t=b.slice();s!=="all"&&(t=t.filter(r=>r.status===s));const n=h.trim().toLowerCase();return n&&(t=t.filter(r=>`${r.name} ${r.code} ${r.path} ${r.tags.join(" ")}`.toLowerCase().includes(n))),t.sort((r,d)=>m==="name-asc"?r.name.localeCompare(d.name):m==="name-desc"?d.name.localeCompare(r.name):m==="updated-asc"?new Date(r.updatedAt)-new Date(d.updatedAt):new Date(d.updatedAt)-new Date(r.updatedAt)),t},[h,s,m]),T=l.useMemo(()=>b.filter(t=>t.status==="active").length,[]),S=l.useMemo(()=>b.filter(t=>t.status!=="active").length,[]),E=l.useMemo(()=>b.reduce((t,n)=>t+n.productCount,0),[]),G=async t=>{const n=`${window.location.origin}${M}/categories?cat=${encodeURIComponent(t)}`;try{await navigator.clipboard.writeText(n),f("Link copied")}catch{f("Could not copy link")}},P=()=>{const t={exportedAt:g(new Date,!0),count:y.length,items:y},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),d=document.createElement("a");d.href=r,d.download=`categories-export-${Date.now()}.json`,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(r),f("Export ready")},z=()=>{k.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(x.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Categories"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(w,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Categories"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total Categories: ",b.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Active: ",T]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Inactive: ",S]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Mapped Products: ",E]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsxs("div",{className:"viewToggle",role:"group","aria-label":"View mode",children:[e.jsx("button",{className:C?"btnPrimary small":"btnGhost small",onClick:()=>A(!0),title:"Grid view",children:"Grid"}),e.jsx("button",{className:C?"btnGhost small":"btnPrimary small",onClick:()=>A(!1),title:"Table view",children:"Table"})]}),e.jsx("button",{className:"btnGhost",onClick:z,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:P,title:"Export as JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",title:"Demo only",disabled:!0,children:"New Category"})]})]}),u?e.jsx(x.Banner,{role:"status","aria-live":"polite",children:u}):null,e.jsxs(x.Toolbar,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"q",children:"Search"}),e.jsx("input",{id:"q",value:h,onChange:t=>$(t.target.value),placeholder:"Search name, code, tags…"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"status",children:"Status"}),e.jsxs("select",{id:"status",value:s,onChange:t=>v(t.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"sort",children:"Sort"}),e.jsxs("select",{id:"sort",value:m,onChange:t=>j(t.target.value),children:[e.jsx("option",{value:"updated-desc",children:"Updated (new → old)"}),e.jsx("option",{value:"updated-asc",children:"Updated (old → new)"}),e.jsx("option",{value:"name-asc",children:"Name A → Z"}),e.jsx("option",{value:"name-desc",children:"Name Z → A"})]})]})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:`chip ${s==="all"?"active":""}`,onClick:()=>v("all"),children:"All"}),e.jsx("span",{className:`chip ${s==="active"?"active":""}`,onClick:()=>v("active"),children:"Active"}),e.jsx("span",{className:`chip ${s==="inactive"?"active":""}`,onClick:()=>v("inactive"),children:"Inactive"}),h&&e.jsx("span",{className:"chip clear",onClick:()=>$(""),children:"Clear Search"})]})]}),C?e.jsxs(x.GridCards,{children:[y.map(t=>e.jsxs("div",{className:"card category",children:[e.jsx("div",{className:"cover",style:{backgroundImage:`url(${t.cover||"/covers/placeholder.jpg"})`}}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"topline",children:[e.jsx("h3",{className:"name",children:t.name}),e.jsx("span",{className:`status ${t.status}`,children:t.status})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"code",children:t.code}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[t.productCount," items"]})]}),e.jsx("div",{className:"path",children:t.path}),e.jsx("div",{className:"tags",children:t.tags.map(n=>e.jsx("span",{className:"tag",children:n},n))}),e.jsx("div",{className:"dates",children:e.jsxs("span",{children:["Updated: ",g(t.updatedAt,!0)]})})]}),e.jsxs("div",{className:"actions",children:[e.jsx(w,{to:"/products",className:"btnGhost small",title:"Open products",children:"Open"}),e.jsx("button",{className:"btnGhost small",onClick:()=>G(t.id),title:"Copy deep link",children:"Copy Link"})]})]},t.id)),!y.length&&e.jsxs(x.Empty,{className:"card",children:[e.jsx("h3",{children:"No categories match."}),e.jsx("p",{children:"Try changing filters or clearing the search."})]})]}):e.jsx(x.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Parent"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Attributes"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{children:"Actions"})]})}),e.jsxs("tbody",{children:[y.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"cellName",children:[e.jsx("div",{className:"avatar",style:{backgroundImage:`url(${t.cover||"/covers/placeholder.jpg"})`}}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"path",children:t.path})]})]})}),e.jsx("td",{children:e.jsx("span",{className:"code",children:t.code})}),e.jsx("td",{children:t.parent||"-"}),e.jsx("td",{className:"num",children:t.productCount}),e.jsx("td",{className:"num",children:t.attributesCount}),e.jsx("td",{children:e.jsx("span",{className:`pill ${t.status}`,children:t.status})}),e.jsx("td",{children:g(t.updatedAt,!0)}),e.jsxs("td",{className:"actions",children:[e.jsx(w,{to:"/products",className:"btnGhost tiny",title:"Open products",children:"Open"}),e.jsx("button",{className:"btnGhost tiny",onClick:()=>G(t.id),title:"Copy deep link",children:"Copy"})]})]},t.id)),!y.length&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsxs(x.EmptyPad,{children:[e.jsx("h4",{children:"No categories found."}),e.jsx("p",{children:"Adjust filters to see results."})]})})})]})]})}),e.jsxs("div",{id:"search-print-area",ref:k,className:"card",style:{marginTop:16},children:[e.jsx("h3",{children:"Categories Summary"}),e.jsxs("div",{className:"summaryGrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Exported"}),e.jsx("div",{className:"v",children:g(new Date,!0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:b.length})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Active"}),e.jsx("div",{className:"v",children:T})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Inactive"}),e.jsx("div",{className:"v",children:S})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Mapped Products"}),e.jsx("div",{className:"v",children:E})]})]}),e.jsx("div",{className:"lines",children:b.slice(0,6).map(t=>e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"name",children:t.name}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{className:"meta",children:[t.code," / ",t.productCount," items / ",g(t.updatedAt)]})]},t.id))})]}),e.jsxs(x.Footnote,{className:"muted",children:[e.jsxs("div",{children:["Build: ",g("2025-10-05T12:59:14.577Z",!0)]}),e.jsxs("div",{children:["Commit: ",g("2025-10-05T18:29:08+05:30",!0)]})]})]})};export{O as default};
