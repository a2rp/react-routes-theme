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
                box-shadow 0.25s, transform 0.05s ease;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main .card,
        .col.side .card {
            border: 1px solid ${border};
            border-radius: ${radius};
            background: ${card};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            padding: 16px 18px;
        }

        /* Top identity + steps */
        .rowTop {
            display: grid;
            gap: 14px;
        }
        .identity .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .identity .title h2 {
            font-size: 18px;
        }
        .badge {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            color: ${muted};
            margin-top: 6px;
        }
        .links a {
            color: ${muted};
        }
        .links a:hover {
            color: ${accent};
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-top: 6px;
        }
        .step {
            display: grid;
            justify-items: center;
            gap: 6px;
        }
        .step .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid ${border};
            background: transparent;
        }
        .step.done .dot {
            background: ${accent};
            border-color: ${accent};
        }
        .step .label {
            font-size: 12px;
            color: ${muted};
        }

        /* info row */
        .rowInfo {
            display: grid;
            gap: 16px;
            margin-top: 12px;
        }
        @media (min-width: 900px) {
            .rowInfo {
                grid-template-columns: 2fr 1fr;
            }
        }
        .info {
            display: grid;
            gap: 10px;
        }
        .info .k {
            color: ${muted};
            width: 110px;
            display: inline-block;
        }
        .info .v {
            color: ${text};
        }
        .policy {
            border: 1px dashed ${border};
            border-radius: 12px;
            padding: 12px;
        }
        .policy h4 {
            font-size: 14px;
            margin-bottom: 6px;
        }

        /* items table */
        .tableWrap {
            overflow: auto;
            margin-top: 8px;
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
            position: sticky;
            top: 0;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        td.num,
        th.num {
            text-align: right;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        /* totals + notes */
        .grid2 {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-top: 16px;
        }
        @media (min-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr 1fr;
            }
        }

        .totals {
            display: grid;
            gap: 8px;
        }
        .totals > div {
            display: flex;
            justify-content: space-between;
        }
        .totals .grand {
            margin-top: 6px;
            font-weight: 700;
        }

        .mini {
            margin-top: 8px;
            color: ${muted};
            font-size: 12px;
        }

        /* sidebar */
        .customer .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 8px;
        }
        .customer .k {
            color: ${muted};
            font-size: 12px;
        }
        .customer .v {
            color: ${text};
        }
        .addr {
            margin-top: 10px;
        }
        .addr .k {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 3px;
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

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files a {
            color: ${text};
        }
        .files a:hover {
            color: ${accent};
        }
        .files .muted {
            color: ${muted};
            margin-left: 8px;
        }

        .summary {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }
        .summary > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
        }
        .summary .k {
            color: ${muted};
        }
        .summary .v {
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
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
        .btnPrimary:hover,
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
