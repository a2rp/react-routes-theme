import styled from "styled-components";

const bg = "var(--bg)";
const text = "var(--text)";
const muted = "var(--muted)";
const card = "var(--card)";
const border = "var(--border)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";
const shadow = "var(--shadow)";

export const Wrap = styled.div`
    width: 100%;
    color: ${text};
    display: grid;
    grid-template-rows: auto auto auto auto 1fr auto;
    gap: 14px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: ${shadow};

    .title {
        display: grid;
        gap: 4px;
    }
    h1 {
        font-family: "Antonio", sans-serif;
        font-weight: 700;
        letter-spacing: 0.4px;
        line-height: 1.2;
    }
    p {
        color: ${muted};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease, transform 0.04s ease;

        &:hover {
            border-color: ${accent};
            color: ${accent};
        }
        &:active {
            transform: translateY(1px);
        }
        &:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        &.btn-primary {
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
        }
        &.btn-ghost {
            background: transparent;
        }
    }

    /* tiny tooltip */
    [data-tooltip]:not([data-tooltip=""]) {
        position: relative;
    }
    [data-tooltip]:not([data-tooltip=""])::after {
        content: attr(data-tooltip);
        position: absolute;
        bottom: calc(100% + 6px);
        right: 0;
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 4px 6px;
        border-radius: 6px;
        font-size: 11px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transform: translateY(4px);
        transition: opacity 0.15s ease, transform 0.15s ease;
        box-shadow: ${shadow};
    }
    [data-tooltip]:hover::after {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Breadcrumbs = styled.nav`
    display: flex;
    gap: 6px;
    align-items: center;
    color: ${muted};
    a {
        color: inherit;
    }
    strong {
        color: ${text};
    }
`;

export const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    a {
        padding: 6px 10px;
        border: 1px solid ${border};
        border-radius: 999px;
        background: ${card};
        color: ${muted};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;

        &:hover {
            color: ${accent};
            border-color: ${accent};
        }
        &.active,
        &.active:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Kpis = styled.section`
    display: grid;
    grid-template-columns: repeat(5, minmax(160px, 1fr));
    gap: 10px;

    .kpi {
        display: grid;
        gap: 6px;
        padding: 14px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
    }
    .kpi-label {
        color: ${muted};
        font-weight: 600;
    }
    .kpi-value {
        font-size: 28px;
        font-weight: 800;
        letter-spacing: 0.2px;
    }
    .kpi-sub {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
            monospace;
    }
`;

export const Toolbar = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    .left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .search {
        position: relative;
        input {
            width: 320px;
            max-width: 60vw;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 8px 10px 8px 30px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            &::placeholder {
                color: ${muted};
            }
            &:focus {
                outline: none;
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
        .search-icon {
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            color: ${muted};
            pointer-events: none;
        }
    }

    .chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        .chip {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: ${card};
            color: ${muted};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            &:hover {
                border-color: ${accent};
                color: ${accent};
            }
        }
        .chip-on {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const RightLinks = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    .link {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
        color: ${muted};
        text-decoration: none;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;
        svg {
            opacity: 0.9;
        }
        &:hover {
            color: ${accent};
            border-color: ${accent};
        }
    }
`;

export const TableWrap = styled.section`
    .table-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 8px 12px 0 12px;
        h3 {
            font-family: "Antonio", sans-serif;
        }
        .muted {
            color: ${muted};
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin-top: 8px;

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${card};
        border-bottom: 1px solid ${border};
        text-align: left;
        padding: 10px 12px;
        color: ${accent};
    }

    tbody td {
        border-bottom: 1px solid ${border};
        padding: 10px 12px;
        vertical-align: top;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }

    code {
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 6px;
        border-radius: 6px;
    }

    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono",
            monospace;
    }

    .usedin a {
        margin-right: 8px;
        text-decoration: none;
    }

    .row-actions {
        display: inline-flex;
        gap: 6px;
        button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border-radius: 8px;
            background: transparent;
            color: ${muted};
            border: 1px solid ${border};
            cursor: pointer;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease, transform 0.04s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
            &.danger:hover {
                border-color: #8a2b2b;
            } /* subtle danger mood without breaking theme */
        }
    }
`;

export const StatusPill = styled.span`
    padding: 4px 8px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 12px;
    border: 1px solid ${border};
    background: ${card};
    color: ${muted};
    &[data-variant="Active"] {
        color: ${accent};
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const HelpCallout = styled.section`
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 12px;
    align-items: start;
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${shadow};

    .icon {
        color: ${accent};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
    }
    .text h4 {
        margin-bottom: 6px;
    }
    .text p {
        color: ${muted};
    }
    .links {
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .links a {
        text-decoration: none;
    }
`;

export const FooterNote = styled.footer`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${muted};
    span + span {
        margin-left: 2px;
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.6);
    display: grid;
    place-items: center;
    z-index: 9999;
`;

export const ModalCard = styled.div`
    width: min(520px, 92vw);
    background: ${card};
    color: ${text};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 16px;

    h3 {
        margin-bottom: 6px;
    }
    p {
        color: ${muted};
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 12px;
        .btn-primary {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    }
`;
