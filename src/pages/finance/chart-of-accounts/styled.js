import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        padding: 18px 0 64px;
        color: ${text};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        h1 {
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
        .right {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-content: center;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
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
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,

    Tools: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        gap: 16px;
        padding: 14px 16px;
        margin-bottom: 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};

        .search {
            display: grid;
            grid-template-columns: 80px 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .search label {
            color: ${muted};
            font-size: 12px;
        }
        .search input {
            height: 36px;
        }
        .small {
            padding: 6px 10px;
        }
        .legend {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            color: ${muted};
            font-size: 12px;
        }
        .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${border};
            display: inline-block;
            margin-right: 6px;
        }
        .legend .asset {
            background: color-mix(in oklab, ${accent} 22%, transparent);
        }
        .legend .liability {
            background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        .legend .equity {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }
        .legend .income {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
        .legend .expense {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    Stats: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(6, minmax(140px, 1fr));
        margin-bottom: 14px;
        @media (max-width: 1300px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .stat {
            padding: 12px 14px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: var(--shadow);
        }
        .stat .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .stat .value {
            font-size: 22px;
            font-weight: 700;
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 2.2fr 1fr;
        gap: 16px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .tree.card {
            padding: 0;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            overflow: hidden;
        }

        .thead,
        .row {
            display: grid;
            grid-template-columns: 220px 120px 1.2fr 120px 110px 110px 1fr 220px 200px;
            align-items: center;
        }
        @media (max-width: 1300px) {
            .thead,
            .row {
                grid-template-columns: 220px 110px 1.1fr 110px 90px 90px 1fr 200px 160px;
            }
        }
        @media (max-width: 1024px) {
            .thead,
            .row {
                grid-template-columns: 200px 100px 1fr 100px 90px 90px 1fr 180px 140px;
            }
        }
        @media (max-width: 860px) {
            .thead,
            .row {
                grid-template-columns: 200px 90px 1fr 90px 80px 80px 1fr 160px 120px;
            }
        }

        .thead {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            color: ${muted};
            position: sticky;
            top: 0;
            z-index: 5;
        }

        .tbody {
            padding: 6px 0;
        }

        .row {
            padding: 8px 12px;
            border-bottom: 1px solid ${border};
            transition: background 0.2s;
            min-height: 42px; /* ensures visible rows */
        }
        .row:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .tree {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .tree .indent {
            width: calc(var(--d) * 16px);
            display: inline-block;
        }
        .tree .chev {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 6px;
            padding: 2px 6px;
            cursor: pointer;
            line-height: 1;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .tree .chev:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .tree .leaf {
            color: ${muted};
        }

        .code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
        }
        .name {
            font-weight: 600;
        }
        .type,
        .normal,
        .status {
            color: ${muted};
            font-size: 12px;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .tag {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 4px 8px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-size: 12px;
        }
        .updated {
            color: ${muted};
            font-size: 12px;
        }
        .actions {
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .panel {
            display: grid;
            gap: 16px;
        }
        .panel .head {
            padding: 14px 16px;
        }
        .muted {
            color: ${muted};
        }

        .summary {
            display: grid;
            gap: 12px;
        }
        .summary .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .summary .k {
            color: ${muted};
            font-size: 12px;
        }
        .summary .v {
            color: ${text};
        }
        .summary .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
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
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
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

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
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
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,
};
