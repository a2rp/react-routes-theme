import{d as i,r as b,j as e,N as a}from"./index-CqBbF2bz.js";const c="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",d="var(--card, #111318)",o="var(--border, #23262d)",t="var(--accent, #5aa9ff)",m="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",n={Wrap:i.div`
        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${c};
    `,Header:i.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;

        .titleBlock {
            h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.5px;
                font-size: 28px;
                margin: 0;
            }
            .sub {
                color: ${p};
                margin-top: 6px;
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;

            .primary,
            .ghost,
            .cta {
                border: 1px solid ${o};
                background: ${d};
                color: ${c};
                padding: 8px 14px;
                border-radius: 10px;
                font-weight: 600;
                text-decoration: none;
                box-shadow: ${m};
                transition: transform 0.15s ease, border-color 0.2s ease,
                    box-shadow 0.2s ease, color 0.2s ease, background 0.2s ease;
            }

            .primary:hover,
            .ghost:hover,
            .cta:hover {
                border-color: ${t};
                color: ${t};
                transform: translateY(-1px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            }

            .primary {
                border-color: ${t};
            }

            .ghost[data-demo-disabled="true"] {
                opacity: 0.7;
                cursor: pointer;
            }
        }
    `,Meta:i.section`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        border: 1px solid ${o};
        border-radius: 12px;
        background: ${d};
        padding: 12px 12px 4px 12px;
        box-shadow: ${m};

        .item {
            padding: 8px 10px;
            border-radius: 8px;

            .k {
                color: ${p};
                font-size: 12px;
                margin-bottom: 2px;
            }
            .v {
                font-weight: 600;
            }
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,Shortcuts:i.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .chip {
            border: 1px solid ${o};
            background: ${d};
            color: ${c};
            text-decoration: none;
            padding: 6px 10px;
            border-radius: 999px;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
            box-shadow: ${m};
        }
        .chip:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
    `,StatsRow:i.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(220px, 1fr));

        .statCard {
            background: ${d};
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${m};
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .statCard:hover {
            transform: translateY(-1px);
            border-color: ${t};
            box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
        }

        .k {
            color: ${p};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 800;
            margin: 4px 0;
        }
        .hint {
            color: ${p};
            font-size: 12px;
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,Grid:i.div`
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(3, minmax(280px, 1fr));

        section.card {
            background: ${d};
            border: 1px solid ${o};
            border-radius: 14px;
            box-shadow: ${m};
            padding: 14px;
            display: grid;
            grid-template-rows: auto auto 1fr;
            gap: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.15s ease;

            &:hover {
                border-color: ${t};
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(-1px);
            }

            header h2 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.4px;
                margin: 0;
                font-size: 20px;
            }
            header .note {
                color: ${p};
                margin-top: 4px;
                font-size: 12px;
            }

            .links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 6px;

                .link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: 1px solid ${o};
                    background: rgba(0, 0, 0, 0.06);
                    color: ${c};
                    text-decoration: none;
                    border-radius: 10px;
                    padding: 8px 10px;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, box-shadow 0.2s ease;
                }
                .link:hover {
                    border-color: ${t};
                    color: ${t};
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.24);
                    background: rgba(0, 0, 0, 0.1);
                }
                .arrow {
                    font-size: 18px;
                    opacity: 0.8;
                    transform: translateY(-1px);
                }
            }

            .stats {
                display: grid;
                grid-template-columns: repeat(3, minmax(80px, 1fr));
                gap: 8px;
                margin-top: 6px;

                .kv {
                    border: 1px solid ${o};
                    border-radius: 10px;
                    padding: 8px 10px;
                    background: rgba(0, 0, 0, 0.05);
                }
                .k {
                    color: ${p};
                    font-size: 12px;
                }
                .v {
                    font-weight: 700;
                    font-size: 13px;
                }
            }
        }

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, minmax(280px, 1fr));
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,Explore:i.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 2fr;
        background: ${d};
        border: 1px solid ${o};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${m};

        .left h3 {
            font-family: "Antonio", sans-serif;
            margin: 0;
            font-size: 20px;
        }
        .left p {
            color: ${p};
            margin-top: 6px;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            a {
                border: 1px solid ${o};
                background: rgba(0, 0, 0, 0.06);
                color: ${c};
                text-decoration: none;
                padding: 8px 10px;
                border-radius: 10px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    box-shadow 0.2s ease;
            }
            a:hover {
                border-color: ${t};
                color: ${t};
                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.24);
            }
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
    `,FooterActions:i.section`
        display: flex;
        gap: 10px;
        justify-content: flex-end;

        .ghost,
        .cta {
            border: 1px solid ${o};
            background: ${d};
            color: ${c};
            padding: 8px 14px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: ${m};
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.15s ease;
        }
        .ghost:hover,
        .cta:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            transform: translateY(-1px);
        }
    `,ModalOverlay:i.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 40;
        padding: 16px;
    `,Modal:i.div`
        width: min(560px, 96vw);
        background: ${d};
        border: 1px solid ${o};
        border-radius: 14px;
        padding: 16px;
        color: ${c};
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.38);

        h3 {
            margin: 0 0 6px;
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.4px;
        }
        p {
            color: ${p};
            margin: 0 0 12px;
        }

        .row {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .primary,
        .cta {
            border: 1px solid ${o};
            background: ${d};
            color: ${c};
            padding: 8px 14px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 700;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .primary:hover,
        .cta:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
    `},h=r=>String(r).padStart(2,"0"),y=r=>new Date(r).toDateString(),w=r=>{const l=new Date(r);return`${h(l.getHours())}:${h(l.getMinutes())}:${h(l.getSeconds())}hrs`},g=r=>`${y(r)} ${w(r)}`,u="2025-10-06T03:25:08.920Z",$="2025-10-06T08:55:04+05:30",T=()=>{const[r,l]=b.useState(!1),f=b.useMemo(()=>[{label:"Build",value:g(u)},{label:"Last Commit",value:g($)},{label:"Base Path",value:"/react-routes-theme"},{label:"Mode",value:"Demo (Display-only)"}],[]),v=[{to:"/settings/appearance",label:"Appearance"},{to:"/settings/profile",label:"Profile"},{to:"/settings/notifications",label:"Notifications"},{to:"/settings/tokens",label:"API Tokens"},{to:"/settings/backups",label:"Backups"},{to:"/settings/print-templates",label:"Print Templates"}],k=[{title:"Account",links:[{to:"/settings/profile",label:"Profile"},{to:"/settings/billing",label:"Billing"},{to:"/settings/notifications",label:"Notifications"},{to:"/settings/backups",label:"Backups"}],note:"Manage your profile, subscription preferences, notifications and backups.",stats:[{k:"Profiles",v:"1 active"},{k:"Backup Plans",v:"Daily"},{k:"Alerts",v:"3 rules"}]},{title:"Appearance",links:[{to:"/settings/appearance",label:"Theme & Appearance"},{to:"/settings/print-templates",label:"Print Templates"},{to:"/examples/theme",label:"Theme Tokens Demo"}],note:"Fonts, accents, tokens and print layouts.",stats:[{k:"Theme",v:"Auto"},{k:"Tokens",v:"Base + Overrides"},{k:"Print Presets",v:"2"}]},{title:"Catalog & Regional",links:[{to:"/settings/tax",label:"Tax"},{to:"/settings/units",label:"Units of Measure"},{to:"/settings/currencies",label:"Currencies"},{to:"/settings/numbering",label:"Document Numbering"}],note:"Tax rules, UOM, currency and numbering standards.",stats:[{k:"Taxes",v:"GST enabled"},{k:"Units",v:"12"},{k:"Currencies",v:"INR"}]},{title:"Logistics",links:[{to:"/settings/warehouses",label:"Warehouses"},{to:"/settings/locations",label:"Locations"},{to:"/inventory/warehouses",label:"Inventory Warehouses"}],note:"Warehouses, locations and inventory preferences.",stats:[{k:"Warehouses",v:"3"},{k:"Locations",v:"18"},{k:"Reorder",v:"Enabled"}]},{title:"Integrations & Delivery",links:[{to:"/settings/webhooks",label:"Webhooks"},{to:"/admin/integrations",label:"Integrations"},{to:"/admin/email-templates",label:"Email Templates"},{to:"/admin/sms-templates",label:"SMS Templates"}],note:"Connectors, hooks and communication templates.",stats:[{k:"Webhooks",v:"5"},{k:"Email Templates",v:"8"},{k:"SMS Templates",v:"4"}]},{title:"Access & Security",links:[{to:"/admin/users",label:"Users"},{to:"/admin/roles",label:"Roles"},{to:"/admin/permissions",label:"Permissions"},{to:"/admin/feature-flags",label:"Feature Flags"}],note:"Users, roles, permissions and feature toggles.",stats:[{k:"Users",v:"6"},{k:"Roles",v:"3"},{k:"Flags",v:"2 toggled"}]},{title:"Finance",links:[{to:"/settings/billing",label:"Billing"},{to:"/finance/taxes",label:"Taxes"},{to:"/finance/gst-returns",label:"GST Returns"},{to:"/finance/ledgers",label:"Ledgers"}],note:"Billing preferences and finance configuration.",stats:[{k:"Plan",v:"Pro"},{k:"Tax Regime",v:"GST"},{k:"Ledgers",v:"Read-only"}]},{title:"Dev & System",links:[{to:"/settings/tokens",label:"API Tokens"},{to:"/admin/system-status",label:"System Status"},{to:"/settings/backups",label:"Backups"},{to:"/settings/webhooks",label:"Webhooks"}],note:"Tokens, runtime health and data recovery.",stats:[{k:"Tokens",v:"2 active"},{k:"Backups",v:"Daily 02:00"},{k:"Status",v:"OK"}]}],j=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),0)};return e.jsxs(e.Fragment,{children:[e.jsxs(n.Wrap,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{className:"titleBlock",children:[e.jsx("h1",{children:"Settings"}),e.jsx("div",{className:"sub",children:"Central configuration hub for your workspace."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"primary",onClick:j,title:"Print this overview",children:"Print Overview"}),e.jsx("button",{className:"ghost",onClick:()=>l(!0),"aria-disabled":"true","data-demo-disabled":"true",title:"Display-only demo",children:"Export All"}),e.jsx(a,{className:"cta",to:"/settings/appearance",title:"Open theme settings",children:"Open Appearance"})]})]}),e.jsx(n.Meta,{id:"search-print-area",children:f.map(s=>e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:s.label}),e.jsx("div",{className:"v",children:s.value})]},s.label))}),e.jsx(n.Shortcuts,{children:v.map(s=>e.jsx(a,{to:s.to,className:"chip",title:s.label,children:s.label},s.to))}),e.jsxs(n.StatsRow,{children:[e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"k",children:"Warehouses"}),e.jsx("div",{className:"v",children:"3"}),e.jsx("div",{className:"hint",children:"Configured across regions"})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"k",children:"Webhooks"}),e.jsx("div",{className:"v",children:"5"}),e.jsx("div",{className:"hint",children:"Delivery: 100%"})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"k",children:"Backups"}),e.jsx("div",{className:"v",children:"Daily"}),e.jsxs("div",{className:"hint",children:["Last: ",g(u)]})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"k",children:"Tokens"}),e.jsx("div",{className:"v",children:"2"}),e.jsx("div",{className:"hint",children:"Rotates monthly"})]})]}),e.jsx(n.Grid,{children:k.map(s=>e.jsxs("section",{className:"card",children:[e.jsxs("header",{children:[e.jsx("h2",{children:s.title}),e.jsx("p",{className:"note",children:s.note})]}),e.jsx("ul",{className:"links",children:s.links.map(x=>e.jsx("li",{children:e.jsxs(a,{to:x.to,className:"link",children:[e.jsx("span",{className:"arrow","aria-hidden":!0,children:"›"}),e.jsx("span",{children:x.label})]})},x.to))}),e.jsx("div",{className:"stats",children:s.stats.map(x=>e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:x.k}),e.jsx("div",{className:"v",children:x.v})]},x.k))})]},s.title))}),e.jsxs(n.Explore,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:"Explore more"}),e.jsx("p",{children:"Common destinations you might need while configuring the workspace."})]}),e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/products/attributes",children:"Product Attributes"}),e.jsx(a,{to:"/products/price-lists",children:"Price Lists"}),e.jsx(a,{to:"/categories",children:"Categories"}),e.jsx(a,{to:"/admin/system-status",children:"System Status"}),e.jsx(a,{to:"/admin/feature-flags",children:"Feature Flags"}),e.jsx(a,{to:"/reports/gst",children:"GST Report"}),e.jsx(a,{to:"/reports/finance",children:"Finance Report"}),e.jsx(a,{to:"/invoices",children:"Invoices"}),e.jsx(a,{to:"/purchase-orders",children:"Purchase Orders"})]})]}),e.jsxs(n.FooterActions,{children:[e.jsx("button",{className:"ghost",onClick:()=>l(!0),"aria-disabled":"true","data-demo-disabled":"true",title:"Display-only demo",children:"Reset to Defaults"}),e.jsx(a,{to:"/settings/webhooks",className:"cta",children:"Manage Webhooks"}),e.jsx(a,{to:"/settings/print-templates",className:"cta",children:"Edit Print Templates"}),e.jsx(a,{to:"/settings/tokens",className:"cta",children:"Create API Token"})]})]}),r&&e.jsx(n.ModalOverlay,{onClick:()=>l(!1),"aria-modal":"true",role:"dialog",children:e.jsxs(n.Modal,{onClick:s=>s.stopPropagation(),children:[e.jsx("h3",{children:"Demo mode"}),e.jsx("p",{children:"This preview is display-only. Actions like Export or Reset are disabled."}),e.jsxs("div",{className:"row",children:[e.jsx("button",{className:"primary",onClick:()=>l(!1),children:"Got it"}),e.jsx(a,{to:"/settings/backups",className:"cta",children:"Open Backups"})]})]})}),e.jsx("style",{children:`
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
      `})]})};export{T as default};
