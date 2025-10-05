import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        padding: 20px 0 64px;
        color: ${text};

        .breadcrumbs {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
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
        padding: 16px 18px;
        margin-bottom: 16px;

        .identity {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .avatar {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            border: 1px solid ${border};
            background: ${card};
            display: grid;
            place-items: center;
            font-weight: 700;
            font-size: 20px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        .badge {
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .meta {
            margin-top: 6px;
            display: flex;
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.06s ease;
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

        .isDemo {
            opacity: 0.85;
            position: relative;
        }
        .isDemo:hover::after {
            content: "Demo mode: disabled";
            position: absolute;
            left: 0;
            right: 0;
            top: calc(100% + 6px);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            font-size: 12px;
            color: ${text};
        }
    `,

    InfoBar: styled.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .close {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            border-radius: 8px;
            padding: 4px 8px;
        }
        .close:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* left column */
        .left {
            display: grid;
            gap: 16px;
        }

        .scorecards {
            display: grid;
            gap: 14px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
            .score {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                .k {
                    color: ${muted};
                    font-size: 12px;
                }
                .v {
                    font-size: 20px;
                    margin-top: 4px;
                }
                .sub {
                    color: ${muted};
                    font-size: 12px;
                    margin-top: 4px;
                }
                .bar {
                    width: 100%;
                    height: 8px;
                    border-radius: 999px;
                    background: rgba(0, 0, 0, 0.15);
                    margin-top: 10px;
                    overflow: hidden;
                }
                .bar > span {
                    display: block;
                    height: 100%;
                    background: ${accent};
                }
            }
        }

        .info {
            .row {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 14px;
                @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                }
                .label {
                    color: ${muted};
                    font-size: 12px;
                }
                .value {
                    font-size: 14px;
                }
            }
            .tags {
                margin-top: 14px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .chip {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
        }

        .duo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            @media (max-width: 1000px) {
                grid-template-columns: 1fr;
            }
            .pane {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            h3 {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                margin-bottom: 10px;
            }
            address {
                font-style: normal;
                line-height: 1.6;
            }
        }

        .contacts {
            h3 {
                margin-bottom: 10px;
            }
            .list {
                display: grid;
                gap: 12px;
            }
            .contact {
                display: grid;
                grid-template-columns: 44px 1fr;
                gap: 12px;
                align-items: center;
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 10px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                .avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: ${card};
                    border: 1px solid ${border};
                    display: grid;
                    place-items: center;
                    font-weight: 700;
                }
                .name {
                    font-weight: 600;
                }
                .role {
                    color: ${muted};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 8px;
                }
                .link {
                    color: ${text};
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }
                .link:hover {
                    color: ${accent};
                }
                .best {
                    color: ${muted};
                    font-size: 12px;
                }
                @media (max-width: 900px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
            }
        }

        .notes {
            p {
                margin-bottom: 8px;
            }
            .muted {
                color: ${muted};
                font-size: 12px;
            }
        }

        /* right column */
        .right {
            display: grid;
            gap: 16px;
        }

        .web-contact .grid {
            display: grid;
            gap: 8px;
        }
        .web-contact .line {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${text};
        }
        .web-contact .line:hover {
            color: ${accent};
        }

        .compliance .kv,
        .banking .kv,
        .print .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 8px 12px;
        }
        .print h3 {
            margin-bottom: 10px;
        }

        .related .subgrid {
            display: grid;
            gap: 12px;
            .subhead {
                color: ${muted};
                font-size: 12px;
                margin-bottom: 6px;
            }
            .list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: grid;
                gap: 6px;
            }
            .list li {
                display: grid;
                grid-template-columns: 1fr auto auto auto;
                gap: 8px;
                align-items: center;
            }
            .list a {
                color: ${text};
            }
            .list a:hover {
                color: ${accent};
            }
            .pill {
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 2px 8px;
                font-size: 12px;
            }
            .value {
                color: ${muted};
                font-size: 12px;
                text-align: right;
            }
        }
    `,
};
