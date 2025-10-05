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
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    InfoBanner: styled.div`
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
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 18px;
        }

        .twoCols {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .twoCols {
                grid-template-columns: 1fr 1fr;
            }
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .addr input {
            margin-bottom: 10px;
        }

        /* avatar */
        .avatar {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar .pic {
            width: 96px;
            height: 96px;
            background: ${card};
            background-size: cover;
            background-position: center;
            border: 1px solid ${border};
            border-radius: ${radius};
        }
        .avatar .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .avatar .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        /* tags */
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            cursor: pointer;
            user-select: none;
        }
        .tagInput {
            margin-top: 6px;
        }

        .hint {
            margin-top: 10px;
            color: ${muted};
            font-size: 12px;
        }
        .mini {
            margin-top: 8px;
            color: ${muted};
            font-size: 12px;
        }

        /* sidebar cards */
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

        .preview {
            display: grid;
            gap: 12px;
        }
        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            color: ${text};
        }
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            text-transform: capitalize;
        }

        .tagsView {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tagsView .tag {
            border: 1px solid ${border};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
        }
    `,
};
