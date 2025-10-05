import styled from "styled-components";

/* tokens with fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        display: block;
        padding: 18px;
    `,

    HeaderBar: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 16px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${shadow};

        .lhs h1 {
            font-size: 22px;
            line-height: 1.25;
            margin: 0 0 4px 0;
        }
        .lhs .sub {
            color: ${muted};
        }

        .rhs {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 14px;
        }

        .meta {
            display: grid;
            gap: 2px;
            align-content: center;
            padding: 6px 10px;
            border: 1px dashed ${border};
            border-radius: 8px;
            min-width: 180px;
            background: color-mix(in oklab, ${card} 92%, transparent);
        }
        .meta .k {
            color: ${muted};
            font-size: 11px;
            letter-spacing: 0.2px;
        }
        .meta .v {
            font-weight: 600;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 36px;
            padding: 0 12px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 8px;
            box-shadow: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                color 0.2s ease, transform 0.05s ease;
        }
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .actions button:active {
            transform: translateY(1px);
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            .rhs {
                grid-auto-flow: row;
                justify-items: start;
            }
        }
    `,

    ChipsRow: styled.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 14px 0 18px 0;

        .chip {
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            text-decoration: none;
            transition: color 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.section`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 14px;

        .cardHd {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .cardHd h3 {
            font-size: 16px;
        }
        .cardHd .note {
            color: ${muted};
            font-size: 12px;
        }

        .links {
            display: grid;
            gap: 6px;
        }
        .links.twoCol {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .links a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            text-decoration: none;
            color: ${text};
            background: color-mix(in oklab, ${card} 96%, transparent);
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease, box-shadow 0.2s ease;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .kv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 10px;
            border: 1px dashed ${border};
            border-radius: 8px;
            margin-bottom: 6px;
            background: color-mix(in oklab, ${card} 94%, transparent);
        }
        .kv span {
            color: ${muted};
        }
        .kv strong {
            letter-spacing: 0.2px;
        }

        .bullets {
            padding-left: 18px;
        }
        .bullets li {
            margin: 6px 0;
        }

        .printBlock {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .printBlock .row {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            margin-bottom: 8px;
        }
        .printBlock .row .col {
            border: 1px dashed ${border};
            padding: 8px;
            border-radius: 8px;
        }
        .printBlock .row .col.wide {
            grid-column: 1 / -1;
        }
        .printBlock .divider {
            height: 1px;
            background: ${border};
            margin: 10px 0;
        }
        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 14%, transparent);
            color: ${text};
            font-size: 12px;
        }
    `,

    Swatches: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
        margin-top: 6px;

        .sw {
            position: relative;
            height: 50px;
            border: 1px solid ${border};
            border-radius: 10px;
            box-shadow: inset 0 0 0 1px
                color-mix(in oklab, ${border} 70%, transparent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: ${text};
        }

        .sw[data-name="bg"] {
            background: ${bg};
        }
        .sw[data-name="text"] {
            background: ${text};
            color: ${bg};
        }
        .sw[data-name="muted"] {
            background: ${muted};
        }
        .sw[data-name="card"] {
            background: ${card};
        }
        .sw[data-name="border"] {
            background: ${border};
        }
        .sw[data-name="accent"] {
            background: ${accent};
        }
        .sw[data-name="accent-soft"] {
            background: ${accentSoft};
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    `,

    ModalCard: styled.div`
        width: min(560px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        overflow: hidden;

        .hd {
            padding: 14px;
            border-bottom: 1px solid ${border};
        }
        .bd {
            padding: 14px;
            color: ${text};
        }
        .ft {
            padding: 12px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .ft button {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .ft button:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
