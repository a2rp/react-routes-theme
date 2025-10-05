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
        color: ${text};
    `,

    StickyBar: styled.div`
        position: sticky;
        top: 0;
        z-index: 10;
        background: ${bg};
        border-bottom: 1px solid ${border};
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 10px 12px;
        gap: 12px;
    `,

    Breadcrumbs: styled.nav`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        a,
        span {
            color: ${muted};
            text-decoration: none;
            font-weight: 500;
        }
        a:hover {
            color: ${accent};
        }
        svg {
            opacity: 0.7;
        }
    `,

    Actions: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;

        a,
        button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        a:hover,
        button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        button:active {
            transform: translateY(1px);
        }
    `,

    HeaderBlock: styled.section`
        padding: 14px 12px;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 12px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        .left h1 {
            font-size: 22px;
            line-height: 1.3;
        }
        .left .dim {
            color: ${muted};
            font-weight: 400;
        }
        .left .meta {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }
    `,

    PillNav: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
        a {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            color: ${muted};
            background: ${card};
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        @media (max-width: 900px) {
            justify-content: flex-start;
        }
    `,

    Badge: styled.span`
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: 1px solid ${border};
        background: ${(p) =>
            p.tone === "danger"
                ? "rgba(255, 99, 99, .12)"
                : p.tone === "warn"
                ? "rgba(255, 165, 0, .12)"
                : "rgba(90,169,255,.12)"};
        color: ${(p) =>
            p.tone === "danger"
                ? "#ff6b6b"
                : p.tone === "warn"
                ? "#ffb84d"
                : accent};
    `,

    Tag: styled.span`
        display: inline-block;
        padding: 4px 8px;
        border: 1px solid ${border};
        border-radius: 8px;
        color: ${muted};
        background: ${card};
    `,

    TagsRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        a {
            text-decoration: none;
        }
    `,

    Card: styled.section`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 14px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    `,

    CardHeader: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        h2,
        h3 {
            font-size: 16px;
        }
        p {
            color: ${muted};
        }
    `,

    SmallLinks: styled.div`
        display: inline-flex;
        gap: 12px;
        a,
        button {
            color: ${muted};
            text-decoration: none;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        a:hover,
        button:hover {
            color: ${accent};
        }
    `,

    KeyValue: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 8px 16px;

        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }

        > div {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 10px;
            align-items: center;
            border-bottom: 1px dashed ${border};
            padding: 6px 0;
        }
        span {
            color: ${muted};
        }
        a {
            color: ${accent};
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `,

    Divider: styled.hr`
        margin: 12px 0;
        border: 0;
        border-top: 1px solid ${border};
    `,

    ThreeCol: styled.div`
        padding: 0 12px;
        display: grid;
        grid-template-columns: 1.2fr 1.2fr 1fr;
        gap: 12px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    TwoCol: styled.div`
        padding: 0 12px;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,

    Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;

        thead th {
            text-align: left;
            padding: 10px;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        .num {
            text-align: right;
        }
        td.actions,
        th.actions {
            text-align: right;
            white-space: nowrap;
        }
        td.actions a,
        td.actions button {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 4px 8px;
            margin-left: 6px;
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        td.actions a:hover,
        td.actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        td.actions button {
            cursor: pointer;
        }
        td.actions button:active {
            transform: translateY(1px);
        }
    `,

    AttachList: styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
        li {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            background: ${card};
        }
        .meta {
            display: grid;
            grid-template-columns: 26px 1fr;
            gap: 10px;
            align-items: center;
        }
        .meta .icon {
            font-size: 20px;
            opacity: 0.8;
        }
        .meta .muted {
            color: ${muted};
            font-size: 12px;
        }
        .actions {
            display: inline-flex;
            gap: 10px;
            align-items: center;
        }
        .actions a,
        .actions button {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${card};
            color: ${text};
            text-decoration: none;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        .actions button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
        }
    `,

    Empty: styled.div`
        border: 1px dashed ${border};
        border-radius: 10px;
        padding: 24px;
        text-align: center;
        color: ${muted};
    `,

    Timeline: styled.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
        li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 10px;
            align-items: start;
        }
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            margin-top: 6px;
        }
        .content .when {
            color: ${muted};
            font-size: 12px;
        }
        .content .label {
            margin-top: 2px;
        }
    `,

    Related: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }

        h4 {
            margin-bottom: 6px;
        }
        ul {
            padding-left: 16px;
        }
        .muted {
            color: ${muted};
        }
    `,

    PrintGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    ModalCard: styled.div`
        width: min(560px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        overflow: hidden;

        header {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 16px;
            }
            .icon {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                padding: 4px;
                cursor: pointer;
            }
            .icon:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
        .body {
            padding: 14px 12px;
            color: ${text};
        }
        footer {
            padding: 10px 12px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        footer button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        footer button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    `,
};
