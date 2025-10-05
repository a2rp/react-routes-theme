import styled from "styled-components";

/* theme tokens */
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
        color: ${text};
        padding: 18px;

        .muted {
            color: ${muted};
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            a {
                color: ${muted};
            }
            .sep {
                color: ${muted};
            }
            .current {
                color: ${text};
                font-weight: 600;
            }
        }

        .header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
            .titles h1 {
                font-size: 24px;
                line-height: 1.2;
            }
            .titles .muted {
                margin-top: 4px;
            }
            .toolbar {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .toolbar button {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 14px;
                border-radius: 10px;
                box-shadow: ${shadow};
                transition: all 0.2s ease;
                font-weight: 600;
            }
            .toolbar button:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            .toolbar .danger {
                border-color: ${border};
            }
            .toolbar .danger:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        .grid {
            display: grid;
            gap: 12px;
            margin-bottom: 12px;
        }
        .grid-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .grid-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 1100px) {
            .grid-4 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .grid-4,
            .grid-2 {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .kpi .label {
            color: ${muted};
            font-weight: 600;
            margin-bottom: 6px;
        }
        .kpi .value {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .kpi .hint {
            color: ${muted};
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 6px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
        }
        .pill.active {
            opacity: 0.95;
        }
        .pill.inactive {
            opacity: 0.6;
        }
        .pill.paid {
            opacity: 0.95;
        }
        .pill.active,
        .pill.paid {
            border-color: ${accent};
        }

        h2 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .row .actions button {
            background: ${card};
            border: 1px solid ${border};
            padding: 6px 12px;
            border-radius: 8px;
            color: ${text};
            transition: all 0.2s ease;
        }
        .row .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }

        .pm {
            display: flex;
            align-items: baseline;
            gap: 12px;
        }
        .pm-brand {
            font-weight: 700;
        }
        .pm-last4 {
            letter-spacing: 1px;
        }
        .pm-exp {
            color: ${muted};
        }

        .meta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            margin-top: 12px;
        }
        @media (max-width: 700px) {
            .meta {
                grid-template-columns: 1fr;
            }
        }

        .links,
        .foot-nav,
        .quick-links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 12px;
            a {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${text};
                transition: all 0.2s ease;
                background: transparent;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .features {
            display: grid;
            gap: 6px;
        }
        .features li {
            list-style: none;
            border: 1px dashed ${border};
            border-radius: 8px;
            padding: 6px 10px;
        }

        .cta-row {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .cta-row a,
        .cta-row button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .cta-row a:hover,
        .cta-row button:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }

        .addons {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }
        @media (max-width: 1100px) {
            .addons {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .addons {
                grid-template-columns: 1fr;
            }
        }

        .addon {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 10px;
            align-items: center;
            background: color-mix(in oklab, ${card} 95%, transparent);
        }
        .addon .addon-title {
            font-weight: 600;
        }
        .addon button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .addon button:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }

        table.simple {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.simple th,
        table.simple td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        table.simple thead th {
            background: ${card};
            color: ${accent};
            text-align: left;
        }
        table.simple tfoot th {
            text-align: left;
        }
        .right {
            text-align: right;
        }

        table.hoverable tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        .row-actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .row-actions a,
        .row-actions button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 4px 10px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .row-actions a:hover,
        .row-actions button:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }

        .print-row {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .print-row .note {
            color: ${muted};
        }
    `,
    Modal: styled.div`
        .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .box {
            position: fixed;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            width: min(520px, 94vw);
            padding: 16px;
            z-index: 40;
        }
        h3 {
            margin-bottom: 8px;
        }
        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        .modal-actions button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .modal-actions button:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    `,
};
