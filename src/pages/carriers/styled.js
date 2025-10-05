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
        padding: 18px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        h1 {
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
            margin-top: 4px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
            .btnPrimary,
            .btnGhost {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.06s;
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
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }

            /* simple tooltip */
            [data-tooltip] {
                position: relative;
            }
            [data-tooltip]:hover::after {
                content: attr(data-tooltip);
                position: absolute;
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 6px 8px;
                font-size: 12px;
                white-space: nowrap;
                box-shadow: var(--shadow);
                pointer-events: none;
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `,

    Filters: styled.section`
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        box-shadow: var(--shadow);
        padding: 14px;
        margin-bottom: 14px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 160px 160px;
            }
        }

        .field label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .hints {
            margin-top: 8px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Split: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: 1fr;
        @media (min-width: 1180px) {
            grid-template-columns: 2.3fr 1fr;
        }

        .tableWrap {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 0;
        }

        .tableHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${border};
            padding: 10px 12px;
            h3 {
                font-size: 16px;
            }
            .legend {
                display: flex;
                gap: 8px;
            }
            .pill {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                font-size: 12px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .pill.warn {
                background: color-mix(in oklab, ${accent} 5%, transparent);
            }
            .pill.off {
                background: color-mix(in oklab, ${accent} 0%, transparent);
                opacity: 0.7;
            }
        }

        .scroll {
            overflow: auto;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px 12px;
                border-bottom: 1px solid ${border};
                vertical-align: top;
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                z-index: 1;
                color: ${text};
                text-align: left;
            }
            tbody tr:hover {
                background: color-mix(in oklab, ${accent} 7%, transparent);
            }

            .carrierCell {
                display: grid;
                grid-template-columns: 40px 1fr;
                gap: 10px;
                align-items: center;
                .logo {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    border: 1px solid ${border};
                    background: color-mix(in oklab, ${accent} 8%, transparent);
                    font-weight: 700;
                    letter-spacing: 0.4px;
                }
                .stack .status {
                    display: inline-block;
                    margin-top: 2px;
                    font-size: 11px;
                    color: ${muted};
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${border};
                    background: color-mix(in oklab, ${accent} 6%, transparent);
                }
                .stack .status.maintenance {
                    background: color-mix(in oklab, ${accent} 3%, transparent);
                }
            }

            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            .chips.small .chip {
                padding: 4px 8px;
                font-size: 12px;
            }
            .chip {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }

            .meter {
                position: relative;
                height: 18px;
                border: 1px solid ${border};
                border-radius: 10px;
                overflow: hidden;
                background: color-mix(in oklab, ${accent} 4%, transparent);
                .bar {
                    height: 100%;
                    background: ${accent};
                }
                .val {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: center;
                    font-size: 12px;
                    color: ${text};
                }
            }

            .pill.ok {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
            }
            .pill.off {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                opacity: 0.7;
            }

            .btnTiny {
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 4px 10px;
                background: ${card};
                color: ${text};
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .btnTiny:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .btnTiny.isDefault {
                border-color: ${accent};
                color: ${accent};
            }
            .btnTiny:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }

        .rail {
            display: grid;
            gap: 14px;
        }
        .facts {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .facts li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed ${border};
            padding-bottom: 6px;
        }
        .facts .k {
            color: ${muted};
        }
        .rank {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .rank li {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            align-items: center;
            gap: 8px;
        }
        .rank .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .rank .spark {
            height: 8px;
            border: 1px solid ${border};
            border-radius: 6px;
            overflow: hidden;
            background: color-mix(in oklab, ${accent} 4%, transparent);
        }
        .rank .spark .bar {
            height: 100%;
            background: ${accent};
        }
        .rank .pct {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .bullets {
            margin: 8px 0 0 16px;
            color: ${text};
        }
        .muted {
            color: ${muted};
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
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
