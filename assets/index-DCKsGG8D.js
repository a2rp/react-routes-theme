import{d as o,q as O,r as c,j as e,N as x}from"./index-Dvs-eF3B.js";const p="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",n="var(--card, #111318)",l="var(--border, #23262d)",a="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",h={Page:o.div`
        padding: 24px 0 64px;
        color: ${p};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${b};
            }
            .current {
                color: ${p};
            }
        }
    `,Header:o.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${b};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${n};
            color: ${p};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${P};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Banner:o.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${l};
        border-radius: 10px;
        background: color-mix(in oklab, ${a} 10%, transparent);
        color: ${p};
    `,Layout:o.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
            overflow: hidden;
        }
    `,Toolbar:o.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 12px;
        border-bottom: 1px solid ${l};
        background: ${n};

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .filters input,
        .filters select {
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: ${n};
            color: ${p};
            padding: 0 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters input:focus,
        .filters select:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${P};
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            height: 36px;
            padding: 0 12px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: ${n};
            color: ${p};
            font-weight: 600;
        }
        .actions button:hover:not(:disabled) {
            border-color: ${a};
            color: ${a};
        }
        .actions button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,TableWrap:o.div`
        padding: 10px;
    `,Table:o.div`
        --row-h: 46px;

        border: 1px solid ${l};
        border-radius: 10px;
        overflow: hidden;
        background: ${n};

        .thead {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${n};
        }
        .tr {
            display: grid;
            grid-template-columns: 70px minmax(220px, 1.2fr) 160px 160px 160px 90px 100px 130px 110px 140px 140px 150px 220px;
            align-items: center;
            min-height: var(--row-h);
            border-bottom: 1px solid ${l};
        }

        .th,
        .td {
            padding: 8px 10px;
        }
        .th {
            font-weight: 600;
            color: ${a};
            position: sticky;
            top: 0;
            background: ${n};
        }
        .th.num,
        .td.num {
            text-align: right;
        }

        .td.sticky,
        .th.sticky {
            position: sticky;
            left: 0;
            z-index: 2;
            background: ${n};
            border-right: 1px solid ${l};
        }

        .tbody .tr:nth-child(2n) {
            background: color-mix(in oklab, ${n} 92%, transparent);
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${a} 8%, transparent);
        }

        .prod .name {
            font-weight: 600;
        }
        .muted {
            color: ${b};
        }
        .small {
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${l};
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
        .chip.soft {
            background: color-mix(in oklab, ${a} 6%, transparent);
        }
        .status.packed {
        }
        .status.pending {
            opacity: 0.9;
        }
        .status.backorder {
        }
        .status.cancelled {
            opacity: 0.75;
            text-decoration: line-through;
        }
        .status.shipped {
        }
    `,Pager:o.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 4px;
        color: ${b};
        button {
            border: 1px solid ${l};
            background: ${n};
            color: ${p};
            border-radius: 8px;
            width: 36px;
            height: 32px;
        }
        button:hover:not(:disabled) {
            border-color: ${a};
            color: ${a};
        }
        button:disabled {
            opacity: 0.55;
        }
    `,Side:o.aside`
        display: grid;
        gap: 16px;

        .card {
            padding: 14px;
        }
        h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .metaList {
            display: grid;
            gap: 8px;
        }
        .metaList .k {
            width: 110px;
            display: inline-block;
            color: ${b};
        }
        .metaList .v {
            color: ${p};
        }

        .totals {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .totals li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${l};
            padding: 8px 10px;
            border-radius: 10px;
            background: ${n};
        }
        .totals li.grand {
            box-shadow: 0 0 0 3px ${P};
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${b};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: ${n};
        }
        .links a:hover {
            color: ${a};
            border-color: ${a};
        }

        .printGrid {
            display: grid;
            gap: 8px;
        }
        .printGrid .full {
            grid-column: 1 / -1;
        }
        .printGrid .k {
            color: ${b};
            display: inline-block;
            width: 140px;
        }
        .printGrid .v {
            color: ${p};
        }
    `},k=(j,N)=>{const d=j instanceof Date?j:new Date(j),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=v=>String(v).padStart(2,"0"),w=`${g[d.getDay()]} ${T[d.getMonth()]} ${m(d.getDate())} ${d.getFullYear()}`;return N?`${w} ${m(d.getHours())}:${m(d.getMinutes())}:${m(d.getSeconds())}hrs`:w},R=()=>{const{orderId:j="ORD-3001"}=O(),[N,d]=c.useState(""),[g,T]=c.useState("all"),[m,w]=c.useState("line"),[v,C]=c.useState(""),M=c.useRef(null),t=c.useMemo(()=>({id:j,customerId:"CUST-1001",customerName:"Bluewave Traders",channel:"Web",status:"Partially Packed",createdAt:"2025-10-04T10:12:34+05:30",updatedAt:"2025-10-04T15:38:20+05:30",currency:"₹",totals:{items:"₹18,920.00",tax:"₹1,812.40",discount:"₹500.00",shipping:"₹0.00",grand:"₹20,232.40"}}),[j]),E=c.useMemo(()=>[{line:1,id:"ITEM-01",sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",batch:"B-AX-23-091",expiry:"2026-02-28",qty:"20",uom:"Strip",price:"₹120.00",tax:"12%",discount:"₹0.00",amount:"₹2,400.00",status:"Packed",notes:"Keep dry"},{line:2,id:"ITEM-02",sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",batch:"P-650-24-005",expiry:"2027-01-15",qty:"50",uom:"Strip",price:"₹32.00",tax:"5%",discount:"₹50.00",amount:"₹1,550.00",status:"Pending",notes:"Gift pack promo"},{line:3,id:"ITEM-03",sku:"MED-ALB-200",name:"Albendazole 200mg",batch:"ALB-0924-77",expiry:"2026-09-30",qty:"120",uom:"Tab",price:"₹4.50",tax:"12%",discount:"₹0.00",amount:"₹540.00",status:"Packed",notes:"—"},{line:4,id:"ITEM-04",sku:"MED-RABE-20",name:"Rabeprazole 20mg",batch:"RBZ-24-221",expiry:"2027-03-31",qty:"80",uom:"Tab",price:"₹7.80",tax:"12%",discount:"₹0.00",amount:"₹624.00",status:"Backorder",notes:"ETA next week"},{line:5,id:"ITEM-05",sku:"MED-AZT-500",name:"Azithromycin 500mg",batch:"AZT-23-199",expiry:"2026-12-31",qty:"60",uom:"Tab",price:"₹21.00",tax:"12%",discount:"₹150.00",amount:"₹1,110.00",status:"Packed",notes:"Lot check"},{line:6,id:"ITEM-06",sku:"MED-VITC-1G",name:"Vitamin C 1000mg",batch:"VTC-25-014",expiry:"2027-05-31",qty:"40",uom:"Bottle",price:"₹199.00",tax:"12%",discount:"₹0.00",amount:"₹7,960.00",status:"Pending",notes:"Batch QC pending"},{line:7,id:"ITEM-07",sku:"MED-ORS-21",name:"ORS Sachet",batch:"ORS-9925",expiry:"2026-07-31",qty:"100",uom:"Sachet",price:"₹18.00",tax:"5%",discount:"₹0.00",amount:"₹1,800.00",status:"Cancelled",notes:"Customer request"},{line:8,id:"ITEM-08",sku:"MED-ZINC-50",name:"Zinc 50mg",batch:"ZNC-24-08",expiry:"2026-04-30",qty:"90",uom:"Tab",price:"₹6.80",tax:"12%",discount:"₹0.00",amount:"₹612.00",status:"Packed",notes:"—"},{line:9,id:"ITEM-09",sku:"MED-IBU-400",name:"Ibuprofen 400mg",batch:"IBU-24-55",expiry:"2026-11-30",qty:"70",uom:"Tab",price:"₹10.50",tax:"12%",discount:"₹0.00",amount:"₹735.00",status:"Shipped",notes:"From WH-2"}],[]),S=c.useMemo(()=>{let s=E;const y=N.trim().toLowerCase();y&&(s=s.filter(i=>(i.name+" "+i.sku+" "+i.batch+" "+i.notes).toLowerCase().includes(y))),g!=="all"&&(s=s.filter(i=>i.status.toLowerCase()===g));const f=String(m||"line");return s=[...s].sort((i,u)=>f==="name"?i.name.localeCompare(u.name):f==="sku"?i.sku.localeCompare(u.sku):f==="expiry"?new Date(i.expiry)-new Date(u.expiry):i.line-u.line),s},[E,N,g,m]);c.useEffect(()=>{if(!v)return;const s=setTimeout(()=>C(""),3e3);return()=>clearTimeout(s)},[v]);const A=async()=>{const s="/react-routes-theme/".replace(/\/+$/,""),y=`${window.location.origin}${s}/orders/${t.id}/items`;try{await navigator.clipboard.writeText(y),C("Link copied")}catch{C("Could not copy link")}},D=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},I=()=>{const s=["Line","Product","SKU","Batch","Expiry","Qty","UOM","Price","Tax","Discount","Amount","Status","Notes"],y=S.map(r=>[r.line,r.name,r.sku,r.batch,r.expiry,r.qty,r.uom,r.price,r.tax,r.discount,r.amount,r.status,r.notes]),f=[s,...y].map(r=>r.map(B=>`"${String(B).replace(/"/g,'""')}"`).join(",")).join(`
