import styled from "styled-components";

/* theme tokens with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};

        /* ===== Toolbar ===== */
        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;
        }
        .title {
            display: flex;
            align-items: baseline;
            gap: 10px;
            h1 {
                font-size: 20px;
                line-height: 1.2;
                letter-spacing: 0.3px;
            }
            .sub {
                color: ${muted};
                font-size: 12px;
                margin-left: 6px;
            }
            svg {
                opacity: 0.9;
            }
        }

        .quick-nav {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: ${card};
                color: ${text};
                text-decoration: none;
                font-size: 12px;
                transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                    background 0.2s;
            }
            .chip:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;

            .search {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background: ${card};
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 6px 10px;
                min-width: 360px;
            }
            .search input {
                background: transparent;
                color: ${text};
                border: none;
                outline: none;
                width: 100%;
                font-size: 13px;
            }
            .search .ghost {
                border: none;
                background: transparent;
                color: ${muted};
                padding: 4px;
                border-radius: 6px;
                cursor: pointer;
            }
            .search .ghost:hover {
                color: ${accent};
            }

            .sp {
                width: 6px;
            }

            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border: 1px solid ${border};
                border-radius: 8px;
                background: ${card};
                color: ${text};
                font-size: 13px;
                cursor: pointer;
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    box-shadow 0.2s, transform 0.06s;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            button:active {
                transform: translateY(1px);
            }
            button.ghost {
                background: transparent;
            }
            button.danger {
                border-color: ${border};
            }
            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
                .actions {
                    flex-wrap: wrap;
                }
                .actions .search {
                    min-width: 100%;
                    order: -1;
                }
            }
        }

        /* ===== Stat cards ===== */
        .cards {
            display: grid;
            grid-template-columns: repeat(4, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 12px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 14px;
        }
        .card.stat {
            display: grid;
            gap: 6px;
        }
        .card.stat .value {
            font-size: 26px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        .card.stat .label {
            color: ${muted};
            font-size: 12px;
        }

        /* ===== Filters ===== */
        .filters {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0 16px;
            flex-wrap: wrap;
        }
        .filters > span {
            color: ${muted};
            font-size: 12px;
        }
        .pill {
            text-decoration: none;
            color: ${text};
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            transition: color 0.2s, border-color 0.2s, background 0.2s,
                box-shadow 0.2s;
        }
        .pill:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        /* ===== Day group ===== */
        .day {
            margin-bottom: 16px;
        }
        .dayHeader {
            display: flex;
            align-items: baseline;
            gap: 10px;
            padding: 8px 2px;
            position: sticky;
            top: 0;
            background: ${bg};
            z-index: 1;
            border-bottom: 1px solid ${border};
        }
        .dayHeader .date {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .dayHeader .hint {
            color: ${muted};
            font-size: 12px;
        }

        /* ===== Timeline ===== */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .row {
            display: grid;
            grid-template-columns: 32px 1fr;
            gap: 10px;
            align-items: start;
        }
        .dot {
            height: 28px;
            width: 28px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .dot.warn {
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .dot.error {
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .rowMain {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 12px;
            display: grid;
            gap: 10px;
        }

        .rowTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 6px;
        }
        .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            font-size: 12px;
        }
        .meta .id {
            font-weight: 600;
        }
        .meta .type {
            color: ${muted};
        }
        .meta .sev {
            padding: 2px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
        }
        .meta .sev.warn {
        }
        .meta .sev.error {
        }
        .meta .ts {
            color: ${accent};
        }

        .rowActions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .rowActions .ghost {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            font-size: 12px;
            cursor: pointer;
            text-decoration: none;
        }
        .rowActions .ghost:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .rowBody {
            display: grid;
            gap: 10px;
        }
        .who,
        .what {
            display: flex;
            gap: 8px;
            align-items: baseline;
            flex-wrap: wrap;
            font-size: 13px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .entity {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
        }
        .entity:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }

        .msg {
            font-size: 13px;
        }

        .details {
            display: grid;
            grid-template-columns: repeat(3, minmax(160px, 1fr));
            gap: 10px;
        }
        .kv {
            background: color-mix(in oklab, ${card} 92%, transparent);
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 10px;
            display: grid;
            gap: 4px;
        }
        .kv span {
            color: ${muted};
            font-size: 12px;
        }
        .kv code {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 12px;
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .links .link {
            text-decoration: none;
            color: ${text};
            border: 1px solid ${border};
            background: ${card};
            border-radius: 8px;
            padding: 6px 10px;
            font-size: 12px;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .links .link:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        @media (max-width: 960px) {
            .details {
                grid-template-columns: 1fr;
            }
            .cards {
                grid-template-columns: repeat(2, 1fr);
            }
            .toolbar {
                grid-template-columns: 1fr;
            }
        }

        /* ===== Modal ===== */
        .modal {
            position: fixed;
            inset: 0;
            backdrop-filter: blur(2px);
            background: rgba(0, 0, 0, 0.4);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modalCard {
            width: min(520px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 14px;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 8px;
        }
        .modalHead h3 {
            font-size: 16px;
        }
        .modalHead .icon {
            background: transparent;
            border: 1px solid ${border};
            border-radius: 8px;
            color: ${text};
            padding: 6px;
            cursor: pointer;
        }
        .modalHead .icon:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .modalBody {
            padding: 10px 0;
            color: ${text};
        }
        .modalBody p {
            margin: 6px 0;
            color: ${text};
        }
        .modalFoot {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding-top: 8px;
        }
        .modalFoot button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s,
                transform 0.06s;
        }
        .modalFoot button:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .modalFoot button:active {
            transform: translateY(1px);
        }
    `,
};
