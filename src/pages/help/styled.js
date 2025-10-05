import styled from "styled-components";

/* tokens from CSS variables with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    Hero: styled.section`
        padding: 28px 24px 18px 24px;
        border-bottom: 1px solid ${border};
        background: radial-gradient(
                1200px 300px at 10% -20%,
                color-mix(in oklab, ${accent} 12%, transparent) 0%,
                transparent 60%
            ),
            radial-gradient(
                1000px 280px at 90% -30%,
                color-mix(in oklab, ${accent} 10%, transparent) 0%,
                transparent 65%
            );

        .copy {
            display: grid;
            gap: 8px;
            margin-bottom: 14px;

            h1 {
                font-size: clamp(24px, 3.5vw, 36px);
                letter-spacing: 0.4px;
            }
            p {
                color: ${muted};
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                color: ${muted};
                span {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                }
                strong {
                    color: ${text};
                    font-weight: 600;
                }
            }
        }

        .search {
            display: grid;
            grid-template-columns: 24px 1fr auto;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 10px;
            box-shadow: ${shadow};
            max-width: 100%;

            input {
                background: transparent;
                border: none;
                color: ${text};
                outline: none;
                height: 34px;
            }
            button {
                border: 1px solid ${border};
                background: color-mix(in oklab, ${accent} 8%, ${card});
                padding: 8px 14px;
                border-radius: 8px;
                cursor: pointer;
                transition: 0.25s ease;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            svg {
                opacity: 0.9;
            }
        }

        .toolbar {
            display: flex;
            gap: 10px;
            margin-top: 12px;

            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                text-decoration: none;
                transition: 0.25s ease;
            }
            button:hover,
            a:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .quiet {
                background: transparent;
            }
        }
    `,

    BlockGrid: styled.div`
        padding: 18px 24px 28px 24px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 16px;

        @media (max-width: 1400px) {
            grid-template-columns: repeat(8, 1fr);
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,

    Block: styled.article`
        grid-column: span 6;
        display: flex;
        flex-direction: column;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px 16px 12px 16px;
        min-height: 220px;

        &.accent {
            outline: 1px solid color-mix(in oklab, ${accent} 40%, transparent);
            background: linear-gradient(
                180deg,
                color-mix(in oklab, ${accent} 9%, ${card}) 0%,
                ${card} 70%
            );
        }

        &.muted {
            background: color-mix(in oklab, ${card} 96%, transparent);
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            h2 {
                font-size: 18px;
                letter-spacing: 0.2px;
            }
            .tag {
                color: ${accent};
                border: 1px solid ${border};
                padding: 4px 8px;
                border-radius: 999px;
                font-size: 12px;
                user-select: none;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
        }

        p {
            color: ${muted};
        }

        .cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 12px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 6px 0 0 0;
        }
        .links li a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 6px;
            margin: 0 -6px;
            border-radius: 8px;
            color: ${text};
            text-decoration: none;
            border: 1px solid transparent;
            transition: 0.2s ease;
        }
        .links li a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .foot {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${muted};
            border-top: 1px dashed ${border};
            padding-top: 10px;

            .note {
                font-size: 12px;
            }
            .quiet {
                color: ${muted};
            }
            .quiet a {
                color: ${text};
            }
            .quiet a:hover {
                color: ${accent};
            }
        }

        .tips {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .tip {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${card} 94%, transparent);
            color: ${text};
        }
        .tip code {
            border: 1px solid ${border};
            border-radius: 6px;
            padding: 2px 6px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `,
};

export default Styled;
