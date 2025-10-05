import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Wrapper = styled.div`
    width: 100%;
    color: ${text};
    display: flex;
    flex-direction: column;
    gap: 16px;

    .muted {
        color: ${muted};
    }
    .card {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
    }
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    padding: 16px;

    h1 {
        margin-top: 6px;
        letter-spacing: 0.2px;
    }

    .crumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        .crumb {
            color: ${text};
        }
        .sep {
            color: ${muted};
            user-select: none;
        }
        .current {
            color: ${muted};
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
`;

export const ActionRow = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    button {
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
            background 0.25s;
        cursor: pointer;
    }
    button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const LinksRow = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    a {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid ${border};
        text-decoration: none;
    }
    a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Layout = styled.main`
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

export const ListPane = styled.section`
    padding: 14px;

    .paneTitle {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;

        h3 {
            letter-spacing: 0.3px;
        }
    }
`;

export const TemplateGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${border};
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    letter-spacing: 0.2px;
`;

export const TemplateCard = styled.div`
    padding: 12px;
    border: 1px solid ${border};
    border-radius: 10px;
    background: color-mix(in oklab, ${card} 96%, transparent);
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.04s,
        background 0.25s;
    cursor: pointer;

    &:hover {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    &[data-active="true"] {
        border-color: ${accent};
        background: color-mix(in oklab, ${accent} 10%, ${card});
    }
    &:active {
        transform: translateY(1px);
    }

    .row1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
        .name {
            letter-spacing: 0.2px;
        }
    }
    .row2 {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
    }
`;

export const MetaTable = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 6px 10px;
    font-size: 12px;
    margin-bottom: 10px;

    .k {
        color: ${muted};
    }
    .v a {
        text-decoration: none;
    }
    .v a:hover {
        color: ${accent};
    }
`;

export const CardActions = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 6px;
    border-top: 1px dashed ${border};

    button {
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 8px;
        background: ${card};
        color: ${text};
        cursor: pointer;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
    }
    button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const QuickLinks = styled.div`
    margin-top: 12px;
    border-top: 1px solid ${border};
    padding-top: 12px;

    .title {
        font-weight: 600;
        margin-bottom: 6px;
    }
    .links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
    a {
        padding: 6px 8px;
        border: 1px solid ${border};
        border-radius: 8px;
        text-decoration: none;
    }
    a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const PreviewPane = styled.section`
    padding: 14px;

    .paneTitle {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 12px;
        .meta {
            font-size: 12px;
        }
    }
`;

export const Toolbar = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 12px;

    a,
    button {
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        background: ${card};
        color: ${text};
        text-decoration: none;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
            background 0.25s;
        cursor: pointer;
    }
    a:hover,
    button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const PreviewSheet = styled.div`
    border: 1px solid ${border};
    border-radius: 10px;
    padding: 16px;
    background: color-mix(in oklab, ${card} 98%, transparent);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
        h2 {
            letter-spacing: 0.4px;
        }
        .company {
            text-align: right;
        }
    }

    .meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 12px;
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
        .col {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 4px 8px;
        }
    }

    table.items {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0 12px 0;
        font-size: 13px;
    }
    table.items th,
    table.items td {
        padding: 8px 10px;
        border-bottom: 1px solid ${border};
    }
    table.items th {
        color: ${accent};
        text-align: left;
    }
    .num {
        text-align: right;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        .stamp {
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
        }
    }
`;

export const TotalsBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
    width: 320px;
    margin-left: auto;

    .row {
        display: contents;
    }
    .row div:nth-child(1) {
        color: ${muted};
    }
    .row div:nth-child(2) {
        text-align: right;
    }
    .grand div:nth-child(1) {
        color: ${text};
        font-weight: 700;
    }
    .grand div:nth-child(2) {
        font-weight: 700;
    }
`;

export const PreviewPlaceholder = styled.div`
    padding: 14px;
    h2 {
        margin-bottom: 8px;
    }
    .links {
        margin-top: 8px;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: ${accent};
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 1000;
`;

export const ModalCard = styled.div`
    width: min(520px, 92vw);
    padding: 16px;
    border-radius: 12px;
    border: 1px solid ${border};
    background: ${card};
    box-shadow: ${shadow};

    h3 {
        margin-bottom: 6px;
    }
    p.muted {
        margin-bottom: 14px;
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
    button {
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        background: ${card};
        color: ${text};
        cursor: pointer;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
    }
    button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;
