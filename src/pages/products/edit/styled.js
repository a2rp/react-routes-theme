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
        border-radius: ${radius};
        .titleRow {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .status {
            padding: 4px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            font-size: 12px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            text-transform: capitalize;
        }
        .status.archived {
            opacity: 0.7;
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
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
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
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 18px;
            border-radius: ${radius};
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: var(--shadow);
        }

        .section {
            margin-top: 18px;
        }
        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 6px;
            border-bottom: 1px dashed ${border};
            h3 {
                font-size: 16px;
            }
            .small {
                font-size: 12px;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        textarea {
            width: 100%;
        }

        .grid.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .grid.three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .grid.four {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .grid.two {
                grid-template-columns: repeat(2, 1fr);
            }
            .grid.three {
                grid-template-columns: repeat(3, 1fr);
            }
            .grid.four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }

        .metric {
            background: color-mix(in oklab, ${accent} 8%, transparent);
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
        }
        .metric .k {
            font-size: 12px;
            color: ${muted};
        }
        .metric .v {
            font-weight: 700;
            margin-top: 2px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .table th,
        .table td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        .table th {
            text-align: left;
            color: ${accent};
            background: ${card};
            position: sticky;
            top: 0;
        }
        .table tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .sub {
            padding: 14px;
            border-radius: 12px;
        }

        /* gallery */
        .gallery {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }
        .imageMain {
            width: 100%;
            height: 300px;
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card} center/cover no-repeat;
        }
        .thumbs {
            display: flex;
            gap: 10px;
            overflow: auto;
            padding-bottom: 4px;
        }
        .thumb {
            width: 68px;
            height: 68px;
            border-radius: 12px;
            border: 1px solid ${border};
            background: ${card} center/cover no-repeat;
            cursor: pointer;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .thumb.active,
        .thumb:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        /* side cards */
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            display: block;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .vendors {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .vendors .vname {
            font-weight: 700;
        }
        .vendors .vmeta {
            margin-top: 2px;
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

        .related .relGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
        .related .relCard {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            color: ${text};
            background: ${card};
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .related .relCard:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .related .price {
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

        .danger {
            padding: 16px;
        }
        .danger .full {
            width: 100%;
        }

        .muted {
            color: ${muted};
        }
        .small {
            font-size: 12px;
        }
        .flag {
            display: inline-block;
            padding: 4px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
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
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
