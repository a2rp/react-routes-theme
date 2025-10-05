import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 14px;

        .muted {
            color: ${muted};
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
            .current {
                color: ${text};
            }
        }

        .header {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1100px) {
            .header {
                grid-template-columns: 1fr;
            }
        }

        .identity {
            display: flex;
            gap: 14px;
            align-items: center;
            .avatar {
                width: 62px;
                height: 62px;
                border-radius: 50%;
                background: color-mix(in oklab, ${accent} 20%, transparent);
                border: 1px solid ${border};
                display: grid;
                place-items: center;
                font-weight: 700;
                font-size: 24px;
                color: ${text};
            }
            .meta h1 {
                font-size: 22px;
                line-height: 1.2;
            }
            .meta .code {
                font-size: 12px;
                color: ${muted};
                margin-left: 8px;
                background: color-mix(in oklab, ${accent} 12%, transparent);
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
            }
            .tags {
                display: flex;
                gap: 8px;
                margin-top: 6px;
            }
            .tag {
                font-size: 11px;
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                background: rgba(0, 0, 0, 0.08);
            }
        }

        .meta-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            > div {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
                font-size: 13px;
            }
            .k {
                color: ${muted};
            }
            .v {
                color: ${text};
            }
        }

        .quicklinks {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .link {
                padding: 6px 10px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: rgba(0, 0, 0, 0.08);
            }
            .link:hover {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .left,
            .right {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            input[type="text"],
            input[type="date"],
            select {
                height: 34px;
                padding: 0 10px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input:focus,
            select:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
            button {
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                cursor: pointer;
                transition: all 0.25s ease;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 14px;
        }
        @media (max-width: 1200px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .rail {
                order: 2;
            }
        }

        .table .table-head {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
            h2 {
                font-size: 18px;
            }
        }

        .table-wrap {
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${accent};
        }
        tbody td {
            border-top: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .strong {
            font-weight: 600;
        }
        .right {
            text-align: right;
        }

        .vitals {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: rgba(0, 0, 0, 0.08);
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-size: 12px;
        }
        .badge.ok {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .badge.warn {
            background: rgba(255, 196, 0, 0.12);
        }
        .badge.muted {
            background: rgba(128, 128, 128, 0.16);
        }

        .actions .ghost {
            background: transparent;
            border: 1px dashed ${border};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .actions .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .actions .ghost.danger:hover {
            border-color: #ff4d4f;
            color: #ff4d4f; /* semantic danger */
            background: rgba(255, 77, 79, 0.08);
        }

        .table-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            .pager {
                display: flex;
                gap: 8px;
            }
            .pager button {
                min-width: 80px;
            }
        }

        .rail .card {
            margin-bottom: 14px;
        }
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 8px;
            align-items: start;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            margin-top: 6px;
        }
        .timeline .t {
            font-weight: 600;
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 9999;

        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            z-index: 1;
            width: min(520px, 92vw);
        }
        .box h3 {
            margin-bottom: 8px;
        }
        .box p {
            color: ${muted};
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 14px;
        }
        .actions button {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
            transition: all 0.25s ease;
        }
        .actions button:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,
};
