import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const bg = "var(--bg, #0d1117)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        width: 100%;
        display: block;
    `,

    Header: styled.header`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 18px 18px 12px;
        margin-bottom: 16px;
        box-shadow: ${shadow};

        .titleRow {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            align-items: start;
        }
        .left .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            color: ${muted};
            margin-bottom: 4px;
            user-select: none;
        }
        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin-bottom: 6px;
            letter-spacing: 0.4px;
        }
        .sub {
            color: ${muted};
            max-width: 70ch;
        }
        .right {
            display: grid;
            gap: 8px;
            justify-items: end;
        }
        .meta {
            font-size: 12px;
            color: ${muted};
            strong {
                color: ${text};
                margin-left: 6px;
            }
        }
        .links {
            display: flex;
            gap: 8px;
            a {
                border: 1px solid ${border};
                background: ${bg};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${text};
                transition: border-color 0.2s, color 0.2s, background 0.2s;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    `,

    Actions: styled.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;

        .left {
            display: flex;
            flex-wrap: wrap;
            gap: 10px 12px;
            align-items: center;
        }

        .search {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${bg};
            input {
                background: transparent;
                border: 0;
                color: ${text};
                outline: none;
                font-size: 13px;
                width: 260px;
            }
        }

        .badges {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .badge {
            border: 1px solid ${border};
            background: ${bg};
            color: ${muted};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
        }

        .right {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        button,
        .ghost {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 600;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        button:hover,
        .ghost:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .primary {
            box-shadow: ${shadow};
        }
    `,

    QuickNav: styled.nav`
        margin-top: 12px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            color: ${muted};
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            background: ${bg};
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    TableWrap: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
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
            text-align: left;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            color: ${accent};
            z-index: 1;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }

        .roleCell {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            font-weight: 700;
            border: 1px solid ${border};
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.06),
                rgba(0, 0, 0, 0.06)
            );
        }
        .label .name {
            font-weight: 700;
        }
        .label .id {
            color: ${muted};
            font-size: 12px;
        }

        .muted {
            color: ${muted};
        }

        .permRow {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.06);
            font-size: 12px;
            color: ${text};
        }
        .linkish {
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .linkish:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 12px;
            border: 1px solid ${border};
            background: rgba(0, 0, 0, 0.06);
        }
        .status.active {
        }
        .status.restricted {
            opacity: 0.9;
        }
        .status.deprecated {
            opacity: 0.7;
            text-decoration: line-through;
        }

        .datetime .d {
            font-weight: 600;
        }
        .datetime .t {
            color: ${muted};
            font-size: 12px;
        }

        .rowActions {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            justify-content: flex-end;
        }
        .rowActions .sm {
            padding: 6px 8px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .rowActions .ghost {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, background 0.2s,
                transform 0.05s;
        }
        .rowActions .ghost:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        .rowActions .danger {
            border: 1px dashed ${border};
            background: ${card};
            color: ${text};
            cursor: not-allowed;
            opacity: 0.6;
        }
    `,

    Empty: styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
        padding: 18px;
        .text {
            display: grid;
        }
        .text span {
            color: ${muted};
        }
        .ghost {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            cursor: pointer;
        }
        .ghost:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
    `,

    InfoBar: styled.div`
        position: sticky;
        bottom: 0;
        margin-top: 12px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 10px 12px;
        box-shadow: ${shadow};
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;

        .left {
            display: inline-flex;
            gap: 10px;
            align-items: center;
            color: ${muted};
        }
        .right {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .right .ghost,
        .right .primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .right .ghost:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        .right .primary {
            box-shadow: ${shadow};
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1000;
        padding: 16px;
    `,

    Modal: styled.div`
        width: min(560px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        box-shadow: ${shadow};
        overflow: hidden;
        display: grid;

        .head {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
            h3 {
                margin: 0;
            }
        }
        .body {
            padding: 16px;
            color: ${text};
            p {
                margin: 0;
                color: ${text};
            }
        }
        .foot {
            padding: 12px 16px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                font-weight: 700;
                transition: color 0.2s, border-color 0.2s, background 0.2s;
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            .primary {
                box-shadow: ${shadow};
            }
        }
    `,
};
