import styled from "styled-components";

/* vars from global theme with fallbacks */
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
        background: ${bg};
        padding: 16px 20px 40px;

        a {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        h1,
        h2,
        h3,
        h4 {
            letter-spacing: 0.3px;
        }
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 18px;

        .left h1 {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 6px;
        }

        .meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;

            .divider {
                opacity: 0.6;
            }
            .dim {
                opacity: 0.7;
            }

            .crumbs a {
                color: ${muted};
            }
            .crumbs a:hover {
                color: ${accent};
            }
            .crumbs .sep {
                margin: 0 6px;
                opacity: 0.5;
            }
            .current {
                color: ${text};
            }
        }

        .tags {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            font-size: 11px;
            background: ${card};
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
        }

        .toolbar {
            display: flex;
            gap: 8px;
        }
        .toolbar .primary,
        .toolbar .ghost {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 12px;
            font-weight: 600;
            cursor: pointer;
        }
        .toolbar .primary:hover,
        .toolbar .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .toolbar .ghost {
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            max-width: 720px;
            justify-content: flex-end;
        }
        .q {
            padding: 6px 10px;
            border: 1px dashed ${border};
            border-radius: 6px;
            background: color-mix(in oklab, ${card} 90%, transparent);
            font-size: 12px;
        }
        .q:hover {
            border-color: ${accent};
            color: ${accent};
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .right {
                align-items: flex-start;
            }
            .quicklinks {
                justify-content: flex-start;
                max-width: none;
            }
        }
    `,

    Legend: styled.div`
        margin: 6px 0 16px 0;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
        padding: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin: 4px 0;
        }
        .badge {
            font-size: 11px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 92%, transparent);
            color: ${text};
        }
        .badge.now {
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .badge.next {
            opacity: 0.9;
        }
        .badge.later {
            opacity: 0.8;
        }
        .badge.shipped {
            outline: 1px dashed ${accent};
        }

        .anchor {
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
            font-size: 12px;
        }
        .anchor:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .lane {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            overflow: hidden;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            display: flex;
            flex-direction: column;
            min-height: 280px;
        }

        .laneHead {
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: color-mix(in oklab, ${card} 92%, transparent);
        }
        .laneHead h2 {
            font-size: 16px;
            letter-spacing: 0.4px;
        }

        .cards {
            padding: 12px;
            display: grid;
            gap: 12px;
            align-content: start;
        }

        .card {
            border: 1px solid ${border};
            border-radius: 10px;
            background: color-mix(in oklab, ${card} 96%, transparent);
            padding: 12px;
            display: grid;
            gap: 8px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.05s ease;
        }
        .card:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .card:active {
            transform: translateY(1px);
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .status {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 700;
            background: color-mix(in oklab, ${card} 92%, transparent);
            color: ${text};
        }
        .status.now {
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .status.shipped {
            outline: 1px dashed ${accent};
        }

        .id {
            opacity: 0.85;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .title {
            font-size: 14px;
            line-height: 1.45;
        }

        .meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .meta .dot {
            opacity: 0.5;
        }
        .meta .area {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px dashed ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
            color: ${text};
            font-size: 11px;
            font-weight: 600;
        }
        .time {
            opacity: 0.9;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .inlineLink {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 6px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .inlineLink:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .foot {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
        }
        .pill {
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
            text-decoration: none;
        }
        .pill:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .empty {
            text-align: center;
            color: ${muted};
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 18px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .empty .hint a {
            color: ${accent};
        }

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 680px) {
            grid-template-columns: 1fr;
        }
    `,

    FooterNav: styled.div`
        margin-top: 18px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 14px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;

        .col h4 {
            margin-bottom: 8px;
            font-size: 13px;
            color: ${muted};
        }
        nav {
            display: grid;
            gap: 6px;
        }
        a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: color-mix(in oklab, ${card} 96%, transparent);
            font-size: 12px;
        }
        a:hover {
            border-color: ${accent};
            color: ${accent};
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,
};
