import{d as i,u as _,r as u,j as e,N as l}from"./index-CqBbF2bz.js";const m="var(--bg, #0d1117)",g="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",h="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",v="var(--accent-soft, rgba(90,169,255,0.15))",k="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",E=i.div`
    width: 100%;
    color: ${g};
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 16px;
`,I=i.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: end;

    .left h1 {
        font-size: 26px;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .meta {
        display: flex;
        gap: 12px;
        align-items: center;
        color: ${p};
    }
`,U=i.div`
    display: inline-flex;
    background: ${h};
    border: 1px solid ${n};
    padding: 4px;
    border-radius: 10px;

    button {
        border: none;
        background: transparent;
        color: ${p};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease;
    }
    button:hover {
        color: ${t};
    }
    button.active {
        background: color-mix(in oklab, ${t} 15%, transparent);
        color: ${t};
        box-shadow: 0 0 0 3px ${v} inset;
    }
`,P=i.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${n};
        background: ${h};
        border-radius: 999px;
        text-decoration: none;
        color: ${p};
        font-size: 12px;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;

        &:hover {
            color: ${t};
            border-color: ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
        }
    }
`,z=i.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    border: 1px solid ${n};
    background: ${h};
    border-radius: 12px;
    box-shadow: ${k};
    align-items: center;

    .search input {
        width: 100%;
        height: 40px;
        border: 1px solid ${n};
        background: ${m};
        color: ${g};
        border-radius: 8px;
        padding: 0 12px;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;

        &::placeholder {
            color: ${p};
        }
        &:focus {
            border-color: ${t};
            box-shadow: 0 0 0 3px ${v};
        }
    }

    .filters {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .select {
        display: grid;
        gap: 4px;
        color: ${p};

        select {
            height: 40px;
            border: 1px solid ${n};
            background: ${m};
            color: ${g};
            border-radius: 8px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;

            &:focus {
                border-color: ${t};
                box-shadow: 0 0 0 3px ${v};
            }
        }
    }

    button {
        height: 40px;
        padding: 0 14px;
        border: 1px solid ${n};
        background: ${m};
        color: ${g};
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;

        &:hover {
            border-color: ${t};
            color: ${t};
            background: color-mix(in oklab, ${t} 8%, transparent);
        }
    }
`,O=i.div`
    display: grid;
    grid-template-columns: 2.4fr 1fr 1fr 1.2fr 1.6fr 1.2fr 1.8fr 1.6fr;
    align-items: center;
    padding: 10px 12px;
    font-weight: 600;
    color: ${t};
    position: sticky;
    top: 0;
    background: color-mix(in oklab, ${m} 94%, transparent);
    z-index: 1;
    border-bottom: 1px solid ${n};
`,H=i.section`
    display: grid;
    gap: 10px;
`,G=i.article`
    display: grid;
    grid-template-columns: 2.4fr 1fr 1fr 1.2fr 1.6fr 1.2fr 1.8fr 1.6fr;
    gap: 0;
    border: 1px solid ${n};
    background: ${h};
    border-radius: 12px;
    box-shadow: ${k};
    overflow: hidden;

    &[data-highlight="true"] {
        outline: 2px solid ${t};
        box-shadow: 0 0 0 4px ${v};
    }

    > div {
        padding: 12px;
        border-right: 1px dashed ${n};
    }
    > div:last-child {
        border-right: none;
    }

    .flag .top {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .flag .name {
        margin-top: 4px;
        font-weight: 600;
    }
    .flag .desc {
        margin-top: 6px;
        color: ${p};
    }

    .owner a {
        color: ${g};
    }
    .owner a:hover {
        color: ${t};
    }

    .status {
        display: flex;
        align-items: center;
        gap: 8px;
        .env {
            color: ${p};
        }
    }

    .rollout {
        display: grid;
        gap: 6px;
        align-items: center;
        .pct {
            color: ${p};
            font-size: 12px;
        }
    }

    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;

        .tag {
            display: inline-flex;
            padding: 4px 8px;
            border: 1px solid ${n};
            background: color-mix(in oklab, ${m} 70%, transparent);
            color: ${p};
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;

            &:hover {
                border-color: ${t};
                color: ${t};
                background: color-mix(in oklab, ${t} 10%, transparent);
            }
        }
    }

    .updated {
        display: grid;
        gap: 3px;
        .date {
            font-weight: 600;
        }
        .time {
            color: ${p};
            font-size: 12px;
        }
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .link {
            text-decoration: none;
            color: ${g};
            border-bottom: 1px dashed ${n};
        }
        .link:hover {
            color: ${t};
            border-bottom-color: ${t};
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;

        .ghost {
            background: ${h};
        }

        .toggle {
            background: ${h};
        }

        button {
            border: 1px solid ${n};
            color: ${g};
            border-radius: 8px;
            padding: 8px 10px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        button:hover {
            color: ${t};
            border-color: ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
        }
    }
`,K=i.code`
    background: color-mix(in oklab, ${m} 70%, transparent);
    border: 1px solid ${n};
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 12px;
`,B=i.span`
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${n};
    color: ${g};
    background: ${({["data-on"]:r})=>r==="true"?`color-mix(in oklab, ${t} 12%, transparent)`:"color-mix(in oklab, #888 12%, transparent)"};
`,q=i.span`
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 999px;
    border: 1px solid ${n};
    background: ${t};
`,Q=i.div`
    height: 8px;
    background: color-mix(in oklab, ${m} 65%, transparent);
    border: 1px solid ${n};
    border-radius: 999px;
    overflow: hidden;

    span {
        display: block;
        height: 100%;
        background: ${t};
    }
`,V=i.div`
    position: fixed;
    right: 16px;
    bottom: 16px;
    background: ${h};
    color: ${g};
    border: 1px solid ${n};
    border-radius: 10px;
    padding: 10px 12px;
    box-shadow: ${k};
    z-index: 50;
`,X=i.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 60;
`,W=i.div`
    width: min(560px, 92vw);
    background: ${h};
    border: 1px solid ${n};
    border-radius: 14px;
    box-shadow: ${k};

    header,
    section,
    footer {
        padding: 16px;
    }
    header h3 {
        margin: 0;
    }
    section p {
        color: ${p};
    }
    footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`,J=i.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;

    a {
        color: ${g};
        text-decoration: none;
        border-bottom: 1px dashed ${n};
    }
    a:hover {
        color: ${t};
        border-bottom-color: ${t};
    }
`,N={date:r=>r?new Date(r).toDateString():"",dateTime:r=>{if(!r)return"";const s=new Date(r),x=s.toDateString(),b=[s.getHours(),s.getMinutes(),s.getSeconds()].map(f=>String(f).padStart(2,"0")).join(":");return`${x} ${b}hrs`},time:r=>{if(!r)return"";const s=new Date(r);return`${[s.getHours(),s.getMinutes(),s.getSeconds()].map(b=>String(b).padStart(2,"0")).join(":")}hrs`}},T=[{key:"checkout_new_ui",name:"Checkout — New UI",owner:"Platform",tags:["ui","checkout","experiment"],updatedAt:"2025-10-04T15:38:20+05:30",description:"Modernized checkout experience. Includes condensed address block, smart UPI hints, and order summary in a sticky rail.",env:{production:{state:"on",rollout:25,note:"limited rollout"},staging:{state:"on",rollout:100},development:{state:"on",rollout:100}},links:[{label:"Dashboard",to:"/dashboard"},{label:"Orders",to:"/orders"},{label:"Reports — Sales",to:"/reports/sales"}]},{key:"rx_batch_expiry_banner",name:"RX — Batch Expiry Banner",owner:"Pharmacy",tags:["rx","compliance","expiry"],updatedAt:"2025-10-04T11:22:01+05:30",description:"Shows an inline banner on product detail and order lines if batch expiry is near. Reads from inventory lots.",env:{production:{state:"on",rollout:100},staging:{state:"on",rollout:100},development:{state:"on",rollout:100}},links:[{label:"Inventory — Lots",to:"/inventory/lots"},{label:"Medicines — Expiry Tracker",to:"/medicines/expiry-tracker"},{label:"Reports — Inventory",to:"/reports/inventory"}]},{key:"reports_async_export",name:"Reports — Async Export",owner:"Reporting",tags:["reports","export","queue"],updatedAt:"2025-10-04T09:05:55+05:30",description:"Queues heavy exports and notifies through the notification center. Visual progress only; no background worker in demo.",env:{production:{state:"off",rollout:0},staging:{state:"on",rollout:100},development:{state:"on",rollout:100}},links:[{label:"Reports — Overview",to:"/reports"},{label:"Notifications",to:"/notifications"},{label:"Admin — System Status",to:"/admin/system-status"}]},{key:"inventory_fast_search",name:"Inventory — Fast Search",owner:"Supply Chain",tags:["inventory","search"],updatedAt:"2025-10-03T19:40:08+05:30",description:"Streamlined lookups across SKU, barcode, and batch fields on a unified field. Showcase-only; no API index.",env:{production:{state:"on",rollout:60},staging:{state:"on",rollout:100},development:{state:"on",rollout:100}},links:[{label:"Inventory — Overview",to:"/inventory"},{label:"Products",to:"/products"},{label:"Tools — Playground",to:"/tools/playground"}]},{key:"gst_rounding_fix",name:"Finance — GST Rounding Fix",owner:"Finance",tags:["finance","gst","compliance"],updatedAt:"2025-10-02T14:10:11+05:30",description:"Displays corrected rounding at line-level for invoice previews. Values are pre-computed in fixtures.",env:{production:{state:"on",rollout:100},staging:{state:"on",rollout:100},development:{state:"on",rollout:100}},links:[{label:"Invoices",to:"/invoices"},{label:"Finance — GST Returns",to:"/finance/gst-returns"},{label:"Reports — GST",to:"/reports/gst"}]},{key:"patients_kiosk_mode",name:"Patients — Kiosk Mode",owner:"Clinic",tags:["patients","ux","kiosk"],updatedAt:"2025-10-01T09:00:00+05:30",description:"Large-format UI for front-desk kiosks with simplified touch targets. Demo only.",env:{production:{state:"off",rollout:0},staging:{state:"off",rollout:0},development:{state:"on",rollout:100}},links:[{label:"Patients",to:"/patients"},{label:"Appointments — Calendar",to:"/appointments/calendar"},{label:"Settings — Appearance",to:"/settings/appearance"}]}];function Y(){const[r,s]=u.useState("");return u.useEffect(()=>{if(!r)return;const x=setTimeout(()=>s(""),1800);return()=>clearTimeout(x)},[r]),{note:r,push:s}}function Z({open:r,title:s,message:x,onClose:b}){return r?e.jsx(X,{role:"dialog","aria-modal":"true",children:e.jsxs(W,{className:"card",children:[e.jsx("header",{children:e.jsx("h3",{children:s})}),e.jsxs("section",{children:[e.jsx("p",{children:x}),e.jsxs(J,{children:[e.jsx(l,{to:"/help",children:"Help Center"}),e.jsx(l,{to:"/feedback",children:"Feedback"}),e.jsx(l,{to:"/roadmap",children:"Roadmap"})]})]}),e.jsx("footer",{children:e.jsx("button",{onClick:b,autoFocus:!0,children:"Close"})})]})}):null}function oe(){_();const[r,s]=u.useState("production"),[x,b]=u.useState(""),[f,C]=u.useState("all"),[R,y]=u.useState(!1),{note:j,push:w}=Y(),A=u.useMemo(()=>{const o=new Set;return T.forEach(a=>a.tags.forEach(c=>o.add(c))),["all",...Array.from(o)]},[]),L=u.useMemo(()=>{const o=x.trim().toLowerCase().split(/\s+/).filter(Boolean);return T.filter(a=>{const c=o.length===0||o.every($=>(a.key+" "+a.name+" "+a.owner+" "+a.tags.join(" ")).toLowerCase().includes($)),d=f==="all"||a.tags.includes(f);return c&&d})},[x,f]),D=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>{document.body.classList.remove("print-section-mode")},200)},F=o=>{var d;const a=new URL(window.location.href);a.pathname="/admin/feature-flags",a.search=`?flag=${encodeURIComponent(o)}&env=${encodeURIComponent(r)}`;const c=a.toString();(d=navigator==null?void 0:navigator.clipboard)==null||d.writeText(c).then(()=>w("Deep link copied"),()=>w("Link ready"))},[M,S]=u.useState("");return u.useEffect(()=>{const o=new URLSearchParams(window.location.search),a=o.get("flag"),c=o.get("env");c&&["production","staging","development"].includes(c)&&s(c),a&&S(a);const d=setTimeout(()=>S(""),2500);return()=>clearTimeout(d)},[]),e.jsxs(E,{children:[e.jsxs(I,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Feature Flags"}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:"Environment"}),e.jsx(U,{role:"tablist","aria-label":"Environment",children:["production","staging","development"].map(o=>e.jsx("button",{role:"tab","aria-selected":r===o,className:r===o?"active":"",onClick:()=>s(o),title:`Switch to ${o}`,children:o[0].toUpperCase()+o.slice(1)},o))})]})]}),e.jsxs(P,{children:[e.jsx(l,{to:"/admin/system-status",children:"System Status"}),e.jsx(l,{to:"/admin/audit-log",children:"Audit Log"}),e.jsx(l,{to:"/admin/users",children:"Users"}),e.jsx(l,{to:"/admin/roles",children:"Roles"}),e.jsx(l,{to:"/settings/appearance",children:"Appearance"}),e.jsx(l,{to:"/tools/theme-tokens",children:"Theme Tokens"}),e.jsx(l,{to:"/reports",children:"Reports"}),e.jsx(l,{to:"/dashboard",children:"Dashboard"})]})]}),e.jsxs(z,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",value:x,onChange:o=>b(o.target.value),placeholder:"Search flags, owners, tags…","aria-label":"Search feature flags"})}),e.jsxs("div",{className:"filters",children:[e.jsxs("label",{className:"select",children:[e.jsx("span",{children:"Tag"}),e.jsx("select",{value:f,onChange:o=>C(o.target.value),children:A.map(o=>e.jsx("option",{value:o,children:o},o))})]}),e.jsx("button",{onClick:D,title:"Print list",children:"Print"}),e.jsx("button",{onClick:()=>y(!0),title:"Demo only",children:"Request Change"})]})]}),e.jsx("style",{children:`
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
      `}),e.jsxs(H,{id:"search-print-area",children:[e.jsxs(O,{children:[e.jsx("div",{children:"Flag"}),e.jsx("div",{children:"Owner"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Rollout"}),e.jsx("div",{children:"Tags"}),e.jsx("div",{children:"Updated"}),e.jsx("div",{children:"Links"}),e.jsx("div",{children:"Actions"})]}),L.map(o=>{const a=o.env[r]||{state:"off",rollout:0},c=a.state==="on";return e.jsxs(G,{className:"card","data-highlight":M===o.key?"true":"false",children:[e.jsxs("div",{className:"flag",children:[e.jsxs("div",{className:"top",children:[e.jsx(K,{children:o.key}),e.jsx(B,{"data-on":c?"true":"false",children:c?"On":"Off"})]}),e.jsx("div",{className:"name",children:o.name}),e.jsx("div",{className:"desc",children:o.description})]}),e.jsx("div",{className:"owner",children:e.jsx(l,{to:"/admin/users",title:"Open Users",children:o.owner})}),e.jsxs("div",{className:"status",children:[e.jsx(q,{"data-env":r}),e.jsx("span",{className:"env",children:r})]}),e.jsxs("div",{className:"rollout",children:[e.jsx(Q,{"aria-label":"Rollout percentage",children:e.jsx("span",{style:{width:`${a.rollout}%`}})}),e.jsxs("span",{className:"pct",children:[a.rollout,"%"]})]}),e.jsx("div",{className:"tags",children:o.tags.map(d=>e.jsx(l,{to:"/reports",className:"tag",title:`Filter by ${d}`,children:d},d))}),e.jsxs("div",{className:"updated",children:[e.jsx("div",{className:"date",children:N.date(o.updatedAt)}),e.jsx("div",{className:"time",children:N.time(o.updatedAt)})]}),e.jsx("div",{className:"links",children:o.links.map((d,$)=>e.jsx(l,{to:d.to,className:"link",children:d.label},$))}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>F(o.key),title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"toggle",onClick:()=>y(!0),title:"Demo only",children:"Toggle"})]})]},o.key)})]}),j&&e.jsx(V,{role:"status","aria-live":"polite",children:j}),e.jsx(Z,{open:R,title:"Action disabled in demo",message:"This is a display-only preview. Use the navigation links to explore related areas.",onClose:()=>y(!1)})]})}export{oe as default};
