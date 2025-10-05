import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        padding: 18px 20px 32px 20px;
        color: ${text};
    `,

    Breadcrumbs: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${muted};
        margin-bottom: 12px;
        a {
            color: ${muted};
        }
        a:hover {
            color: ${accent};
        }
        strong {
            color: ${text};
        }
    `,

    HeadRow: styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 16px;

        .title h1 {
            font-size: 28px;
            line-height: 1.2;
            margin: 0;
        }
        .title .sub {
            color: ${muted};
            margin-top: 4px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions .ghost {
            background: transparent;
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
        }
        button,
        .actions .ghost {
            cursor: pointer;
            color: ${text};
            transition: 0.2s ease;
        }
        button {
            background: ${card};
            border: 1px solid ${border};
            padding: 8px 14px;
            border-radius: 8px;
        }
        button:hover,
        .actions .ghost:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Toolbar: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        margin-bottom: 14px;

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
        .tabs button {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s ease;
        }
        .tabs button.active,
        .tabs button:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filters {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .filters input {
            width: 100%;
            background: ${bg};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 10px 12px;
            outline: none;
            transition: 0.2s ease;
        }
        .filters input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${muted};
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    TableWrap: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 12px;
            text-align: left;
            color: ${accent};
            z-index: 1;
        }
        tbody td {
            border-top: 1px solid ${border};
            padding: 12px;
            vertical-align: top;
        }
        tbody tr:hover td {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .right {
            text-align: right;
        }
        .bold {
            font-weight: 600;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${muted};
        }
        .empty {
            text-align: center;
            padding: 36px 12px;
            color: ${muted};
        }
        .empty .links {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 10px;
        }

        .pill {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${text};
            text-transform: capitalize;
            font-size: 12px;
        }
        .pill.warning {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }
        .pill.error {
            background: color-mix(in oklab, ${accent} 24%, transparent);
        }
    `,

    FooterLinks: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 10px;
        margin-top: 14px;

        .group {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
        }
        .group > span {
            display: inline-block;
            color: ${muted};
            margin-bottom: 8px;
            font-weight: 600;
        }
        .group a {
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 6px;
            color: ${text};
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 8px;
        }
        .group a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
    `,

    DrawerBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 50;
    `,

    DrawerPanel: styled.aside`
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: min(520px, 100%);
        background: ${bg};
        border-left: 1px solid ${border};
        z-index: 60;
        display: flex;
        flex-direction: column;

        .drawer-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            background: ${card};
        }
        .drawer-head h3 {
            margin: 0;
        }
        .drawer-head button {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
        }
        .drawer-head button:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .drawer-body {
            padding: 14px;
            overflow: auto;
            display: grid;
            gap: 14px;
        }
        section {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
        }
        section h4 {
            margin: 0 0 8px 0;
        }
        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 6px 12px;
            align-items: baseline;
        }
        .meta {
            display: grid;
            gap: 8px;
        }
        .meta-row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 6px 12px;
        }
        .k {
            color: ${muted};
        }
        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
        }
        .links .chip:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        z-index: 70;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
    `,
    ModalCard: styled.div`
        background: ${bg};
        border: 1px solid ${border};
        border-radius: 12px;
        width: min(520px, 92vw);
        padding: 14px;

        h3 {
            margin: 0 0 8px 0;
        }
        p {
            color: ${muted};
            margin: 0 0 12px 0;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        .actions button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
        }
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
