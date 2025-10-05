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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: 0.25s;
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
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1020px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .panel {
            border: 1px solid ${border};
            border-radius: ${radius};
            background: ${card};
            padding: 14px 14px;
            margin-bottom: 16px;
        }
        .panel h3 {
            font-size: 15px;
            margin-bottom: 10px;
        }

        .row {
            display: grid;
            gap: 16px;
            margin-bottom: 12px;
        }
        .row.two {
            grid-template-columns: 1fr;
        }
        .row.three {
            grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
            .row.two {
                grid-template-columns: 1fr 1fr;
            }
            .row.three {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
            transition: 0.25s;
        }
        input:focus,
        select:focus,
        textarea:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .withBadge {
            position: relative;
        }
        .badgeLink {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${muted};
            background: ${card};
        }
        .badgeLink:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .sub {
            padding: 12px 12px;
        }
        .addr {
            line-height: 1.9;
        }
        .addr .muted {
            color: ${muted};
        }

        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .tableHeader .actions {
            display: flex;
            gap: 8px;
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: ${radius};
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
            border-bottom: 1px solid ${border};
            padding: 10px;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 10px;
        }
        .num {
            text-align: right;
        }
        .strong {
            font-weight: 700;
        }
        .title {
            font-weight: 600;
        }
        .tiny {
            font-size: 12px;
        }

        .notesWrap {
            margin-top: 12px;
        }
        .notesWrap textarea {
            min-height: 88px;
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            gap: 10px;
        }
        .summary > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .summary .grand {
            padding-top: 6px;
            margin-top: 6px;
            border-top: 1px solid ${border};
            font-size: 15px;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .steps li {
            text-align: center;
            border: 1px solid ${border};
            padding: 8px 6px;
            border-radius: 8px;
            color: ${muted};
            background: ${card};
        }
        .steps li.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            margin-top: 6px;
        }
        .timeline .tiny {
            font-size: 12px;
            color: ${muted};
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }
    `,

    DemoBar: styled.div`
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 8px 14px;
        text-align: center;
        border-top: 1px solid ${border};
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
        z-index: 30;
    `,
};
