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
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
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
            color: ${muted};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .btnGhost {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Cards: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .kpi .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
    `,

    Controls: styled.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .field {
            min-width: 180px;
        }
        .field.grow {
            flex: 1;
            min-width: 260px;
        }

        label {
            display: block;
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .actions {
            margin-top: 8px;
        }
        .btnDisabled {
            border: 1px dashed ${border};
            background: ${card};
            color: ${muted};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 700;
            cursor: not-allowed;
        }
    `,

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            display: grid;
            gap: 16px;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .empty {
            text-align: center;
            padding: 24px;
        }
        .empty h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .empty p {
            color: ${muted};
        }

        .group {
            overflow: hidden;
        }
        .groupHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        .groupHead h3 {
            font-size: 14px;
        }
        .groupHead .count {
            color: ${muted};
            font-size: 12px;
        }

        .tableWrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
            color: ${muted};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${muted};
        }
        .right {
            text-align: right;
        }
        .name a {
            color: ${text};
        }
        .name a:hover {
            color: ${accent};
        }

        .chip {
            display: inline-flex;
            align-items: center;
            height: 24px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 600;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .chip.soon {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
        .chip.expired {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .chip.ok {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .rowActions .link {
            color: ${muted};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 6px;
        }
        .rowActions .link:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .links,
        .views {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            border: 1px solid ${border};
            padding: 6px 8px;
            border-radius: 8px;
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .views .btnGhost.small {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
        }
        .legend .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .legend .muted.small {
            font-size: 12px;
            margin-top: 6px;
            display: block;
        }

        #search-print-area {
            padding: 12px 14px;
        }
        #search-print-area .summaryGrid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(2, 1fr);
        }
        #search-print-area .summaryGrid .wide {
            grid-column: 1 / -1;
        }
        #search-print-area .k {
            color: ${muted};
        }
        #search-print-area .v {
            color: ${text};
            font-weight: 700;
        }
        .miniList {
            margin-top: 12px;
        }
        .miniList h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .miniList ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .miniList li {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .miniList .n {
            color: ${text};
        }
        .miniList .x {
            color: ${muted};
        }
    `,
};
