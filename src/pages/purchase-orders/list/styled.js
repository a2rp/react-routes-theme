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
        padding: 20px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
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
        [data-demo]::after {
            content: "Demo";
            margin-left: 8px;
            font-size: 11px;
            color: ${muted};
            padding: 2px 8px;
            border: 1px dashed ${border};
            border-radius: 999px;
        }
    `,

    Toolbar: styled.div`
        padding: 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 10px;

        .filters {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            @media (min-width: 980px) {
                grid-template-columns: 1fr 180px 160px 160px 160px 120px;
            }
        }

        .field {
            display: grid;
            gap: 6px;
            label {
                font-size: 12px;
                color: ${muted};
            }
            &.grow {
                grid-column: span 1;
            }
        }

        .legend {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .pill {
                display: inline-flex;
                align-items: center;
                padding: 4px 10px;
                border: 1px solid ${border};
                border-radius: 999px;
                font-size: 12px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .open {
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .partial {
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            .received {
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .billed {
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
            .cancelled {
                background: color-mix(in oklab, ${accent} 6%, transparent);
                opacity: 0.7;
            }
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1200px) {
            grid-template-columns: 3fr 1fr;
        }

        .side .sideCard {
            padding: 14px;
        }
        .side .links,
        .tips {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .side .links a {
            color: ${muted};
            padding: 6px 8px;
            border: 1px solid ${border};
            background: ${card};
            border-radius: 8px;
        }
        .side .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .tips li {
            color: ${muted};
            font-size: 13px;
        }
    `,

    TableWrap: styled.div`
        padding: 0;
        overflow: hidden;

        .tableTitle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 16px;
            }
            .count {
                color: ${muted};
                font-size: 12px;
            }
        }

        &.compact table tr td,
        &.compact table tr th {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .tableScroll {
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
                padding: 12px 10px;
                z-index: 2;
            }
            tbody td {
                border-bottom: 1px solid ${border};
                padding: 12px 10px;
                vertical-align: top;
            }
            tbody tr:hover td {
                background: color-mix(in oklab, ${accent} 6%, transparent);
            }
            .num {
                text-align: right;
                white-space: nowrap;
            }
            .actions {
                width: 320px;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
            .sub.muted {
                color: ${muted};
                font-size: 12px;
                margin-top: 2px;
            }

            .tags {
                display: flex;
                gap: 6px;
                margin-top: 6px;
                flex-wrap: wrap;
            }
            .tag {
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 2px 8px;
                font-size: 11px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }

            .badge {
                display: inline-flex;
                align-items: center;
                font-weight: 600;
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 4px 10px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .badge.open {
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .badge.partially-received {
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            .badge.received {
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .badge.billed {
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
            .badge.cancelled {
                background: color-mix(in oklab, ${accent} 6%, transparent);
                opacity: 0.75;
            }

            .mini {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 8px;
                margin-right: 6px;
                margin-bottom: 6px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                font-weight: 600;
                text-decoration: none;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .mini:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .btnGhost {
                background: ${card};
            }
        }

        .empty {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: center;
            color: ${muted};
            padding: 20px 0;
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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
