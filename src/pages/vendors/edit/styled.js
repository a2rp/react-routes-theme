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
        width: 100%;
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

        .link {
            color: ${text};
            border-bottom: 1px dashed ${border};
        }
        .link:hover {
            color: ${accent};
        }

        .muted {
            color: ${muted};
        }
        .sep {
            opacity: 0.6;
            margin: 0 6px;
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border-radius: ${radius};
        border: 1px solid ${border};
        background: ${card};
        box-shadow: var(--shadow);

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            align-items: center;
        }
        .status {
            margin-left: 8px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            text-transform: capitalize;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDisabled,
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
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${danger} 10%, transparent);
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            transform: translateY(1px);
        }

        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnDisabled.danger {
            border-color: ${danger};
            color: ${danger};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            padding: 16px;
            box-shadow: var(--shadow);
        }
        .sub {
            padding: 14px;
        }

        .identity {
            display: grid;
            grid-template-columns: 1.6fr 0.8fr;
            gap: 16px;
            align-items: center;
            margin-bottom: 16px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
            .brand {
                display: flex;
                gap: 16px;
                align-items: center;
            }
            .logo {
                width: 64px;
                height: 64px;
                border-radius: 16px;
                display: grid;
                place-items: center;
                font-weight: 800;
                font-size: 24px;
                background: color-mix(in oklab, ${accent} 12%, transparent);
                border: 1px solid ${border};
            }
            .info h2 {
                font-size: 18px;
                margin-bottom: 6px;
            }
            .row {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                align-items: center;
            }
            .scorecard {
                display: grid;
                gap: 10px;
                align-content: start;
                justify-items: start;
            }
            .score {
                display: grid;
                gap: 4px;
            }
            .value {
                font-size: 26px;
                font-weight: 800;
            }
            .stars .star {
                opacity: 0.35;
                margin-right: 2px;
            }
            .stars .fill {
                opacity: 1;
            }
            .hint {
                color: ${muted};
                font-size: 12px;
            }
            .pillset {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .pill {
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 8%, transparent);
            }
        }

        .cardsRow {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 780px) {
                grid-template-columns: 1fr;
            }
            .kv {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px 14px;
                background: color-mix(in oklab, ${card} 96%, transparent);
            }
            .k {
                color: ${muted};
                font-size: 12px;
            }
            .v {
                color: ${text};
                font-weight: 600;
                margin-top: 2px;
            }
        }

        .grid.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr 1fr;
        }
        .grid.three {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
            .grid.two,
            .grid.three {
                grid-template-columns: 1fr;
            }
        }

        .badges {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .badge {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .checks {
            display: grid;
            gap: 8px;
            align-content: start;
        }
        .checks label {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${text};
        }
        .checks input {
            accent-color: ${accent};
        }

        .contacts {
            display: grid;
            gap: 12px;
        }
        .contact {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 12px;
            align-items: center;
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 10px 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .contact .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-weight: 700;
            background: color-mix(in oklab, ${accent} 14%, transparent);
            border: 1px solid ${border};
        }
        .contact .name {
            font-weight: 700;
        }
        .contact .title {
            color: ${muted};
            font-size: 12px;
            margin: 2px 0 6px;
        }

        .addr input {
            margin-bottom: 10px;
        }

        .kvList {
            display: grid;
            gap: 10px;
        }
        .kvList .k {
            color: ${muted};
            width: 160px;
            display: inline-block;
        }
        .kvList .v {
            font-weight: 600;
        }

        /* sidebar */
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
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .risk .chip {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            margin-bottom: 10px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .risk .list,
        .risk .sla {
            display: grid;
            gap: 8px;
        }
        .risk .k {
            color: ${muted};
        }
        .risk .v {
            font-weight: 600;
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

        .docs {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .docs li {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 10px 12px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .docs .meta .name {
            font-weight: 600;
        }
        .docs .act {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }
    `,

    // dialogs
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
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
