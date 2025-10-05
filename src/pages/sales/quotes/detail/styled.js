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

        .left h1 {
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
            margin-top: 8px;
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${muted};
            font-size: 12px;
        }
        .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
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
            transition: transform 0.06s ease, border-color 0.25s ease,
                color 0.25s ease, box-shadow 0.25s ease;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(1px);
        }
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Banner: styled.div`
        margin: 12px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main > .card {
            padding: 16px 18px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .identity {
            display: grid;
            gap: 14px;
            grid-template-columns: 1fr;
            @media (min-width: 860px) {
                grid-template-columns: 1.6fr 1fr;
            }

            .customer {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .avatar {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: ${card};
                border: 1px solid ${border};
                display: grid;
                place-items: center;
                font-weight: 700;
            }
            .who h3 {
                font-size: 16px;
            }
            .muted {
                color: ${muted};
            }
            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                padding: 4px 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
            .info {
                display: grid;
                gap: 10px;
                grid-template-columns: repeat(2, 1fr);
            }
            .info .k {
                color: ${muted};
                font-size: 12px;
            }
            .info .v {
                font-weight: 600;
            }
            .pill {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
            }
        }

        .addr h3 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
        }

        .items .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
        }
        .items table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .items thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${text};
        }
        .items tbody td {
            border-top: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        .items .num {
            text-align: right;
            white-space: nowrap;
        }
        .items .name {
            font-weight: 600;
        }
        .items .small {
            font-size: 12px;
            color: ${muted};
        }
        .items .strong {
            font-weight: 700;
        }

        .totals {
            margin-top: 12px;
            display: grid;
            gap: 6px;
            max-width: 360px;
            margin-left: auto;
            .row {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
            }
            .grand {
                border-top: 1px dashed ${border};
                padding-top: 10px;
                font-weight: 800;
            }
        }

        .terms {
            margin: 6px 0 0 18px;
            line-height: 1.9;
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
            grid-template-columns: 1fr auto auto auto;
            gap: 10px;
            align-items: center;
        }
        .files .file {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .files .size {
            color: ${muted};
            font-size: 12px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .small:hover {
            border-color: ${accent};
            color: ${accent};
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
            gap: 10px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${border};
            margin-top: 6px;
            background: ${accent};
        }
        .timeline .dot.note {
            background: color-mix(in oklab, ${accent} 35%, transparent);
        }
        .timeline .dot.email {
            background: ${accent};
        }
        .timeline .dot.create {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }

        .quick .qgrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .facts .list {
            display: grid;
            gap: 8px;
        }
        .facts .list > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .facts .k {
            color: ${muted};
        }
        .facts .v {
            color: ${text};
        }

        .print .ps {
            display: grid;
            gap: 8px;
        }
        .print .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
    `,

    // status pills (visual distinction via accent/danger shades)
    _tmp: styled.div``,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 50;
        background: rgba(2, 6, 23, 0.55);
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
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s ease, color 0.25s ease,
                box-shadow 0.25s ease, transform 0.06s ease;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(1px);
        }
    `,
};

/* status modifiers as global helper classes */
export const GlobalStatusStyles = styled.div`
    .pill.draft,
    .status.draft {
        background: color-mix(in oklab, ${accent} 8%, transparent);
    }
    .pill.sent,
    .status.sent {
        background: color-mix(in oklab, ${accent} 12%, transparent);
    }
    .pill.viewed,
    .status.viewed {
        background: color-mix(in oklab, ${accent} 18%, transparent);
    }
    .pill.accepted,
    .status.accepted {
        background: color-mix(in oklab, ${accent} 22%, transparent);
    }
    .pill.declined,
    .status.declined {
        background: color-mix(in oklab, ${danger} 14%, transparent);
        border-color: ${danger};
    }
    .pill.expired,
    .status.expired {
        background: color-mix(in oklab, ${danger} 10%, transparent);
        border-color: ${danger};
    }
`;
