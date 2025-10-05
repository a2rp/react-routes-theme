import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        padding: 20px 0 64px;
        color: ${text};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
        }
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    Band: styled.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 16px;

        .item {
            padding: 10px 12px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
        }
        .k {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .v {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .s {
            font-size: 12px;
            margin-top: 2px;
        }
        .muted {
            color: ${muted};
        }

        @media (max-width: 1180px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .filters {
            margin-bottom: 10px;
            .row {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(5, minmax(120px, 1fr));
                align-items: end;
                @media (max-width: 1100px) {
                    grid-template-columns: 1fr 1fr;
                }
                label {
                    display: block;
                    color: ${muted};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .stretch {
                    grid-column: span 2;
                }
                .btns {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }
            }
        }

        .tableWrap {
            border: 1px solid ${border};
            border-radius: 12px;
            overflow: hidden;
            background: ${card};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px 12px;
            font-weight: 600;
            color: ${accent};
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .tdp .muted {
            color: ${muted};
            font-size: 12px;
        }

        .recon.sub {
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .recon h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .recon .muted {
            color: ${muted};
            font-size: 12px;
        }
    `,

    // sidebar
    Side: styled.aside``,

    // cards common
    Card: styled.div``,

    // reuse .card class from global theme
    /* side content styles are nested in Page Grid aside */
    /* but kept here for clarity */
    // side styles defined inline below because we rely on global .card markup
};

Styled.Grid = styled(Styled.Grid)`
    .side {
        display: grid;
        gap: 16px;
    }
    .kv {
        display: grid;
        gap: 8px;
    }
    .kv .k {
        color: ${muted};
        width: 140px;
        display: inline-block;
    }
    .kv .v {
        color: ${text};
    }

    .chips {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .chip {
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 999px;
        background: color-mix(in oklab, ${accent} 8%, transparent);
    }

    .files {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 8px;
    }
    .files a {
        color: ${text};
    }
    .files a:hover {
        color: ${accent};
    }

    .inlineBtns {
        margin-top: 10px;
        display: flex;
        gap: 8px;
    }

    .timeline {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
    }
    .timeline li {
        display: grid;
        grid-template-columns: 16px 1fr;
        gap: 8px;
    }
    .timeline .dot {
        margin-top: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${accent};
        border: 1px solid ${border};
    }
`;

/* modal */
Styled.Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`;
Styled.Modal = styled.div`
    width: min(520px, 92vw);
    border-radius: ${radius};
    border: 1px solid ${border};
    background: ${card};
    color: ${text};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    overflow: hidden;

    header {
        padding: 14px 16px;
        border-bottom: 1px solid ${border};
    }
    h4 {
        font-size: 18px;
    }
    .body {
        padding: 16px;
        color: ${text};
    }
    footer {
        padding: 12px 16px;
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        border-top: 1px solid ${border};
    }

    .btnPrimary {
        border-radius: 8px;
        padding: 8px 14px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        font-weight: 600;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
            transform 0.08s;
    }
    .btnPrimary:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .btnPrimary:active {
        transform: translateY(1px);
    }
`;
