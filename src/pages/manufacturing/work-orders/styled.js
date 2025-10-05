import styled from "styled-components";

/* CSS variable tokens with fallbacks */
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
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                a {
                    color: ${muted};
                    text-decoration: none;
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        color: ${accent};
                        border-bottom-color: ${accent};
                    }
                }
                .current {
                    color: ${text};
                    font-weight: 600;
                }
                .sep {
                    color: ${muted};
                }
            }

            .actions {
                display: flex;
                gap: 10px;
                button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    cursor: pointer;
                    transition: border-color 0.25s ease, color 0.25s ease,
                        background 0.25s ease, transform 0.02s ease;
                    &:hover {
                        color: ${accent};
                        border-color: ${accent};
                        background: rgba(0, 0, 0, 0.08);
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }
                }
                .ghost {
                    background: transparent;
                }
            }
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(5, minmax(180px, 1fr));
            gap: 12px;

            .statCard {
                padding: 14px;
                display: grid;
                grid-template-rows: auto 1fr auto;
                .label {
                    color: ${muted};
                    font-weight: 600;
                    letter-spacing: 0.3px;
                }
                .value {
                    font-size: 22px;
                    font-weight: 800;
                    margin-top: 4px;
                }
                .meta {
                    margin-top: 6px;
                    color: ${muted};
                    font-size: 12px;
                }
            }

            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, minmax(180px, 1fr));
            }
            @media (max-width: 780px) {
                grid-template-columns: repeat(2, minmax(180px, 1fr));
            }
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 380px auto 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;

            .search {
                position: relative;
                display: flex;
                align-items: center;
                .icon {
                    position: absolute;
                    left: 10px;
                    opacity: 0.8;
                }
                input {
                    width: 100%;
                    height: 38px;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    background: ${bg};
                    color: ${text};
                    padding: 0 12px 0 34px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                    &::placeholder {
                        color: ${muted};
                    }
                    &:focus {
                        outline: none;
                        border-color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                }
            }

            .tabs {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .tab {
                    height: 34px;
                    padding: 0 12px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    border-radius: 999px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    &:hover {
                        color: ${accent};
                        border-color: ${accent};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &.active {
                        color: ${accent};
                        border-color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                }
            }

            .spacer {
                height: 1px;
            }

            .toolbarLinks {
                display: flex;
                gap: 12px;
                a {
                    color: ${muted};
                    text-decoration: none;
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        color: ${accent};
                        border-bottom-color: ${accent};
                    }
                }
            }

            @media (max-width: 1020px) {
                grid-template-columns: 1fr;
                .spacer {
                    display: none;
                }
                .toolbarLinks {
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }
            }
        }

        .tableWrap {
            padding: 0;
            overflow: hidden;

            .table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
            }

            thead th {
                position: sticky;
                top: 0;
                z-index: 2;
                background: ${card};
                border-bottom: 1px solid ${border};
                text-align: left;
                font-weight: 700;
                letter-spacing: 0.3px;
                padding: 12px;
                white-space: nowrap;
            }

            tbody td {
                border-bottom: 1px solid ${border};
                padding: 12px;
                vertical-align: top;
            }

            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }

            .right {
                text-align: right;
            }
            .nowrap {
                white-space: nowrap;
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .sub {
                color: ${muted};
                font-size: 12px;
                margin-top: 4px;
            }

            .ellipsis {
                max-width: 260px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .minor {
                color: ${muted};
                font-size: 12px;
                display: inline-block;
            }

            a {
                color: ${text};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }

            .chip {
                display: inline-flex;
                align-items: center;
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                background: rgba(0, 0, 0, 0.06);
                font-size: 12px;
                &.inprogress {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                &.completed {
                    opacity: 0.9;
                }
                &.planned {
                    opacity: 0.9;
                }
                &.hold {
                    opacity: 0.9;
                }
                &.mute {
                    background: transparent;
                }
            }

            .rowActions {
                display: inline-flex;
                gap: 8px;
                .btn {
                    height: 30px;
                    min-width: 30px;
                    padding: 0 8px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    cursor: pointer;
                    transition: all 0.25s ease;
                    &:hover {
                        color: ${accent};
                        border-color: ${accent};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }
                    &.danger:hover {
                        border-color: #c24545;
                    }
                }
            }

            .linksCell {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                a {
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        border-bottom-color: ${accent};
                    }
                }
            }

            tfoot td {
                padding: 10px;
            }
            .footBar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                .muted {
                    color: ${muted};
                }
                .pager {
                    display: inline-flex;
                    gap: 6px;
                    button {
                        height: 30px;
                        min-width: 30px;
                        padding: 0 10px;
                        border-radius: 8px;
                        border: 1px solid ${border};
                        background: ${card};
                        color: ${text};
                        &:hover {
                            color: ${accent};
                            border-color: ${accent};
                        }
                        &.active {
                            color: ${accent};
                            border-color: ${accent};
                            box-shadow: 0 0 0 3px ${accentSoft};
                        }
                        &:disabled {
                            opacity: 0.6;
                            cursor: not-allowed;
                        }
                    }
                }
            }
        }

        /* confirm modal */
        .confirmBackdrop {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 50;
        }
        .confirmModal {
            width: min(560px, 96vw);
            padding: 14px;
            .title {
                font-weight: 800;
                margin-bottom: 6px;
            }
            .body {
                color: ${muted};
                margin: 6px 0 12px;
            }
            .footer {
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                cursor: pointer;
                transition: all 0.25s ease;
                &:hover {
                    color: ${accent};
                    border-color: ${accent};
                    background: rgba(0, 0, 0, 0.06);
                }
            }
        }
    `,
};
