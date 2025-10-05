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
        width: 100%;
        padding: 20px 0 64px;
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
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
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
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        button:active:not(:disabled) {
            transform: translateY(1px);
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

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        /* main column */
        .col.main {
            display: grid;
            gap: 16px;
        }

        .card {
            padding: 16px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: var(--shadow);
        }

        /* status */
        .status .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }
        .pill {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.3px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
        }
        .eta {
            color: ${muted};
            font-size: 12px;
        }

        .milestones {
            display: grid;
            grid-template-columns: repeat(5, minmax(120px, 1fr));
            gap: 12px;
            margin-top: 6px;
        }
        .step {
            display: grid;
            justify-items: center;
            text-align: center;
            gap: 8px;
        }
        .step .dot {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid ${border};
            background: transparent;
            transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .step.done .dot {
            background: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .step .label {
            font-size: 12px;
            color: ${muted};
            white-space: nowrap;
        }

        /* map */
        .mapCard .mapHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .mapCard .legend {
            display: grid;
            grid-auto-flow: column;
            gap: 8px;
            align-items: center;
            color: ${muted};
            font-size: 12px;
        }
        .mapCard .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid ${border};
        }
        .mapCard .legend .start {
            background: color-mix(in oklab, ${accent} 30%, transparent);
        }
        .mapCard .legend .hub {
            background: color-mix(in oklab, ${accent} 45%, transparent);
        }
        .mapCard .legend .end {
            background: ${accent};
        }

        .map {
            position: relative;
            overflow: hidden;
            border: 1px dashed ${border};
            border-radius: 12px;
            background: radial-gradient(
                    1200px 300px at 20% 80%,
                    color-mix(in oklab, ${accent} 6%, transparent),
                    transparent
                ),
                radial-gradient(
                    900px 200px at 90% 10%,
                    color-mix(in oklab, ${accent} 5%, transparent),
                    transparent
                );
            height: 320px;
        }
        .map .route {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
        }
        .map .pin {
            position: absolute;
            transform: translate(-50%, -50%);
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid ${border};
            background: ${card};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
        }
        .map .pin.start {
            background: color-mix(in oklab, ${accent} 25%, ${card});
        }
        .map .pin.hub {
            background: color-mix(in oklab, ${accent} 35%, ${card});
        }
        .map .pin.end {
            background: ${accent};
        }
        .map .pin .note {
            position: absolute;
            left: 20px;
            top: -4px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            color: ${text};
            white-space: nowrap;
            box-shadow: var(--shadow);
        }

        /* scans table */
        .scans .scansHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .scans .tools {
            display: flex;
            gap: 8px;
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            z-index: 1;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .muted {
            color: ${muted};
        }

        /* side column */
        .col.side {
            display: grid;
            gap: 16px;
        }
        .facts .kv,
        .carrier .kv {
            display: grid;
            gap: 8px;
        }
        .kv > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${muted};
        }
        .v a {
            color: inherit;
            text-decoration: underline;
        }

        .parties .addr {
            display: grid;
            gap: 14px;
        }
        .parties .label {
            font-size: 11px;
            color: ${muted};
            letter-spacing: 0.3px;
        }
        .parties strong {
            font-size: 14px;
        }

        .carrier .actions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
        }

        /* printable section */
        .print .printHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .labelGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 560px) {
            .labelGrid {
                grid-template-columns: 1fr;
            }
        }
        .labelGrid .left .tiny {
            font-size: 11px;
        }
        .labelGrid .right {
            display: grid;
            gap: 6px;
            align-content: start;
        }
        .barcode {
            width: 100%;
            height: 120px;
            border: 1px solid ${border};
            border-radius: 8px;
        }

        /* general */
        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }
    `,
};
