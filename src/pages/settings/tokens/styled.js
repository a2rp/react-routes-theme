import styled from "styled-components";

/* CSS variable tokens with safe fallbacks */
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

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .ghost {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        .ghost.small {
            padding: 4px 8px;
            font-size: 12px;
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            a {
                color: ${muted};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }
            span[aria-current="page"] {
                color: ${text};
            }
        }

        .pageHead {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: start;

            .titleBlock {
                .titleLine {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }
                h1 {
                    font-size: 24px;
                    line-height: 1.2;
                }
                .titleIcon {
                    opacity: 0.9;
                }
                .badge {
                    font-size: 12px;
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${border};
                    background: ${"color-mix(in oklab, " +
                    accent +
                    " 12%, transparent)"};
                    color: ${accent};
                }
                .subtle {
                    color: ${muted};
                    margin-top: 6px;
                }
            }

            .actions {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }
        }

        .quickNav {
            display: grid;
            grid-template-columns: repeat(8, minmax(160px, 1fr));
            gap: 8px;
            a {
                border: 1px solid ${border};
                background: ${card};
                border-radius: 10px;
                padding: 8px 10px;
                text-decoration: none;
                color: ${muted};
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
            @media (max-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
            }
            @media (max-width: 800px) {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(3, minmax(220px, 1fr));
            gap: 12px;

            .kpiCard {
                display: grid;
                grid-template-columns: 44px 1fr;
                align-items: center;
                gap: 12px;
                padding: 12px;
                border-radius: 12px;
                border: 1px solid ${border};
                background: ${card};
                box-shadow: ${shadow};
            }
            .kpiIcon {
                width: 44px;
                height: 44px;
                border-radius: 10px;
                display: grid;
                place-items: center;
                border: 1px solid ${border};
                background: ${"color-mix(in oklab, " +
                accent +
                " 10%, transparent)"};
                color: ${accent};
                font-size: 18px;
            }
            .kpiMeta .kpiValue {
                font-weight: 700;
            }
            .kpiMeta .kpiLabel {
                color: ${muted};
                font-size: 12px;
                margin-top: 2px;
            }

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .searchBox input {
                width: 100%;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 10px 12px;
                border-radius: 10px;
                outline: none;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            .searchBox input::placeholder {
                color: ${muted};
            }
            .searchBox input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }

            .helperLinks {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                justify-content: flex-end;
                flex-wrap: wrap;
                a.ghost {
                    border-radius: 8px;
                }
            }
        }

        .tableWrap {
            padding: 12px;

            .tableHead {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                padding: 6px 4px 12px 4px;
                h3 {
                    font-size: 16px;
                }
                .hint {
                    color: ${muted};
                    font-size: 12px;
                }
            }

            .tableScroller {
                overflow: auto;
                border: 1px solid ${border};
                border-radius: 10px;
                background: ${"color-mix(in oklab, " +
                card +
                " 96%, transparent)"};
            }

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                text-align: left;
                padding: 10px;
                background: ${card};
                border-bottom: 1px solid ${border};
                color: ${accent};
                position: sticky;
                top: 0;
                z-index: 1;
            }
            tbody td {
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

            .rowActions {
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .linkBtn {
                background: transparent;
                border: none;
                color: ${muted};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                padding: 0;
            }
            .linkBtn:hover {
                color: ${accent};
            }

            .scopeChips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                .chip {
                    font-size: 12px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    padding: 2px 8px;
                    color: ${muted};
                    background: ${"color-mix(in oklab, " +
                    accent +
                    " 8%, transparent)"};
                }
            }

            .status {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                font-size: 12px;
            }
            .status.active {
                color: ${accent};
                background: ${"color-mix(in oklab, " +
                accent +
                " 12%, transparent)"};
            }
            .status.revoked {
                color: ${muted};
                background: rgba(0, 0, 0, 0.08);
            }

            .mutedRow td {
                color: ${muted};
            }
            .empty {
                display: flex;
                gap: 8px;
                align-items: center;
                padding: 10px;
                color: ${muted};
            }
        }

        .relatedRoutes {
            display: grid;
            grid-template-columns: repeat(3, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 12px;

            .rrCol {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 12px;
                background: ${card};
                box-shadow: ${shadow};
            }
            h4 {
                margin-bottom: 8px;
            }
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li + li {
                margin-top: 6px;
            }
            a {
                color: ${muted};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${accent};
                border-bottom-color: ${accent};
            }
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        /* Toasts */
        .toasts {
            position: fixed;
            right: 16px;
            bottom: 16px;
            display: grid;
            gap: 8px;
            z-index: 50;
        }
        .toast {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            box-shadow: ${shadow};
        }

        /* Modal */
        .modalRoot {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modalCard {
            width: min(680px, 96vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            overflow: hidden;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            h4 {
                font-size: 16px;
            }
            .iconBtn {
                background: transparent;
                color: ${muted};
                border: 1px solid ${border};
                border-radius: 8px;
                width: 34px;
                height: 34px;
                display: grid;
                place-items: center;
                cursor: pointer;
            }
            .iconBtn:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
        .modalBody {
            padding: 12px;
            color: ${text};
        }
        .modalBody .callout {
            margin-top: 8px;
            border: 1px dashed ${border};
            padding: 8px;
            border-radius: 8px;
            color: ${muted};
            background: ${"color-mix(in oklab, " +
            accent +
            " 6%, transparent)"};
        }
        .modalFoot {
            padding: 10px 12px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `,
};
