import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const warn = "var(--warn, #f59e0b)";
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
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
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
                background 0.25s;
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
    `,

    KPIs: styled.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
            margin-top: 2px;
        }
        .hint {
            color: ${muted};
            font-size: 12px;
            margin-top: 4px;
        }
    `,

    Toolbar: styled.section`
        padding: 12px 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
            .row {
                grid-template-columns: 1.5fr 2fr auto;
                align-items: end;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        .search input {
            width: 100%;
        }
        .filters {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
        }
        .sortGroup {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: ${card};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            font-weight: 600;
        }
        .chip.active,
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    TableWrap: styled.section`
        padding: 0;

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
            color: ${accent};
            text-align: left;
            padding: 10px;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }
        tbody tr {
            cursor: pointer;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        tbody tr:focus-visible {
            outline: none;
            box-shadow: inset 0 0 0 2px ${accent};
        }

        .muted {
            color: ${muted};
            font-size: 12px;
        }

        .lot .id {
            font-weight: 700;
        }
        .lot .sku {
            color: ${muted};
            font-size: 12px;
        }

        .prod .name {
            font-weight: 600;
        }
        .prod .sub {
            color: ${muted};
            font-size: 12px;
        }

        .dateCol {
            line-height: 1.4;
        }

        .qty .row {
            display: grid;
            grid-template-columns: auto auto auto auto auto auto;
            gap: 8px;
            align-items: center;
        }
        .qty .label {
            color: ${muted};
            font-size: 12px;
        }
        .qty .val {
            font-weight: 700;
        }

        .qty .bar {
            margin-top: 6px;
            height: 8px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid ${border};
        }
        .qty .bar span {
            display: block;
            height: 100%;
            border-radius: 999px;
            background: ${accent};
        }

        .loc {
            line-height: 1.4;
        }

        .price {
            line-height: 1.4;
        }
        .price .muted {
            margin-left: 4px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
            font-weight: 600;
            white-space: nowrap;
        }
        .badge.ok {
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.warn {
            background: color-mix(in oklab, ${warn} 18%, transparent);
            border-color: color-mix(in oklab, ${warn} 50%, ${border});
        }
        .badge.danger {
            background: color-mix(in oklab, ${danger} 15%, transparent);
            border-color: color-mix(in oklab, ${danger} 55%, ${border});
        }
        .badge.soft {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
    `,

    Empty: styled.div`
        padding: 36px 0;
        display: grid;
        place-items: center;
        gap: 6px;
        .icon {
            font-size: 28px;
        }
        .title {
            font-weight: 700;
        }
        .desc {
            color: ${muted};
        }
    `,

    Drawer: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        justify-items: end;
        z-index: 40;
        background: rgba(2, 6, 23, 0.55);

        .sheet {
            position: relative; /* <-- add this */
            width: min(860px, 96vw);
            height: 100%;
            background: ${card};
            border-left: 1px solid ${border};
            box-shadow: -20px 0 60px rgba(0, 0, 0, 0.35);
            display: grid;
            grid-template-rows: auto 1fr;
        }

        /* floating close button */
        .closeX {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .closeX:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .hdr {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .hdr h2 {
            font-size: 18px;
        }
        .hdr .sub {
            margin-top: 4px;
            color: ${muted};
        }
        .hdr-actions {
            display: flex;
            gap: 8px;
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
                background 0.25s;
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

        .body {
            padding: 16px;
            overflow: auto;
            display: grid;
            gap: 16px;
        }

        .info .grid {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 900px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .label {
            color: ${muted};
            font-size: 12px;
        }
        .value {
            font-weight: 700;
        }

        .chips {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .actions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
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

        .printCard .labelTop {
            margin-bottom: 10px;
        }
        .printCard .big {
            font-weight: 800;
            font-size: 18px;
        }
        .printCard .sub {
            color: ${muted};
        }
        .printCard .grid.two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 10px;
        }
        @media (min-width: 800px) {
            .printCard .grid.two {
                grid-template-columns: 1fr 1fr;
            }
        }
        .printCard .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
        }
        .printCard .k {
            color: ${muted};
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
        width: min(420px, 90vw);
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
