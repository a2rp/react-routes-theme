import styled from "styled-components";

/* theme tokens (with safe fallbacks) */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)"; // blue accent only
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 14px)";
const maxw = "var(--maxw, 1080px)";

export const Styled = {
    Wrapper: styled.div`
        padding: 24px;
        color: ${text};
        max-width: ${maxw};
        margin: 0 auto;

        h3 {
            margin-bottom: 18px;
            font-weight: 700;
            letter-spacing: 0.3px;
            color: ${text};
        }

        time {
            color: ${muted};
        }

        fieldset {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: 16px;
            margin: 28px 0;
            box-shadow: var(--shadow);

            legend {
                padding: 0 10px;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.3px;
                color: ${accent};
            }

            .para {
                display: block;
                margin-bottom: 8px;
                max-width: 900px;

                .heading {
                    /* margin-bottom: 12px; */
                }

                p {
                    color: ${muted};
                    margin-bottom: 12px;
                    line-height: 1.8;
                }

                .section {
                    margin-bottom: 14px;

                    ul {
                        margin-left: 22px;
                    }

                    h3 a {
                        color: ${text};
                        text-decoration: none;
                    }
                    h3 a:hover {
                        color: ${accent};
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }

                ul {
                    margin-left: 30px;
                    margin-bottom: 30px;
                }
            }
        }
    `,
};

export const Row = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid ${border};
    border-radius: 10px;

    &:last-child {
        border-bottom: none;
    }

    @media (hover: hover) {
        &:hover {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    }
    @media (hover: none) {
        &:active {
            background: rgba(255, 255, 255, 0.04);
        }
    }
`;

export const Col1 = styled.div`
    flex: 0 0 120px;
    white-space: nowrap;
    color: ${muted};
    font-weight: 600;
`;

export const Col2 = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0; /* allow links to wrap nicely */

    a {
        color: ${text};
        overflow-wrap: anywhere;
        word-break: break-word;
        text-decoration: none;
        border-radius: 8px;
        transition: color 0.2s ease, box-shadow 0.2s ease,
            border-color 0.2s ease;

        &:hover {
            color: ${accent};
            text-decoration: underline;
            text-underline-offset: 3px;
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .icon {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        color: ${accent}; /* icon picks up the blue accent */
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
    }
`;
