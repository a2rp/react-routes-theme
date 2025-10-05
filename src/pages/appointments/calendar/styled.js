import styled from "styled-components";

/* tokens from CSS variables with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    Toolbar: styled.div`
        position: sticky;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        background: ${bg};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
        }
        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .titleBlock {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .titleBlock h1 {
            font-size: 20px;
            line-height: 1.2;
            letter-spacing: 0.2px;
        }
        .titleBlock .sub {
            color: ${muted};
            font-size: 12px;
        }

        .segment {
            display: inline-flex;
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
            height: 34px;
        }
        .segment button {
            background: ${card};
            border: none;
            padding: 0 12px;
            font-weight: 600;
            letter-spacing: 0.2px;
            border-right: 1px solid ${border};
        }
        .segment button:last-child {
            border-right: 0;
        }
        .segment button.on {
            color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft} inset;
        }

        .nav {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .nav .period {
            color: ${muted};
            padding-left: 6px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .links {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links .link {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            text-decoration: none;
            color: ${text};
        }
        .links .link:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .actions button {
            height: 34px;
        }

        .copied {
            font-size: 12px;
            color: ${accent};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 6px;
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    Legend: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 14px;
        padding: 8px 12px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
        color: ${muted};
        font-size: 12px;

        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 6px;
            border: 1px solid ${border};
            vertical-align: middle;
        }
        .confirmed {
            background: color-mix(in oklab, ${accent} 45%, transparent);
        }
        .tentative {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
        .cancelled {
            background: #444;
        }
    `,

    Month: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        overflow: hidden;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .head {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            border-bottom: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .colHead {
            padding: 10px;
            font-weight: 700;
            color: ${accent};
            letter-spacing: 0.4px;
            border-right: 1px solid ${border};
        }
        .colHead:last-child {
            border-right: 0;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-auto-rows: 140px;
        }

        .cell {
            position: relative;
            padding: 8px;
            border-right: 1px solid ${border};
            border-bottom: 1px solid ${border};
            background: ${card};
            transition: background 0.2s ease;
            outline: none;
        }
        .cell:hover {
            background: rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
        .cell.dim {
            opacity: 0.55;
        }
        .cell.active {
            box-shadow: inset 0 0 0 2px ${accent};
        }

        .date {
            position: absolute;
            top: 6px;
            right: 8px;
            font-weight: 700;
            color: ${muted};
            font-size: 12px;
        }

        .events {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 18px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${text};
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .chip .time {
            font-weight: 700;
        }
        .chip.tentative {
            background: color-mix(in oklab, ${accent} 8%, transparent);
            border-style: dashed;
        }
        .chip.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }
    `,

    Day: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .dayHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-bottom: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .dayHead .when h2 {
            font-size: 18px;
            line-height: 1.2;
        }
        .dayHead .when .meta {
            color: ${muted};
            font-size: 12px;
        }
        .dayHead .links {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .dayHead .lnk {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            text-decoration: none;
            color: ${text};
        }
        .dayHead .lnk:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .list {
            display: flex;
            flex-direction: column;
        }
        .row {
            display: grid;
            grid-template-columns: 180px 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-bottom: 1px solid ${border};
        }
        .row:last-child {
            border-bottom: 0;
        }

        .row .time {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .row .summary .title {
            color: ${text};
            text-decoration: none;
            font-weight: 700;
        }
        .row .summary .title:hover {
            color: ${accent};
        }
        .row .summary .meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            color: ${muted};
            font-size: 12px;
            margin-top: 4px;
        }
        .row .summary .meta a {
            color: inherit;
            text-decoration: none;
        }
        .row .summary .meta a:hover {
            color: ${accent};
        }

        .row.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }

        .actions {
            display: inline-flex;
            gap: 8px;
        }
        .actions .btn {
            font-size: 12px;
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            text-decoration: none;
            color: ${text};
        }
        .actions .btn:hover {
            color: ${accent};
            border-color: ${accent};
        }

        @media (max-width: 900px) {
            .row {
                grid-template-columns: 1fr;
                align-items: flex-start;
            }
            .actions {
                justify-content: flex-start;
            }
        }

        .empty {
            padding: 20px;
            color: ${muted};
            text-align: center;
        }
    `,

    FooterNav: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 10px 12px;
        color: ${muted};
        font-size: 12px;

        .group {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .group .lnk {
            color: ${text};
            text-decoration: none;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            padding: 4px 8px;
        }
        .group .lnk:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,
};
