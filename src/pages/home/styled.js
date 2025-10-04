import styled from "styled-components";

/* tokens */
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.main`
        display: grid;
        gap: 16px;
        color: ${text};

        /* Hero */
        .hero {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 16px;
            padding: 18px 20px;
            align-items: center;
        }
        @media (max-width: 980px) {
            .hero {
                grid-template-columns: 1fr;
            }
        }

        .heroText h1 {
            font-size: 28px;
            letter-spacing: 0.6px;
            margin-bottom: 8px;
        }
        .heroText .lead {
            color: ${muted};
            max-width: 64ch;
            margin-bottom: 10px;
        }
        .heroText .meta {
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${muted};
        }
        .heroText .dot {
            opacity: 0.7;
        }

        .heroActions {
            display: grid;
            gap: 10px;
            justify-items: start;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 10px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .ghostRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        /* Actions (demo disabled CTAs) */
        .actions {
            display: grid;
            grid-template-columns: repeat(4, minmax(180px, 1fr));
            gap: 10px;
        }
        @media (max-width: 980px) {
            .actions {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .actions .cta {
            position: relative;
            border-radius: 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .actions .cta[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .actions .cta[disabled]:hover {
            border-color: ${border};
            color: ${text};
        }
        .actions .cta[disabled][data-tooltip]:hover::after,
        .actions .cta[disabled][data-tooltip]:hover::before {
            opacity: 1;
            transform: translateY(-4px);
        }
        .actions .cta[disabled]::before {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translate(-50%, 0);
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 6px 8px;
            border-radius: 8px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s, transform 0.2s;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }
        .actions .cta[disabled]::after {
            content: "";
            position: absolute;
            bottom: calc(100% - 6px);
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            background: ${card};
            border-left: 1px solid ${border};
            border-top: 1px solid ${border};
            rotate: 45deg;
            opacity: 0;
            transition: opacity 0.2s, transform 0.2s;
        }

        /* KPIs */
        .kpis {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1280px) {
            .kpis {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .kpis {
                grid-template-columns: 1fr;
            }
        }
        .kpi {
            display: grid;
            grid-template-columns: 56px 1fr;
            gap: 10px;
            padding: 14px;
        }
        .kpiIcon {
            width: 56px;
            height: 56px;
            border: 1px solid ${border};
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-size: 22px;
        }
        .kpiLabel {
            color: ${muted};
            font-size: 12px;
        }
        .kpiValue {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .kpiFoot {
            color: ${muted};
            font-size: 12px;
        }

        /* Grid (lower section) */
        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
        }
        @media (max-width: 1480px) {
            .grid {
                grid-template-columns: 1.2fr 1fr 1fr;
            }
        }
        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (max-width: 720px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .shortcuts h3,
        .recent h3,
        .news h3,
        .sys h3,
        .printTarget h3 {
            margin-bottom: 10px;
        }

        .shortcuts ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .shortcuts a {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 10px 12px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .shortcuts a:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        /* Recently Viewed */
        .recent .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .recent .list a {
            display: inline-flex;
            gap: 6px;
            align-items: center;
        }
        .recent .list .x {
            opacity: 0.7;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }

        /* Announcements / timeline */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }

        /* System info */
        .sys .rows {
            display: grid;
            gap: 8px;
        }
        .sys .k {
            color: ${muted};
            font-size: 12px;
        }
        .sys .v {
            font-weight: 700;
        }

        /* Print target */
        .printTarget .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px 12px;
            margin-bottom: 12px;
        }
        .printTarget .k {
            color: ${muted};
        }
        .printTarget .v {
            color: ${text};
        }
        .printBtns {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Footer */
        .foot {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
        }
        .foot .left {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .foot strong {
            color: ${text};
            margin-left: 4px;
        }
        .foot .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .pill {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 999px;
            padding: 6px 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .pill:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
