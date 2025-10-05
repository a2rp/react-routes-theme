import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 14px)";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        padding: 24px 0 64px;

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
        justify-content: space-between;
        align-items: center;
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
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: all 0.25s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:disabled {
            opacity: 0.55;
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

    Stepper: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;
        margin-bottom: 16px;
        padding: 12px;
        .step {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: 10px 12px;
            background: ${card};
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: ${muted};
            }
            .t {
                font-weight: 700;
            }
            .s {
                color: ${muted};
                font-size: 12px;
            }
        }
        .step.done .dot {
            background: ${accent};
        }
        .step.current {
            box-shadow: 0 0 0 3px ${accentSoft};
            border-color: ${accent};
        }
        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1180px) {
            grid-template-columns: 1fr;
        }

        .col.main .row {
            margin-bottom: 16px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: 14px 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* parties */
        .party {
            display: grid;
            gap: 8px;
        }
        .row.card {
            display: grid;
            gap: 16px;
        }
        .row.card.two {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 980px) {
            .row.card.two {
                grid-template-columns: 1fr;
            }
        }
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }

        .kv {
            display: grid;
            gap: 6px;
        }
        .kv .k {
            color: ${muted};
            width: 90px;
            display: inline-block;
        }
        .kv .v a {
            color: ${text};
            border-bottom: 1px dashed ${border};
        }
        address.addr {
            color: ${text};
            opacity: 0.9;
            font-style: normal;
            line-height: 1.6;
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }

        /* items */
        .rowHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
        }
        .filters input {
            width: 260px;
            max-width: 46vw;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            color: ${text};
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters input:focus {
            border-color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            color: ${accent};
            font-weight: 600;
            padding: 10px;
        }
        table.items td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        table.items .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .pname {
            font-weight: 700;
        }
        .psub {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        a.inline {
            color: ${muted};
        }
        a.inline:hover {
            color: ${accent};
        }

        .totals {
            display: grid;
            gap: 6px;
            margin-top: 12px;
            padding: 12px;
            border: 1px dashed ${border};
            border-radius: 10px;
        }
        .totals .line {
            display: flex;
            justify-content: space-between;
        }
        .totals .grand {
            font-weight: 800;
        }
        .totals .grand span:last-child {
            color: ${text};
        }

        .para {
            line-height: 1.7;
            opacity: 0.95;
        }

        .files {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .filepill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .filepill .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${accent};
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }

        #search-print-area .summary {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        #search-print-area .kv {
            display: grid;
            grid-template-columns: 110px 1fr;
        }
        #search-print-area .k {
            color: ${muted};
        }
        #search-print-area .v.strong {
            font-weight: 800;
        }
        #search-print-area .printNote {
            margin-top: 10px;
            color: ${muted};
            font-size: 12px;
        }

        .approvers {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .approvers li {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${accent} 15%, transparent);
            border: 1px solid ${border};
            font-weight: 800;
        }
        .approvers .role {
            color: ${muted};
            font-size: 12px;
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            margin-top: 6px;
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }

        .shortcuts {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        kbd {
            display: inline-block;
            padding: 2px 6px;
            border: 1px solid ${border};
            border-bottom-width: 2px;
            border-radius: 6px;
            font-size: 12px;
            background: ${card};
        }
    `,
};
