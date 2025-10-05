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
            flex-wrap: wrap;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
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
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDisabled:active {
            transform: translateY(1px);
        }
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .stat {
            padding: 16px;
            border-radius: 12px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 28px;
            font-weight: 700;
            margin-top: 4px;
        }
        .s {
            color: ${muted};
            margin-top: 4px;
        }
    `,

    Toolbar: styled.div`
        padding: 12px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: center;
        }
        @media (min-width: 980px) {
            .row {
                grid-template-columns: 1fr auto;
            }
        }

        .search input {
            width: 100%;
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .filters select {
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .density .small {
            padding: 6px 10px;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .tableWrap {
            overflow: hidden;
        }

        table.table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            z-index: 1;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        .table.compact td,
        .table.compact th {
            padding: 6px 8px;
        }

        .num {
            text-align: right;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .badge {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 2px 8px;
            text-transform: capitalize;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.inactive {
            opacity: 0.7;
        }
        .badge.prospect {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        .titleCell .id {
            font-size: 12px;
            color: ${muted};
        }

        .empty {
            text-align: center;
            padding: 28px 0;
            color: ${muted};
        }
        .empty .icon {
            font-size: 22px;
            margin-bottom: 6px;
        }

        .actions {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .small.btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .small.btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .summary {
            display: grid;
            gap: 8px;
        }
        .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .k {
            color: ${muted};
        }
        .mini {
            margin-top: 8px;
            font-size: 12px;
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
        }
        .tips li {
            margin: 6px 0;
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
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
