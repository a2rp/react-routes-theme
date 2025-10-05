import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

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

    SheetWrap: styled.div`
        display: grid;
        place-items: center;
    `,

    PrintSheet: styled.div`
        width: min(980px, 96%);
        padding: 24px 24px 28px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: ${shadow};
        color: ${text};

        .sheetHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
            .brand {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .logo {
                width: 44px;
                height: 44px;
                border: 1px solid ${border};
                border-radius: 10px;
                display: grid;
                place-items: center;
                font-weight: 800;
                letter-spacing: 0.6px;
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            .brandText h2 {
                font-size: 18px;
                margin-bottom: 2px;
            }
            .brandText .muted {
                color: ${muted};
                font-size: 12px;
            }

            .docMeta {
                display: grid;
                gap: 6px;
                text-align: right;
                .k {
                    color: ${muted};
                    margin-right: 8px;
                }
                .v {
                    color: ${text};
                    font-weight: 600;
                }
                .badge {
                    padding: 2px 8px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                }
            }
        }

        .identity {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-bottom: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .who h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }
            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            .k {
                color: ${muted};
                margin-right: 8px;
            }
            .v {
                color: ${text};
                font-weight: 600;
            }
            .addr .block {
                padding: 12px;
            }
            .addr h4 {
                font-size: 14px;
                margin-bottom: 6px;
            }
            .addr p {
                line-height: 1.6;
            }
        }

        .tagsKpi {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 10px 0 8px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .tags {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                align-content: start;
            }
            .chip {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
                font-weight: 600;
            }
            .kpis {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }
            .kpi {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 10px 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            .kpi .label {
                color: ${muted};
                font-size: 12px;
            }
            .kpi .value {
                font-size: 16px;
                font-weight: 700;
                margin-top: 4px;
            }
        }

        .section {
            margin-top: 14px;
        }
        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .sectionHead h3 {
            font-size: 16px;
        }
        .miniLink {
            color: ${muted};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 8px;
        }
        .miniLink:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: color-mix(in oklab, ${card} 94%, transparent);
            color: ${text};
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }
        .right {
            text-align: right;
        }

        .notesSign {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-top: 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .note {
                padding: 14px;
            }
            .note h4 {
                margin-bottom: 8px;
            }
            .signs {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                align-items: end;
            }
            .signBlock {
                display: grid;
                gap: 6px;
            }
            .line {
                height: 42px;
                border-bottom: 1px dashed ${border};
            }
            .cap {
                text-align: center;
                color: ${muted};
                font-size: 12px;
            }
        }

        .sheetFoot {
            margin-top: 18px;
            padding-top: 10px;
            border-top: 1px solid ${border};
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
            font-size: 12px;
            color: ${muted};
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 4px;
            }
        }
    `,
};
