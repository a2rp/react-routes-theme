import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";

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
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
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
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.1s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1020px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            gap: 8px;
        }
        .summary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .summary .k {
            color: ${muted};
        }
        .summary .v {
            color: ${text};
        }

        .links,
        .shortcuts {
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
        .shortcuts code {
            border: 1px solid ${border};
            border-radius: 6px;
            padding: 2px 6px;
        }
    `,

    CounterCard: styled.div`
        padding: 16px 18px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        transition: border-color 0.25s, box-shadow 0.25s, transform 0.1s;

        &.active {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        header h3 {
            font-size: 16px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }

        .row {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 10px;
            align-items: center;
            margin-bottom: 10px;
        }
        label {
            color: ${muted};
            font-size: 12px;
        }

        .value {
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin: 6px 0 12px;
            text-align: center;
        }

        .controls {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .controls > button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 8px 14px;
            font-weight: 700;
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                transform 0.1s, background 0.25s;
            min-width: 64px;
        }
        .controls > button:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .controls > button:active {
            transform: translateY(1px);
        }
        .controls > button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }

        .btnGhost {
            opacity: 0.9;
        }

        .spinner {
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 50%;
            border: 2px solid ${border};
            border-top-color: ${accent};
            animation: spin 0.8s linear infinite;
            vertical-align: -3px;
        }
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        footer {
            margin-top: 10px;
            text-align: center;
            color: ${muted};
            font-size: 12px;
        }
        footer .kbd span {
            display: inline-block;
            padding: 0 6px;
            margin: 0 2px;
            border: 1px solid ${border};
            border-radius: 6px;
        }

        /* progress UI for bounded */
        .progressWrap {
            position: relative;
            margin: 10px 0 12px;
        }
        .progressTrack {
            height: 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .progressBar {
            position: relative;
            height: 10px;
            border-radius: 999px;
            background: ${accent};
            transform: translateY(-10px);
        }
        .progressMeta {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: ${muted};
            margin-top: -2px;
        }
    `,

    StatsGrid: styled.div`
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr;
    `,

    Stat: styled.div`
        border: 1px solid ${border};
        border-radius: 10px;
        padding: 10px 12px;
        background: ${card};
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 18px;
            font-weight: 700;
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
        border-radius: 16px;
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
        .btnGhost,
        .btnDanger {
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
