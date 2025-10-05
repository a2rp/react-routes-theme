import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90, 169, 255, 0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 18px;

        .muted {
            color: ${muted};
        }

        a {
            color: ${text};
            text-decoration: none;
        }
    `,

    Header: styled.header`
        margin-bottom: 18px;

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
        }

        .titleWrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: 8px;

            h1 {
                font-size: 24px;
                line-height: 1.2;
            }

            .meta {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;

                .pill {
                    border: 1px solid ${border};
                    padding: 4px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    background: color-mix(in oklab, ${card} 94%, transparent);
                }
            }
        }
    `,

    Actions: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;
        flex-wrap: wrap;

        .ghost {
            background: transparent;
        }

        .copied {
            margin-left: 6px;
            color: ${accent};
            font-weight: 600;
            font-size: 12px;
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.section`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px;
        min-height: 120px;

        &.span2 {
            grid-column: 1 / -1;
        }

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }

        .offices {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 10px;

            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }

            .office {
                border: 1px dashed ${border};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);

                .officeHead {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 6px;
                    h3 {
                        font-size: 16px;
                    }
                    a {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        color: ${accent};
                    }
                }

                address {
                    font-style: normal;
                    color: ${muted};
                }

                .row {
                    display: flex;
                    gap: 14px;
                    margin-top: 8px;
                    .link {
                        display: inline-flex;
                        gap: 6px;
                        align-items: center;
                    }
                    .link:hover {
                        color: ${accent};
                    }
                }

                .hours {
                    margin-top: 6px;
                    font-size: 12px;
                    color: ${muted};
                }
            }
        }

        .channels {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-top: 16px;

            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }

            .channel {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${card} 96%, transparent);

                h4 {
                    margin-bottom: 4px;
                    font-size: 14px;
                }
                a {
                    color: ${accent};
                }
                span {
                    color: ${muted};
                    display: block;
                    margin-top: 4px;
                    font-size: 12px;
                }
            }
        }

        .routes {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            section {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);

                h4 {
                    margin-bottom: 8px;
                    font-size: 14px;
                    color: ${text};
                }
                a {
                    display: inline-block;
                    margin: 4px 8px 4px 0;
                    padding: 4px 8px;
                    border-radius: 6px;
                    border: 1px solid ${border};
                    font-size: 12px;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                a:hover {
                    color: ${accent};
                    border-color: ${accent};
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
            }
        }

        .people {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 8px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .person {
                display: grid;
                grid-template-columns: 48px 1fr;
                gap: 12px;
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${card} 96%, transparent);

                .avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: grid;
                    place-items: center;
                    font-weight: 700;
                    background: color-mix(in oklab, ${accent} 18%, transparent);
                    border: 1px solid ${border};
                }

                .info {
                    .row1 {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        flex-wrap: wrap;
                        .role {
                            color: ${muted};
                        }
                        .id {
                            color: ${muted};
                            font-size: 12px;
                        }
                    }
                    .row2 {
                        margin-top: 6px;
                        display: flex;
                        gap: 8px;
                        flex-wrap: wrap;
                        .chip {
                            display: inline-flex;
                            align-items: center;
                            gap: 6px;
                            border: 1px solid ${border};
                            padding: 4px 8px;
                            border-radius: 8px;
                            background: color-mix(
                                in oklab,
                                ${card} 94%,
                                transparent
                            );
                            font-size: 12px;
                        }
                        .chip:hover {
                            border-color: ${accent};
                            color: ${accent};
                        }
                        .disabled {
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .messageForm {
            margin-top: 8px;

            .grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;

                @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                }

                .full {
                    grid-column: 1 / -1;
                }

                label {
                    display: block;
                    margin-bottom: 4px;
                    font-weight: 600;
                }
            }

            .formActions {
                margin-top: 10px;
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;

                .ghost {
                    background: transparent;
                }
            }
        }

        .metaGrid {
            margin-top: 6px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .label {
                color: ${muted};
                font-size: 12px;
            }
            .value {
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 8px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                word-break: break-all;
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,

    Modal: styled.div`
        width: min(520px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        box-shadow: ${shadow};
        padding: 16px;

        h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
        }

        .actions {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            justify-content: flex-end;
            .ghost {
                background: transparent;
            }
            button:focus-visible,
            .ghost:focus-visible {
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,
};
