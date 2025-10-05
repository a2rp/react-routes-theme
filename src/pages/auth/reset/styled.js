import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const S = {
    Wrap: styled.main`
        width: 100%;
        color: ${text};
        padding: 18px 18px 28px;

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
                .crumb {
                    color: ${muted};
                }
                .crumb:hover {
                    color: ${accent};
                }
                .here {
                    color: ${text};
                    font-weight: 600;
                }
                .sep {
                    opacity: 0.6;
                }
            }
            .actions {
                display: flex;
                gap: 8px;
            }
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        .btn.primary {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btn.ghost {
            background: transparent;
        }

        .link {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            color: ${muted};
            text-decoration: none;
            font-weight: 600;
        }
        .link:hover {
            color: ${accent};
        }

        .grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1080px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }
        .cardHead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .title {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            h1,
            h2 {
                margin: 0;
            }
            p.muted {
                color: ${muted};
                margin-top: 4px;
            }
        }

        .resetCard {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .switcher {
            display: flex;
            gap: 8px;
            .seg {
                border: 1px solid ${border};
                background: transparent;
                border-radius: 999px;
                padding: 8px 12px;
                color: ${muted};
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-weight: 600;
            }
            .seg:hover {
                color: ${accent};
                border-color: ${accent};
            }
            .seg.active {
                color: ${text};
                background: color-mix(in oklab, ${accent} 18%, transparent);
                border-color: ${accent};
            }
        }

        .form {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 720px) {
            .row2 {
                grid-template-columns: 1fr;
            }
        }

        label {
            font-weight: 700;
            display: block;
            margin-bottom: 4px;
        }
        input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        input:focus {
            border-color: ${accent};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .hint {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .ctaRow {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 6px;
        }

        .metaGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 8px;
        }
        @media (max-width: 920px) {
            .metaGrid {
                grid-template-columns: 1fr;
            }
        }

        .meta {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 12px;
        }
        .meta h3 {
            margin: 0 0 6px 0;
        }
        .meta ul {
            margin: 0;
            padding-left: 18px;
        }

        .side {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .ticks {
            margin: 0;
            padding-left: 18px;
        }
        .ticks li {
            margin: 6px 0;
        }

        .linksCols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 10px;
        }
        .linksCols a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${muted};
        }
        .linksCols a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .quickLinks {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }
        .quickLinks a {
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${muted};
        }
        .quickLinks a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .build {
            display: grid;
            gap: 6px;
        }
        .build div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px dashed ${border};
            padding: 6px 0;
        }
        .build span {
            color: ${muted};
        }
        .build strong {
            font-weight: 700;
        }

        /* Modal */
        .modalRoot {
            position: fixed;
            inset: 0;
            z-index: 60;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            backdrop-filter: saturate(120%) blur(2px);
        }
        .modalCard {
            position: relative;
            z-index: 1;
            width: min(560px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        .iconBtn {
            background: transparent;
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px;
            color: ${muted};
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .iconBtn:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .modalBody {
            padding: 14px 12px;
            color: ${text};
        }
        .modalFoot {
            padding: 10px 12px;
            border-top: 1px solid ${border};
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
        }
    `,
};
