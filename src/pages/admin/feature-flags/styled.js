import styled from "styled-components";

/* tokens */
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
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 16px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: end;

    .left h1 {
        font-size: 26px;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .meta {
        display: flex;
        gap: 12px;
        align-items: center;
        color: ${muted};
    }
`;

export const Tabs = styled.div`
    display: inline-flex;
    background: ${card};
    border: 1px solid ${border};
    padding: 4px;
    border-radius: 10px;

    button {
        border: none;
        background: transparent;
        color: ${muted};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease;
    }
    button:hover {
        color: ${accent};
    }
    button.active {
        background: color-mix(in oklab, ${accent} 15%, transparent);
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft} inset;
    }
`;

export const QuickLinks = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border: 1px solid ${border};
        background: ${card};
        border-radius: 999px;
        text-decoration: none;
        color: ${muted};
        font-size: 12px;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;

        &:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
    }
`;

export const Toolbar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    align-items: center;

    .search input {
        width: 100%;
        height: 40px;
        border: 1px solid ${border};
        background: ${bg};
        color: ${text};
        border-radius: 8px;
        padding: 0 12px;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;

        &::placeholder {
            color: ${muted};
        }
        &:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    }

    .filters {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .select {
        display: grid;
        gap: 4px;
        color: ${muted};

        select {
            height: 40px;
            border: 1px solid ${border};
            background: ${bg};
            color: ${text};
            border-radius: 8px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;

            &:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    }

    button {
        height: 40px;
        padding: 0 14px;
        border: 1px solid ${border};
        background: ${bg};
        color: ${text};
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;

        &:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
    }
`;

export const StickyHeader = styled.div`
    display: grid;
    grid-template-columns: 2.4fr 1fr 1fr 1.2fr 1.6fr 1.2fr 1.8fr 1.6fr;
    align-items: center;
    padding: 10px 12px;
    font-weight: 600;
    color: ${accent};
    position: sticky;
    top: 0;
    background: color-mix(in oklab, ${bg} 94%, transparent);
    z-index: 1;
    border-bottom: 1px solid ${border};
`;

export const Grid = styled.section`
    display: grid;
    gap: 10px;
`;

export const Row = styled.article`
    display: grid;
    grid-template-columns: 2.4fr 1fr 1fr 1.2fr 1.6fr 1.2fr 1.8fr 1.6fr;
    gap: 0;
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    box-shadow: ${shadow};
    overflow: hidden;

    &[data-highlight="true"] {
        outline: 2px solid ${accent};
        box-shadow: 0 0 0 4px ${accentSoft};
    }

    > div {
        padding: 12px;
        border-right: 1px dashed ${border};
    }
    > div:last-child {
        border-right: none;
    }

    .flag .top {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .flag .name {
        margin-top: 4px;
        font-weight: 600;
    }
    .flag .desc {
        margin-top: 6px;
        color: ${muted};
    }

    .owner a {
        color: ${text};
    }
    .owner a:hover {
        color: ${accent};
    }

    .status {
        display: flex;
        align-items: center;
        gap: 8px;
        .env {
            color: ${muted};
        }
    }

    .rollout {
        display: grid;
        gap: 6px;
        align-items: center;
        .pct {
            color: ${muted};
            font-size: 12px;
        }
    }

    .tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;

        .tag {
            display: inline-flex;
            padding: 4px 8px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${bg} 70%, transparent);
            color: ${muted};
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;

            &:hover {
                border-color: ${accent};
                color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
        }
    }

    .updated {
        display: grid;
        gap: 3px;
        .date {
            font-weight: 600;
        }
        .time {
            color: ${muted};
            font-size: 12px;
        }
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .link {
            text-decoration: none;
            color: ${text};
            border-bottom: 1px dashed ${border};
        }
        .link:hover {
            color: ${accent};
            border-bottom-color: ${accent};
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;

        .ghost {
            background: ${card};
        }

        .toggle {
            background: ${card};
        }

        button {
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 8px 10px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        button:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
    }
`;

export const Key = styled.code`
    background: color-mix(in oklab, ${bg} 70%, transparent);
    border: 1px solid ${border};
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 12px;
`;

export const StatePill = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${border};
    color: ${text};
    background: ${({ ["data-on"]: on }) =>
        on === "true"
            ? `color-mix(in oklab, ${accent} 12%, transparent)`
            : `color-mix(in oklab, #888 12%, transparent)`};
`;

export const EnvDot = styled.span`
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 999px;
    border: 1px solid ${border};
    background: ${accent};
`;

export const Meter = styled.div`
    height: 8px;
    background: color-mix(in oklab, ${bg} 65%, transparent);
    border: 1px solid ${border};
    border-radius: 999px;
    overflow: hidden;

    span {
        display: block;
        height: 100%;
        background: ${accent};
    }
`;

export const Toast = styled.div`
    position: fixed;
    right: 16px;
    bottom: 16px;
    background: ${card};
    color: ${text};
    border: 1px solid ${border};
    border-radius: 10px;
    padding: 10px 12px;
    box-shadow: ${shadow};
    z-index: 50;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 60;
`;

export const ModalCard = styled.div`
    width: min(560px, 92vw);
    background: ${card};
    border: 1px solid ${border};
    border-radius: 14px;
    box-shadow: ${shadow};

    header,
    section,
    footer {
        padding: 16px;
    }
    header h3 {
        margin: 0;
    }
    section p {
        color: ${muted};
    }
    footer {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`;

export const LinksRow = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 10px;

    a {
        color: ${text};
        text-decoration: none;
        border-bottom: 1px dashed ${border};
    }
    a:hover {
        color: ${accent};
        border-bottom-color: ${accent};
    }
`;
