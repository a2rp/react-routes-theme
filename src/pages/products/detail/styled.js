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

        .muted {
            color: ${muted};
        }
        .pill {
            display: inline-block;
            margin-left: 10px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-size: 12px;
            font-weight: 600;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
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
        gap: 12px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 6px;
        }
        .subMeta {
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
            margin-top: 4px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.04s;
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
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main > .hero {
            padding: 16px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: ${radius};
            box-shadow: var(--shadow);
        }

        .hero {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 920px) {
                grid-template-columns: 1.1fr 1fr;
            }
            .gallery {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 16px;
                .thumbs {
                    display: grid;
                    gap: 10px;
                    align-content: start;
                }
                .thumb {
                    width: 100%;
                    aspect-ratio: 1/1;
                    border-radius: 12px;
                    border: 1px solid ${border};
                    background: linear-gradient(
                        135deg,
                        rgba(90, 169, 255, 0.15),
                        rgba(255, 255, 255, 0.04)
                    );
                }
                .mainImage .image {
                    width: 100%;
                    aspect-ratio: 4/3;
                    border-radius: 16px;
                    border: 1px solid ${border};
                    background: radial-gradient(
                            1200px 400px at 20% 0%,
                            rgba(90, 169, 255, 0.15),
                            transparent 60%
                        ),
                        linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 0.04),
                            rgba(255, 255, 255, 0)
                        );
                }
            }
            .facts {
                display: grid;
                gap: 12px;
                align-content: start;
            }
            .facts .row {
                display: grid;
                gap: 14px;
                grid-template-columns: repeat(4, 1fr);
                @media (max-width: 780px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                .label {
                    color: ${muted};
                    font-size: 12px;
                    margin-bottom: 4px;
                }
                .wrap {
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
                    font-weight: 600;
                    font-size: 12px;
                }
            }
        }

        .row2 {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 920px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .block {
            padding: 16px;
        }
        .block h3 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .pairs {
            display: grid;
            gap: 10px;
        }
        .pairs .k {
            color: ${muted};
            width: 140px;
            display: inline-block;
        }
        .pairs .v {
            color: ${text};
        }
        .pairs .v.column {
            display: grid;
            gap: 6px;
        }
        .pairs .v.wrap {
            white-space: normal;
        }

        .attrs {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 720px) {
            .attrs {
                grid-template-columns: 1fr;
            }
        }
        .attrs .item {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 10px 12px;
        }
        .attrs .item .k {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .attrs .item .v {
            color: ${text};
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }
        .table th,
        .table td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        .table th {
            text-align: left;
            color: ${accent};
            background: ${card};
            position: sticky;
            top: 0;
        }
        .table .right {
            text-align: right;
        }
        .table .link {
            color: ${text};
        }
        .table .link:hover {
            color: ${accent};
        }

        .empty {
            padding: 8px 0;
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            margin-top: 6px;
        }

        .summary {
            display: grid;
            gap: 8px;
        }
        .summary .k {
            color: ${muted};
            width: 120px;
            display: inline-block;
        }
        .summary .v {
            color: ${text};
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .list li {
            display: grid;
            gap: 4px;
        }
        .wrap {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Empty: styled.div`
        padding: 28px 20px;
        text-align: center;
        .icon {
            font-size: 40px;
            margin-bottom: 8px;
        }
        h3 {
            margin-bottom: 6px;
        }
        .actions {
            margin-top: 10px;
        }
        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
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
