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
        padding: 24px 0 64px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
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
            align-items: center;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost:disabled,
        .btnPrimary:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .small {
            padding: 6px 10px;
        }

        .viewToggle {
            display: flex;
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
        }
        .viewToggle .small {
            border: 0;
        }
        .viewToggle .btnGhost.small {
            background: transparent;
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Toolbar: styled.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            @media (min-width: 900px) {
                grid-template-columns: 1.2fr 0.6fr 0.6fr;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            cursor: pointer;
            background: color-mix(in oklab, ${accent} 7%, transparent);
            user-select: none;
        }
        .chip.active {
            box-shadow: 0 0 0 3px ${accentSoft};
            border-color: ${accent};
            color: ${accent};
        }
        .chip.clear {
            opacity: 0.85;
        }
    `,

    GridCards: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1140px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .category {
            padding: 0;
            overflow: hidden;
            .cover {
                width: 100%;
                height: 140px;
                background: ${card};
                background-size: cover;
                background-position: center;
                border-bottom: 1px solid ${border};
            }
            .body {
                padding: 12px 14px 8px;
                .topline {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                }
                .name {
                    font-size: 16px;
                }
                .status {
                    font-size: 12px;
                    border: 1px solid ${border};
                    padding: 2px 8px;
                    border-radius: 999px;
                    color: ${muted};
                    text-transform: capitalize;
                }
                .status.active {
                    color: ${text};
                    border-color: ${accent};
                }
                .meta {
                    display: flex;
                    gap: 8px;
                    color: ${muted};
                    font-size: 12px;
                    margin-top: 6px;
                }
                .code {
                    font-family: Menlo, Consolas, monospace;
                    font-size: 12px;
                }
                .path {
                    color: ${muted};
                    margin-top: 6px;
                    font-size: 12px;
                }
                .tags {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    margin-top: 10px;
                }
                .tag {
                    border: 1px solid ${border};
                    padding: 4px 8px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .dates {
                    margin-top: 10px;
                    color: ${muted};
                    font-size: 12px;
                }
            }
            .actions {
                display: flex;
                gap: 8px;
                padding: 10px 14px 14px;
            }
            .btnGhost.small {
                border-radius: 8px;
                padding: 6px 10px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .btnGhost.small:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
    `,

    TableWrap: styled.div`
        overflow: auto;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
            color: ${accent};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        .cellName {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            background: ${card};
            background-size: cover;
            background-position: center;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        .name {
            font-weight: 600;
        }
        .path {
            color: ${muted};
            font-size: 12px;
        }
        .code {
            font-family: Menlo, Consolas, monospace;
            font-size: 12px;
        }
        .num {
            text-align: right;
        }
        .pill {
            font-size: 12px;
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${muted};
            text-transform: capitalize;
        }
        .pill.active {
            color: ${text};
            border-color: ${accent};
        }
        .actions {
            display: flex;
            gap: 6px;
        }
        .btnGhost.tiny {
            border-radius: 8px;
            padding: 4px 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost.tiny:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Empty: styled.div`
        text-align: center;
        padding: 28px 16px;
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
        }
    `,
    EmptyPad: styled.div`
        text-align: center;
        padding: 24px 8px;
        h4 {
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
        }
    `,

    Footnote: styled.div`
        display: flex;
        gap: 16px;
        margin-top: 12px;
        color: ${muted};
        font-size: 12px;
    `,
};
