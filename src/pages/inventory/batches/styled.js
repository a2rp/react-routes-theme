import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const warn = "#f59e0b";
const danger = "#ef4444";

export const Styled = {
    Page: styled.div`
        padding: 20px 0 64px;
        color: ${text};

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
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
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
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

        .rhs {
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
                box-shadow 0.25s, transform 0.06s;
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

        [aria-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Stats: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 1000px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 24px;
            font-weight: 700;
            margin-top: 6px;
        }
        .sub {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }
    `,

    Toolbar: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        padding: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: 1fr auto auto;
            align-items: center;
        }

        .search input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 999px;
            padding: 6px 10px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .chip.active {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            color: ${accent};
        }

        .sort {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .sort span {
            color: ${muted};
            font-size: 12px;
        }
        .link {
            border: 1px dashed ${border};
            background: transparent;
            color: ${muted};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .link:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .link.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        align-items: start;
        @media (min-width: 1200px) {
            grid-template-columns: 1.7fr 0.9fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideTitle {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .printBlock {
            display: grid;
            gap: 8px;
        }
        .printBlock .line {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
        }
        .printBlock .k {
            color: ${muted};
        }
        .printBlock .v {
            color: ${text};
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
            color: ${muted};
        }
        .tips li {
            margin-bottom: 8px;
        }
    `,

    TableWrap: styled.div`
        overflow: auto;
        border-radius: 12px;

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
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${muted};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .prod .nm {
            font-weight: 600;
        }
        .prod .subLink {
            display: inline-block;
            margin-top: 4px;
            font-size: 12px;
            color: ${muted};
            border-bottom: 1px dashed ${border};
            transition: color 0.25s, border-color 0.25s;
        }
        .prod .subLink:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 11px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
        }
        .status.near {
            background: color-mix(in oklab, ${warn} 16%, transparent);
            border-color: color-mix(in oklab, ${warn} 40%, ${border});
        }
        .status.expired {
            background: color-mix(in oklab, ${danger} 16%, transparent);
            border-color: color-mix(in oklab, ${danger} 40%, ${border});
        }

        .actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .btnGhost.small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            font-size: 12px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost.small:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        [aria-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,

    Empty: styled.div`
        display: grid;
        place-items: center;
        gap: 6px;
        padding: 40px 0;
        .icon {
            font-size: 36px;
        }
        h4 {
            font-size: 16px;
        }
        p {
            color: ${muted};
        }
    `,

    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,
    Modal: styled.div`
        width: min(640px, 92vw);
        overflow: hidden;
        border-radius: 14px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
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
                box-shadow 0.25s;
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

        .labelWrap {
            border: 1px dashed ${border};
            border-radius: 12px;
            padding: 16px;
        }
        .labelHeader,
        .labelFooter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${muted};
            font-size: 12px;
        }
        .labelHeader {
            margin-bottom: 10px;
        }
        .labelFooter {
            margin-top: 10px;
        }
        .labelMain .big {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .labelMain .meta {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            color: ${muted};
            font-size: 12px;
        }
        .barcode {
            margin-top: 12px;
            height: 40px;
            background: repeating-linear-gradient(
                90deg,
                #111 0px,
                #111 2px,
                transparent 2px,
                transparent 4px
            );
            border-radius: 6px;
        }
    `,
};
