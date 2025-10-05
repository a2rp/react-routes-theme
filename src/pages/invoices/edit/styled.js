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
        width: 100%;
        color: ${text};
        padding: 20px 0 64px;

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

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-weight: 600;
            font-size: 12px;
        }
        .status.paid {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }
        .status.overdue {
            border-color: ${danger};
            color: ${danger};
            background: color-mix(in oklab, ${danger} 10%, transparent);
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
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

        .partyRow {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.2fr 1.2fr 1fr;
            }
        }
        .party {
            padding: 14px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            .name {
                font-weight: 700;
            }
            .comp {
                color: ${text};
                margin-top: 2px;
            }
            .addr {
                color: ${muted};
                margin-top: 6px;
            }
            .metaLine {
                display: flex;
                gap: 8px;
                color: ${muted};
                margin-top: 4px;
                flex-wrap: wrap;
            }
            a {
                color: ${muted};
            }
            .chips {
                margin-top: 8px;
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
            .links {
                margin-top: 8px;
                a {
                    border: 1px solid ${border};
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: ${card};
                }
            }
        }
        .metaCard {
            padding: 14px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: start;
            .row {
                display: grid;
                gap: 8px;
                grid-template-columns: 1fr 1fr;
            }
            .k {
                color: ${muted};
                display: inline-block;
                min-width: 88px;
            }
            .v {
                color: ${text};
            }
            .qrArea {
                display: grid;
                justify-items: center;
                gap: 6px;
            }
            .qr {
                width: 96px;
                height: 96px;
                background: radial-gradient(
                        circle at 25% 30%,
                        #222 18%,
                        transparent 19%
                    ),
                    radial-gradient(
                        circle at 74% 22%,
                        #333 16%,
                        transparent 17%
                    ),
                    radial-gradient(
                        circle at 50% 70%,
                        #3b3b3b 18%,
                        transparent 19%
                    ),
                    linear-gradient(45deg, #1c1f27, #2a2f3a);
                border: 1px solid ${border};
                border-radius: 10px;
            }
            .qrHint {
                color: ${muted};
                font-size: 12px;
            }
        }

        .tableWrap {
            margin-top: 16px;
        }
        .tableHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-size: 12px;
        }

        .scroll {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            background: ${card};
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${border};
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                z-index: 1;
                color: ${accent};
            }
            td.num,
            th.num {
                text-align: right;
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .blocks {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 16px;
        }
        @media (min-width: 900px) {
            .blocks {
                grid-template-columns: 1fr 1fr;
            }
        }
        .block {
            padding: 14px;
        }
        .terms {
            margin-left: 18px;
        }
        .attachments {
            padding: 14px;
            margin-top: 16px;
        }
        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: flex;
            justify-content: space-between;
            border: 1px solid ${border};
            background: ${card};
            padding: 8px 10px;
            border-radius: 8px;
        }
        .file {
            color: ${text};
        }
        .size {
            color: ${muted};
        }

        .printCard {
            margin-top: 16px;
            padding: 14px;
        }
        .printCard .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .printCard .k {
            color: ${muted};
        }
        .printCard .v {
            color: ${text};
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }
        .totals .rows {
            display: grid;
            gap: 8px;
        }
        .totals .k {
            color: ${muted};
        }
        .totals .v {
            color: ${text};
        }
        .totals hr {
            border: none;
            border-top: 1px solid ${border};
            margin: 8px 0;
        }
        .totals .grand {
            margin-top: 6px;
            padding-top: 6px;
            border-top: 1px dashed ${border};
            display: flex;
            justify-content: space-between;
            font-weight: 700;
        }

        .payments .plist {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .payments li {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 10px;
            padding: 10px;
        }
        .payments .row1 {
            display: flex;
            justify-content: space-between;
        }
        .payments .row2 {
            display: flex;
            gap: 8px;
            color: ${muted};
            margin-top: 2px;
            flex-wrap: wrap;
        }
        .payments .row3 {
            margin-top: 4px;
        }
        .amt {
            font-weight: 700;
        }
        .mono {
            font-family: ui-monospace, Menlo, Consolas, monospace;
        }

        .info .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            .k {
                color: ${muted};
            }
            .v a {
                color: ${text};
            }
        }

        .signatures .sigGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .sigBox {
            display: grid;
            gap: 6px;
        }
        .sigBox .line {
            height: 48px;
            border-bottom: 1px dashed ${border};
        }
        .sigBox .cap {
            color: ${muted};
            font-size: 12px;
            text-align: center;
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
    `,
};
