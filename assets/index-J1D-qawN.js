import{d as w,q as M,u as H,r as c,j as e,N as P}from"./index-BscvFKDB.js";const v="var(--text, #f3f4f6)",g="var(--muted, #a0a0a7)",u="var(--card, #111318)",o="var(--border, #23262d)",f="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",G="var(--radius, 14px)",N={Page:w.div`
        padding: 20px 20px 64px;
        color: ${v};
        width: 100%;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${g};
            }
            .current {
                color: ${v};
            }
        }
    `,Header:w.header`
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
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            color: ${g};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${u};
            color: ${v};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${f};
            color: ${f};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${f};
            color: ${f};
        }
        .btnGhost[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Toolbar:w.section`
        padding: 12px 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: repeat(6, minmax(180px, 1fr));
            gap: 10px;
        }
        @media (max-width: 1200px) {
            .row {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 720px) {
            .row {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 520px) {
            .row {
                grid-template-columns: 1fr;
            }
        }

        .ctrl {
            display: grid;
            gap: 6px;
        }
        label {
            font-size: 12px;
            color: ${g};
        }
        .btnset {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .btnset button {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${o};
            background: ${u};
            color: ${v};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.06s;
        }
        .btnset button:hover {
            border-color: ${f};
            color: ${f};
        }
        .btnset button.on {
            border-color: ${f};
            color: ${f};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnset button:active {
            transform: translateY(1px);
        }
    `,Board:w.div`
        /* controls driving layout via data-attrs */
        --g: 16px;
        --pad: 16px;
        --margin: 12px;

        display: grid;
        gap: var(--g);
        padding: var(--pad);

        &[data-margin="none"] {
            --margin: 0px;
        }
        &[data-margin="narrow"] {
            --margin: 6px;
        }
        &[data-margin="normal"] {
            --margin: 12px;
        }

        /* label sizing */
        &[data-size="4x6"] {
            --w: 4in;
            --h: 6in;
        }
        &[data-size="a6"] {
            --w: 105mm;
            --h: 148mm;
        }
        &[data-size="a5half"] {
            --w: 148mm;
            --h: 210mm;
        }

        &[data-orient="landscape"] {
            --W: var(--h);
            --H: var(--w);
        }
        &[data-orient="portrait"] {
            --W: var(--w);
            --H: var(--h);
        }

        /* columns */
        grid-template-columns: repeat(var(--cols, 2), minmax(0, 1fr));
        &[data-perrow="1"] {
            --cols: 1;
        }
        &[data-perrow="2"] {
            --cols: 2;
        }
        &[data-perrow="3"] {
            --cols: 3;
        }

        background: color-mix(in oklab, ${u} 96%, transparent);
        border: 1px solid ${o};
        border-radius: 12px;

        .label {
            background: ${u};
            border: 1px solid ${o};
            border-radius: ${G};
            padding: calc(var(--margin) + 8px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
            position: relative;
            /* keep physical size in preview */
            width: var(--W);
            height: var(--H);
            overflow: hidden;
        }
    `,Label:w.div`
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 10px;
        color: ${v};

        .labelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .carrier {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .badge {
                border: 1px solid ${o};
                background: ${u};
                color: ${v};
                padding: 6px 10px;
                border-radius: 999px;
                font-weight: 700;
                font-size: 12px;
            }
            .service {
                color: ${g};
                font-size: 12px;
            }
            .meta {
                color: ${g};
                font-size: 12px;
                display: flex;
                gap: 8px;
            }
        }

        .zones {
            display: grid;
            grid-template-rows: auto 1fr;
            gap: 10px;
            height: 100%;
            &.with-safe {
                outline: 1px dashed ${o};
                outline-offset: 6px;
                border-radius: 8px;
            }

            .fromto {
                display: grid;
                grid-template-columns: 1.2fr 1.2fr 0.8fr;
                gap: 10px;
                .blk {
                    border: 1px solid ${o};
                    border-radius: 10px;
                    padding: 10px;
                    background: color-mix(in oklab, ${u} 92%, transparent);
                    h5 {
                        font-size: 12px;
                        color: ${g};
                        margin-bottom: 4px;
                    }
                    .txt {
                        font-size: 12px;
                        line-height: 1.5;
                    }
                    &.small .txt div {
                        margin-bottom: 4px;
                    }
                }
            }

            .track {
                display: grid;
                grid-template-rows: auto auto auto;
                gap: 6px;
                align-content: start;

                .code {
                    font-family: "Antonio", sans-serif;
                    font-size: 22px;
                    letter-spacing: 0.5px;
                    padding: 8px 10px;
                    border: 1px dashed ${o};
                    border-radius: 10px;
                    background: color-mix(in oklab, ${u} 90%, transparent);
                }

                .barcode {
                    width: 100%;
                    height: 72px;
                    border: 1px solid ${o};
                    border-radius: 8px;
                    background: ${u};
                }

                .under {
                    display: grid;
                    grid-template-columns: 1fr 1fr auto;
                    align-items: center;
                    gap: 10px;
                    .kw span {
                        color: ${g};
                        font-size: 12px;
                        display: block;
                    }
                    .kw strong {
                        font-size: 13px;
                    }
                    .qrWrap {
                        border: 1px solid ${o};
                        border-radius: 8px;
                        padding: 6px;
                        background: ${u};
                    }
                }
            }
        }

        .labelFoot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            .notes {
                color: ${g};
                font-size: 12px;
            }
            .brand {
                color: ${g};
                font-size: 12px;
            }
        }

        /* crop marks */
        .crop {
            --len: 12px;
            position: absolute;
            width: var(--len);
            height: var(--len);
            border-color: ${o};
            pointer-events: none;
            opacity: 0.9;
        }
        .crop.tl {
            top: 0;
            left: 0;
            border-top: 2px solid ${o};
            border-left: 2px solid ${o};
        }
        .crop.tr {
            top: 0;
            right: 0;
            border-top: 2px solid ${o};
            border-right: 2px solid ${o};
        }
        .crop.bl {
            bottom: 0;
            left: 0;
            border-bottom: 2px solid ${o};
            border-left: 2px solid ${o};
        }
        .crop.br {
            bottom: 0;
            right: 0;
            border-bottom: 2px solid ${o};
            border-right: 2px solid ${o};
        }
    `},$=a=>String(a).padStart(2,"0"),C=a=>{const r=a instanceof Date?a:new Date(a),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s[r.getDay()]} ${t[r.getMonth()]} ${$(r.getDate())} ${r.getFullYear()}`},z=a=>{const r=a instanceof Date?a:new Date(a);return`${C(r)} ${$(r.getHours())}:${$(r.getMinutes())}:${$(r.getSeconds())}hrs`},A=a=>{let r=2166136261;for(let s=0;s<a.length;s++)r^=a.charCodeAt(s),r=r*16777619>>>0;return r},R=({value:a})=>{const r=c.useMemo(()=>{const s=A(a),t=[];let p=0;for(let m=0;m<80;m++){const i=1+(s>>m%24&3),n=(s>>m%31&1)===1;t.push({x:p,w:i,on:n}),p+=i}return{arr:t,total:p}},[a]);return e.jsxs("svg",{className:"barcode",viewBox:`0 0 ${r.total} 60`,preserveAspectRatio:"none",children:[e.jsx("rect",{x:"0",y:"0",width:r.total,height:"60",fill:"var(--card, #111318)"}),r.arr.map((s,t)=>s.on?e.jsx("rect",{x:s.x,y:"0",width:s.w,height:"60",fill:"var(--text, #f3f4f6)"},t):null)]})},F=({value:a,size:r=21})=>{const s=c.useMemo(()=>{const p=A(a),x=Array.from({length:r},()=>Array(r).fill(!1)),m=(n,l)=>(p>>(n*7+l)%31&1)===1;for(let n=0;n<r;n++)for(let l=0;l<r;l++)x[n][l]=m(n,l);const i=(n,l)=>{for(let b=0;b<7;b++)for(let h=0;h<7;h++){const y=b===0||b===6||h===0||h===6,j=b>=2&&b<=4&&h>=2&&h<=4;x[n+b][l+h]=y||j}};return i(0,0),i(0,r-7),i(r-7,0),x},[a,r]),t=2;return e.jsxs("svg",{className:"qr",width:r*t,height:r*t,viewBox:`0 0 ${r} ${r}`,children:[e.jsx("rect",{x:"0",y:"0",width:r,height:r,fill:"var(--card, #111318)"}),s.flatMap((p,x)=>p.map((m,i)=>m?e.jsx("rect",{x:i,y:x,width:"1",height:"1",fill:"var(--text, #f3f4f6)"},`${x}-${i}`):null))]})},T=a=>({id:a,carrier:"BlueExpress",service:"Priority Air",createdAt:"2025-10-04T09:42:18+05:30",from:{name:"Bluewave Traders",line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India",phone:"+91 98111 22222"},to:{name:"Aarav Sharma",line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India",phone:"+91 98765 43210"},packages:[{pkgId:"PKG-01",tracking:"BLX-IND-560001-0001",weightKg:2.35,dims:"25 × 18 × 12 cm",cod:!1,ref:"ORD-3456 / INV-2031",notes:"Handle with care"},{pkgId:"PKG-02",tracking:"BLX-IND-560001-0002",weightKg:1.1,dims:"20 × 16 × 10 cm",cod:!1,ref:"ORD-3456 / INV-2031",notes:""}]}),K=()=>{const{shipmentId:a="SHIP-1001"}=M(),r=H();c.useRef(null);const s=c.useMemo(()=>T(a),[a]),[t,p]=c.useState("4x6"),[x,m]=c.useState("portrait"),[i,n]=c.useState(2),[l,b]=c.useState(!0),[h,y]=c.useState(!0),[j,k]=c.useState("normal"),[S,B]=c.useState(300),I=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};c.useEffect(()=>{t==="4x6"&&n(2),t==="a6"&&n(3),t==="a5half"&&n(2)},[t]);const L=e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Shipment"})," ",s.id]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Carrier"})," ",s.carrier]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Service"})," ",s.service]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Created"})," ",z(s.createdAt)]})]});return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Shipment Labels"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(P,{to:"/shipments",children:"Shipments"}),e.jsx("span",{children:"/"}),e.jsx(P,{to:`/shipments/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Labels"})]}),L]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>r(`/shipments/${s.id}`),title:"Back to shipment",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:I,title:"Print labels",children:"Print"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Export PDF (demo)",children:"Export PDF"})]})]}),e.jsx(N.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"Label size"}),e.jsxs("div",{className:"btnset",children:[e.jsx("button",{className:t==="4x6"?"on":"",onClick:()=>p("4x6"),children:"4 × 6 in"}),e.jsx("button",{className:t==="a6"?"on":"",onClick:()=>p("a6"),children:"A6"}),e.jsx("button",{className:t==="a5half"?"on":"",onClick:()=>p("a5half"),children:"A5 Half"})]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"Orientation"}),e.jsxs("div",{className:"btnset",children:[e.jsx("button",{className:x==="portrait"?"on":"",onClick:()=>m("portrait"),children:"Portrait"}),e.jsx("button",{className:x==="landscape"?"on":"",onClick:()=>m("landscape"),children:"Landscape"})]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"Per row"}),e.jsx("div",{className:"btnset",children:[1,2,3].map(d=>e.jsx("button",{className:i===d?"on":"",onClick:()=>n(d),children:d},d))})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"Margins"}),e.jsxs("div",{className:"btnset",children:[e.jsx("button",{className:j==="none"?"on":"",onClick:()=>k("none"),children:"None"}),e.jsx("button",{className:j==="narrow"?"on":"",onClick:()=>k("narrow"),children:"Narrow"}),e.jsx("button",{className:j==="normal"?"on":"",onClick:()=>k("normal"),children:"Normal"})]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"Guides"}),e.jsxs("div",{className:"btnset",children:[e.jsx("button",{className:l?"on":"",onClick:()=>b(!l),children:"Crop Marks"}),e.jsx("button",{className:h?"on":"",onClick:()=>y(!h),children:"Safe Area"})]})]}),e.jsxs("div",{className:"ctrl",children:[e.jsx("label",{children:"DPI"}),e.jsx("div",{className:"btnset",children:[203,300,600].map(d=>e.jsx("button",{className:S===d?"on":"",onClick:()=>B(d),children:d},d))})]})]})}),e.jsx(N.Board,{id:"search-print-area","data-perrow":i,"data-size":t,"data-orient":x,"data-margin":j,"data-dpi":S,children:s.packages.map(d=>e.jsx(W,{shipment:s,pkg:d,crop:l,safe:h},d.pkgId))})]})},W=({shipment:a,pkg:r,crop:s,safe:t})=>e.jsxs(N.Label,{className:`label ${s?"with-crop":""}`,children:[e.jsxs("header",{className:"labelHead",children:[e.jsxs("div",{className:"carrier",children:[e.jsx("span",{className:"badge",children:a.carrier}),e.jsx("span",{className:"service",children:a.service})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Pkg ",r.pkgId]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:C(a.createdAt)})]})]}),e.jsxs("section",{className:`zones ${t?"with-safe":""}`,children:[e.jsxs("div",{className:"fromto",children:[e.jsxs("div",{className:"blk",children:[e.jsx("h5",{children:"From"}),e.jsxs("div",{className:"txt",children:[e.jsx("strong",{children:a.from.name}),e.jsx("br",{}),a.from.line1,", ",a.from.line2,e.jsx("br",{}),a.from.city," ",a.from.zip,", ",a.from.state,e.jsx("br",{}),a.from.country,e.jsx("br",{}),a.from.phone]})]}),e.jsxs("div",{className:"blk",children:[e.jsx("h5",{children:"To"}),e.jsxs("div",{className:"txt",children:[e.jsx("strong",{children:a.to.name}),e.jsx("br",{}),a.to.line1,", ",a.to.line2,e.jsx("br",{}),a.to.city," ",a.to.zip,", ",a.to.state,e.jsx("br",{}),a.to.country,e.jsx("br",{}),a.to.phone]})]}),e.jsxs("div",{className:"blk small",children:[e.jsx("h5",{children:"Specs"}),e.jsxs("div",{className:"txt",children:[e.jsxs("div",{children:["Weight: ",e.jsxs("strong",{children:[r.weightKg," kg"]})]}),e.jsxs("div",{children:["Dims: ",e.jsx("strong",{children:r.dims})]}),e.jsxs("div",{children:["Ref: ",e.jsx("strong",{children:r.ref})]})]})]})]}),e.jsxs("div",{className:"track",children:[e.jsx("div",{className:"code",children:r.tracking}),e.jsx(R,{value:r.tracking}),e.jsxs("div",{className:"under",children:[e.jsxs("div",{className:"kw",children:[e.jsx("span",{children:"Tracking"}),e.jsx("strong",{children:r.tracking})]}),e.jsxs("div",{className:"kw",children:[e.jsx("span",{children:"Printed"}),e.jsx("strong",{children:z(new Date)})]}),e.jsx("div",{className:"qrWrap","aria-hidden":"true",children:e.jsx(F,{value:r.tracking})})]})]})]}),e.jsxs("footer",{className:"labelFoot",children:[e.jsx("div",{className:"notes",children:r.notes?`Note: ${r.notes}`:"—"}),e.jsx("div",{className:"brand",children:"Generated by React Routes Theme"})]}),s&&e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"crop tl"}),e.jsx("i",{className:"crop tr"}),e.jsx("i",{className:"crop bl"}),e.jsx("i",{className:"crop br"})]})]});export{K as default};
