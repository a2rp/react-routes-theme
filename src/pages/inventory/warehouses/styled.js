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
        padding: 24px 0 72px;
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
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }

        button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* lightweight tooltip via data-tip */
        [data-tip] {
            position: relative;
        }
        [data-tip]:hover::after {
            content: attr(data-tip);
            position: absolute;
            top: calc(100% + 6px);
            left: 50%;
            transform: translateX(-50%);
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            white-space: nowrap;
            font-size: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            z-index: 10;
        }
    `,

    Toast: styled.div`
        position: sticky;
        top: 8px;
        margin-bottom: 12px;
        z-index: 5;
        align-self: flex-start;
        width: fit-content;
        padding: 8px 12px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Toolbar: styled.div`
        padding: 14px 16px;
        margin-bottom: 16px;
        .row {
            display: grid;
            grid-template-columns: 1.5fr repeat(2, 0.9fr) 1fr;
            gap: 12px;
            align-items: end;
        }
        @media (max-width: 900px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
        .field label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }
        .spacer {
            flex: 1;
        }

        .quickStats {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            border-left: 1px dashed ${border};
            padding-left: 12px;
        }
        .quickStats .k {
            color: ${muted};
            margin-right: 6px;
        }
        .quickStats .v {
            font-weight: 700;
        }
        .quickStats .bar {
            width: 120px;
            height: 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            margin-left: 8px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            position: relative;
            overflow: hidden;
        }
        .quickStats .bar i {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-radius: 999px;
            background: ${accent};
        }
    `,

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1.6fr 0.9fr;
        @media (max-width: 1180px) {
            grid-template-columns: 1fr;
        }

        .col {
            display: grid;
            gap: 16px;
        }

        /* table */
        .list {
            padding: 0;
            overflow: hidden;
        }

        .tableHead {
            display: grid;
            grid-template-columns: 110px 1.3fr 120px 170px 120px 90px 110px 160px 190px 210px;
            gap: 12px;
            align-items: center;
            padding: 12px 14px;
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
        }

        .rows {
            display: block;
        }
        .row {
            display: grid;
            grid-template-columns: 110px 1.3fr 120px 170px 120px 90px 110px 160px 190px 210px;
            gap: 12px;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            transition: background 0.2s, border-color 0.2s;
            cursor: pointer;
        }
        .row:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .row.selected {
            border-left: 3px solid ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .cell .title {
            font-weight: 700;
        }
        .cell.mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .cell .muted {
            color: ${muted};
            font-size: 12px;
        }

        .util .pct {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .util .meter {
            height: 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            position: relative;
            overflow: hidden;
        }
        .util .meter i {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: ${accent};
        }
        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .empty {
            padding: 24px;
            text-align: center;
        }
        .empty .big {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 6px;
        }

        /* side */
        .side .card {
            padding: 14px 16px;
        }
        .side h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px 12px;
            margin-bottom: 10px;
        }
        .kv .k {
            color: ${muted};
        }
        .kv .v {
            color: ${text};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .address {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 10px 12px;
            margin: 10px 0;
            color: ${text};
        }
        .notes .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }

        .heat .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .heat .gradient {
            height: 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: linear-gradient(
                90deg,
                color-mix(in oklab, ${accent} 10%, transparent),
                ${accent}
            );
        }
        .heat .legend {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: ${muted};
            margin-top: 6px;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .info .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .info .label {
            color: ${muted};
            font-size: 12px;
        }
    `,
};
