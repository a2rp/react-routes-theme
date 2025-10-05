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
        display: grid;
        gap: 16px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        align-items: center;

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

        .breadcrumbs {
            margin-top: 8px;
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

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btn.primary {
            border-color: ${accent};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,

    Stats: styled.section`
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
        padding: 14px 16px;

        .item {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            margin-top: 6px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .label-low {
            color: ${accent};
        }
        .label-critical {
            color: ${text};
            background: color-mix(in oklab, ${accent} 14%, transparent);
            padding: 2px 6px;
            border-radius: 8px;
            display: inline-block;
        }
        @media (max-width: 980px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    Toolbar: styled.section`
        padding: 12px;
        display: grid;
        gap: 12px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 180px 180px 200px;
            align-items: end;
        }
        .row.actions {
            grid-template-columns: 1fr auto;
        }

        @media (max-width: 980px) {
            .row {
                grid-template-columns: 1fr;
            }
            .row.actions {
                grid-template-columns: 1fr;
            }
            .right {
                justify-self: start;
            }
        }

        .group label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .group input,
        .group select {
            width: 100%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .group input:focus,
        .group select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .group.checkbox .inline {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .row.actions {
            display: grid;
            align-items: center;
        }
        .right {
            display: inline-flex;
            gap: 8px;
            justify-self: end;
        }

        .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,

    TableWrap: styled.section`
        overflow: auto;
        border: 1px solid ${border};
        border-radius: 12px;

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            font-weight: 700;
            color: ${text};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        tbody tr[data-status="Critical"] .title .link,
        tbody tr[data-status="Low"] .title .link {
            color: ${accent};
        }

        .itemCell .title {
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .itemCell .title .link {
            font-weight: 700;
        }
        .itemCell .sku {
            color: ${muted};
            font-size: 12px;
        }
        .itemCell .meta {
            margin-top: 6px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 3px 8px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-size: 12px;
        }
        .chip.status.ok {
            opacity: 0.8;
        }
        .chip.status.low {
        }
        .chip.status.critical {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }

        .bar {
            margin-top: 8px;
            height: 6px;
            background: color-mix(in oklab, ${card} 92%, transparent);
            border: 1px solid ${border};
            border-radius: 8px;
            overflow: hidden;
        }
        .bar .fill {
            display: block;
            height: 100%;
            background: ${accent};
        }

        .bold {
            font-weight: 700;
        }
        .actions {
            text-align: right;
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .btnLink {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            text-decoration: none;
        }
        .btnLink:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .btnTiny {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
        }
        .btnTiny:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnTiny:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .empty {
            padding: 24px 0;
            text-align: center;
        }
        .empty .big {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .empty .sub {
            color: ${muted};
        }
    `,

    PrintCard: styled.section`
        padding: 14px 16px;

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 8px;
            margin-bottom: 10px;
        }
        .grid .k {
            color: ${muted};
        }
        .grid .v {
            color: ${text};
        }
        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .list {
            display: grid;
            gap: 8px;
        }
        .line {
            display: grid;
            grid-template-columns: 1.3fr 2fr;
            gap: 10px;
        }
        .line .name {
            font-weight: 700;
        }
        .line .meta {
            display: flex;
            gap: 12px;
            color: ${muted};
            flex-wrap: wrap;
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
        width: min(540px, 92vw);
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        color: ${text};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
        }

        .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
            border-radius: 10px;
            padding: 8px 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
