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
        padding: 20px 0 64px;
        color: ${text};

        .muted {
            color: ${muted};
        }

        .breadcrumbs {
            display: inline-flex;
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
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }

        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnGhost,
        .btnPrimary,
        .btnDisabled {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Metrics: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        @media (min-width: 1000px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .metric {
            padding: 14px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: ${card};
            box-shadow: var(--shadow);
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 4px;
        }
        .s {
            margin-top: 2px;
            color: ${muted};
            font-size: 12px;
        }
    `,

    Tools: styled.section`
        padding: 12px 14px;
        margin-top: 16px;
        margin-bottom: 12px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};

        .row {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }

        .search {
            flex: 1 1 280px;
            min-width: 260px;
        }
        .search input {
            width: 100%;
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .quick {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .quick .label {
            color: ${muted};
            font-size: 12px;
            margin-right: 2px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    TableWrap: styled.section`
        padding: 0;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        overflow: hidden;

        .tableMeta {
            padding: 12px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${border};
            color: ${muted};
            font-size: 12px;
            .legend {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                display: inline-block;
                border: 1px solid ${border};
            }
            .dot.open {
                background: color-mix(in oklab, ${accent} 40%, transparent);
            }
            .dot.adjusted {
                background: color-mix(in oklab, ${accent} 20%, transparent);
            }
            .dot.void {
                background: color-mix(in oklab, ${danger} 30%, transparent);
            }
        }

        .tableScroller {
            overflow: auto;
        }

        table.grid {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            line-height: 1.6;
            th,
            td {
                padding: 12px;
                border-bottom: 1px solid ${border};
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${card};
                z-index: 1;
                text-align: left;
            }
            th.right,
            td.right {
                text-align: right;
            }

            tbody tr:hover {
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            tbody tr.empty:hover {
                background: transparent;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .status {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 999px;
                font-weight: 600;
                font-size: 12px;
                border: 1px solid ${border};
                background: color-mix(in oklab, ${accent} 10%, transparent);
                color: ${text};
            }
            .status.adjusted {
                background: color-mix(in oklab, ${accent} 6%, transparent);
            }
            .status.void {
                background: color-mix(in oklab, ${danger} 8%, transparent);
                border-color: color-mix(in oklab, ${danger} 30%, ${border});
            }

            .actions {
                white-space: nowrap;
            }
            .link {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                color: ${accent};
                text-decoration: none;
                font-weight: 600;
            }
            .link:hover {
                text-decoration: underline;
            }
            .link.disabled {
                opacity: 0.5;
                cursor: not-allowed;
                text-decoration: none;
            }
        }

        .emptyWrap {
            text-align: center;
            padding: 30px 10px;
        }
        .emptyWrap .title {
            font-weight: 700;
        }
        .emptyWrap .sub {
            color: ${muted};
            margin-top: 6px;
        }
    `,

    // modal
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    Modal: styled.div`
        width: min(520px, 92vw);
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
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
