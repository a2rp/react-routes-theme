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
        padding: 18px 0 60px;
        color: ${text};

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 14px 16px;
            margin-bottom: 16px;

            .l h1 {
                font-size: 22px;
                letter-spacing: 0.4px;
            }
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
            .btnDisabled {
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
            .btnGhost {
                opacity: 0.92;
            }
            .btnGhost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .btnDisabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }
        }

        .kpis {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(4, minmax(160px, 1fr));
            margin-bottom: 16px;

            .kpi {
                padding: 14px 16px;
            }
            .kpi .label {
                color: ${muted};
                font-size: 12px;
            }
            .kpi .value {
                font-size: 18px;
                margin-top: 2px;
                letter-spacing: 0.3px;
            }
        }

        .toolbar.card {
            padding: 12px 14px;
            margin-bottom: 16px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;

            .filters {
                display: grid;
                grid-template-columns: 1.2fr 1fr auto;
                gap: 12px;
            }
            .field label {
                display: block;
                font-size: 12px;
                color: ${muted};
                margin-bottom: 6px;
            }
            .types .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .chip {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 8%, transparent);
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s;
            }
            .chip.active {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .switch {
                display: inline-flex;
                gap: 8px;
                align-items: center;
            }
            .context {
                display: grid;
                grid-template-columns: repeat(4, minmax(160px, auto));
                gap: 16px;
            }
            .context .muted {
                color: ${muted};
                font-size: 12px;
            }
        }

        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 2fr 1fr;
        }

        .tableWrap {
            padding: 0;
            overflow: hidden;
        }
        .tableWrap.dense table.listing td {
            padding-top: 6px;
            padding-bottom: 6px;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        .tableHead .muted {
            color: ${muted};
            font-size: 12px;
        }

        .tableScroller {
            overflow: auto;
            max-height: 70vh;
        }
        .tableScroller::-webkit-scrollbar {
            height: 12px;
            width: 12px;
        }
        .tableScroller::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #3a3a3a, #666);
            border-radius: 8px;
            border: 3px solid transparent;
            background-clip: content-box;
        }

        table.listing {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                z-index: 1;
                border-bottom: 1px solid ${border};
                text-align: left;
                padding: 10px 12px;
                color: ${accent};
            }
            tbody td {
                border-bottom: 1px solid ${border};
                padding: 10px 12px;
                vertical-align: top;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
            .num {
                text-align: right;
                font-variant-numeric: tabular-nums;
            }
            .desc {
                color: ${text};
                opacity: 0.95;
            }
        }

        .linkish {
            display: inline;
            padding: 0;
            margin: 0;
            border: 0;
            background: transparent;
            color: ${text};
            cursor: pointer;
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s, border-color 0.2s;
        }
        .linkish:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .linkish:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
            border-radius: 4px;
        }

        .side {
            padding: 14px 16px;
            h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .kv {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 8px 12px;
                margin-bottom: 12px;
            }
            .kv .k {
                color: ${muted};
            }
            .kv .v {
                color: ${text};
            }
            .hr {
                height: 1px;
                background: ${border};
                margin: 10px 0 14px;
            }
            .totals {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .totals .label {
                color: ${muted};
                font-size: 12px;
            }
            .totals .value {
                font-size: 16px;
                margin-top: 2px;
            }
            .help {
                margin-top: 12px;
            }
            .muted {
                color: ${muted};
                font-size: 12px;
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* make sure page expands full width naturally */
        width: 100%;
    `,
};
