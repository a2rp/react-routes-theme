import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)"; // amber
const radius = "var(--radius, 16px)";

export const Styled = {
    Page: styled.div`
        padding: 24px 0 64px;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
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
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            cursor: pointer;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnDanger {
            border-color: ${danger};
            color: ${danger};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px
                color-mix(in oklab, ${danger} 22%, transparent);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 14px;
        margin-bottom: 16px;

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .search input {
            width: 320px;
            max-width: 60vw;
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .stat {
            color: ${muted};
            font-size: 12px;
        }
        .spacer {
            width: 1px;
            height: 22px;
            background: ${border};
        }
        .psize {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }
        .psize select {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 6px 8px;
            border-radius: 8px;
            outline: none;
        }
        .psize select:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    TableCard: styled.div`
        padding: 0;

        .tableWrap {
            overflow: auto;
            border-radius: ${radius};
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            color: ${text};
            min-width: 920px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            padding: 10px 12px;
            text-align: left;
            color: ${muted};
            font-weight: 600;
            letter-spacing: 0.2px;
            user-select: none;
        }
        thead th.right {
            text-align: right;
        }
        thead th.left {
            text-align: left;
        }

        thead th.sortable {
            cursor: pointer;
        }
        thead th.sortable:hover {
            color: ${accent};
        }
        thead th.sorted.asc span::after,
        thead th.sorted.desc span::after {
            content: "";
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 6px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            transform: translateY(-1px);
        }
        thead th.sorted.asc span::after {
            border-bottom: 6px solid ${accent};
        }
        thead th.sorted.desc span::after {
            border-top: 6px solid ${accent};
        }

        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        tbody td.right {
            text-align: right;
        }
        tbody td.left {
            text-align: left;
        }

        .empty {
            text-align: center;
            padding: 36px 0;
            color: ${muted};
        }

        .id .idLink {
            color: ${text};
            border-bottom: 1px dashed ${border};
        }
        .id .idLink:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .customer .name {
            font-weight: 600;
        }
        .customer .muted {
            color: ${muted};
            font-size: 12px;
        }

        .amount {
            font-variant-numeric: tabular-nums;
        }
        .rowActions {
            display: inline-flex;
            gap: 6px;
        }
        .xs {
            padding: 6px 8px;
            font-size: 12px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
        }
        .xs:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .xs:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Pager: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 12px;
        border-top: 1px solid ${border};

        .info {
            color: ${muted};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    StatusChip: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: 1px solid ${border};
        background: ${card};
        padding: 4px 10px;
        border-radius: 999px;
        text-transform: capitalize;
        font-size: 12px;
        letter-spacing: 0.2px;

        &[data-variant="paid"] {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        &[data-variant="pending"] {
            border-color: ${warn};
            color: ${warn};
            background: color-mix(in oklab, ${warn} 10%, transparent);
        }
        &[data-variant="shipped"] {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        &[data-variant="refunded"] {
            border-color: ${warn};
            color: ${warn};
            background: color-mix(in oklab, ${warn} 10%, transparent);
        }
        &[data-variant="cancelled"] {
            border-color: ${danger};
            color: ${danger};
            background: color-mix(in oklab, ${danger} 10%, transparent);
        }
    `,

    // simple custom modal
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,
    Modal: styled.div`
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
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
