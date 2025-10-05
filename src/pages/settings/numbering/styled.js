import styled, { css } from "styled-components";

/* Theme tokens via CSS variables with safe fallbacks */
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
    background: transparent;
    padding: 16px;
`;

export const Header = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Crumbs = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    a {
        color: ${muted};
    }
    a:hover {
        color: ${accent};
    }
    .current {
        color: ${text};
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 8px;
`;

export const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${border};
    background: ${card};
    color: ${text};
    padding: 8px 12px;
    border-radius: 10px;
    box-shadow: ${shadow};
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease,
        transform 0.05s ease;
    &:hover {
        border-color: ${accent};
        color: ${accent};
        background: rgba(0, 0, 0, 0.08);
    }
    &:active {
        transform: translateY(1px);
    }
    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

export const Tabs = styled.nav`
    display: flex;
    gap: 8px;
    margin: 8px 0 16px 0;
    flex-wrap: wrap;

    a {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${border};
        border-radius: 999px;
        background: ${card};
        color: ${muted};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    a:hover {
        color: ${accent};
        border-color: ${accent};
    }
`;

export const Card = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 14px;
    box-shadow: ${shadow};
    padding: 16px;
    width: 100%;
    overflow: hidden;

    .cardHead {
        display: flex;
        gap: 12px;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 12px;

        h2,
        h3 {
            font-weight: 700;
        }
        .muted {
            color: ${muted};
            font-size: 12px;
        }
    }

    .bullets {
        display: grid;
        gap: 8px;
        margin: 8px 0;
    }

    .ctaRow {
        display: flex;
        gap: 8px;
        margin-top: 8px;
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    }

    .examples {
        margin-top: 12px;
        ul {
            display: grid;
            gap: 6px;
        }
        code {
            background: rgba(0, 0, 0, 0.2);
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid ${border};
        }
    }

    .tokens {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 10px;
        margin: 12px 0 4px 0;
    }
`;

export const TableWrap = styled.div`
    width: 100%;
    overflow: auto;
    border-radius: 10px;
    border: 1px solid ${border};
    background: color-mix(in oklab, ${card} 94%, transparent);

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        text-align: left;
        padding: 10px;
        background: ${card};
        color: ${accent};
        position: sticky;
        top: 0;
        z-index: 1;
        border-bottom: 1px solid ${border};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${border};
        vertical-align: top;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    code {
        background: rgba(0, 0, 0, 0.2);
        padding: 2px 6px;
        border-radius: 6px;
        border: 1px solid ${border};
    }
    .example {
        color: ${text};
        font-weight: 600;
    }
    .next {
        font-family: "Antonio", sans-serif;
        letter-spacing: 0.2px;
    }
    .rowActions {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${muted};
            padding: 4px 8px;
            border-radius: 6px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
            &:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
        a.nav {
            color: ${muted};
            text-decoration: none;
            border-bottom: 1px dashed ${border};
        }
        a.nav:hover {
            color: ${accent};
            border-color: ${accent};
        }
    }
`;

export const Badge = styled.span`
    display: inline-block;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${border};
    background: color-mix(in oklab, ${card} 92%, transparent);
    color: ${text};
    font-size: 12px;
`;

export const Grid = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    ${(p) =>
        p.cols &&
        css`
            @media (min-width: 900px) {
                grid-template-columns: repeat(${p.cols}, minmax(0, 1fr));
            }
        `}
`;

export const Kpi = styled.div`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    padding: 12px;
    box-shadow: ${shadow};

    .k-label {
        color: ${muted};
        font-size: 12px;
    }
    .k-value {
        font-size: 20px;
        font-weight: 700;
        margin-top: 4px;
    }
    .k-sub {
        color: ${muted};
        font-size: 12px;
        margin-top: 6px;
    }
`;

export const Token = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: start;
    gap: 10px;
    padding: 10px;
    border: 1px solid ${border};
    border-radius: 10px;
    background: color-mix(in oklab, ${card} 96%, transparent);
    kbd {
        display: inline-block;
        border: 1px solid ${border};
        border-radius: 8px;
        background: ${card};
        padding: 6px 10px;
        font-family: "Antonio", sans-serif;
    }
    span {
        color: ${muted};
    }
`;

export const Hint = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${muted};
    svg {
        opacity: 0.9;
    }
`;

export const FooterLinks = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    a {
        text-decoration: none;
        color: ${muted};
        padding: 8px 10px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: ${card};
        transition: color 0.2s ease, border-color 0.2s ease,
            background 0.2s ease;
    }
    a:hover {
        color: ${accent};
        border-color: ${accent};
        background: rgba(0, 0, 0, 0.06);
    }
`;

/* Modal */
export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.6);
    display: grid;
    place-items: center;
    z-index: 50;
`;

export const ModalCard = styled.div`
    width: min(560px, 96vw);
    border: 1px solid ${border};
    background: ${card};
    border-radius: 14px;
    box-shadow: ${shadow};
    padding: 16px;

    header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        h4 {
            margin: 0;
        }
    }
    p {
        color: ${muted};
        line-height: 1.7;
    }
    .modalActions {
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.08);
            }
        }
    }
`;
