import{d as c,a as I,r as m,j as e,N as s,l as P,M as b,b0 as y,b1 as R,e as q,w as E}from"./index-DwhKQ_MC.js";const v="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",d="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",L="var(--accent-soft, rgba(90, 169, 255, 0.15))",C="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",l={Page:c.div`
        color: ${v};
        padding: 18px;

        .muted {
            color: ${o};
        }

        a {
            color: ${v};
            text-decoration: none;
        }
    `,Header:c.header`
        margin-bottom: 18px;

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${o};
            a {
                color: ${o};
            }
            a:hover {
                color: ${t};
            }
        }

        .titleWrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: 8px;

            h1 {
                font-size: 24px;
                line-height: 1.2;
            }

            .meta {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;

                .pill {
                    border: 1px solid ${n};
                    padding: 4px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    background: color-mix(in oklab, ${d} 94%, transparent);
                }
            }
        }
    `,Actions:c.div`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
        flex-wrap: wrap;

        .ghost {
            background: transparent;
        }

        .copied {
            margin-left: 6px;
            color: ${t};
            font-weight: 600;
            font-size: 12px;
        }
    `,Grid:c.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Card:c.section`
        background: ${d};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: ${C};
        padding: 16px;
        min-height: 120px;

        &.span2 {
            grid-column: 1 / -1;
        }

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }

        .offices {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 10px;

            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }

            .office {
                border: 1px dashed ${n};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${d} 96%, transparent);

                .officeHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 6px;
                    h3 {
                        font-size: 16px;
                    }
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        color: ${t};
                    }
                }

                address {
                    font-style: normal;
                    color: ${o};
                }

                .row {
                    display: flex;
                    gap: 14px;
                    margin-top: 8px;
                    .link {
                        display: inline-flex;
                        gap: 6px;
                        align-items: center;
                    }
                    .link:hover {
                        color: ${t};
                    }
                }

                .hours {
                    margin-top: 6px;
                    font-size: 12px;
                    color: ${o};
                }
            }
        }

        .channels {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-top: 16px;

            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }

            .channel {
                border: 1px solid ${n};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${d} 96%, transparent);

                h4 {
                    margin-bottom: 4px;
                    font-size: 14px;
                }
                a {
                    color: ${t};
                }
                span {
                    color: ${o};
                    display: block;
                    margin-top: 4px;
                    font-size: 12px;
                }
            }
        }

        .routes {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            section {
                border: 1px solid ${n};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${d} 96%, transparent);

                h4 {
                    margin-bottom: 8px;
                    font-size: 14px;
                    color: ${v};
                }
                a {
                    display: inline-block;
                    margin: 4px 8px 4px 0;
                    padding: 4px 8px;
                    border-radius: 6px;
                    border: 1px solid ${n};
                    font-size: 12px;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                a:hover {
                    color: ${t};
                    border-color: ${t};
                    background: color-mix(in oklab, ${t} 12%, transparent);
                }
            }
        }

        .people {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .person {
                display: grid;
                grid-template-columns: 48px 1fr;
                gap: 12px;
                border: 1px solid ${n};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${d} 96%, transparent);

                .avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: grid;
                    place-items: center;
                    font-weight: 700;
                    background: color-mix(in oklab, ${t} 18%, transparent);
                    border: 1px solid ${n};
                }

                .info {
                    .row1 {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        flex-wrap: wrap;
                        .role {
                            color: ${o};
                        }
                        .id {
                            color: ${o};
                            font-size: 12px;
                        }
                    }
                    .row2 {
                        margin-top: 6px;
                        display: flex;
                        gap: 8px;
                        flex-wrap: wrap;
                        .chip {
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            border: 1px solid ${n};
                            padding: 4px 8px;
                            border-radius: 8px;
                            background: color-mix(
                                in oklab,
                                ${d} 94%,
                                transparent
                            );
                            font-size: 12px;
                        }
                        .chip:hover {
                            border-color: ${t};
                            color: ${t};
                        }
                        .disabled {
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .messageForm {
            margin-top: 8px;

            .grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;

                @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                }

                .full {
                    grid-column: 1 / -1;
                }

                label {
                    display: block;
                    margin-bottom: 4px;
                    font-weight: 600;
                }
            }

            .formActions {
                margin-top: 10px;
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;

                .ghost {
                    background: transparent;
                }
            }
        }

        .metaGrid {
            margin-top: 6px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .label {
                color: ${o};
                font-size: 12px;
            }
            .value {
                border: 1px solid ${n};
                border-radius: 8px;
                padding: 8px;
                background: color-mix(in oklab, ${d} 96%, transparent);
                word-break: break-all;
            }
        }
    `,ModalBackdrop:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:c.div`
        width: min(520px, 92vw);
        background: ${d};
        border: 1px solid ${n};
        border-radius: 14px;
        box-shadow: ${C};
        padding: 16px;

        h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        p {
            color: ${o};
        }

        .actions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            justify-content: flex-end;
            .ghost {
                background: transparent;
            }
            button:focus-visible,
            .ghost:focus-visible {
                outline: none;
                box-shadow: 0 0 0 3px ${L};
            }
        }
    `},B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function g(i){return i<10?`0${i}`:`${i}`}function M(i){const r=i instanceof Date?i:new Date(i);return`${B[r.getDay()]} ${F[r.getMonth()]} ${g(r.getDate())} ${r.getFullYear()}`}function S(i){const r=i instanceof Date?i:new Date(i),p=g(r.getHours()),j=g(r.getMinutes()),x=g(r.getSeconds());return`${p}:${j}:${x}hrs`}function h(i){const r=i instanceof Date?i:new Date(i);return`${M(r)} ${S(r)}`}const u="search-print-area",G=()=>{const{pathname:i}=I(),[r,p]=m.useState(!1),[j,x]=m.useState(!1),w=m.useMemo(()=>window.location.origin+window.location.pathname+window.location.search+window.location.hash,[i]),k="2025-10-05T21:23:35.172Z",N="2025-10-06T02:53:30+05:30",z=async()=>{try{await navigator.clipboard.writeText(w),p(!0),setTimeout(()=>p(!1),1600)}catch{}},T=m.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),0)}},[]),$=()=>x(!0),D=()=>x(!1),O=[{key:"hq",title:"Head Office",lines:["Plot 42, Tech Park Phase II","Outer Ring Road, Bengaluru 560103","Karnataka, India"],phone:"+91-80-4000-1234",email:"hq@yourco.example",map:"https://maps.google.com/?q=Outer+Ring+Road,+Bengaluru",hours:"Mon–Fri 09:30–18:30"},{key:"support",title:"Support Center",lines:["2nd Floor, North Wing","Mindspace IT Park, Hyderabad 500081","Telangana, India"],phone:"+91-40-4500-2222",email:"support@yourco.example",map:"https://maps.google.com/?q=Mindspace,+Hyderabad",hours:"Mon–Sat 09:00–20:00"},{key:"warehouse",title:"Primary Warehouse",lines:["Gate 7, Logistics Hub","NH-48, Manesar 122052","Haryana, India"],phone:"+91-124-4700-3333",email:"warehouse@yourco.example",map:"https://maps.google.com/?q=Manesar+NH48",hours:"Mon–Sat 08:00–18:00"}],H=[{id:"U-101",name:"Ashish Ranjan",role:"Product Lead",email:"ashish@yourco.example",phone:"+91-98-000-11111"},{id:"U-102",name:"N. Sharma",role:"Head of Support",email:"n.sharma@yourco.example",phone:"+91-98-000-22222"},{id:"U-103",name:"A. Mehra",role:"Billing Desk",email:"a.mehra@yourco.example",phone:"+91-98-000-33333"},{id:"U-104",name:"Devops Team",role:"Infra & Status",email:"devops@yourco.example",phone:"+91-98-000-44444"}];return e.jsxs(l.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #${u},
          body.print-section-mode #${u} * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #${u} {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(l.Header,{children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"›"}),e.jsx(s,{to:"/help",children:"Help"}),e.jsx("span",{children:"›"}),e.jsx("span",{"aria-current":"page",children:"Contact"})]}),e.jsxs("div",{className:"titleWrap",children:[e.jsx("h1",{children:"Contact"}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"pill",title:"Build time",children:h(k)}),e.jsx("span",{className:"pill",title:"Last commit",children:h(N)})]})]}),e.jsxs(l.Actions,{children:[e.jsxs("button",{onClick:z,title:"Copy this page link",children:[e.jsx(P,{size:18})," Copy Link"]}),e.jsxs("a",{href:"mailto:support@yourco.example",className:"ghost",title:"Email support",children:[e.jsx(b,{size:18})," Email Support"]}),e.jsxs("a",{href:"tel:+918045002222",className:"ghost",title:"Call support",children:[e.jsx(y,{size:18})," Call"]}),e.jsxs("a",{href:"https://wa.me/919800022222",target:"_blank",rel:"noreferrer",className:"ghost",title:"Open WhatsApp",children:[e.jsx(R,{size:18})," WhatsApp"]}),e.jsxs("button",{onClick:T,title:"Print contact sheet",children:[e.jsx(q,{size:18})," Print"]}),r&&e.jsx("span",{className:"copied",children:"Copied ✓"})]})]}),e.jsx("div",{id:u,children:e.jsxs(l.Grid,{children:[e.jsxs(l.Card,{children:[e.jsx("h2",{children:"Offices & Channels"}),e.jsx("p",{className:"muted",children:"Reach us via phone or email. Office hours vary by location."}),e.jsx("div",{className:"offices",children:O.map(a=>e.jsxs("div",{className:"office",children:[e.jsxs("div",{className:"officeHead",children:[e.jsx("h3",{children:a.title}),e.jsxs("a",{href:a.map,target:"_blank",rel:"noreferrer",title:"Open map",children:["Map ",e.jsx(E,{size:16})]})]}),e.jsx("address",{children:a.lines.map((f,A)=>e.jsx("div",{children:f},A))}),e.jsxs("div",{className:"row",children:[e.jsxs("a",{href:`tel:${a.phone.replaceAll(/[^0-9+]/g,"")}`,className:"link",children:[e.jsx(y,{size:16})," ",a.phone]}),e.jsxs("a",{href:`mailto:${a.email}`,className:"link",children:[e.jsx(b,{size:16})," ",a.email]})]}),e.jsxs("div",{className:"hours",children:["Hours: ",a.hours]})]},a.key))}),e.jsxs("div",{className:"channels",children:[e.jsxs("div",{className:"channel",children:[e.jsx("h4",{children:"Support"}),e.jsx("a",{href:"mailto:support@yourco.example",children:"support@yourco.example"}),e.jsx("span",{children:"Tickets answered within business hours."})]}),e.jsxs("div",{className:"channel",children:[e.jsx("h4",{children:"Sales"}),e.jsx("a",{href:"mailto:sales@yourco.example",children:"sales@yourco.example"}),e.jsx("span",{children:"Quotes, demos, procurement assistance."})]}),e.jsxs("div",{className:"channel",children:[e.jsx("h4",{children:"Billing"}),e.jsx("a",{href:"mailto:billing@yourco.example",children:"billing@yourco.example"}),e.jsx("span",{children:"Invoices, receipts, reconciliation."})]}),e.jsxs("div",{className:"channel",children:[e.jsx("h4",{children:"Infrastructure"}),e.jsx(s,{to:"/admin/system-status",title:"Open system status",children:"/admin/system-status"}),e.jsx("span",{children:"Maintenance windows & uptime notes."})]})]})]}),e.jsxs(l.Card,{children:[e.jsx("h2",{children:"Quick Routes"}),e.jsx("p",{className:"muted",children:"Navigate across frequently used sections. These are deep links for demo navigation."}),e.jsxs("div",{className:"routes",children:[e.jsxs("section",{children:[e.jsx("h4",{children:"Core"}),e.jsx(s,{to:"/dashboard",children:"/dashboard"}),e.jsx(s,{to:"/search",children:"/search"}),e.jsx(s,{to:"/about",children:"/about"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"CRM & Sales"}),e.jsx(s,{to:"/customers",children:"/customers"}),e.jsx(s,{to:"/orders",children:"/orders"}),e.jsx(s,{to:"/sales/quotes",children:"/sales/quotes"}),e.jsx(s,{to:"/sales/payments",children:"/sales/payments"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Catalog"}),e.jsx(s,{to:"/products",children:"/products"}),e.jsx(s,{to:"/categories",children:"/categories"}),e.jsx(s,{to:"/medicines",children:"/medicines"}),e.jsx(s,{to:"/medicines/expiry-tracker",children:"/medicines/expiry-tracker"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Inventory & Logistics"}),e.jsx(s,{to:"/inventory",children:"/inventory"}),e.jsx(s,{to:"/shipments",children:"/shipments"}),e.jsx(s,{to:"/warehouses",children:"/settings/warehouses"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Billing & Finance"}),e.jsx(s,{to:"/invoices",children:"/invoices"}),e.jsx(s,{to:"/receipts",children:"/receipts"}),e.jsx(s,{to:"/finance/balance-sheet",children:"/finance/balance-sheet"}),e.jsx(s,{to:"/finance/profit-loss",children:"/finance/profit-loss"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Reports"}),e.jsx(s,{to:"/reports/sales",children:"/reports/sales"}),e.jsx(s,{to:"/reports/inventory",children:"/reports/inventory"}),e.jsx(s,{to:"/reports/customers",children:"/reports/customers"}),e.jsx(s,{to:"/reports/gst",children:"/reports/gst"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Admin"}),e.jsx(s,{to:"/admin/users",children:"/admin/users"}),e.jsx(s,{to:"/admin/permissions",children:"/admin/permissions"}),e.jsx(s,{to:"/admin/audit-log",children:"/admin/audit-log"}),e.jsx(s,{to:"/admin/system-status",children:"/admin/system-status"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Settings"}),e.jsx(s,{to:"/settings/appearance",children:"/settings/appearance"}),e.jsx(s,{to:"/settings/notifications",children:"/settings/notifications"}),e.jsx(s,{to:"/settings/print-templates",children:"/settings/print-templates"}),e.jsx(s,{to:"/settings/webhooks",children:"/settings/webhooks"})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Help"}),e.jsx(s,{to:"/help",children:"/help"}),e.jsx(s,{to:"/faq",children:"/faq"}),e.jsx(s,{to:"/feedback",children:"/feedback"}),e.jsx(s,{to:"/roadmap",children:"/roadmap"})]})]})]}),e.jsxs(l.Card,{className:"span2",children:[e.jsx("h2",{children:"Key Contacts"}),e.jsx("p",{className:"muted",children:"Connect directly with the right team. Actions are display-only."}),e.jsx("div",{className:"people",children:H.map(a=>e.jsxs("div",{className:"person",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:a.name.split(" ").map(f=>f[0]).slice(0,2).join("")}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"row1",children:[e.jsx("strong",{children:a.name}),e.jsx("span",{className:"role",children:a.role}),e.jsxs("span",{className:"id",children:["#",a.id]})]}),e.jsxs("div",{className:"row2",children:[e.jsxs("a",{className:"chip",href:`mailto:${a.email}`,title:"Email",children:[e.jsx(b,{size:16})," ",a.email]}),e.jsxs("a",{className:"chip",href:`tel:${a.phone.replaceAll(/[^0-9+]/g,"")}`,title:"Call",children:[e.jsx(y,{size:16})," ",a.phone]}),e.jsx("button",{className:"chip disabled",onClick:$,title:"Demo mode",children:"Request Callback"})]})]})]},a.id))})]}),e.jsxs(l.Card,{className:"span2",children:[e.jsx("h2",{children:"Send a Message"}),e.jsx("p",{className:"muted",children:"This is a display-only theme. The form is intentionally disabled."}),e.jsxs("form",{onSubmit:a=>a.preventDefault(),className:"messageForm","aria-disabled":"true",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",placeholder:"Your full name",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",placeholder:"you@example.com",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{type:"tel",placeholder:"+91-",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Topic"}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{children:"Support"}),e.jsx("option",{children:"Sales"}),e.jsx("option",{children:"Billing"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"full",children:[e.jsx("label",{children:"Message"}),e.jsx("textarea",{rows:6,placeholder:"Type your message...",disabled:!0})]})]}),e.jsxs("div",{className:"formActions",children:[e.jsx("button",{type:"button",onClick:$,children:"Submit"}),e.jsx("a",{className:"ghost",href:"mailto:support@yourco.example",title:"Fallback email",children:"Email Instead"})]})]})]}),e.jsxs(l.Card,{className:"span2",children:[e.jsx("h2",{children:"Meta"}),e.jsxs("div",{className:"metaGrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"This Page"}),e.jsx("div",{className:"value",children:w})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Today"}),e.jsx("div",{className:"value",children:M(new Date)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Now"}),e.jsx("div",{className:"value",children:S(new Date)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Build"}),e.jsx("div",{className:"value",children:h(k)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Last Commit"}),e.jsx("div",{className:"value",children:h(N)})]})]})]})]})}),j&&e.jsx(l.ModalBackdrop,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs(l.Modal,{children:[e.jsx("h3",{id:"modal-title",children:"Demo Only"}),e.jsx("p",{children:"This is a display-only theme. Actions like “Submit” or “Request Callback” are disabled."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:D,children:"Okay"}),e.jsx("a",{className:"ghost",href:"mailto:support@yourco.example",children:"Email Support"})]})]})})]})};export{G as default};
