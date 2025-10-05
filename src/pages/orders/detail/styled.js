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
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
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
                box-shadow 0.25s, transform 0.06s;
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
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

    TopGrid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 1.2fr 1fr 1fr;
        }

        .card {
            padding: 16px;
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
        .secHead .tinyLink {
            font-size: 12px;
            color: ${muted};
        }
        .secHead .tinyLink:hover {
            color: ${accent};
        }
        .secHead .status {
            font-size: 12px;
            color: ${accent};
        }

        .pair {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 680px) {
                grid-template-columns: 1fr;
            }
            .label {
                color: ${muted};
                font-size: 12px;
                margin-bottom: 4px;
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
        }

        .addrWrap {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .addrHead {
            font-weight: 700;
            margin-bottom: 8px;
        }
    `,

    TableCard: styled.section`
        margin-top: 16px;
        padding: 14px 16px;

        .secHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .legend {
            color: ${muted};
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${accent};
            display: inline-block;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
            background: ${card};
            color: ${accent};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${muted};
        }
        .strong {
            font-weight: 700;
        }
        .title {
            font-weight: 600;
            display: inline-block;
        }

        /* row + link styling for clickable items */
        tbody.itemsBody a {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        tbody.itemsBody a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        tr.itemRow:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .total {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
        }
        .viewLink {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 4px 8px;
            background: ${card};
        }
        .viewLink:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    SecondaryGrid: styled.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        .card {
            padding: 16px;
        }

        .shipments {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .ship {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${card};
        }
        .ship .id {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .ship .status {
            color: ${accent};
            font-size: 12px;
        }
        .ship .meta.small {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .ship .right .small {
            padding: 6px 10px;
        }

        .docs {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .docs .k {
            display: inline-block;
            width: 120px;
            color: ${muted};
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
        .note {
            margin-bottom: 10px;
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

    // confirm modal
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
        .btnGhost,
        .btnDanger {
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