`),i=new Blob([f],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(i),$=document.createElement("a");$.href=u,$.download=`${t.id}-items.csv`,document.body.appendChild($),$.click(),$.remove(),URL.revokeObjectURL(u)},L=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(x,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx(x,{to:`/orders/${t.id}`,children:t.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Items"})]});return e.jsxs(h.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(h.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Order Items"}),L,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Order: ",t.id]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",k(t.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",k(t.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:A,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:D,title:"Print items",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:I,title:"Export visible rows",children:"Export CSV"})]})]}),v&&e.jsx(h.Banner,{role:"status","aria-live":"polite",children:v}),e.jsxs(h.Layout,{children:[e.jsxs("div",{className:"main card",children:[e.jsxs(h.Toolbar,{children:[e.jsxs("div",{className:"filters",children:[e.jsx("input",{type:"text",placeholder:"Search items…",value:N,onChange:s=>d(s.target.value),"aria-label":"Search items"}),e.jsxs("select",{value:g,onChange:s=>T(s.target.value),"aria-label":"Filter by status",children:[e.jsx("option",{value:"all",children:"All statuses"}),e.jsx("option",{value:"packed",children:"Packed"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"backorder",children:"Backorder"}),e.jsx("option",{value:"shipped",children:"Shipped"}),e.jsx("option",{value:"cancelled",children:"Cancelled"})]}),e.jsxs("select",{value:m,onChange:s=>w(s.target.value),"aria-label":"Sort items",children:[e.jsx("option",{value:"line",children:"Sort: Line"}),e.jsx("option",{value:"name",children:"Sort: Name"}),e.jsx("option",{value:"sku",children:"Sort: SKU"}),e.jsx("option",{value:"expiry",children:"Sort: Expiry"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"Add Item"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Delete Selected"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Bulk Update"})]})]}),e.jsxs(h.TableWrap,{children:[e.jsxs(h.Table,{role:"table","aria-label":"Order items",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th sticky",role:"columnheader",children:"Line"}),e.jsx("div",{className:"th",role:"columnheader",children:"Product"}),e.jsx("div",{className:"th",role:"columnheader",children:"SKU"}),e.jsx("div",{className:"th",role:"columnheader",children:"Batch"}),e.jsx("div",{className:"th",role:"columnheader",children:"Expiry"}),e.jsx("div",{className:"th num",role:"columnheader",children:"Qty"}),e.jsx("div",{className:"th",role:"columnheader",children:"UOM"}),e.jsx("div",{className:"th num",role:"columnheader",children:"Price"}),e.jsx("div",{className:"th",role:"columnheader",children:"Tax"}),e.jsx("div",{className:"th num",role:"columnheader",children:"Discount"}),e.jsx("div",{className:"th num",role:"columnheader",children:"Amount"}),e.jsx("div",{className:"th",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th",role:"columnheader",children:"Notes"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:S.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td sticky",role:"cell",children:s.line}),e.jsx("div",{className:"td",role:"cell",children:e.jsxs("div",{className:"prod",children:[e.jsx("div",{className:"name",children:s.name}),e.jsx("div",{className:"muted small",children:s.id})]})}),e.jsx("div",{className:"td",role:"cell",children:s.sku}),e.jsx("div",{className:"td",role:"cell",children:s.batch}),e.jsx("div",{className:"td",role:"cell",children:k(s.expiry)}),e.jsx("div",{className:"td num",role:"cell",children:s.qty}),e.jsx("div",{className:"td",role:"cell",children:s.uom}),e.jsx("div",{className:"td num",role:"cell",children:s.price}),e.jsx("div",{className:"td",role:"cell",children:s.tax}),e.jsx("div",{className:"td num",role:"cell",children:s.discount}),e.jsx("div",{className:"td num",role:"cell",children:e.jsx("strong",{children:s.amount})}),e.jsx("div",{className:"td",role:"cell",children:e.jsx("span",{className:`chip status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("div",{className:"td",role:"cell",children:s.notes})]},s.id))})]}),e.jsxs(h.Pager,{children:[e.jsx("button",{disabled:!0,"aria-label":"Previous page",children:"‹"}),e.jsxs("span",{children:["Page 1 of 1 • ",S.length," items"]}),e.jsx("button",{disabled:!0,"aria-label":"Next page",children:"›"})]})]})]}),e.jsxs(h.Side,{className:"side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Order"}),e.jsxs("div",{className:"metaList",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"ID"}),e.jsx("span",{className:"v",children:t.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:e.jsx(x,{to:`/customers/${t.customerId}`,children:t.customerName})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Channel"}),e.jsx("span",{className:"v",children:t.channel})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:"chip soft",children:t.status})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:k(t.createdAt,!0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:k(t.updatedAt,!0)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Totals"}),e.jsxs("ul",{className:"totals",children:[e.jsxs("li",{children:[e.jsx("span",{children:"Items"}),e.jsx("strong",{children:t.totals.items})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Tax"}),e.jsx("strong",{children:t.totals.tax})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Discount"}),e.jsx("strong",{children:t.totals.discount})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Shipping"}),e.jsx("strong",{children:t.totals.shipping})]}),e.jsxs("li",{className:"grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("strong",{children:t.totals.grand})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Related"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(x,{to:`/orders/${t.id}`,children:"Order Details"})}),e.jsx("li",{children:e.jsx(x,{to:`/orders/${t.id}/invoice`,children:"Invoice"})}),e.jsx("li",{children:e.jsx(x,{to:`/orders/${t.id}/print`,children:"Print Order"})}),e.jsx("li",{children:e.jsx(x,{to:`/customers/${t.customerId}`,children:"Customer"})}),e.jsx("li",{children:e.jsx(x,{to:"/shipments",children:"Shipments"})})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:M,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printGrid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:t.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:t.customerName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Items (visible)"}),e.jsx("span",{className:"v",children:S.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:k(t.updatedAt,!0)})]}),e.jsx("div",{className:"full",children:e.jsx("div",{className:"small muted",children:"This print shows the summary and currently visible items count."})})]})]})]})]})]})};export{R as default};
