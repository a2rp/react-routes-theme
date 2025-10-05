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
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .sub {
            font-weight: 600;
            font-size: 14px;
            color: ${muted};
            margin-left: 6px;
        }

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .tags {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag,
        .pill {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
            font-weight: 600;
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-self: end;
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
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 12px;
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: color-mix(in oklab, ${card} 96%, transparent);

        @media (max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-weight: 700;
            font-size: 16px;
            color: ${text};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .section {
            padding: 16px 18px;
        }

        .kv {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 20px;
            margin-top: 10px;
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v a {
                color: ${text};
            }
            .v a:hover {
                color: ${accent};
            }
            .full {
                grid-column: 1 / -1;
            }
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        th {
            text-align: left;
            background: ${card};
            color: ${accent};
            font-weight: 600;
        }

        .linksBar {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 8px;
                background: ${card};
                color: ${text};
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }

        .bullets {
            margin: 8px 0 0;
            padding-left: 18px;
        }
        .bullets li {
            margin: 4px 0;
        }

        .grid.two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 12px;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .status.ok {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 2px 8px;
            font-size: 12px;
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${text};
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .kvList {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .kvList li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
        }
        .kvList .k {
            color: ${muted};
        }
        .kvList .v {
            color: ${text};
            font-weight: 700;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${text};
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .fileName {
            font-weight: 600;
        }
        .fileSize {
            color: ${muted};
            margin-left: 6px;
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

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
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

        .btnPrimary {
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
    `,
};
