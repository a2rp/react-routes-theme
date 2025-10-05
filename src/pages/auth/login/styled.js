import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
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
        grid-template-columns: 1.15fr 1fr;
        gap: 24px;
        min-height: calc(100dvh - 0px);
        background: ${bg};
        color: ${text};
        padding: 24px;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
            padding: 16px;
        }
    `,

    BrandPane: styled.section`
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 18px;

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            .logo {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: ${card};
                border: 1px solid ${border};
                display: grid;
                place-items: center;
                font-weight: 700;
                box-shadow: ${shadow};
            }
            .name {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }

        .headline {
            h1 {
                font-size: 28px;
                line-height: 1.2;
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
                max-width: 72ch;
            }
        }

        .featureGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            @media (max-width: 1280px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 860px) {
                grid-template-columns: 1fr;
            }

            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 14px;
                padding: 16px;
                box-shadow: ${shadow};
            }
            h3 {
                font-size: 16px;
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
                margin-bottom: 10px;
            }
            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                a {
                    font-size: 12px;
                    padding: 6px 10px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                    color: ${text};
                    text-decoration: none;
                    transition: border-color 0.2s, background 0.2s, color 0.2s;
                }
                a:hover {
                    border-color: ${accent};
                    color: ${accent};
                    background: color-mix(in oklab, ${accent} 14%, transparent);
                }
            }
        }

        .quick {
            display: grid;
            gap: 10px;

            .searchHint {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 10px;
                background: color-mix(in oklab, ${accent} 10%, transparent);
                border: 1px solid ${border};
                color: ${text};
                b {
                    color: ${accent};
                }
            }
            .quickLinks {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                a {
                    font-size: 12px;
                    padding: 6px 10px;
                    border: 1px solid ${border};
                    border-radius: 8px;
                    text-decoration: none;
                    color: ${muted};
                    transition: color 0.2s, border-color 0.2s, background 0.2s;
                }
                a:hover {
                    color: ${accent};
                    border-color: ${accent};
                    background: rgba(0, 0, 0, 0.08);
                }
            }
        }

        .buildInfo {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${shadow};
            .row {
                display: flex;
                justify-content: space-between;
                gap: 12px;
                padding: 6px 0;
                &:not(:last-child) {
                    border-bottom: 1px dashed ${border};
                }
                .k {
                    color: ${muted};
                }
                .v {
                    font-variant-numeric: tabular-nums;
                }
            }
        }
    `,

    FormPane: styled.section`
        display: grid;
        align-content: center;
        gap: 16px;
    `,

    Card: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 16px;
        box-shadow: ${shadow};
        padding: 20px;

        .cardHeader {
            margin-bottom: 10px;
            h2 {
                font-size: 20px;
                line-height: 1.3;
            }
            p {
                color: ${muted};
            }
        }

        .form {
            display: grid;
            gap: 12px;
            margin-top: 8px;
            .row {
                display: grid;
                gap: 6px;
                label {
                    font-size: 12px;
                    color: ${muted};
                }
                input[type="email"],
                input[type="password"],
                input[type="text"] {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 10px 12px;
                    transition: border-color 0.25s, box-shadow 0.25s;
                }
                input::placeholder {
                    color: ${muted};
                }
                input:focus {
                    border-color: ${accent};
                    outline: none;
                    box-shadow: 0 0 0 3px ${accentSoft};
                }

                .pwdWrap {
                    position: relative;
                    display: grid;
                    input {
                        padding-right: 40px;
                    }
                    .iconBtn {
                        position: absolute;
                        right: 6px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 32px;
                        height: 32px;
                        display: grid;
                        place-items: center;
                        border: 1px solid ${border};
                        background: ${card};
                        color: ${muted};
                        border-radius: 8px;
                        cursor: pointer;
                        transition: color 0.2s, border-color 0.2s,
                            background 0.2s;
                    }
                    .iconBtn:hover {
                        color: ${accent};
                        border-color: ${accent};
                        background: rgba(0, 0, 0, 0.06);
                    }
                }

                .hint {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: ${muted};
                }
            }

            .rowInline {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .checkbox {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    cursor: default;
                }
                .muted {
                    color: ${muted};
                    text-decoration: none;
                }
                .muted:hover {
                    color: ${accent};
                }
            }

            .actions {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 10px;
                margin-top: 6px;
                @media (max-width: 520px) {
                    grid-template-columns: 1fr;
                }

                .primary {
                    background: color-mix(in oklab, ${accent} 14%, transparent);
                    border: 1px solid ${accent};
                    color: ${text};
                    padding: 10px 14px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: transform 0.06s ease, background 0.2s,
                        border-color 0.2s, color 0.2s, box-shadow 0.2s;
                    box-shadow: ${shadow};
                }
                .primary:hover {
                    background: color-mix(in oklab, ${accent} 18%, transparent);
                }
                .primary:active {
                    transform: translateY(1px);
                }
                .primary:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .ghost {
                    border: 1px solid ${border};
                    background: transparent;
                    color: ${text};
                    padding: 10px 14px;
                    border-radius: 12px;
                    text-decoration: none;
                    display: inline-grid;
                    place-items: center;
                    transition: color 0.2s, border-color 0.2s, background 0.2s,
                        transform 0.06s ease;
                }
                .ghost:hover {
                    color: ${accent};
                    border-color: ${accent};
                    background: rgba(0, 0, 0, 0.06);
                }
                .ghost:active {
                    transform: translateY(1px);
                }
            }
        }

        .divLine {
            display: grid;
            place-items: center;
            margin: 14px 0;
            position: relative;
            height: 24px;
            color: ${muted};
            span {
                background: ${card};
                padding: 0 8px;
                z-index: 1;
            }
        }
        .divLine::before {
            content: "";
            position: absolute;
            inset: 50% 0 auto 0;
            height: 1px;
            background: ${border};
            z-index: 0;
            transform: translateY(-50%);
        }

        .ssoGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
            .ssoBtn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                border: 1px solid ${border};
                border-radius: 12px;
                background: ${bg};
                color: ${text};
                padding: 10px 12px;
                cursor: pointer;
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    transform 0.06s ease;
            }
            .ssoBtn:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
            .ssoBtn:active {
                transform: translateY(1px);
            }
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
            a {
                text-decoration: none;
                color: ${muted};
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                transition: color 0.2s, border-color 0.2s, background 0.2s;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,

    MetaRow: styled.div`
        display: grid;
        gap: 6px;
        .muted {
            color: ${muted};
        }
        a {
            color: inherit;
            text-decoration: none;
            border-bottom: 1px dashed ${border};
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        padding: 16px;
        z-index: 999;

        .sheet {
            width: min(720px, 96vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 16px;
            box-shadow: ${shadow};
            padding: 18px;
            display: grid;
            gap: 12px;
        }

        .head h3 {
            font-size: 18px;
        }
        .head p {
            color: ${muted};
        }

        .gridLinks {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            @media (max-width: 840px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
            a {
                text-decoration: none;
                color: ${text};
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px 12px;
                background: color-mix(in oklab, ${accent} 10%, transparent);
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    transform 0.06s ease;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            a:active {
                transform: translateY(1px);
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            .primary,
            .ghost {
                padding: 10px 14px;
                border-radius: 12px;
                cursor: pointer;
                transition: transform 0.06s ease, background 0.2s,
                    border-color 0.2s, color 0.2s;
                border: 1px solid ${border};
                background: ${bg};
                color: ${text};
            }
            .primary {
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            .primary:hover {
                background: color-mix(in oklab, ${accent} 18%, transparent);
            }
            .primary:active,
            .ghost:active {
                transform: translateY(1px);
            }
            .ghost:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,
};
