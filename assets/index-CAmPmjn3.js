import{d as h,j as e,N as s,L as x}from"./index-CqBbF2bz.js";const n="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",r="var(--card, #111318)",a="var(--border, #23262d)",i="var(--accent, #5aa9ff)",p="var(--accent-soft, rgba(90,169,255,0.15))",j={Wrapper:h.div`
    width: 100%;
    color: ${n};
    padding: 18px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }
    .breadcrumbs a { color: ${t}; }
    .breadcrumbs a:hover { color: ${i}; }
    .breadcrumbs .here { color: ${n}; font-weight: 600; }
    .breadcrumbs .sep { opacity: 0.5; }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn {
      background: ${r};
      color: ${n};
      border: 1px solid ${a};
      padding: 8px 12px;
      border-radius: 10px;
      font-size: 13px;
      line-height: 1;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
    }
    .btn:hover { border-color: ${i}; color: ${i}; }
    .btn:focus-visible { outline: none; box-shadow: 0 0 0 3px ${p}; }
    .btn:disabled { opacity: .6; cursor: not-allowed; }
    .btn.ghost { background: transparent; }
    .btn.small { padding: 6px 10px; font-size: 12px; }
    .btn.primary { border-color: ${i}; color: ${i}; }

    .grid {
      display: grid;
      gap: 12px;
      margin-bottom: 16px;
    }
    .grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

    @media (max-width: 1200px) {
      .grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 700px) {
      .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
    }

    .card {
      background: ${r};
      border: 1px solid ${a};
      border-radius: 12px;
      padding: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }

    .kpi .kpi-title { color: ${t}; font-weight: 600; margin-bottom: 6px; letter-spacing: .2px; }
    .kpi .kpi-value { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
    .kpi .kpi-sub { color: ${t}; font-size: 12px; }

    .section { margin-top: 8px; }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 8px;
    }
    .section .title { font-size: 16px; font-weight: 700; letter-spacing: .3px; }
    .section .links {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-size: 12px;
    }
    .section .links a { color: ${t}; }
    .section .links a:hover { color: ${i}; }
    .section .links .dot { opacity: .6; }

    /* Channels */
    .channel .channel-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 8px;
    }
    .channel h3 { font-size: 15px; }
    .muted { color: ${t}; }

    .channel .list { margin: 8px 0 10px; padding-left: 18px; }
    .channel .list li { margin: 3px 0; }

    .channel .actions { display: flex; gap: 8px; flex-wrap: wrap; }

    /* Switch (decorative; disabled in demo) */
    .switch { position: relative; display: inline-flex; align-items: center; }
    .switch input { display: none; }
    .switch span {
      width: 40px; height: 22px; border-radius: 999px;
      background: #222833; border: 1px solid ${a}; position: relative;
      transition: all .2s ease;
    }
    .switch span::after {
      content: ""; position: absolute; top: 50%; transform: translateY(-50%);
      left: 2px; width: 18px; height: 18px; border-radius: 50%;
      background: ${n}; transition: all .2s ease;
    }
    .switch input:checked + span { border-color: ${i}; box-shadow: 0 0 0 3px ${p}; }
    .switch input:checked + span::after { left: 20px; }

    /* Matrix */
    .table-scroll { overflow: auto; }
    table.table { width: 100%; border-collapse: collapse; font-size: 13px; }
    table.table th, table.table td {
      padding: 10px; border-bottom: 1px solid ${a};
      white-space: nowrap; text-align: left;
    }
    table.table th { color: ${i}; background: ${r}; position: sticky; top: 0; z-index: 1; }
    .table .event { font-weight: 600; }
    .badge {
      display: inline-flex; align-items: center; justify-content: center;
      border: 1px solid ${a}; border-radius: 20px; padding: 2px 8px; font-size: 11px;
      background: rgba(0,0,0,.15);
    }
    .badge.on { border-color: ${i}; color: ${i}; }

    .tiny-link {
      display: inline-block; margin-right: 6px; font-size: 12px; color: ${t}; text-decoration: none;
    }
    .tiny-link:hover { color: ${i}; }

    /* Chips, code */
    .chips { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
    .chip {
      border: 1px solid ${a}; border-radius: 999px; padding: 4px 10px; font-size: 12px;
      background: rgba(0,0,0,.08);
    }
    .code {
      display: inline-block; background: rgba(0,0,0,.18); border: 1px solid ${a}; padding: 6px 10px; border-radius: 8px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
    }

    /* Templates */
    .templates { display: grid; gap: 6px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
    @media (max-width: 900px) { .templates { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 560px) { .templates { grid-template-columns: 1fr; } }
    .tpl {
      display: flex; align-items: center; gap: 8px;
      padding: 10px; border: 1px solid ${a}; border-radius: 10px; text-decoration: none;
      color: ${n}; background: ${r}; transition: border-color .2s ease, color .2s ease;
    }
    .tpl:hover { border-color: ${i}; color: ${i}; }
    .tpl .dot-bullet { width: 6px; height: 6px; border-radius: 50%; background: ${i}; display: inline-block; }

    /* Endpoints */
    .endpoint .subhead { margin-bottom: 6px; }
    .endpoint .code { margin-top: 6px; display: block; }

    /* Timeline */
    .timeline ul { list-style: none; padding: 0; margin: 0; }
    .timeline li {
      display: grid; grid-template-columns: 200px 80px 1fr auto; gap: 10px; padding: 10px 0;
      border-bottom: 1px solid ${a}; align-items: center;
    }
    .timeline .time { color: ${t}; font-size: 12px; white-space: nowrap; }
    .timeline .label {
      border: 1px solid ${a}; border-radius: 999px; padding: 3px 8px; font-size: 11px;
      color: ${i};
    }
    .timeline .tiny-link { white-space: nowrap; }

    /* Utility */
    .subhead { font-size: 14px; font-weight: 700; }
    .note { margin-top: 8px; }
  `},u=!0,g=()=>{const m=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>{document.body.classList.remove("print-section-mode")},50)}};return e.jsxs(j.Wrapper,{children:[e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(s,{to:"/home",title:"Go Home",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(s,{to:"/settings",title:"Open Settings",children:"Settings"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"here",children:"Notifications"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx(s,{className:"btn ghost",to:"/settings/appearance",title:"Appearance",children:"Appearance"}),e.jsx(s,{className:"btn ghost",to:"/settings/profile",title:"Profile",children:"Profile"}),e.jsx(s,{className:"btn ghost",to:"/settings/print-templates",title:"Print Templates",children:"Print Templates"}),e.jsx(s,{className:"btn ghost",to:"/settings/webhooks",title:"Webhooks",children:"Webhooks"}),e.jsx("button",{className:"btn",onClick:m,title:"Print this section",children:"Print"}),e.jsx("button",{className:"btn primary",disabled:u,title:"Demo only — disabled",children:"Save Changes"})]})]}),e.jsxs("section",{className:"grid grid-4",children:[e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Channels"}),e.jsx("div",{className:"kpi-value",children:"Email · SMS · In-App · Push"}),e.jsx("div",{className:"kpi-sub",children:"All channels are configured"})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Quiet Hours"}),e.jsx("div",{className:"kpi-value",children:"22:00hrs – 07:00hrs"}),e.jsx("div",{className:"kpi-sub",children:"No outbound during quiet hours"})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Digest"}),e.jsx("div",{className:"kpi-value",children:"Daily, 08:30hrs"}),e.jsx("div",{className:"kpi-sub",children:"Also Weekly, Sat 09:00hrs"})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Templates"}),e.jsx("div",{className:"kpi-value",children:"24"}),e.jsx("div",{className:"kpi-sub",children:"Shared across apps"})]})]}),e.jsx("style",{children:`
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
      `}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Notification Channels"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/notifications",end:!0,title:"Notifications home",children:"Home"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/settings/email-templates",title:"Email Templates",children:"Email Templates"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/email-templates",title:"Admin Email Templates",children:"Admin Templates"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/sms-templates",title:"Admin SMS Templates",children:"SMS Templates"})]})]}),e.jsxs("div",{className:"grid grid-4",children:[e.jsxs("div",{className:"card channel",children:[e.jsxs("div",{className:"channel-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Email"}),e.jsx("p",{className:"muted",children:"Transactional and system messages"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,disabled:!0}),e.jsx("span",{})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Order updates"}),e.jsx("li",{children:"Invoice issued"}),e.jsx("li",{children:"Low stock alerts"}),e.jsx("li",{children:"Security notifications"})]}),e.jsxs("div",{className:"actions",children:[e.jsx(s,{to:"/settings/print-templates",className:"btn small ghost",title:"Manage print/email layouts",children:"Manage Templates"}),e.jsx(s,{to:"/reports/customers",className:"btn small ghost",title:"Open customer reports",children:"Open Reports"})]})]}),e.jsxs("div",{className:"card channel",children:[e.jsxs("div",{className:"channel-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"SMS"}),e.jsx("p",{className:"muted",children:"Time-critical alerts"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,disabled:!0}),e.jsx("span",{})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"OTP & verification"}),e.jsx("li",{children:"Payment failures"}),e.jsx("li",{children:"Shipment exceptions"})]}),e.jsxs("div",{className:"actions",children:[e.jsx(s,{to:"/admin/sms-templates",className:"btn small ghost",title:"Edit SMS templates",children:"Edit Templates"}),e.jsx(s,{to:"/shipments",className:"btn small ghost",title:"See all shipments",children:"Shipments"})]})]}),e.jsxs("div",{className:"card channel",children:[e.jsxs("div",{className:"channel-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"In-App"}),e.jsx("p",{className:"muted",children:"Bell icon feed & toasts"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,disabled:!0}),e.jsx("span",{})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Mentions & assignments"}),e.jsx("li",{children:"Approvals pending"}),e.jsx("li",{children:"Import/Export status"})]}),e.jsxs("div",{className:"actions",children:[e.jsx(s,{to:"/notifications",className:"btn small ghost",title:"Open notifications center",children:"Open Center"}),e.jsx(s,{to:"/tools/import-export",className:"btn small ghost",title:"Go to Import/Export",children:"Import / Export"})]})]}),e.jsxs("div",{className:"card channel",children:[e.jsxs("div",{className:"channel-head",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Push"}),e.jsx("p",{className:"muted",children:"Mobile & desktop push"})]}),e.jsxs("label",{className:"switch",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,disabled:!0}),e.jsx("span",{})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Shipment out for delivery"}),e.jsx("li",{children:"Invoice payment received"})]}),e.jsxs("div",{className:"actions",children:[e.jsx(s,{to:"/shipments",className:"btn small ghost",title:"Shipments list",children:"Track Shipments"}),e.jsx(s,{to:"/invoices",className:"btn small ghost",title:"Invoices list",children:"Invoices"})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Subscriptions Matrix"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/admin/users",title:"Users",children:"Users"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/roles",title:"Roles",children:"Roles"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/permissions",title:"Permissions",children:"Permissions"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"table-scroll",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"SMS"}),e.jsx("th",{children:"In-App"}),e.jsx("th",{children:"Push"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:[{ev:"Order Placed",links:["/orders","/reports/sales"]},{ev:"Order Shipped",links:["/shipments","/orders"]},{ev:"Invoice Issued",links:["/invoices","/reports/finance"]},{ev:"Payment Received",links:["/sales/payments","/invoices"]},{ev:"Low Stock",links:["/inventory","/inventory/reorder"]},{ev:"PO Approved",links:["/purchase-orders","/vendors"]}].map((l,c)=>e.jsxs("tr",{children:[e.jsx("td",{className:"event",children:l.ev}),Array.from({length:4}).map((d,o)=>e.jsx("td",{children:e.jsx("span",{className:"badge on",title:"Enabled",children:"ON"})},o)),e.jsx("td",{className:"quick-links",children:l.links.map((d,o)=>e.jsx(s,{to:d,className:"tiny-link",children:d},o))})]},c))})]})}),e.jsx("div",{className:"note muted",children:"Display-only demo. Toggle changes are disabled."})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Digests & Quiet Hours"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/numbering",title:"Document numbering",children:"Numbering"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/settings/currencies",title:"Currencies",children:"Currencies"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/settings/units",title:"Units of measure",children:"Units"})]})]}),e.jsxs("div",{className:"grid grid-3",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"subhead",children:"Daily Digest"}),e.jsx("p",{className:"muted",children:"Sent once a day with summarized events."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"08:30hrs"}),e.jsx("span",{className:"chip",children:"Includes: Orders, Invoices, Inventory"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"subhead",children:"Weekly Digest"}),e.jsx("p",{className:"muted",children:"Compact overview for leadership."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Sat 09:00hrs"}),e.jsx("span",{className:"chip",children:"Includes: Finance, Procurement"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"subhead",children:"Quiet Hours"}),e.jsx("p",{className:"muted",children:"Outbound notifications are paused."}),e.jsx("div",{className:"chips",children:e.jsx("span",{className:"chip",children:"22:00hrs → 07:00hrs"})})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Templates"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/admin/email-templates",title:"Admin Email Templates",children:"Admin Email"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/sms-templates",title:"Admin SMS Templates",children:"Admin SMS"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/settings/print-templates",title:"Print Templates",children:"Print Templates"})]})]}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"templates",children:[{name:"Order Confirmation",route:"/admin/email-templates"},{name:"Invoice Issued",route:"/admin/email-templates"},{name:"Payment Received",route:"/admin/email-templates"},{name:"Shipment Dispatched",route:"/admin/email-templates"},{name:"Low Stock Alert",route:"/admin/email-templates"},{name:"Password Reset",route:"/admin/email-templates"}].map((l,c)=>e.jsxs(x,{to:l.route,className:"tpl",children:[e.jsx("span",{className:"dot-bullet","aria-hidden":"true"}),l.name]},c))})})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Outbound Endpoints (Read-only)"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/webhooks",title:"Webhooks",children:"Manage Webhooks"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/tools/playground",title:"Playground",children:"Playground"})]})]}),e.jsxs("div",{className:"grid grid-2",children:[e.jsxs("div",{className:"card endpoint",children:[e.jsx("h3",{className:"subhead",children:"Email Provider"}),e.jsx("code",{className:"code",children:"POST https://api.example.com/v1/email/send"}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Auth: Bearer ••••"}),e.jsx("span",{className:"chip",children:"Timeout: 10s"})]})]}),e.jsxs("div",{className:"card endpoint",children:[e.jsx("h3",{className:"subhead",children:"SMS Provider"}),e.jsx("code",{className:"code",children:"POST https://api.example.com/v1/sms/send"}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"DND Compliance"}),e.jsx("span",{className:"chip",children:"Timeout: 5s"})]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{className:"title",children:"Recent Notification Activity"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/admin/audit-log",title:"Audit Log",children:"Audit Log"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(s,{to:"/admin/activity",title:"System Activity",children:"System Activity"})]})]}),e.jsx("div",{className:"card timeline",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"time",children:"Sat Oct 04 2025 09:02:11hrs"}),e.jsx("span",{className:"label",children:"Email"}),e.jsxs("span",{children:["Invoice INV-2031 sent to ",e.jsx("i",{children:"arpit@example.com"})]}),e.jsx(s,{to:"/invoices/INV-2031",className:"tiny-link",children:"/invoices/INV-2031"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"time",children:"Sat Oct 04 2025 08:30:00hrs"}),e.jsx("span",{className:"label",children:"Digest"}),e.jsx("span",{children:"Daily digest generated for Admins"}),e.jsx(s,{to:"/reports/finance",className:"tiny-link",children:"/reports/finance"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"time",children:"Fri Oct 03 2025 18:22:45hrs"}),e.jsx("span",{className:"label",children:"SMS"}),e.jsx("span",{children:"Shipment S-1023 out for delivery"}),e.jsx(s,{to:"/shipments/S-1023",className:"tiny-link",children:"/shipments/S-1023"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"time",children:"Fri Oct 03 2025 11:05:10hrs"}),e.jsx("span",{className:"label",children:"In-App"}),e.jsx("span",{children:"PO PO-5017 approved by Priya"}),e.jsx(s,{to:"/purchase-orders/PO-5017",className:"tiny-link",children:"/purchase-orders/PO-5017"})]})]})})]})]})]})};export{g as default};
