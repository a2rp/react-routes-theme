import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 24px 0 64px;

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

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
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
        .btnGhost,
        .btnDanger,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnDisabled:hover {
            border-color: ${border};
            color: ${text};
            box-shadow: none;
        }
        .actions a {
            color: inherit;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1000px) {
            grid-template-columns: 2fr 1fr;
        }
        .col.main.card {
            padding: 0;
            overflow: hidden;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: var(--shadow);
        }
        .sticky {
            position: sticky;
            top: 16px;
            padding: 14px;
        }
    `,

    Toolbar: styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${border};

        .search {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
            gap: 8px;
            svg {
                opacity: 0.8;
            }
            input {
                width: 100%;
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 10px 12px 10px 10px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input::placeholder {
                color: ${muted};
            }
            input:focus {
                border-color: ${accent};
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .filters {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            .seg {
                display: inline-flex;
                border: 1px solid ${border};
                border-radius: 10px;
                overflow: hidden;
                button {
                    background: ${card};
                    color: ${text};
                    padding: 8px 10px;
                    border: 0;
                    cursor: pointer;
                    font-weight: 600;
                }
                button + button {
                    border-left: 1px solid ${border};
                }
                .segActive {
                    color: ${accent};
                    background: color-mix(in oklab, ${accent} 12%, transparent);
                }
                button:focus-visible {
                    outline: none;
                    box-shadow: inset 0 0 0 3px ${accentSoft};
                }
            }
        }
    `,

    TableWrap: styled.div`
        padding: 0;
        margin: 0;

        table.todos {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${accent};
            text-align: left;
            border-bottom: 1px solid ${border};
            padding: 10px 12px;
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr {
            transition: background 0.2s;
            cursor: pointer;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }
        tbody tr.active {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .titleCell {
            font-weight: 600;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .tags .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            margin-right: 6px;
            display: inline-block;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .status.open {
            color: ${accent};
        }
        .status.done {
            color: ${muted};
        }

        .pri {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .pri.high {
            box-shadow: inset 0 0 0 1px ${accent};
        }
        .pri.medium {
            opacity: 0.9;
        }
        .pri.low {
            opacity: 0.8;
        }

        .empty {
            text-align: center;
            padding: 32px 16px;
            color: ${muted};
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 6px;
            color: ${text};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    Modal: styled.div`
        width: min(560px, 92vw);
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `,

    // details card content in aside
    Details: styled.div``,

    // side "Details" card internal styles (co-located in Grid side .card)
    // placed as global classnames within the component structure
};
