import styled from "styled-components";

/* CSS variable fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Wrap: styled.div`
        color: ${text};
        width: 100%;
        padding: 16px;

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;
            margin-bottom: 16px;
        }
        .titleBlock h1 {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: 0.3px;
        }
        .titleBlock .meta {
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: ${card};
        }
        .sep {
            opacity: 0.6;
        }

        .crumbs {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            color: ${muted};
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
            .current {
                color: ${text};
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${shadow};
            margin-bottom: 16px;
        }

        .range {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: end;

            label {
                display: grid;
                gap: 6px;
                font-size: 12px;
                color: ${muted};
            }
            input[type="date"] {
                height: 36px;
                background: ${bg};
                border: 1px solid ${border};
                color: ${text};
                padding: 0 10px;
                border-radius: 8px;
            }
            .presets {
                display: inline-flex;
                gap: 8px;
                button {
                    height: 36px;
                    padding: 0 12px;
                    border: 1px solid ${border};
                    background: ${bg};
                    color: ${muted};
                    border-radius: 8px;
                    cursor: not-allowed;
                }
            }
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;

            button,
            .btnLink {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 36px;
                padding: 0 14px;
                border: 1px solid ${border};
                background: ${bg};
                color: ${text};
                border-radius: 8px;
                transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                    background 0.2s;
            }
            button:hover,
            .btnLink:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .btnLink {
                text-decoration: none;
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(7, minmax(180px, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }
        .card.kpi {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${shadow};
            min-height: 100px;
            display: grid;
            align-content: space-between;
        }
        .kpiHead {
            font-size: 12px;
            color: ${muted};
        }
        .kpiValue {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            letter-spacing: 0.5px;
        }
        .kpiSub {
            color: ${muted};
            font-size: 12px;
        }

        .pnlArea {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 12px;
            margin-bottom: 20px;
        }
        @media (max-width: 1200px) {
            .cards {
                grid-template-columns: repeat(3, minmax(180px, 1fr));
            }
            .pnlArea {
                grid-template-columns: 1fr;
            }
        }
        @media (max-width: 640px) {
            .cards {
                grid-template-columns: repeat(1, minmax(180px, 1fr));
            }
        }

        .panel {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;
        }
        .panelHead {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 12px 12px 8px 12px;
            border-bottom: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
        }
        .panelHead h2,
        .panelHead h3 {
            font-size: 16px;
            letter-spacing: 0.3px;
        }
        .panelMeta {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
            font-size: 12px;
            strong {
                color: ${text};
            }
        }
        .panelLink {
            font-size: 12px;
            color: ${muted};
            text-decoration: none;
            border: 1px solid ${border};
            padding: 4px 10px;
            border-radius: 8px;
        }
        .panelLink:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tableWrap {
            width: 100%;
            overflow: auto;
            padding: 12px;
        }
        .tableWrap.small {
            padding: 8px 12px 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            color: ${accent};
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        .num {
            text-align: right;
        }

        tbody tr.hd td {
            color: ${text};
            font-weight: 600;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        tbody tr.total td {
            font-weight: 600;
            border-top: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        tbody tr.calc td {
            font-weight: 600;
            color: ${text};
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        tbody tr.calcStrong td {
            font-weight: 700;
            background: color-mix(in oklab, ${accent} 12%, transparent);
            border-top: 1px solid ${border};
            border-bottom: 1px solid ${border};
        }
        tbody tr.sp td {
            padding: 6px;
            border-bottom: none;
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px 14px;
            color: ${muted};
            font-size: 12px;
            border-top: 1px solid ${border};
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .quickNav {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 12px;
        }
        .qnHead {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chipLink {
            border: 1px solid ${border};
            background: ${bg};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chipLink:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
