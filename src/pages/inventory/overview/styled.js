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
                box-shadow 0.25s, transform 0.06s ease-in;
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
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    KpiGrid: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        @media (min-width: 900px) {
            grid-template-columns: repeat(6, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.1;
            margin-top: 6px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
            margin-top: 6px;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .card {
            padding: 16px;
        }

        .printSummary header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .printSummary h3 {
            font-size: 16px;
        }
        .printSummary .time {
            color: ${muted};
            font-size: 12px;
        }
        .printSummary .rows {
            display: grid;
            gap: 8px;
        }
        .printSummary .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }

        .cardHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            .link {
                color: ${muted};
            }
            .link:hover {
                color: ${accent};
            }
            .tools {
                display: flex;
                gap: 8px;
            }
            .tools input {
                border: 1px solid ${border};
                border-radius: 8px;
                background: ${card};
                color: ${text};
                height: 36px;
                padding: 0 10px;
                width: 240px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            .tools input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideCard h3 {
            margin-bottom: 8px;
            font-size: 14px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
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
        .timeline .entry .row1 {
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .timeline .entry .row2 {
            color: ${text};
            margin-top: 2px;
        }
        .timeline .entry .row3 {
            display: flex;
            gap: 8px;
            margin-top: 6px;
        }
        .timeline .entry .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-size: 12px;
        }
        .timeline .sep {
            color: ${muted};
        }
        .muted {
            color: ${muted};
        }
    `,

    Table: styled.div`
        overflow: auto;
        border: 1px solid ${border};
        border-radius: 12px;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            color: ${accent};
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }
    `,

    Progress: styled.div`
        position: relative;
        height: 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid ${border};
        span {
            display: block;
            height: 100%;
            border-radius: 999px;
            background: linear-gradient(
                90deg,
                ${accent},
                color-mix(in oklab, ${accent} 40%, transparent)
            );
            transition: width 0.6s ease;
        }
        i {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 11px;
            color: ${text};
        }
    `,
};
