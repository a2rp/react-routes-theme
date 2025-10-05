import styled from "styled-components";

/* tokens from CSS variables with safe fallbacks */
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Root = styled.div`
    width: 100%;
    color: ${text};
    display: block;
    padding: 18px;
`;

export const Header = styled.header`
    display: grid;
    gap: 14px;
    margin-bottom: 14px;

    .title {
        display: flex;
        align-items: center;
        gap: 12px;

        h1 {
            font-size: 20px;
            line-height: 1.2;
            margin: 0 0 2px;
        }
        .muted {
            color: ${muted};
        }
        svg {
            opacity: 0.85;
        }
    }
`;

export const Toolbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid ${border};
        border-radius: 8px;
        background: ${card};
        color: ${text};
        box-shadow: ${shadow};
        transition: border-color 0.2s ease, box-shadow 0.2s ease,
            transform 0.05s ease;
        cursor: pointer;
    }
    button:hover {
        border-color: ${accent};
        box-shadow: 0 10px 30px rgba(2, 6, 23, 0.15);
        color: ${accent};
    }
    button:active {
        transform: translateY(1px);
    }
`;

export const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    color: ${muted};
    font-size: 12px;

    svg {
        vertical-align: -2px;
        margin-right: 4px;
        opacity: 0.8;
    }
    strong {
        color: ${text};
    }
`;

export const Grid = styled.div`
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const Card = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 14px;

    .cardHead {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        h3 {
            font-size: 16px;
        }
        .badge {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${muted};
            font-size: 12px;
            user-select: none;
        }
    }

    .rows {
        display: grid;
        gap: 8px;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.08);
        border: 1px solid ${border};
        border-radius: 10px;
        padding: 10px 12px;
        transition: border-color 0.2s ease;

        &:hover {
            border-color: ${accent};
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
        }
        .right {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 8px;
                border-radius: 8px;
                border: 1px dashed ${border};
                text-decoration: none;
                color: ${text};
            }
            .link:hover {
                border-color: ${accent};
                color: ${accent};
            }

            button {
                padding: 6px 10px;
                border: 1px solid ${border};
                border-radius: 8px;
                background: ${card};
                color: ${text};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                transition: border-color 0.2s ease, color 0.2s ease,
                    transform 0.05s ease;
            }
            button:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button:active {
                transform: translateY(1px);
            }

            .meta {
                color: ${muted};
                font-size: 12px;
                margin-right: 8px;
            }
        }
    }

    .importWrap {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }

        .dropZone {
            display: grid;
            place-items: center;
            gap: 6px;
            height: 180px;
            border: 2px dashed ${border};
            border-radius: 12px;
            user-select: none;
            transition: border-color 0.2s ease, color 0.2s ease;
            cursor: pointer;
        }
        .dropZone:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .map {
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;

            h4 {
                margin-bottom: 6px;
            }
            .mapRows {
                display: grid;
                gap: 6px;
                margin-top: 8px;
            }
            .mapRow {
                display: grid;
                grid-template-columns: 1fr 24px 1fr;
                align-items: center;
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 6px 8px;
            }
            .mapRow span:nth-child(2) {
                text-align: center;
                color: ${muted};
            }
            .buttons {
                margin-top: 10px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
        }
    }

    .quickLinks {
        h4 {
            margin-bottom: 6px;
        }
        ul {
            display: grid;
            gap: 6px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            margin-left: 15px;
        }
        .link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px dashed ${border};
            color: ${text};
            text-decoration: none;
        }
        .link:hover {
            border-color: ${accent};
            color: ${accent};
        }
    }
`;

export const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 8px 0;
    display: grid;
    gap: 8px;

    li .link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 8px;
        border: 1px solid ${border};
        text-decoration: none;
        color: ${text};
    }
    li .link:hover {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const Muted = styled.p`
    color: ${muted};
    font-size: 12px;
    margin: 0;
`;

export const Separator = styled.hr`
    border: none;
    height: 1px;
    margin: 12px 0;
    background: ${border};
`;

/* Custom Modal */
export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(2, 6, 23, 0.6);
    z-index: 9999;
`;

export const ModalCard = styled.div`
    width: min(560px, 94vw);
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 12px;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        h3 {
            font-size: 16px;
        }
        .ghost {
            border: 1px solid ${border};
            background: transparent;
            color: ${text};
            padding: 6px 8px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease;
        }
        .ghost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    }
    .body {
        color: ${text};
    }
    .footer {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            padding: 8px 12px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
            color: ${text};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                transform 0.05s ease;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
    }
`;
