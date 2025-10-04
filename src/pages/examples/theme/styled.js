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
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
    `,

    Header: styled.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .lhs h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
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

        .rhs {
            display: flex;
            gap: 18px;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .seg {
            display: grid;
            gap: 8px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .btns {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.04s;
        }
        .btnPrimary {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        .hint {
            font-size: 12px;
            color: ${muted};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 1.5fr 1fr;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: 16px 18px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* TOKENS */
        .tokens header {
            margin-bottom: 12px;
        }
        .tokens .muted {
            color: ${muted};
        }
        .tokens .tableWrap {
            overflow: auto;
            border-radius: 10px;
            border: 1px solid ${border};
        }
        .tokens table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .tokens thead th {
            text-align: left;
            padding: 10px;
            background: ${card};
            position: sticky;
            top: 0;
            border-bottom: 1px solid ${border};
            color: ${accent};
        }
        .tokens tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        .tokens .valueCell code {
            color: ${text};
        }
        .tokens .swatch {
            display: inline-block;
            width: 28px;
            height: 18px;
            border: 1px solid ${border};
            border-radius: 6px;
        }
        .tokens .swatch.none {
            background: transparent;
        }

        .tokens .foot {
            margin-top: 10px;
            color: ${muted};
            font-size: 12px;
        }

        /* GALLERY */
        .gallery header {
            margin-bottom: 12px;
        }
        .gallery .muted {
            color: ${muted};
        }
        .gallery .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .gallery .row {
                grid-template-columns: 1fr 1fr;
            }
        }
        .gallery .label {
            color: ${muted};
            margin-bottom: 8px;
        }

        .btnPrimary,
        .btnGhost,
        .btnOutline,
        .btnSubtle,
        .btnIcon {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.04s;
        }
        .btnPrimary {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnOutline {
            background: transparent;
        }
        .btnOutline:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnSubtle {
            opacity: 0.9;
        }
        .btnIcon {
            width: 40px;
            padding: 0;
            text-align: center;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnOutline:active,
        .btnSubtle:active,
        .btnIcon:active {
            transform: translateY(1px);
        }

        .inputs {
            display: grid;
            gap: 10px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .tableWrap.small table td,
        .tableWrap.small table th {
            white-space: nowrap;
        }
        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
        }
        .badge.ok {
            border-color: ${accent};
            color: ${accent};
        }
        .badge.warn {
            border-color: #c5a100;
            color: #c5a100;
        }
        .badge.off {
            border-color: #7a7a7a;
            color: #7a7a7a;
        }

        .codeWrap {
            border: 1px solid ${border};
            background: #0b0e13;
            color: ${text};
            padding: 12px;
            border-radius: 10px;
            overflow: auto;
        }

        /* PLAYGROUND */
        .playground header {
            margin-bottom: 10px;
        }
        .playground .muted {
            color: ${muted};
        }
        .playground .controls {
            display: grid;
            gap: 16px;
            grid-template-columns: 220px 1fr;
            align-items: start;
        }
        @media (max-width: 720px) {
            .playground .controls {
                grid-template-columns: 1fr;
            }
        }
        .playground .pick label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .playground .examples {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
        .playground .chip {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
            font-weight: 600;
        }
        .playground .chip.soft {
            background: ${accentSoft};
            border-color: color-mix(in oklab, ${accent} 40%, ${border});
        }

        .playground .inner {
            margin-top: 16px;
            border-radius: 12px;
            border: 1px solid ${border};
            background: ${card};
        }
        .playground .inner h4 {
            margin-bottom: 8px;
        }
        .playground .miniGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            margin-top: 10px;
        }
        .playground .stat .k {
            color: ${muted};
            font-size: 12px;
        }
        .playground .stat .v {
            color: ${text};
        }
    `,
};
