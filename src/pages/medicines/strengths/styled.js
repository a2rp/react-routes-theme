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

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
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
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Filters: styled.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.3fr 1fr 1fr 0.8fr 0.4fr;
            }
        }

        label {
            display: block;
            margin-bottom: 6px;
            color: ${muted};
            font-size: 12px;
        }

        input,
        select {
            width: 100%;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        input:focus,
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .pills {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .pill:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .pill.active {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        align-items: start;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            .sub {
                color: ${muted};
                font-size: 12px;
                margin-left: 10px;
            }
            .legend {
                display: none;
                gap: 8px;
            }
            @media (min-width: 1100px) {
                .legend {
                    display: flex;
                }
            }
        }

        .tableWrap {
            border: 1px solid ${border};
            border-radius: 12px;
            overflow: auto;
            background: ${card};
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
        }

        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${text};
            text-align: left;
            border-bottom: 1px solid ${border};
            padding: 12px 14px;
            font-weight: 600;
        }

        tbody td {
            border-top: 1px solid ${border};
            padding: 12px 14px;
            vertical-align: top;
        }

        tbody tr:hover td {
            background: color-mix(in oklab, ${accent} 7%, transparent);
        }

        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            cursor: pointer;
            user-select: none;
        }
        .chip.legendItem {
            cursor: default;
        }

        .molecule .muted {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .brandCell {
            display: grid;
            gap: 6px;
        }
        .brandCell .count {
            font-weight: 600;
        }
        .brandCell .examples {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .brandCell .example {
            border: 1px dashed ${border};
            padding: 2px 6px;
            border-radius: 6px;
            color: ${muted};
        }

        .rowActions {
            display: flex;
            gap: 10px;
        }
        .linkBtn {
            background: transparent;
            border: none;
            color: ${accent};
            cursor: pointer;
            padding: 0;
            font-weight: 700;
            border-bottom: 1px dashed transparent;
        }
        .linkBtn:hover {
            border-bottom-color: ${accent};
        }

        .empty {
            display: grid;
            place-items: center;
            padding: 40px 0;
            color: ${muted};
            gap: 8px;
        }
        .empty .icon {
            font-size: 24px;
        }

        /* right column cards */
        .side {
            display: grid;
            gap: 16px;
        }
        .info p {
            margin: 8px 0 12px;
        }
        .info .bullets {
            margin: 0 0 12px 18px;
            color: ${muted};
        }
        .info .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .info .links a {
            color: ${muted};
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 8px;
            border-radius: 8px;
        }
        .info .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .callout {
            border: 1px solid ${border};
        }
        .callout h3 {
            margin-bottom: 8px;
        }
        .callout p {
            color: ${text};
        }

        .toast {
            position: sticky;
            bottom: 10px;
            padding: 10px 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 14%, transparent);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
    `,
};
