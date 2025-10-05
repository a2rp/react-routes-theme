import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const S = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;

        .secondary {
            background: transparent;
            border: 1px solid ${border};
            color: ${text};
        }
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: ${muted};

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
    `,

    Actions: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;

        a,
        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            text-decoration: none;
            box-shadow: ${shadow};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        a:hover,
        button:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        button:active {
            transform: translateY(1px);
        }
        button[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,

    Subnav: styled.div`
        position: sticky;
        top: 0;
        z-index: 5;
        display: flex;
        gap: 10px;
        padding: 10px 0 14px 0;
        background: linear-gradient(
            180deg,
            color-mix(in oklab, ${card} 85%, transparent),
            transparent
        );

        a {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${muted};
            text-decoration: none;
            font-size: 12px;
            transition: all 0.2s ease;
            box-shadow: ${shadow};
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
        a.route {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
    `,

    HeaderMeta: styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 12px;
        padding: 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: color-mix(in oklab, ${card} 96%, transparent);
        box-shadow: ${shadow};

        .title h1 {
            font-size: 22px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .title p {
            color: ${muted};
            font-size: 12px;
        }
        .meta {
            list-style: none;
            display: flex;
            gap: 18px;
            padding: 0;
            margin: 0;
        }
        .meta li {
            display: grid;
            gap: 4px;
            font-size: 12px;
        }
        .meta li span {
            color: ${muted};
        }
        .meta li strong {
            color: ${text};
        }
    `,

    KPIGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin: 12px 0;
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    KPI: styled.div`
        display: grid;
        grid-template-columns: 36px 1fr;
        gap: 10px;
        padding: 14px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${accent};
        }
        .meta .value {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.1;
        }
        .meta .label {
            color: ${text};
            font-size: 13px;
        }
        .meta .hint {
            color: ${muted};
            font-size: 12px;
        }
    `,

    Quickbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 8px 0 16px 0;

        .group {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        a {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${border};
            color: ${text};
            background: ${card};
            text-decoration: none;
            font-size: 12px;
            transition: all 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }
    `,

    SegmentHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 18px 0 8px 0;

        .l {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .l h2 {
            font-size: 16px;
        }

        a.soft {
            font-size: 12px;
            color: ${muted};
            text-decoration: none;
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${card};
            transition: all 0.2s ease;
        }
        a.soft:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Table: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        overflow: hidden;
        background: ${card};
        box-shadow: ${shadow};

        .thead,
        .tbody {
            display: grid;
        }
        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr 0.9fr 0.9fr 0.8fr 0.9fr;
            gap: 0;
            border-bottom: 1px solid ${border};
        }
        /* adapt columns for different tables */
        &[aria-label="Lane performance"] .tr {
            grid-template-columns: 1.2fr 0.6fr 0.6fr 0.6fr 0.5fr 0.6fr;
        }
        &[aria-label="Carriers"] .tr {
            grid-template-columns: 1.2fr 0.8fr 0.6fr 0.6fr;
        }

        .th,
        .td {
            padding: 10px 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 13px;
            border-right: 1px solid ${border};
        }
        .th:last-child,
        .td:last-child {
            border-right: 0;
        }
        .th {
            font-weight: 600;
            color: ${accent};
            background: color-mix(in oklab, ${card} 90%, transparent);
            position: sticky;
            top: 0;
            z-index: 1;
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${accent} 8%, transparent);
        }

        a {
            color: ${text};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }

        .links {
            display: flex;
            align-items: center;
            gap: 6px;
        }
    `,

    Badge: styled.span.attrs((p) => ({ role: "status" }))`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid ${border};
        background: ${({ tone }) =>
            tone === "ok"
                ? `color-mix(in oklab, ${accent} 14%, transparent)`
                : tone === "warn"
                ? `rgba(255, 191, 0, .12)`
                : tone === "issue"
                ? `rgba(255, 99, 71, .14)`
                : `color-mix(in oklab, ${accent} 10%, transparent)`};
        color: ${({ tone }) =>
            tone === "ok"
                ? `${accent}`
                : tone === "warn"
                ? `#ffbf00`
                : tone === "issue"
                ? `#ff6347`
                : `${accent}`};
    `,

    SLAList: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    SLACard: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        padding: 14px;

        .t {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .t h3 {
            font-size: 14px;
        }
        .t a {
            color: ${muted};
            text-decoration: none;
            font-size: 12px;
        }
        .t a:hover {
            color: ${accent};
        }

        .row {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
            padding: 6px 0;
            border-top: 1px dashed ${border};
        }
        .row:first-of-type {
            border-top: 0;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
    `,

    CostGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    CostCard: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: ${shadow};
        padding: 14px;

        .t {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .t h3 {
            font-size: 14px;
        }
        .t a {
            color: ${muted};
            text-decoration: none;
            font-size: 12px;
        }
        .t a:hover {
            color: ${accent};
        }

        .row {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
            padding: 6px 0;
            border-top: 1px dashed ${border};
        }
        .row:first-of-type {
            border-top: 0;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
    `,
};
