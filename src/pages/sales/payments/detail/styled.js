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
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
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
        .btnGhost,
        .btnDanger,
        .btnDisabled {
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
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        button:active {
            transform: translateY(1px);
        }
    `,
    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            padding: 14px 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
            .summaryItem {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 98%, transparent);
                .label {
                    color: ${muted};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .value {
                    font-size: 16px;
                    font-weight: 700;
                }
                .sub {
                    color: ${muted};
                    font-size: 12px;
                    margin-top: 4px;
                }
            }
            .pill {
                padding: 4px 10px;
                border-radius: 999px;
                border: 1px solid ${border};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-weight: 700;
            }
            .pill.reconciled {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
            .pill.pending {
                color: ${text};
            }
            .pill.failed {
                color: ${danger};
                border-color: ${danger};
                background: color-mix(in oklab, ${danger} 10%, transparent);
            }
            .pill.refunded {
                color: ${muted};
            }
        }

        .section {
            padding: 16px 18px;
        }
        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }
        .section h3 {
            font-size: 14px;
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .panel {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: ${card};
        }

        .kv {
            display: grid;
            gap: 10px;
        }
        .kv > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .kv dt {
            color: ${muted};
        }
        .kv dd {
            color: ${text};
            margin: 0;
        }

        .notes {
            margin-top: 12px;
            color: ${text};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tfoot td {
            padding: 10px;
            border-top: 1px solid ${border};
            font-weight: 700;
        }
        .num {
            text-align: right;
        }
        tfoot .label {
            color: ${muted};
            font-weight: 600;
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

        .customer {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .customer .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: ${card};
            border: 1px solid ${border};
            font-weight: 700;
        }
        .customer .name {
            font-weight: 700;
        }
        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .miniGrid .label {
            color: ${muted};
            font-size: 12px;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files a {
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${card};
        }
        .files a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .receipt {
            display: grid;
            gap: 8px;
        }
        .receipt .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .receipt .pill {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            display: inline-flex;
        }
        .receipt .pill.reconciled {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
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
