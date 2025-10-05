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
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .right {
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
                transform 0.05s;
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
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Kpis: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 12px;
        @media (min-width: 1100px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .k {
            padding: 14px 16px;
            display: grid;
            gap: 6px;
            border-radius: 12px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Filters: styled.section`
        margin-bottom: 16px;
        padding: 14px 16px;
        border-radius: 12px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 2fr 1fr 1fr 2fr auto;
                align-items: end;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        .field.end {
            justify-items: end;
        }

        .chipRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2fr 1fr;
        }

        .list {
            padding: 0;
            overflow: hidden;
        }

        .tableWrap {
            overflow: auto;
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
            border-bottom: 1px solid ${border};
            padding: 10px;
            text-align: left;
            color: ${accent};
            z-index: 1;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        tbody tr.selected {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .idcell .muted {
            color: ${muted};
            font-size: 12px;
        }
        td.num {
            text-align: right;
        }
        td.actions {
            white-space: nowrap;
        }
        .small {
            padding: 6px 10px;
        }

        .empty {
            padding: 18px;
            text-align: center;
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .empty .hint {
            color: ${muted};
        }

        /* badges */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .badge.in-transit {
            color: ${text};
        }
        .badge.completed {
            color: ${text};
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .badge.draft {
            color: ${muted};
            background: color-mix(in oklab, ${accent} 4%, transparent);
        }
        .badge.cancelled {
            color: ${danger};
            border-color: ${danger};
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }

        /* inspector */
        .inspector {
            min-height: 420px;
        }
        .inspectorCard {
            padding: 14px;
            border-radius: 12px;
            position: sticky;
            top: 8px;
        }
        .inspectorHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .inspectorHead h3 {
            font-size: 18px;
        }
        .muted {
            color: ${muted};
        }

        .grid.meta {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 12px;
            @media (min-width: 820px) {
                grid-template-columns: repeat(3, 1fr);
            }
            .label {
                color: ${muted};
                font-size: 12px;
            }
        }

        .sub {
            padding: 12px;
        }
        .sub h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .lines {
            display: grid;
            gap: 8px;
        }
        .lines .line {
            display: grid;
            gap: 8px;
            grid-template-columns: 140px 1fr auto auto auto;
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 8px 10px;
        }
        .lines .sku {
            font-weight: 700;
        }
        .lines .name {
            color: ${text};
        }
        .lines .qty {
            text-align: right;
        }
        .lines .lot,
        .lines .exp {
            color: ${muted};
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
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            margin-top: 6px;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .row {
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

        .actionsRow {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
    `,
};
