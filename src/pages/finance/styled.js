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
        padding: 18px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 16px;
        margin-bottom: 16px;
        align-items: center;

        .lhs h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .rhs {
            display: grid;
            grid-auto-flow: column;
            align-items: end;
            gap: 16px;
        }
        .filters {
            display: grid;
            grid-auto-flow: column;
            gap: 12px;
        }
        .f {
            min-width: 140px;
        }
        .f label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .actions {
            display: flex;
            gap: 8px;
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
                box-shadow 0.25s, transform 0.03s;
        }
        .btnPrimary:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    KPIRow: styled.section`
        display: grid;
        grid-template-columns: repeat(6, minmax(220px, 1fr));
        gap: 14px;
        margin-bottom: 16px;

        @media (max-width: 1500px) {
            grid-template-columns: repeat(3, minmax(220px, 1fr));
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    KPI: styled.div`
        padding: 12px 14px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: var(--shadow);

        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 6px;
            letter-spacing: 0.2px;
        }
        .tiny {
            margin-top: 4px;
            color: ${muted};
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            margin-right: 6px;
            margin-top: 8px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    `,

    Spark: styled.div`
        margin-top: 10px;
        svg {
            width: 100%;
            height: 46px;
        }
        polyline {
            fill: none;
            stroke: ${accent};
            stroke-width: 2;
            vector-effect: non-scaling-stroke;
        }
    `,

    Segments: styled.div`
        margin-top: 6px;
    `,

    MainGrid: styled.div`
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        gap: 16px;

        @media (max-width: 1400px) {
            grid-template-columns: 1.5fr 1.5fr 1fr;
        }
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .block {
            padding: 14px;
        }
        .block header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .block h3 {
            font-size: 16px;
        }
        .block .tools {
            display: flex;
            gap: 8px;
        }

        .btnGhost.small {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            color: ${text};
        }
        .btnGhost.small:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost.tiny {
            padding: 4px 8px;
            font-size: 12px;
            border: 1px solid ${border};
            border-radius: 8px;
        }
        .btnGhost.tiny:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .content {
            display: block;
        }
        .content.two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1100px) {
            .content.two {
                grid-template-columns: 1fr;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideBlock {
            padding: 14px;
        }
        .sideBlock h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .list li {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 8px;
            align-items: center;
        }
        .list .label {
            color: ${text};
        }
        .list .value {
            color: ${muted};
            font-size: 12px;
        }

        .linksCol {
            display: grid;
            gap: 8px;
        }
        .linksCol a {
            color: var(--muted, #a0a0a7);
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .linksCol a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Chart: styled.div`
        width: 100%;
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 10px;
        background: ${card};

        .legend {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-right: 14px;
            color: ${muted};
            font-size: 12px;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            display: inline-block;
            border: 1px solid ${border};
        }
        .dot1 {
            background: color-mix(in oklab, ${accent} 45%, transparent);
        }
        .dot2 {
            background: color-mix(in oklab, ${accent} 25%, transparent);
        }
        .dot3 {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        svg {
            width: 100%;
            height: 220px;
            margin-top: 8px;
        }
        .axis {
            stroke: ${border};
            stroke-width: 1;
        }
        .s1,
        .s2,
        .s3 {
            fill: none;
            stroke-width: 2;
            vector-effect: non-scaling-stroke;
        }
        .s1 {
            stroke: ${accent};
        }
        .s2 {
            stroke: color-mix(in oklab, ${accent} 60%, #888);
        }
        .s3 {
            stroke: color-mix(in oklab, ${accent} 35%, #888);
        }
    `,

    MiniStats: styled.div`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 12px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }

        .stat {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${card};
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            margin-top: 4px;
            font-weight: 700;
        }
    `,

    Table: styled.div`
        border: 1px solid ${border};
        border-radius: 10px;
        overflow: hidden;

        .thead {
            background: ${card};
        }
        .tr {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            border-bottom: 1px solid ${border};
        }
        .thead .tr {
            font-weight: 600;
            color: ${accent};
        }
        .tbody .tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .th,
        .td {
            padding: 10px;
        }
        .td.num {
            text-align: right;
        }

        /* variants: 3 / 2 columns used in some tables */
        &[role="table"][aria-label="Top accounts by balance"] .tr {
            grid-template-columns: 2fr 1fr 1fr;
        }
        &[role="table"][aria-label="Recent journal entries"] .tr {
            grid-template-columns: 1.1fr 1.2fr 2fr 1fr;
        }
        &[role="table"][aria-label="Aged receivables"] .tr,
        &[role="table"][aria-label="Aged payables"] .tr {
            grid-template-columns: 1fr 1fr;
        }
    `,

    // confirm modal
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
