import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .pageHeader {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

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
            span {
                opacity: 0.7;
            }
        }

        .heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            .title {
                h1 {
                    font-size: 22px;
                    margin: 0;
                }
                .sub {
                    color: ${muted};
                }
                a {
                    color: ${accent};
                }
            }
            .headerActions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    padding: 8px 12px;
                    border-radius: 8px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease,
                        color 0.2s ease, background 0.2s ease;
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                .primary {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .pageFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${muted};
            padding-top: 4px;
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
            .right,
            .left {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
            }
        }
    `,

    Tabs: styled.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 2px;
        a {
            border: 1px solid ${border};
            color: ${muted};
            background: ${card};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            transition: color 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        a.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.main`
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .metaCard {
            h2 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            .metaList {
                display: grid;
                grid-template-columns: 1fr;
                gap: 8px;
                dt {
                    color: ${muted};
                    font-weight: 500;
                }
                dd {
                    color: ${text};
                }
                .muted {
                    color: ${muted};
                    font-size: 12px;
                    margin-top: 2px;
                }
                div {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 8px;
                    align-items: baseline;
                }
            }
            .divider {
                height: 1px;
                background: ${border};
                margin: 14px 0;
            }

            .optionRow {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
                align-items: center;
                margin-bottom: 10px;
                .label {
                    color: ${muted};
                }
                .chipRow {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .chip {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 6px 10px;
                    border-radius: 999px;
                    cursor: pointer;
                }
                .chip:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                .chip.selected {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }

            .toggleRow {
                display: flex;
                gap: 14px;
                flex-wrap: wrap;
                label {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;
                    color: ${text};
                    input {
                        accent-color: ${accent};
                    }
                }
            }

            .links {
                margin-top: 8px;
                h3 {
                    font-size: 14px;
                    margin-bottom: 6px;
                    color: ${muted};
                }
                ul {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    gap: 6px;
                }
                a {
                    color: ${text};
                }
                a:hover {
                    color: ${accent};
                }
            }
        }

        .preview {
            display: flex;
            flex-direction: column;
            gap: 12px;
            .previewHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
                h2 {
                    font-size: 16px;
                    margin: 0;
                }
                .rowBtns {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .rowBtns button {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    padding: 6px 10px;
                    border-radius: 8px;
                }
                .rowBtns button:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                .rowBtns .primary {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }

            .sheet {
                width: 100%;
                display: grid;
                gap: 12px;
            }
            .columns-1 {
                grid-template-columns: 1fr;
            }
            .columns-2 {
                grid-template-columns: repeat(2, 1fr);
            }
            .columns-3 {
                grid-template-columns: repeat(3, 1fr);
            }
            .columns-4 {
                grid-template-columns: repeat(4, 1fr);
            }

            /* Sticker size presets (visual preview only) */
            .size-25x25 .sticker {
                height: 110px;
            }
            .size-50x25 .sticker {
                height: 140px;
            }
            .size-100x75 .sticker {
                height: 220px;
            }
        }
    `,

    Sticker: styled.article`
        border: 1px dashed ${border};
        border-radius: 10px;
        padding: 10px 12px;
        background: color-mix(in oklab, ${card} 96%, transparent);
        display: grid;
        grid-template-rows: auto auto auto auto 1fr;
        gap: 6px;

        .line {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .a .brand {
            font-weight: 700;
            letter-spacing: 0.2px;
            font-family: "Antonio", sans-serif;
        }
        .a .sku {
            color: ${muted};
            font-size: 12px;
        }

        .b .name {
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .c,
        .d {
            gap: 12px;
            flex-wrap: wrap;
        }
        .pair {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .pair span {
            color: ${muted};
            font-size: 12px;
        }
        .pair strong {
            font-size: 12px;
        }

        .e {
            gap: 10px;
            align-items: flex-end;
        }
        .barcode {
            display: grid;
            place-items: center;
            gap: 6px;
            .bars {
                width: 180px;
                height: 44px;
                border-radius: 4px;
                background: repeating-linear-gradient(
                    to right,
                    ${text} 0 2px,
                    transparent 2px 4px
                );
                opacity: 0.85;
            }
            .code {
                font-size: 12px;
                letter-spacing: 2px;
                color: ${muted};
            }
        }

        .qr {
            width: 54px;
            height: 54px;
            border: 1px solid ${border};
            border-radius: 6px;
            position: relative;
            background: linear-gradient(90deg, transparent 50%, ${border} 50%) 0
                    0/10px 10px,
                linear-gradient(0deg, transparent 50%, ${border} 50%) 0 0/10px
                    10px;
            box-shadow: inset 0 0 0 3px
                color-mix(in oklab, ${accent} 15%, transparent);
        }

        /* Size fine-tuning */
        &.size-25x25 .barcode .bars {
            width: 140px;
            height: 36px;
        }
        &.size-25x25 .qr {
            width: 44px;
            height: 44px;
        }

        &.size-100x75 .barcode .bars {
            width: 220px;
            height: 56px;
        }
        &.size-100x75 .qr {
            width: 64px;
            height: 64px;
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: grid;
        place-items: center;
        z-index: 70;
    `,

    ModalCard: styled.div`
        width: min(520px, 92vw);
        .modalHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 8px;
            h3 {
                margin: 0;
                font-size: 16px;
            }
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 6px 10px;
                border-radius: 8px;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
        .modalBody {
            color: ${text};
            margin-bottom: 10px;
        }
        .modalFooter {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .primary {
            border: 1px solid ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
