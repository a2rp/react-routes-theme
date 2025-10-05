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
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
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
                box-shadow 0.25s, transform 0.06s;
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
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    Cards: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(6, 1fr);
        }

        .stat {
            padding: 14px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            display: grid;
            gap: 6px;
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v {
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }
    `,

    Toolbar: styled.div`
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};

        .row {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
            align-items: center;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 1fr auto;
            }
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

        .filters {
            display: grid;
            gap: 8px;
        }
        @media (min-width: 1100px) {
            .filters {
                grid-auto-flow: column;
                grid-auto-columns: max-content;
            }
        }

        .group {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .pill {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .pill:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .pill.active {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
    `,

    TableWrap: styled.div`
        padding: 0;
        overflow: hidden;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 12px;
            text-align: left;
            color: ${muted};
            font-weight: 600;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }

        .empty {
            display: grid;
            place-items: center;
            padding: 40px 0;
            color: ${muted};
            .icon {
                font-size: 20px;
                opacity: 0.7;
                margin-bottom: 8px;
            }
            .text h4 {
                font-size: 16px;
                margin-bottom: 4px;
                color: ${text};
            }
            .text p {
                color: ${muted};
            }
        }

        .link {
            color: ${text};
            border-bottom: 1px dashed ${border};
        }
        .link:hover {
            color: ${accent};
            border-bottom-color: ${accent};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            height: 24px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-size: 12px;
            font-weight: 600;
        }

        .status {
            display: inline-flex;
            align-items: center;
            height: 26px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 700;
            letter-spacing: 0.2px;
            font-size: 12px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .status.s-pending {
            opacity: 0.95;
        }
        .status.s-approved {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .status.s-intransit {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .status.s-received {
            background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        .status.s-rejected {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .muted {
            color: ${muted};
        }
        .sub {
            font-size: 12px;
            color: ${text};
            opacity: 0.9;
        }

        .actions {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .btnRow,
        .btnRow.ghost {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${card};
            color: ${text};
            font-size: 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnRow:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnRow.ghost[aria-disabled="true"] {
            opacity: 0.7;
        }
        .btnRow.ghost[aria-disabled="true"]:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    PrintCard: styled.div`
        margin-top: 16px;
        padding: 14px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 900px) {
                grid-template-columns: repeat(5, 1fr);
            }
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            color: ${text};
            font-weight: 700;
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 80;
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
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
