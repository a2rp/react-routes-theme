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
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 14px;

        .lh h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            display: flex;
            gap: 8px;
            color: ${muted};
            margin-top: 6px;
            font-size: 12px;
        }
        .meta strong {
            color: ${text};
        }

        .rh {
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
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Toolbar: styled.section`
        padding: 12px 14px;
        margin-bottom: 14px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 1.6fr repeat(5, 1fr) auto;
                align-items: end;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        .field.grow {
            width: 100%;
        }

        .buttons {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
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
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    `,

    Kpis: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 20px;
            margin-top: 4px;
        }
        .s {
            color: ${muted};
            margin-top: 6px;
            font-size: 12px;
        }
    `,

    TableCard: styled.section`
        margin-top: 14px;
        padding-top: 6px;
        overflow: hidden;

        .tableHeader,
        .tableFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
        }
        .tableHeader .left {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .tableHeader .muted {
            color: ${muted};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .tableScroll {
            overflow: auto;
            border-top: 1px solid ${border};
            border-bottom: 1px solid ${border};
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
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr {
            transition: background 0.2s;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .num {
            text-align: right;
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 600;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .status.refunded {
            background: color-mix(in oklab, ${danger} 12%, transparent);
            color: ${text};
        }
        .status.failed {
            background: color-mix(in oklab, ${danger} 18%, transparent);
            color: ${text};
        }
        .status.pending {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .status.partial {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .status.received {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }

        .actions {
            white-space: nowrap;
        }
    `,

    PrintCard: styled.section`
        margin-top: 14px;
        padding: 14px;
        header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        header .meta {
            color: ${muted};
            font-size: 12px;
        }

        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 900px) {
            .grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            margin-top: 4px;
        }
    `,

    Drawer: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: stretch;
        z-index: 60;

        .panel {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: min(560px, 92vw);
            border-left: 1px solid ${border};
            background: ${card};
            color: ${text};
            box-shadow: -20px 0 60px rgba(0, 0, 0, 0.35);
            overflow: auto;
            padding: 0;
            border-top-left-radius: ${radius};
            border-bottom-left-radius: ${radius};
        }

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        .head h3 {
            font-size: 18px;
        }

        .body {
            padding: 14px;
        }
        .cols {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 920px) {
            .cols {
                grid-template-columns: 1.3fr 0.7fr;
            }
        }

        .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px dashed ${border};
        }
        .line .k {
            color: ${muted};
        }
        .line .v {
            color: ${text};
        }

        .card.tiny {
            padding: 12px;
        }
        .cap {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 8px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${card};
        }
        .links a:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .btns {
            display: grid;
            gap: 8px;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
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

        .miniPrint {
            margin-top: 14px;
            padding: 10px;
            .row {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 10px;
                padding: 6px 0;
                border-bottom: 1px dashed ${border};
            }
            .k {
                color: ${muted};
            }
            .v {
                color: ${text};
            }
        }
    `,
};
