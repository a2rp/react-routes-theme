import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
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
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .btnPrimary[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
            border-color: ${border};
            color: ${muted};
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .block {
            margin-bottom: 18px;
        }
        .block h3 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .four {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
            .four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .hint {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        /* Media */
        .media {
            display: grid;
            gap: 16px;
            grid-template-columns: 280px 1fr;
        }
        @media (max-width: 900px) {
            .media {
                grid-template-columns: 1fr;
            }
        }

        .cover .thumb {
            width: 100%;
            aspect-ratio: 1/1;
            background-size: cover;
            background-position: center;
            border: 1px solid ${border};
            border-radius: ${radius};
            background-color: ${card};
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .cover .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .gallery .row {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 10px;
            margin-bottom: 10px;
        }
        .gthumb {
            position: relative;
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
            background: ${card};
        }
        .gthumb .img {
            width: 100%;
            padding-top: 100%;
            background-size: cover;
            background-position: center;
        }
        .gthumb .x {
            position: absolute;
            top: 6px;
            right: 6px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 2px 8px;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .gthumb .x:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        /* Table */
        .tableWrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            font-size: 13px;
        }
        th {
            text-align: left;
            background: ${card};
            color: ${accent};
            font-weight: 600;
        }
        tr:hover td {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        /* Sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .kvs {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .kvs .k {
            color: ${muted};
            width: 120px;
            display: inline-block;
        }
        .kvs .v {
            color: ${text};
        }
        .sideActions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chipLink {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            text-decoration: none;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chipLink:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    Modal: styled.div`
        width: min(520px, 92vw);
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
