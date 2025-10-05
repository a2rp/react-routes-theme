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
        display: flex;
        flex-direction: column;
        gap: 16px;

        .pageHead {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .crumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${muted};
            a {
                color: inherit;
            }
            svg {
                opacity: 0.8;
            }
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            h1 {
                font-size: 24px;
                line-height: 1.2;
                margin-bottom: 4px;
                letter-spacing: 0.3px;
            }
            .sub {
                color: ${muted};
                font-size: 12px;
            }

            .headActions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;

                button,
                a {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 10px;
                    box-shadow: none;
                    transition: border-color 0.2s, color 0.2s, background 0.2s,
                        transform 0.05s;
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                a.ghost,
                button.ghost {
                    background: transparent;
                }
                button.primary {
                    border-color: ${accent};
                }
                button:not(:disabled):active,
                a:active {
                    transform: translateY(1px);
                }
                button:not(:disabled):hover,
                a:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 12px;

            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
            }

            .search {
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                background: ${card};
                border-radius: 10px;
                padding: 8px 12px;
                box-shadow: ${shadow};
                input {
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background: transparent;
                    color: ${text};
                }
                svg {
                    opacity: 0.8;
                }
            }

            .filters {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;

                @media (max-width: 700px) {
                    flex-direction: column;
                    align-items: stretch;
                }

                .pills {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .pill {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    border-radius: 999px;
                    padding: 6px 10px;
                    font-size: 12px;
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                }
                .pill.active,
                .pill:hover {
                    border-color: ${accent};
                    color: ${accent};
                }

                .selects {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .select {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid ${border};
                    background: ${card};
                    border-radius: 10px;
                    padding: 6px 10px;
                    select {
                        background: transparent;
                        border: 0;
                        color: ${text};
                        outline: none;
                    }
                    svg {
                        opacity: 0.8;
                    }
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1.05fr 1.6fr;
            gap: 14px;

            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
        }

        .listPane {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;
            display: flex;
            flex-direction: column;

            .listHead {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 14px;
                border-bottom: 1px solid ${border};
                background: color-mix(in oklab, ${card} 92%, transparent);
                .count {
                    padding: 2px 8px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    color: ${muted};
                    font-size: 12px;
                }
            }

            .tableWrap {
                overflow: auto;
            }
            table.table {
                width: 100%;
                border-collapse: collapse;
                th,
                td {
                    padding: 10px 12px;
                    border-bottom: 1px solid ${border};
                }
                thead th {
                    position: sticky;
                    top: 0;
                    background: ${card};
                    z-index: 1;
                }
                tbody tr {
                    cursor: pointer;
                }
                tbody tr:hover {
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                }
                tbody tr.active {
                    background: color-mix(in oklab, ${accent} 15%, transparent);
                    outline: 1px solid
                        color-mix(in oklab, ${accent} 45%, transparent);
                }

                .nameCell {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .nameCell .name {
                    font-weight: 600;
                }
                .tags {
                    display: flex;
                    gap: 4px;
                    flex-wrap: wrap;
                }
                .tag {
                    font-size: 11px;
                    padding: 2px 6px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    color: ${muted};
                }

                .code {
                    font-size: 12px;
                }

                .status {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                    border: 1px solid ${border};
                }
                .status.ok {
                    color: ${accent};
                }
                .status.paused {
                    color: ${muted};
                }

                .rowActions {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    justify-content: flex-end;
                }
                .rowActions .tiny,
                .cardHead .links .tiny,
                .inlineLink {
                    font-size: 12px;
                    border: 1px solid ${border};
                    padding: 4px 8px;
                    border-radius: 8px;
                    background: transparent;
                    color: ${text};
                    text-decoration: none;
                }
                .rowActions .tiny:hover,
                .cardHead .links .tiny:hover,
                .inlineLink:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                .rowActions button.tiny {
                    background: transparent;
                    cursor: pointer;
                }
            }

            .empty {
                display: flex;
                gap: 10px;
                align-items: center;
                color: ${muted};
                padding: 18px 4px;
                .muted {
                    color: ${muted};
                    font-size: 12px;
                }
            }
        }

        .previewPane {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .previewHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                .meta {
                    margin-top: 6px;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    color: ${muted};
                    font-size: 12px;
                    code {
                        font-size: 12px;
                    }
                }
                .previewActions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    button,
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 8px 12px;
                        border: 1px solid ${border};
                        background: ${card};
                        color: ${text};
                        border-radius: 10px;
                    }
                    .ghost {
                        background: transparent;
                    }
                    .danger {
                        border-color: #b04b4b;
                    } /* subtle */
                    button:hover,
                    a:hover {
                        border-color: ${accent};
                        color: ${accent};
                    }
                    button.primary {
                        border-color: ${accent};
                    }
                }
            }

            .cards {
                display: grid;
                grid-template-columns: 1fr;
                gap: 12px;
            }

            .card {
                border: 1px solid ${border};
                background: ${card};
                border-radius: 12px;
                box-shadow: ${shadow};
                padding: 14px;

                .cardHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    h3 {
                        font-size: 16px;
                    }
                    .links {
                        display: flex;
                        gap: 8px;
                    }
                }

                .subject {
                    font-family: "Antonio", sans-serif;
                    letter-spacing: 0.3px;
                }

                .vars {
                    margin-top: 12px;
                    .hint {
                        color: ${muted};
                        font-size: 12px;
                        margin-right: 8px;
                    }
                    .chips {
                        display: inline-flex;
                        gap: 6px;
                        flex-wrap: wrap;
                    }
                    .chip {
                        border: 1px solid ${border};
                        border-radius: 999px;
                        padding: 2px 8px;
                        font-size: 12px;
                        background: color-mix(
                            in oklab,
                            ${accent} 10%,
                            transparent
                        );
                    }
                    .muted {
                        color: ${muted};
                        font-size: 12px;
                    }
                }

                .htmlPreview {
                    .emailShell {
                        border: 1px solid ${border};
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .emailHeader {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 12px;
                        border-bottom: 1px solid ${border};
                        background: color-mix(
                            in oklab,
                            ${accent} 12%,
                            transparent
                        );
                        .logo {
                            font-weight: 700;
                            letter-spacing: 0.5px;
                        }
                        .subjectLine {
                            color: ${muted};
                            font-size: 12px;
                        }
                    }
                    .emailBody {
                        padding: 12px;
                        line-height: 1.7;
                        .footerLine {
                            margin-top: 16px;
                            color: ${muted};
                            font-size: 12px;
                        }
                    }
                    .inlineLink {
                        text-decoration: none;
                    }
                }

                .quickLinks {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 8px;
                    @media (max-width: 900px) {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        border: 1px solid ${border};
                        border-radius: 10px;
                        padding: 10px 12px;
                        background: ${card};
                    }
                    a:hover {
                        border-color: ${accent};
                        color: ${accent};
                    }
                }
            }

            .placeholder {
                border: 1px solid ${border};
                background: ${card};
                border-radius: 12px;
                box-shadow: ${shadow};
                padding: 18px;
                display: flex;
                align-items: center;
                gap: 12px;
                color: ${muted};
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 60;
    `,

    Modal: styled.div`
        width: min(520px, 92vw);
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 14px;

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        .desc {
            color: ${muted};
            margin-bottom: 14px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 10px;
                padding: 8px 12px;
            }
            .primary {
                border-color: ${accent};
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,
};

export { Styled as default };
