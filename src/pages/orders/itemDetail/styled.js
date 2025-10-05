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

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .chip {
            padding: 2px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-weight: 600;
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
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        button:active {
            transform: translateY(1px);
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
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .identity {
            display: grid;
            grid-template-columns: 112px 1fr;
            gap: 16px;
            margin-bottom: 18px;
            .image {
                width: 112px;
                height: 112px;
                border-radius: ${radius};
                border: 1px solid ${border};
                background: ${card};
                background-size: cover;
                background-position: center;
            }
            .info h2 {
                font-size: 18px;
            }
            .sub {
                color: ${muted};
                margin-top: 4px;
            }
            .kv {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-top: 12px;
            }
            .kv .k {
                color: ${muted};
                font-size: 12px;
            }
            .kv .v {
                color: ${text};
            }
            .links {
                display: flex;
                gap: 12px;
                margin-top: 12px;
            }
            .links a {
                color: ${muted};
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 6px 8px;
                background: ${card};
            }
            .links a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .panels {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .panels {
                grid-template-columns: 1fr 1fr;
            }
            .panels .panel:nth-child(3) {
                grid-column: span 2;
            }
            .panels .panel:nth-child(4) {
                grid-column: span 1;
            }
            .panels .panel:nth-child(5) {
                grid-column: span 1;
            }
        }

        .panel {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            padding: 14px;
        }
        .panel h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .grid3 {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 720px) {
                grid-template-columns: 1fr 1fr;
            }
            .stat {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${accent} 6%, transparent);
            }
            .label {
                color: ${muted};
                font-size: 12px;
            }
            .value {
                font-weight: 700;
                margin-top: 4px;
            }
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .tag {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-weight: 600;
            font-size: 12px;
        }

        table.strip {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${border};
            }
            th {
                text-align: left;
                color: ${accent};
                background: ${card};
                font-weight: 600;
                width: 160px;
            }
            tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .kv {
            display: grid;
            gap: 10px;
        }
        .kv.two {
            grid-template-columns: 1fr 1fr;
        }
        .kv.three {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .kv .k {
            color: ${muted};
            font-size: 12px;
        }
        .kv .v {
            color: ${text};
        }

        .notes {
            line-height: 1.8;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
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
        }
        .links a:hover {
            color: ${accent};
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
};
