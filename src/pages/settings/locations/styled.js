import styled from "styled-components";

const text = "var(--text)";
const muted = "var(--muted)";
const card = "var(--card)";
const border = "var(--border)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 14px;

        a {
            color: ${text};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow);
        }

        .btn {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            padding: 8px 14px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.outline {
            background: transparent;
            border-style: dashed;
        }

        .mini {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
            padding: 4px 8px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .mini:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .mini.danger {
            border-style: dashed;
        }

        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.ok {
        }
        .badge.off {
            opacity: 0.7;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            font-size: 12px;
            white-space: nowrap;
        }

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 2px;
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: ${muted};
        }
        .crumbs a {
            color: ${muted};
        }
        .crumbs a:hover {
            color: ${accent};
        }
        .crumbs .current {
            color: ${text};
            font-weight: 700;
        }
        .crumbs .sep {
            opacity: 0.5;
        }

        .headActions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            border-bottom: 1px solid ${border};
            padding-bottom: 10px;
        }
        .tabs a {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-bottom-color: transparent;
            border-radius: 8px 8px 0 0;
            color: ${muted};
            background: transparent;
            transition: all 0.2s ease;
        }
        .tabs a:hover {
            color: ${accent};
            border-color: ${accent};
            border-bottom-color: transparent;
        }
        .tabs a.active {
            color: ${text};
            background: ${card};
            border-color: ${border};
            border-bottom-color: ${card};
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 10px;
            position: sticky;
            top: 0;
            padding: 10px 0;
            background: var(--bg);
            z-index: 5;
            border-bottom: 1px solid ${border};
        }
        .toolbar .search input {
            width: 100%;
            height: 36px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .toolbar .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }
        .toolbar .filters {
            display: flex;
            gap: 10px;
        }
        .toolbar label {
            display: grid;
            gap: 6px;
            font-size: 12px;
            color: ${muted};
        }
        .toolbar select {
            height: 36px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 0 10px;
        }
        .viewToggle {
            display: flex;
            gap: 8px;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .statStrip {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
        }
        .statCard {
            padding: 12px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
        }
        .statCard .label {
            color: ${muted};
            font-size: 12px;
        }
        .statCard .value {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }

        .tableWrap {
            padding: 0;
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 12px;
            position: sticky;
            top: 0;
            background: ${card};
            border-bottom: 1px solid ${border};
            z-index: 1;
            color: ${muted};
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
        .nameCol {
            display: flex;
            flex-direction: column;
        }
        .nameCol .name {
            font-weight: 700;
        }
        .nameCol .addr {
            color: ${muted};
            font-size: 12px;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .gridWrap {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 12px;
        }
        .gcard {
            grid-column: span 4;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 12px;
            min-height: 180px;
        }
        @media (max-width: 1200px) {
            .gcard {
                grid-column: span 6;
            }
        }
        @media (max-width: 700px) {
            .gcard {
                grid-column: span 12;
            }
        }

        .ghead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
        }
        .ghead .code {
            font-size: 12px;
            color: ${muted};
        }
        .ghead .title {
            font-size: 16px;
            font-weight: 800;
        }
        .ghead .meta {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .ghead .dot {
            opacity: 0.6;
        }

        .body {
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 8px;
        }
        .label {
            color: ${muted};
        }
        .value.link {
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .gactions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .empty {
            padding: 24px;
            display: grid;
            gap: 8px;
            text-align: center;
        }
        .empty .title {
            font-weight: 800;
        }
        .empty .sub {
            color: ${muted};
        }
        .empty .links {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .empty .links a {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
        }

        .footerNav {
            margin-top: 8px;
            padding: 12px;
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 900px) {
            .footerNav {
                grid-template-columns: 1fr;
            }
        }
        .footerNav .group .title {
            font-weight: 800;
            margin-bottom: 8px;
        }
        .footerNav .items {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .footerNav .items a {
            border: 1px solid ${border};
            border-radius: 999px;
            padding: 6px 10px;
            color: ${muted};
        }
        .footerNav .items a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,
};
