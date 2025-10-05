import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        padding: 18px 0 56px;
        color: ${text};
    `,

    HeadBar: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 16px;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 12px;

        h1 {
            font-size: 20px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 4px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            color: ${muted};
            font-size: 12px;
        }
        .meta a {
            color: ${muted};
        }
        .meta a:hover {
            color: ${accent};
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .toggles {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 8px;
        }
        .toggle {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
            font-size: 13px;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Banner: styled.div`
        margin: 10px 0 12px;
        padding: 10px 12px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
    `,

    Sheet: styled.div`
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: ${shadow};
        padding: 18px;

        .sheetHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            margin-bottom: 12px;
            border-bottom: 1px dashed ${border};
            padding-bottom: 12px;
        }

        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
            .logo {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                border: 1px solid ${border};
                background: ${card};
                display: grid;
                place-items: center;
                overflow: hidden;
            }
            .logo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .logo .fallback {
                font-weight: 700;
                color: ${accent};
            }
            h2 {
                font-size: 18px;
            }
            .muted {
                color: ${muted};
            }
        }

        .ident {
            display: grid;
            gap: 6px;
            min-width: 260px;
            .k {
                color: ${muted};
                display: inline-block;
                width: 96px;
            }
            .v {
                color: ${text};
                font-weight: 600;
            }
        }
    `,

    Parties: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin: 12px 0 6px;

        @media (min-width: 980px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .party {
            border: 1px solid ${border};
            border-radius: 12px;
            background: color-mix(in oklab, ${card} 98%, transparent);
            padding: 12px 14px;
            h3 {
                font-size: 14px;
                margin-bottom: 6px;
            }
            .name {
                font-weight: 700;
            }
            .muted {
                color: ${muted};
            }
        }
    `,

    Items: styled.section`
        margin-top: 10px;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            border: 1px solid ${border};
            border-radius: 12px;
            overflow: hidden;
            background: color-mix(in oklab, ${card} 98%, transparent);
        }
        thead th {
            text-align: left;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            padding: 10px;
        }
        td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .right {
            text-align: right;
        }
        .title {
            font-weight: 600;
        }
        .sub {
            font-size: 12px;
        }
    `,

    Totals: styled.section`
        display: grid;
        gap: 14px;
        margin-top: 14px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }

        .cardish {
            border: 1px solid ${border};
            border-radius: 12px;
            background: color-mix(in oklab, ${card} 98%, transparent);
            padding: 12px 14px;
        }

        .notes h4 {
            margin-bottom: 8px;
        }
        .notes p {
            margin-bottom: 6px;
        }

        .numbers .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            padding: 6px 0;
            border-bottom: 1px dashed ${border};
        }
        .numbers .row:last-child {
            border-bottom: none;
        }
        .numbers .head {
            color: ${muted};
            font-weight: 600;
        }
        .numbers .grand span:last-child {
            font-weight: 800;
            font-size: 16px;
        }
        .numbers .amtWords {
            margin-top: 8px;
        }
        .tax {
            margin-top: 6px;
        }
    `,

    SheetFooter: styled.footer`
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        border-top: 1px dashed ${border};
        padding-top: 12px;

        .qr .code {
            font-family: monospace;
            border: 1px dashed ${border};
            display: inline-block;
            padding: 6px 8px;
            border-radius: 8px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }

        .sign {
            text-align: right;
        }
        .sign .line {
            height: 1px;
            width: 220px;
            background: ${border};
            margin: 22px 0 6px auto;
        }
    `,

    Secondary: styled.nav`
        margin-top: 14px;
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${muted};
        .crumb,
        .link {
            color: ${muted};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 10px;
            background: ${card};
        }
        .crumb:hover,
        .link:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .current {
            color: ${text};
        }
        .spacer {
            flex: 1;
        }
    `,
};
