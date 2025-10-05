import styled from "styled-components";

/* tokens (with safe fallbacks) */
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    Header: styled.header`
        padding: 14px 4px 10px;

        .topline {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            .crumb {
                color: ${muted};
            }
            .crumb:hover {
                color: ${accent};
            }
            .sep {
                opacity: 0.5;
            }
            .here {
                color: ${text};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: border-color 0.2s ease, box-shadow 0.2s ease,
                    color 0.2s ease, background 0.2s ease;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
        }

        .titleRow {
            margin-top: 10px;
            padding: 8px 0;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;
            h1 {
                font-size: 26px;
                letter-spacing: 0.5px;
            }
            .meta {
                color: ${muted};
                display: flex;
                align-items: center;
                gap: 6px;
                margin-top: 4px;
            }
            .period {
                display: grid;
                gap: 8px;
                align-items: center;
                justify-items: end;
                .range {
                    color: ${muted};
                    display: flex;
                    gap: 8px;
                }
                .quick {
                    display: flex;
                    gap: 8px;
                }
                .quick button {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${muted};
                    padding: 6px 10px;
                    border-radius: 6px;
                }
                .quick button:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }
    `,

    Kpis: styled.div`
        padding: 8px 0 12px;
        display: grid;
        grid-template-columns: repeat(4, minmax(180px, 1fr));
        gap: 12px;

        .kpi {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            display: grid;
            gap: 6px;
            .label {
                color: ${muted};
                font-weight: 600;
            }
            .value {
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(180px, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,

    Content: styled.div`
        display: grid;
        grid-template-columns: 1fr 340px;
        gap: 14px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .left {
            min-width: 0;
        }
        .right {
            position: relative;
            min-width: 280px;
        }
    `,

    Statement: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 14px;

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            h2 {
                font-size: 18px;
            }
            .head-actions {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                .ghost {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                    padding: 6px 10px;
                    border-radius: 8px;
                    border: 1px dashed ${border};
                    color: ${muted};
                }
                .ghost:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }

        .section {
            margin-top: 12px;
            h3 {
                margin-bottom: 8px;
            }
            details {
                border: 1px solid ${border};
                border-radius: 10px;
                margin-bottom: 10px;
                overflow: hidden;
                summary {
                    cursor: pointer;
                    padding: 10px 12px;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.08);
                }
                .total {
                    color: ${text};
                    font-weight: 700;
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
                    text-align: left;
                    border-bottom: 1px solid ${border};
                    color: ${accent};
                    padding: 10px 12px;
                    background: ${card};
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }
                tbody td {
                    border-bottom: 1px solid ${border};
                    padding: 10px 12px;
                }
                tbody tr:hover td {
                    background: rgba(0, 0, 0, 0.06);
                }
                .num {
                    text-align: right;
                }
            }
        }

        .footerTotals {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(220px, 1fr));
            gap: 10px;
            .tot {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px 12px;
                display: flex;
                justify-content: space-between;
                span {
                    color: ${muted};
                }
                strong {
                    font-weight: 700;
                }
            }
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }
    `,

    SideCard: styled.aside`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 14px;
        margin-bottom: 14px;

        h3 {
            margin-bottom: 8px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }

        .note {
            color: ${muted};
            border-left: 3px solid ${border};
            padding: 8px 10px;
            border-radius: 8px;
            background: rgba(0, 0, 0, 0.05);
            margin-bottom: 8px;
        }

        .meta {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 6px;
            .label {
                color: ${muted};
            }
            .value {
                color: ${text};
                font-weight: 600;
            }
        }

        .controls {
            display: grid;
            gap: 8px;
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 10px;
                border-radius: 8px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    ModalCard: styled.div`
        width: min(520px, 92vw);
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        padding: 14px;

        header {
            margin-bottom: 10px;
        }
        h3 {
            margin: 0;
        }
        section {
            color: ${muted};
        }
        footer {
            margin-top: 14px;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .danger {
                border-color: ${border};
            }
        }
    `,
};
