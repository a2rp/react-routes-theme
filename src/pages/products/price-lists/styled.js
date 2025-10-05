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
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s ease;
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
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }

        .demoDisabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        .demoDisabled:hover {
            box-shadow: none;
            border-color: ${border};
            color: ${text};
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

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            padding: 14px;
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .filters {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            input,
            select {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 10px;
                border-radius: 8px;
                font-size: 13px;
            }
            input::placeholder {
                color: ${muted};
            }
            input:disabled,
            select:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        table.tbl {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.tbl thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            font-weight: 600;
            color: ${accent};
        }
        table.tbl tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        .cellTitle {
            font-weight: 600;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        tbody tr.isSelected {
            outline: 1px solid ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .selCell {
            text-align: center;
            width: 38px;
        }
        .actionsCell {
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
        }

        .badge {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            background: ${card};
        }
        .badge.ok {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.sm {
            font-size: 11px;
            padding: 3px 8px;
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .sticky {
            position: sticky;
            top: 14px;
        }
        .detail .hero {
            margin-bottom: 8px;
        }
        .detail .title {
            font-size: 16px;
            font-weight: 700;
        }
        .detail .meta {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
        }
        .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .notes {
            margin-top: 10px;
        }
        .updated {
            margin-top: 10px;
        }

        .printCard {
            margin-top: 14px;
            padding: 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
        }
        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            column-gap: 12px;
            row-gap: 6px;
        }
        .kv .k {
            color: ${muted};
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

        .empty {
            color: ${muted};
            padding: 8px 0;
        }
        .panelActions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
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
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
