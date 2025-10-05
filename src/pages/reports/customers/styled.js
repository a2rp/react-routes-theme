import styled from "styled-components";

/* theme tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Page = styled.div`
    width: 100%;
    padding: 16px;
    color: ${text};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 16px;
    box-shadow: ${shadow};

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${muted};
        a {
            color: ${muted};
        }
        span[aria-current="page"] {
            color: ${text};
        }
    }

    .title-row {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        justify-content: space-between;
        flex-wrap: wrap;

        .left {
            h1 {
                line-height: 1.1;
            }
            .muted {
                color: ${muted};
            }
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            a.ghost {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 6px 10px;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    color 0.2s ease;
                &:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }
    }
`;

export const KPIs = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(180px, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;
export const KPI = styled.div`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 14px;
    .label {
        color: ${muted};
        font-weight: 600;
    }
    .value {
        font-size: 24px;
        font-weight: 700;
        margin-top: 6px;
    }
    .sub {
        margin-top: 4px;
        font-size: 12px;
    }
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 10px 12px;
    margin-bottom: 12px;

    .left {
        .chip-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 6px 10px;
                border-radius: 99px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    color 0.2s ease;
                cursor: pointer;
                &:hover {
                    border-color: ${accent};
                    color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
            .chip-active {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }

    .right {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        .hint {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .split {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .icon {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            cursor: pointer;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 12px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Section = styled.section`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 12px;

    .section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        h2 {
            font-size: 18px;
        }
        .section-actions .ghost {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }

    .mt8 {
        margin-top: 8px;
    }
`;

export const Table = styled.div`
    width: 100%;
    font-size: 13px;

    .thead,
    .tbody {
        display: grid;
    }
    .thead .tr,
    .tbody .tr {
        display: grid;
        grid-template-columns: 2.2fr 1.6fr 1.2fr 1.6fr 1fr 0.9fr 1.4fr;
        gap: 8px;
        padding: 10px 6px;
        align-items: center;
    }

    .thead .tr {
        background: ${card};
        border-bottom: 1px solid ${border};
        position: sticky;
        top: 0;
        z-index: 1;
    }
    .th {
        font-weight: 600;
        color: ${accent};
    }
    .tbody .tr {
        border-bottom: 1px solid ${border};
    }
    .td .title {
        font-weight: 600;
    }
    .td .meta {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        font-size: 12px;
    }
    .td .tags {
        color: ${muted};
    }
    .td .link {
        color: ${text};
    }
    .td .link:hover {
        color: ${accent};
        text-decoration: none;
    }
    .td.actions {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .ghost.small {
        border: 1px solid ${border};
        background: transparent;
        color: ${text};
        padding: 4px 8px;
        border-radius: 8px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
        &:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border-radius: 999px;
        border: 1px solid ${border};
        font-size: 12px;
    }
    .badge.active {
        border-color: ${accent};
        color: ${accent};
    }
    .badge.vip {
        border-color: ${accent};
        color: ${accent};
    }
    .badge.at-risk {
        opacity: 0.9;
    }
    .badge.dormant {
        opacity: 0.7;
    }

    .table-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 6px 0 6px;
        .pager {
            display: inline-flex;
            gap: 8px;
        }
        .ghost {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }
`;

export const Segments = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    .seg {
        border: 1px solid ${border};
        background: transparent;
        color: ${text};
        padding: 6px 10px;
        border-radius: 8px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
    }
    .seg:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .seg-active {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const TopList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .item {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid ${border};
        &:last-child {
            border-bottom: 0;
        }
        .title {
            font-weight: 600;
        }
        .val {
            font-weight: 700;
        }
    }
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: 8px;
    a {
        border: 1px solid ${border};
        background: transparent;
        color: ${text};
        padding: 8px 10px;
        border-radius: 8px;
        text-decoration: none;
        transition: border-color 0.25s ease, box-shadow 0.25s ease,
            color 0.2s ease;
        &:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    .row {
        display: grid;
        grid-template-columns: 16px 1fr;
        gap: 8px;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: ${accent};
        margin-top: 6px;
    }
    .title {
        font-weight: 600;
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
`;
export const ModalCard = styled.div`
    width: min(520px, 96vw);
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 16px;

    h3 {
        margin-bottom: 6px;
    }
    p.muted {
        color: ${muted};
    }
    .actions {
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                color 0.2s ease;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
        .accent {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;
