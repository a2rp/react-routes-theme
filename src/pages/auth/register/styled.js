import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.main`
        color: ${text};
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }

        /* top bar */
        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 4px;
            border-bottom: 1px dashed ${border};
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .crumb {
            color: ${muted};
            text-decoration: none;
        }
        .crumb:hover {
            color: ${accent};
        }
        .current {
            color: ${text};
        }
        .sep {
            opacity: 0.6;
        }
        .build-meta {
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${muted};
            font-size: 12px;
        }
        .build-meta .dot {
            opacity: 0.6;
        }

        /* hero */
        .hero {
            padding: 10px 4px 0;
        }
        .hero h1 {
            font-family: "Antonio", sans-serif;
            font-size: 32px;
            line-height: 1.2;
            margin-bottom: 6px;
        }
        .hero .sub {
            color: ${muted};
            margin-bottom: 12px;
        }
        .quick-links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 92%, transparent);
            color: ${text};
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }

        /* content grid (full width, no max container) */
        .content {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            width: 100%;
        }
        @media (max-width: 1100px) {
            .content {
                grid-template-columns: 1fr;
            }
        }

        /* form card */
        .formCard {
            padding: 16px;
        }
        .formHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .badge.demo {
            padding: 2px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            font-size: 11px;
            color: ${muted};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        form .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 10px;
        }
        @media (max-width: 700px) {
            form .grid {
                grid-template-columns: 1fr;
            }
        }
        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .field label {
            color: ${muted};
            font-size: 12px;
        }
        .field .hint {
            color: ${muted};
            font-size: 11px;
        }

        .agreements {
            /* display: grid;
            gap: 8px; */
            margin: 10px 0 4px;
        }
        .ck {
            color: ${muted};
            font-size: 13px;
            display: flex;
            justify-content: flex-start;
            gap: 8px;
            margin-bottom: 15px;

            span {
                white-space: nowrap;
            }

            .link {
                /* width: 100%; */
            }
        }
        .ck input {
            border: 1px solid #f00;
            /* display: none; */
            /* transform: translateY(1px); */
            width: 30px;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0 14px;
        }
        .actions .grow {
            flex: 1;
        }
        .link {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed ${border};
        }
        .link:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .btnPrimary,
        .btnGhost,
        .ssoBtn {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            transition: all 0.2s ease;
            cursor: pointer;
            background: ${card};
            color: ${text};
        }
        .btnPrimary {
            border-color: ${accent};
            box-shadow: 0 0 0 0 ${accentSoft};
        }
        .btnPrimary:hover {
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .ssoRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .ssoBtn[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* print block */
        .printBlock {
            margin-top: 18px;
            padding: 16px;
            border-radius: 10px;
            border: 1px dashed ${border};
        }
        .printBlock h3 {
            margin-bottom: 6px;
        }
        .bullets {
            margin: 10px 0 12px 18px;
        }
        .bullets li {
            margin: 4px 0;
        }
        .meta {
            display: grid;
            gap: 4px;
            color: ${muted};
        }
        .meta .k {
            color: ${text};
            margin-right: 6px;
        }

        /* side card */
        .sideCard {
            padding: 16px;
            display: grid;
            gap: 16px;
        }
        .section h3 {
            margin-bottom: 8px;
        }
        .linksGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
        }
        @media (max-width: 700px) {
            .linksGrid {
                grid-template-columns: 1fr;
            }
        }
        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 10px;
            border: 1px solid ${border};
            border-radius: 10px;
            text-decoration: none;
            color: ${text};
            background: color-mix(in oklab, ${card} 94%, transparent);
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .pill:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .stack {
            display: grid;
            gap: 6px;
        }
        .row {
            color: ${text};
            text-decoration: none;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
        }
        .row:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .section.muted {
            color: ${muted};
            border-top: 1px dashed ${border};
            padding-top: 8px;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
        }
        .kv .k {
            color: ${muted};
        }
        .kv .v {
            color: ${text};
        }

        /* modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            z-index: 40;
            padding: 16px;
        }
        .modal {
            max-width: 640px;
            width: 100%;
            padding: 0;
        }
        .modalHeader {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        .modalBody {
            padding: 16px;
            display: grid;
            gap: 12px;
        }
        .modalLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .modalFooter {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        /* focus styles */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible,
        select:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
            border-color: ${accent};
        }
    `,
};
