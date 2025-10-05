import styled from "styled-components";

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
    color: ${text};
    background: ${bg};
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    background: ${"color-mix(in oklab, " + bg + " 92%, transparent)"};
    backdrop-filter: blur(8px);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding: 18px 20px;
    border-bottom: 1px solid ${border};

    h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 6px;
        letter-spacing: 0.3px;
    }
    .meta {
        display: flex;
        gap: 14px;
        color: ${muted};
        font-size: 12px;
        span {
            white-space: nowrap;
        }
    }
    .r {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`;

export const Toolbar = styled.div`
    display: flex;
    gap: 8px;
    button {
        background: ${card};
        border: 1px solid ${border};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
            transform 0.06s;
        &:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        &:active {
            transform: translateY(1px);
        }
    }
`;

export const KbdRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${muted};
    font-size: 12px;
`;

export const Kbd = styled.kbd`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    background: ${card};
    border: 1px solid ${border};
    padding: 2px 6px;
    border-radius: 6px;
    color: ${text};
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
`;

export const Filters = styled.div`
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 16px;
    padding: 16px 20px;
    border-bottom: 1px solid ${border};

    .tabs {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &.active {
                border-color: ${accent};
                color: ${accent};
            }
        }
    }
    .search {
        display: flex;
        input {
            width: 100%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 10px 12px;
            transition: border-color 0.2s, box-shadow 0.2s;
            &::placeholder {
                color: ${muted};
            }
            &:focus {
                border-color: ${accent};
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 18px;
    padding: 18px 20px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

export const SideIndex = styled.aside`
    .box {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 12px;
        margin-bottom: 18px;
    }
    .title {
        font-weight: 600;
        letter-spacing: 0.3px;
        color: ${text};
        margin-bottom: 10px;
    }
    .list {
        display: grid;
        gap: 6px;
        button {
            width: 100%;
            text-align: left;
            background: transparent;
            border: 1px dashed ${border};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
            cursor: pointer;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 10px;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
            .v {
                font-weight: 600;
            }
            .d {
                color: ${muted};
                font-size: 12px;
            }
            &:hover {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
        }
    }
    .links {
        display: grid;
        gap: 6px;
        a {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            &:hover {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 12%, transparent);
            }
        }
    }
`;

export const Main = styled.section`
    display: grid;
    gap: 16px;
`;

export const Card = styled.article`
    position: relative;
    background: ${card};
    border: 1px solid ${border};
    border-radius: 16px;
    box-shadow: ${shadow};
    padding: 14px 16px;

    &::before {
        content: "";
        position: absolute;
        left: -10px;
        top: 24px;
        bottom: 24px;
        width: 2px;
        background: color-mix(in oklab, ${accent} 50%, transparent);
        border-radius: 2px;
        display: none;
    }

    &[data-type="major"] {
        border-left: 3px solid ${accent};
    }
    &[data-type="minor"] {
        border-left: 3px solid color-mix(in oklab, ${accent} 75%, transparent);
    }
    &[data-type="patch"] {
        border-left: 3px solid color-mix(in oklab, ${accent} 45%, transparent);
    }
`;

export const CardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;

    .lh {
        display: grid;
        gap: 6px;
        h2 {
            display: flex;
            align-items: center;
            gap: 8px;
            .version {
                font-size: 20px;
                letter-spacing: 0.2px;
            }
        }
        .meta {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            align-items: center;
            .date,
            .time {
                color: ${muted};
                font-size: 12px;
            }
        }
    }

    .rh {
        display: flex;
        gap: 8px;
        button {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                transform 0.06s;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }
`;

export const Badge = styled.span`
    --tone: ${(p) =>
        p.tone === "solid"
            ? `color-mix(in oklab, ${accent} 85%, #000)`
            : p.tone === "line"
            ? `color-mix(in oklab, ${accent} 45%, transparent)`
            : `color-mix(in oklab, ${accent} 25%, transparent)`};

    font-size: 11px;
    padding: 2px 8px;
    border-radius: 999px;
    color: ${text};
    border: 1px solid var(--tone);
    background: ${(p) => (p.tone === "solid" ? `var(--tone)` : `transparent`)};
`;

export const Tag = styled.span`
    font-size: 11px;
    color: ${accent};
    background: color-mix(in oklab, ${accent} 12%, transparent);
    border: 1px solid color-mix(in oklab, ${accent} 55%, transparent);
    padding: 2px 8px;
    border-radius: 999px;
`;

export const Summary = styled.p`
    color: ${text};
    margin: 6px 0 8px;
`;

export const Section = styled.section`
    margin-top: 8px;
    .st {
        color: ${muted};
        font-weight: 600;
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
    li {
        margin: 4px 0;
    }
`;

export const LinksRow = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .deep-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        background: ${card};
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 8px;
        color: ${text};
        transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        .dot {
            opacity: 0.75;
        }
        &:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }
`;

export const Empty = styled.div`
    background: ${card};
    border: 1px dashed ${border};
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    .emoji {
        font-size: 28px;
        margin-bottom: 8px;
    }
    .title {
        font-weight: 700;
        margin-bottom: 4px;
    }
    .hint {
        color: ${muted};
        button {
            margin-left: 6px;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    .card {
        width: min(560px, 92vw);
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 14px;
        box-shadow: ${shadow};
        padding: 14px;
        .head {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .body {
            color: ${muted};
            margin-bottom: 12px;
        }
        .foot {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }
`;
