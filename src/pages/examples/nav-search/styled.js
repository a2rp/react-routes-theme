import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};
        .muted {
            color: ${muted};
        }
        code {
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border: 1px solid ${border};
            padding: 1px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: ${shadow};

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .right {
            display: flex;
            gap: 8px;
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
                box-shadow 0.25s, transform 0.08s ease;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;
        align-items: start;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        > .card {
            border: 1px solid ${border};
            background: ${card};
            border-radius: ${radius};
            padding: 16px 18px;
            box-shadow: ${shadow};
        }

        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }
        p {
            margin: 6px 0 12px;
        }
        .controls {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
            input {
                width: 100%;
                height: 40px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                padding: 0 12px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
            .btns {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
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
                    box-shadow 0.25s, transform 0.08s ease;
            }
            .btnPrimary:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .btnGhost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .btnDanger {
                border-color: ${danger};
                color: ${danger};
            }
            .btnDanger:hover {
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
                background: color-mix(in oklab, ${danger} 10%, transparent);
            }
            .btnPrimary:active,
            .btnGhost:active,
            .btnDanger:active {
                transform: translateY(1px);
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .empty {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 8px 4px;
        }
        .empty .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .empty .h {
            font-weight: 600;
        }
        .empty .p {
            color: ${muted};
        }

        /* print box (aside) */
        #search-print-area .summary {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }
        #search-print-area .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        #search-print-area .k {
            color: ${muted};
        }
        #search-print-area .v {
            color: ${text};
        }
        #search-print-area .printActions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
        }
        #search-print-area .btnPrimary,
        #search-print-area .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        #search-print-area .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        #search-print-area .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .bullets {
            margin: 4px 0 0 16px;
            line-height: 1.8;
        }
    `,

    Kpis: styled.div`
        margin-top: 12px;
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, 1fr);
        @media (max-width: 920px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${shadow};
            .label {
                color: ${muted};
                font-size: 12px;
            }
            .value {
                margin-top: 2px;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }
    `,

    Toast: styled.div`
        position: fixed;
        right: 16px;
        top: 16px;
        transform: translateY(-12px);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.25s, opacity 0.25s;
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: ${shadow};
        &[data-show="true"] {
            transform: translateY(0);
            opacity: 1;
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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
