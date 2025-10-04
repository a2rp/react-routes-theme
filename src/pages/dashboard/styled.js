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
        display: grid;
        gap: 16px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
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

        .rhs {
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
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
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
    `,

    KpiRow: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .kpi .label {
            color: ${muted};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 24px;
            margin-top: 4px;
        }
        .kpi .trend {
            margin-top: 4px;
            font-size: 12px;
            user-select: none;
        }
        .kpi .trend.up {
            color: ${accent};
        }
        .kpi .trend.down {
            color: ${danger};
        }
        .kpi .spark {
            margin-top: 10px;
            height: 38px;
        }
        .kpi svg {
            width: 100%;
            height: 100%;
            display: block;
        }
    `,

    Grid: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 1.2fr 1fr;
        }
        @media (min-width: 1400px) {
            grid-template-columns: 1.2fr 1fr;
        }

        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
            h3 {
                font-size: 16px;
            }
            .seeAll {
                color: ${muted};
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 8px;
            }
            .seeAll:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .quickGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            @media (min-width: 680px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        .quick {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 14px;
            color: ${text};
            background: ${card};
            transition: border-color 0.25s, color 0.25s, background 0.25s,
                transform 0.05s;
        }
        .quick .icon {
            font-size: 18px;
        }
        .quick:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(-1px);
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            padding: 10px;
            font-weight: 600;
            color: ${accent};
            border-bottom: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .list li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 14px;
            background: ${card};
        }
        .money {
            font-weight: 700;
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 10px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }

        .alerts {
            display: grid;
            gap: 10px;
        }
        .alert {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 14px;
            background: ${card};
        }
        .name {
            font-weight: 600;
        }
        .small {
            font-size: 12px;
        }
        .pill {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            text-align: center;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
        }
        .pill.ok {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .pill.warn {
            background: color-mix(in oklab, ${accent} 0%, transparent);
            color: ${accent};
            border-color: ${accent};
        }
        .pill.danger {
            background: color-mix(in oklab, ${danger} 14%, transparent);
            color: ${danger};
            border-color: ${danger};
        }

        .printBlock .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 12px;
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
        z-index: 60;
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
