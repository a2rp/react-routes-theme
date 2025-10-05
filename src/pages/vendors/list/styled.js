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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    Toolbar: styled.div`
        padding: 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 1080px) {
                grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        label {
            color: ${muted};
            font-size: 12px;
        }

        .chipset {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 14px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Split: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2fr 1fr;
        }

        .list.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 16px;
        }
    `,

    Empty: styled.div`
        padding: 40px 20px;
        text-align: center;
        .icon {
            font-size: 38px;
            opacity: 0.5;
            margin-bottom: 10px;
        }
        h3 {
            font-size: 16px;
            margin-bottom: 4px;
        }
        p {
            color: ${muted};
        }
    `,

    Preview: styled.div`
        padding: 14px;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            .right .badge {
                text-transform: uppercase;
                font-size: 11px;
                letter-spacing: 0.4px;
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 4px 10px;
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
        }

        .label {
            color: ${muted};
            font-size: 12px;
        }
        .mt8 {
            margin-top: 8px;
        }

        .grid.two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 520px) {
                grid-template-columns: 1fr 1fr;
            }
            margin-bottom: 10px;
        }

        .line {
            margin: 12px 0;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .tag {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .metrics {
            margin-top: 8px;
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            @media (min-width: 520px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .metric {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 10px;
            background: ${card};
        }
        .metric .k {
            color: ${muted};
            font-size: 12px;
        }
        .metric .v {
            font-weight: 600;
            margin-top: 4px;
        }

        .actions {
            margin-top: 12px;
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
                box-shadow 0.25s;
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
        .btnGhost.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    `,

    HintCard: styled.div`
        padding: 16px;
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
        }
    `,

    /* table + sticky header */
    TableStyles: styled.div``,

    TableHeader: styled.div``,

    TableWrap: styled.div``,

    /* inline styles embedded in the list section */
    /* keep within the same file for cohesion */
};

export const TableScoped = styled.div`
    .tableHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${border};
        .left {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }
        .muted {
            color: ${muted};
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 12px;
            color: ${muted};
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 6px;
            border: 1px solid ${border};
        }
        .dot.active {
            background: color-mix(in oklab, ${accent} 30%, transparent);
        }
        .dot.inactive {
            background: color-mix(in oklab, ${danger} 30%, transparent);
        }
    }

    .tableWrap {
        overflow: auto;
    }
    table.table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        background: ${card};
        z-index: 1;
        border-bottom: 1px solid ${border};
        text-align: left;
        padding: 10px;
        color: ${accent};
    }
    tbody td {
        border-bottom: 1px solid ${border};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr {
        transition: background 0.15s, border-color 0.15s;
        cursor: pointer;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody tr.selected {
        outline: 2px solid ${accent};
        outline-offset: -2px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
    }

    .titleCell {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .status {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid ${border};
    }
    .status.active {
        background: color-mix(in oklab, ${accent} 35%, transparent);
    }
    .status.inactive {
        background: color-mix(in oklab, ${danger} 35%, transparent);
    }

    .name {
        font-weight: 600;
    }
    .sub {
        font-size: 12px;
    }

    .stack {
        display: grid;
        gap: 2px;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    .tag {
        border: 1px solid ${border};
        padding: 4px 8px;
        border-radius: 999px;
        background: color-mix(in oklab, ${accent} 8%, transparent);
    }

    .rating {
        display: inline-block;
        min-width: 38px;
        text-align: center;
        border: 1px solid ${border};
        border-radius: 8px;
        padding: 2px 6px;
        background: ${card};
    }

    td.links {
        white-space: nowrap;
    }
    .lnk {
        display: inline-block;
        padding: 4px 8px;
        border: 1px solid ${border};
        border-radius: 8px;
        background: ${card};
        color: ${text};
        margin-right: 6px;
        transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
    }
    .lnk:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .lnk.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

/* attach TableScoped styles to list card */
Styled.Page = styled(Styled.Page)`
    .list.card {
        ${TableScoped}
    }
`;
