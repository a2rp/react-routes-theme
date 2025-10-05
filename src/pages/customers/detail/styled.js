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
        padding: 24px 0 64px;
        color: ${text};
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .idwrap {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar {
            width: 64px;
            height: 64px;
            border-radius: ${radius};
            background: ${card};
            background-size: cover;
            background-position: center;
            border: 1px solid ${border};
            box-shadow: var(--shadow);
        }
        .title h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .breadcrumbs {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }

        .badge {
            font-size: 12px;
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .badge.active {
        }
        .badge.inactive {
            opacity: 0.7;
        }
        .badge.prospect {
            opacity: 0.9;
        }

        .sep {
            color: ${muted};
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

    TopGrid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 2fr 1fr;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            grid-column: span 3;
            @media (max-width: 1100px) {
                grid-column: span 1;
            }
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            padding: 14px 16px;
        }
        .kpi .item {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            background: ${card};
            box-shadow: var(--shadow);
            display: grid;
            gap: 6px;
        }
        .kpi .label {
            color: ${muted};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }

        .identity,
        .tax {
            padding: 14px 16px;
        }
        .identity .grid,
        .tax .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        @media (max-width: 720px) {
            .identity .grid,
            .tax .grid {
                grid-template-columns: 1fr;
            }
        }

        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v a {
            color: ${text};
            border-bottom: 1px dotted ${border};
        }
        .chips {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }
        .chip.alt {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
    `,

    MainGrid: styled.div`
        margin-top: 16px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .section {
            padding: 14px 16px;
        }
        .section h3 {
            margin-bottom: 10px;
        }
        .section .two {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 900px) {
            .section .two {
                grid-template-columns: 1fr;
            }
        }

        .sub {
            padding: 12px;
        }
        .addr {
            color: ${text};
        }
        .addr div {
            margin-bottom: 4px;
        }

        .contactList {
            display: grid;
            gap: 10px;
        }
        .contact {
            display: grid;
            grid-template-columns: 120px 1fr 1.4fr 1fr;
            gap: 10px;
            padding: 10px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
        }
        @media (max-width: 900px) {
            .contact {
                grid-template-columns: 1fr;
            }
        }
        .contact .role {
            color: ${muted};
        }
        .contact .name {
            font-weight: 600;
        }

        .note {
            margin-top: 8px;
            color: ${muted};
        }

        .summary {
            display: grid;
            gap: 8px;
        }
        .summary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .summary .k {
            color: ${muted};
        }

        .headerRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .mini {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .mini:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .tableWrap {
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
            text-align: left;
            background: ${card};
            color: ${accent};
            position: sticky;
            top: 0;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        td.right {
            text-align: right;
        }
        .link {
            color: ${text};
            border-bottom: 1px dotted ${border};
        }
        .badge.pill {
            font-size: 12px;
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .files {
            display: grid;
            gap: 10px;
        }
        .file {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            align-items: center;
            padding: 8px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
        }
        .file .icon {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .file .icon.pdf {
        }
        .file .icon.docx {
        }
        .file .name {
            font-weight: 600;
        }

        .stretch {
            grid-column: 1 / span 1;
        }
        @media (max-width: 1100px) {
            .stretch {
                grid-column: auto;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px;
            background: ${card};
        }
        .links a:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
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
        .timeline .title {
            font-weight: 600;
        }
        .timeline .time {
            color: ${muted};
            font-size: 12px;
        }
        .empty {
            color: ${muted};
            padding: 8px 0;
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

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
