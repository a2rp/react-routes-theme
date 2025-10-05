import styled from "styled-components";

const text = "var(--text)";
const muted = "var(--muted)";
const card = "var(--card)";
const border = "var(--border)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";
const shadow = "var(--shadow)";

export const Page = styled.div`
    width: 100%;
    color: ${text};
`;

export const Breadcrumbs = styled.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
    color: ${muted};
    a {
        color: ${muted};
    }
    a:hover {
        color: ${accent};
    }
    strong {
        color: ${text};
    }
`;

export const HeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    .left {
        display: flex;
        align-items: baseline;
        gap: 14px;
        h1 {
            font-size: 22px;
            line-height: 1.2;
            margin: 0;
        }
        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    }

    .actions {
        display: flex;
        gap: 8px;
    }
`;

export const Badge = styled.span`
    background: ${card};
    border: 1px solid ${border};
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
`;

export const Button = styled.button`
    background: ${card};
    border: 1px solid ${border};
    color: ${text};
    padding: 8px 12px;
    border-radius: 8px;
    transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.05s;
    &:hover {
        border-color: ${accent};
        color: ${accent};
        background: rgba(0, 0, 0, 0.08);
    }
    &:active {
        transform: translateY(1px);
    }
    &[disabled],
    &[aria-disabled="true"] {
        opacity: 0.55;
        cursor: not-allowed;
    }
    &[data-active="true"] {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const UtilityRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        > *:last-child {
            order: -1;
        }
    }
`;

export const SearchWrap = styled.div`
    position: relative;
    input {
        width: 100%;
        height: 40px;
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 8px;
        padding: 0 42px 0 12px;
        transition: border-color 0.25s, box-shadow 0.25s;
    }
    input::placeholder {
        color: ${muted};
    }
    input:focus {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
        outline: none;
    }
    .clear {
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        width: 40px;
        border-left: 1px solid ${border};
        background: transparent;
        color: ${muted};
        cursor: pointer;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .clear:hover {
        color: ${accent};
        background: rgba(0, 0, 0, 0.06);
    }
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    label {
        display: flex;
        gap: 6px;
        align-items: center;
        color: ${muted};
        font-size: 13px;
        select {
            height: 32px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 0 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }
    }
`;

export const QuickLinks = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 8px;
    a {
        padding: 6px 8px;
        border: 1px solid ${border};
        border-radius: 6px;
        background: ${card};
        color: ${muted};
    }
    a:hover {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const TableWrap = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    overflow: hidden;

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        z-index: 2;
        background: ${card};
        color: ${accent};
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid ${border};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${border};
        vertical-align: top;
    }
    tbody tr {
        cursor: pointer;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody td.actions,
    thead th.actions {
        text-align: right;
    }

    .name .nameWrap {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .name .col {
        display: flex;
        flex-direction: column;
    }
    .muted {
        color: ${muted};
    }
    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
    .rowActions {
        white-space: nowrap;
    }
`;

export const Avatar = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.08),
        rgba(0, 0, 0, 0.18)
    );
    border: 1px solid ${border};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 0.5px;
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.08);
    border: 1px solid ${border};
    color: ${text};
    font-size: 12px;
`;

export const Status = styled.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${border};
    color: ${text};
    background: ${({ $kind }) =>
        $kind === "Active"
            ? "color-mix(in oklab, var(--accent) 14%, transparent)"
            : "rgba(0,0,0,.08)"};
`;

export const RowLinks = styled.div`
    display: inline-flex;
    gap: 8px;
    a {
        color: ${muted};
        text-decoration: none;
        border-bottom: 1px dashed transparent;
    }
    a:hover {
        color: ${accent};
        border-bottom-color: ${accent};
    }
`;

export const PaginationBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;

    .info {
        color: ${muted};
    }
    .pager {
        display: flex;
        gap: 8px;
    }
`;

export const EmptyState = styled.div`
    padding: 40px 20px;
    text-align: center;
    color: ${muted};
    h3 {
        color: ${text};
        margin-bottom: 6px;
    }
    .links {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 8px;
    }
    .links a {
        color: ${muted};
        border-bottom: 1px dashed ${border};
    }
    .links a:hover {
        color: ${accent};
        border-bottom-color: ${accent};
    }
`;
