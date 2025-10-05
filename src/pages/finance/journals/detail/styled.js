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
        color: ${text};
        width: 100%;
        padding: 16px;

        .topbar {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;

            .crumbs {
                a {
                    color: ${muted};
                }
                a:hover {
                    color: ${accent};
                }
                .current {
                    color: ${text};
                }
            }

            .quick-tabs {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                .tab {
                    padding: 6px 10px;
                    border: 1px solid ${border};
                    border-radius: 8px;
                    background: ${card};
                    color: ${muted};
                    text-decoration: none;
                }
                .tab:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                .tab.active {
                    color: ${accent};
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;

            .title {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
                h1 {
                    font-family: "Antonio", sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                    font-weight: 600;
                }
            }

            .actions {
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;

                button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    border-radius: 8px;
                    cursor: pointer;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease,
                        color 0.2s ease, background 0.2s ease;
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
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

                .sep {
                    width: 1px;
                    height: 24px;
                    background: ${border};
                    margin: 0 4px;
                }
            }
        }

        .inline-banner {
            margin: 12px 0;
            background: color-mix(in oklab, ${accent} 12%, transparent);
            border: 1px dashed ${accent};
            color: ${text};
            border-radius: 10px;
            padding: 10px 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }

        .voucher {
            .voucher-head {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 12px;
                .brand h2 {
                    font-family: "Antonio", sans-serif;
                    letter-spacing: 0.5px;
                }
                .sub {
                    color: ${muted};
                    .mono {
                        font-family: ui-monospace, Menlo, Consolas, monospace;
                    }
                }
                .meta {
                    display: grid;
                    gap: 6px;
                    .k {
                        color: ${muted};
                        margin-right: 8px;
                    }
                    .v {
                    }
                }
            }

            .lines {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
                thead th {
                    text-align: left;
                    padding: 10px;
                    border-bottom: 1px solid ${border};
                    position: sticky;
                    top: 0;
                    background: ${card};
                    z-index: 1;
                }
                tbody td,
                tfoot td {
                    padding: 10px;
                    border-bottom: 1px solid ${border};
                    vertical-align: top;
                }
                tbody tr:hover {
                    background: rgba(0, 0, 0, 0.06);
                }
                .right {
                    text-align: right;
                }
                .strong {
                    font-weight: 600;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                }
                .account {
                    color: ${text};
                    text-decoration: none;
                }
                .account:hover {
                    color: ${accent};
                }
                .account .ext {
                    margin-left: 6px;
                    opacity: 0.7;
                }
                .pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid ${border};
                }
                .pill.deb {
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
                .pill.cre {
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
            }

            .notes {
                margin-top: 12px;
                .k {
                    font-weight: 600;
                    color: ${muted};
                    margin-bottom: 4px;
                }
                p {
                    color: ${text};
                }
            }

            .voucher-foot {
                margin-top: 14px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                .sig {
                    border: 1px dashed ${border};
                    border-radius: 10px;
                    padding: 10px;
                }
                .k {
                    color: ${muted};
                    margin-bottom: 4px;
                }
                .v {
                    font-weight: 600;
                }
            }
            @media (max-width: 900px) {
                .voucher-foot {
                    grid-template-columns: 1fr;
                }
            }
        }

        .side {
            display: grid;
            gap: 16px;

            .meta .grid2 {
                margin-top: 8px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                .k {
                    color: ${muted};
                    display: block;
                }
                .v {
                    display: block;
                }
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                }
            }
            .meta .row {
                display: flex;
                justify-content: space-between;
                gap: 8px;
                margin-top: 8px;
                .k {
                    color: ${muted};
                }
            }

            .related .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 8px;
            }
            .related .chip {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 10%, transparent);
                color: ${text};
                text-decoration: none;
                .mono {
                    font-family: ui-monospace, Menlo, Consolas, monospace;
                    opacity: 0.8;
                }
            }
            .related .links {
                display: grid;
                gap: 6px;
            }
            .related a {
                color: ${text};
                text-decoration: none;
            }
            .related a:hover {
                color: ${accent};
            }

            .quick {
                display: flex;
                gap: 8px;
                margin-top: 8px;
                flex-wrap: wrap;
            }
            .ghost {
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
                background: transparent;
                color: ${muted};
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .ghost:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .small {
                font-size: 12px;
            }

            .attach ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .attach li {
                display: grid;
                grid-template-columns: 1fr auto auto;
                gap: 8px;
                align-items: center;
            }
            .attach .file {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .activity ol {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 12px;
            }
            .activity li {
                display: grid;
                grid-template-columns: 12px 1fr;
                gap: 10px;
            }
            .activity .dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${accent};
                margin-top: 6px;
            }
            .activity .evt .line {
                font-weight: 500;
            }
            .activity .evt .meta {
                margin-top: 2px;
            }
        }

        .status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 2px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-size: 12px;
            font-weight: 600;
            &.ok {
                background: color-mix(in oklab, ${accent} 15%, transparent);
            }
            &.warn {
                background: color-mix(in oklab, ${accent} 15%, transparent);
            }
            &.muted {
                color: ${muted};
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 1000;

        .panel {
            width: min(640px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        .head {
            padding: 12px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${border};
            h3 {
                margin: 0;
            }
            .icon {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                border-radius: 8px;
                width: 34px;
                height: 34px;
                display: grid;
                place-items: center;
                cursor: pointer;
            }
            .icon:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
        .body {
            padding: 14px;
            color: ${text};
        }
        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                cursor: pointer;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .ghost {
                background: transparent;
            }
            .danger {
            }
        }
    `,
};
