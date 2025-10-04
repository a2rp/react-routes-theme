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
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
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
        .crumbs {
            margin-top: 6px;
            ol {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding: 0;
                margin: 0;
            }
            li {
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            a {
                color: ${muted};
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
            .sep {
                color: ${muted};
                opacity: 0.9;
            }
            [aria-current="page"] {
                color: ${text};
                font-weight: 700;
            }
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .segPicker {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        select {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 8px;
            &:focus {
                outline: none;
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Banner: styled.div`
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
            grid-template-columns: 1.2fr 1fr;
        }

        section.card {
            padding: 16px 18px;
        }

        .sectionHead {
            margin-bottom: 8px;
        }
        .sectionHead h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
        }

        .demoRow {
            padding-top: 8px;
        }

        /* generic crumbs demo */
        .demoCrumbs,
        .iconCrumbs ol,
        .menuCrumbs ol {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            padding: 0;
            margin: 0;
        }
        .demoCrumbs li,
        .iconCrumbs li,
        .menuCrumbs li {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            min-height: 28px;
        }
        .demoCrumbs a,
        .menuCrumbs a,
        .menuCrumbs button,
        .iconCrumbs a {
            color: ${muted};
            text-decoration: none;
            border: 1px solid transparent;
            border-radius: 8px;
            padding: 4px 8px;
        }
        .demoCrumbs a:hover,
        .menuCrumbs a:hover,
        .menuCrumbs button:hover,
        .iconCrumbs a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .demoCrumbs .sep,
        .iconCrumbs .sep,
        .menuCrumbs .sep {
            color: ${muted};
        }

        /* icons demo */
        .iconCrumbs .ico.home::before {
            content: "⌂";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .ico.box::before {
            content: "▣";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .ico.tag::before {
            content: "#";
            display: inline-block;
            margin-right: 6px;
            opacity: 0.9;
        }
        .iconCrumbs .truncate {
            max-width: 520px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 700;
            color: ${text};
        }

        /* menu crumb */
        .menuCrumbs .menu {
            position: relative;
        }
        .menuCrumbs .menu .tiny {
            padding: 4px 10px;
        }
        .menuCrumbs .menu .menuList {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 6px;
            min-width: 200px;
            border: 1px solid ${border};
            background: ${card};
            border-radius: 10px;
            padding: 6px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
            display: none;
            z-index: 10;
        }
        .menuCrumbs .menu:hover .menuList {
            display: grid;
        }
        .menuCrumbs .menu .menuList a {
            padding: 8px 10px;
            border-radius: 8px;
        }
        .menuCrumbs .menu .menuList a:hover {
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${accent};
        }

        /* print */
        .printPreview {
            display: grid;
            gap: 10px;
        }
        .printPreview .title {
            font-weight: 700;
        }
        .printPreview .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printPreview .k {
            color: ${muted};
        }
        .printPreview .v {
            color: ${text};
        }

        /* code block */
        .code {
            margin-top: 10px;
            padding: 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            background: ${card};
            color: ${text};
            font-size: 12px;
            max-height: 360px;
            overflow: auto;
        }
    `,
};
