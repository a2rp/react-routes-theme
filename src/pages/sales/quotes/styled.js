import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)";
const info = "var(--info, #60a5fa)";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .meta h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
        .sub {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
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
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
    `,

    Filters: styled.section`
        padding: 14px 16px;
        margin-bottom: 16px;
        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 960px) {
                grid-template-columns: 1.5fr 0.8fr 0.8fr 0.8fr;
            }
        }
        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .toolbar {
            margin-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .chip {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
        }
    `,

    TableCard: styled.section`
        padding: 0;

        .tableHeader {
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${border};
            .counts {
                display: flex;
                gap: 8px;
                align-items: baseline;
            }
            .muted {
                color: ${muted};
                font-size: 12px;
            }
        }

        .tableWrap {
            overflow: auto;
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
            text-align: left;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            color: ${accent};
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .right {
            text-align: right;
        }

        .mutedCell {
            color: ${muted};
        }

        .badge {
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 600;
            font-size: 12px;
        }
        .status-draft {
            background: color-mix(in oklab, ${info} 10%, transparent);
            color: ${text};
        }
        .status-sent {
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${text};
        }
        .status-accepted {
            background: color-mix(in oklab, ${accent} 20%, transparent);
            color: ${text};
        }
        .status-rejected {
            background: color-mix(in oklab, ${danger} 14%, transparent);
            color: ${text};
        }
        .status-expired {
            background: color-mix(in oklab, ${warn} 16%, transparent);
            color: ${text};
        }

        td.actions .link {
            background: transparent;
            border: 0;
            padding: 0;
            cursor: pointer;
            color: ${text};
            text-decoration: none;
            margin-left: 10px;
        }
        td.actions .link:hover {
            color: ${accent};
            text-decoration: underline;
        }
    `,

    Pagination: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        padding: 12px 16px;
        button {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        button:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .page {
            color: ${muted};
        }
    `,

    Empty: styled.div`
        padding: 38px 16px;
        text-align: center;
        .icon {
            font-size: 30px;
            margin-bottom: 8px;
            opacity: 0.8;
        }
        .title {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .sub {
            color: ${muted};
        }
    `,

    SidebarRow: styled.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .card {
            padding: 14px 16px;
        }
        .info ul {
            margin: 10px 0 0 16px;
        }
        .info .tips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .info .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .shortcuts .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 8px;
        }
        .shortcuts a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 10px;
            background: ${card};
            color: ${text};
        }
        .shortcuts a:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,
    Modal: styled.div`
        width: min(520px, 92vw);
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
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
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }
        .btnPrimary {
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
    `,
};
