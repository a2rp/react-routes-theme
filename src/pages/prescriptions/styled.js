import styled from "styled-components";

/* tokens from global CSS variables with safe fallbacks */
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
        width: 100%;
        color: ${text};
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 12px;
    `,

    HeaderBar: styled.header`
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 16px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 14px 16px;
        box-shadow: ${shadow};

        h2 {
            font-size: 22px;
            margin: 0 0 4px 0;
            line-height: 1.2;
        }

        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            padding: 2px 8px;
            background: color-mix(in oklab, ${accent} 14%, transparent);
            border: 1px solid ${border};
            border-radius: 999px;
            color: ${text};
        }

        .quicklinks {
            display: flex;
            gap: 10px;
            a {
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                text-decoration: none;
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
            }
            a.active {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            button {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            button[aria-disabled="true"] {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,

    Filters: styled.section`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "search status"
            "hints hints";
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};

        .search {
            grid-area: search;
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            border-radius: 10px;
            padding: 8px 10px;
            svg {
                opacity: 0.9;
            }
            input {
                flex: 1;
                background: transparent;
                color: ${text};
                border: none;
                outline: none;
                font-size: 13px;
            }
            .clear {
                border: 1px solid ${border};
                background: transparent;
                color: ${muted};
                border-radius: 6px;
                padding: 4px 6px;
            }
            .clear:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .statuses {
            grid-area: status;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button {
                padding: 6px 10px;
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                border-radius: 8px;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button.active {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .hints {
            grid-area: hints;
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            color: ${muted};
            font-size: 12px;
            svg {
                vertical-align: middle;
                margin-right: 4px;
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "search"
                "status"
                "hints";
        }
    `,

    TableWrap: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        overflow: auto;

        table.rx {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;

            thead th {
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${card} 98%, transparent);
                color: ${text};
                text-align: left;
                padding: 12px;
                border-bottom: 1px solid ${border};
                z-index: 1;
            }

            tbody td {
                padding: 12px;
                border-bottom: 1px solid ${border};
                vertical-align: top;
            }

            tbody tr:hover {
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }

            .idlink {
                text-decoration: none;
                border: 1px dashed ${border};
                padding: 2px 6px;
                border-radius: 6px;
            }
            .idlink:hover {
                border-color: ${accent};
                color: ${accent};
            }

            .entity {
                text-decoration: none;
            }
            .entity:hover {
                color: ${accent};
            }

            .muted {
                color: ${muted};
                font-size: 12px;
            }

            ul.items {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 2px;
            }
            .pill {
                text-decoration: none;
                border-bottom: 1px dotted ${border};
            }
            .pill:hover {
                color: ${accent};
                border-color: ${accent};
            }

            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                font-size: 11px;
                padding: 2px 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: color-mix(in oklab, ${card} 92%, transparent);
            }

            .status {
                padding: 4px 10px;
                border-radius: 999px;
                border: 1px solid ${border};
                font-size: 12px;
                display: inline-block;
                background: color-mix(in oklab, ${card} 94%, transparent);
            }
            .status.issued {
            }
            .status.dispensed {
            }
            .status.partially-dispensed {
            }
            .status.cancelled {
                opacity: 0.8;
                text-decoration: line-through;
            }

            .right {
                text-align: right;
            }

            .rowactions {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .ghost {
                background: transparent;
                border: 1px solid ${border};
                padding: 6px 8px;
                border-radius: 8px;
                text-decoration: none;
                color: ${text};
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .ghost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .ghost.danger:hover {
                color: #e35a5a;
                border-color: #e35a5a;
            }
            button.ghost {
                cursor: pointer;
            }
        }
    `,

    Empty: styled.div`
        text-align: center;
        padding: 30px 10px;
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
            margin-bottom: 12px;
        }
        .links {
            display: inline-flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .ghost {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            text-decoration: none;
            color: ${text};
            background: transparent;
        }
        .ghost:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    FooterBar: styled.footer`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};

        .rlinks {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.4);
        z-index: 999;
    `,
    ModalCard: styled.div`
        width: min(460px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 0;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                margin: 0;
                font-size: 16px;
            }
            button {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                border-radius: 8px;
                padding: 6px;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
        .content {
            padding: 14px;
            color: ${text};
        }
        footer {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            button {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                border-radius: 8px;
                padding: 8px 12px;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    `,
};
