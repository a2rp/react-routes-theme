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
        padding: 24px 0 64px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
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

        .r {
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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            padding: 16px 18px;
        }

        .toolbar {
            margin-bottom: 12px;
            .row {
                display: grid;
                grid-template-columns: 1fr 220px 140px;
                gap: 12px;
            }
            .field {
                display: grid;
                gap: 6px;
            }
            .grow {
                grid-column: 1 / span 1;
            }
            .actions {
                align-self: end;
            }
            input,
            select {
                width: 100%;
            }
            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 12px;
            }
            .chip {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 999px;
                padding: 6px 10px;
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.05s;
            }
            .chip:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .chip.on {
                background: color-mix(in oklab, ${accent} 10%, transparent);
                border-color: ${accent};
                color: ${text};
            }
            .chip:active {
                transform: translateY(1px);
            }
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 6px 0 12px;
            .pill {
                border: 1px solid ${border};
                border-radius: 20px;
                padding: 4px 10px;
                font-weight: 700;
                font-size: 12px;
                color: ${text};
            }
        }

        .tableWrap {
            border: 1px solid ${border};
            border-radius: 12px;
            overflow: hidden;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
            line-height: 1.6;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${text};
            text-align: left;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.08);
        }
        .empty {
            text-align: center;
            padding: 24px;
            color: ${muted};
        }

        code.hsn {
            background: color-mix(in oklab, ${accent} 10%, transparent);
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid ${border};
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .cat {
            font-weight: 700;
        }
        .formtags {
            margin-top: 4px;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .formtag {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-size: 12px;
        }
        .examples {
            display: grid;
            gap: 4px;
        }
        .ex {
            display: inline-block;
            border: 1px solid ${border};
            background: ${card};
            padding: 2px 6px;
            border-radius: 6px;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 48px;
            padding: 4px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            font-weight: 800;
        }

        /* badge color variants derived from accent for visual rhythm */
        .rateZero {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .rateLow {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .rateMid {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .rateHigh {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }

        .muted {
            color: ${muted};
        }
    `,

    // right column
    Side: styled.aside``,

    // utility cards in side column
    Stats: styled.div``,

    // shared card skin
    Card: styled.div``,

    // sidebar cards
    // (using .side selectors from Grid)
    // ---
    // Specific blocks
    // ---
    // Stats card
    // (styles embedded in Grid via class selectors to keep file compact)
    // Quick links / Guide / FAQ inherit generic card look
    // ----

    // cards skin (inherit from index.css .card but refining here)
    _: styled.div`
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            padding: 16px;
            color: ${text};
        }
        .card h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .stats .kv {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .stats .kv li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px;
            background: ${card};
        }
        .stats .kv span {
            color: ${muted};
        }
        .stats .kv strong {
            font-size: 16px;
            letter-spacing: 0.3px;
        }

        .quicklinks ul,
        .guide ol {
            margin: 0;
            padding-left: 18px;
        }
        .quicklinks ul {
            list-style: disc;
        }
        .guide ol {
            list-style: decimal;
        }
        .quicklinks a {
            color: ${muted};
        }
        .quicklinks a:hover {
            color: ${accent};
        }

        .faq details {
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            padding: 10px 12px;
            margin-bottom: 8px;
            transition: border-color 0.25s;
        }
        .faq details:hover {
            border-color: ${accent};
        }
        .faq summary {
            cursor: pointer;
            font-weight: 700;
        }
        .faq p {
            margin-top: 8px;
            color: ${text};
        }
    `,
};
