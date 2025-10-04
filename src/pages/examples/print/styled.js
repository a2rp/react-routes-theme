import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};
        @media print {
            padding: 0;
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
            letter-spacing: 0.3px;
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

        @media print {
            /* keep header text, hide print-only buttons if desired via .no-print */
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .docHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
        }
        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .logo {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            font-weight: 800;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            color: ${accent};
        }
        .brandName {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }

        .docMeta {
            display: grid;
            gap: 8px;
        }
        .docMeta .k {
            color: ${muted};
            margin-right: 10px;
            display: inline-block;
            width: 70px;
        }
        .docMeta .v,
        .docMeta .badge {
            color: ${text};
        }
        .badge {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 2px 10px;
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-weight: 700;
            font-size: 12px;
        }

        .pair {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 16px;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .block .title {
            font-weight: 700;
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
        .kv .total .k,
        .kv .total .v {
            color: ${accent};
        }

        .tableWrap {
            border: 1px solid ${border};
            border-radius: 12px;
            overflow: hidden;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${card};
            color: ${accent};
            font-weight: 600;
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1;
            border-bottom: 1px solid ${border};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            color: ${text};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        td.num {
            text-align: right;
        }
        td.mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        td.strong {
            font-weight: 700;
        }

        details.notes {
            margin-top: 14px;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${card};
        }
        details.notes > summary {
            cursor: pointer;
            color: ${accent};
            font-weight: 600;
        }
        details.notes .muted {
            margin-top: 8px;
        }

        .docFooter {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 18px;
            padding-top: 12px;
            border-top: 1px dashed ${border};
        }

        /* Side cards */
        .printSummary {
            display: grid;
            gap: 10px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
        }

        /* PRINT OVERRIDES for layout */
        @media print {
            grid-template-columns: 1fr !important;
            .col.side {
                display: block;
            }
            .tableWrap {
                overflow: visible !important;
            }
            thead th {
                position: static !important;
            } /* no sticky in print */
        }
    `,
};
