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
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px;
        margin-bottom: 12px;

        .title {
            display: grid;
            gap: 6px;
        }
        .meta {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
        }
        .meta strong {
            color: ${text};
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s;
        }
        .btnGhost:hover,
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        button:active {
            transform: translateY(1px);
        }
        button[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Toolbar: styled.section`
        padding: 12px 14px;
        margin-bottom: 12px;
        display: grid;
        gap: 10px;

        .search input {
            width: 100%;
            height: 38px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
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
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .filters {
                grid-template-columns: 1fr 1fr;
            }
        }

        .group {
            display: grid;
            gap: 8px;
        }
        .groupTitle {
            color: ${muted};
            font-size: 12px;
            font-weight: 600;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .chip.active {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .sort {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: flex-end;
        }
        .sort span {
            color: ${muted};
        }
        .sort select {
            height: 34px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            color: ${text};
            padding: 0 8px;
        }
        .sort .btnGhost {
            height: 34px;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 12px;
        }
        .miniCard {
            padding: 12px 14px;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${card};
            color: ${text};
        }
        .links a:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Empty: styled.div`
        display: grid;
        place-items: center;
        padding: 32px 0;
        .emoji {
            font-size: 24px;
        }
        .title {
            margin-top: 8px;
            font-weight: 700;
        }
        .hint {
            color: ${muted};
        }
    `,

    // table
    // sticky header, subtle gridlines, compact rows
    TableWrap: styled.div``,

    // inline styles kept with main table block for clarity
    // (below are nested selectors used in the main section)
    _: styled.div``,
};

/* additional scoped styles for the table (nested inside main section) */
export default Styled;

/* style overrides via template literal in component scope */
Styled.Page = Styled.Page;
Styled.Grid = Styled.Grid;

// add table styles via a template literal in the same file for maintainability
Styled.Page = Styled.Page;
