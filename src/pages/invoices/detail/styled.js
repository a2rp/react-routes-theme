import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};

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
        .meta {
            margin-top: 6px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .sep {
            opacity: 0.6;
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
                box-shadow 0.25s, transform 0.06s;
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
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .links {
            list-style: none;
            display: grid;
            gap: 8px;
            padding: 0;
            margin: 0;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
        .cust .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .addr {
            margin-top: 6px;
            color: ${muted};
        }
    `,

    PrintHeader: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-bottom: 14px;
        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .logo {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid ${border};
            display: grid;
            place-items: center;
            font-weight: 800;
            background: ${card};
        }
        .bmeta h3 {
            font-size: 16px;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .invBlock {
            text-align: right;
        }
        .num {
            color: ${muted};
            font-size: 12px;
        }
        .big {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.6px;
        }
        .kv {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            align-items: center;
            font-size: 12px;
            color: ${muted};
        }
    `,

    Addresses: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin-bottom: 12px;
        @media (min-width: 950px) {
            grid-template-columns: repeat(4, 1fr);
        }

        h4 {
            font-size: 13px;
            margin-bottom: 6px;
        }
        .name {
            font-weight: 700;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .dates .kv {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            gap: 12px;
        }
    `,

    TableWrap: styled.div`
        overflow: auto;
        border: 1px solid ${border};
        border-radius: 12px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            background: ${card};
            color: ${accent};
            font-weight: 600;
            padding: 10px;
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .itname {
            font-weight: 600;
        }
        .right {
            text-align: right;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
    `,

    Summary: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        margin-top: 12px;
        @media (min-width: 950px) {
            grid-template-columns: 2fr 1fr;
            align-items: start;
        }

        .left .tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            margin: 0 8px 8px 0;
        }
        .left .note,
        .left .terms {
            margin-top: 10px;
        }
        .left h5 {
            font-size: 13px;
            margin-bottom: 6px;
        }

        .right {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 6px 0;
        }
        .kv.tiny {
            font-size: 12px;
            color: ${muted};
            padding: 2px 0;
        }
        .taxsplit {
            margin-top: 2px;
        }
        .divider {
            height: 1px;
            background: ${border};
            margin: 6px 0;
        }
        .total {
            font-size: 16px;
            font-weight: 800;
        }
        .due strong {
            color: ${accent};
        }
    `,

    SectionHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        .hint {
            color: ${muted};
            font-size: 12px;
        }
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
            gap: 8px;
        }
        .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .empty {
            padding: 8px 0 2px;
        }
    `,

    Pill: styled.span`
        --tone: ${accent};
        ${({ tone }) => (tone === "success" ? "--tone:#22c55e" : "")};
        ${({ tone }) => (tone === "danger" ? `--tone:${danger}` : "")};
        ${({ tone }) => (tone === "warning" ? `--tone:${warn}` : "")};
        ${({ tone }) => (tone === "muted" ? "--tone:#94a3b8" : "")};
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        border-radius: 999px;
        border: 1px solid ${border};
        background: color-mix(in oklab, var(--tone) 14%, transparent);
        color: ${text};
        font-size: 12px;
        font-weight: 700;
    `,

    // modal
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

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
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .sheet {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 6px;
        }
        .linklike {
            background: transparent;
            border: 0;
            color: ${text};
            text-align: left;
            cursor: pointer;
            padding: 6px 0;
        }
        .linklike:hover {
            color: ${accent};
        }
    `,
};
