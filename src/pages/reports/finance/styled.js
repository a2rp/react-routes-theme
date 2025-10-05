import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Page = styled.div`
    width: 100%;
    padding: 16px 18px 32px;
    color: ${text};
`;

export const Header = styled.header`
    margin-bottom: 18px;

    .breadcrumbs {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${muted};
        a {
            color: inherit;
            text-decoration: none;
        }
        svg {
            opacity: 0.7;
        }
    }

    .titleRow {
        margin-top: 8px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
    }

    .titleBlock {
        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin: 0 0 6px 0;
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.3px;
        }
        .meta {
            display: flex;
            gap: 14px;
            color: ${muted};
            font-size: 12px;
            span {
                border-left: 1px solid ${border};
                padding-left: 10px;
            }
            span:first-child {
                border-left: none;
                padding-left: 0;
            }
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
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
            border-radius: 8px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
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
        .ghost {
            background: transparent;
        }
    }
`;

export const KpiGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin-bottom: 18px;

    .kpi {
        display: grid;
        grid-template-rows: auto auto auto auto;
        gap: 6px;
        padding: 12px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        text-decoration: none;
        color: ${text};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

        &:hover {
            border-color: ${accent};
            color: ${text};
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 20px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .delta {
            font-size: 12px;
            color: ${muted};
        }
        .spark {
            margin-top: 4px;
            color: ${accent};
        }
        .trend {
            opacity: 0.9;
        }
    }
`;

export const Columns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
        h2 {
            font-size: 16px;
            letter-spacing: 0.2px;
        }
        a {
            color: ${muted};
            text-decoration: none;
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
    }

    .footLinks {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        a {
            color: ${muted};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }
    }

    .legend {
        display: flex;
        gap: 8px;
    }
    .chip {
        border: 1px solid ${border};
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
        color: ${muted};
        background: color-mix(in oklab, ${card} 92%, transparent);
    }

    .taxGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 10px;
    }
    .tax {
        display: grid;
        gap: 4px;
        text-decoration: none;
        color: ${text};
        padding: 10px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${bg};
    }
    .tax:hover {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .tax .name {
        color: ${muted};
        font-size: 12px;
    }
    .tax .amt {
        font-weight: 700;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        text-align: left;
        background: ${card};
        color: ${accent};
        font-weight: 600;
        border-bottom: 1px solid ${border};
        padding: 10px;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    tbody td {
        border-bottom: 1px solid ${border};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr:hover {
        background: color-mix(in oklab, ${card} 92%, transparent);
    }
    .right {
        text-align: right;
    }
    .muted {
        color: ${muted};
    }
    a.inlineLink {
        color: ${muted};
        text-decoration: none;
    }
    a.inlineLink:hover {
        color: ${accent};
    }
`;

export const QuickNav = styled.nav`
    margin: 12px 0 18px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;

    .q {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: ${text};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        background: ${card};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    .q:hover {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Timeline = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;

    li {
        display: grid;
        grid-template-columns: 14px 1fr;
        gap: 8px;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${accent};
        margin-top: 7px;
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .row {
        display: grid;
        gap: 2px;
    }
    .when {
        color: ${muted};
        font-size: 12px;
    }
    .what a {
        color: ${text};
        text-decoration: none;
        border-bottom: 1px dashed ${border};
    }
    .what a:hover {
        color: ${accent};
        border-color: ${accent};
    }
`;

export const Footer = styled.footer`
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-top: 1px solid ${border};
    padding-top: 12px;

    .left {
        display: flex;
        gap: 8px;
        color: ${muted};
        font-size: 12px;
    }
    .left strong {
        color: ${text};
    }
    .right {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
    .right a {
        color: ${muted};
        text-decoration: none;
    }
    .right a:hover {
        color: ${accent};
    }
`;

/* Modal */
export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 50;
`;
export const Modal = styled.div`
    width: min(680px, 92vw);
    background: ${card};
    color: ${text};
    border: 1px solid ${border};
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${border};
        h3 {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0;
            font-size: 16px;
        }
        .icon {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 4px 8px;
            border-radius: 8px;
            cursor: pointer;
        }
        .icon:hover {
            border-color: ${accent};
            color: ${accent};
        }
    }
    .content {
        padding: 14px;
        p {
            color: ${muted};
            margin: 0 0 10px 0;
        }
        .options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 8px;
            margin: 8px 0;
        }
        .opt {
            border: 1px solid ${border};
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            background: ${bg};
        }
        .share {
            display: flex;
            gap: 8px;
            margin-top: 8px;
        }
        .share .ghost {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
        }
        .share .ghost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    }
    footer {
        padding: 12px 14px;
        border-top: 1px solid ${border};
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
    }
`;
