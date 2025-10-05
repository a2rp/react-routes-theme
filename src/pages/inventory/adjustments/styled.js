import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";
const danger = "var(--danger, #ef4444)";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 20px 0 56px;

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 14px 16px;
        }

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

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

        .subMeta {
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
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s ease-in-out;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(1px);
        }
        .btnPrimary[disabled],
        .btnGhost[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        [data-tooltip] {
            position: relative;
        }
        [data-tooltip]:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(100% + 6px);
            white-space: nowrap;
            background: ${card};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 6px;
            color: ${text};
            font-size: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            pointer-events: none;
        }

        .metrics {
            margin: 16px 0;
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 1024px) {
                grid-template-columns: repeat(4, 1fr);
            }

            .metric {
                padding: 14px;
                border-radius: ${radius};
                border: 1px solid ${border};
                background: ${card};
                box-shadow: var(--shadow);
                .k {
                    color: ${muted};
                    font-size: 12px;
                }
                .v {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                    margin-top: 6px;
                }
                .hint {
                    color: ${muted};
                    margin-top: 6px;
                    font-size: 12px;
                }
            }
        }

        .filters.card {
            padding: 14px;
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card};
            .row {
                display: grid;
                gap: 12px;
                grid-template-columns: 1fr;
            }
            @media (min-width: 900px) {
                .row {
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                }
            }
            .field label {
                display: block;
                color: ${muted};
                font-size: 12px;
                margin-bottom: 6px;
            }
            .filterMeta {
                margin-top: 10px;
                color: ${muted};
                font-size: 12px;
            }
        }

        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 2fr 1fr;
            }
        }

        .tableWrap {
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            .title {
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .legend {
                display: flex;
                gap: 8px;
                align-items: center;
            }
        }

        .scroll {
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
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 10px;
            text-align: left;
            color: ${muted};
            font-weight: 600;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
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

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-weight: 600;
        }
        .chip.pending {
            background: color-mix(in oklab, ${accent} 5%, transparent);
        }
        .chip.rejected {
            background: color-mix(in oklab, ${danger} 10%, transparent);
            border-color: color-mix(in oklab, ${danger} 40%, ${border});
        }
        .chip.approved {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .rowActions {
            text-align: right;
        }
        .tableFoot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            border-top: 1px solid ${border};
            .pageNote {
                color: ${muted};
                font-size: 12px;
            }
        }

        .side {
            padding: 14px;
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card};
            h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .sum {
                display: grid;
                gap: 8px;
            }
            .line {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
            }
            .k {
                color: ${muted};
            }
            .v {
                color: ${text};
            }

            .miniList {
                margin-top: 14px;
            }
            .miniList h4 {
                margin-bottom: 8px;
            }
            .miniList ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .miniList li {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .help {
                margin-top: 14px;
                color: ${muted};
                font-size: 13px;
            }
        }
    `,
};
