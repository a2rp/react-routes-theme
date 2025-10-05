import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    color: ${text};
`;

export const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${card};
    border: 1px solid ${border};
    padding: 12px 14px;
    border-radius: 12px;
    box-shadow: ${shadow};

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        .crumb {
            color: ${muted};
        }
        .crumb.current {
            color: ${text};
            font-weight: 600;
        }
        .sep {
            color: ${muted};
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button,
        a {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease, transform 0.05s ease;
        }
        button.primary {
            border-color: ${accent};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        button:hover:not(:disabled),
        a:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        a.ghost,
        button.ghost {
            opacity: 0.9;
        }
        .danger {
            border-color: #b23b3b;
        } /* subtle, not green */
    }
`;

export const Kpis = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(120px, 1fr));
    gap: 10px;

    .kpi {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        box-shadow: ${shadow};
        display: flex;
        flex-direction: column;
        gap: 6px;

        .label {
            color: ${muted};
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
        }
        .value.small {
            font-size: 12px;
            color: ${text};
            font-weight: 500;
        }
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Filters = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 12px;

    .row {
        display: flex;
        gap: 10px;
        align-items: center;
        flex-wrap: wrap;
        & + .row {
            margin-top: 10px;
        }
    }

    input[type="text"] {
        flex: 1;
        min-width: 260px;
        border: 1px solid ${border};
        background: ${bg};
        color: ${text};
        padding: 10px 12px;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.25s ease, box-shadow 0.25s ease;
        &::placeholder {
            color: ${muted};
        }
        &:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .status {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .chip.active {
            border-color: ${accent};
            color: ${accent};
        }
    }

    .secondary {
        .hint {
            color: ${muted};
            margin-right: 6px;
        }
        .mini {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 6px;
            text-decoration: none;
            color: ${text};
        }
        .mini:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 84px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid ${border};
    font-size: 12px;
    letter-spacing: 0.2px;
    background: rgba(255, 255, 255, 0.02);

    &[data-type="approved"] {
        border-color: ${accent};
        color: ${accent};
    }
    &[data-type="draft"] {
        color: #b0b0b7;
    }
    &[data-type="archived"] {
        color: #b23b3b;
    }
`;

export const TableWrap = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    overflow: hidden;

    .thead,
    .tfoot {
        background: ${bg};
        border-bottom: 1px solid ${border};
    }

    .tr {
        display: grid;
        grid-template-columns: 180px 1fr 110px 120px 100px 130px 220px 220px 1fr;
        gap: 0;
        align-items: center;
        min-height: 52px;
        border-bottom: 1px solid ${border};
        padding: 0 10px;
    }

    .th {
        font-weight: 700;
        color: ${accent};
        padding: 10px;
    }

    .td {
        padding: 10px;
        color: ${text};
        .muted {
            color: ${muted};
        }
    }

    .td.code a {
        font-weight: 700;
        text-decoration: none;
        color: ${text};
    }
    .td.code a:hover {
        color: ${accent};
        text-decoration: underline;
    }

    .td.product .sub {
        font-size: 12px;
        color: ${muted};
        margin-top: 2px;
    }

    .td.actions {
        display: inline-flex;
        gap: 10px;
        flex-wrap: wrap;
        a,
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.05s ease;
        }
        a:hover,
        button:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .danger {
            border-color: #b23b3b;
        }
    }

    .tbody .tr:hover {
        background: rgba(255, 255, 255, 0.02);
    }

    .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 10px;
        .emptyCard {
            border: 1px solid ${border};
            background: ${card};
            padding: 18px;
            border-radius: 12px;
            text-align: center;
            box-shadow: ${shadow};
            h3 {
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
                margin-bottom: 10px;
            }
            .row {
                display: flex;
                gap: 8px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .row > * {
                border: 1px solid ${border};
                background: ${bg};
                color: ${text};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
            }
            .row > *:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }

    .tfoot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        .pager {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .pager button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 4px 8px;
            border-radius: 6px;
        }
        .pager button:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .pager button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .pageInfo {
            color: ${muted};
            padding: 0 8px;
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${muted};
        }
        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${border};
        }
        .dot.a {
            border-color: ${accent};
        }
        .dot.d {
            border-color: #b0b0b7;
        }
        .dot.r {
            border-color: #b23b3b;
        }
    }

    @media (max-width: 1280px) {
        .tr {
            grid-template-columns: 140px 1fr 90px 110px 90px 110px 200px 200px 1fr;
        }
    }
    @media (max-width: 1024px) {
        .tr {
            grid-template-columns: 140px 1fr 90px 110px 90px 110px 200px 1fr;
        }
        .tr .td.actions {
            grid-column: span 2;
        }
    }
    @media (max-width: 860px) {
        .thead {
            display: none;
        }
        .tr {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            padding: 10px;
        }
        .td,
        .th {
            padding: 6px;
        }
        .td.product {
            grid-column: 1 / span 2;
        }
        .td.actions {
            grid-column: 1 / span 2;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 60;
    .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .card {
        position: relative;
        z-index: 1;
        max-width: 520px;
        width: calc(100% - 24px);
        margin: 10vh auto 0;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        box-shadow: ${shadow};
        padding: 16px;

        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
            margin-bottom: 14px;
        }

        .meta {
            display: grid;
            grid-template-columns: 120px 1fr;
            border: 1px dashed ${border};
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 12px;
            .label {
                color: ${muted};
            }
            .value {
                font-weight: 700;
            }
        }

        .buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        .buttons > * {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            text-decoration: none;
        }
        .buttons > *:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;
