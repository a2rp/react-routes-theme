import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        display: grid;
        gap: 16px;
        padding: 16px;

        .header {
            display: grid;
            gap: 12px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow);

            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${muted};
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
                span {
                    opacity: 0.8;
                }
            }

            .meta {
                display: grid;
                gap: 6px;
                .title {
                    font-family: "Antonio", sans-serif;
                    font-size: 24px;
                    line-height: 1.2;
                }
                .sub {
                    color: ${muted};
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                }
                .sep {
                    opacity: 0.5;
                }
                .pill {
                    background: color-mix(in oklab, ${accent} 14%, transparent);
                    border: 1px solid ${accent};
                    color: ${text};
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                }
            }

            .actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button,
                a.ghost {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                        background 0.2s, transform 0.05s;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                button:hover,
                a.ghost:hover {
                    color: ${accent};
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                button:active {
                    transform: translateY(1px);
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .ghost {
                    background: transparent;
                }
            }
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                border: 1px solid ${border};
                background: ${card};
                color: ${muted};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            }
            .chip:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .chip.active {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            gap: 12px;
            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 14px;
                box-shadow: var(--shadow);
                display: grid;
                gap: 4px;
                .label {
                    color: ${muted};
                    font-weight: 600;
                }
                .value {
                    font-family: "Antonio", sans-serif;
                    font-size: 22px;
                }
                .hint {
                    color: ${muted};
                    font-size: 12px;
                }
            }
            .warning .label {
                color: ${muted};
            }
            .warning .value {
                color: ${text};
            }
        }

        .toolbar {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            gap: 12px;
            .group {
                display: grid;
                gap: 6px;
            }
            label {
                color: ${muted};
                font-size: 12px;
            }
            input {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                border-radius: 8px;
                padding: 8px 10px;
                transition: border-color 0.2s, box-shadow 0.2s;
            }
            input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
        }

        .sheet {
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            border-radius: 12px;
            padding: 8px 8px 16px 8px;
            box-shadow: var(--shadow);

            .sheet-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px;
                border-bottom: 1px solid ${border};
                .sheet-title {
                    font-family: "Antonio", sans-serif;
                    font-size: 20px;
                }
                .sheet-sub {
                    color: ${muted};
                    font-size: 12px;
                }
                .sheet-brand {
                    text-align: right;
                }
                .name {
                    font-weight: 700;
                }
                .muted {
                    color: ${muted};
                    font-size: 12px;
                }
            }

            .table {
                display: grid;
                gap: 8px;
                padding: 8px 8px 0 8px;

                .thead,
                .row,
                .group-head {
                    display: grid;
                    grid-template-columns: 140px 1fr 180px 180px;
                    align-items: center;
                }

                .thead {
                    position: sticky;
                    top: 0;
                    z-index: 2;
                    background: ${card};
                    border: 1px solid ${border};
                    padding: 8px 10px;
                    border-radius: 8px;
                    font-weight: 600;
                    color: ${muted};
                    .num {
                        text-align: right;
                    }
                }

                .group {
                    background: transparent;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid ${border};
                    .group-head {
                        width: 100%;
                        background: color-mix(
                            in oklab,
                            ${card} 94%,
                            transparent
                        );
                        color: ${text};
                        border: 0;
                        text-align: left;
                        cursor: pointer;
                        padding: 8px 10px;
                        display: grid;
                        align-items: center;
                        border-bottom: 1px solid ${border};
                        transition: background 0.2s, color 0.2s;
                    }
                    .group-head:hover {
                        color: ${accent};
                    }
                    .group-head .chev {
                        margin-right: 6px;
                    }
                    .group-head .gname {
                        font-weight: 700;
                    }
                    .group-head .gnote {
                        color: ${muted};
                        margin-left: 10px;
                    }
                    .group-head .spacer {
                        flex: 1;
                    }
                    .group-head .subt {
                        display: grid;
                        grid-template-columns: 180px 180px;
                        gap: 0;
                        justify-items: end;
                        color: ${muted};
                    }

                    .tbody {
                        display: grid;
                    }
                    .row {
                        padding: 8px 10px;
                        border-bottom: 1px dashed ${border};
                        transition: background 0.15s;
                    }
                    .row:last-child {
                        border-bottom: 0;
                    }
                    .row:hover {
                        background: color-mix(
                            in oklab,
                            ${accent} 10%,
                            transparent
                        );
                    }

                    .code {
                        color: ${muted};
                    }
                    .name a {
                        color: ${text};
                        text-decoration: none;
                        border-bottom: 1px dashed transparent;
                        transition: color 0.2s, border-color 0.2s;
                    }
                    .name a:hover {
                        color: ${accent};
                        border-bottom-color: ${accent};
                    }
                    .num {
                        text-align: right;
                        font-variant-numeric: tabular-nums;
                    }
                }
            }

            .foot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 12px;
                border-top: 1px solid ${border};
                margin-top: 8px;
                color: ${muted};
                .legend {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .legend .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: ${muted};
                    display: inline-block;
                }
            }
        }

        /* Mini modal */
        .modal {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
        }
        .modal-card {
            width: min(560px, 96vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }
        .modal-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            font-weight: 700;
        }
        .modal-head button {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 4px 8px;
            cursor: pointer;
        }
        .modal-head button:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .modal-body {
            padding: 14px;
            color: ${text};
        }
        .modal-actions {
            padding: 12px 14px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }
        .modal-actions button,
        .modal-actions a.ghost {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 8px 12px;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .modal-actions button:hover,
        .modal-actions a.ghost:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};

export const Page = Styled.Page;
export default Styled;
