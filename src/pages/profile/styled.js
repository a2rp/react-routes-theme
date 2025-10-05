import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 18px;
        display: grid;
        gap: 16px;

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
        }

        a {
            color: ${text};
        }

        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.08s ease;
        }
        button:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active {
            transform: translateY(1px);
        }
        button.ghost {
            background: transparent;
        }
    `,

    Header: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 16px;

        .left {
            display: grid;
            grid-template-columns: 72px 1fr;
            gap: 14px;
            align-items: center;
        }

        .meta .nameRow {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin: 0;
        }

        .verified {
            color: ${accent};
            display: inline-flex;
            align-items: center;
        }

        .sub {
            color: ${muted};
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .sub .dot {
            opacity: 0.5;
        }

        .tags {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tag {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 14%, transparent);
            color: ${text};
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
        }
    `,

    Avatar: styled.div`
        width: 72px;
        height: 72px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        font-size: 26px;
        font-weight: 700;
        background: radial-gradient(
                120px 120px at 30% 30%,
                color-mix(in oklab, ${accent} 35%, transparent),
                transparent
            ),
            linear-gradient(
                135deg,
                color-mix(in oklab, ${accent} 22%, transparent),
                transparent
            );
        border: 1px solid ${border};
    `,

    Grid: styled.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(${(p) => p.cols || 3}, minmax(0, 1fr));
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .qLink {
            /* border: 1px solid #f00; */
            display: flex;
            align-items: center;
            gap: 15px;
        }
    `,

    SectionHeader: styled.div`
        display: grid;
        gap: 6px;
        padding: 2px 2px 0 2px;
        h2 {
            font-size: 18px;
            margin: 0;
        }
        p {
            color: ${muted};
            margin: 0;
        }
    `,

    Card: styled.div`
        padding: 14px;

        .line {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-weight: 600;
            margin-bottom: 8px;
        }
        .value {
            font-size: 14px;
            color: ${text};
        }

        .kvs {
            display: grid;
            gap: 8px;
        }
        .kvs .k {
            color: ${muted};
            margin-right: 8px;
        }
        .kvs .v {
            color: ${text};
            font-weight: 600;
        }

        &.timeline {
            padding: 0;
            overflow: hidden;
        }
        &.timeline ul {
            list-style: none;
            padding: 10px 0 0 0;
            margin: 0;
        }
        &.timeline li {
            display: grid;
            grid-template-columns: 20px 1fr;
            gap: 10px;
            padding: 10px 14px;
            border-top: 1px solid ${border};
        }
        &.timeline li:first-child {
            border-top: 0;
        }
        &.timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-top: 6px;
            background: color-mix(in oklab, ${accent} 50%, transparent);
            border: 1px solid ${border};
        }
        &.timeline .text {
            line-height: 1.5;
        }
        &.timeline .stamp {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }

        &.danger .title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        &.danger p {
            color: ${muted};
            margin: 0 0 8px 0;
        }
        &.danger .row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    `,

    TableCard: styled.div`
        padding: 0;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 12px 14px;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        .pill {
            margin-left: 8px;
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }

        .rowActions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding: 10px 14px;
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
        padding: 16px;
    `,

    Modal: styled.div`
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        width: min(520px, 100%);
        padding: 16px;

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            color: ${accent};
        }
        p {
            color: ${text};
            margin: 8px 0 12px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `,
};

export default Styled;
