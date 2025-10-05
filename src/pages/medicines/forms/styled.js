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
        display: grid;
        gap: 16px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        border-radius: 12px;
        border: 1px solid ${border};
        background: ${card};

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
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
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnGhost a,
        .btnPrimary a {
            color: inherit;
            display: inline-flex;
            text-decoration: none;
        }
    `,

    Toolbar: styled.section`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 12px 14px;

        @media (min-width: 980px) {
            grid-template-columns: 1.3fr 1fr 0.8fr 0.7fr auto;
            align-items: center;
        }

        .search input {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            padding: 0 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                border: 1px solid ${border};
                padding: 8px 10px;
                border-radius: 999px;
                color: ${text};
                background: transparent;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    box-shadow 0.25s;
            }
            .chip:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .chip.active {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
        }

        .route {
            label {
                display: block;
                color: ${muted};
                font-size: 12px;
                margin-bottom: 6px;
            }
            select {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                padding: 0 10px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            select:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
        }

        .view .seg {
            display: inline-flex;
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
            button {
                border: none;
                background: transparent;
                color: ${text};
                padding: 8px 12px;
                cursor: pointer;
                transition: background 0.25s, color 0.25s;
            }
            button.active {
                background: color-mix(in oklab, ${accent} 10%, transparent);
                color: ${text};
            }
            button:not(.active):hover {
                color: ${accent};
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    TableWrap: styled.section`
        border: 1px solid ${border};
        border-radius: 12px;
        overflow: hidden;
        background: ${card};

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${card};
            color: ${text};
            border-bottom: 1px solid ${border};
            padding: 12px;
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .titleCell {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .titleCell .title {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .muted {
            color: ${muted};
        }

        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .examples {
            max-width: 360px;
        }

        .rowActions {
            display: inline-flex;
            gap: 8px;
        }
        .linkBtn {
            background: transparent;
            border: 1px solid ${border};
            border-radius: 7px;
            padding: 6px 10px;
            color: ${text};
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .linkBtn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .linkBtn.danger {
            opacity: 0.9;
        }
    `,

    Cards: styled.section`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 14px;

        .grid {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 720px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 1100px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        .cardItem {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
            display: grid;
            gap: 10px;
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            h3 {
                font-size: 16px;
                letter-spacing: 0.2px;
            }
            .pill {
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 4px 8px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .meta {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            .label {
                color: ${muted};
                font-size: 12px;
            }
            .examples ul {
                margin-left: 16px;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .btnGhost {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            .btnGhost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .btnGhost.danger {
                opacity: 0.9;
            }
            .btnGhost:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    `,

    PrintBox: styled.section`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 14px;
        h3 {
            margin-bottom: 8px;
        }
        .rows {
            display: grid;
            gap: 8px;
            margin-bottom: 12px;
        }
        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${muted};
        }
        .v {
            color: ${text};
        }

        .miniTable {
            display: grid;
            gap: 6px;
            .head,
            .row {
                display: grid;
                grid-template-columns: 2fr 1fr 1.2fr 1.2fr 2fr;
                gap: 8px;
            }
            .head {
                font-weight: 700;
                color: ${text};
            }
            .row {
                color: ${text};
            }
        }
    `,

    Empty: styled.div`
        padding: 24px;
        display: grid;
        gap: 10px;
        place-items: center;
        .icon {
            font-size: 28px;
        }
        .text h4 {
            font-size: 16px;
        }
        .muted {
            color: ${muted};
        }
        .cta {
            margin-top: 6px;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
