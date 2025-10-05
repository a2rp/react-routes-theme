import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)";

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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnPrimary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Cards: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }
        margin-bottom: 16px;

        .kpi {
            padding: 16px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: var(--shadow);
            .label {
                color: ${muted};
                font-size: 12px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin-top: 6px;
            }
            .muted {
                color: ${muted};
                margin-top: 8px;
                font-size: 12px;
            }
        }
    `,

    Toolbar: styled.section`
        padding: 14px 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        margin-bottom: 16px;
        box-shadow: var(--shadow);

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: end;
        }
        @media (min-width: 980px) {
            .row {
                grid-template-columns: 1.6fr 0.8fr 0.8fr 1.2fr;
            }
        }

        .search input {
            width: 100%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 10px 12px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filters {
            display: grid;
            gap: 6px;
        }
        .filters label,
        .period label {
            color: ${muted};
            font-size: 12px;
        }
        select {
            height: 36px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .period .chips {
            display: flex;
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
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .chip.active {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Table: styled.section`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        .tableWrap {
            width: 100%;
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${text};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 12px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 12px;
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .num {
            text-align: right;
        }
        .actions {
            white-space: nowrap;
            text-align: right;
        }
        .actions .link {
            margin-left: 10px;
            color: var(--muted);
        }
        .actions .link:hover {
            color: ${accent};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-size: 12px;
        }
        .badge.light {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.status.pending {
            background: rgba(160, 160, 167, 0.15);
            color: ${text};
        }
        .badge.status.packed {
            background: color-mix(in oklab, ${accent} 16%, transparent);
            color: ${text};
        }
        .badge.status.shipped {
            background: color-mix(in oklab, ${accent} 20%, transparent);
            color: ${text};
        }
        .badge.status.invoiced {
            background: color-mix(in oklab, ${accent} 24%, transparent);
            color: ${text};
        }
        .badge.status.completed {
            background: color-mix(in oklab, ${accent} 28%, transparent);
            color: ${text};
        }
        .badge.status.cancelled {
            background: color-mix(in oklab, ${danger} 18%, transparent);
            color: ${text};
        }

        .tableFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            color: ${muted};
        }
        .pager {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .pager .page {
            color: ${text};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    PrintCard: styled.section`
        margin-top: 16px;
        padding: 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        h3 {
            margin-bottom: 12px;
        }
        .grid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(5, 1fr);
            @media (max-width: 920px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .grid > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${muted};
        }
        .v {
            color: ${text};
        }
        .list {
            margin-top: 14px;
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 120px 1fr 140px 120px;
            gap: 10px;
            padding: 8px 10px;
            border: 1px dashed ${border};
            border-radius: 10px;
        }
        .right {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
    `,
};
