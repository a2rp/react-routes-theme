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
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
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

        .row {
            display: grid;
            gap: 16px;
            margin-bottom: 18px;
        }
        .row.two {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .row.two {
                grid-template-columns: 1fr 1fr;
            }
        }
        .row.between {
            grid-template-columns: 1fr auto;
            align-items: center;
        }

        .block h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .grid.twoCol {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
            .grid.twoCol {
                grid-template-columns: 1fr 1fr;
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
        }

        .identity {
            display: flex;
            gap: 14px;
            align-items: center;
        }
        .identity .avatar {
            width: 56px;
            height: 56px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            background-image: url("/avatar.svg");
            background-size: cover;
            background-position: center;
        }
        .identity .name {
            font-weight: 700;
        }
        .identity .contact {
            display: flex;
            gap: 6px;
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .sub {
            padding: 14px;
        }
        .addr {
            display: grid;
            gap: 4px;
        }

        .miniActions {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .xsmall {
            padding: 4px 8px;
            font-weight: 600;
            font-size: 12px;
        }

        .tableWrap {
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: auto;
            background: ${card};
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 860px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${accent};
        }
        table.items tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        table.items tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        table.items .num {
            text-align: right;
        }
        table.items .actions {
            white-space: nowrap;
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        table.items .bold {
            font-weight: 700;
        }
        table.items .ghost td {
            border: 0;
        }

        .totals {
            margin-top: 10px;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: ${card};
            display: grid;
            gap: 8px;
        }
        .totals .line {
            display: flex;
            justify-content: space-between;
            gap: 16px;
        }
        .totals .grand {
            font-weight: 800;
            font-size: 14px;
        }
        .totals .due {
            color: ${text};
        }
        .totals .sep {
            height: 1px;
            background: ${border};
            margin: 4px 0;
        }

        .mini {
            margin-top: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .payinfo {
            margin-top: 14px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            .label {
                color: ${muted};
                font-size: 12px;
            }
        }

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
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }

        /* printable card styles */
        #search-print-area .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        #search-print-area .logo {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: ${card};
            border: 1px solid ${border};
        }
        #search-print-area .bname {
            font-weight: 800;
            font-size: 16px;
        }
        #search-print-area .meta {
            display: grid;
            gap: 6px;
            grid-auto-flow: column;
            justify-content: end;
            align-items: start;
        }
        #search-print-area .label {
            color: ${muted};
            font-size: 12px;
        }
        #search-print-area .two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            margin: 12px 0;
        }
        @media (min-width: 820px) {
            #search-print-area .two {
                grid-template-columns: 1fr 1fr;
            }
        }
        #search-print-area .blk {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            background: ${card};
        }
        #search-print-area .bold {
            font-weight: 700;
        }
        #search-print-area .miniTable {
            width: 100%;
            border-collapse: collapse;
            margin-top: 6px;
        }
        #search-print-area .miniTable th,
        #search-print-area .miniTable td {
            border-bottom: 1px solid ${border};
            padding: 8px;
            font-size: 12px;
        }
        #search-print-area .miniTable th {
            text-align: left;
            color: ${accent};
        }
        #search-print-area .miniTable .num {
            text-align: right;
        }
        #search-print-area .totalsMini {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        #search-print-area .totalsMini > div {
            display: flex;
            justify-content: space-between;
        }
        #search-print-area .totalsMini .grand {
            font-weight: 800;
        }
        #search-print-area .totalsMini .due {
        }
        #search-print-area .footnote {
            margin-top: 10px;
            font-size: 12px;
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
        width: min(480px, 92vw);
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

        .btnPrimary {
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
    `,
};
