import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Wrap = styled.div`
    width: 100%;
    color: ${text};
    padding: 18px 18px 28px 18px;
`;

export const HeaderBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;

    .title h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .title .subtitle {
        color: ${muted};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        box-shadow: ${shadow};
        transition: border-color 0.25s ease, color 0.25s ease,
            background 0.25s ease, transform 0.06s ease;
    }
    .btn.ghost:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .btn.primary {
        border-color: ${accent};
    }
    .btn.primary:hover {
        color: ${accent};
        transform: translateY(1px);
    }
`;

export const MetaRow = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    color: ${muted};

    .meta strong {
        color: ${text};
    }
    .divider {
        opacity: 0.6;
    }
`;

export const ToolRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 16px;

    .search {
        position: relative;
    }
    .search .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.8;
    }
    .search input {
        width: 100%;
        height: 40px;
        padding: 0 12px 0 34px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        border-radius: 10px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }
    .search input::placeholder {
        color: ${muted};
    }
    .search input:focus {
        outline: none;
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }

    .jumpers {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    .chip {
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 6px 10px;
        font-size: 12px;
        border-radius: 999px;
        text-decoration: none;
        transition: border-color 0.25s ease, color 0.25s ease,
            background 0.25s ease;
    }
    .chip:hover {
        border-color: ${accent};
        color: ${accent};
    }

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        .jumpers {
            justify-content: flex-start;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

export const Sidebar = styled.aside`
    position: sticky;
    top: 12px;
    align-self: start;
    display: grid;
    gap: 16px;

    .toc,
    .quick {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 12px;
    }

    .toc-title,
    .quick-title {
        font-weight: 700;
        letter-spacing: 0.3px;
        color: ${text};
        margin-bottom: 8px;
    }

    .toc ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .toc li a {
        display: grid;
        grid-template-columns: 18px 1fr auto;
        gap: 6px;
        align-items: center;
        padding: 6px 6px;
        border-radius: 8px;
        text-decoration: none;
        color: ${muted};
        border: 1px solid transparent;
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .toc li a:hover {
        color: ${accent};
        border-color: ${accent};
        background: rgba(0, 0, 0, 0.06);
    }
    .toc .count {
        font-size: 11px;
        opacity: 0.8;
    }

    .quick .list {
        display: grid;
        gap: 6px;
    }
    .quick .row {
        display: block;
        padding: 8px 10px;
        border: 1px solid ${border};
        border-radius: 8px;
        text-decoration: none;
        color: ${muted};
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .quick .row:hover {
        color: ${accent};
        border-color: ${accent};
        background: rgba(0, 0, 0, 0.06);
    }
`;

export const Main = styled.main`
    display: grid;
    gap: 16px;

    .faq-section {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px;
    }

    .items {
        display: grid;
        gap: 10px;
        margin-top: 10px;
    }
`;

export const SectionHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;

    h2 {
        font-size: 20px;
        line-height: 1.3;
    }

    .anchor {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid ${border};
        border-radius: 8px;
        color: ${muted};
        text-decoration: none;
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .anchor:hover {
        color: ${accent};
        border-color: ${accent};
        background: rgba(0, 0, 0, 0.06);
    }
`;

export const FaqCard = styled.article`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 10px;
    overflow: hidden;

    .q {
        width: 100%;
        background: transparent;
        color: ${text};
        border: none;
        text-align: left;
        display: grid;
        grid-template-columns: 20px 1fr;
        gap: 6px;
        align-items: center;
        padding: 10px 12px;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    .q:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    .q:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .q .label {
        font-weight: 600;
    }

    .a {
        padding: 12px;
        color: ${text};
        border-top: 1px solid ${border};
        line-height: 1.8;
    }
    .a .bullets {
        margin-top: 6px;
        padding-left: 18px;
    }
    .a .bullets li {
        margin: 2px 0;
    }

    &[data-open="false"] .a {
        display: none;
    }
`;
