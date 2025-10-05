// src/pages/labs/styled.js
import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const StyledLabs = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    HeaderBar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        margin-bottom: 14px;

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            a {
                color: ${muted};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }
            .sep {
                color: ${muted};
            }
        }

        .headerRight {
            display: flex;
            gap: 8px;
        }

        .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                color 0.2s ease;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);

            &:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }

            &.outline {
                background: transparent;
            }
            &.subtle {
                color: ${muted};
            }
        }
    `,

    TopStrip: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-bottom: 12px;

        .metrics {
            display: grid;
            grid-template-columns: repeat(6, minmax(120px, 1fr));
            gap: 10px;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 14px;
            box-shadow: ${shadow};
        }
        .k {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .v {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            letter-spacing: 0.3px;
        }

        .quickLinks {
            display: flex;
            gap: 8px;
            align-items: stretch;
        }
        .quickLinks .ql {
            display: inline-flex;
            align-items: center;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 92%, transparent);
            padding: 8px 12px;
            border-radius: 10px;
            text-decoration: none;
            color: ${muted};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .quickLinks .ql:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
            .metrics {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 700px) {
            .metrics {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 12px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,

    Side: styled.aside`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 12px;
        box-shadow: ${shadow};
        align-self: start;

        .searchBox {
            position: relative;
            margin-bottom: 12px;
        }
        .searchBox input {
            width: 100%;
            height: 38px;
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .searchBox input::placeholder {
            color: ${muted};
        }
        .searchBox input:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .section {
            margin-top: 14px;
        }
        .sectionTitle {
            font-size: 12px;
            color: ${muted};
            margin-bottom: 8px;
            padding: 0 2px;
            user-select: none;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
            color: ${muted};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, box-shadow 0.2s ease;
            font-size: 12px;
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .chip.active {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .links {
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${muted};
            text-decoration: none;
            padding: 6px 8px;
            border-radius: 8px;
            transition: background 0.2s ease, color 0.2s ease;
        }
        .links a:hover {
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
    `,

    Main: styled.main`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        padding: 12px;
        box-shadow: ${shadow};
        overflow: hidden;
    `,

    TableWrap: styled.div`
        width: 100%;
        overflow: auto;

        table.labs {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            color: ${accent};
            text-align: left;
            padding: 12px 10px;
            border-bottom: 1px solid ${border};
            z-index: 1;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${card} 86%, transparent);
        }

        .idcell .id {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .idcell .id:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .idcell .meta {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 12px;
            margin-top: 4px;
        }

        .patient {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid ${border};
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            font-weight: 600;
            font-size: 12px;
        }
        .pinfo .pname {
            color: ${text};
            text-decoration: none;
        }
        .pinfo .pname:hover {
            color: ${accent};
        }
        .psub {
            color: ${muted};
            font-size: 12px;
        }

        .tests {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .test {
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
            border-radius: 8px;
            padding: 4px 8px;
            font-size: 12px;
        }
        .test a {
            color: ${muted};
            text-decoration: none;
        }
        .test a:hover {
            color: ${accent};
        }

        .badge {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 8%, transparent);
            color: ${text};
            font-size: 12px;
        }
        .badge.routine {
        }
        .badge.high {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }

        .dates .d {
            font-weight: 600;
        }
        .dates .t {
            color: ${muted};
            font-size: 12px;
        }

        .status {
            padding: 4px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 92%, transparent);
            color: ${text};
            font-size: 12px;
            white-space: nowrap;
        }
        .status.pending {
            background: color-mix(in oklab, ${accent} 9%, transparent);
        }
        .status.in-lab {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .status.approved {
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .status.completed {
            background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        .status.cancelled {
            background: color-mix(in oklab, ${card} 85%, transparent);
            color: ${muted};
        }

        .go {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
        }
        .go a {
            color: ${muted};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .go a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .dot {
            color: ${muted};
        }

        .empty {
            text-align: center;
            padding: 40px 10px;
            color: ${muted};
        }
        .empty .title {
            font-family: "Antonio", sans-serif;
            font-size: 20px;
            margin-bottom: 6px;
            color: ${text};
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 1000;

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .box {
            position: relative;
            width: min(560px, 92vw);
            border: 1px solid ${border};
            border-radius: 12px;
            background: ${card};
            box-shadow: ${shadow};
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${border};
        }
        .ttl {
            font-weight: 700;
        }
        .x {
            background: transparent;
            border: none;
            color: ${muted};
            font-size: 22px;
            cursor: pointer;
            line-height: 1;
        }
        .x:hover {
            color: ${accent};
        }

        .body {
            padding: 14px;
            color: ${text};
        }
        .foot {
            padding: 12px 14px;
            border-top: 1px solid ${border};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .btn {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
