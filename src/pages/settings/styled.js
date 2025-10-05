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
        display: grid;
        gap: 16px;
        padding: 16px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;

        .titleBlock {
            h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.5px;
                font-size: 28px;
                margin: 0;
            }
            .sub {
                color: ${muted};
                margin-top: 6px;
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;

            .primary,
            .ghost,
            .cta {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 14px;
                border-radius: 10px;
                font-weight: 600;
                text-decoration: none;
                box-shadow: ${shadow};
                transition: transform 0.15s ease, border-color 0.2s ease,
                    box-shadow 0.2s ease, color 0.2s ease, background 0.2s ease;
            }

            .primary:hover,
            .ghost:hover,
            .cta:hover {
                border-color: ${accent};
                color: ${accent};
                transform: translateY(-1px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            }

            .primary {
                border-color: ${accent};
            }

            .ghost[data-demo-disabled="true"] {
                opacity: 0.7;
                cursor: pointer;
            }
        }
    `,

    Meta: styled.section`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 12px 12px 4px 12px;
        box-shadow: ${shadow};

        .item {
            padding: 8px 10px;
            border-radius: 8px;

            .k {
                color: ${muted};
                font-size: 12px;
                margin-bottom: 2px;
            }
            .v {
                font-weight: 600;
            }
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    Shortcuts: styled.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            text-decoration: none;
            padding: 6px 10px;
            border-radius: 999px;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
            box-shadow: ${shadow};
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
    `,

    StatsRow: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(220px, 1fr));

        .statCard {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .statCard:hover {
            transform: translateY(-1px);
            border-color: ${accent};
            box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
        }

        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 800;
            margin: 4px 0;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(3, minmax(280px, 1fr));

        section.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            box-shadow: ${shadow};
            padding: 14px;
            display: grid;
            grid-template-rows: auto auto 1fr;
            gap: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.15s ease;

            &:hover {
                border-color: ${accent};
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(-1px);
            }

            header h2 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.4px;
                margin: 0;
                font-size: 20px;
            }
            header .note {
                color: ${muted};
                margin-top: 4px;
                font-size: 12px;
            }

            .links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 6px;

                .link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: 1px solid ${border};
                    background: rgba(0, 0, 0, 0.06);
                    color: ${text};
                    text-decoration: none;
                    border-radius: 10px;
                    padding: 8px 10px;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, box-shadow 0.2s ease;
                }
                .link:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.24);
                    background: rgba(0, 0, 0, 0.1);
                }
                .arrow {
                    font-size: 18px;
                    opacity: 0.8;
                    transform: translateY(-1px);
                }
            }

            .stats {
                display: grid;
                grid-template-columns: repeat(3, minmax(80px, 1fr));
                gap: 8px;
                margin-top: 6px;

                .kv {
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 8px 10px;
                    background: rgba(0, 0, 0, 0.05);
                }
                .k {
                    color: ${muted};
                    font-size: 12px;
                }
                .v {
                    font-weight: 700;
                    font-size: 13px;
                }
            }
        }

        @media (max-width: 1280px) {
            grid-template-columns: repeat(2, minmax(280px, 1fr));
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,

    Explore: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 2fr;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${shadow};

        .left h3 {
            font-family: "Antonio", sans-serif;
            margin: 0;
            font-size: 20px;
        }
        .left p {
            color: ${muted};
            margin-top: 6px;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            a {
                border: 1px solid ${border};
                background: rgba(0, 0, 0, 0.06);
                color: ${text};
                text-decoration: none;
                padding: 8px 10px;
                border-radius: 10px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    box-shadow 0.2s ease;
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.24);
            }
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
    `,

    FooterActions: styled.section`
        display: flex;
        gap: 10px;
        justify-content: flex-end;

        .ghost,
        .cta {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 14px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: ${shadow};
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.15s ease;
        }
        .ghost:hover,
        .cta:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            transform: translateY(-1px);
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 40;
        padding: 16px;
    `,
    Modal: styled.div`
        width: min(560px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        padding: 16px;
        color: ${text};
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.38);

        h3 {
            margin: 0 0 6px;
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.4px;
        }
        p {
            color: ${muted};
            margin: 0 0 12px;
        }

        .row {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .primary,
        .cta {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 14px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 700;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .primary:hover,
        .cta:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
    `,
};
