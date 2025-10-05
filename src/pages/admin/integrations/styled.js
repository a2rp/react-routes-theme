import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const S = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
        display: block;
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 0 4px 0;
        a {
            color: ${muted};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }
        strong {
            color: ${text};
        }
        .rightLinks {
            margin-left: auto;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            a {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,

    PageHead: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 8px 0 16px 0;
        border-bottom: 1px dashed ${border};

        .title h1 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.5px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .title p {
            color: ${muted};
        }

        .meta {
            display: grid;
            gap: 6px;
            align-content: start;
            .row {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }
            .row span {
                color: ${muted};
            }
            .row strong {
                color: ${text};
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .meta {
                justify-items: start;
            }
            .meta .row {
                justify-content: flex-start;
            }
        }
    `,

    ActionBar: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 0;

        button,
        .linkBtn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.05s ease-in;
        }
        button:hover,
        .linkBtn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }

        .primary {
            box-shadow: 0 0 0 3px ${accentSoft};
            border-color: ${accent};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            border-color: #f43f5e;
        }
        .spacer {
            flex: 1;
        }
    `,

    StatRow: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin-bottom: 16px;
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 14px;
            box-shadow: var(--shadow);
        }
        .stat {
            display: grid;
            gap: 4px;
            align-content: center;
        }
        .stat .k {
            color: ${muted};
            font-size: 12px;
        }
        .stat .v {
            font-size: 18px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    QuickLinks: styled.div`
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(9, minmax(0, 1fr));
        margin-bottom: 14px;
        .q {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${muted};
            text-align: center;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .q:hover {
            color: ${accent};
            border-color: ${accent};
        }
        @media (max-width: 1300px) {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    SectionHead: styled.div`
        margin: 18px 0 10px 0;
        display: flex;
        align-items: baseline;
        gap: 12px;
        h2 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.4px;
        }
        .subnav {
            margin-left: auto;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .subnav a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${muted};
        }
        .subnav a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-bottom: 18px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 14px;
            box-shadow: var(--shadow);
        }

        .app header {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 10px;
        }
        .app .logo {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid ${border};
            font-weight: 700;
            letter-spacing: 0.5px;
            background: color-mix(in oklab, ${card} 88%, transparent);
        }
        .app .meta h3 {
            margin: 0;
        }
        .app .meta .row {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
        }
        .app .meta .row .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 999px;
            padding: 4px 8px;
            border: 1px solid ${border};
        }
        .app .meta .row .badge.ok {
            border-color: color-mix(in oklab, ${accent} 50%, ${border});
        }
        .app .meta .row .badge.off {
            border-color: #4b5563;
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }
        .links a {
            border: 1px dashed ${border};
            padding: 6px 10px;
            border-radius: 8px;
            color: ${muted};
            text-decoration: none;
        }
        .links a:hover {
            border-color: ${accent};
            color: ${accent};
        }

        footer {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        footer .linkBtn {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 6px 10px;
            color: ${muted};
            text-decoration: none;
        }
        footer .linkBtn:hover {
            color: ${accent};
            border-color: ${accent};
        }
        footer button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 8px 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s, color 0.2s, transform 0.05s;
        }
        footer button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        footer button:active {
            transform: translateY(1px);
        }
        footer .danger {
            border-color: #f43f5e;
        }
        footer .primary {
            box-shadow: 0 0 0 3px ${accentSoft};
            border-color: ${accent};
        }
    `,

    HelpPanel: styled.div`
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin: 8px 0 40px 0;
        .icon {
            font-size: 22px;
            margin-top: 2px;
            color: ${accent};
        }
        .copy h3 {
            margin: 0 0 6px 0;
        }
        .copy p {
            color: ${muted};
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${muted};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            z-index: 1;
            width: min(560px, 92%);
            margin: 8vh auto 0 auto;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 16px;
            box-shadow: var(--shadow);
        }
        .box h4 {
            margin: 0 0 6px 0;
        }
        .box p {
            color: ${muted};
            margin: 0 0 12px 0;
        }
        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .actions button,
        .actions .linkBtn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        .actions button:hover,
        .actions .linkBtn:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};

export { S as default };
