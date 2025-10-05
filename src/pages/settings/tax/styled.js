// src/pages/settings/tax/styled.js
import styled, { css } from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Wrapper = styled.div`
    width: 100%;
    color: ${text};
    padding: 16px 16px 28px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 14px;
    align-items: end;

    .breadcrumbs {
        grid-column: 1 / -1;
        display: flex;
        gap: 8px;
        align-items: center;
        a {
            color: ${muted};
        }
        .current {
            color: ${text};
            font-weight: 600;
        }
        span {
            color: ${muted};
        }
    }

    .title {
        h1 {
            font-size: 28px;
            line-height: 1.2;
            margin: 4px 0;
        }
        .meta {
            color: ${muted};
            display: flex;
            gap: 16px;
            font-size: 12px;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-self: end;

    button {
        background: ${card};
        border: 1px solid ${border};
        color: ${text};
        padding: 8px 12px;
        border-radius: 10px;
        font-weight: 600;
        transition: all 0.2s ease;
        box-shadow: ${shadow};
        &:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
            transform: translateY(-1px);
        }
        &:active {
            transform: translateY(0);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Subnav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 3;
    background: ${bg};
    padding: 8px 0 10px;
    border-bottom: 1px solid ${border};
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    a {
        padding: 6px 10px;
        border: 1px dashed ${border};
        border-radius: 8px;
        color: ${muted};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
        &:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 12px;
    margin: 14px 0;

    & > div,
    & > section {
        grid-column: span 6;
    }
    @media (max-width: 1200px) {
        & > div,
        & > section {
            grid-column: span 12;
        }
    }
`;

export const Card = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 12px;
    margin: 12px 0;

    .cardHeader {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        h3 {
            font-size: 18px;
        }
        .tools {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        input {
            background: ${bg};
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            min-width: 260px;
            &:focus {
                outline: none;
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &::placeholder {
                color: ${muted};
            }
        }
    }

    .cardBody {
        margin-top: 8px;
    }
    .cardBody.cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
    }

    .kv {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 0;
        border-bottom: 1px dashed ${border};
    }
    .kv span {
        color: ${muted};
    }
    .kv strong {
        letter-spacing: 0.2px;
    }

    .bullets {
        margin: 6px 0 0 14px;
    }
    .bullets li {
        margin: 6px 0;
    }
    .note {
        margin-top: 10px;
        color: ${muted};
    }

    .chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 8px;
    }

    .quickLinks {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        a {
            background: ${bg};
            border: 1px solid ${border};
            padding: 8px 10px;
            border-radius: 10px;
            text-decoration: none;
            color: ${text};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    }

    .tableLinks {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 8px;
        color: ${muted};
        a {
            color: ${text};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 13px;

    ${({ dense }) =>
        dense &&
        css`
            font-size: 12px;
        `}

    thead th {
        text-align: left;
        padding: 10px;
        background: ${bg};
        color: ${accent};
        border-bottom: 1px solid ${border};
        position: sticky;
        top: 42px;
        z-index: 2;
    }

    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${border};
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }

    .code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
    }

    .empty {
        text-align: center;
        color: ${muted};
        padding: 18px 0;
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid ${border};
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 12px;
    color: ${text};
    background: ${bg};

    ${({ tone }) =>
        tone === "success" &&
        css`
            color: ${text};
            border-color: ${accent};
            box-shadow: 0 0 0 2px ${accentSoft} inset;
        `}
    ${({ tone }) =>
        tone === "muted" &&
        css`
            color: ${muted};
        `}
`;

export const Kbd = styled.kbd`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    border: 1px solid ${border};
    padding: 2px 6px;
    border-radius: 6px;
    color: ${muted};
    background: ${bg};
    user-select: none;
`;

export const Pill = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid ${border};
    color: ${text};
    background: ${bg};
    font-size: 12px;
    margin-right: 6px;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 9999;
    backdrop-filter: blur(2px);
`;

export const ModalCard = styled.div`
    width: min(640px, 96vw);
    background: ${card};
    color: ${text};
    border: 1px solid ${border};
    border-radius: 14px;
    box-shadow: ${shadow};
    padding: 16px;

    h3 {
        font-size: 18px;
        margin-bottom: 6px;
    }
    p {
        color: ${muted};
        margin: 6px 0;
    }
    .modalActions {
        margin-top: 12px;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        button {
            background: ${bg};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.2s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
            &:focus-visible {
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }
`;
