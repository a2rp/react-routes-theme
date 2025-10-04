import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
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
        border: 1px solid ${border};
        background: ${card};
        border-radius: ${radius};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
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
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        @media (min-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }

        .card {
            border: 1px solid ${border};
            background: ${card};
            border-radius: ${radius};
            padding: 16px 18px;
            box-shadow: var(--shadow);
        }
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${muted};
        }

        .btnRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 10px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
            letter-spacing: 0.2px;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s, background 0.25s;
            display: flex;
            gap: 15px;
            align-items: center;
        }
        .btnPrimary:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            background: color-mix(in oklab, ${danger} 10%, transparent);
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tableWrap {
            overflow: auto;
            margin-top: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        th {
            text-align: left;
            background: ${card};
            color: ${accent};
            font-weight: 600;
            position: sticky;
            top: 0;
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 20px;
    `,

    Modal: styled.div`
        width: min(560px, 96vw);
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        color: ${text};
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
        overflow: hidden;

        &.danger header .titleWrap svg {
            color: ${danger};
        }
        &.primary header .titleWrap svg,
        &.info header .titleWrap svg {
            color: ${accent};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        .titleWrap {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h4 {
            font-size: 18px;
        }
        .iconBtn {
            border: 1px solid ${border};
            background: ${card};
            color: ${muted};
            border-radius: 8px;
            padding: 6px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .iconBtn:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .iconBtn:active {
            transform: translateY(1px);
        }

        .body {
            padding: 14px 16px;
        }
        .body p {
            margin: 0 0 12px;
        }
        .field {
            margin-top: 10px;
        }
        .field label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .field input {
            width: 100%;
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .field input:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        footer {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnGhost,
        .btnPrimary,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s, background 0.25s;
        }
        .btnPrimary:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            background: color-mix(in oklab, ${danger} 10%, transparent);
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .btnGhost:active,
        .btnPrimary:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,
};
