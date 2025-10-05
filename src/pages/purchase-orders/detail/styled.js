import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        padding: 20px;
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

        .topline {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
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
        .btnGhost,
        .btnDanger {
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
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Status: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid ${border};
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
        font-weight: 700;
        font-size: 12px;

        &.st-open {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        &.st-approved {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        &.st-partially-received {
            background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        &.st-closed {
            background: color-mix(in oklab, ${accent} 20%, transparent);
        }
        &.st-cancelled {
            background: color-mix(in oklab, ${danger} 18%, transparent);
            border-color: ${danger};
            color: ${text};
        }
    `,

    Summary: styled.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        padding: 16px 18px;
        margin-bottom: 16px;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 2fr 2fr 2fr;
        }

        .block {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: ${card};
            box-shadow: var(--shadow);
        }
        header {
            font-weight: 700;
            margin-bottom: 6px;
            color: ${text};
        }
        .name {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .address {
            color: ${text};
            opacity: 0.95;
            margin: 6px 0;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            color: ${text};
        }
        .kv span:first-child {
            color: ${muted};
        }
        .link {
            display: inline-block;
            margin-top: 8px;
            color: ${text};
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .link:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .tag {
            border: 1px solid ${border};
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2.2fr 1fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideCard {
            padding: 14px;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto auto auto;
            align-items: center;
            gap: 8px;
        }
        .files .name {
            font-weight: 600;
        }
        .files .size {
            color: ${muted};
            font-size: 12px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .audit {
            display: grid;
            gap: 10px;
        }
        .audit span {
            color: ${muted};
        }
    `,

    Progress: styled.div`
        padding: 14px;
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .pct {
            font-weight: 700;
        }
        .bar {
            width: 100%;
            height: 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            overflow: hidden;
        }
        .bar i {
            display: block;
            height: 100%;
            background: ${accent};
        }
        .hint {
            margin-top: 8px;
            color: ${muted};
        }
    `,

    Items: styled.section`
        padding: 16px 18px;

        header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 10px;
            .sub {
                color: ${muted};
                font-size: 12px;
            }
            .doc {
                display: grid;
                gap: 6px;
            }
            .doc .k {
                color: ${muted};
                margin-right: 8px;
            }
            .doc > div {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
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
            color: ${text};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .sku {
            color: ${muted};
            font-size: 12px;
        }
        .name {
            font-weight: 600;
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
    `,

    Totals: styled.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1.2fr 1fr;
        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }

        .slim {
            padding: 12px;
        }
        .terms header {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            margin: 6px 0;
        }
        .remarks {
            margin-top: 8px;
            color: ${muted};
        }

        .right .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
        }
        .right .divider {
            height: 1px;
            background: ${border};
            margin: 6px 0;
        }
        .right .grand {
            font-size: 16px;
            font-weight: 800;
        }
        .right .inwords {
            margin-top: 8px;
            color: ${muted};
            font-size: 12px;
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 700;
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
