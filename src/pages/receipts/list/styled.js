import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        width: 100%;
        padding: 18px 18px 56px;
        color: ${text};

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
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
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(1px);
        }
        button[disabled],
        button[aria-disabled="true"] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Summary: styled.section`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            padding: 14px 16px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: color-mix(in oklab, ${accent} 6%, transparent);
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v {
                font-size: 20px;
                margin-top: 4px;
                letter-spacing: 0.3px;
            }
            .hint {
                margin-top: 6px;
                font-size: 12px;
                color: ${muted};
            }
        }
    `,

    Filters: styled.section`
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};

        .row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1000px) {
            .row {
                grid-template-columns: 1fr;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 6%, transparent);
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.active {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .metaRow {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            align-items: center;
            @media (max-width: 840px) {
                grid-template-columns: 1fr;
            }
        }
        .legend {
            display: flex;
            gap: 12px;
            color: ${muted};
            font-size: 12px;
            align-items: center;
        }
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            display: inline-block;
            border: 1px solid ${border};
        }
        .dot.upi {
            background: color-mix(in oklab, ${accent} 30%, transparent);
        }
        .dot.card {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
        .dot.cash {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .dot.bank {
            background: color-mix(in oklab, ${accent} 24%, transparent);
        }

        .distribution .bar {
            height: 10px;
            width: 280px;
            max-width: 100%;
            border-radius: 999px;
            overflow: hidden;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 6%, transparent);
            display: flex;
        }
        .distribution .seg {
            display: block;
            height: 100%;
        }
        .distribution .seg.upi {
            background: color-mix(in oklab, ${accent} 30%, transparent);
        }
        .distribution .seg.card {
            background: color-mix(in oklab, ${accent} 22%, transparent);
        }
        .distribution .seg.cash {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .distribution .seg.bank {
            background: color-mix(in oklab, ${accent} 26%, transparent);
        }
        .distribution .note {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            text-align: right;
        }
    `,

    TableCard: styled.section`
        padding: 0;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};

        .tableWrap {
            width: 100%;
            overflow: auto;
            border-top-left-radius: ${radius};
            border-top-right-radius: ${radius};
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 12px 12px;
            color: ${accent};
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        tbody td {
            padding: 12px 12px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
            white-space: nowrap;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .right {
            text-align: right;
        }
        .muted {
            color: ${muted};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        a.tiny {
            font-size: 12px;
            margin-right: 10px;
            color: ${muted};
        }
        a.tiny:hover {
            color: ${accent};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            font-weight: 600;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .badge.method.upi {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .badge.method.card {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.method.cash {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .badge.method.bank {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .badge.status.settled {
            border-color: ${accent};
            color: ${accent};
        }
        .badge.status.pending {
            color: ${text};
            opacity: 0.85;
        }
        .badge.status.partial {
            color: ${text};
            opacity: 0.85;
        }
        .badge.status.refunded {
            color: ${text};
            opacity: 0.85;
        }

        .footerBar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 12px;
            border-top: 1px solid ${border};
        }
        .pager {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .small:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    PrintArea: styled.section`
        margin-top: 24px;
        padding: 16px;
        border: 1px dashed ${border};
        border-radius: ${radius};
        background: ${card};

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-bottom: 12px;
            @media (max-width: 1000px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 560px) {
                grid-template-columns: 1fr;
            }
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            color: ${text};
        }

        .printTable {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            margin-top: 8px;
        }
        .printTable th,
        .printTable td {
            border: 1px solid ${border};
            padding: 8px;
            text-align: left;
        }
        .printTable th {
            color: ${accent};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    `,
};
