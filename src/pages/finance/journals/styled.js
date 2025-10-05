import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        padding: 20px;
        color: ${text};
    `,

    Head: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 16px;

        .left {
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                margin-bottom: 6px;
                font-size: 12px;
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
                .sep {
                    opacity: 0.6;
                }
                .current {
                    color: ${text};
                }
            }
            h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                letter-spacing: 0.3px;
                margin-bottom: 6px;
            }
            .meta {
                color: ${muted};
                font-size: 12px;
            }
        }

        .right {
            display: grid;
            gap: 10px;
            align-content: start;

            .quicklinks {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: flex-end;
                .chip {
                    background: ${card};
                    border: 1px solid ${border};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .chip:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
            }

            .actions {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${border};
                    padding: 8px 12px;
                    border-radius: 10px;
                    cursor: pointer;
                    background: ${card};
                    color: ${text};
                    transition: border-color 0.25s, color 0.25s,
                        background 0.25s;
                }
                .btn.ghost:hover {
                    border-color: ${accent};
                    color: ${accent};
                }
                .btn.primary {
                    border-color: ${accent};
                }
                .btn.primary:hover {
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                .btn[data-disabled="true"] {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
            }
        }
    `,

    MetricRow: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 12px;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
        }
        .label {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 2px;
        }
        .sub {
            color: ${muted};
            font-size: 12px;
        }
        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    TabBar: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        background: ${card};
        border: 1px solid ${border};
        padding: 8px;
        border-radius: 10px;
        margin-bottom: 12px;

        .tab {
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${muted};
            border: 1px solid transparent;
        }
        .tab:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .tab.active {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .spacer {
            flex: 1;
        }

        .search {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px dashed ${border};
            padding: 6px 10px;
            border-radius: 8px;
            color: ${muted};
            input {
                background: transparent;
                border: none;
                color: ${muted};
                outline: none;
                width: 180px;
            }
        }
    `,

    TableWrap: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 12px 14px;
            color: ${accent};
            font-weight: 600;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.05);
        }
        .num {
            text-align: right;
        }

        .link-strong {
            color: ${text};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .link-strong:hover {
            color: ${accent};
        }
        .icon-open {
            opacity: 0.7;
        }

        .date {
            font-weight: 600;
        }
        .time {
            color: ${muted};
            font-size: 12px;
        }

        .ref {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }
        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 11px;
            border: 1px solid ${border};
            color: ${muted};
            background: rgba(255, 255, 255, 0.02);
        }
        .ref-link {
            color: ${text};
        }
        .ref-link:hover {
            color: ${accent};
        }

        .accounts {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .account-chip {
            font-size: 12px;
            border: 1px solid ${border};
            padding: 3px 8px;
            border-radius: 999px;
            color: ${muted};
        }
        .account-chip:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .status {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: rgba(255, 255, 255, 0.02);
            color: ${muted};
        }
        .status.posted {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .status.draft {
            color: ${muted};
            border-color: ${border};
            background: rgba(255, 255, 255, 0.03);
        }
        .status.reversed {
            color: #ff8b5a;
            border-color: rgba(255, 139, 90, 0.45);
            background: rgba(255, 139, 90, 0.12);
        }

        .row-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .btn.tiny {
            padding: 4px 8px;
            font-size: 12px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
        }
        .btn.tiny:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .legend {
            padding: 10px 14px;
            display: flex;
            gap: 8px;
            align-items: center;
            background: rgba(0, 0, 0, 0.04);
        }
    `,

    FooterBar: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        padding: 12px;
        margin-top: 12px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 10px;

        .pages {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${muted};
            a {
                color: ${muted};
                border: 1px solid ${border};
                border-radius: 6px;
                padding: 4px 8px;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
            .divider {
                opacity: 0.6;
            }
        }
        .rightlinks {
            display: flex;
            align-items: center;
            gap: 12px;
            .footlink {
                color: ${muted};
            }
            .footlink:hover {
                color: ${accent};
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 40;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(2px);
        }
        .content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(520px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 18px;
        }
        h3 {
            margin-bottom: 8px;
            font-family: "Antonio", sans-serif;
        }
        p {
            color: ${muted};
            margin-bottom: 14px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 10px;
            background: ${card};
            color: ${text};
            cursor: pointer;
        }
        .btn.primary {
            border-color: ${accent};
        }
        .btn.primary:hover {
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
