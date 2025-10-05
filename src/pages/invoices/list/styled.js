import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const warn = "var(--warn, #f59e0b)";
const danger = "var(--danger, #ef4444)";

export const Styled = {
    Page: styled.div`
        color: ${text};
        display: grid;
        gap: 16px;
        padding-bottom: 48px;
    `,

    Header: styled.header`
        padding: 16px 18px;

        .titleRow {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            align-items: flex-start;
        }

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
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
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
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
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,

    Banner: styled.div`
        margin-top: 12px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        padding: 8px 12px;
        font-weight: 600;
    `,

    Tiles: styled.div`
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 12px;
        margin-top: 14px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .tile {
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 12px;
            background: ${card};
            box-shadow: var(--shadow);
            display: grid;
            gap: 6px;
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
            .v.warn {
                color: ${warn};
            }
        }
        .sm {
            padding: 10px;
        }
    `,

    Filters: styled.div`
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;

        .searchBox {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            padding: 8px 12px;
            input {
                flex: 1;
                background: transparent;
                border: 0;
                color: ${text};
                outline: none;
                font-size: 13px;
            }
        }

        .filterRow {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            label {
                color: ${muted};
                font-size: 12px;
            }
            select {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                padding: 6px 10px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            select:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,

    TableWrap: styled.div`
        padding: 0;
        overflow: hidden;

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
            text-align: left;
            padding: 12px;
            color: ${text};
            user-select: none;
        }
        thead th[role="button"] {
            cursor: pointer;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .num {
            text-align: right;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .sub {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }

        .rowActions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .btnLink {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 4px 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnLink:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .pill {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-weight: 600;
            font-size: 12px;
            &.overdue {
                background: color-mix(in oklab, ${warn} 18%, transparent);
                border-color: color-mix(in oklab, ${warn} 30%, ${border});
            }
            &.partially-paid {
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            &.draft {
                background: rgba(120, 120, 120, 0.15);
            }
            &.cancelled {
                background: color-mix(in oklab, ${danger} 16%, transparent);
                border-color: color-mix(in oklab, ${danger} 28%, ${border});
            }
            &.paid {
                /* default accent mix already applied */
            }
        }
    `,

    Pagination: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        color: ${muted};

        .right {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        button:hover:not(:disabled) {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    PrintCard: styled.div`
        padding: 14px 16px;

        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .meta {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }
        th,
        td {
            padding: 8px;
            border-bottom: 1px solid ${border};
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `,

    Empty: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${muted};
        .icon {
            color: ${accent};
        }
    `,
};
