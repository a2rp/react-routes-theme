import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 14px)";

export const Styled = {
    Page: styled.div`
        padding: 20px 20px 64px;
        color: ${text};
        width: 100%;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,

    Toolbar: styled.section`
        padding: 12px 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: repeat(6, minmax(180px, 1fr));
            gap: 10px;
        }
        @media (max-width: 1200px) {
            .row {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 720px) {
            .row {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 520px) {
            .row {
                grid-template-columns: 1fr;
            }
        }

        .ctrl {
            display: grid;
            gap: 6px;
        }
        label {
            font-size: 12px;
            color: ${muted};
        }
        .btnset {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .btnset button {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.06s;
        }
        .btnset button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnset button.on {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnset button:active {
            transform: translateY(1px);
        }
    `,

    Board: styled.div`
        /* controls driving layout via data-attrs */
        --g: 16px;
        --pad: 16px;
        --margin: 12px;

        display: grid;
        gap: var(--g);
        padding: var(--pad);

        &[data-margin="none"] {
            --margin: 0px;
        }
        &[data-margin="narrow"] {
            --margin: 6px;
        }
        &[data-margin="normal"] {
            --margin: 12px;
        }

        /* label sizing */
        &[data-size="4x6"] {
            --w: 4in;
            --h: 6in;
        }
        &[data-size="a6"] {
            --w: 105mm;
            --h: 148mm;
        }
        &[data-size="a5half"] {
            --w: 148mm;
            --h: 210mm;
        }

        &[data-orient="landscape"] {
            --W: var(--h);
            --H: var(--w);
        }
        &[data-orient="portrait"] {
            --W: var(--w);
            --H: var(--h);
        }

        /* columns */
        grid-template-columns: repeat(var(--cols, 2), minmax(0, 1fr));
        &[data-perrow="1"] {
            --cols: 1;
        }
        &[data-perrow="2"] {
            --cols: 2;
        }
        &[data-perrow="3"] {
            --cols: 3;
        }

        background: color-mix(in oklab, ${card} 96%, transparent);
        border: 1px solid ${border};
        border-radius: 12px;

        .label {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: calc(var(--margin) + 8px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
            position: relative;
            /* keep physical size in preview */
            width: var(--W);
            height: var(--H);
            overflow: hidden;
        }
    `,

    Label: styled.div`
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 10px;
        color: ${text};

        .labelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .carrier {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .badge {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 6px 10px;
                border-radius: 999px;
                font-weight: 700;
                font-size: 12px;
            }
            .service {
                color: ${muted};
                font-size: 12px;
            }
            .meta {
                color: ${muted};
                font-size: 12px;
                display: flex;
                gap: 8px;
            }
        }

        .zones {
            display: grid;
            grid-template-rows: auto 1fr;
            gap: 10px;
            height: 100%;
            &.with-safe {
                outline: 1px dashed ${border};
                outline-offset: 6px;
                border-radius: 8px;
            }

            .fromto {
                display: grid;
                grid-template-columns: 1.2fr 1.2fr 0.8fr;
                gap: 10px;
                .blk {
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 10px;
                    background: color-mix(in oklab, ${card} 92%, transparent);
                    h5 {
                        font-size: 12px;
                        color: ${muted};
                        margin-bottom: 4px;
                    }
                    .txt {
                        font-size: 12px;
                        line-height: 1.5;
                    }
                    &.small .txt div {
                        margin-bottom: 4px;
                    }
                }
            }

            .track {
                display: grid;
                grid-template-rows: auto auto auto;
                gap: 6px;
                align-content: start;

                .code {
                    font-family: "Antonio", sans-serif;
                    font-size: 22px;
                    letter-spacing: 0.5px;
                    padding: 8px 10px;
                    border: 1px dashed ${border};
                    border-radius: 10px;
                    background: color-mix(in oklab, ${card} 90%, transparent);
                }

                .barcode {
                    width: 100%;
                    height: 72px;
                    border: 1px solid ${border};
                    border-radius: 8px;
                    background: ${card};
                }

                .under {
                    display: grid;
                    grid-template-columns: 1fr 1fr auto;
                    align-items: center;
                    gap: 10px;
                    .kw span {
                        color: ${muted};
                        font-size: 12px;
                        display: block;
                    }
                    .kw strong {
                        font-size: 13px;
                    }
                    .qrWrap {
                        border: 1px solid ${border};
                        border-radius: 8px;
                        padding: 6px;
                        background: ${card};
                    }
                }
            }
        }

        .labelFoot {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            .notes {
                color: ${muted};
                font-size: 12px;
            }
            .brand {
                color: ${muted};
                font-size: 12px;
            }
        }

        /* crop marks */
        .crop {
            --len: 12px;
            position: absolute;
            width: var(--len);
            height: var(--len);
            border-color: ${border};
            pointer-events: none;
            opacity: 0.9;
        }
        .crop.tl {
            top: 0;
            left: 0;
            border-top: 2px solid ${border};
            border-left: 2px solid ${border};
        }
        .crop.tr {
            top: 0;
            right: 0;
            border-top: 2px solid ${border};
            border-right: 2px solid ${border};
        }
        .crop.bl {
            bottom: 0;
            left: 0;
            border-bottom: 2px solid ${border};
            border-left: 2px solid ${border};
        }
        .crop.br {
            bottom: 0;
            right: 0;
            border-bottom: 2px solid ${border};
            border-right: 2px solid ${border};
        }
    `,
};
