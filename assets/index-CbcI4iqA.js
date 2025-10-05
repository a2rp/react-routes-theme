import{d as b,r as p,j as e,N as I,b as O,c as Z,e as H,f as Q,g as W,h as B,i as J,k as Y}from"./index-DwhKQ_MC.js";const x="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",m="var(--card, #111318)",d="var(--border, #23262d)",s="var(--accent, #5aa9ff)",j="var(--accent-soft, rgba(90,169,255,0.15))",K="var(--radius, 16px)",f={Page:b.div`
        padding: 20px 0 64px;
        color: ${x};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${l};
            }
            .current {
                color: ${x};
            }
        }
    `,Header:b.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;
        padding: 16px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${l};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .right {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }

        .search {
            position: relative;
            width: min(360px, 92vw);
            .ic {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: ${l};
            }
            input {
                width: 100%;
                padding: 10px 12px 10px 34px;
                border-radius: 10px;
                border: 1px solid ${d};
                background: ${m};
                color: ${x};
                transition: border-color 0.25s, box-shadow 0.25s;
                &::placeholder {
                    color: ${l};
                }
                &:focus {
                    border-color: ${s};
                    box-shadow: 0 0 0 3px ${j};
                    outline: none;
                }
            }
        }

        .filters {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .inline {
            display: flex;
            align-items: center;
            gap: 6px;
            .ic {
                color: ${l};
            }
            select {
                padding: 8px 10px;
                background: ${m};
                border: 1px solid ${d};
                color: ${x};
                border-radius: 8px;
                &:focus {
                    border-color: ${s};
                    box-shadow: 0 0 0 3px ${j};
                    outline: none;
                }
            }
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${d};
            background: ${m};
            color: ${x};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${j};
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${s};
            color: ${s};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
    `,TagStrip:b.div`
        padding: 10px 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 8px;
        .label {
            color: ${l};
            font-size: 12px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${m};
            color: ${x};
            cursor: pointer;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s;
        }
        .chip:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${j};
        }
        .chip.on {
            background: color-mix(in oklab, ${s} 10%, transparent);
            border-color: ${s};
            color: ${s};
        }
    `,Grid:b.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);

        @media (min-width: 820px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 1600px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .cell {
            padding: 8px;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid ${d};
            background: ${m};
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .cell:hover {
            transform: translateY(-2px);
            border-color: ${s};
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .open {
            border: 0;
            padding: 0;
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            background: transparent;
            outline: none;
        }
        .open:focus-visible {
            box-shadow: 0 0 0 3px ${j};
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        figcaption .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        figcaption .sub {
            color: ${l};
            font-size: 12px;
            margin-top: 4px;
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .dot {
            opacity: 0.6;
        }
    `,Empty:b.div`
        padding: 28px;
        text-align: center;
        .big {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .muted {
            color: ${l};
        }
    `,PrintWrap:b.section`
        /* Hidden visually; revealed in print via global CSS you provided */
        position: absolute;
        left: -9999px;
        top: -9999px;
        width: 100%;

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .meta {
            color: ${l};
            font-size: 12px;
            margin-bottom: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .sheet {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        @media print {
            .sheet {
                grid-template-columns: repeat(5, 1fr);
            }
        }

        .tile {
            border: 1px solid ${d};
            border-radius: 10px;
            overflow: hidden;
            background: ${m};
            display: grid;
            grid-template-rows: auto 1fr;
        }
        .tile img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            display: block;
        }
        .cap {
            padding: 6px 8px;
        }
        .cap .t {
            font-weight: 700;
        }
        .cap .s,
        .cap .d {
            color: ${l};
            font-size: 12px;
        }
    `,Lightbox:b.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 20px;

        .inner {
            width: min(1200px, 96vw);
            height: min(86vh, 900px);
            border-radius: ${K};
            border: 1px solid ${d};
            background: ${m};
            color: ${x};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        header,
        footer {
            padding: 10px 12px;
            border-bottom: 1px solid ${d};
        }
        footer {
            border-bottom: 0;
            border-top: 1px solid ${d};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .name {
                font-weight: 700;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .btnGhost,
            .btnDanger {
                border-radius: 8px;
                padding: 8px 12px;
                border: 1px solid ${d};
                background: ${m};
                color: ${x};
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: background 0.25s, color 0.25s, border-color 0.25s,
                    box-shadow 0.25s;
            }
            .btnGhost:hover {
                border-color: ${s};
                color: ${s};
                box-shadow: 0 0 0 3px ${j};
            }
            .btnDanger {
                border-color: #ef4444;
                color: #ef4444;
            }
            .btnDanger:hover {
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
                background: color-mix(in oklab, #ef4444 10%, transparent);
            }
        }

        .stage {
            position: relative;
            overflow: hidden;
            display: grid;
            place-items: center;
            img {
                max-width: 100%;
                max-height: 100%;
                transition: transform 0.2s ease;
            }
        }

        footer .meta {
            color: ${l};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .dot {
            opacity: 0.6;
        }
    `},M=n=>{const i=n instanceof Date?n:new Date(n),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=y=>String(y).padStart(2,"0");return`${c[i.getDay()]} ${w[i.getMonth()]} ${g(i.getDate())} ${i.getFullYear()}`},k=n=>{const i=n instanceof Date?n:new Date(n),c=w=>String(w).padStart(2,"0");return`${M(i)} ${c(i.getHours())}:${c(i.getMinutes())}:${c(i.getSeconds())}hrs`},z=[{id:"ph-001",title:"Blue Facade",src:"https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",w:1600,h:1e3,tags:["architecture","city","exterior"],createdAt:"2025-09-26T18:28:57+05:30"},{id:"ph-002",title:"Workspace",src:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",w:1600,h:1067,tags:["interior","people","office"],createdAt:"2025-09-20T10:21:37+05:30"},{id:"ph-003",title:"Morning Lines",src:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",w:1200,h:1600,tags:["abstract","texture"],createdAt:"2025-08-12T08:31:22+05:30"},{id:"ph-004",title:"Calm Sea",src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",w:1600,h:1066,tags:["nature","water","outdoor"],createdAt:"2025-07-04T15:11:05+05:30"},{id:"ph-005",title:"Minimal Chair",src:"https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",w:1200,h:1500,tags:["product","interior","minimal"],createdAt:"2025-06-28T09:48:10+05:30"},{id:"ph-006",title:"City Night",src:"https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",w:1600,h:1067,tags:["city","night","lights"],createdAt:"2025-06-20T20:05:43+05:30"},{id:"ph-007",title:"Soft Gradient",src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",w:1200,h:1500,tags:["abstract","gradient"],createdAt:"2025-05-01T11:15:25+05:30"},{id:"ph-008",title:"Desert Curve",src:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",w:1600,h:1e3,tags:["nature","sand","outdoor"],createdAt:"2025-04-21T14:02:11+05:30"},{id:"ph-009",title:"Concrete Rhythm",src:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",w:1600,h:1067,tags:["architecture","geometry"],createdAt:"2025-04-10T19:32:40+05:30"},{id:"ph-010",title:"Quiet Library",src:"https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1600&auto=format&fit=crop",w:1600,h:1066,tags:["interior","books","quiet"],createdAt:"2025-03-18T10:09:03+05:30"},{id:"ph-011",title:"Product Stand",src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",w:1200,h:1500,tags:["product","studio"],createdAt:"2025-03-08T12:42:19+05:30"},{id:"ph-012",title:"Sky Blocks",src:"https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",w:1600,h:1066,tags:["architecture","minimal","sky"],createdAt:"2025-02-28T17:51:27+05:30"}],U=["architecture","city","interior","people","product","nature","abstract","texture","gradient","night","outdoor","minimal","books","studio","geometry","water","sand","lights","sky","quiet"],X=()=>{const[n,i]=p.useState(""),[c,w]=p.useState([]),[g,y]=p.useState("newest"),[h,v]=p.useState(-1),[G,$]=p.useState(1),S=p.useRef(null),o=p.useMemo(()=>{const t=n.trim().toLowerCase();let a=z.filter(r=>{const u=!t||r.title.toLowerCase().includes(t)||r.tags.join(" ").toLowerCase().includes(t),F=c.length===0||c.every(R=>r.tags.includes(R));return u&&F});return g==="newest"&&a.sort((r,u)=>new Date(u.createdAt)-new Date(r.createdAt)),g==="oldest"&&a.sort((r,u)=>new Date(r.createdAt)-new Date(u.createdAt)),g==="title"&&a.sort((r,u)=>r.title.localeCompare(u.title)),a},[n,c,g]),L=t=>{v(t),$(1)},N=()=>v(-1),C=()=>v(t=>t<=0?o.length-1:t-1),A=()=>v(t=>t>=o.length-1?0:t+1),T=()=>$(t=>Math.min(3,+(t+.25).toFixed(2))),D=()=>$(t=>Math.max(1,+(t-.25).toFixed(2)));p.useEffect(()=>{if(h<0)return;const t=a=>{a.key==="Escape"&&N(),a.key==="ArrowLeft"&&C(),a.key==="ArrowRight"&&A(),a.key==="+"&&T(),a.key==="-"&&D()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[h,o.length]);const q=t=>w(a=>a.includes(t)?a.filter(r=>r!==t):[...a,t]),P=()=>{i(""),w([]),y("newest")},E=p.useCallback(()=>{S.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},[]);return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Gallery"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(I,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Gallery"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",z.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Showing: ",o.length]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"search",children:[e.jsx(O,{size:18,className:"ic"}),e.jsx("input",{type:"text",value:n,onChange:t=>i(t.target.value),placeholder:"Search by title or tags","aria-label":"Search images"})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"inline",children:[e.jsx(Z,{size:18,className:"ic"}),e.jsxs("select",{value:g,onChange:t=>y(t.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"newest",children:"Newest first"}),e.jsx("option",{value:"oldest",children:"Oldest first"}),e.jsx("option",{value:"title",children:"Title A–Z"})]})]}),e.jsx("button",{className:"btnGhost",onClick:P,title:"Clear filters",children:"Clear"}),e.jsxs("button",{className:"btnPrimary",onClick:E,title:"Print contact sheet",children:[e.jsx(H,{size:18})," ",e.jsx("span",{children:"Print"})]})]})]})]}),e.jsxs(f.TagStrip,{className:"card",children:[e.jsx("div",{className:"label",children:"Quick tags"}),e.jsx("div",{className:"chips",children:U.map(t=>e.jsx("button",{className:`chip ${c.includes(t)?"on":""}`,onClick:()=>q(t),"aria-pressed":c.includes(t),children:t},t))})]}),e.jsxs(f.Grid,{children:[o.map((t,a)=>{const r=t.w&&t.h?t.w/t.h:1.5;return e.jsxs("figure",{className:"card cell",style:{aspectRatio:`${r}`},children:[e.jsx("button",{className:"open",onClick:()=>L(a),"aria-label":`Open ${t.title}`,title:"Open",children:e.jsx("img",{src:t.src,alt:t.title,loading:"lazy"})}),e.jsxs("figcaption",{children:[e.jsx("div",{className:"title",children:t.title}),e.jsxs("div",{className:"sub",children:[e.jsx("span",{className:"date",children:k(t.createdAt)}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"tags",children:t.tags.join(", ")})]})]})]},t.id)}),o.length===0&&e.jsxs(f.Empty,{className:"card",children:[e.jsx("div",{className:"big",children:"No results"}),e.jsx("div",{className:"muted",children:"Try a different search or clear filters."})]})]}),e.jsxs(f.PrintWrap,{id:"search-print-area",ref:S,children:[e.jsx("h2",{children:"Contact Sheet — Gallery"}),e.jsxs("div",{className:"meta",children:["Generated: ",k(new Date),e.jsx("span",{className:"dot",children:"•"}),"Items: ",o.length]}),e.jsx("div",{className:"sheet",children:o.map(t=>e.jsxs("div",{className:"tile",children:[e.jsx("img",{src:t.src,alt:t.title}),e.jsxs("div",{className:"cap",children:[e.jsx("div",{className:"t",children:t.title}),e.jsx("div",{className:"s",children:t.tags.join(", ")}),e.jsx("div",{className:"d",children:M(t.createdAt)})]})]},`p-${t.id}`))})]}),h>=0&&e.jsx(f.Lightbox,{role:"dialog","aria-modal":"true",onMouseDown:N,children:e.jsxs("div",{className:"inner card",onMouseDown:t=>t.stopPropagation(),children:[e.jsxs("header",{children:[e.jsx("div",{className:"name",children:o[h].title}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:D,title:"Zoom out",children:e.jsx(Q,{size:18})}),e.jsx("button",{className:"btnGhost",onClick:T,title:"Zoom in",children:e.jsx(W,{size:18})}),e.jsx("button",{className:"btnGhost",onClick:C,title:"Previous",children:e.jsx(B,{size:18})}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Next",children:e.jsx(J,{size:18})}),e.jsx("button",{className:"btnDanger",onClick:N,title:"Close",children:e.jsx(Y,{size:18})})]})]}),e.jsx("div",{className:"stage",children:e.jsx("img",{src:o[h].src,alt:o[h].title,style:{transform:`scale(${G})`}})}),e.jsx("footer",{children:e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:o[h].tags.join(", ")}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:k(o[h].createdAt)})]})})]})})]})};export{X as default};
