import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;

        a {
            color: inherit;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }
        .primary {
            background: ${accent};
            color: #fff;
            border-color: ${accent};
        }
        .linklike {
            border: 1px dashed ${border};
            background: transparent;
        }
        button,
        .linklike {
            padding: 8px 14px;
            border-radius: 8px;
            border: 1px solid ${border};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }
        button:hover,
        .linklike:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active,
        .linklike:active {
            transform: translateY(1px);
        }
        button:focus-visible,
        .linklike:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 12px;
        color: ${muted};
        a {
            color: ${muted};
        }
        .current {
            color: ${text};
            font-weight: 600;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};

        .title h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .title .meta {
            color: ${muted};
            margin-top: 6px;
        }
        .title select {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 6px;
            margin-left: 6px;
        }
        .title select:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .actions .linklike {
            color: ${muted};
        }
        .actions .linklike:hover {
            color: ${accent};
        }
    `,

    KpiGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .kpi {
            padding: 14px;
            border: 1px solid ${border};
            border-radius: 12px;
            text-decoration: none;
            transition: transform 0.08s ease, border-color 0.2s ease,
                background 0.2s ease, color 0.2s ease;
        }
        .kpi:hover {
            transform: translateY(-1px);
            border-color: ${accent};
            color: ${text};
            background: rgba(0, 0, 0, 0.06);
        }
        .kpi .label {
            color: ${muted};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 22px;
            margin: 6px 0 4px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .kpi .sub {
            color: ${muted};
            font-size: 12px;
        }
    `,

    QuickLinks: styled.div`
        padding: 14px 16px;
        .ql-head {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .ql-head .muted {
            color: ${muted};
            font-size: 12px;
        }
        .ql-grid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(8, minmax(0, 1fr));
            @media (max-width: 1280px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            @media (max-width: 720px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        a {
            padding: 8px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            text-align: center;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            color: ${muted};
            text-decoration: none;
        }
        a:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    `,

    TwoCol: styled.div`
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 12px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
        .col {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
    `,

    Card: styled.div`
        padding: 14px 16px;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        header h3 {
            font-size: 16px;
        }
        header .seeall {
            font-size: 12px;
            color: ${muted};
            text-decoration: none;
        }
        header .seeall:hover {
            color: ${accent};
        }
        .legend .pill {
            font-size: 11px;
            color: ${muted};
            border: 1px solid ${border};
            padding: 3px 8px;
            border-radius: 999px;
            margin-right: 6px;
        }
        .footlnks {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .linkchip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            text-decoration: none;
            color: ${muted};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .linkchip:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    `,

    Table: styled.div`
        overflow: hidden;
        border: 1px solid ${border};
        border-radius: 10px;

        .thead,
        .tr {
            display: grid;
            grid-template-columns: 2.2fr 1.4fr 0.8fr 0.9fr;
        }
        .thead {
            background: rgba(0, 0, 0, 0.08);
            border-bottom: 1px solid ${border};
            font-weight: 600;
            color: ${muted};
        }
        .thead .th {
            padding: 10px 12px;
        }
        .tbody .tr {
            text-decoration: none;
            color: ${text};
            border-bottom: 1px solid ${border};
            transition: background 0.15s ease, border-color 0.2s ease;
        }
        .tbody .tr:hover {
            background: rgba(0, 0, 0, 0.06);
            border-color: ${accent};
        }
        .td {
            padding: 10px 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (max-width: 720px) {
            .thead,
            .tr {
                grid-template-columns: 1.6fr 0.9fr 0.7fr 0.8fr;
            }
        }
    `,

    ChartPlaceholder: styled.div`
        height: 220px;
        border: 1px dashed ${border};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        .bars {
            display: flex;
            align-items: flex-end;
            gap: 10px;
            flex: 1;
        }
        .bars > div {
            flex: 1;
            background: color-mix(in oklab, ${accent} 35%, transparent);
            border-radius: 6px 6px 0 0;
            border: 1px solid ${border};
        }
        .xlabels {
            display: flex;
            justify-content: space-between;
            color: ${muted};
            font-size: 12px;
            margin-top: 6px;
        }
    `,

    ChartDonut: styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;

        .ring {
            position: relative;
            width: 170px;
            height: 170px;
        }
        .ring .hole {
            position: absolute;
            inset: 20px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 50%;
            box-shadow: inset 0 0 0 60px rgba(0, 0, 0, 0.02);
        }
        .ring .seg {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            /* simple layered arcs as display-only */
            box-shadow: 0 0 0 20px
                color-mix(in oklab, ${accent} 40%, transparent);
        }
        .ring .s1 {
            clip-path: polygon(50% 50%, 100% 0, 100% 100%);
        }
        .ring .s2 {
            clip-path: polygon(50% 50%, 0 0, 100% 0);
            transform: rotate(120deg);
        }
        .ring .s3 {
            clip-path: polygon(50% 50%, 0 100%, 0 0);
            transform: rotate(210deg);
        }

        .legend {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: ${muted};
            font-size: 13px;
        }
        .legend .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 8px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 40%, transparent);
        }
        .legend .d2 {
            background: color-mix(in oklab, ${accent} 60%, transparent);
        }
        .legend .d3 {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
    `,

    MapPlaceholder: styled.div`
        position: relative;
        height: 220px;
        border: 1px dashed ${border};
        border-radius: 10px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), transparent);

        .blob {
            position: absolute;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: color-mix(in oklab, ${accent} 15%, transparent);
            border: 1px solid ${border};
            filter: blur(2px);
        }
        .b1 {
            left: 12%;
            top: 16%;
        }
        .b2 {
            left: 58%;
            top: 22%;
        }
        .b3 {
            left: 34%;
            top: 54%;
        }
        .b4 {
            left: 70%;
            top: 60%;
        }
    `,

    FooterLinks: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        padding: 14px 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
        .group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        h4 {
            font-size: 14px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            text-decoration: none;
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            color: ${muted};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .links a:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    `,

    Modal: styled.div`
        width: min(520px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        .modal-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        .modal-head h4 {
            font-size: 16px;
        }
        .modal-head .icon {
            background: transparent;
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 2px 8px;
            color: ${muted};
            cursor: pointer;
        }
        .modal-head .icon:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .modal-body {
            padding: 12px 14px;
            color: ${text};
        }
        .modal-foot {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .modal-foot .primary {
            background: ${accent};
            color: #fff;
        }
    `,
};

export default Styled;
