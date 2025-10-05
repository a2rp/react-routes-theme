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
    color: ${text};
`;

export const Breadcrumb = styled.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
    a {
        color: ${muted};
    }
    a:hover {
        color: ${accent};
    }
    span[aria-current="page"] {
        color: ${text};
    }
`;

export const Header = styled.header`
    padding: 16px;
    display: grid;
    gap: 16px;

    .title {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .sub {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
            color: ${muted};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .link {
            color: ${accent};
        }
    }

    .right {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`;

export const Status = styled.span`
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid ${border};
    background: color-mix(in oklab, ${accent} 12%, transparent);
    color: ${accent};
    font-size: 12px;
    font-weight: 600;
`;

export const Tag = styled.span`
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid ${border};
    background: ${card};
    color: ${muted};
    font-size: 12px;
`;

export const Meta = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
    > div {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    }
    span {
        color: ${muted};
    }
    .chip {
        background: color-mix(in oklab, ${accent} 12%, transparent);
        color: ${accent};
        border: 1px solid ${border};
        padding: 2px 8px;
        border-radius: 999px;
    }
    .tags {
        grid-column: 1 / -1;
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .tagrow {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    a {
        color: ${accent};
    }
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    .btn {
        background: ${card};
        border: 1px solid ${border};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            color 0.2s ease, background 0.2s ease;
    }
    .btn:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
    .danger {
        border-color: ${border};
    }
    .note {
        margin-left: 8px;
        font-size: 12px;
        color: ${muted};
    }
    .left,
    .right {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
`;

export const Grid = styled.div`
    margin-top: 8px;
    display: grid;
    gap: 12px;
    grid-template-columns: ${({ cols }) =>
        `repeat(${cols || 2}, minmax(0,1fr))`};
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

export const KPI = styled.div`
    padding: 14px;
    display: grid;
    gap: 6px;
    span {
        color: ${muted};
    }
    strong {
        font-size: 22px;
    }
    em {
        color: ${muted};
        font-style: normal;
    }
    b {
        font-size: 16px;
    }
`;

export const Section = styled.section`
    margin-top: 12px;
    padding: 16px;
    .section-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }
    .sec-actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .link {
        color: ${accent};
    }
    .inner {
        padding: 12px;
    }
    .list {
        display: grid;
        gap: 8px;
        margin-top: 8px;
    }
    .tableWrap {
        overflow: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    th,
    td {
        padding: 10px;
        border-bottom: 1px solid ${border};
    }
    th {
        text-align: left;
        background: ${card};
        color: ${accent};
    }
    td.links a {
        margin-right: 8px;
        color: ${accent};
    }
    .muted {
        color: ${muted};
    }
`;

export const AttachList = styled.ul`
    display: grid;
    gap: 8px;
    .file {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
    }
    .actions {
        display: flex;
        gap: 8px;
    }
    button {
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 8px;
        cursor: not-allowed;
        opacity: 0.65;
    }
`;

export const Timeline = styled.ul`
    position: relative;
    padding-left: 18px;
    display: grid;
    gap: 12px;
    &::before {
        content: "";
        position: absolute;
        left: 6px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: ${border};
    }
    li {
        position: relative;
    }
    .dot {
        position: absolute;
        left: -2px;
        top: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .content {
        padding-left: 8px;
    }
    .row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        align-items: center;
    }
    .muted {
        color: ${muted};
    }
    a {
        color: ${accent};
    }
`;

export const Modal = styled.div`
    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .panel {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(560px, 92vw);
        padding: 16px;
        border-radius: 12px;
    }
    h3 {
        margin-bottom: 6px;
    }
    p {
        margin-bottom: 12px;
    }
    .actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
    }
    button {
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

/* simple card util */
export const Card = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
`;
