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
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
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
            align-items: center;
        }

        .status {
            text-transform: capitalize;
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-weight: 600;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active:not(:disabled) {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
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

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 18px;
        }
        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .idRow {
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        .idBlock .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .idBlock .value {
            font-weight: 700;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            margin-top: -2px;
            margin-bottom: 8px;
        }
        .step {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px;
            text-align: center;
            background: ${card};
            color: ${muted};
            font-weight: 600;
            font-size: 12px;
        }
        .step.done {
            color: ${text};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border-color: ${accent};
        }

        .tableWrap h3 {
            font-size: 14px;
        }
        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .tableActions {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .scroller {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        table.grid {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.grid thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${text};
            text-align: left;
            border-bottom: 1px solid ${border};
            padding: 10px;
        }
        table.grid tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        table.grid tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        table.grid tfoot td {
            padding: 10px;
            border-top: 1px solid ${border};
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .strong {
            font-weight: 700;
        }
        .xsmall {
            padding: 4px 8px;
        }

        .pTitle .muted {
            color: ${muted};
            font-size: 12px;
        }

        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        textarea[readonly] {
            opacity: 0.9;
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${muted};
        }
        .kv > div {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
        }
        .progress {
            margin-top: 10px;
            height: 8px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid ${border};
            border-radius: 999px;
            overflow: hidden;
        }
        .progress .bar {
            height: 100%;
            background: ${accent};
        }

        .addr {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }
        .addr .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto auto auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${border};
            background: ${card};
            border-radius: 8px;
            padding: 8px 10px;
        }
        .files .fileName {
            font-weight: 600;
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
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnDanger,
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
