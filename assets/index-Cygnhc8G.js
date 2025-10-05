import{d as l,j as e,M as v,T as p}from"./index-BM8H5dnP.js";import{F as y,a as k,b as $,c as N,d as F,e as I}from"./index-CsZ5gXRj.js";const o="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",j="var(--card, #111318)",h="var(--border, #23262d)",a="var(--accent, #5aa9ff)",R="var(--accent-soft, rgba(90,169,255,0.15))",T="var(--radius, 14px)",z="var(--maxw, 1080px)",A={Wrapper:l.div`
        padding: 24px;
        color: ${o};
        max-width: ${z};
        margin: 0 auto;

        h3 {
            margin-bottom: 18px;
            font-weight: 700;
            letter-spacing: 0.3px;
            color: ${o};
        }

        time {
            color: ${c};
        }

        fieldset {
            background: ${j};
            border: 1px solid ${h};
            border-radius: ${T};
            padding: 16px;
            margin: 28px 0;
            box-shadow: var(--shadow);

            legend {
                padding: 0 10px;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.3px;
                color: ${a};
            }

            .para {
                display: block;
                margin-bottom: 8px;
                max-width: 900px;

                .heading {
                    /* margin-bottom: 12px; */
                }

                p {
                    color: ${c};
                    margin-bottom: 12px;
                    line-height: 1.8;
                }

                .section {
                    margin-bottom: 14px;

                    ul {
                        margin-left: 22px;
                    }

                    h3 a {
                        color: ${o};
                        text-decoration: none;
                    }
                    h3 a:hover {
                        color: ${a};
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }

                ul {
                    margin-left: 30px;
                    margin-bottom: 30px;
                }
            }
        }
    `},s=l.div`
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid ${h};
    border-radius: 10px;

    &:last-child {
        border-bottom: none;
    }

    @media (hover: hover) {
        &:hover {
            background: color-mix(in oklab, ${a} 12%, transparent);
        }
    }
    @media (hover: none) {
        &:active {
            background: rgba(255, 255, 255, 0.04);
        }
    }
`,r=l.div`
    flex: 0 0 120px;
    white-space: nowrap;
    color: ${c};
    font-weight: 600;
`,n=l.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0; /* allow links to wrap nicely */

    a {
        color: ${o};
        overflow-wrap: anywhere;
        word-break: break-word;
        text-decoration: none;
        border-radius: 8px;
        transition: color 0.2s ease, box-shadow 0.2s ease,
            border-color 0.2s ease;

        &:hover {
            color: ${a};
            text-decoration: underline;
            text-underline-offset: 3px;
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${R};
        }
    }

    .icon {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        color: ${a}; /* icon picks up the blue accent */
        border: 1px solid ${h};
        border-radius: 10px;
        background: ${j};
    }
`,H=({width:d=24,height:t=24})=>e.jsxs("svg",{width:d,height:t,viewBox:"0 0 3 2",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0,0 H3 V2 H0 Z",fill:"#f93"}),e.jsx("path",{d:"M0,0.667 H3 V1.333 H0 Z",fill:"#fff"}),e.jsx("path",{d:"M0,1.333 H3 V2 H0 Z",fill:"#128807"}),e.jsx("circle",{cx:"1.5",cy:"1",r:"0.2",fill:"#008"})]}),W=()=>{function d(u){try{const f=new Date(u),b=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(f),i=g=>{var x;return((x=b.find(w=>w.type===g))==null?void 0:x.value)||""};return`${i("month")} ${i("day")}, ${i("year")} ${i("hour")}:${i("minute")}:${i("second")} hrs`}catch{return"-"}}const t="2025-10-06T02:22:50+05:30",m=d(t);return e.jsx("div",{children:e.jsxs(A.Wrapper,{children:[e.jsxs("h3",{children:["React Routes Theme - last updated: ",e.jsx("time",{dateTime:t,children:m})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Project"}),e.jsxs("div",{className:"para",children:[e.jsx("p",{children:"React Routes Theme is a routing-first starter for building clean, demo-ready frontends. It keeps the surface polished and the internals simple, so you can ship a credible preview without wrestling infrastructure."}),e.jsx("p",{children:e.jsx("strong",{children:"What you get"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Explicit routes, lazy pages:"})," predictable links, fast splits, and zero surprise edges."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sidebar from your paths:"})," collapsible, searchable, and keyboard-friendly—no duplicate config."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Breadcrumbs that mirror URLs:"})," tidy context with sensible fallbacks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Display-only safety:"})," fixtures for data, deep links for detail pages, and demo-gated write actions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Built-ins that matter:"})," a small custom confirm modal and section-only print for clean PDFs."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Token-first styling:"})," CSS variables, dark/light themes, and a restrained blue accent."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GH Pages friendly:"})," base/basename wired + 404 fallback for reliable deep links."]})]}),e.jsx("p",{children:e.jsx("strong",{children:"What you won’t fight"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"No heavy UI framework to unlearn—just sensible defaults."}),e.jsx("li",{children:"No backend wiring for demos—fixtures keep it deterministic."}),e.jsx("li",{children:"No alerts or browser prompts—only custom, styled dialogs."})]}),e.jsx("p",{children:"Built with Vite, React Router, and styled-components, the kit stays fast in dev and lean in prod. When you’re ready to go beyond demos, swap the fixtures for a repository that talks to your API—your routes and UI stay put."})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Developer"}),e.jsxs("div",{className:"aboutDeveloper",children:[e.jsxs(s,{children:[e.jsx(r,{children:"Name"}),e.jsxs(n,{children:["Ashish Ranjan",e.jsx("div",{className:"icon",children:e.jsx(y,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Phone"}),e.jsxs(n,{children:[e.jsx("a",{href:"tel:+918123747965",children:"+91 8123747965"}),e.jsx("div",{className:"icon",children:e.jsx(k,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Email"}),e.jsxs(n,{children:[e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"}),e.jsx("div",{className:"icon",children:e.jsx(v,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Nationality"}),e.jsxs(n,{children:["The Republic of India",e.jsx("div",{className:"icon",children:e.jsx(H,{})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Website"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"https://www.ashishranjan.net/"}),e.jsx("div",{className:"icon",children:e.jsx(p,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Old Website"}),e.jsxs(n,{children:[e.jsx("a",{href:"http://www.ashishranjan.in/",target:"_blank",rel:"noopener noreferrer",children:"http://www.ashishranjan.in/"}),e.jsx("div",{className:"icon",children:e.jsx(p,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Facebook"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:"facebook.com/theash.ashish/"}),e.jsx("div",{className:"icon",children:e.jsx($,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"LinkedIn"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan/"}),e.jsx("div",{className:"icon",children:e.jsx(N,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"YouTube"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"}),e.jsx("div",{className:"icon",children:e.jsx(F,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"GitHub"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"}),e.jsx("div",{className:"icon",children:e.jsx(I,{size:20})})]})]})]})]})]})})};export{W as default};
