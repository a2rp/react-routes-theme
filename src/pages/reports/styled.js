import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Wrap: styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-areas:
                "bc actions"
                "title actions";
            gap: 10px 16px;
            align-items: center;

            .breadcrumbs {
                grid-area: bc;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                .crumb {
                    color: ${muted};
                }
                .crumb.current {
                    color: ${text};
                    font-weight: 600;
                }
                .sep {
                    display: inline-flex;
                    align-items: center;
                    opacity: 0.8;
                }
                a:hover {
                    color: ${accent};
                }
            }

            .headline {
                grid-area: title;
                h1 {
                    font-size: 24px;
                    line-height: 1.2;
                    letter-spacing: 0.3px;
                    margin: 0;
                }
                .sub {
                    color: ${muted};
                    margin-top: 4px;
                }
                strong {
                    color: ${text};
                }
            }

            .actions {
                grid-area: actions;
                display: inline-flex;
                gap: 10px;
                justify-self: end;

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 10px;
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                    cursor: pointer;
                    &:hover {
                        color: ${accent};
                        border-color: ${accent};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &.ghost {
                        background: transparent;
                    }
                    svg {
                        font-size: 16px;
                    }
                }
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 12px;

            .kpi {
                padding: 14px;
            }
            .kpi-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6px;
                .kpi-label {
                    color: ${muted};
                    font-weight: 600;
                    letter-spacing: 0.2px;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 999px;
                    background: ${accent};
                    opacity: 0.8;
                }
            }
            .kpi-value {
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 0.4px;
            }
            .kpi-hint {
                margin-top: 4px;
                color: ${muted};
            }
        }

        .summary {
            padding: 14px;

            .summary-head {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 10px;
                h2 {
                    font-size: 18px;
                }
                .meta {
                    display: flex;
                    gap: 16px;
                    color: ${muted};
                }
                strong {
                    color: ${text};
                }
            }

            .summary-grid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

                .summary-block {
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 12px;
                    background: color-mix(in oklab, ${card} 96%, transparent);

                    h3 {
                        font-size: 14px;
                        margin-bottom: 8px;
                        letter-spacing: 0.2px;
                    }
                    .links {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: grid;
                        gap: 6px;
                        a {
                            color: ${muted};
                        }
                        a:hover {
                            color: ${accent};
                        }
                    }
                }
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                display: inline-flex;
                align-items: center;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${border};
                color: ${muted};
                background: color-mix(in oklab, ${card} 96%, transparent);
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, box-shadow 0.2s ease;
                &:hover {
                    color: ${accent};
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }

        .panels {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 800px) {
                grid-template-columns: 1fr;
            }

            .panel {
                padding: 12px;
            }
            .panel-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                h3 {
                    font-size: 14px;
                }
                .see-all {
                    color: ${muted};
                }
                .see-all:hover {
                    color: ${accent};
                }
            }

            .table-wrap {
                overflow: auto;
                border: 1px solid ${border};
                border-radius: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                background: ${card};
                color: ${accent};
                text-align: left;
                padding: 10px;
                border-bottom: 1px solid ${border};
                position: sticky;
                top: 0;
                z-index: 1;
            }
            tbody td {
                padding: 10px;
                border-bottom: 1px solid ${border};
                color: ${text};
            }
            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
            td.num {
                text-align: right;
            }
        }

        .navwall {
            padding: 14px;

            h2 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            .grid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }

            .tile {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 10px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            .tile-head {
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 8px 10px;
                border-radius: 8px;
                border: 1px solid ${border};
                color: ${text};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, box-shadow 0.2s ease;
            }
            .tile-head:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }

            .tile-links {
                list-style: none;
                padding: 10px 6px 4px;
                margin: 0;
                display: grid;
                gap: 6px;
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
            }
        }
    `,
};
