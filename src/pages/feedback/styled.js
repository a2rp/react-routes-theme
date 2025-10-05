import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const bg = "var(--bg, #0d1117)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        background: ${bg};
        padding: 16px 18px 28px;
    `,

    Header: styled.header`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 16px;

        .path {
            display: flex;
            align-items: center;
            gap: 6px;
            a,
            strong {
                color: ${text};
            }
            a {
                opacity: 0.85;
            }
            a:hover {
                color: ${accent};
            }
            span {
                color: ${muted};
            }
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;

            .stamp {
                color: ${muted};
                border: 1px dashed ${border};
                padding: 4px 8px;
                border-radius: 8px;
            }
            .pill {
                border: 1px solid ${border};
                background: ${card};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                color: ${text};
                box-shadow: ${shadow};
            }
            .pill:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,

    TopBar: styled.section`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 16px;

        .cluster {
            display: flex;
            align-items: center;
            gap: 10px;
            button,
            .link {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.2s ease;
            }
            button:hover,
            .link:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        .filters {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            input,
            select {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 10px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            input::placeholder {
                color: ${muted};
            }
            input:focus,
            select:focus {
                outline: none;
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            button {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,

    Kpis: styled.section`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 16px;

        .kpi {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
            .label {
                color: ${muted};
                font-weight: 600;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin: 6px 0;
            }
            .hint a {
                color: ${text};
                opacity: 0.8;
            }
            .hint a:hover {
                color: ${accent};
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    Content: styled.main`
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${shadow};

        .listHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;

            h1 {
                font-size: 24px;
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
            }

            .listActions {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
                button,
                .link {
                    border: 1px solid ${border};
                    background: transparent;
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 8px;
                    text-decoration: none;
                }
                button:hover,
                .link:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
            display: flex;
            flex-direction: column;
            gap: 10px;

            .cardHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .id {
                    color: ${muted};
                    font-family: monospace;
                }
            }

            h2 {
                font-size: 16px;
                letter-spacing: 0.2px;
            }

            .chip {
                font-size: 12px;
                border-radius: 999px;
                padding: 4px 8px;
                border: 1px solid ${border};
                background: rgba(0, 0, 0, 0.08);
            }
            .chip.planned {
                background: color-mix(in oklab, ${accent} 12%, transparent);
                border-color: ${accent};
            }
            .chip.underreview {
                background: rgba(0, 0, 0, 0.16);
            }
            .chip.shipped {
                background: rgba(0, 0, 0, 0.2);
            }

            .metaRow {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                .badge {
                    border: 1px solid ${border};
                    padding: 2px 8px;
                    border-radius: 999px;
                    color: ${text};
                    background: rgba(0, 0, 0, 0.08);
                    font-size: 12px;
                    font-weight: 600;
                }
                .votes {
                    color: ${text};
                    opacity: 0.9;
                }
                .updated {
                    color: ${muted};
                }
            }

            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                .link {
                    text-decoration: none;
                    border: 1px solid ${border};
                    padding: 6px 10px;
                    border-radius: 8px;
                    color: ${text};
                }
                .link:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }

            .cardFoot {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 4px;
                button,
                .link {
                    border: 1px solid ${border};
                    background: transparent;
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 8px;
                    text-decoration: none;
                }
                button:hover,
                .link:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                button:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }
            }
        }

        @media (max-width: 1280px) {
            .cards {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 760px) {
            .cards {
                grid-template-columns: 1fr;
            }
        }
    `,

    QuickNav: styled.section`
        margin-top: 16px;
        .qtitle {
            color: ${muted};
            margin-bottom: 8px;
            font-weight: 700;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 10px;
            a {
                text-decoration: none;
                color: ${text};
                border: 1px solid ${border};
                background: ${card};
                border-radius: 8px;
                padding: 10px 12px;
                text-align: center;
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
        @media (max-width: 1280px) {
            .grid {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }
        @media (max-width: 900px) {
            .grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        @media (max-width: 640px) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .backdrop {
            position: absolute;
            inset: 0;
            border: 0;
            padding: 0;
            margin: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .sheet {
            position: absolute;
            right: 20px;
            bottom: 20px;
            width: min(560px, 96vw);
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 8px;
        }
        p {
            color: ${muted};
            margin-bottom: 10px;
        }
        .modalLinks {
            margin: 10px 0 14px;
            padding-left: 18px;
        }
        .modalLinks a {
            color: ${text};
        }
        .modalLinks a:hover {
            color: ${accent};
        }
        .controls {
            display: flex;
            justify-content: flex-end;
        }
        .controls button {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
        }
        .controls button:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
