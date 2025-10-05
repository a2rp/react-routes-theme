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

        h1 {
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
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
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

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
            overflow: hidden;
        }
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 12px;
        border-bottom: 1px solid ${border};
        background: ${card};

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .filters input,
        .filters select {
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters input:focus,
        .filters select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            height: 36px;
            padding: 0 12px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
        }
        .actions button:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
        }
        .actions button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,

    TableWrap: styled.div`
        padding: 10px;
    `,

    Table: styled.div`
        --row-h: 46px;

        border: 1px solid ${border};
        border-radius: 10px;
        overflow: hidden;
        background: ${card};

        .thead {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
        }
        .tr {
            display: grid;
            grid-template-columns: 70px minmax(220px, 1.2fr) 160px 160px 160px 90px 100px 130px 110px 140px 140px 150px 220px;
            align-items: center;
            min-height: var(--row-h);
            border-bottom: 1px solid ${border};
        }

        .th,
        .td {
            padding: 8px 10px;
        }
        .th {
            font-weight: 600;
            color: ${accent};
            position: sticky;
            top: 0;
            background: ${card};
        }
        .th.num,
        .td.num {
            text-align: right;
        }

        .td.sticky,
        .th.sticky {
            position: sticky;
            left: 0;
            z-index: 2;
            background: ${card};
            border-right: 1px solid ${border};
        }

        .tbody .tr:nth-child(2n) {
            background: color-mix(in oklab, ${card} 92%, transparent);
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .prod .name {
            font-weight: 600;
        }
        .muted {
            color: ${muted};
        }
        .small {
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .chip.soft {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .status.packed {
        }
        .status.pending {
            opacity: 0.9;
        }
        .status.backorder {
        }
        .status.cancelled {
            opacity: 0.75;
            text-decoration: line-through;
        }
        .status.shipped {
        }
    `,

    Pager: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 10px 4px;
        color: ${muted};
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            width: 36px;
            height: 32px;
        }
        button:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
        }
        button:disabled {
            opacity: 0.55;
        }
    `,

    Side: styled.aside`
        display: grid;
        gap: 16px;

        .card {
            padding: 14px;
        }
        h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .metaList {
            display: grid;
            gap: 8px;
        }
        .metaList .k {
            width: 110px;
            display: inline-block;
            color: ${muted};
        }
        .metaList .v {
            color: ${text};
        }

        .totals {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .totals li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${border};
            padding: 8px 10px;
            border-radius: 10px;
            background: ${card};
        }
        .totals li.grand {
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .printGrid {
            display: grid;
            gap: 8px;
        }
        .printGrid .full {
            grid-column: 1 / -1;
        }
        .printGrid .k {
            color: ${muted};
            display: inline-block;
            width: 140px;
        }
        .printGrid .v {
            color: ${text};
        }
    `,
};
