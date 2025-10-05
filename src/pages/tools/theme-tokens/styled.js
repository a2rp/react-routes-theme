// src/pages/tools/theme-tokens/styled.js
import styled from "styled-components";

const text = "var(--text)";
const muted = "var(--muted)";
const card = "var(--card)";
const border = "var(--border)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";
const shadow = "var(--shadow)";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 18px;

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .pageHead {
            margin-bottom: 14px;
            .crumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${muted};
                font-size: 12px;
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
            }
            .headMain {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 16px;
                align-items: end;
                margin-top: 8px;
                .titles {
                    h1 {
                        font-family: "Antonio", sans-serif;
                        font-size: 28px;
                        letter-spacing: 0.5px;
                    }
                    .sub {
                        color: ${muted};
                        margin-top: 6px;
                    }
                }
                .actions {
                    display: grid;
                    gap: 10px;
                    justify-items: end;
                    .mode {
                        display: inline-flex;
                        gap: 6px;
                        button {
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            border: 1px solid ${border};
                            background: ${card};
                            color: ${text};
                            padding: 8px 12px;
                            border-radius: 8px;
                            cursor: pointer;
                            transition: border-color 0.2s, box-shadow 0.2s,
                                color 0.2s, background 0.2s;
                            svg {
                                opacity: 0.9;
                            }
                            &:hover {
                                border-color: ${accent};
                                color: ${accent};
                                box-shadow: 0 0 0 3px ${accentSoft};
                            }
                            &.active {
                                color: ${accent};
                                border-color: ${accent};
                            }
                        }
                    }
                    .ctaRow {
                        display: inline-flex;
                        gap: 8px;
                        button,
                        .ghost,
                        .outline {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            padding: 8px 12px;
                            border-radius: 10px;
                            border: 1px solid ${border};
                            background: ${card};
                            color: ${text};
                            cursor: pointer;
                            transition: border-color 0.2s, color 0.2s,
                                background 0.2s, box-shadow 0.2s;
                            &:hover {
                                color: ${accent};
                                border-color: ${accent};
                                box-shadow: 0 0 0 3px ${accentSoft};
                            }
                            &.outline {
                                background: transparent;
                            }
                            &.ghost {
                                background: transparent;
                                border-color: transparent;
                            }
                        }
                    }
                }
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                margin-top: 10px;
                color: ${muted};
                font-size: 12px;
                .mono {
                    color: ${text};
                }
            }
        }

        .quickLinks {
            margin: 8px 0 18px;
            h2 {
                font-size: 18px;
                margin-bottom: 10px;
                font-family: "Antonio", sans-serif;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                gap: 10px;
            }
            .chip {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 12px;
                border: 1px solid ${border};
                background: ${card};
                border-radius: 10px;
                color: ${text};
                text-decoration: none;
                transition: border-color 0.2s, color 0.2s, background 0.2s,
                    box-shadow 0.2s;
                &:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }

        .printArea {
            padding: 16px;
            margin-bottom: 18px;
            .printHead {
                margin-bottom: 10px;
            }
            .tokenGrid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            }
            .tokenCard {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                .tokenTop {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    .label {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }
                    .name {
                        font-weight: 600;
                    }
                    .var {
                        color: ${muted};
                    }
                    .swatchWrap {
                        display: flex;
                        align-items: center;
                    }
                    .swatch {
                        width: 42px;
                        height: 28px;
                        border-radius: 6px;
                        border: 1px solid ${border};
                    }
                    .shadowDemo {
                        width: 72px;
                        height: 28px;
                        border-radius: 6px;
                        background: ${card};
                    }
                }
                .valueRow {
                    margin-top: 8px;
                    .value {
                        font-size: 12px;
                        color: ${muted};
                    }
                }
                .btns {
                    margin-top: 10px;
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    button,
                    .plain {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 6px 10px;
                        border-radius: 8px;
                        border: 1px solid ${border};
                        background: ${card};
                        color: ${text};
                        cursor: pointer;
                        text-decoration: none;
                        transition: border-color 0.2s, color 0.2s,
                            background 0.2s, box-shadow 0.2s;
                    }
                    button:hover,
                    .plain:hover {
                        border-color: ${accent};
                        color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                    .ghost {
                        background: transparent;
                    }
                    .outline {
                        background: transparent;
                    }
                }
            }
        }

        .preview {
            h2 {
                font-size: 18px;
                font-family: "Antonio", sans-serif;
                margin-bottom: 10px;
            }
            .previewGrid {
                display: grid;
                gap: 14px;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            }
            .panel {
                padding: 14px;
            }
            h3 {
                margin-bottom: 10px;
                font-size: 16px;
            }

            .btnRow {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                button {
                    border: 1px solid ${border};
                    border-radius: 10px;
                    background: ${card};
                    color: ${text};
                    padding: 8px 12px;
                    cursor: pointer;
                    transition: border-color 0.2s, color 0.2s, background 0.2s,
                        box-shadow 0.2s, transform 0.05s;
                    &:hover {
                        border-color: ${accent};
                        color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &.outline {
                        background: transparent;
                    }
                    &.ghost {
                        background: transparent;
                        border-color: transparent;
                    }
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }

            .form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                label {
                    font-size: 12px;
                    color: ${muted};
                }
                input,
                textarea,
                select {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    padding: 8px 10px;
                    border-radius: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                input::placeholder,
                textarea::placeholder {
                    color: ${muted};
                }
                input:focus,
                textarea:focus,
                select:focus {
                    border-color: ${accent};
                    outline: none;
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                .split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
            }

            .badgeRow {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 8px;
            }
            .badge {
                font-size: 12px;
                padding: 4px 8px;
                border-radius: 999px;
                background: ${card};
                border: 1px solid ${border};
            }
            .badge.alt {
                border-color: ${accent};
                color: ${accent};
            }
            .badge.soft {
                background: color-mix(in oklab, ${accent} 12%, transparent);
                color: ${text};
                border-color: transparent;
            }

            .metaList {
                display: grid;
                gap: 4px;
                .mono {
                    color: ${text};
                }
            }

            .tableWrap {
                overflow: auto;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;
                }
                th,
                td {
                    border-bottom: 1px solid ${border};
                    padding: 8px 10px;
                }
                th {
                    text-align: left;
                    color: ${accent};
                    background: ${card};
                    position: sticky;
                    top: 0;
                }
                tbody tr:hover {
                    background: rgba(0, 0, 0, 0.06);
                }
            }

            .links .linkCols {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 8px;
            }
            .links ul {
                list-style: none;
                padding-left: 0;
                margin: 0;
            }
            .links li {
                margin: 6px 0;
            }
            .links a {
                color: ${text};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            .links a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .toast {
            position: fixed;
            right: 16px;
            bottom: 16px;
            padding: 10px 12px;
            display: inline-flex;
            gap: 6px;
            align-items: center;
            z-index: 40;
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        display: grid;
        place-items: center;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            border: 0;
        }
        .box {
            position: relative;
            z-index: 1;
            max-width: 440px;
            width: calc(100% - 32px);
            padding: 16px;
        }
        h3 {
            margin-bottom: 8px;
        }
        p {
            color: ${muted};
        }
        .btnRow {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            justify-content: flex-end;
        }
        .btnRow button {
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .btnRow button:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnRow .ghost {
            background: transparent;
        }
    `,
};
