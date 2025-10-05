import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const soft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        padding: 18px;
        display: grid;
        gap: 16px;
        background: ${bg};

        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .chip {
            display: inline-flex;
            align-items: center;
            height: 26px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: rgba(0, 0, 0, 0.12);
            font-weight: 600;
            font-size: 12px;
            color: ${text};
        }
        .chip.status.completed {
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${accent};
        }
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${muted};
        font-size: 13px;
        .current {
            color: ${text};
            font-weight: 600;
        }
        a {
            color: ${muted};
        }
        a:hover {
            color: ${accent};
        }
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;

        .title {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
            h1 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-family: "Antonio", sans-serif;
                letter-spacing: 0.5px;
                font-size: 24px;
                line-height: 1.2;
            }
            .badges {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
            button {
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    transform 0.05s;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            button:active {
                transform: translateY(1px);
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        @media (max-width: 920px) {
            grid-template-columns: 1fr;
            .actions {
                justify-content: flex-start;
            }
        }
    `,

    MetaGrid: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1.2fr 1.2fr 1fr;

        .meta header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: ${text};
            margin-bottom: 10px;
        }
        .meta .rows {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 14px;
        }
        .meta .rows .wide {
            grid-column: span 2;
        }
        .meta .rows span {
            color: ${muted};
            display: block;
        }
        .meta .rows strong {
            color: ${text};
            display: block;
        }
        .meta .quicklinks {
            margin-top: 12px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .notes p {
            color: ${text};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border: 1px dashed ${border};
            padding: 10px;
            border-radius: 8px;
        }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
            .meta .rows {
                grid-template-columns: 1fr;
            }
            .meta .rows .wide {
                grid-column: span 1;
            }
        }
    `,

    Section: styled.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
            .section-links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
        }

        .test-block {
            border: 1px solid ${border};
            border-radius: 10px;
            margin-top: 10px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .test-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            .info {
                display: flex;
                gap: 10px;
                align-items: baseline;
                flex-wrap: wrap;
            }
            .test-name {
                font-weight: 700;
            }
            .test-group {
                color: ${muted};
                font-size: 12px;
            }
        }
        .table-wrap {
            overflow: auto;
        }
        table.results {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.results th,
        table.results td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        table.results th {
            text-align: left;
            background: ${card};
            color: ${accent};
            position: sticky;
            top: 0;
        }
        table.results tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }
        td.result {
            font-weight: 700;
        }
        td.ref {
            color: ${muted};
        }
        td.flag.has-flag {
            color: ${accent};
            font-weight: 700;
        }

        .comment {
            padding: 12px 14px;
            color: ${text};
            display: flex;
            gap: 8px;
            align-items: center;
            border-top: 1px dashed ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            border-radius: 0 0 10px 10px;
        }
    `,

    Attachments: styled.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
            .section-links {
                display: flex;
                gap: 12px;
            }
        }
        .files {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        .file {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .file .meta {
            display: grid;
            gap: 4px;
        }
        .file .meta span {
            color: ${muted};
            font-size: 12px;
        }
        .file .cta {
            display: flex;
            gap: 8px;
        }
        .file .cta button {
            background: ${card};
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
            color: ${text};
        }
        .file .cta button:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .file .cta button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        @media (max-width: 900px) {
            .files {
                grid-template-columns: 1fr;
            }
        }
    `,

    Timeline: styled.section`
        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 6px;
            h2 {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
            }
        }
        .steps {
            list-style: none;
            margin: 0;
            padding: 0;
            position: relative;
        }
        .steps li {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 10px;
            align-items: flex-start;
            padding: 8px 0;
            border-bottom: 1px dashed ${border};
        }
        .steps li:last-child {
            border-bottom: none;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: ${accent};
            margin-top: 6px;
            box-shadow: 0 0 0 3px ${soft};
        }
        .content .line {
            display: flex;
            gap: 8px;
            align-items: baseline;
            flex-wrap: wrap;
        }
        .content .line .by {
            color: ${muted};
            font-size: 12px;
        }
        .content .ts {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
    `,

    QuickNav: styled.section`
        header {
            font-weight: 700;
            margin-bottom: 10px;
        }
        .links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .links a {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            background: color-mix(in oklab, ${card} 92%, transparent);
            font-size: 13px;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,

    ModalCard: styled.div`
        width: min(560px, 92%);
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);

        .modal-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 18px;
            }
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                padding: 6px 10px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
        .modal-body {
            padding: 14px;
            color: ${text};
        }
        .modal-foot {
            padding: 12px 14px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
            button {
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `,
};
