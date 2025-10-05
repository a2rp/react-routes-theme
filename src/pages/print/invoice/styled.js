import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 12px)";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        color: ${text};
        padding: 16px;

        /* toggles */
        &[data-compact="on"] table tbody td,
        &[data-compact="on"] table thead th {
            padding-top: 6px;
            padding-bottom: 6px;
        }

        &[data-gridlines="off"] table,
        &[data-gridlines="off"] .card {
            border-color: transparent;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: ${shadow};
        }
        a {
            color: ${text};
        }
    `,

    Toolbar: styled.div`
        margin-bottom: 14px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
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

        .toggles {
            display: flex;
            gap: 14px;
            align-items: center;
        }
        .toggle {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${muted};
        }
        .toggle input {
            accent-color: currentColor;
        }
    `,

    PrintArea: styled.div`
        width: 100%;
        display: grid;
        gap: 14px;

        .inv-header {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 14px;
            align-items: stretch;
        }
        .brand {
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 14px;
            padding: 14px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: ${card};
            box-shadow: ${shadow};
        }
        .logo {
            width: 100px;
            height: 100px;
            border: 1px solid ${border};
            border-radius: ${radius};
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08),
                transparent
            );
        }
        .seller h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
            margin-bottom: 6px;
        }
        .seller-name {
            font-weight: 700;
        }
        .seller-meta {
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .doc-meta {
            padding: 14px;
        }
        .doc-meta .status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 10px;
            border-radius: 999px;
            font-weight: 700;
            margin-bottom: 10px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${text};
            text-transform: uppercase;
            letter-spacing: 0.6px;
        }
        .doc-meta .status.paid {
            background: color-mix(in oklab, ${accent} 25%, transparent);
        }
        .doc-meta .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px 12px;
            margin-bottom: 8px;
        }
        .doc-meta .k {
            color: ${muted};
            display: block;
            font-size: 12px;
        }
        .doc-meta .v {
            font-weight: 600;
        }

        .parties {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
        }
        .party {
            padding: 14px;
        }
        .party h3 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .party .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .party address {
            font-style: normal;
            color: ${text};
        }
        .party .muted {
            color: ${muted};
            font-size: 12px;
        }

        .items {
            padding: 0;
            overflow: hidden;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            border: 1px solid ${border};
        }
        thead th {
            text-align: left;
            padding: 10px 10px;
            border-bottom: 1px solid ${border};
            background: ${card};
            color: ${accent};
        }
        tbody td {
            padding: 10px 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover td {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .pname {
            font-weight: 600;
        }

        .summary {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 14px;
        }
        .pay,
        .terms,
        .stamps,
        .totals {
            padding: 14px;
        }
        .pay .rows {
            display: grid;
            gap: 8px;
        }
        .pay .k {
            color: ${muted};
            width: 110px;
            display: inline-block;
        }
        .pay .v {
            font-weight: 600;
        }

        .terms p {
            margin: 6px 0;
        }

        .stamps {
            display: grid;
            grid-template-columns: 110px 1fr 110px;
            align-items: center;
            gap: 16px;
        }
        .stamps .qr {
            text-align: center;
        }
        .stamps .sign .line {
            height: 32px;
            border-bottom: 1px dashed ${border};
            margin-bottom: 4px;
        }
        .stamps .stamp {
            border: 2px dashed ${border};
            border-radius: 8px;
            height: 72px;
            display: grid;
            place-items: center;
            font-weight: 700;
            opacity: 0.8;
        }

        .totals .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            padding: 8px 0;
            border-bottom: 1px dashed ${border};
        }
        .totals .grand {
            font-size: 16px;
            font-weight: 800;
            border-bottom: 0;
            padding-top: 10px;
        }
        .totals .inwords {
            margin-top: 8px;
            font-style: italic;
            color: ${muted};
        }
        .totals .meta {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .inv-footer {
            border-top: 1px solid ${border};
            padding-top: 10px;
            display: grid;
            gap: 6px;
            color: ${muted};
            font-size: 12px;
        }

        @media (max-width: 1100px) {
            .inv-header {
                grid-template-columns: 1fr;
            }
            .parties {
                grid-template-columns: 1fr;
            }
            .summary {
                grid-template-columns: 1fr;
            }
            .stamps {
                grid-template-columns: 1fr 1fr;
            }
        }
    `,
};
