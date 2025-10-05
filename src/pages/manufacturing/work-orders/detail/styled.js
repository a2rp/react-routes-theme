import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 16px;

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        .muted {
            color: ${muted};
        }
        .dot {
            margin: 0 8px;
            color: ${muted};
        }

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            .crumb {
                color: ${muted};
            }
            .crumb:hover {
                color: ${accent};
            }
            .current {
                color: ${text};
                font-weight: 600;
            }
            .sep {
                color: ${muted};
            }
        }

        .titlebar {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
            h1 {
                font-size: 24px;
                line-height: 1.3;
                margin-bottom: 6px;
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
            }
            .right.actions {
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
            }
            .btn {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .btn:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            .btn.danger:hover {
                box-shadow: 0 0 0 3px
                    color-mix(in oklab, crimson 22%, transparent);
            }
            .btn.link {
                text-decoration: none;
                display: inline-flex;
                align-items: center;
            }
        }

        .badge {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: color-mix(in oklab, ${card} 92%, transparent);
            /* white-space: nowrap;
            border: 1px solid #f00; */
        }
        .tone-priority {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .tone-soft {
            color: ${text};
            background: color-mix(in oklab, ${card} 80%, transparent);
        }
        .tone-planned {
            color: ${text};
        }
        .tone-progress {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .tone-done {
            color: #7cd992;
            border-color: #2b9957;
            background: color-mix(in oklab, #2b9957 14%, transparent);
        }
        .tone-hold {
            color: #f0c36a;
            border-color: #b8872a;
            background: color-mix(in oklab, #b8872a 12%, transparent);
        }
        .tone-cancel {
            color: #ff8c8c;
            border-color: #a43a3a;
            background: color-mix(in oklab, #a43a3a 14%, transparent);
        }

        .strip {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
            .tile {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px;
                box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
                .k {
                    color: ${muted};
                    font-size: 12px;
                }
                .v {
                    margin-top: 6px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .chip {
                    border: 1px dashed ${border};
                    padding: 2px 6px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .chip.soft {
                    opacity: 0.9;
                }
                a {
                    color: ${text};
                }
                a:hover {
                    color: ${accent};
                }
            }
        }
        @media (max-width: 1200px) {
            .strip {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .strip {
                grid-template-columns: 1fr;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 16px;
            align-items: start;
        }
        @media (max-width: 1200px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .col {
            display: grid;
            gap: 16px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
        .card-h {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                font-size: 16px;
            }
            .links {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .links a {
                color: ${muted};
            }
            .links a:hover {
                color: ${accent};
            }
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 700px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            margin-top: 4px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${border};
                vertical-align: top;
            }
            th {
                text-align: left;
                color: ${accent};
                background: ${card};
            }
            tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .op-notes {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        .op-notes .note {
            font-size: 13px;
            color: ${text};
        }

        .list {
            list-style: none;
            display: grid;
            gap: 8px;
        }
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${card} 94%, transparent);
        }
        .row .l .name {
            color: ${text};
        }
        .row .r {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip-user {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 4px 10px;
            background: color-mix(in oklab, ${card} 92%, transparent);
            color: ${text};
            text-decoration: none;
        }
        .chip-user:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .avatar {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            border: 1px solid ${border};
            display: grid;
            place-items: center;
            font-size: 11px;
            background: color-mix(in oklab, ${card} 85%, transparent);
        }

        .links-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            a {
                display: inline-flex;
                gap: 6px;
                color: ${text};
            }
            a:hover {
                color: ${accent};
            }
        }
        @media (max-width: 700px) {
            .links-grid {
                grid-template-columns: 1fr;
            }
        }

        .notes {
            color: ${text};
            line-height: 1.7;
        }
        .notes a {
            color: ${accent};
        }

        .activity {
            list-style: none;
            display: grid;
            gap: 10px;
        }
        .activity li {
            display: grid;
            grid-template-columns: 200px 1fr auto;
            gap: 10px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 8px;
        }
        @media (max-width: 900px) {
            .activity li {
                grid-template-columns: 1fr;
            }
        }
        .activity .time {
            color: ${muted};
        }
        .activity .by {
            text-align: right;
        }
        @media (max-width: 900px) {
            .activity .by {
                text-align: left;
            }
        }

        .audit {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 8px;
            align-items: center;
        }
        .audit .k {
            color: ${muted};
        }
        .audit .v {
            color: ${text};
        }

        .explore {
            margin-top: 16px;
        }
        .explore .links {
            margin-top: 8px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .explore a {
            color: ${muted};
        }
        .explore a:hover {
            color: ${accent};
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .panel {
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            width: min(520px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
        h3 {
            margin-bottom: 8px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};

export const Page = Styled.Page;
