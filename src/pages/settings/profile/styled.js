import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        color: ${text};
        padding: 16px 16px 32px;

        .muted {
            color: ${muted};
        }
        .small {
            font-size: 12px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 12%, transparent);
            color: ${accent};
            font-size: 12px;
            margin-left: 8px;
        }
        .badge.soft {
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
            margin-left: 8px;
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            font-weight: 500;
        }
        .btn:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        .btn[aria-disabled],
        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.primary {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }
        .btn.primary:hover {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }

        .iconBtn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            width: 36px;
            height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .iconBtn:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .pageHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }
        .breadcrumbs {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs a:hover {
            color: ${accent};
        }
        .breadcrumbs .current {
            color: ${text};
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .identity {
            display: grid;
            grid-template-columns: 96px 1fr auto;
            gap: 16px;
            align-items: center;
            margin-bottom: 16px;
        }
        .identity .avatar {
            width: 96px;
            height: 96px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            font-size: 36px;
            font-weight: 700;
            font-family: "Antonio", sans-serif;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            border: 1px solid ${border};
            color: ${text};
        }
        .identity .who h1 {
            font-family: "Antonio", sans-serif;
            margin-bottom: 6px;
        }
        .metaRow {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .metaRow .muted {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .metaList {
            list-style: none;
            margin-top: 10px;
        }
        .metaList li {
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 4px 0;
            color: ${muted};
        }
        .metaList li strong {
            color: ${text};
        }

        .share {
            display: flex;
            flex-direction: column;
            gap: 6px;
            align-items: flex-end;
        }
        .shareField {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .shareField input {
            width: 360px;
            max-width: 50vw;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 10px;
            border-radius: 8px;
        }

        .quickGrid {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            margin-bottom: 16px;
        }
        .quick.card {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: ${text};
        }
        .quick .icon {
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        .quick:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .contentGrid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .sectionHeader h3 {
            font-family: "Antonio", sans-serif;
        }

        .fields {
            display: grid;
            gap: 12px;
        }
        .fields.twoCol {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .field {
            display: grid;
            gap: 6px;
        }
        .field label {
            color: ${muted};
            font-size: 12px;
        }
        .field input {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 10px;
            border-radius: 8px;
        }
        .inline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btnRow {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .linksRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            color: ${text};
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tableWrap {
            overflow: auto;
            border-radius: 10px;
            border: 1px solid ${border};
        }
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
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        td.text-right {
            text-align: right;
        }

        .danger {
            outline: 1px dashed ${border};
        }

        /* modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: grid;
            place-items: center;
            z-index: 9999;
        }
        .modalCard {
            width: min(560px, 92vw);
        }
        .modalHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .modalBody {
            color: ${text};
        }
        .modalFooter {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 16px;
        }
    `,
};
