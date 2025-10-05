import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 14px;
            box-shadow: var(--shadow);

            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                a,
                strong,
                span {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
                strong {
                    color: ${text};
                    font-weight: 600;
                }
            }

            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;

                .btn-link {
                    display: inline-flex;
                    align-items: center;
                    height: 32px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    background: transparent;
                    color: ${text};
                }
                .btn-link:hover {
                    color: ${accent};
                    border-color: ${accent};
                }

                button {
                    height: 32px;
                    padding: 0 12px;
                    border-radius: 8px;
                    background: ${card};
                    border: 1px solid ${border};
                    color: ${text};
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
                color: ${muted};
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 16px;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;

            h2 {
                font-size: 18px;
            }
            .meta {
                display: flex;
                gap: 14px;
                color: ${muted};
                font-size: 12px;
            }

            .section-actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .btn-link {
                    display: inline-flex;
                    align-items: center;
                    height: 30px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    color: ${text};
                }
                .btn-link:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                button {
                    height: 30px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        /* KPI grid */
        .grid-kpi .kpis {
            display: grid;
            grid-template-columns: repeat(5, minmax(160px, 1fr));
            gap: 12px;
        }
        @media (max-width: 1100px) {
            .grid-kpi .kpis {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .grid-kpi .kpis {
                grid-template-columns: 1fr;
            }
        }
        .kpi {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .kpi-title {
            color: ${muted};
            font-size: 12px;
        }
        .kpi-value {
            font-size: 24px;
            font-weight: 700;
            margin: 4px 0 6px;
        }
        .kpi-value.warn {
            color: #f59e0b;
        } /* amber */
        .kpi-foot a {
            color: ${muted};
        }
        .kpi-foot a:hover {
            color: ${accent};
        }

        /* Tables */
        .table-wrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 10px;
            color: ${accent};
        }
        tbody td {
            border-top: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        td.num {
            text-align: right;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .text-error {
            color: #ef4444;
        } /* red */

        .row-actions {
            display: flex;
            gap: 6px;
            align-items: center;
            flex-wrap: wrap;
            .btn-link {
                border: 1px solid ${border};
                padding: 4px 8px;
                border-radius: 8px;
                color: ${text};
            }
            .btn-link:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button {
                padding: 4px 8px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }

        /* Chips */
        .chip {
            display: inline-flex;
            align-items: center;
            height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            font-size: 12px;
        }
        .chip.ok {
            border-color: ${accent};
            color: ${accent};
        }
        .chip.warn {
            border-color: #f59e0b;
            color: #f59e0b;
        }
        .chip.muted {
            color: ${muted};
        }

        /* Work Centers */
        .wc-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(220px, 1fr));
            gap: 12px;
        }
        @media (max-width: 1400px) {
            .wc-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 900px) {
            .wc-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .wc-grid {
                grid-template-columns: 1fr;
            }
        }
        .wc-card {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
        }
        .wc-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .wc-head h3 {
            font-size: 14px;
        }
        .wc-body .kv {
            display: grid;
            grid-template-columns: 100px 1fr;
            margin: 6px 0;
        }
        .wc-body .k {
            color: ${muted};
        }
        .wc-foot {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        .wc-foot a {
            color: ${muted};
            border-bottom: 1px dashed ${border};
        }
        .wc-foot a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        /* Timeline */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 14px 200px 1fr;
            gap: 10px;
            align-items: start;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            margin-top: 6px;
        }
        .timeline .when {
            color: ${muted};
            font-size: 12px;
        }
        .timeline .what {
            color: ${text};
        }

        .footlinks {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    `,

    ModalCard: styled.div`
        width: min(640px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: var(--shadow);
        padding: 0;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        header h3 {
            font-size: 16px;
        }

        .body {
            padding: 14px 16px;
            color: ${text};
        }
        footer {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding: 12px 16px;
            border-top: 1px solid ${border};
            button {
                padding: 6px 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,
};
