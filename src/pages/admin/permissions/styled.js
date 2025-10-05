import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const bg = "var(--bg, #0d1117)";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
    `,

    HeaderBar: styled.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;

        .l {
            h1 {
                font-family: "Antonio", sans-serif;
                font-size: 28px;
                letter-spacing: 0.4px;
                margin-top: 6px;
            }
            .muted {
                color: ${muted};
            }
            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                a {
                    color: ${muted};
                    border-bottom: 1px dashed transparent;
                }
                a:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
                .current {
                    color: ${text};
                }
            }
        }
        .r {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btn.primary {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    QuickNav: styled.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-size: 12px;
            text-decoration: none;
            transition: 0.2s;
        }
        .pill:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .pill.active {
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 16px;

        .rail {
            border: 1px solid ${border};
            background: ${card};
            border-radius: 12px;
            padding: 12px;
            position: sticky;
            top: 10px;
            height: fit-content;

            .rail-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                h3 {
                    font-size: 14px;
                    letter-spacing: 0.3px;
                }
                .mini {
                    border: 1px solid ${border};
                    background: ${card};
                    color: ${text};
                    padding: 4px 8px;
                    border-radius: 6px;
                    cursor: pointer;
                }
                .mini:hover {
                    color: ${accent};
                    border-color: ${accent};
                }
            }

            ul.roles {
                list-style: none;
                padding: 0;
                margin: 0 0 10px 0;
            }
            ul.roles li {
                border: 1px solid ${border};
                background: color-mix(in oklab, ${card} 96%, transparent);
                border-radius: 10px;
                margin-bottom: 8px;
                overflow: hidden;
            }
            ul.roles li.active {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }

            .role-btn {
                width: 100%;
                display: grid;
                grid-template-columns: 12px 1fr auto;
                gap: 10px;
                align-items: center;
                padding: 8px 10px;
                background: transparent;
                color: ${text};
                border: 0;
                text-align: left;
                cursor: pointer;
            }
            .role-btn:hover {
                color: ${accent};
            }
            .role-btn .dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: ${accent};
            }
            .role-btn .name {
                font-weight: 600;
                letter-spacing: 0.2px;
            }
            .role-btn .meta {
                color: ${muted};
                font-size: 12px;
            }

            .role-links {
                display: flex;
                gap: 8px;
                padding: 6px 10px 10px 28px;
            }
            .role-links .tiny,
            .matrix .tiny {
                font-size: 12px;
                color: ${muted};
                text-decoration: none;
                border: 1px solid ${border};
                padding: 4px 8px;
                border-radius: 999px;
                background: ${card};
                transition: 0.2s;
            }
            .role-links .tiny:hover,
            .matrix .tiny:hover {
                color: ${accent};
                border-color: ${accent};
            }

            .rail-card {
                border-top: 1px dashed ${border};
                padding-top: 10px;
                margin-top: 6px;
            }
            .rail-card .row {
                display: flex;
                justify-content: space-between;
                margin: 6px 0;
                color: ${muted};
            }
            .rail-card .row strong {
                color: ${text};
            }
            .rail-card .links {
                display: grid;
                gap: 6px;
                margin-top: 10px;
            }
            .rail-card .links a {
                color: ${muted};
                text-decoration: none;
            }
            .rail-card .links a:hover {
                color: ${accent};
            }
        }

        .matrix {
            display: grid;
            gap: 12px;
            .controls {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 8px;
                align-items: center;
            }
            .controls .search input {
                width: 100%;
                height: 38px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 0 12px;
                outline: none;
                transition: 0.2s;
            }
            .controls .search input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .controls .filters {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .controls select {
                height: 38px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 0 10px;
            }
            .controls .btn.ghost {
                background: transparent;
                color: ${muted};
                border: 1px dashed ${border};
                padding: 8px 12px;
                border-radius: 8px;
            }
            .controls .btn.ghost:hover {
                color: ${accent};
                border-color: ${accent};
            }

            .legend {
                display: flex;
                align-items: center;
                gap: 10px;
                color: ${muted};
            }
            .legend .badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                border: 1px solid ${border};
                padding: 4px 8px;
                border-radius: 999px;
                background: ${card};
                font-size: 12px;
            }
            .legend .ok {
                color: ${text};
            }
            .legend .no {
                color: ${muted};
            }
            .legend .sep {
                width: 1px;
                height: 12px;
                background: ${border};
                display: inline-block;
                margin: 0 4px;
            }

            .tableWrap {
                border: 1px solid ${border};
                border-radius: 12px;
                overflow: auto;
                background: ${card};
            }
            table.perm {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                font-size: 13px;
                line-height: 1.5;
            }
            table.perm thead th {
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${card} 98%, transparent);
                border-bottom: 1px solid ${border};
                padding: 10px;
                text-align: left;
                z-index: 3;
            }
            table.perm th,
            table.perm td {
                border-bottom: 1px solid ${border};
                padding: 10px;
            }
            table.perm tbody tr:hover {
                background: color-mix(in oklab, ${bg} 94%, transparent);
            }

            .sticky-left {
                position: sticky;
                left: 0;
                background: color-mix(in oklab, ${card} 98%, transparent);
                z-index: 2;
            }
            .sticky-right {
                position: sticky;
                right: 0;
                background: color-mix(in oklab, ${card} 98%, transparent);
                z-index: 2;
            }

            .modName {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .modName .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${accent};
            }

            td.allow {
                color: ${text};
            }
            td.deny {
                color: ${muted};
            }

            .actions-col {
                white-space: nowrap;
            }
            .actions-col .tiny {
                margin-right: 6px;
            }
            .actions-col .tiny.disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            .activity {
                border: 1px solid ${border};
                border-radius: 12px;
                padding: 12px;
                background: ${card};
            }
            .activity h3 {
                margin-bottom: 8px;
            }
            .activity ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .activity li {
                display: grid;
                grid-template-columns: 220px 1fr;
                gap: 12px;
                align-items: baseline;
            }
            .activity .ts {
                color: ${muted};
            }
            .activity .only-time {
                margin-left: 6px;
                color: ${muted};
            }
            .activity .txt a {
                color: ${accent};
                text-decoration: none;
            }
            .activity .txt a:hover {
                text-decoration: underline;
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            .rail {
                position: static;
            }
            .activity li {
                grid-template-columns: 1fr;
            }
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: grid;
        place-items: center;
        z-index: 40;
    `,

    ModalCard: styled.div`
        width: min(540px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

        h3 {
            margin-bottom: 6px;
        }
        .muted {
            color: ${muted};
            margin-bottom: 12px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .btn:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .btn.primary {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};

export { Styled as default };
