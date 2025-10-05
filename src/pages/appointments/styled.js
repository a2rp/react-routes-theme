import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.div`
        padding: 18px 18px 28px;
        color: ${text};

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .breadcrumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                a {
                    color: ${text};
                    opacity: 0.9;
                }
                a:hover {
                    color: ${accent};
                }
                span {
                    opacity: 0.6;
                }
            }
            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .toolLink {
                    text-decoration: none;
                }
                .toolBtn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 9px;
                    box-shadow: none;
                    cursor: pointer;
                    transition: border-color 0.25s, box-shadow 0.25s,
                        transform 0.05s;
                }
                .toolBtn:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                    color: ${accent};
                }
                .toolBtn:active {
                    transform: translateY(1px);
                }
                .toolBtn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .headline {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
            margin-bottom: 14px;
            .titleRow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 12px;
                h1 {
                    font-size: 18px;
                    letter-spacing: 0.3px;
                    display: flex;
                    align-items: center;
                }
                .meta {
                    color: ${muted};
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .dot {
                    opacity: 0.5;
                }
            }
            .statsRow {
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                gap: 10px;
                @media (max-width: 1200px) {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
                @media (max-width: 640px) {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
                .stat {
                    background: color-mix(in oklab, ${card} 92%, transparent);
                    border: 1px solid ${border};
                    border-radius: 10px;
                    padding: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .label {
                        color: ${muted};
                        font-weight: 600;
                    }
                    .value {
                        font-size: 18px;
                        font-weight: 700;
                        color: ${text};
                    }
                }
            }
        }

        .filters {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
            margin-bottom: 12px;
            .search {
                position: relative;
                min-width: 320px;
                flex: 1 1 360px;
                border: 1px solid ${border};
                background: ${card};
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 8px 10px;
                gap: 8px;
                input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: ${text};
                    font-size: 13px;
                }
            }
            .seg {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    border-radius: 18px;
                    padding: 6px 10px;
                    cursor: pointer;
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                button.active {
                    border-color: ${accent};
                    color: ${accent};
                }
            }
            .quicklinks {
                margin-left: auto;
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                a {
                    color: ${text};
                    opacity: 0.9;
                    border-bottom: 1px dotted ${border};
                }
                a:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
            }
        }

        .tableWrap {
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
                text-align: left;
                padding: 12px 14px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                border-bottom: 1px solid ${border};
                position: sticky;
                top: 0;
                z-index: 2;
            }
            tbody td {
                padding: 12px 14px;
                border-bottom: 1px solid ${border};
                vertical-align: top;
            }
            tbody tr:hover {
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }

            .cellTitle {
                display: flex;
                flex-direction: column;
                gap: 4px;
                .id {
                    color: ${text};
                    font-weight: 700;
                }
                .id:hover {
                    color: ${accent};
                }
                .sub {
                    color: ${muted};
                }
            }

            .person {
                display: flex;
                gap: 10px;
                align-items: flex-start;
                .ic {
                    opacity: 0.8;
                    margin-top: 2px;
                }
                .col {
                    display: flex;
                    flex-direction: column;
                }
                .name {
                    color: ${text};
                    font-weight: 600;
                }
                .name:hover {
                    color: ${accent};
                }
                .sub {
                    color: ${muted};
                }
            }

            .when {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .when .date {
                font-weight: 600;
            }
            .when .time {
                display: flex;
                align-items: center;
                gap: 6px;
                color: ${muted};
            }

            .loc {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .tags {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tags .tag {
                border: 1px dashed ${border};
                padding: 2px 8px;
                border-radius: 999px;
                color: ${text};
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .muted {
                color: ${muted};
            }

            .rowActions {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                .link {
                    background: transparent;
                    border: none;
                    color: ${text};
                    cursor: pointer;
                    padding: 0;
                    border-bottom: 1px dotted ${border};
                    text-decoration: none;
                }
                .link:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                .link.danger {
                    color: #e25555;
                    border-color: color-mix(in oklab, #e25555 60%, ${border});
                }
                .iconBtn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 6px;
                    border: 1px solid ${border};
                    background: ${card};
                }
                .iconBtn:hover {
                    color: ${accent};
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                .link:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }

            .status {
                display: inline-flex;
                align-items: center;
                padding: 3px 8px;
                border-radius: 999px;
                font-weight: 600;
                border: 1px solid ${border};
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .status.checked-in {
                background: color-mix(in oklab, ${accent} 16%, transparent);
            }
            .status.completed {
                opacity: 0.85;
            }
            .status.cancelled {
                background: color-mix(in oklab, #e25555 14%, transparent);
                border-color: color-mix(in oklab, #e25555 60%, ${border});
            }
            .status.no-show {
                background: color-mix(in oklab, #b8b8b8 18%, transparent);
                border-color: color-mix(in oklab, #b8b8b8 60%, ${border});
                color: ${text};
            }

            .empty {
                padding: 28px;
                text-align: center;
                color: ${muted};
                .emptyLinks {
                    margin-top: 8px;
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .emptyLinks a {
                    color: ${text};
                    border-bottom: 1px dotted ${border};
                }
                .emptyLinks a:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
            }
        }

        .footerNav {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            margin-top: 10px;
            a {
                color: ${text};
            }
            a:hover {
                color: ${accent};
            }
            .dot {
                opacity: 0.5;
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .card {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(560px, 96vw);
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 16px;
            }
            .icon {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                width: 28px;
                height: 28px;
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
        }
        .body p {
            line-height: 1.7;
        }
        .small {
            color: ${muted};
            font-size: 12px;
        }
        footer {
            padding: 12px 14px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 9px;
                padding: 8px 12px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .danger {
                border-color: color-mix(in oklab, #e25555 60%, ${border});
                color: #e25555;
            }
            .danger:hover {
                box-shadow: 0 0 0 3px
                    color-mix(in oklab, #e25555 30%, transparent);
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,
};
