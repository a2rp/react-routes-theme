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
        color: ${text};
        padding: 24px 0 64px;
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 24px;
            letter-spacing: 0.4px;
        }
        .left .sub {
            margin-top: 6px;
            color: ${muted};
        }
        .meta {
            margin-top: 6px;
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost {
            opacity: 0.92;
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

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1040px) {
            grid-template-columns: 1fr 1fr;
        }

        .section {
            padding: 16px 18px;
            border-radius: ${radius};
            border: 1px solid ${border};
            background: ${card};
            box-shadow: var(--shadow);
        }

        .section header {
            margin-bottom: 12px;
        }
        .section h2 {
            font-size: 18px;
        }
        .section .hint {
            color: ${muted};
            margin-top: 4px;
        }

        .tiles {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;

            @media (min-width: 700px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 1100px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .tiles.dense {
            @media (min-width: 700px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .tile {
            display: block;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
            color: ${text};
            padding: 14px;
            border-radius: 12px;
            text-decoration: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.08s ease;

            .title {
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .desc {
                margin-top: 6px;
                color: ${muted};
                font-size: 12px;
                line-height: 1.6;
            }
        }

        .tile:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            color: ${text};
        }
        .tile:active {
            transform: translateY(1px);
        }

        .tile.sm {
            padding: 12px;
        }
    `,

    Toast: styled.div`
        position: fixed;
        right: 16px;
        bottom: 16px;
        padding: 8px 12px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        border-radius: 10px;
        box-shadow: var(--shadow);
        opacity: 0;
        transform: translateY(8px);
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
        z-index: 50;

        &[data-show="true"] {
            opacity: 1;
            transform: translateY(0);
        }
    `,
};

export default Styled;
