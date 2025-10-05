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
        padding: 18px 0 60px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .muted {
            color: ${muted};
            font-weight: 500;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
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
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
    `,

    Notice: styled.div`
        padding: 20px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        h3 {
            margin-bottom: 8px;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr; /* full width layout with side column */

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main > .card,
        .col.side > .card {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            padding: 16px;
            box-shadow: var(--shadow);
        }

        /* Summary */
        .summary {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(4, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }
        .summary .label {
            color: ${muted};
            font-size: 12px;
        }
        .summary .value {
            font-weight: 600;
        }
        .summary .value .sub {
            color: ${muted};
            font-weight: 500;
            font-size: 12px;
            margin-top: 4px;
        }

        /* Table */
        .tableWrap {
            overflow: auto;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.items th,
        table.items td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        table.items th {
            text-align: left;
            color: ${accent};
            background: ${card};
            position: sticky;
            top: 0;
        }
        table.items td .sub {
            color: ${muted};
            font-size: 12px;
        }
        .num {
            text-align: right;
        }

        /* Totals */
        .totals {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 16px;
            margin-top: 14px;
        }
        @media (max-width: 900px) {
            .totals {
                grid-template-columns: 1fr;
            }
        }
        .totals .left .addr {
            margin-bottom: 10px;
        }
        .totals .left h4 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .totals .right .row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed ${border};
        }
        .totals .right .row.grand {
            font-size: 16px;
            font-weight: 700;
            border-bottom: 0;
        }

        /* Two columns block */
        .two {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 900px) {
            .two {
                grid-template-columns: 1fr;
            }
        }
        .empty {
            color: ${muted};
        }

        .notes {
            background: color-mix(in oklab, ${accent} 6%, transparent);
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            line-height: 1.6;
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        /* Side */
        .printHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${muted};
            width: 100px;
            display: inline-block;
        }
        .kv .v {
            font-weight: 600;
        }
        .miniTable .mh {
            color: ${muted};
            margin: 10px 0 6px;
        }
        .miniTable ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .miniTable li {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px dashed ${border};
        }
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            margin-top: 6px;
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 10px;
        }
        .files .name {
            font-weight: 600;
        }
        .files .size {
            color: ${muted};
            font-size: 12px;
        }
        .rowBtns {
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
        }
        .small:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .ql {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .ql a {
            color: ${muted};
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .ql a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    /* Badges */
    // status-issued, status-partially applied, status-applied, status-void
    // using subtle backgrounds around the accent/danger hues
    // (colors draw from tokens via color-mix)
    // keeps typography clean and consistent
    // className built from status lowercased
    _: null,
};

export const BadgeWrap = styled.span``;

export const Badge = styled.span``;

/* inline badge styles */
const badgeCss = `
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 999px;
  border: 1px solid ${border};
  background: color-mix(in oklab, ${accent} 10%, transparent);
  color: ${text};
`;
const styleEl =
    typeof document !== "undefined" ? document.createElement("style") : null;
if (styleEl) {
    styleEl.textContent = `
    .badge { ${badgeCss} }
    .badge.status-issued { }
    .badge.status-partially\\ applied { }
    .badge.status-applied { }
    .badge.status-void { background: color-mix(in oklab, ${danger} 12%, transparent); border-color: ${danger}; }
  `;
    document.head.appendChild(styleEl);
}

/* modal (demo dialog) */
export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`;
export const Modal = styled.div`
    width: min(520px, 92vw);
    border: 1px solid ${border};
    border-radius: 16px;
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
    }
    footer {
        padding: 12px 16px;
        display: flex;
        justify-content: flex-end;
    }
    .btnPrimary {
        border-radius: 8px;
        padding: 8px 14px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
    }
    .btnPrimary:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;
