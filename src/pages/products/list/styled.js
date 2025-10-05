import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)";
const radius = "var(--radius, 14px)";

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

    Summary: styled.section`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .stat {
            padding: 14px 16px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 0.4px;
        }
        .s {
            color: ${muted};
            font-size: 12px;
            margin-top: 4px;
        }
    `,

    Toolbar: styled.section`
        padding: 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 12px;

        .filters {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: center;
            @media (min-width: 1024px) {
                grid-template-columns: 1fr auto auto;
            }
        }

        .search input {
            width: 100%;
            height: 40px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 0 14px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .seg {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .seg .seg {
            border: 1px solid ${border};
            background: ${card};
            color: ${muted};
            border-radius: 999px;
            padding: 8px 12px;
            font-weight: 600;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .seg .seg:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .seg .seg.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .pickers {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .pickers label {
            display: grid;
            gap: 4px;
            font-size: 12px;
            color: ${muted};
        }
        .pickers select {
            min-width: 160px;
            height: 40px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pickers select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .legend {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
    `,

    TableWrap: styled.section`
        overflow: auto;
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            z-index: 1;
            color: ${muted};
            font-weight: 700;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }

        .name .link {
            color: ${text};
        }
        .name .link:hover {
            color: ${accent};
        }
        .name .sub {
            color: ${muted};
            font-size: 12px;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
        }

        .pill {
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            border: 1px solid ${border};
        }
        .pill.info {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 2px ${accentSoft} inset;
        }
        .pill.warn {
            color: ${warn};
            border-color: ${warn};
            box-shadow: 0 0 0 2px color-mix(in oklab, ${warn} 20%, transparent)
                inset;
        }
        .pill.danger {
            color: ${danger};
            border-color: ${danger};
            box-shadow: 0 0 0 2px
                color-mix(in oklab, ${danger} 20%, transparent) inset;
        }
        .pill.mute {
            color: ${muted};
            border-color: ${border};
        }

        .rowActions {
            display: flex;
            gap: 8px;
        }
        .btnLink {
            background: transparent;
            color: ${accent};
            border: none;
            padding: 0;
            cursor: pointer;
            font-weight: 700;
        }
        .btnLink:hover {
            text-decoration: underline;
        }

        .right {
            text-align: right;
        }

        tr:hover td {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        .empty {
            text-align: center;
            padding: 40px 0;
        }
        .empty .title {
            font-weight: 800;
            margin-bottom: 6px;
        }
        .empty .sub {
            color: ${muted};
        }

        .footerBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${muted};
        }
        .footerBar .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .footerBar .page {
            color: ${text};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    PrintCard: styled.section`
        margin-top: 16px;
        padding: 14px 16px;
        h3 {
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        @media (min-width: 900px) {
            .grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-weight: 700;
        }
        .note {
            color: ${muted};
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
        z-index: 60;
    `,
    Modal: styled.div`
        width: min(460px, 92vw);
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
