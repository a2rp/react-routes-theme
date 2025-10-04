import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Wrapper: styled.div`
        color: ${text};
        padding: 28px 0 64px;
    `,

    Toast: styled.div`
        position: sticky;
        top: 8px;
        z-index: 5;
        margin-bottom: 10px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        width: fit-content;
    `,

    Hero: styled.section`
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 18px;
        padding: 18px;
        align-items: center;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        margin-bottom: 18px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .mark {
            width: 120px;
            height: 120px;
            display: grid;
            place-items: center;
            svg {
                width: 100%;
                height: 100%;
            }
        }

        .copy {
            .eyebrow {
                color: ${muted};
                font-size: 12px;
                letter-spacing: 0.3px;
            }
            h1 {
                font-size: 28px;
                line-height: 1.25;
                margin: 4px 0 6px;
                .num {
                    font-size: 32px;
                    margin-right: 8px;
                    background: linear-gradient(
                        90deg,
                        ${accent},
                        color-mix(in oklab, ${accent} 30%, transparent)
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            }
            .muted {
                color: ${muted};
            }

            .search {
                margin-top: 12px;
                display: flex;
                gap: 8px;
                input {
                    flex: 1 1 auto;
                    border-radius: 10px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 10px 12px;
                    transition: border-color 0.25s, box-shadow 0.25s;
                }
                input:focus {
                    outline: none;
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }

            .actions {
                margin-top: 12px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }

            .btnPrimary,
            .btnGhost {
                border-radius: 10px;
                padding: 8px 14px;
                font-weight: 600;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.06s ease-in-out;
            }
            .btnPrimary:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .btnGhost:hover {
                color: ${accent};
                border-color: ${accent};
            }
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }
        }

        @media (max-width: 680px) {
            grid-template-columns: 1fr;
            .mark {
                display: none;
            }
        }
    `,

    PanelGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1024px) {
            grid-template-columns: 1.2fr 0.8fr;
            grid-auto-rows: minmax(0, auto);
        }

        .card {
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card};
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .quick header h3,
        .info header h3,
        .map header h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .quick .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .quick .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .quick .chip:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .info .rows {
            display: grid;
            gap: 10px;
        }
        .info .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 10px;
        }
        .info .row:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }
        .info .k {
            color: ${muted};
        }
        .info .v {
            color: ${text};
            word-break: break-word;
        }

        .info .foot {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .info .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            font-weight: 600;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .info .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .map .cols {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            @media (min-width: 980px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        .map h4 {
            font-size: 13px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .map ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .map a {
            color: ${text};
            border-bottom: 1px dotted transparent;
        }
        .map a:hover {
            color: ${accent};
            border-bottom-color: ${accent};
        }
    `,
};
