import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;

        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
        button.ghost {
            background: transparent;
        }
        button.linkish {
            padding: 0;
            border: none;
            background: transparent;
            color: ${accent};
        }
    `,

    Topbar: styled.div`
        position: sticky;
        top: 0;
        z-index: 10;
        background: var(--bg, #0d1117);
        border-bottom: 1px solid ${border};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 10px;

        h1 {
            font-size: 20px;
            letter-spacing: 0.3px;
            margin-bottom: 4px;
        }
        .left {
            display: flex;
            flex-direction: column;
        }
        .right {
            display: flex;
            gap: 8px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
            strong {
                color: ${text};
            }
        }
    `,

    Filters: styled.div`
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .row {
            display: grid;
            grid-template-columns: repeat(5, minmax(160px, 1fr));
            gap: 12px;
        }
        label {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 12px;
            color: ${muted};
        }
        select {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 10px;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .asof {
            align-self: center;
            color: ${muted};
        }
        .asof span {
            color: ${text};
        }

        .quick {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .quick a {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
        }
        .quick a:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Kpis: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(240px, 1fr));
        gap: 12px;

        .kpi {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .kpi .label {
            color: ${muted};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .kpi .meta {
            color: ${muted};
            font-size: 12px;
        }
        .kpi .links {
            display: flex;
            gap: 10px;
            margin-top: 6px;
        }
        .kpi .links a {
            border-bottom: 1px dashed ${border};
        }
        .kpi .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(240px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    StatusRow: styled.div`
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-size: 12px;
        }
        .pill.ok {
            box-shadow: inset 0 0 0 1000px
                color-mix(in oklab, ${accent} 12%, transparent);
        }
        .pill.warn {
            box-shadow: inset 0 0 0 1000px rgba(255, 196, 0, 0.12);
        }
        .pill.info {
            box-shadow: inset 0 0 0 1000px rgba(147, 197, 253, 0.12);
        }
        .spacer {
            flex: 1;
        }
    `,

    ThreeCol: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(280px, 1fr));
        gap: 12px;

        .panel {
            display: flex;
            flex-direction: column;
        }
        .panelHead {
            padding: 12px 12px 8px;
            border-bottom: 1px solid ${border};
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .panelBody {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .numRow {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .numRow .num {
            font-size: 18px;
            font-weight: 700;
            display: block;
        }
        .numRow .cap {
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions a {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
        }
        .actions a:hover {
            border-color: ${accent};
            color: ${accent};
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,

    TableBlock: styled.div`
        padding: 10px;

        .head {
            padding: 4px 6px 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            h3 {
                font-size: 16px;
            }
            .links {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            .links a {
                border-bottom: 1px dashed ${border};
            }
            .links a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 8px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            color: ${accent};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .links {
            display: inline-flex;
            gap: 10px;
            align-items: center;
        }
    `,

    Timeline: styled.div`
        padding: 12px;

        h3 {
            margin-bottom: 10px;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 14px;
        }
        li {
            display: grid;
            grid-template-columns: 16px 1fr;
            align-items: start;
            gap: 10px;
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 999px;
            margin-top: 6px;
            border: 2px solid ${border};
        }
        .dot.ok {
            background: color-mix(in oklab, ${accent} 40%, transparent);
        }
        .dot.info {
            background: rgba(147, 197, 253, 0.4);
        }
        .dot.warn {
            background: rgba(255, 196, 0, 0.5);
        }
        .content .t {
            font-weight: 600;
        }
        .content .d {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        .content .links {
            display: flex;
            gap: 10px;
            margin-top: 6px;
        }
    `,

    QuickGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        gap: 12px;

        .q {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .q .t {
            font-weight: 600;
        }
        .q .c {
            color: ${muted};
            font-size: 12px;
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,

    ModalCard: styled.div`
        width: min(560px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        display: flex;
        flex-direction: column;

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 12px 8px;
            border-bottom: 1px solid ${border};
        }
        .body {
            padding: 12px;
            color: ${text};
        }
        .body p {
            margin-bottom: 8px;
        }
        .hints {
            color: ${muted};
            font-size: 12px;
            margin-left: 18px;
        }
        .foot {
            padding: 12px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `,
};
