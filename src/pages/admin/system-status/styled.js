import styled, { css } from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

const flatTable = css`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        text-align: left;
        font-weight: 600;
        color: ${text};
        border-bottom: 1px solid ${border};
        padding: 10px;
        background: ${card};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${border};
        color: ${text};
    }
    .muted {
        color: ${muted};
        font-size: 12px;
    }
    .svc {
        display: flex;
        align-items: center;
        gap: 8px;
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${accent};
        }
        .dot[data-status="degraded"] {
            background: #d4aa00;
        } /* amber-ish */
        .dot[data-status="down"] {
            background: #cc4040;
        } /* red-ish */
    }
`;

export const Styled = {
    Page: styled.div`
        padding: 20px;
        color: ${text};
    `,

    Breadcrumbs: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        a {
            color: ${muted};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }
        strong {
            color: ${text};
        }
        span {
            color: ${muted};
        }
    `,

    HeaderBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 16px;
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        box-shadow: ${shadow};
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            margin-bottom: 4px;
        }
        p {
            color: ${muted};
        }
    `,

    HeaderActions: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,

    InfoGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px;

        .card-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
            h3 {
                margin: 0;
            }
            .head-links a {
                margin-left: 10px;
            }
        }

        h3 {
            margin-bottom: 10px;
        }
        .text-link {
            color: ${accent};
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .text-link:hover {
            text-decoration: underline;
        }

        .kv {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            @media (max-width: 640px) {
                grid-template-columns: 1fr;
            }
            .k {
                color: ${muted};
                display: block;
            }
            .v {
                color: ${text};
                display: block;
            }
        }

        .links {
            margin-top: 10px;
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
        }

        .flags {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                display: grid;
                grid-template-columns: 70px 1fr;
                gap: 8px;
                padding: 8px 0;
                border-bottom: 1px solid ${border};
            }
            li:last-child {
                border-bottom: none;
            }
            .state {
                display: inline-block;
                font-weight: 600;
                padding: 4px 8px;
                border-radius: 999px;
                border: 1px solid ${border};
            }
            .state.on {
                color: ${text};
                background: color-mix(in oklab, ${accent} 14%, transparent);
                border-color: ${accent};
            }
            .state.off {
                color: ${muted};
                background: rgba(0, 0, 0, 0.08);
            }
            .label {
                font-weight: 600;
            }
            .desc {
                color: ${muted};
                grid-column: 2 / span 1;
            }
        }

        table.flat {
            ${flatTable}
        }
        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            padding: 3px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: rgba(0, 0, 0, 0.08);
            color: ${text};
        }

        .empty {
            color: ${muted};
            padding: 10px 4px;
        }

        &.dep-card table.flat tbody td {
            vertical-align: middle;
        }
    `,

    StatusChip: styled.span`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid ${border};
        font-size: 12px;
        white-space: nowrap;

        ${({ status }) =>
            status === "operational" &&
            css`
                color: ${text};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 16%, transparent);
            `}
        ${({ status }) =>
            status === "degraded" &&
            css`
                color: ${text};
                border-color: #d4aa00;
                background: color-mix(in oklab, #d4aa00 20%, transparent);
            `}
    ${({ status }) =>
            status === "down" &&
            css`
                color: ${text};
                border-color: #cc4040;
                background: color-mix(in oklab, #cc4040 16%, transparent);
            `}
    `,

    TwoCol: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 20px 16px 1fr;
            gap: 10px;
            padding: 10px 0;
            border-bottom: 1px solid ${border};
        }
        .timeline li:last-child {
            border-bottom: none;
        }
        .line {
            width: 2px;
            background: ${border};
            margin-left: 9px;
        }
        .node {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .node .sev {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            border-radius: 50%;
        }
        .node .sev.minor {
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }
        .content .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .content .meta {
            display: flex;
            gap: 14px;
            color: ${muted};
            margin-top: 4px;
            flex-wrap: wrap;
        }
    `,

    QuickLinks: styled.div`
        margin-top: 16px;
        h3 {
            margin: 0 0 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 10px;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            @media (max-width: 800px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 480px) {
                grid-template-columns: 1fr;
            }
        }
        .ql {
            display: block;
            padding: 10px 12px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            text-decoration: none;
            text-align: center;
            transition: all 0.2s ease;
        }
        .ql:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Toast: styled.div`
        position: fixed;
        right: 16px;
        top: 16px;
        z-index: 20;
        background: ${card};
        border: 1px solid ${border};
        color: ${text};
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: ${shadow};
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 30;
    `,

    Modal: styled.div`
        width: min(520px, 96vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px;

        h4 {
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,
};
