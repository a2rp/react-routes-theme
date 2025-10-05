import{d as t,q as M,r as v,j as e,N as n}from"./index-Dm9gfKqL.js";const g="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",h="var(--card, #111318)",o="var(--border, #23262d)",a="var(--accent, #5aa9ff)",N="var(--accent-soft, rgba(90,169,255,0.15))",R=t.div`
    width: 100%;
    color: ${g};
`,T=t.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
    a {
        color: ${c};
    }
    a:hover {
        color: ${a};
    }
    span[aria-current="page"] {
        color: ${g};
    }
`,E=t.header`
    padding: 16px;
    display: grid;
    gap: 16px;

    .title {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .sub {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
            color: ${c};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .link {
            color: ${a};
        }
    }

    .right {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`,D=t.span`
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid ${o};
    background: color-mix(in oklab, ${a} 12%, transparent);
    color: ${a};
    font-size: 12px;
    font-weight: 600;
`,k=t.span`
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid ${o};
    background: ${h};
    color: ${c};
    font-size: 12px;
`,I=t.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
    > div {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    }
    span {
        color: ${c};
    }
    .chip {
        background: color-mix(in oklab, ${a} 12%, transparent);
        color: ${a};
        border: 1px solid ${o};
        padding: 2px 8px;
        border-radius: 999px;
    }
    .tags {
        grid-column: 1 / -1;
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .tagrow {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    a {
        color: ${a};
    }
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,L=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    .btn {
        background: ${h};
        border: 1px solid ${o};
        color: ${g};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            color 0.2s ease, background 0.2s ease;
    }
    .btn:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${N};
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
    .danger {
        border-color: ${o};
    }
    .note {
        margin-left: 8px;
        font-size: 12px;
        color: ${c};
    }
    .left,
    .right {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
`,P=t.div`
    margin-top: 8px;
    display: grid;
    gap: 12px;
    grid-template-columns: ${({cols:l})=>`repeat(${l||2}, minmax(0,1fr))`};
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`,b=t.div`
    padding: 14px;
    display: grid;
    gap: 6px;
    span {
        color: ${c};
    }
    strong {
        font-size: 22px;
    }
    em {
        color: ${c};
        font-style: normal;
    }
    b {
        font-size: 16px;
    }
`,j=t.section`
    margin-top: 12px;
    padding: 16px;
    .section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }
    .sec-actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .link {
        color: ${a};
    }
    .inner {
        padding: 12px;
    }
    .list {
        display: grid;
        gap: 8px;
        margin-top: 8px;
    }
    .tableWrap {
        overflow: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    th,
    td {
        padding: 10px;
        border-bottom: 1px solid ${o};
    }
    th {
        text-align: left;
        background: ${h};
        color: ${a};
    }
    td.links a {
        margin-right: 8px;
        color: ${a};
    }
    .muted {
        color: ${c};
    }
`,B=t.ul`
    display: grid;
    gap: 8px;
    .file {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid ${o};
        border-radius: 10px;
        background: ${h};
    }
    .actions {
        display: flex;
        gap: 8px;
    }
    button {
        background: ${h};
        color: ${g};
        border: 1px solid ${o};
        padding: 6px 10px;
        border-radius: 8px;
        cursor: not-allowed;
        opacity: 0.65;
    }
`,G=t.ul`
    position: relative;
    padding-left: 18px;
    display: grid;
    gap: 12px;
    &::before {
        content: "";
        position: absolute;
        left: 6px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: ${o};
    }
    li {
        position: relative;
    }
    .dot {
        position: absolute;
        left: -2px;
        top: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${a};
        box-shadow: 0 0 0 3px ${N};
    }
    .content {
        padding-left: 8px;
    }
    .row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
    }
    .muted {
        color: ${c};
    }
    a {
        color: ${a};
    }
`,X=t.div`
    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .panel {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(560px, 92vw);
        padding: 16px;
        border-radius: 12px;
    }
    h3 {
        margin-bottom: 6px;
    }
    p {
        margin-bottom: 12px;
    }
    .actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
    }
    button {
        background: ${h};
        color: ${g};
        border: 1px solid ${o};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    button:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${N};
    }
    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;t.div`
    background: ${h};
    border: 1px solid ${o};
    border-radius: 12px;
    box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
`;const V=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function w(l){const d=new Date(l);return`${V[d.getDay()]} ${K[d.getMonth()]} ${String(d.getDate()).padStart(2,"0")} ${d.getFullYear()}`}function f(l){const d=new Date(l),p=String(d.getHours()).padStart(2,"0"),m=String(d.getMinutes()).padStart(2,"0"),u=String(d.getSeconds()).padStart(2,"0");return`${w(l)} ${p}:${m}:${u}hrs`}const $={"BOM-1001":{id:"BOM-1001",productId:"MED-AMOX-500",productName:"Amoxicillin 500mg Capsule",productSku:"AMOX-500-CAP",uom:"Box (10x10)",version:"v3",status:"Active",createdAt:"2025-06-17T09:12:06+05:30",updatedAt:"2025-10-04T12:45:10+05:30",owner:{id:"USR-0021",name:"Priya Verma"},tags:["Pharma","Antibiotic","Regulated"],outputs:[{sku:"AMOX-500-CAP",qty:1e3,uom:"Capsules"},{sku:"AMOX-500-BLISTER",qty:100,uom:"Blisters (10x1)"}],summary:{materials:{lines:7,cost:"₹ 48,900.00"},operations:{steps:5,cost:"₹ 14,250.00"},overheads:"₹ 6,000.00",total:"₹ 69,150.00",stdYield:"98.5%",scrap:"1.5%"},materials:[{id:"RM-API-AMOX",name:"Amoxicillin Trihydrate",sku:"API-AMOX-TRI",per:"520 g",uom:"g",scrap:"0.5%",vendor:{id:"VEND-2003",name:"Solvent Labs"},lastPrice:"₹ 2,300.00 / 100g",productId:"API-AMOX-TRI"},{id:"RM-STARCH",name:"Pregelatinized Starch",sku:"EXC-PGS-01",per:"180 g",uom:"g",scrap:"0.0%",vendor:{id:"VEND-1031",name:"Acme Excipients"},lastPrice:"₹ 450.00 / kg",productId:"EXC-PGS-01"},{id:"RM-MCC",name:"Microcrystalline Cellulose",sku:"EXC-MCC-102",per:"220 g",uom:"g",scrap:"0.2%",vendor:{id:"VEND-1031",name:"Acme Excipients"},lastPrice:"₹ 520.00 / kg",productId:"EXC-MCC-102"},{id:"RM-MGST",name:"Magnesium Stearate",sku:"EXC-MGST",per:"6 g",uom:"g",scrap:"0.0%",vendor:{id:"VEND-2090",name:"Unified Chem"},lastPrice:"₹ 1,300.00 / kg",productId:"EXC-MGST"},{id:"RM-CAP",name:"Hard Gelatin Capsules 0#",sku:"PKG-CAP-0",per:"1000 pcs",uom:"pcs",scrap:"0.6%",vendor:{id:"VEND-4501",name:"CapsuTech"},lastPrice:"₹ 0.85 / pc",productId:"PKG-CAP-0"},{id:"RM-BLISTER",name:"Blister Foil (Alu-Alu)",sku:"PKG-BLST-ALU",per:"100 sheets",uom:"sheets",scrap:"0.2%",vendor:{id:"VEND-7710",name:"Packright"},lastPrice:"₹ 32.00 / sheet",productId:"PKG-BLST-ALU"},{id:"RM-CARTON",name:"Mono Carton",sku:"PKG-CARTON-10x10",per:"100 boxes",uom:"boxes",scrap:"0.0%",vendor:{id:"VEND-7710",name:"Packright"},lastPrice:"₹ 4.10 / box",productId:"PKG-CARTON-10x10"}],operations:[{code:"OP-01",name:"Mixing",workcenter:"Mixer-200L",setup:"20 min",run:"45 min / batch",overlap:"No",doc:"SOP-MIX-200L",attachments:[{name:"SOP-MIX-200L.pdf",href:"#"}]},{code:"OP-02",name:"Granulation",workcenter:"Granulator-120",setup:"15 min",run:"30 min / batch",overlap:"Yes",doc:"SOP-GRN-120",attachments:[{name:"SOP-GRN-120.pdf",href:"#"}]},{code:"OP-03",name:"Drying",workcenter:"Tray Dryer-24",setup:"10 min",run:"50 min / batch",overlap:"No",doc:"SOP-DRY-24",attachments:[{name:"SOP-DRY-24.pdf",href:"#"}]},{code:"OP-04",name:"Capsule Filling",workcenter:"Capsule-Fill-40K",setup:"25 min",run:"60 min / batch",overlap:"Yes",doc:"SOP-CAP-40K",attachments:[{name:"SOP-CAP-40K.pdf",href:"#"}]},{code:"OP-05",name:"Blister & Cartoning",workcenter:"Blister-200 / Carton-XL",setup:"15 min",run:"40 min / batch",overlap:"Yes",doc:"SOP-PKG-200",attachments:[{name:"SOP-PKG-200.pdf",href:"#"}]}],revisions:[{id:"REV-003",by:"Priya Verma",on:"2025-10-04T12:45:10+05:30",note:"Updated capsule shell scrap to 0.6% and packaging counts."},{id:"REV-002",by:"Ravi Kumar",on:"2025-09-12T18:20:00+05:30",note:"Added Alu-Alu blister specs and SOP links."},{id:"REV-001",by:"Priya Verma",on:"2025-08-01T10:12:42+05:30",note:"Initial release for AMOX 500."}],attachments:[{name:"Spec-AMOX500.pdf",kind:"Specification",href:"#"},{name:"CoA-Sample.pdf",kind:"Certificate of Analysis",href:"#"},{name:"Stability-Protocol.pdf",kind:"Stability Protocol",href:"#"}],related:{workOrders:[{id:"WO-4012",status:"In Queue",planned:"2025-10-09T09:00:00+05:30"},{id:"WO-3980",status:"Completed",planned:"2025-09-20T10:00:00+05:30"}],purchaseOrders:[{id:"PO-1011",vendorId:"VEND-2003",on:"2025-09-26T16:12:00+05:30"}],inventoryLinks:[{label:"Batches",to:"/inventory/batches"},{label:"Lots",to:"/inventory/lots"},{label:"Reorder Planner",to:"/inventory/reorder"}]}}};function U({open:l,title:d,message:p,onCancel:m,onConfirm:u}){return l?e.jsxs(X,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[e.jsx("div",{className:"backdrop",onClick:m}),e.jsxs("div",{className:"panel card",children:[e.jsx("h3",{id:"confirm-title",children:d}),e.jsx("p",{className:"muted",children:p}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:m,children:"Close"}),e.jsx("button",{disabled:!0,title:"Demo mode: action unavailable",children:"Confirm"})]})]})]}):null}function z(){const{bomId:l}=M(),[d,p]=v.useState(!1),[m,u]=v.useState(!1),y=l||"BOM-1001",r=v.useMemo(()=>$[y]??$["BOM-1001"],[y]),O=async()=>{var s;try{const i=window.location.href;await((s=navigator.clipboard)==null?void 0:s.writeText(i)),u(!0),setTimeout(()=>u(!1),1800)}catch{}},C=()=>{const s=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),i=URL.createObjectURL(s),x=document.createElement("a");x.href=i,x.download=`${r.id}.json`,document.body.appendChild(x),x.click(),x.remove(),URL.revokeObjectURL(i)},S=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},50)};return e.jsxs(R,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(T,{children:[e.jsx(n,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(n,{to:"/manufacturing",children:"Manufacturing"}),e.jsx("span",{children:"/"}),e.jsx(n,{to:"/manufacturing/bom",children:"BOM"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:r.id})]}),e.jsxs(E,{className:"card",children:[e.jsxs("div",{className:"title",children:[e.jsxs("div",{children:[e.jsx("h1",{children:r.productName}),e.jsxs("div",{className:"sub",children:[e.jsx("span",{className:"mono",children:r.id}),e.jsx("span",{children:"•"}),e.jsx(n,{className:"link",to:`/products/${r.productId}`,children:r.productSku}),e.jsx("span",{children:"•"}),e.jsx("span",{children:r.uom})]})]}),e.jsxs("div",{className:"right",children:[e.jsx(D,{status:r.status,children:r.status}),e.jsx(k,{children:r.version})]})]}),e.jsxs(I,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Created"}),e.jsx("strong",{children:f(r.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Updated"}),e.jsx("strong",{children:f(r.updatedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Owner"}),e.jsx(n,{to:`/admin/users/${r.owner.id}`,children:r.owner.name})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Output"}),r.outputs.map((s,i)=>e.jsxs("span",{className:"chip",children:[s.qty," ",s.uom," ",e.jsx("em",{className:"mono",children:s.sku})]},i))]}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{children:"Tags"}),e.jsx("div",{className:"tagrow",children:r.tags.map(s=>e.jsx(k,{children:s},s))})]})]}),e.jsxs(L,{children:[e.jsxs("div",{className:"left",children:[e.jsx(n,{className:"btn",to:"/manufacturing/bom",children:"All BOMs"}),e.jsx(n,{className:"btn",to:"/manufacturing/work-orders",children:"Work Orders"}),e.jsx(n,{className:"btn",to:"/inventory/batches",children:"Batches"}),e.jsx(n,{className:"btn",to:"/reports/inventory",children:"Inventory Report"})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{className:"btn",onClick:O,title:"Copy link to clipboard",children:["Copy Link ",m&&e.jsx("span",{className:"note",children:"Copied"})]}),e.jsx("button",{className:"btn",onClick:C,children:"Export JSON"}),e.jsx("button",{className:"btn",onClick:S,children:"Print"}),e.jsx("button",{className:"btn",disabled:!0,title:"Demo mode: edit unavailable",children:"Edit"}),e.jsx("button",{className:"btn danger",onClick:()=>p(!0),children:"Archive"})]})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(P,{cols:"4",className:"mt16",children:[e.jsxs(b,{className:"card",children:[e.jsx("span",{children:"Material Lines"}),e.jsx("strong",{children:r.summary.materials.lines}),e.jsx("em",{children:"Est. Material Cost"}),e.jsx("b",{children:r.summary.materials.cost})]}),e.jsxs(b,{className:"card",children:[e.jsx("span",{children:"Operations"}),e.jsx("strong",{children:r.summary.operations.steps}),e.jsx("em",{children:"Est. Operation Cost"}),e.jsx("b",{children:r.summary.operations.cost})]}),e.jsxs(b,{className:"card",children:[e.jsx("span",{children:"Overheads"}),e.jsx("strong",{children:"-"}),e.jsx("em",{children:"Allocated"}),e.jsx("b",{children:r.summary.overheads})]}),e.jsxs(b,{className:"card",children:[e.jsx("span",{children:"Total Cost"}),e.jsx("strong",{children:"-"}),e.jsx("em",{children:"Per Batch"}),e.jsx("b",{children:r.summary.total})]})]}),e.jsxs(j,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{children:"Materials"}),e.jsxs("div",{className:"sec-actions",children:[e.jsx(n,{to:"/vendors",className:"link",children:"Vendors"}),e.jsx("span",{children:"•"}),e.jsx(n,{to:"/inventory",className:"link",children:"Inventory"}),e.jsx("span",{children:"•"}),e.jsx(n,{to:"/purchase-orders",className:"link",children:"Purchase Orders"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Per Batch"}),e.jsx("th",{children:"Scrap"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{children:"Preferred Vendor"}),e.jsx("th",{children:"Last Price"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:r.materials.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsx(n,{to:`/products/${s.productId}`,className:"mono link",children:s.sku})}),e.jsx("td",{children:s.per}),e.jsx("td",{children:s.scrap}),e.jsx("td",{children:s.uom}),e.jsx("td",{children:e.jsx(n,{to:`/vendors/${s.vendor.id}`,className:"link",children:s.vendor.name})}),e.jsx("td",{children:s.lastPrice}),e.jsxs("td",{className:"links",children:[e.jsx(n,{to:"/inventory/lots",children:"Lots"}),e.jsx(n,{to:"/inventory/batches",children:"Batches"}),e.jsx(n,{to:"/inventory/reorder",children:"Reorder"})]})]},s.id))})]})})]}),e.jsxs(j,{className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"sec-actions",children:[e.jsx(n,{to:"/manufacturing/work-orders",className:"link",children:"Work Orders"}),e.jsx("span",{children:"•"}),e.jsx(n,{to:"/reports/production",className:"link",title:"Demo route suggestion",children:"Production Report"}),e.jsx("span",{children:"•"}),e.jsx(n,{to:"/settings/print-templates",className:"link",children:"Print Templates"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Op Code"}),e.jsx("th",{children:"Operation"}),e.jsx("th",{children:"Workcenter"}),e.jsx("th",{children:"Setup"}),e.jsx("th",{children:"Run"}),e.jsx("th",{children:"Overlap"}),e.jsx("th",{children:"Documents"})]})}),e.jsx("tbody",{children:r.operations.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:s.code}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.workcenter}),e.jsx("td",{children:s.setup}),e.jsx("td",{children:s.run}),e.jsx("td",{children:s.overlap}),e.jsxs("td",{className:"links",children:[e.jsx(n,{to:"/tools/playground",children:s.doc}),s.attachments.map((i,x)=>e.jsx("a",{href:i.href,onClick:A=>A.preventDefault(),title:"Demo file",children:i.name},x))]})]},s.code))})]})})]}),e.jsxs(j,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Attachments"})}),e.jsx(B,{children:r.attachments.map((s,i)=>e.jsxs("li",{className:"file",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s.name}),e.jsx("span",{className:"muted",children:s.kind})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:!0,title:"Demo mode",children:"Preview"}),e.jsx("button",{disabled:!0,title:"Demo mode",children:"Download"})]})]},i))})]}),e.jsxs(j,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Revisions"})}),e.jsx(G,{children:r.revisions.map(s=>e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"row",children:[e.jsx("strong",{children:s.id}),e.jsxs("span",{className:"muted",children:["by ",e.jsxs(n,{to:"/admin/users/USR-0021",children:[" ",s.by]})]}),e.jsx("span",{className:"muted",children:f(s.on)})]}),e.jsx("p",{children:s.note})]})]},s.id))})]}),e.jsxs(j,{className:"card",children:[e.jsx("div",{className:"section-head",children:e.jsx("h2",{children:"Related"})}),e.jsxs(P,{cols:"3",children:[e.jsxs("div",{className:"card inner",children:[e.jsx("h3",{children:"Work Orders"}),e.jsx("ul",{className:"list",children:r.related.workOrders.map(s=>e.jsxs("li",{children:[e.jsx(n,{to:`/manufacturing/work-orders/${s.id}`,children:s.id}),e.jsxs("span",{className:"muted",children:["• ",s.status]}),e.jsxs("span",{className:"muted",children:["• ",f(s.planned)]})]},s.id))}),e.jsx(n,{to:"/manufacturing/work-orders",className:"link",children:"All Work Orders"})]}),e.jsxs("div",{className:"card inner",children:[e.jsx("h3",{children:"Procurement"}),e.jsx("ul",{className:"list",children:r.related.purchaseOrders.map(s=>e.jsxs("li",{children:[e.jsx(n,{to:`/purchase-orders/${s.id}`,children:s.id}),e.jsxs("span",{className:"muted",children:["• ",e.jsx(n,{to:`/vendors/${s.vendorId}`,children:"Vendor"})]}),e.jsxs("span",{className:"muted",children:["• ",w(s.on)]})]},s.id))}),e.jsx(n,{to:"/purchase-orders",className:"link",children:"All Purchase Orders"})]}),e.jsxs("div",{className:"card inner",children:[e.jsx("h3",{children:"Inventory Quick Links"}),e.jsxs("ul",{className:"list",children:[r.related.inventoryLinks.map((s,i)=>e.jsx("li",{children:e.jsx(n,{to:s.to,children:s.label})},i)),e.jsx("li",{children:e.jsx(n,{to:`/products/${r.productId}`,children:"Output Product"})})]})]})]})]})]}),e.jsx(U,{open:d,title:"Archive BOM?",message:"This is a display-only demo. Archiving is disabled.",onCancel:()=>p(!1),onConfirm:()=>p(!1)})]})}export{z as default};
