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
        max-width: 1200px;
        margin: 0 auto;
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnPrimary:hover,
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        [aria-disabled="true"] {
            opacity: 0.65;
            cursor: not-allowed;
        }
        a.btnGhost {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }
    `,

    KpiRow: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .v {
            font-size: 20px;
            font-weight: 700;
        }
    `,

    Toolbar: styled.section`
        padding: 14px 16px;
        margin-bottom: 16px;
        display: grid;
        gap: 12px;
        .search input {
            width: 100%;
            height: 40px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            color: ${text};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            border-color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filters {
            display: grid;
            gap: 10px;
        }
        .letters {
            display: grid;
            grid-template-columns: repeat(13, minmax(0, 1fr));
            gap: 6px;
        }
        .letters button {
            height: 32px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .letters button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .letters button.on {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            color: ${accent};
        }

        .tags {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .tags .label {
            color: ${muted};
            font-size: 12px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${card};
            color: ${text};
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.on,
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin-bottom: 16px;
        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1080px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .brandCard {
            display: grid;
            grid-template-rows: auto auto 1fr auto;
            gap: 10px;
            padding: 14px;
        }
        .logo {
            width: 56px;
            height: 56px;
            border: 1px solid ${border};
            border-radius: 14px;
            background: ${card};
            background-size: cover;
            background-position: center;
            display: grid;
            place-items: center;
            overflow: hidden;
        }
        .fallback {
            font-weight: 700;
            font-size: 20px;
            color: ${text};
            opacity: 0.9;
        }
        .info h3 {
            font-size: 16px;
        }
        .info .muted {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 6px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .stats {
            display: grid;
            gap: 8px;
        }
        .stats .k {
            color: ${muted};
            font-size: 12px;
        }
        .stats .v {
            font-weight: 700;
        }
        .skuRow .skuList {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .skuRow .sku {
            border: 1px dashed ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
        }

        .links {
            display: flex;
            gap: 8px;
            margin-top: 4px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .btnGhost {
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        a.btnGhost {
            text-decoration: none;
        }
    `,

    TableWrap: styled.section`
        padding: 12px 12px 0;
        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4px 4px 10px;
        }
        .tableHeader .muted {
            color: ${muted};
            font-size: 12px;
        }

        .tableScroll {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
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
            text-align: left;
            padding: 10px;
            color: ${accent};
            font-weight: 600;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .brandCell {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .brandCell .avatar {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: ${card};
            background-size: cover;
            background-position: center;
            border: 1px solid ${border};
            display: grid;
            place-items: center;
            overflow: hidden;
        }
        .brandCell .fallback {
            font-weight: 700;
        }
        .brandCell .name {
            font-weight: 600;
        }
        .brandCell .id {
            color: ${muted};
            font-size: 12px;
        }
        .tagsMini {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tagsMini .mini {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            background: ${card};
        }
        .link {
            color: ${text};
            text-decoration: none;
        }
        .link:hover {
            color: ${accent};
            text-decoration: underline;
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    Modal: styled.div`
        width: min(520px, 92vw);
        border-radius: ${radius};
        border: 1px solid ${border};
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
