import styled from "styled-components";

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
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .headerRow {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            a {
                color: ${muted};
                text-decoration: none;
            }
            .current {
                color: ${text};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 10px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                cursor: pointer;
                transition: border-color 0.2s ease, box-shadow 0.2s ease,
                    transform 0.05s ease;
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                &:active {
                    transform: translateY(1px);
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
            .primary {
                border-color: ${accent};
            }
            .ghost {
                background: transparent;
            }
        }

        .tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            a {
                padding: 8px 12px;
                border-radius: 999px;
                border: 1px solid ${border};
                color: ${muted};
                text-decoration: none;
                background: ${card};
                transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            a.active,
            a[aria-current="page"] {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .gridCards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 12px;

            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 12px;
                box-shadow: ${shadow};
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 12px;

                .cardHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                    h3 {
                        font-size: 16px;
                    }
                    .badge {
                        padding: 3px 8px;
                        border-radius: 999px;
                        background: color-mix(
                            in oklab,
                            ${accent} 18%,
                            transparent
                        );
                        border: 1px solid ${accent};
                        color: ${text};
                        font-size: 12px;
                    }
                }

                .iconBtn {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    border-radius: 8px;
                    padding: 6px;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    &:hover {
                        border-color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                }

                .kv {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 8px 12px;
                    div {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        span {
                            color: ${muted};
                            font-size: 12px;
                        }
                        strong {
                            font-size: 14px;
                        }
                    }
                }

                .mutedRow {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: ${muted};
                }

                .rates {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 8px;
                    .rateItem {
                        border: 1px solid ${border};
                        border-radius: 10px;
                        padding: 10px;
                        background: color-mix(
                            in oklab,
                            ${card} 96%,
                            transparent
                        );
                        .code {
                            font-weight: 700;
                        }
                        .pair {
                            color: ${muted};
                            font-size: 12px;
                            margin-top: 4px;
                        }
                    }
                }

                .guideList {
                    display: grid;
                    gap: 6px;
                    li {
                        list-style: none;
                    }
                    a {
                        color: ${text};
                        text-decoration: none;
                        border-bottom: 1px dashed ${border};
                        padding-bottom: 2px;
                    }
                    a:hover {
                        color: ${accent};
                        border-color: ${accent};
                    }
                }

                .links {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    .link {
                        color: ${accent};
                        text-decoration: none;
                    }
                }
            }
        }

        .tableSection {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;

            .tableHeadBar {
                display: flex;
                gap: 12px;
                align-items: center;
                justify-content: space-between;
                padding: 12px;
                border-bottom: 1px solid ${border};

                .search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${border};
                    background: color-mix(in oklab, ${card} 96%, transparent);
                    border-radius: 8px;
                    padding: 6px 10px;
                    input {
                        background: transparent;
                        border: none;
                        color: ${text};
                        outline: none;
                        width: 360px;
                        max-width: 55vw;
                    }
                }

                .rightLinks {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    .link {
                        color: ${accent};
                        text-decoration: none;
                    }
                }
            }

            .tableWrap {
                width: 100%;
                overflow: auto;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;

                    thead th {
                        position: sticky;
                        top: 0;
                        z-index: 1;
                        text-align: left;
                        background: ${card};
                        border-bottom: 1px solid ${border};
                        padding: 10px;
                        color: ${accent};
                        font-weight: 600;
                    }
                    tbody td {
                        border-bottom: 1px solid ${border};
                        padding: 10px;
                        vertical-align: middle;
                    }
                    tbody tr:hover {
                        background: rgba(0, 0, 0, 0.06);
                    }

                    .mono {
                        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                            Consolas, "Liberation Mono", "Courier New",
                            monospace;
                    }

                    .chip {
                        display: inline-flex;
                        align-items: center;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 12px;
                        border: 1px solid ${border};
                        &.active {
                            border-color: ${accent};
                            background: color-mix(
                                in oklab,
                                ${accent} 14%,
                                transparent
                            );
                        }
                        &.inactive {
                            opacity: 0.65;
                        }
                    }

                    .rowActions {
                        display: flex;
                        gap: 10px;
                        flex-wrap: wrap;
                    }

                    .linkBtn {
                        background: transparent;
                        border: none;
                        color: ${accent};
                        cursor: pointer;
                        padding: 0;
                        text-decoration: none;
                    }
                    .linkBtn.danger {
                        color: #ff6b6b;
                    }

                    .actionsCol {
                        width: 260px;
                    }
                }
            }

            .footNote {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                color: ${muted};
            }
        }

        .quickNav {
            display: flex;
            align-items: center;
            gap: 12px;
            a {
                color: ${accent};
                text-decoration: none;
            }
            .spacer {
                flex: 1;
            }
        }

        /* Modal / toast */
        .modal {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: end center;
            pointer-events: none;
            padding: 16px;
            z-index: 50;
        }
        .modalCard {
            pointer-events: auto;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 10px 12px;
            min-width: 260px;
            animation: slideUp 0.18s ease;
        }
        .modalContent {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 2px 8px;
        }
        .closeBtn {
            width: 100%;
            margin-top: 6px;
            border-radius: 10px !important;
        }

        @keyframes slideUp {
            from {
                transform: translateY(8px);
                opacity: 0.6;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `,
};
