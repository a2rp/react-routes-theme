import styled, { css } from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Page = styled.div`
    width: 100%;
    padding: 16px;
    color: ${text};
`;

export const Header = styled.header`
    display: grid;
    gap: 12px;
    margin-bottom: 12px;

    h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 4px;
    }
    p {
        color: ${muted};
    }
`;

export const Crumbs = styled.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${muted};
    a {
        color: ${muted};
    }
    .current {
        color: ${text};
    }
`;

export const Meta = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${muted};
    .dot {
        opacity: 0.6;
    }
    strong {
        color: ${text};
    }
`;

export const InlineCode = styled.code`
    background: ${card};
    border: 1px solid ${border};
    padding: 2px 6px;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    color: ${text};
`;

export const Title = styled.div`
    display: grid;
    gap: 2px;
`;

export const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    .btn,
    button,
    a.btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: border-color 0.25s ease, color 0.25s ease,
            box-shadow 0.25s ease, background 0.25s ease;
    }
    .btn:hover,
    button:hover,
    a.btn:hover {
        color: ${accent};
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Toolbar = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 8px 0;
    backdrop-filter: blur(8px);
`;

export const FiltersRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 220px)) 1fr;
    gap: 12px;
    align-items: end;

    .filter {
        display: grid;
        gap: 6px;
        label {
            color: ${muted};
            font-size: 12px;
        }
        select {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 8px;
            height: 36px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .links {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        .link {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${text};
            background: ${card};
            transition: border-color 0.25s ease, color 0.25s ease,
                box-shadow 0.25s ease;
        }
        .link:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const SectionHead = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin: 18px 0 10px;
    h2 {
        font-size: 20px;
    }
    p {
        color: ${muted};
    }
    .head-links {
        display: flex;
        gap: 10px;
        a {
            color: ${text};
            text-decoration: none;
            border: 1px solid ${border};
            border-radius: 8px;
            padding: 6px 10px;
            background: ${card};
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Grid = styled.div`
    ${({ cols = 3, gap = 12 }) => css`
        display: grid;
        grid-template-columns: repeat(${cols}, minmax(0, 1fr));
        gap: ${gap}px;
    `}
`;

export const Card = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${shadow};

    .card-title {
        margin-bottom: 6px;
    }
    .amount {
        font-size: 24px;
        margin-top: 6px;
    }
`;

export const KPICard = styled(Card)`
    .k-label {
        color: ${muted};
        font-size: 12px;
    }
`;

export const KPIValue = styled.div`
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-top: 4px;
`;

export const KPISub = styled.div`
    color: ${muted};
    font-size: 12px;
`;

export const TableWrap = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    overflow: hidden;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        padding: 12px;
        border-bottom: 1px solid ${border};
    }
    thead th {
        text-align: left;
        color: ${accent};
        background: ${card};
        font-weight: 600;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    td .sep {
        opacity: 0.6;
        margin: 0 6px;
    }
    td a {
        text-decoration: none;
        color: ${text};
    }
    td a:hover {
        color: ${accent};
    }
    .row-actions {
        white-space: nowrap;
    }
`;

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 12px;
    border: 1px solid ${border};
    background: ${card};
    color: ${text};
    &[data-variant="open"] {
        box-shadow: inset 0 0 0 1px ${accent};
    }
    &[data-variant="partially-received"] {
        box-shadow: inset 0 0 0 1px ${accent};
        opacity: 0.95;
    }
    &[data-variant="closed"] {
        opacity: 0.85;
    }
    &[data-variant="info"] {
        opacity: 0.95;
    }
    &[data-variant="neutral"] {
        opacity: 0.9;
    }
`;

export const StatRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const List = styled.ul`
    list-style: none;
    display: grid;
    gap: 6px;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    li span {
        color: ${muted};
    }
    li em {
        font-style: normal;
    }
`;

export const LinkRow = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    a {
        text-decoration: none;
        color: ${text};
        border-bottom: 1px dashed ${border};
    }
    a:hover {
        color: ${accent};
        border-color: ${accent};
    }
`;

export const Note = styled.p`
    margin-top: 8px;
    color: ${muted};
`;

export const TableRow = styled.tr``; // reserved (if you later customize rows)

export const Section = styled.section``; // reserved for future grouping

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    z-index: 999;
`;

export const ModalCard = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    width: min(560px, 92vw);
    padding: 16px;
    h3 {
        margin-bottom: 8px;
    }
    p {
        color: ${muted};
    }
`;

export const ModalActions = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 14px;
    button,
    .btn-link {
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: border-color 0.25s ease, color 0.25s ease,
            box-shadow 0.25s ease;
    }
    button:hover,
    .btn-link:hover {
        color: ${accent};
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const GridLine = styled.div``; // reserved

export const LinkBar = styled.div``; // reserved

export const TableHeader = styled.thead``; // reserved

export const TableCell = styled.td``; // reserved
