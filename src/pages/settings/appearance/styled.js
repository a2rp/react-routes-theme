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
    `,

    HeaderBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};

        .left {
            display: flex;
            flex-direction: column;
            gap: 6px;
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                a {
                    color: ${muted};
                }
                strong {
                    font-weight: 700;
                    color: ${text};
                }
            }
            .meta {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                .dot {
                    opacity: 0.6;
                }
            }
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            a,
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                cursor: pointer;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.04s ease;
            }
            a:hover,
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            a:active,
            button:active {
                transform: translateY(1px);
            }
            .ghost {
                background: transparent;
            }
            .danger {
                border-color: ${border};
            }
            .danger:hover {
                border-color: ${accent};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,

    Main: styled.div`
        display: grid;
        grid-template-columns: 360px 1fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .panel {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            h3 {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .group {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .groupHead {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                font-weight: 600;
            }
            .tiny {
                color: ${muted};
                font-size: 12px;
            }

            .options {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
                &.twoCol {
                    grid-template-columns: 1fr 1fr;
                }
                label {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: color-mix(in oklab, ${card} 92%, transparent);
                    border: 1px solid ${border};
                    padding: 8px 10px;
                    border-radius: 10px;
                    input[disabled] {
                        filter: grayscale(1);
                    }
                    .icon {
                        color: ${muted};
                        display: inline-flex;
                    }
                }
            }

            .swatches {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .sw {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    box-shadow: ${shadow};
                }
            }

            .tokens {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                .kv {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 6px 8px;
                    code {
                        color: ${muted};
                    }
                    .chip {
                        min-width: 40px;
                        height: 22px;
                        border-radius: 6px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid ${border};
                    }
                    .demo-bg {
                        background: var(--bg);
                    }
                    .demo-text {
                        color: var(--text);
                        background: color-mix(
                            in oklab,
                            var(--text) 15%,
                            transparent
                        );
                    }
                    .demo-card {
                        background: var(--card);
                    }
                    .demo-border {
                        background: color-mix(
                            in oklab,
                            var(--border) 40%,
                            transparent
                        );
                    }
                    .demo-muted {
                        color: var(--muted);
                        background: color-mix(
                            in oklab,
                            var(--muted) 15%,
                            transparent
                        );
                    }
                }
            }

            .ctaRow {
                display: flex;
                gap: 8px;
                .primary,
                button.primary {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: border-color 0.2s ease, color 0.2s ease;
                }
                .primary:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                .ghost {
                    text-decoration: none;
                    color: ${muted};
                    border: 1px dashed ${border};
                    padding: 8px 12px;
                    border-radius: 10px;
                }
                .ghost:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
            }

            .shadowRow {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 10px;
                .shadowBox {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 54px;
                    border: 1px solid ${border};
                    border-radius: 12px;
                    background: ${card};
                }
                .s1 {
                    box-shadow: ${shadow};
                }
                .s2 {
                    box-shadow: 0 12px 38px rgba(0, 0, 0, 0.28);
                }
                .s3 {
                    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.38);
                }
            }
        }

        .preview {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .titleRow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h2 {
                    font-size: 20px;
                }
                .rightLinks {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .rightLinks a {
                    color: ${muted};
                    text-decoration: none;
                    border-bottom: 1px dashed ${border};
                }
                .rightLinks a:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 16px;
            }

            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 12px;
                box-shadow: ${shadow};
                padding: 14px;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .kpi {
                grid-column: span 5;
            }
            .table {
                grid-column: span 7;
            }
            .typography {
                grid-column: span 6;
            }
            .buttons {
                grid-column: span 6;
            }
            .sidebar {
                grid-column: span 5;
            }
            .links {
                grid-column: span 7;
            }

            @media (max-width: 1400px) {
                .kpi,
                .table,
                .typography,
                .buttons,
                .sidebar,
                .links {
                    grid-column: span 12;
                }
            }

            .card header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4 {
                    font-size: 14px;
                    color: ${text};
                }
                .badge {
                    font-size: 11px;
                    color: ${muted};
                    border: 1px solid ${border};
                    padding: 2px 6px;
                    border-radius: 999px;
                }
            }

            .kpi .kpiNums {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                .label {
                    color: ${muted};
                    font-size: 12px;
                }
                .num {
                    font-size: 22px;
                    font-weight: 700;
                }
            }

            .table .tblWrap {
                border: 1px solid ${border};
                border-radius: 10px;
                overflow: hidden;
            }
            .table table {
                width: 100%;
                border-collapse: collapse;
            }
            .table th,
            .table td {
                padding: 10px;
                border-bottom: 1px solid ${border};
            }
            .table tbody tr:hover {
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .table th {
                color: ${accent};
                background: color-mix(in oklab, ${card} 92%, transparent);
            }

            .typography .inlineLink {
                color: ${accent};
                text-decoration: underline;
            }
            .typography .bullets {
                margin-left: 16px;
                color: ${muted};
            }

            .buttons .btnRow {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .buttons a,
            .buttons button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.04s ease;
            }
            .buttons a:hover,
            .buttons button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .buttons a:active,
            .buttons button:active {
                transform: translateY(1px);
            }
            .buttons .ghost {
                background: transparent;
                color: ${muted};
            }
            .buttons .primary {
            }

            .sidebar .miniNav {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                .section {
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 8px;
                    background: color-mix(in oklab, ${card} 96%, transparent);
                }
                .head {
                    color: ${muted};
                    font-weight: 600;
                    margin-bottom: 6px;
                }
                a {
                    display: block;
                    color: ${text};
                    padding: 4px 6px;
                    text-decoration: none;
                    border-left: 2px solid transparent;
                    border-radius: 6px;
                }
                a:hover {
                    color: ${accent};
                    border-left-color: ${accent};
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
            }

            .links .linksGrid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .links .linksGrid a {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${card} 94%, transparent);
                color: ${text};
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.04s ease;
            }
            .links .linksGrid a:hover {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .links .rowLinks a {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                color: ${accent};
                text-decoration: none;
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `,

    ModalCard: styled.div`
        width: min(520px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        header h3 {
            margin: 0;
        }
        section p {
            color: ${muted};
        }
        footer {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        footer button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
        }
        footer button:hover {
            color: ${accent};
            border-color: ${accent};
        }
        footer button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,
};

export default Styled;
