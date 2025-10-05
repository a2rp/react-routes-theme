import styled from "styled-components";

/* tokens */
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        display: grid;
        gap: 16px;
        padding: 16px;

        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .num {
            text-align: right;
        }
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Header: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px;

        .left {
            display: grid;
            gap: 8px;
            .breadcrumbs {
                display: flex;
                gap: 8px;
                color: ${muted};
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
            }
            h1 {
                font-size: 22px;
                letter-spacing: 0.3px;
            }
            .meta {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                color: ${muted};
                span {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                }
                svg {
                    opacity: 0.8;
                }
            }
        }

        .right {
            display: grid;
            gap: 12px;
            justify-items: end;

            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: end;
            }
            .quickLinks {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: end;
                a {
                    border: 1px dashed ${border};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    color: ${muted};
                }
                a:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
            .right {
                justify-items: start;
            }
            .right .quickLinks {
                justify-content: start;
            }
        }
    `,

    Filters: styled.div`
        padding: 12px 16px;
        .row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr auto auto;
            gap: 14px;
            align-items: center;
        }
        .group {
            display: grid;
            gap: 8px;
            .label {
                color: ${muted};
                display: inline-flex;
                gap: 8px;
                align-items: center;
            }
            .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                button[aria-pressed="true"] {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }
        .spacer {
            flex: 1;
        }
        .actions {
            display: flex;
            gap: 8px;
        }

        @media (max-width: 1200px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
            .actions {
                grid-column: 1 / -1;
            }
        }
    `,

    Kpis: styled.div`
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 12px;

        .kpi {
            padding: 14px;
            display: grid;
            gap: 8px;
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v {
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
            .s {
                color: ${muted};
                font-size: 12px;
            }
        }

        @media (max-width: 1400px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 780px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    TableCard: styled.div`
        padding: 0;

        .head {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 14px 16px;
            border-bottom: 1px solid ${border};

            h2 {
                font-size: 16px;
            }
            .headActions {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
                a {
                    border: 1px dashed ${border};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    color: ${muted};
                }
                a:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }

        .tableWrap {
            overflow: auto;
            padding: 6px 0 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 880px;

            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                border-bottom: 1px solid ${border};
                padding: 10px 12px;
                text-align: left;
                color: ${muted};
                font-weight: 600;
            }
            tbody td {
                padding: 10px 12px;
                border-bottom: 1px solid ${border};
            }
            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,

    FooterNav: styled.div`
        padding: 12px 16px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
        .links a {
            color: ${muted};
        }
        .links a:hover {
            color: ${accent};
        }
        .stamp {
            color: ${muted};
            font-size: 12px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
            row-gap: 10px;
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
        display: grid;
        place-items: center;
        z-index: 40;
    `,
    ModalCard: styled.div`
        width: min(520px, 96vw);
        padding: 12px;
        .modalHead {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 8px 8px 0;
            .title {
                font-weight: 700;
            }
            .iconBtn {
                border-radius: 8px;
                padding: 6px;
            }
        }
        .modalBody {
            padding: 12px 8px;
            color: ${muted};
        }
        .modalFoot {
            padding: 8px;
            display: flex;
            justify-content: end;
            gap: 8px;
        }
    `,
};
