import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";
const radius = "var(--radius, 12px)";

export const Styled = {
    Page: styled.div`
        padding: 16px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;
        padding: 14px 16px;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 14px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            color: ${muted};
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            margin-top: 6px;
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

    Stats: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 14px;

        @media (min-width: 900px) {
            grid-template-columns: repeat(7, minmax(0, 1fr));
        }

        .stat {
            padding: 12px;
            border-radius: ${radius};
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            box-shadow: ${shadow};
            display: grid;
            gap: 8px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            font-weight: 700;
        }

        /* status tones using accent mixes */
        .stat[data-status="In Transit"] {
            background: color-mix(in oklab, ${accent} 10%, ${card});
        }
        .stat[data-status="Out for Delivery"] {
            background: color-mix(in oklab, ${accent} 12%, ${card});
        }
        .stat[data-status="Delivered"] {
            background: color-mix(in oklab, ${accent} 8%, ${card});
        }
        .stat[data-status="Delayed"] {
            background: color-mix(in oklab, #f59e0b 16%, ${card});
        } /* amber-ish */
        .stat[data-status="Label Created"] {
            background: color-mix(in oklab, ${accent} 6%, ${card});
        }
        .stat[data-status="Pending Pickup"] {
            background: color-mix(in oklab, ${accent} 6%, ${card});
        }
        .stat[data-status="Returned"] {
            background: color-mix(in oklab, #ef4444 16%, ${card});
        } /* red-ish */
    `,

    Toolbar: styled.div`
        padding: 12px;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 14px;

        .row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        @media (min-width: 900px) {
            .row {
                grid-template-columns: 1fr 200px 200px auto;
                align-items: end;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        input:focus,
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }
        .grow {
            flex: 1;
        }
        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    TableWrap: styled.div`
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: ${shadow};
        overflow: hidden;

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
            padding: 10px;
            color: ${text};
            font-weight: 600;
            cursor: default;
            user-select: none;
        }
        thead th[data-sort] {
            color: ${accent};
        }
        thead th:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        tbody td {
            border-top: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
            color: ${text};
        }
        .muted {
            color: ${muted};
        }
        .small {
            font-size: 11px;
            color: ${muted};
        }
        .strong {
            font-weight: 600;
        }
        .arrow {
            display: inline-block;
            margin: 0 6px;
            color: ${muted};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }

        .rowActions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-size: 12px;
        }
        .chip.prepaid {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .chip.cod {
            background: color-mix(in oklab, #f59e0b 16%, transparent);
        } /* amber */

        .chip.status {
            border: 1px solid ${border};
        }
        .chip.status[data-status="Delivered"] {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .chip.status[data-status="In Transit"] {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .chip.status[data-status="Out for Delivery"] {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .chip.status[data-status="Label Created"] {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .chip.status[data-status="Pending Pickup"] {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .chip.status[data-status="Delayed"] {
            background: color-mix(in oklab, #f59e0b 18%, transparent);
        }
        .chip.status[data-status="Returned"] {
            background: color-mix(in oklab, #ef4444 18%, transparent);
        }

        .empty {
            padding: 40px 20px;
            text-align: center;
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .empty .desc {
            color: ${muted};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
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
