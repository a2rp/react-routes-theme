import styled from "styled-components";

/* tokens with safe fallbacks */
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
        padding: 20px 20px 40px 20px;
        background: ${bg};
    `,

    Header: styled.header`
        display: grid;
        gap: 14px;
        margin-bottom: 16px;

        .titleRow {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 12px;
        }
        .titleRow .left {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .leadIcon {
            font-size: 30px;
            color: ${accent};
        }
        .titles h1 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            line-height: 1.1;
            margin-bottom: 4px;
        }
        .titles .sub {
            font-size: 13px;
            color: ${muted};
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .actions .ghost,
        .actions .primary {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            height: 36px;
            border-radius: 10px;
            border: 1px solid ${border};
            padding: 0 12px;
            font-weight: 600;
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
            box-shadow: ${shadow};
        }
        .actions .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .primary {
            border-color: ${accent};
            color: ${text};
        }
        .actions .primary:hover {
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            background: rgba(0, 0, 0, 0.08);
        }

        .toolRow {
            display: grid;
            grid-template-columns: minmax(240px, 520px) 1fr;
            gap: 12px;
            align-items: center;
        }

        .searchBox {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            overflow: hidden;
            box-shadow: ${shadow};
        }
        .searchBox .icon {
            margin-left: 10px;
            font-size: 18px;
            color: ${muted};
        }
        .searchBox input {
            flex: 1;
            height: 100%;
            background: transparent;
            border: none;
            color: ${text};
            padding: 0 10px;
            outline: none;
        }
        .searchBox .clear {
            height: 100%;
            padding: 0 10px;
            background: transparent;
            border: none;
            color: ${muted};
            border-left: 1px solid ${border};
            cursor: pointer;
        }
        .searchBox .clear:hover {
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tab {
            height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            letter-spacing: 0.2px;
            transition: border-color 0.25s, color 0.25s, background 0.25s,
                box-shadow 0.25s;
        }
        .tab:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .tab.active {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        @media (max-width: 880px) {
            .titleRow {
                grid-template-columns: 1fr;
            }
            .toolRow {
                grid-template-columns: 1fr;
            }
        }
    `,

    Layout: styled.main`
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 16px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .panel {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${shadow};
        }

        /* Quick links */
        .quickLinks h2 {
            font-size: 16px;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
        }
        .quickLinks .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .linkCard {
            display: grid;
            gap: 2px;
            align-items: center;
            border: 1px solid ${border};
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
            color: ${text};
            position: relative;
            transition: border-color 0.25s, transform 0.1s ease;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .linkCard:hover {
            border-color: ${accent};
            transform: translateY(-1px);
        }
        .linkCard .label {
            font-weight: 700;
        }
        .linkCard .desc {
            font-size: 12px;
            color: ${muted};
        }
        .linkCard .open {
            position: absolute;
            right: 8px;
            top: 8px;
            font-size: 16px;
            color: ${muted};
        }

        /* Pinned section */
        .pinned .panelTitle {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
        }
        .pinned h2 {
            font-size: 16px;
            font-family: "Antonio", sans-serif;
        }

        /* List + rows */
        .mainList .dateGroup {
            margin-bottom: 18px;
        }
        .dateHeader {
            font-size: 12px;
            color: ${muted};
            border-bottom: 1px dashed ${border};
            padding-bottom: 6px;
            margin-bottom: 8px;
        }
        .list {
            display: grid;
            gap: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
            transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
            outline: none;
        }
        .row:hover,
        .row:focus-visible {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .row.unread {
            background: color-mix(in oklab, ${accent} 10%, ${card});
        }

        .row .left {
            display: grid;
            grid-template-columns: 30px 1fr;
            gap: 12px;
            align-items: flex-start;
        }
        .kindIcon {
            font-size: 22px;
            color: ${accent};
            margin-top: 2px;
        }
        .title {
            font-size: 14px;
            margin: 0;
        }
        .message {
            font-size: 13px;
            color: ${muted};
            margin-top: 2px;
        }

        .meta header {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .unreadDot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: ${accent};
            display: inline-block;
        }

        .info {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            align-items: center;
            margin-top: 6px;
            font-size: 12px;
            color: ${muted};
        }
        .info .sep {
            opacity: 0.6;
        }
        .miniLink {
            text-decoration: none;
            color: ${text};
            border-bottom: 1px dotted ${border};
        }
        .miniLink:hover {
            color: ${accent};
        }

        .right {
            display: flex;
            align-items: center;
        }
        .cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            height: 34px;
            padding: 0 12px;
            border-radius: 10px;
            border: 1px solid ${accent};
            background: transparent;
            color: ${text};
            font-weight: 700;
            text-decoration: none;
        }
        .cta:hover {
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .cta.disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        /* Empty state */
        .empty {
            border: 1px dashed ${border};
            border-radius: 12px;
            padding: 18px;
            display: grid;
            gap: 8px;
            justify-items: start;
        }
        .empty p {
            color: ${muted};
        }
        .empty .links {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .empty .a {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dotted ${border};
        }
        .empty .a:hover {
            color: ${accent};
        }

        @media (max-width: 680px) {
            .quickLinks .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .row {
                grid-template-columns: 1fr;
            }
            .right {
                justify-content: flex-start;
            }
        }
    `,
};
