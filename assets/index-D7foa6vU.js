import{d as $,r as h,j as e,N as a,i as H,t as W,ar as F,v as U,K as B,e as I,b as K,c as C,ad as Y,as as q,n as T,l as G,m as J,w as x}from"./index-Dm9gfKqL.js";const u="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",l="var(--card, #111318)",r="var(--border, #23262d)",t="var(--accent, #5aa9ff)",y="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",A={Wrap:$.div`
        width: 100%;
        color: ${u};
        display: flex;
        flex-direction: column;
        gap: 16px;

        .pageHead {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .crumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${d};
            a {
                color: inherit;
            }
            svg {
                opacity: 0.8;
            }
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            h1 {
                font-size: 24px;
                line-height: 1.2;
                margin-bottom: 4px;
                letter-spacing: 0.3px;
            }
            .sub {
                color: ${d};
                font-size: 12px;
            }

            .headActions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;

                button,
                a {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid ${r};
                    background: ${l};
                    color: ${u};
                    padding: 8px 12px;
                    border-radius: 10px;
                    box-shadow: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s,
                        transform 0.05s;
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                a.ghost,
                button.ghost {
                    background: transparent;
                }
                button.primary {
                    border-color: ${t};
                }
                button:not(:disabled):active,
                a:active {
                    transform: translateY(1px);
                }
                button:not(:disabled):hover,
                a:hover {
                    border-color: ${t};
                    color: ${t};
                }
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 12px;

            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
            }

            .search {
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${r};
                background: ${l};
                border-radius: 10px;
                padding: 8px 12px;
                box-shadow: ${y};
                input {
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: ${u};
                }
                svg {
                    opacity: 0.8;
                }
            }

            .filters {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;

                @media (max-width: 700px) {
                    flex-direction: column;
                    align-items: stretch;
                }

                .pills {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .pill {
                    border: 1px solid ${r};
                    background: ${l};
                    color: ${u};
                    border-radius: 999px;
                    padding: 6px 10px;
                    font-size: 12px;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .pill.active,
                .pill:hover {
                    border-color: ${t};
                    color: ${t};
                }

                .selects {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .select {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid ${r};
                    background: ${l};
                    border-radius: 10px;
                    padding: 6px 10px;
                    select {
                        background: transparent;
                        border: 0;
                        color: ${u};
                        outline: none;
                    }
                    svg {
                        opacity: 0.8;
                    }
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1.05fr 1.6fr;
            gap: 14px;

            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
        }

        .listPane {
            border: 1px solid ${r};
            background: ${l};
            border-radius: 12px;
            box-shadow: ${y};
            overflow: hidden;
            display: flex;
            flex-direction: column;

            .listHead {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 14px;
                border-bottom: 1px solid ${r};
                background: color-mix(in oklab, ${l} 92%, transparent);
                .count {
                    padding: 2px 8px;
                    border: 1px solid ${r};
                    border-radius: 999px;
                    color: ${d};
                    font-size: 12px;
                }
            }

            .tableWrap {
                overflow: auto;
            }
            table.table {
                width: 100%;
                border-collapse: collapse;
                th,
                td {
                    padding: 10px 12px;
                    border-bottom: 1px solid ${r};
                }
                thead th {
                    position: sticky;
                    top: 0;
                    background: ${l};
                    z-index: 1;
                }
                tbody tr {
                    cursor: pointer;
                }
                tbody tr:hover {
                    background: color-mix(in oklab, ${t} 10%, transparent);
                }
                tbody tr.active {
                    background: color-mix(in oklab, ${t} 15%, transparent);
                    outline: 1px solid
                        color-mix(in oklab, ${t} 45%, transparent);
                }

                .nameCell {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .nameCell .name {
                    font-weight: 600;
                }
                .tags {
                    display: flex;
                    gap: 4px;
                    flex-wrap: wrap;
                }
                .tag {
                    font-size: 11px;
                    padding: 2px 6px;
                    border: 1px solid ${r};
                    border-radius: 999px;
                    color: ${d};
                }

                .code {
                    font-size: 12px;
                }

                .status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                    border: 1px solid ${r};
                }
                .status.ok {
                    color: ${t};
                }
                .status.paused {
                    color: ${d};
                }

                .rowActions {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    justify-content: flex-end;
                }
                .rowActions .tiny,
                .cardHead .links .tiny,
                .inlineLink {
                    font-size: 12px;
                    border: 1px solid ${r};
                    padding: 4px 8px;
                    border-radius: 8px;
                    background: transparent;
                    color: ${u};
                    text-decoration: none;
                }
                .rowActions .tiny:hover,
                .cardHead .links .tiny:hover,
                .inlineLink:hover {
                    border-color: ${t};
                    color: ${t};
                }
                .rowActions button.tiny {
                    background: transparent;
                    cursor: pointer;
                }
            }

            .empty {
                display: flex;
                gap: 10px;
                align-items: center;
                color: ${d};
                padding: 18px 4px;
                .muted {
                    color: ${d};
                    font-size: 12px;
                }
            }
        }

        .previewPane {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .previewHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                .meta {
                    margin-top: 6px;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    color: ${d};
                    font-size: 12px;
                    code {
                        font-size: 12px;
                    }
                }
                .previewActions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    button,
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 8px 12px;
                        border: 1px solid ${r};
                        background: ${l};
                        color: ${u};
                        border-radius: 10px;
                    }
                    .ghost {
                        background: transparent;
                    }
                    .danger {
                        border-color: #b04b4b;
                    } /* subtle */
                    button:hover,
                    a:hover {
                        border-color: ${t};
                        color: ${t};
                    }
                    button.primary {
                        border-color: ${t};
                    }
                }
            }

            .cards {
                display: grid;
                grid-template-columns: 1fr;
                gap: 12px;
            }

            .card {
                border: 1px solid ${r};
                background: ${l};
                border-radius: 12px;
                box-shadow: ${y};
                padding: 14px;

                .cardHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    h3 {
                        font-size: 16px;
                    }
                    .links {
                        display: flex;
                        gap: 8px;
                    }
                }

                .subject {
                    font-family: "Antonio", sans-serif;
                    letter-spacing: 0.3px;
                }

                .vars {
                    margin-top: 12px;
                    .hint {
                        color: ${d};
                        font-size: 12px;
                        margin-right: 8px;
                    }
                    .chips {
                        display: inline-flex;
                        gap: 6px;
                        flex-wrap: wrap;
                    }
                    .chip {
                        border: 1px solid ${r};
                        border-radius: 999px;
                        padding: 2px 8px;
                        font-size: 12px;
                        background: color-mix(
                            in oklab,
                            ${t} 10%,
                            transparent
                        );
                    }
                    .muted {
                        color: ${d};
                        font-size: 12px;
                    }
                }

                .htmlPreview {
                    .emailShell {
                        border: 1px solid ${r};
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .emailHeader {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 12px;
                        border-bottom: 1px solid ${r};
                        background: color-mix(
                            in oklab,
                            ${t} 12%,
                            transparent
                        );
                        .logo {
                            font-weight: 700;
                            letter-spacing: 0.5px;
                        }
                        .subjectLine {
                            color: ${d};
                            font-size: 12px;
                        }
                    }
                    .emailBody {
                        padding: 12px;
                        line-height: 1.7;
                        .footerLine {
                            margin-top: 16px;
                            color: ${d};
                            font-size: 12px;
                        }
                    }
                    .inlineLink {
                        text-decoration: none;
                    }
                }

                .quickLinks {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 8px;
                    @media (max-width: 900px) {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        border: 1px solid ${r};
                        border-radius: 10px;
                        padding: 10px 12px;
                        background: ${l};
                    }
                    a:hover {
                        border-color: ${t};
                        color: ${t};
                    }
                }
            }

            .placeholder {
                border: 1px solid ${r};
                background: ${l};
                border-radius: 12px;
                box-shadow: ${y};
                padding: 18px;
                display: flex;
                align-items: center;
                gap: 12px;
                color: ${d};
            }
        }
    `,ModalBackdrop:$.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:$.div`
        width: min(520px, 92vw);
        border: 1px solid ${r};
        background: ${l};
        color: ${u};
        border-radius: 12px;
        box-shadow: ${y};
        padding: 14px;

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        .desc {
            color: ${d};
            margin-bottom: 14px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                border: 1px solid ${r};
                background: ${l};
                color: ${u};
                border-radius: 10px;
                padding: 8px 12px;
            }
            .primary {
                border-color: ${t};
            }
            button:hover {
                border-color: ${t};
                color: ${t};
            }
        }
    `},Q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=n=>n<10?"0"+n:""+n,w=n=>{const c=new Date(n);return`${Q[c.getDay()]} ${V[c.getMonth()]} ${k(c.getDate())} ${c.getFullYear()}`},L=n=>{const c=new Date(n);return`${k(c.getHours())}:${k(c.getMinutes())}:${k(c.getSeconds())}hrs`},P=n=>`${w(n)} ${L(n)}`,D=[{id:"TMP-ORD-CONF",name:"Order Confirmation",key:"order_confirmation",category:"Transactional",subject:"Your order {{orderNumber}} is confirmed",updatedISO:"2025-10-03T15:24:11+05:30",createdISO:"2024-08-11T11:02:05+05:30",author:"Ops Bot",status:"Active",tags:["order","customer","transactions"]},{id:"TMP-PWD-RESET",name:"Password Reset",key:"password_reset",category:"System",subject:"Reset your password",updatedISO:"2025-09-28T10:12:57+05:30",createdISO:"2024-02-14T13:44:24+05:30",author:"Admin",status:"Active",tags:["auth","security"]},{id:"TMP-WELCOME",name:"Welcome Email",key:"welcome_email",category:"Marketing",subject:"Welcome to {{brand}} — let's get you started",updatedISO:"2025-09-11T09:02:22+05:30",createdISO:"2023-11-01T10:15:00+05:30",author:"Growth",status:"Active",tags:["onboarding","brand"]},{id:"TMP-INV-READY",name:"Invoice Ready",key:"invoice_ready",category:"Transactional",subject:"Invoice {{invoiceNumber}} is ready to view",updatedISO:"2025-10-01T12:18:42+05:30",createdISO:"2024-04-19T16:19:18+05:30",author:"Finance",status:"Active",tags:["billing","invoices"]},{id:"TMP-SHIP-DISP",name:"Shipment Dispatched",key:"shipment_dispatched",category:"Transactional",subject:"Shipment {{shipmentId}} is on the way",updatedISO:"2025-09-30T18:37:59+05:30",createdISO:"2024-05-27T08:55:13+05:30",author:"Logistics",status:"Active",tags:["shipping","tracking"]},{id:"TMP-LOW-STOCK",name:"Low Stock Alert",key:"low_stock_alert",category:"System",subject:"Low inventory on {{sku}} — action recommended",updatedISO:"2025-08-14T21:44:10+05:30",createdISO:"2024-12-31T13:11:00+05:30",author:"Inventory",status:"Active",tags:["inventory","alerts"]},{id:"TMP-PAY-RECV",name:"Payment Received",key:"payment_received",category:"Transactional",subject:"Payment received — {{amount}} for {{invoiceNumber}}",updatedISO:"2025-09-20T18:01:10+05:30",createdISO:"2024-01-18T11:45:05+05:30",author:"Finance",status:"Active",tags:["payments","billing"]},{id:"TMP-APPT-REM",name:"Appointment Reminder",key:"appointment_reminder",category:"System",subject:"Reminder: your appointment on {{date}} at {{time}}",updatedISO:"2025-09-25T07:45:32+05:30",createdISO:"2024-03-20T09:30:12+05:30",author:"Clinic",status:"Active",tags:["appointments"]},{id:"TMP-ABANDON",name:"Abandoned Cart",key:"abandoned_cart",category:"Marketing",subject:"Still thinking about {{product}}?",updatedISO:"2025-09-17T14:11:05+05:30",createdISO:"2023-10-21T17:03:00+05:30",author:"Growth",status:"Draft",tags:["cart","offers"]},{id:"TMP-NEWS-OCT",name:"Newsletter — October",key:"newsletter_oct",category:"Marketing",subject:"What’s new this month",updatedISO:"2025-10-02T10:21:44+05:30",createdISO:"2025-10-01T08:15:33+05:30",author:"Marketing",status:"Active",tags:["newsletter"]},{id:"TMP-ADM-ALERT",name:"Admin Alert: Error",key:"admin_error",category:"System",subject:"An error occurred in {{service}}",updatedISO:"2025-09-10T12:40:19+05:30",createdISO:"2024-05-22T12:40:19+05:30",author:"SRE",status:"Active",tags:["ops","errors"]},{id:"TMP-2FA",name:"Two-Factor Code",key:"two_factor",category:"System",subject:"Your security code: {{code}}",updatedISO:"2025-09-05T06:05:05+05:30",createdISO:"2023-08-12T06:05:05+05:30",author:"Auth",status:"Active",tags:["auth","security"]}],Z=["All","Transactional","Marketing","System"],X=["All","Active","Draft"],ee=[{id:"updated_desc",label:"Last updated (newest)"},{id:"updated_asc",label:"Last updated (oldest)"},{id:"name_asc",label:"Name (A→Z)"},{id:"name_desc",label:"Name (Z→A)"}],se=({open:n,title:c,desc:b,onClose:f})=>n?e.jsx(A.ModalBackdrop,{onClick:f,role:"dialog","aria-modal":"true",children:e.jsxs(A.Modal,{onClick:g=>g.stopPropagation(),children:[e.jsxs("div",{className:"head",children:[e.jsx(T,{size:20}),e.jsx("h4",{children:c})]}),e.jsx("p",{className:"desc",children:b}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:f,className:"primary",children:"Okay"})})]})}):null;function te(){var O;const[n,c]=h.useState(""),[b,f]=h.useState("All"),[g,E]=h.useState("All"),[N,R]=h.useState("updated_desc"),[j,S]=h.useState(((O=D[0])==null?void 0:O.id)||null),[z,v]=h.useState(!1),m=h.useMemo(()=>{let s=D.slice();if(b!=="All"&&(s=s.filter(i=>i.category===b)),g!=="All"&&(s=s.filter(i=>i.status===g)),n.trim()){const i=n.toLowerCase().split(/\s+/).filter(Boolean);s=s.filter(p=>i.every(_=>(p.name+" "+p.key+" "+p.subject+" "+p.tags.join(" ")).toLowerCase().includes(_)))}switch(N){case"updated_asc":s.sort((i,p)=>new Date(i.updatedISO)-new Date(p.updatedISO));break;case"name_asc":s.sort((i,p)=>i.name.localeCompare(p.name));break;case"name_desc":s.sort((i,p)=>p.name.localeCompare(i.name));break;default:s.sort((i,p)=>new Date(p.updatedISO)-new Date(i.updatedISO));break}return s},[n,b,g,N]);h.useEffect(()=>{var s;(!j||!m.find(i=>i.id===j))&&S(((s=m[0])==null?void 0:s.id)||null)},[m,j]);const o=h.useMemo(()=>m.find(s=>s.id===j)||m[0]||null,[m,j]),M=()=>{const s="print-section-mode";document.body.classList.add(s),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove(s),0)},20)};return e.jsxs(A.Wrap,{children:[e.jsxs("div",{className:"pageHead",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(a,{to:"/admin",children:"Admin"}),e.jsx(H,{"aria-hidden":!0}),e.jsx("span",{children:"Email Templates"})]}),e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Email Templates"}),e.jsx("p",{className:"sub",children:"Display-only gallery of transactional, marketing, and system templates."})]}),e.jsxs("div",{className:"headActions",children:[e.jsxs("button",{disabled:!0,title:"Demo mode",children:[e.jsx(W,{})," New Template"]}),e.jsxs("button",{disabled:!0,title:"Demo mode",children:[e.jsx(F,{})," Import"]}),e.jsxs("button",{disabled:!0,title:"Demo mode",children:[e.jsx(U,{})," Export"]}),e.jsxs(a,{to:"/settings/notifications",className:"ghost",children:[e.jsx(B,{})," Notifications Settings"]}),e.jsxs("button",{onClick:M,className:"primary",children:[e.jsx(I,{})," Print"]})]})]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"search",children:[e.jsx(K,{size:18}),e.jsx("input",{value:n,onChange:s=>c(s.target.value),placeholder:"Search name, key, subject, tags…","aria-label":"Search templates"})]}),e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"pills",role:"tablist","aria-label":"Categories",children:Z.map(s=>e.jsx("button",{role:"tab","aria-selected":b===s,className:b===s?"pill active":"pill",onClick:()=>f(s),children:s},s))}),e.jsxs("div",{className:"selects",children:[e.jsxs("div",{className:"select",children:[e.jsx(C,{}),e.jsx("select",{value:g,onChange:s=>E(s.target.value),"aria-label":"Status filter",children:X.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("div",{className:"select",children:[e.jsx(C,{}),e.jsx("select",{value:N,onChange:s=>R(s.target.value),"aria-label":"Sort by",children:ee.map(s=>e.jsx("option",{value:s.id,children:s.label},s.id))})]})]})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("aside",{className:"listPane",children:[e.jsxs("div",{className:"listHead",children:[e.jsx("span",{children:"Templates"}),e.jsx("span",{className:"count",children:m.length})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[m.map(s=>e.jsxs("tr",{className:s.id===(o==null?void 0:o.id)?"active":"",onClick:()=>S(s.id),tabIndex:0,onKeyDown:i=>{i.key==="Enter"&&S(s.id)},children:[e.jsx("td",{children:e.jsxs("div",{className:"nameCell",children:[e.jsx("span",{className:"name",children:s.name}),e.jsx("div",{className:"tags",children:s.tags.map(i=>e.jsx("span",{className:"tag",children:i},i))})]})}),e.jsx("td",{children:e.jsx("code",{className:"code",children:s.key})}),e.jsx("td",{children:s.category}),e.jsx("td",{children:s.status==="Active"?e.jsxs("span",{className:"status ok",children:[e.jsx(Y,{})," ",s.status]}):e.jsxs("span",{className:"status paused",children:[e.jsx(q,{})," ",s.status]})}),e.jsx("td",{title:P(s.updatedISO),children:w(s.updatedISO)}),e.jsxs("td",{className:"rowActions",children:[e.jsx(a,{to:"/settings/notifications",className:"tiny",children:"Settings"}),e.jsx(a,{to:"/admin/sms-templates",className:"tiny",children:"SMS"}),e.jsx("button",{className:"tiny",onClick:()=>v(!0),title:"Demo mode",children:"Disable"})]})]},s.id)),m.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsxs("div",{className:"empty",children:[e.jsx(T,{size:20}),e.jsxs("div",{children:[e.jsx("div",{children:"No templates found"}),e.jsx("div",{className:"muted",children:"Try a different search or category."})]})]})})})]})]})})]}),e.jsx("main",{className:"previewPane",id:"search-print-area",children:o?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"previewHead",children:[e.jsxs("div",{children:[e.jsx("h2",{children:o.name}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Key: ",e.jsx("code",{children:o.key})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",P(o.updatedISO)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",w(o.createdISO)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Author: ",o.author]})]})]}),e.jsxs("div",{className:"previewActions",children:[e.jsxs("button",{className:"ghost",onClick:()=>v(!0),title:"Demo mode",children:[e.jsx(G,{})," Duplicate"]}),e.jsxs("button",{className:"danger ghost",onClick:()=>v(!0),title:"Demo mode",children:[e.jsx(J,{})," Delete"]}),e.jsxs("button",{className:"primary",onClick:M,children:[e.jsx(I,{})," Print"]})]})]}),e.jsxs("div",{className:"cards",children:[e.jsxs("section",{className:"card",children:[e.jsx("div",{className:"cardHead",children:e.jsx("h3",{children:"Subject"})}),e.jsx("div",{className:"subject",children:o.subject}),e.jsxs("div",{className:"vars",children:[e.jsx("span",{className:"hint",children:"Available variables:"}),e.jsxs("div",{className:"chips",children:[Array.from(new Set((o.subject.match(/\{\{(.*?)\}\}/g)||[]).map(s=>s.replace(/[{}]/g,"")))).map(s=>e.jsxs("span",{className:"chip",children:["{{",s,"}}"]},s)),o.subject.indexOf("{{")===-1&&e.jsx("span",{className:"muted",children:"No variables"})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"Preview (HTML)"}),e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/settings/print-templates",className:"tiny",children:"Print Templates"}),e.jsx(a,{to:"/settings/appearance",className:"tiny",children:"Appearance"}),e.jsx(a,{to:"/tools/theme-tokens",className:"tiny",children:"Theme Tokens"})]})]}),e.jsx("div",{className:"htmlPreview",children:e.jsxs("div",{className:"emailShell",children:[e.jsxs("div",{className:"emailHeader",children:[e.jsx("div",{className:"logo",children:"Mail"}),e.jsx("div",{className:"subjectLine",children:o.subject})]}),e.jsxs("div",{className:"emailBody",children:[e.jsxs("p",{children:["Hi ",e.jsx("b",{children:"{{firstName}}"}),","]}),e.jsxs("p",{children:["This is a display-only preview for ",e.jsx("b",{children:o.name}),". Use the links on the right to explore related settings and routes."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(a,{to:"/invoices",className:"inlineLink",children:"Invoices"})}),e.jsx("li",{children:e.jsx(a,{to:"/shipments",className:"inlineLink",children:"Shipments"})}),e.jsx("li",{children:e.jsx(a,{to:"/reports/sales",className:"inlineLink",children:"Sales Reports"})}),e.jsx("li",{children:e.jsx(a,{to:"/products",className:"inlineLink",children:"Product Catalog"})})]}),e.jsxs("p",{className:"footerLine",children:["Updated on ",w(o.updatedISO)," at ",L(o.updatedISO)]})]})]})})]}),e.jsxs("section",{className:"card",children:[e.jsx("div",{className:"cardHead",children:e.jsx("h3",{children:"Quick Links"})}),e.jsxs("div",{className:"quickLinks",children:[e.jsxs(a,{to:"/admin/sms-templates",children:[e.jsx(x,{})," SMS Templates"]}),e.jsxs(a,{to:"/settings/notifications",children:[e.jsx(x,{})," Notifications"]}),e.jsxs(a,{to:"/settings/webhooks",children:[e.jsx(x,{})," Webhooks"]}),e.jsxs(a,{to:"/settings/print-templates",children:[e.jsx(x,{})," Print Templates"]}),e.jsxs(a,{to:"/reports",children:[e.jsx(x,{})," Reports Home"]}),e.jsxs(a,{to:"/reports/customers",children:[e.jsx(x,{})," Customer Reports"]}),e.jsxs(a,{to:"/reports/inventory",children:[e.jsx(x,{})," Inventory Reports"]}),e.jsxs(a,{to:"/finance",children:[e.jsx(x,{})," Finance"]}),e.jsxs(a,{to:"/tools/theme-tokens",children:[e.jsx(x,{})," Theme Tokens"]}),e.jsxs(a,{to:"/admin/users",children:[e.jsx(x,{})," Users"]}),e.jsxs(a,{to:"/admin/roles",children:[e.jsx(x,{})," Roles"]}),e.jsxs(a,{to:"/admin/permissions",children:[e.jsx(x,{})," Permissions"]})]})]})]})]}):e.jsxs("div",{className:"placeholder",children:[e.jsx(T,{size:24}),e.jsxs("div",{children:[e.jsx("div",{children:"Select a template to preview"}),e.jsx("div",{className:"muted",children:"Use the list on the left to pick one."})]})]})})]}),e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsx(se,{open:z,onClose:()=>v(!1),title:"Demo mode",desc:"This action is disabled in the demo. Explore other sections or print the current preview."})]})}export{te as default,w as fmtDate,P as fmtDateTime,L as fmtTime};
