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
        padding: 24px 0 60px;
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
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .l h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
            margin-bottom: 4px;
        }
        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            color: ${muted};
            font-size: 12px;
        }

        .r {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
        }
        .chip.paid {
            background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        .chip.overdue {
            border-color: ${danger};
            color: ${danger};
            background: color-mix(in oklab, ${danger} 12%, transparent);
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
                box-shadow 0.25s, transform 0.05s;
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
        button:active {
            transform: translateY(1px);
        }
    `,
    Banner: styled.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,
    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2.2fr 1fr;
        }

        .rail {
            display: grid;
            gap: 16px;
        }
        .rail-card {
            padding: 14px 16px;
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
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 8px;
            border-radius: 8px;
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            margin-top: 6px;
            border: 1px solid ${border};
        }

        .card.printable {
            padding: 16px 18px;
        }

        .grid-top {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 16px;
            align-items: start;
            @media (max-width: 880px) {
                grid-template-columns: 1fr;
            }
        }

        .org {
            display: flex;
            gap: 14px;
            align-items: flex-start;
        }
        .logo {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: ${card};
            display: grid;
            place-items: center;
            font-weight: 800;
            border: 1px solid ${border};
        }
        .org-meta h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
        }

        .inv-meta {
            display: grid;
            gap: 10px;
        }
        .inv-meta table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .inv-meta th {
            text-align: left;
            color: ${muted};
            width: 40%;
            padding: 4px 0;
        }
        .inv-meta td {
            padding: 4px 0;
        }
        .barcode {
            height: 44px;
            width: 100%;
            background: repeating-linear-gradient(
                90deg,
                #000 0,
                #000 1px,
                transparent 1px,
                transparent 3px
            );
            opacity: 0.5;
            border-radius: 6px;
        }

        .grid-party {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 14px;
            margin-top: 12px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }
        .party {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: ${card};
        }
        .party h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .party .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .party.pay .qr {
            margin-top: 8px;
            width: 120px;
            height: 120px;
            border: 1px dashed ${border};
            border-radius: 8px;
            background: repeating-conic-gradient(
                from 45deg,
                #000 0 4%,
                transparent 0 8%
            );
            opacity: 0.3;
        }

        .items table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 14px;
        }
        .items th,
        .items td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        .items thead th {
            position: sticky;
            top: 0;
            background: ${card};
            z-index: 1;
        }
        .items .itm {
            font-weight: 600;
        }
        .ta-r {
            text-align: right;
        }

        .grid-summary {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-top: 14px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }

        .left .box,
        .right .box {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: ${card};
        }
        .left .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 6px 0;
        }
        .left .row.total {
            border-top: 1px dashed ${border};
            margin-top: 6px;
            padding-top: 10px;
            font-weight: 800;
        }
        .words {
            margin-top: 10px;
            font-size: 12px;
            color: ${muted};
        }

        .right .mini .hdr {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .paylist {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .paylist li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
        }
        .paylist .amt {
            font-weight: 700;
        }
        .due {
            display: flex;
            justify-content: space-between;
            border-top: 1px dashed ${border};
            margin-top: 8px;
            padding-top: 8px;
        }

        .notes-terms {
            display: grid;
            grid-template-columns: 2fr 2fr 1fr;
            gap: 16px;
            margin-top: 16px;
        }
        @media (max-width: 1100px) {
            .notes-terms {
                grid-template-columns: 1fr;
            }
        }
        .blk {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: ${card};
        }
        .blk h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .blk.sign .signbox {
            height: 64px;
            border: 1px dashed ${border};
            border-radius: 8px;
            background: repeating-linear-gradient(
                45deg,
                transparent 0 6px,
                rgba(255, 255, 255, 0.04) 6px 12px
            );
            margin-bottom: 6px;
        }

        .footer {
            margin-top: 12px;
            display: flex;
            justify-content: center;
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
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
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
};
