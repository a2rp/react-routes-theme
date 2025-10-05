import styled from "styled-components";

/* CSS variable tokens with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Wrap: styled.div`
        color: ${text};
        display: block;
        width: 100%;
        padding: 16px;
        container-type: inline-size;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .ghost {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .sub {
            color: ${muted};
            font-size: 11px;
        }
        .cellLink {
            color: ${text};
        }
        .cellLink:hover {
            color: ${accent};
            text-decoration: underline;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 85%, transparent);
        }
        .pill.wip {
            border-color: ${accent};
            color: ${accent};
        }
        .pill.queued {
            color: ${text};
            opacity: 0.9;
        }
        .pill.overdue {
            color: #e11d48;
            border-color: #e11d48;
        }
        .pill.state-waiting {
            color: ${muted};
        }
        .pill.state-running {
            color: ${accent};
            border-color: ${accent};
        }
        .pill.state-delayed {
            color: #e11d48;
            border-color: #e11d48;
        }
        .pill.qc-pending {
            color: ${accent};
            border-color: ${accent};
        }
        .pill.qc-scheduled {
            color: ${muted};
        }
        .pill.qc-hold {
            color: #e11d48;
            border-color: #e11d48;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;

        .titles h1 {
            font-family: "Antonio", sans-serif;
            font-size: 28px;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            margin-bottom: 8px;
        }
        .crumbs {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .crumbs a {
            color: ${muted};
        }
        .crumbs a:hover {
            color: ${accent};
            text-decoration: underline;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions button,
        .actions a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        .actions button:hover,
        .actions a:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .actions button:active,
        .actions a:active {
            transform: translateY(1px);
        }
        .actions button[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }

        /* Pure-CSS tooltip for disabled buttons */
        .tip {
            position: relative;
            display: inline-flex;
        }
        .tip[data-tip]::after {
            content: attr(data-tip);
            position: absolute;
            bottom: calc(100% + 6px);
            left: 50%;
            transform: translateX(-50%);
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 6px 8px;
            border-radius: 6px;
            white-space: nowrap;
            font-size: 12px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.15s ease;
            box-shadow: ${shadow};
        }
        .tip:hover::after {
            opacity: 1;
        }
    `,

    Subnav: styled.nav`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin: 8px 0 16px 0;

        a {
            color: ${muted};
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            background: color-mix(in oklab, ${card} 90%, transparent);
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        a.active {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    KpiGrid: styled.section`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 12px;
        margin-bottom: 16px;

        .kpi {
            display: grid;
            grid-template-rows: auto auto auto;
            gap: 4px;
            min-height: 96px;
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
        .kpi .label {
            color: ${muted};
            font-weight: 600;
        }
        .kpi .sub {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Columns: styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
        margin-bottom: 16px;

        @container (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 10px;
        }
        .sectionHead .title {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
        }
        .sectionHead .tools .link {
            color: ${muted};
            text-decoration: none;
            border-bottom: 1px dashed ${border};
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .sectionHead .tools .link:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Table: styled.div`
        border: 1px solid ${border};
        border-radius: 10px;
        overflow: hidden;
        font-size: 13px;

        .thead {
            background: ${card};
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        .tr {
            display: grid;
            grid-template-columns: 140px 1.6fr 1.1fr 160px 160px 100px 120px 1fr;
        }
        .tr > div {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        .th {
            font-weight: 600;
            color: ${accent};
            background: color-mix(in oklab, ${card} 95%, transparent);
        }
        .td.right,
        .th.right {
            text-align: right;
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        /* Narrow variants for other tables */
        &:has(.th:only-child) {
        }
        &:not(:has(.th:nth-child(8))) .tr {
            grid-template-columns: 140px 1.2fr 1fr 1fr 1fr 1fr;
        }
    `,

    Timeline: styled.div`
        display: grid;
        gap: 10px;

        .item {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 8px;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-top: 6px;
            background: ${muted};
            border: 1px solid ${border};
        }
        .dot.wo {
            background: ${accent};
        }
        .dot.qc {
            background: color-mix(in oklab, ${accent} 18%, #ffffff);
        }
        .dot.bom {
            background: color-mix(in oklab, ${accent} 10%, #ffffff);
        }
        .dot.alert {
            background: #e11d48;
        }
        .content .text {
            font-weight: 500;
        }
        .content .time {
            color: ${muted};
            font-size: 12px;
        }
    `,

    ListLinks: styled.div`
        display: grid;
        gap: 8px;
        a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            color: ${text};
            text-decoration: none;
            background: color-mix(in oklab, ${card} 92%, transparent);
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 1000;

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(1px);
        }
        .panel {
            position: absolute;
            right: 24px;
            bottom: 24px;
            max-width: 420px;
            display: grid;
            gap: 10px;
        }
        .panel header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
        }
        .panel footer {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `,
};

export default Styled;
