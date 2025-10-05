import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 16px;
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 16px;

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .title h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            display: flex;
            align-items: center;
            gap: 8px;
            border-radius: 10px;
            padding: 8px 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:hover {
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }
        .btnGhost:active,
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `,

    Header: styled.div`
        display: grid;
        gap: 14px;
        margin-bottom: 16px;

        .ids {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .idBlock {
            border: 1px solid ${border};
            background: ${card};
            padding: 8px 12px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .idBlock .k {
            color: ${muted};
            font-size: 12px;
        }
        .idBlock .v {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .statusRow {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .pill .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${accent};
            display: inline-block;
        }

        .meta {
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .progress {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .progress .label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .progress .bar {
            height: 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${text} 6%, transparent);
            overflow: hidden;
            border: 1px solid ${border};
        }
        .progress .fill {
            height: 100%;
            background: ${accent};
        }
        .progress .pct {
            font-weight: 700;
            color: ${text};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main .section,
        .col.side .section {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: ${shadow};
            padding: 14px 16px;
        }

        .secHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .secHead h3 {
            font-size: 16px;
        }

        .pairGrid {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .pairGrid .k {
            color: ${muted};
            font-size: 12px;
        }
        .pairGrid .v {
            color: ${text};
        }
        .pairGrid .full {
            grid-column: 1 / -1;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table.table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .table thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
        }
        .table tbody td {
            border-top: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        .table th.num,
        .table td.num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .notes {
            color: ${text};
            opacity: 0.95;
        }

        /* side */
        .addr .name {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .addr .line {
            color: ${text};
            opacity: 0.9;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${muted};
        }
        .kv .v {
            color: ${text};
        }
        .kv .strong {
            font-weight: 800;
        }
        .kv .split {
            border-top: 1px dashed ${border};
            padding-top: 8px;
            margin-top: 6px;
        }

        .code {
            margin-top: 12px;
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .code .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .code .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 12px 1fr;
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
        .timeline .rowTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .timeline .rowTop a {
            color: ${text};
        }
        .timeline .rowTop .muted {
            color: ${muted};
            font-size: 12px;
        }
        .timeline .rowSub {
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            flex-wrap: wrap;
        }
        .timeline .note {
            color: ${text};
            opacity: 0.9;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px;
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .files .file {
        }
        .files .size {
            color: ${muted};
            font-size: 12px;
        }
    `,
};
