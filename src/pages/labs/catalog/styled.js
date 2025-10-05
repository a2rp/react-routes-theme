import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.main`
        color: ${text};
        width: 100%;
        padding: 16px;

        .muted {
            color: ${muted};
        }

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 10px;
            a {
                color: ${text};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }
            span {
                color: ${muted};
            }
        }

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;

            h1 {
                margin: 0;
            }
            .actions {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            .seg {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 10px;
                display: inline-flex;
                padding: 4px;
            }
            .seg-btn {
                border: 1px solid transparent;
                background: transparent;
                color: ${text};
                padding: 6px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            .seg-btn.active {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }

            .toolbar {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                input {
                    width: 320px;
                    max-width: 40vw;
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    border-radius: 8px;
                    padding: 8px 12px;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                input:focus {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                button {
                    background: ${card};
                    border: 1px solid ${border};
                    color: ${text};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                button:hover {
                    border-color: ${accent};
                    color: ${accent};
                    background: rgba(0, 0, 0, 0.06);
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
        }
        .kpi .kpi-title {
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .kpi .kpi-value {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 6px;
            font-family: "Antonio", sans-serif;
        }
        .kpi .kpi-foot a {
            color: ${accent};
            text-decoration: none;
            font-size: 12px;
        }
        .kpi .kpi-foot a:hover {
            text-decoration: underline;
        }

        .tableWrap {
            margin-top: 8px;
        }
        .tableHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin: 12px 2px;
            h2 {
                margin: 0;
            }
        }

        .table {
            overflow: hidden;
            padding: 0;
        }
        .table .thead,
        .table .row {
            display: grid;
            grid-template-columns: 140px 1.3fr 1fr 1fr 1fr 100px 120px 100px 140px 340px;
            gap: 8px;
            align-items: center;
        }
        .table .thead {
            position: sticky;
            top: 0;
            z-index: 2;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 10px 12px;
            color: ${accent};
            font-weight: 600;
        }
        .table .tbody .row {
            padding: 10px 12px;
            border-top: 1px solid ${border};
        }
        .table .tbody .row:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .cell .name {
            font-weight: 600;
        }
        .cell .sub {
            font-size: 12px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }
        .pill.off {
            opacity: 0.7;
        }

        .cell.actions {
            display: inline-flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btn.ghost {
            background: transparent;
        }

        .code a {
            color: ${text};
            text-decoration: none;
        }
        .code a:hover {
            color: ${accent};
        }

        .panelsWrap .grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(280px, 1fr));
            gap: 12px;
        }
        .panel header {
            display: grid;
            gap: 4px;
        }
        .panel header .pid {
            font-size: 12px;
            color: ${muted};
        }
        .panel .meta {
            display: grid;
            gap: 6px;
            margin: 8px 0;
        }
        .panel .meta .label {
            display: inline-block;
            width: 120px;
            color: ${muted};
            font-size: 12px;
        }
        .panel .tests .label {
            color: ${muted};
            font-size: 12px;
        }
        .panel .tests ul {
            margin: 6px 0 0 18px;
            display: grid;
            gap: 4px;
        }
        .panel .cta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .quicknav {
            display: grid;
            grid-template-columns: 2fr 1.2fr 1fr;
            gap: 12px;
            margin-top: 16px;
            margin-bottom: 20px;
        }
        .quicknav .links {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            a {
                text-decoration: none;
                color: ${text};
            }
            a:hover {
                color: ${accent};
            }
        }
        .mini {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .chips {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }

        /* Modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            display: grid;
            place-items: center;
            z-index: 9999;
        }
        .modalCard {
            width: min(520px, 96vw);
        }
        .modalCard h3 {
            margin-top: 0;
        }
        .modalActions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
    `,
};
