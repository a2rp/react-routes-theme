import styled, { css } from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

const ring = css`
    box-shadow: 0 0 0 3px ${accentSoft};
`;

export const Styled = {
    Page: styled.div`
        width: 100%;
        min-height: 100%;
        color: ${text};

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 10px;
            a {
                color: ${muted};
            }
            .sep {
                opacity: 0.6;
            }
        }

        .pageHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px 18px;
            box-shadow: ${shadow};
            margin-bottom: 14px;

            .l {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .iconCircle {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: color-mix(in oklab, ${accent} 12%, transparent);
                border: 1px solid ${border};
                color: ${accent};
            }
            h1 {
                font-family: "Antonio", sans-serif;
                font-size: 22px;
                line-height: 1.2;
                letter-spacing: 0.4px;
            }
            p {
                color: ${muted};
                margin-top: 2px;
            }
            .meta {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                font-size: 12px;
                color: ${muted};
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 12px;
            margin: 14px 0;

            .searchBox {
                position: relative;
                input {
                    width: 100%;
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 10px 12px 10px 36px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                }
                input::placeholder {
                    color: ${muted};
                }
                input:focus {
                    border-color: ${accent};
                    ${ring}
                }
                .ico {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: ${muted};
                }
            }

            .filters {
                display: flex;
                gap: 12px;
                align-items: center;
                flex-wrap: wrap;

                .seg {
                    display: flex;
                    gap: 6px;
                }
                .chip {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    border-radius: 20px;
                    padding: 6px 10px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                .chip.on {
                    border-color: ${accent};
                    color: ${accent};
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
            }

            .acts {
                display: flex;
                gap: 8px;
                justify-self: end;
                .btn {
                    display: inline-flex;
                    gap: 8px;
                    align-items: center;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s ease, border-color 0.2s ease,
                        color 0.2s ease;
                }
                .btn.ghost:hover {
                    border-color: ${accent};
                    color: ${accent};
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                }
                .btn.primary {
                    border-color: ${border};
                }
                .btn.primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .quickLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
            .ql {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                padding: 8px 12px;
                border-radius: 10px;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            .ql:hover {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
            .ql.active {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 14%, transparent);
            }
            svg {
                opacity: 0.9;
            }
        }

        .tableWrap {
            background: color-mix(in oklab, ${card} 96%, transparent);
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};

            .subhead {
                display: flex;
                gap: 10px;
                align-items: center;
                padding: 10px 12px;
                color: ${muted};
                font-size: 12px;
                border-bottom: 1px solid ${border};
            }
            .dot {
                opacity: 0.6;
            }

            .scroll {
                width: 100%;
                overflow: auto;
                scrollbar-gutter: stable;
            }

            table.grid {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                color: ${accent};
                text-align: left;
                border-bottom: 1px solid ${border};
                padding: 10px 12px;
                z-index: 1;
            }
            tbody td {
                border-bottom: 1px solid ${border};
                padding: 10px 12px;
                vertical-align: top;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
            .w120 {
                width: 120px;
            }

            .sticky {
                position: sticky;
                left: 0;
                background: inherit;
                z-index: 0; /* below header but above body bg */
            }

            .idLink {
                color: ${text};
                font-weight: 600;
                border-bottom: 1px dashed transparent;
            }
            .idLink:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }

            .metaRow {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                font-size: 12px;
                color: ${muted};
                margin-top: 2px;
            }

            .patient {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                .avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                    color: ${accent};
                    border: 1px solid ${border};
                    font-size: 12px;
                }
                .name {
                    font-weight: 600;
                }
                .muted {
                    color: ${muted};
                    margin-left: 4px;
                }
            }

            .dt {
                white-space: nowrap;
            }
            .tm {
                white-space: nowrap;
                color: ${muted};
                font-size: 12px;
            }

            .badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 3px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                font-size: 12px;
                margin-right: 6px;
            }
            .badge.final {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
            .badge.preliminary {
                color: ${text};
                border-color: ${border};
                opacity: 0.9;
            }
            .badge.stat {
                color: ${text};
                border-color: ${border};
                background: rgba(255, 255, 255, 0.06);
            }

            .acts {
                display: flex;
                gap: 6px;
                align-items: center;
                .btn {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                    padding: 6px 8px;
                    border-radius: 6px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    font-size: 12px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                }
                .btn:hover {
                    border-color: ${accent};
                    color: ${accent};
                    background: color-mix(in oklab, ${accent} 10%, transparent);
                }
                .btn:active {
                    transform: translateY(1px);
                }
                .btn.ghost {
                    opacity: 0.9;
                }
                .btn.tiny {
                    padding: 5px 8px;
                }
                a.btn {
                    text-decoration: none;
                }
            }
        }

        .navCards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 12px;
            margin: 14px 0 4px;

            .card {
                display: block;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 12px;
                padding: 14px;
                text-decoration: none;
                box-shadow: ${shadow};
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.08s ease, background 0.2s ease;
            }
            .card:hover {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 8%, transparent);
                transform: translateY(-1px);
            }
            .head {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-weight: 700;
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
            }
        }

        /* modal */
        .modalBackdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modal {
            width: min(560px, calc(100% - 24px));
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 14px;
            animation: pop 0.12s ease-out;
        }
        @keyframes pop {
            from {
                transform: translateY(4px);
                opacity: 0.7;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .mHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
            font-weight: 700;
        }
        .mBody {
            color: ${text};
            opacity: 0.95;
        }
        .mActs {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        .mActs .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .mActs .btn:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        /* links inside table cells */
        a.plain {
            color: ${text};
            text-decoration: none;
        }
        a.plain:hover {
            color: ${accent};
        }

        @media (max-width: 900px) {
            .toolbar {
                grid-template-columns: 1fr;
            }
            .tableWrap .w120 {
                width: auto;
            }
            .tableWrap .sticky {
                position: static;
            }
        }
    `,
};
