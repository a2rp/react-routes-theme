import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
        }
        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            .crumb {
                color: ${muted};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            .crumb:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }
            .crumb.current {
                color: ${text};
                border-bottom: none;
                cursor: default;
            }
            .sep {
                opacity: 0.7;
            }
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${shadow};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.05s ease;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button:active {
                transform: translateY(1px);
            }
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${card};
                border: 1px dashed ${border};
                color: ${muted};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .filters {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;
            .fy {
                color: ${muted};
            }
            .pill {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 2px 8px;
                border-radius: 999px;
                margin-left: 8px;
            }
            .periods {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .chip {
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${muted};
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                }
                .chip:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                .chip.active {
                    color: ${accent};
                    border-color: ${accent};
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
                .chip:active {
                    transform: translateY(1px);
                }
            }
        }

        .summaryGrid {
            display: grid;
            gap: 12px;
            margin-bottom: 16px;
            grid-template-columns: repeat(4, minmax(240px, 1fr));
            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, minmax(220px, 1fr));
            }
            @media (max-width: 900px) {
                grid-template-columns: repeat(2, minmax(220px, 1fr));
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }

            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 14px;
                padding: 14px;
                box-shadow: ${shadow};
                display: grid;
                gap: 4px;
            }
            .label {
                color: ${muted};
                font-weight: 600;
                letter-spacing: 0.3px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
            }
            .hint {
                color: ${muted};
                font-size: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .inlineLink {
                color: ${muted};
                text-decoration: none;
                border-bottom: 1px dotted ${border};
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .inlineLink:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }
        }

        .accordion {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            margin-bottom: 12px;
            box-shadow: ${shadow};
            .accHeader {
                width: 100%;
                display: flex;
                gap: 8px;
                align-items: center;
                padding: 12px 14px;
                background: transparent;
                border: none;
                color: ${text};
                text-align: left;
                cursor: pointer;
                border-bottom: 1px solid ${border};
                transition: color 0.2s ease, background 0.2s ease;
            }
            .accHeader:hover {
                color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .accBody {
                padding: 12px 14px;
                display: grid;
                gap: 12px;
            }
            .twoCol {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            @media (max-width: 900px) {
                .twoCol {
                    grid-template-columns: 1fr;
                }
            }
            .panel {
                border: 1px solid ${border};
                background: color-mix(in oklab, ${card} 96%, transparent);
                border-radius: 10px;
                padding: 12px;
            }
            .panelTitle {
                font-weight: 700;
                margin-bottom: 8px;
            }
            .bulleted {
                padding-left: 18px;
                line-height: 1.9;
                color: ${muted};
            }
        }

        .tableWrap {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;
            .tableTitle {
                font-weight: 700;
                padding: 12px 14px;
                border-bottom: 1px solid ${border};
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            .table thead th {
                text-align: left;
                padding: 10px 12px;
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${card} 98%, transparent);
                border-bottom: 1px solid ${border};
                color: ${accent};
                z-index: 1;
            }
            .table tbody td {
                padding: 12px;
                border-top: 1px solid ${border};
                color: ${text};
            }
            .table tbody tr:hover {
                background: color-mix(in oklab, ${accent} 6%, transparent);
            }
            .status {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 4px 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            .status[data-status="Filed"] {
                border-color: ${accent};
                color: ${accent};
            }
            .status[data-status="Pending"] {
                color: ${muted};
            }
            .status[data-status="Overdue"] {
                color: ${text};
            }
            .acts {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }
            .smallLink {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                text-decoration: none;
                color: ${muted};
                border-bottom: 1px dotted ${border};
            }
            .smallLink:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
        }

        .hintRow {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            a {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                color: ${muted};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }
        }

        .footerNav {
            position: sticky;
            bottom: 0;
            padding: 10px 0;
            background: color-mix(in oklab, ${card} 96%, transparent);
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            border-top: 1px solid ${border};
            margin-top: 14px;
            button {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 6px 10px;
                border-radius: 10px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    `,

    Modal: styled.div`
        .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .sheet {
            position: fixed;
            left: 50%;
            top: 8%;
            transform: translateX(-50%);
            width: min(720px, 94vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 16px;
            box-shadow: ${shadow};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
            max-height: 84vh;
        }
        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        .title {
            font-weight: 700;
        }
        .iconClose {
            background: transparent;
            border: 1px solid ${border};
            color: ${muted};
            border-radius: 10px;
            padding: 6px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .iconClose:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .body {
            padding: 14px;
            color: ${text};
        }
        .body .bulleted {
            padding-left: 18px;
            color: ${muted};
            line-height: 1.9;
        }

        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .foot button {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .foot button:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
