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

        .muted {
            color: ${muted};
        }
        code {
            padding: 0 6px;
            border: 1px solid ${border};
            border-radius: 6px;
            background: ${card};
        }
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
            display: flex;
            gap: 8px;
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
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
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
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col {
            display: grid;
            gap: 16px;
        }

        .card {
            border: 1px solid ${border};
            background: ${card};
            border-radius: ${radius};
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .stacks .stack {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 760px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .slice {
            border: 1px dashed ${border};
            border-radius: 12px;
            padding: 14px;
            display: grid;
            gap: 12px;
        }
        .sliceHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .slice h4 {
            font-size: 14px;
        }
        .slice .value {
            font-size: 24px;
            font-weight: 700;
        }
        .rowBtns {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }
        .rowBtns button {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 0;
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .rowBtns button:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .derived .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 760px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .derived .label {
            color: ${muted};
            font-size: 12px;
        }
        .derived .big {
            font-size: 20px;
            font-weight: 700;
        }

        .renderBadge {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${muted};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .perf h3 {
            margin-bottom: 6px;
        }
        .tips {
            margin-top: 10px;
            display: grid;
            gap: 6px;
        }

        .snapshot {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }
        .snapshot .label {
            color: ${muted};
            width: 120px;
            display: inline-block;
        }
        .snapshot .value {
            font-weight: 700;
            margin-left: 8px;
        }

        .feed {
            display: grid;
            gap: 8px;
            max-height: 420px;
            overflow: auto;
        }
        .feed .empty {
            color: ${muted};
            font-style: italic;
        }
        .feed .line {
            display: grid;
            gap: 4px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 8px;
        }
        .feed .when {
            color: ${muted};
            font-size: 12px;
        }
        .feed .what .tag {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 1px 8px;
            margin-right: 6px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            font-size: 12px;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
