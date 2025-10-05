import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 14px)";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        padding: 20px 0 60px;

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

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 20px;
        margin-bottom: 14px;

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
            flex-wrap: wrap;
        }

        .pill {
            padding: 2px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
    `,

    Milestones: styled.section`
        padding: 12px 16px;
        margin-bottom: 16px;

        .meter {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
            list-style: none;
            padding: 0;
            margin: 0 0 10px;
            position: relative;
        }
        .meter::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 17px;
            height: 2px;
            background: ${border};
        }
        .meter li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
            align-items: start;
            position: relative;
        }
        .meter .dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid ${border};
            background: ${card};
            z-index: 1;
        }
        .meter li.done .dot {
            background: ${accent};
            border-color: ${accent};
        }
        .meter li.current .dot {
            box-shadow: 0 0 0 4px ${accentSoft};
        }

        .label .k {
            font-weight: 700;
        }
        .label .v {
            color: ${muted};
            font-size: 12px;
        }

        .lastScan {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            border-top: 1px solid ${border};
            padding-top: 10px;
        }
        @media (max-width: 900px) {
            .lastScan {
                grid-template-columns: 1fr;
            }
            .meter {
                grid-template-columns: 1fr 1fr;
            }
            .meter::before {
                display: none;
            }
        }
    `,

    Stats: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        margin-bottom: 16px;

        .stat {
            padding: 12px 14px;
            display: grid;
            gap: 6px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 16px;
            font-weight: 700;
        }
        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main .card {
            padding: 14px 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .sectionHead {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            margin-bottom: 10px;
            h3 {
                font-size: 16px;
            }
            .rightSmall {
                color: ${muted};
                font-size: 12px;
            }
        }

        .summaryGrid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
            }

            .block {
                border: 1px solid ${border};
                border-radius: ${radius};
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            .blockHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            address {
                font-style: normal;
            }
            .name {
                font-weight: 700;
            }
            .kv {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 10px;
                margin-bottom: 8px;
            }
            .kv .k {
                color: ${muted};
            }
            .kv.total .v {
                font-weight: 800;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: ${radius};
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            font-weight: 700;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${border};
            background: ${card};
            color: ${accent};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        td.num,
        th.num {
            text-align: right;
        }

        .printGrid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .kv {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 8px;
            }
            .kv .k {
                color: ${muted};
            }
        }

        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: ${card};
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }
        .timeline .note {
            font-size: 12px;
        }

        .map .mapBox {
            position: relative;
            height: 180px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: color-mix(in oklab, ${card} 94%, transparent);
            overflow: hidden;
            margin-top: 8px;
        }
        .map .line {
            position: absolute;
            left: 10%;
            right: 10%;
            top: 50%;
            height: 2px;
            background: ${accent};
        }
        .map .pin {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .map .pin.origin {
            left: 10%;
            top: calc(50% - 6px);
        }
        .map .pin.hub {
            left: 50%;
            top: calc(50% - 6px);
        }
        .map .pin.dest {
            left: 90%;
            top: calc(50% - 6px);
        }

        .map .legend {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 8px;
            color: ${muted};
        }
        .map .legend .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            margin-right: 6px;
        }
        .map .legend .origin {
            background: ${accent};
        }
        .map .legend .hub {
            background: color-mix(in oklab, ${accent} 80%, transparent);
        }
        .map .legend .dest {
            background: color-mix(in oklab, ${accent} 60%, transparent);
        }
    `,

    Banner: styled.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: color-mix(in oklab, ${accent} 12%, transparent);
    `,

    // modal
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,
    Modal: styled.div`
        width: min(560px, 92vw);
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: ${radius};
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.38);
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
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,
};
