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
        padding: 20px 0 64px;
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
        align-items: center;
        padding: 16px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .right {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }

        .search {
            position: relative;
            width: min(360px, 92vw);
            .ic {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: ${muted};
            }
            input {
                width: 100%;
                padding: 10px 12px 10px 34px;
                border-radius: 10px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                transition: border-color 0.25s, box-shadow 0.25s;
                &::placeholder {
                    color: ${muted};
                }
                &:focus {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                    outline: none;
                }
            }
        }

        .filters {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .inline {
            display: flex;
            align-items: center;
            gap: 6px;
            .ic {
                color: ${muted};
            }
            select {
                padding: 8px 10px;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                border-radius: 8px;
                &:focus {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                    outline: none;
                }
            }
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
    `,

    TagStrip: styled.div`
        padding: 10px 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 8px;
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${card};
            color: ${text};
            cursor: pointer;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .chip.on {
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Grid: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);

        @media (min-width: 820px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 1600px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .cell {
            padding: 8px;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid ${border};
            background: ${card};
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 8px;
            transition: transform 0.15s ease, box-shadow 0.2s ease,
                border-color 0.2s ease;
        }
        .cell:hover {
            transform: translateY(-2px);
            border-color: ${accent};
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .open {
            border: 0;
            padding: 0;
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            background: transparent;
            outline: none;
        }
        .open:focus-visible {
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        figcaption .title {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        figcaption .sub {
            color: ${muted};
            font-size: 12px;
            margin-top: 4px;
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .dot {
            opacity: 0.6;
        }
    `,

    Empty: styled.div`
        padding: 28px;
        text-align: center;
        .big {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .muted {
            color: ${muted};
        }
    `,

    PrintWrap: styled.section`
        position: absolute;
        left: -9999px;
        top: -9999px;
        width: 100%;

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .meta {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .sheet {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        @media print {
            .sheet {
                grid-template-columns: repeat(5, 1fr);
            }
        }

        .tile {
            border: 1px solid ${border};
            border-radius: 10px;
            overflow: hidden;
            background: ${card};
            display: grid;
            grid-template-rows: auto 1fr;
        }
        .tile img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            display: block;
        }
        .cap {
            padding: 6px 8px;
        }
        .cap .t {
            font-weight: 700;
        }
        .cap .s,
        .cap .d {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Lightbox: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 20px;

        .inner {
            width: min(1200px, 96vw);
            height: min(86vh, 900px);
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        header,
        footer {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        footer {
            border-bottom: 0;
            border-top: 1px solid ${border};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .name {
                font-weight: 700;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .btnGhost,
            .btnDanger {
                border-radius: 8px;
                padding: 8px 12px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: background 0.25s, color 0.25s, border-color 0.25s,
                    box-shadow 0.25s;
            }
            .btnGhost:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .btnDanger {
                border-color: #ef4444;
                color: #ef4444;
            }
            .btnDanger:hover {
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
                background: color-mix(in oklab, #ef4444 10%, transparent);
            }
        }

        .stage {
            position: relative;
            overflow: hidden;
            display: grid;
            place-items: center;
            img {
                max-width: 100%;
                max-height: 100%;
                transition: transform 0.2s ease;
            }
        }

        footer .meta {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .dot {
            opacity: 0.6;
        }
    `,
};
