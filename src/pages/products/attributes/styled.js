import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
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

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
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
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
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
    `,

    Banner: styled.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${accent} 10%, transparent);
        color: ${text};
    `,

    Layout: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            display: grid;
            gap: 16px;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .toolbar.card {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 860px) {
                grid-template-columns: 1fr auto;
                align-items: center;
            }
            padding: 12px 14px;
        }
        .search input {
            width: 100%;
            height: 38px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .filters {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .filters label {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .filters select {
            height: 34px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 0 10px;
        }

        .statsRow {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 680px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .stat {
            padding: 14px;
        }
        .stat .k {
            color: ${muted};
            font-size: 12px;
        }
        .stat .v {
            font-size: 20px;
            font-weight: 700;
            margin-top: 4px;
        }

        .tableWrap {
            padding: 0;
            overflow: auto;
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${accent};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 12px;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 12px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 7%, transparent);
        }

        .nameCell {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .nameCell .name {
            font-weight: 700;
        }
        .nameCell .id {
            color: ${muted};
            font-size: 12px;
        }

        .code {
            background: color-mix(in oklab, ${accent} 8%, transparent);
            padding: 2px 6px;
            border-radius: 6px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-size: 12px;
        }
        .chip.type {
            text-transform: capitalize;
        }
        .chip.opt {
            opacity: 0.95;
        }
        .chip.group {
            opacity: 0.9;
        }

        .optionsCell {
            white-space: nowrap;
        }
        .optionsCell .more {
            margin-left: 6px;
            color: ${muted};
        }

        .num {
            text-align: right;
        }

        .actions {
            white-space: nowrap;
        }
        .actions .small {
            padding: 6px 10px;
        }

        .empty {
            text-align: center;
            padding: 28px 12px;
        }
        .emptyBlock .big {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .muted {
            color: ${muted};
        }
        .small {
            font-size: 12px;
        }

        .pager {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
        }
        .pager .hint {
            color: ${muted};
            font-size: 12px;
        }
        .pager .buttons {
            display: flex;
            gap: 8px;
        }
        .pager button {
            height: 32px;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${muted};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
        }
        .links a:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tree {
            list-style: none;
            padding-left: 0;
            margin: 0;
            display: grid;
            gap: 6px;
            color: ${text};
        }
        .tree > li {
            padding: 6px 8px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .tree ul {
            list-style: disc;
            padding-left: 18px;
            margin-top: 8px;
            color: ${muted};
        }

        .printCard .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
        }
        .printCard .grid .full {
            grid-column: 1 / -1;
        }
        .printCard .k {
            color: ${muted};
            font-size: 12px;
        }
        .printCard .v {
            font-weight: 700;
        }

        .schema {
            margin-top: 8px;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px;
            background: ${card};
            overflow: auto;
            max-height: 240px;
        }
    `,

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
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `,
};
