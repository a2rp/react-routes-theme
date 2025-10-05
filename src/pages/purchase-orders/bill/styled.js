import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 14px)";

export const Styled = {
    Page: styled.div`
        padding: 20px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
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
        .meta {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            flex-wrap: wrap;
            &.muted {
                color: ${muted};
                font-size: 12px;
            }
            .badge {
                padding: 2px 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                font-weight: 600;
                &.paid {
                    color: ${text};
                    background: color-mix(in oklab, ${accent} 14%, transparent);
                    border-color: ${accent};
                }
                &.unpaid {
                    color: ${text};
                    background: color-mix(in oklab, ${danger} 12%, transparent);
                    border-color: ${danger};
                }
                &.partially {
                    color: ${text};
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                    border-color: ${accent};
                }
                &.cancelled {
                    color: ${muted};
                }
            }
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
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
    `,

    Banner: styled.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .col.main .card,
        .col.side .card {
            padding: 16px 18px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .split.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .kv {
            display: grid;
            gap: 8px;
            > div {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 10px;
            }
            .k {
                color: ${muted};
            }
            .v {
                color: ${text};
            }
        }

        .addr {
            font-style: normal;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 980px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${accent};
            z-index: 1;
        }
        table.items tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        table.items tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }

        .notes {
            margin-top: 14px;
        }
        .notes p {
            color: ${text};
            margin-bottom: 10px;
        }
        .notes h3 {
            margin-top: 4px;
        }

        .totals .summary {
            display: grid;
            gap: 8px;
            > div {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
            }
            .k {
                color: ${muted};
            }
            .v {
                color: ${text};
            }
            .grand {
                padding-top: 8px;
                border-top: 1px solid ${border};
                font-weight: 700;
            }
        }

        .tax {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .tax li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
        }
        .tax .num {
            text-align: right;
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
            padding: 8px 10px;
            border-radius: 8px;
            display: inline-block;
        }
        .files a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .files .size {
            color: ${muted};
            margin-left: 8px;
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

        .print {
            display: grid;
            gap: 8px;
        }
        .print > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
        }
        .print .k {
            color: ${muted};
        }
    `,

    // Modal
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
