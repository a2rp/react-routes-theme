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
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

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
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
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

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 14px;
        margin-bottom: 16px;

        .filters {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .search input {
            width: 320px;
            max-width: 60vw;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .toolbarRight {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${muted};
            font-size: 12px;
        }
        .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid ${border};
        }
        .legend .rx {
            background: color-mix(in oklab, ${accent} 60%, transparent);
        }
        .legend .otc {
            background: color-mix(in oklab, ${accent} 25%, transparent);
        }

        .quick {
            display: flex;
            gap: 8px;
        }
        .mini {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .mini:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1060px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .card {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            padding: 16px;
        }

        .gridTwo {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            .label {
                color: ${muted};
                font-size: 12px;
            }
            .value {
                font-weight: 700;
            }
        }
        .divider {
            height: 1px;
            background: ${border};
            margin: 12px 0;
            opacity: 0.7;
        }

        .keylist {
            display: grid;
            gap: 8px;
            grid-template-columns: 120px 1fr;
        }
        .keylist .k {
            color: ${muted};
        }
        .keylist .v ul {
            margin: 0;
            padding-left: 18px;
        }
        .small {
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
    `,

    Table: styled.div`
        overflow: auto;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        .thead {
            position: sticky;
            top: 0;
            z-index: 2;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.9fr 1.1fr 0.6fr 0.6fr 0.5fr 1.2fr 0.9fr 0.9fr;
            border-bottom: 1px solid ${border};
        }
        .th,
        .td {
            padding: 12px 14px;
        }
        .th {
            font-weight: 700;
            color: ${accent};
            background: ${card};
            position: sticky;
            top: 0;
            border-bottom: 1px solid ${border};
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .titleCell .name {
            font-weight: 700;
        }
        .titleCell .muted {
            color: ${muted};
            font-size: 12px;
        }

        .chipsLine {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip.tiny {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 4px 8px;
            font-size: 12px;
            background: ${card};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .badge {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 4px 8px;
            font-weight: 700;
        }
        .badge.rx {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .badge.otc {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        .bullets {
            margin: 0;
            padding-left: 18px;
        }
        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .empty {
            padding: 36px;
            text-align: center;
            color: ${muted};
        }
        .empty .title {
            font-weight: 700;
            color: ${text};
            margin-top: 8px;
        }
        .empty .sub {
            color: ${muted};
            margin-top: 4px;
        }
        .empty .icon {
            font-size: 34px;
        }
    `,

    FooterBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;

        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .btnGhost.mini {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .btnGhost.mini:hover {
            border-color: ${accent};
            color: ${accent};
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
