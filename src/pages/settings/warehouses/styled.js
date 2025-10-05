import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const soft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        color: ${text};
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 10px;
        a {
            color: ${muted};
        }
        a:hover {
            color: ${accent};
        }
        span {
            color: ${muted};
        }
        strong {
            color: ${text};
        }
    `,

    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: start;
        margin-bottom: 16px;

        .titles {
            h1 {
                display: flex;
                align-items: center;
                font-size: 22px;
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
            }
            .meta {
                margin-top: 6px;
                display: flex;
                gap: 16px;
                color: ${muted};
                span {
                    font-size: 12px;
                }
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${shadow};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.05s ease;
                text-decoration: none;
            }
            button:hover,
            a:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            button:active,
            a:active {
                transform: translateY(1px);
            }
        }
    `,

    Toolbar: styled.div`
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;

        input[type="search"] {
            height: 40px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &::placeholder {
                color: ${muted};
            }
            &:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${soft};
                outline: none;
            }
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                border: 1px solid ${border};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                color: ${muted};
                background: ${card};
            }
            .chip:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 10px;
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1.25fr 0.9fr;
        gap: 14px;
        align-items: start;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
    `,

    TableCard: styled.section`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};

        .cardHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding: 14px 14px 8px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 16px;
            }
            .sub {
                color: ${muted};
                font-size: 12px;
            }
        }

        .tableWrap {
            overflow: auto;
            padding: 8px 14px 14px 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${accent};
            font-weight: 600;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr {
            transition: background 0.15s ease;
            cursor: pointer;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        tbody tr[data-active-row="true"] {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .name .linkish {
            color: ${text};
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            text-decoration: underline;
        }
        .name .linkish:hover {
            color: ${accent};
        }
        .tags {
            margin-top: 4px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            border: 1px dashed ${border};
            color: ${muted};
            padding: 2px 6px;
            border-radius: 6px;
            font-size: 11px;
        }

        .status {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 3px 8px;
            font-size: 11px;
            &.active {
                color: ${text};
            }
            &.inactive {
                color: ${muted};
            }
        }

        .mgr small {
            color: ${muted};
            display: block;
        }

        .rowActions {
            display: flex;
            gap: 6px;
            align-items: center;
            button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border-radius: 8px;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
            }
            button:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .empty {
            padding: 28px 14px;
            text-align: center;
            color: ${muted};
            .hops {
                margin-top: 10px;
                display: flex;
                gap: 12px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .hops a {
                color: ${muted};
                text-decoration: underline;
            }
            .hops a:hover {
                color: ${accent};
            }
        }

        .cardFoot {
            border-top: 1px solid ${border};
            padding: 10px 14px;
            color: ${muted};
            .quick {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                align-items: center;
            }
            .quick a {
                color: ${muted};
                text-decoration: underline;
            }
            .quick a:hover {
                color: ${accent};
            }
        }
    `,

    DetailCard: styled.aside`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 14px;

        .head {
            border-bottom: 1px solid ${border};
            padding-bottom: 8px;
            margin-bottom: 8px;
            h3 {
                font-size: 16px;
                margin-bottom: 6px;
            }
            .meta {
                display: flex;
                gap: 12px;
                color: ${muted};
                font-size: 12px;
            }
        }

        .blocks {
            display: grid;
            gap: 12px;
            .block {
                border: 1px solid ${border};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                h4 {
                    margin-bottom: 8px;
                }
                .kv {
                    list-style: none;
                    display: grid;
                    grid-template-columns: 150px 1fr;
                    gap: 6px 10px;
                }
                .kv li {
                    display: contents;
                }
                .kv label {
                    color: ${muted};
                }
                .rowLinks {
                    margin-top: 8px;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .rowLinks a {
                    color: ${muted};
                    text-decoration: underline;
                }
                .rowLinks a:hover {
                    color: ${accent};
                }
                .docList {
                    display: grid;
                    gap: 10px;
                }
                .doc {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 6px;
                    align-items: center;
                    border: 1px solid ${border};
                    border-radius: 8px;
                    padding: 10px;
                }
                .doc .title {
                    font-weight: 600;
                }
                .doc .meta {
                    color: ${muted};
                    font-size: 12px;
                }
                .doc .cta {
                    display: flex;
                    gap: 8px;
                }
                .doc .cta button {
                    background: ${card};
                    color: ${text};
                    border: 1px solid ${border};
                    padding: 6px 10px;
                    border-radius: 8px;
                }
                .doc .cta button:hover {
                    color: ${accent};
                    border-color: ${accent};
                    background: rgba(0, 0, 0, 0.06);
                }

                .timeline {
                    list-style: none;
                    display: grid;
                    gap: 8px;
                }
                .timeline li {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 10px;
                }
                .timeline .dt {
                    color: ${muted};
                    font-size: 12px;
                }
            }
        }

        .status {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 3px 8px;
            font-size: 11px;
            &.active {
                color: ${text};
            }
            &.inactive {
                color: ${muted};
            }
        }

        .detailActions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${shadow};
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover,
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
        }

        .empty {
            color: ${muted};
            text-align: center;
            padding: 24px 0;
        }
    `,

    FootNav: styled.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        color: ${muted};
        a {
            color: ${muted};
            text-decoration: underline;
        }
        a:hover {
            color: ${accent};
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .scrim {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }

        .sheet {
            position: relative;
            z-index: 61;
            width: min(560px, 92vw);
            margin: 8vh auto 0;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            box-shadow: ${shadow};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
        }

        .sheetHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            h3 {
                font-size: 16px;
            }
            .icon {
                background: transparent;
                border: 1px solid ${border};
                color: ${text};
                width: 34px;
                height: 34px;
                border-radius: 8px;
                display: grid;
                place-items: center;
            }
            .icon:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
        .sheetBody {
            padding: 14px;
            color: ${text};
        }
        .sheetBody p {
            margin-bottom: 10px;
        }
        .sheetBody .hints {
            color: ${muted};
            margin-left: 16px;
        }
        .sheetFoot {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            button,
            a {
                background: ${card};
                color: ${text};
                border: 1px solid ${border};
                padding: 8px 12px;
                border-radius: 10px;
                text-decoration: none;
            }
            button:hover,
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            .primary {
                border-color: ${accent};
            }
        }
    `,
};

export { Styled as default };
