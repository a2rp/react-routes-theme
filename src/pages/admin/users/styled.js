import styled from "styled-components";

/* theme tokens */
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const S = {
    Wrapper: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,

    Breadcrumbs: styled.nav`
        font-size: 12px;
        color: ${muted};
        .crumb a {
            color: ${muted};
        }
        .crumb a:hover {
            color: ${accent};
        }
        .sep {
            margin: 0 6px;
            opacity: 0.8;
        }
        .current {
            color: ${text};
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        .left h1 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .left .sub {
            color: ${muted};
        }
        .right .btnRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnRow .btn,
        .btnRow a.btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .btnRow .btn:hover,
        .btnRow a.btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnRow .subtle {
            background: transparent;
        }
    `,

    Toolbar: styled.section`
        display: grid;
        grid-template-columns: 1fr 1.2fr auto;
        gap: 12px;
        align-items: center;
        padding: 12px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};

        .searchCol input {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .searchCol input::placeholder {
            color: ${muted};
        }
        .searchCol input:focus {
            border-color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filtersCol {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: transparent;
            color: ${muted};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .chip.active {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .selectWrap {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .selectWrap label {
            color: ${muted};
        }
        .selectWrap select {
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 10px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .selectWrap select:focus {
            border-color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .actionsCol {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-self: end;
        }
        .btn,
        a.btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .btn:hover,
        a.btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .primary {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    QuickLinks: styled.nav`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        a {
            border: 1px solid ${border};
            background: transparent;
            color: ${muted};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    StatsRow: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        .card.stat {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${shadow};
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-top: 4px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    TableWrap: styled.section`
        width: 100%;
        border: 1px solid ${border};
        border-radius: 12px;
        overflow: hidden;
        background: color-mix(in oklab, ${card} 96%, transparent);
        box-shadow: ${shadow};

        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${text};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            font-weight: 600;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .empty {
            text-align: center;
            padding: 28px 0;
        }
        .empty .title {
            font-weight: 600;
        }
        .empty .sub {
            color: ${muted};
        }

        .userCell {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            border: 1px solid ${border};
            background: ${card};
            font-size: 12px;
        }
        .userMeta .name {
            color: ${text};
            text-decoration: none;
        }
        .userMeta .name:hover {
            color: ${accent};
        }
        .userMeta .id {
            color: ${muted};
            font-size: 12px;
        }

        .link {
            color: ${text};
            text-decoration: none;
        }
        .link:hover {
            color: ${accent};
        }

        .pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            color: ${muted};
            font-size: 12px;
        }
        .pill.active {
            color: ${accent};
            border-color: ${accent};
        }
        .pill.pending {
            color: ${text};
            border-color: ${border};
            background: rgba(255, 255, 255, 0.04);
        }
        .pill.suspended {
            color: ${muted};
            border-style: dashed;
        }

        .rowActions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .btnRow,
        .btnRow.subtle {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btnRow.subtle {
            background: transparent;
        }
        .btnRow:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnRow.danger:hover {
            color: #ff7a7a;
            border-color: #ff7a7a;
        }
    `,

    FooterLinks: styled.footer`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        .group {
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            padding: 12px;
        }
        .title {
            font-weight: 600;
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${muted};
            transition: all 0.2s ease;
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            width: min(720px, 96vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }
        .head h3 {
            margin: 0 0 6px 0;
        }
        .body {
            color: ${text};
        }
        .body .modalList {
            margin: 8px 0 0 16px;
        }
        .body .modalList li {
            margin: 4px 0;
            color: ${muted};
        }
        .foot {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .foot .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .foot .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
