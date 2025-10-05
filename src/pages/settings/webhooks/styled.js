import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Wrap = styled.div`
    width: 100%;
    padding: 16px;
    color: ${text};

    .muted {
        color: ${muted};
    }

    .breadcrumbs {
        display: flex;
        gap: 6px;
        align-items: center;
        margin-bottom: 10px;
        a {
            color: ${muted};
        }
        .sep {
            color: ${muted};
            padding: 0 4px;
        }
        [aria-current="page"] {
            color: ${text};
            font-weight: 600;
        }
    }

    .pagehead {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;
        h1 {
            font-size: 28px;
            line-height: 1.2;
        }
        p {
            margin-top: 4px;
        }
        .head-actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .head-actions a.ghost,
        .head-actions .ghost {
            background: transparent;
        }
    }

    .grid-summ {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            .stat {
                display: grid;
                gap: 6px;
            }
            .k {
                font-size: 24px;
                font-weight: 700;
                letter-spacing: 0.2px;
            }
            .l {
                font-size: 12px;
                color: ${muted};
                letter-spacing: 0.3px;
            }
            .meta {
                font-size: 12px;
            }
        }

        .secret {
            position: relative;
            .label {
                font-size: 12px;
                color: ${muted};
                margin-bottom: 6px;
            }
            .secretCode {
                display: inline-block;
                font-size: 12px;
                padding: 6px 8px;
                border: 1px dashed ${border};
                border-radius: 8px;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .danger {
                border-color: ${border};
            }
            .toast {
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-size: 12px;
                background: ${accent};
                color: #fff;
                padding: 4px 8px;
                border-radius: 6px;
            }
        }
    }

    .quick-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 10px;
        a {
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${text};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        a:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .tableWrap {
        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 8px 0;
            .left {
                display: flex;
                gap: 10px;
                align-items: baseline;
            }
            .right input[type="search"] {
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            .right input[type="search"]:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
        }

        .table {
            width: 100%;
            overflow: auto;
            border-radius: 12px;
            .thead,
            .trow {
                display: grid;
                grid-template-columns: 2.1fr 2.2fr 2fr 0.9fr 1.1fr 1.2fr 1.3fr;
                gap: 12px;
                align-items: center;
            }

            .thead {
                position: sticky;
                top: 0;
                z-index: 1;
                background: ${card};
                border: 1px solid ${border};
                padding: 10px 12px;
                border-bottom: none;
                font-weight: 600;
                color: ${text};
            }

            .trow {
                border: 1px solid ${border};
                border-top: none;
                padding: 12px;
                background: color-mix(in oklab, ${card} 94%, transparent);
                transition: background 0.2s ease, border-color 0.2s ease;
            }
            .trow:hover {
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 8%, ${card});
            }

            .cell .title {
                font-weight: 600;
            }
            .cell .sub {
                font-size: 12px;
                margin-top: 2px;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            .chip {
                font-size: 12px;
                padding: 4px 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }

            .badge {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
                text-transform: capitalize;
                font-size: 12px;
            }
            .badge.active {
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
            .badge.paused {
                background: color-mix(in oklab, ${card} 92%, transparent);
                color: ${muted};
            }

            .actions {
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
            }
        }
    }

    .grid-io {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr;
        gap: 16px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
        }
        .tit {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .code {
            background: color-mix(in oklab, ${card} 94%, transparent);
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 12px;
            overflow: auto;
            font-size: 12px;
            line-height: 1.6;
        }
        ul {
            padding-left: 18px;
        }
        li {
            margin: 6px 0;
        }
    }

    .footer-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 18px 0 8px;
        a {
            text-decoration: none;
            color: ${text};
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 10px;
            border-radius: 8px;
        }
        a:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    /* Buttons (inherit base styles from index.css; add variants) */
    button.ghost {
        background: transparent;
    }
    button.primary {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }

    /* Responsive grid fallback for smaller screens */
    @media (max-width: 980px) {
        .table .thead,
        .table .trow {
            grid-template-columns: 2.2fr 2.2fr 2fr 1fr 1fr 1.3fr 1.3fr;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 60;
    .overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
    }
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: clamp(280px, 520px, 90vw);
        background: var(--card, #111318);
        color: var(--text, #f3f4f6);
        border: 1px solid var(--border, #23262d);
        border-radius: 12px;
        padding: 16px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
    }
    h3 {
        margin-bottom: 6px;
    }
    p {
        margin: 0 0 12px;
    }
    .row {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
`;
