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
        display: grid;
        gap: 16px;

        .head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 18px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .muted {
            color: ${muted};
        }

        .ctaRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
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
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }

        .banner {
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .grid {
            display: grid;
            grid-template-columns: 1.5fr 2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1180px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .panel,
        .preview,
        .snapshot {
            padding: 16px;
        }

        .panel h3,
        .preview h3,
        .snapshot h3 {
            margin-bottom: 12px;
        }

        .controls {
            display: grid;
            gap: 14px;
        }
        .row {
            display: grid;
            gap: 10px;
        }
        .row.two {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 640px) {
            .row.two {
                grid-template-columns: 1fr;
            }
        }

        label {
            font-size: 12px;
            color: ${muted};
        }

        .seg {
            display: inline-flex;
            border: 1px solid ${border};
            border-radius: 999px;
            background: ${card};
        }
        .segBtn {
            padding: 6px 12px;
            border: 0;
            background: transparent;
            color: ${text};
            border-radius: 999px;
        }
        .segBtn:hover {
            color: ${accent};
        }
        .segBtn.active {
            color: ${accent};
            box-shadow: inset 0 0 0 1px ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .swatches {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .swatch {
            width: 28px;
            height: 28px;
            border-radius: 999px;
            border: 2px solid transparent;
            cursor: pointer;
        }
        .swatch.sel {
            outline: none;
            border-color: ${accent};
        }
        .customPick {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .customPick input[type="color"] {
            width: 32px;
            height: 32px;
            padding: 0;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .customPick span {
            font-family: monospace;
            padding: 2px 6px;
            border: 1px solid ${border};
            border-radius: 6px;
        }

        input[type="range"] {
            accent-color: ${accent};
        }

        .preview .ui {
            display: grid;
            gap: 14px;
        }
        .preview .row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .preview .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 640px) {
            .preview .cards {
                grid-template-columns: 1fr;
            }
        }
        .mini {
            padding: 12px;
        }
        .mini .k {
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        th {
            text-align: left;
            color: ${accent};
            background: ${card};
        }

        .snapshot .rows {
            display: grid;
            gap: 8px;
            margin-bottom: 10px;
        }
        .snapshot .k {
            color: ${muted};
            width: 140px;
            display: inline-block;
        }
        .snapshot .v {
            color: ${text};
        }
        .snapshot .code {
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            overflow: auto;
        }
        .snapshot pre {
            margin: 0;
            padding: 12px;
            font-size: 12px;
            line-height: 1.6;
        }

        .shareLine {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        .shareLine input {
            flex: 1;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 10px;
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 60;
    `,

    Modal: styled.div`
        width: min(760px, 92vw);
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        color: ${text};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header,
        footer {
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        footer {
            border-top: 1px solid ${border};
            border-bottom: 0;
            display: flex;
            justify-content: flex-end;
        }
        .body {
            padding: 14px;
            display: grid;
            gap: 10px;
        }
        .muted {
            color: ${muted};
        }

        .code {
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            padding: 10px;
            overflow: auto;
        }
        pre {
            margin: 0;
            font-size: 12px;
            line-height: 1.6;
        }
    `,
};
