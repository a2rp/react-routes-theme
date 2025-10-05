import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";
const warn = "#f59e0b";
const danger = "#ef4444";

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

        .l h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
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
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
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

    Controls: styled.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 160px 160px 1fr auto;
            gap: 12px;
            align-items: end;
        }
        @media (max-width: 920px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
        }

        label {
            display: block;
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .field.grow input {
            width: 100%;
        }
        .cta {
            display: flex;
            gap: 8px;
        }
    `,

    KpiGrid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }
    `,

    KpiCard: styled.div`
        padding: 14px 16px;
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 6px;
        }
        .s {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        .d {
            margin-top: 10px;
            font-weight: 600;
            color: ${accent};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }

        .sectHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .sectHead .hint {
            color: ${muted};
            font-size: 12px;
        }
        .pipeline .row,
        .regions .row {
            display: grid;
            grid-template-columns: 120px 1fr 60px;
            gap: 10px;
            align-items: center;
        }
        .label {
            color: ${muted};
        }
        .bar {
            height: 10px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border: 1px solid ${border};
            border-radius: 999px;
            overflow: hidden;
        }
        .bar > div {
            height: 100%;
            background: ${accent};
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
        }
        .miniBars {
            height: 10px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border: 1px solid ${border};
            border-radius: 999px;
            overflow: hidden;
        }
        .miniBars .bar {
            height: 100%;
            background: ${accent};
        }
        .val {
            text-align: right;
        }
    `,

    GridCols: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .sectHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .link {
            color: ${muted};
        }
        .link:hover {
            color: ${accent};
        }
        .miniMeta {
            margin-top: 10px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    `,

    Table: styled.div`
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            padding: 10px;
            font-weight: 600;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 10px;
        }
        .num {
            text-align: right;
        }
        .w80 {
            width: 80px;
        }
        .rowLink {
            display: inline-flex;
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            color: ${text};
        }
        .rowLink:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }
        .badge.sent {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .badge.open {
            background: color-mix(in oklab, ${warn} 18%, transparent);
            color: ${text};
            border-color: color-mix(in oklab, ${warn} 28%, ${border});
        }
        .badge.converted {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .badge.expired {
            background: color-mix(in oklab, ${danger} 12%, transparent);
            border-color: color-mix(in oklab, ${danger} 28%, ${border});
        }

        .badge.confirmed,
        .badge.packed,
        .badge.invoiced,
        .badge.shipped {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .badge.approved {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .badge.initiated {
            background: color-mix(in oklab, ${warn} 18%, transparent);
        }
    `,

    // modal
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
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
