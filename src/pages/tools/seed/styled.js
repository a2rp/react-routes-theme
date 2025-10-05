import styled from "styled-components";

/* tokens */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const StyledSeed = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
        padding: 18px;
        display: grid;
        gap: 16px;

        a {
            color: ${text};
        }
        a:hover {
            color: ${accent};
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }
        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.04s;
            text-decoration: none;
            user-select: none;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btn:active {
            transform: translateY(1px);
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            color: ${muted};
            border-color: ${border};
        }
        .btn.primary {
            border-color: ${accent};
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.danger {
            border-color: ${border};
        }

        code {
            background: rgba(0, 0, 0, 0.18);
            border: 1px solid ${border};
            padding: 2px 6px;
            border-radius: 6px;
        }
    `,

    Header: styled.header`
        display: grid;
        gap: 12px;

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: 0.4px;
        }
    `,

    DemoBadge: styled.span`
        padding: 2px 8px;
        border: 1px dashed ${border};
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: 0.5px;
        color: ${muted};
        background: color-mix(in oklab, ${accent} 10%, transparent);
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${muted};
        a {
            color: ${muted};
        }
        a:hover {
            color: ${accent};
        }
        .sep {
            display: inline-flex;
            align-items: center;
            opacity: 0.7;
        }
        .current {
            color: ${text};
        }
    `,

    Meta: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        .metaItem {
            display: grid;
            gap: 2px;
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            background: ${card};
        }
        .k {
            font-size: 11px;
            color: ${muted};
        }
        .v {
            font-family: "Antonio", sans-serif;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
    `,

    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(${(p) => p.cols || 4}, minmax(0, 1fr));
        gap: 12px;

        .tile {
            display: grid;
            grid-template-columns: 40px 1fr 20px;
            align-items: center;
            gap: 10px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px;
            text-decoration: none;
            box-shadow: ${shadow};
            transition: border-color 0.2s, transform 0.06s, background 0.2s;
        }
        .tile:hover {
            border-color: ${accent};
            transform: translateY(-1px);
        }
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: ${accent};
        }
        .meta .label {
            font-weight: 600;
        }
        .meta .count {
            color: ${muted};
            font-size: 12px;
        }
        .go {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${muted};
        }
    `,

    Card: styled.section`
        .cardHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 20px;
        }
        .headActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `,

    Progress: styled.div`
        --pct: 0%;
        display: grid;
        grid-template-columns: 220px 1fr 60px;
        gap: 10px;
        align-items: center;
        padding: 8px 0;
        .label {
            color: ${muted};
        }
        .bar {
            position: relative;
            height: 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.18);
        }
        .bar span {
            position: absolute;
            inset: 0;
            width: var(--pct);
            background: linear-gradient(
                90deg,
                color-mix(in oklab, ${accent} 45%, transparent),
                ${accent}
            );
            border-radius: 999px;
        }
        .val {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }
    `,

    TableWrap: styled.div`
        overflow: auto;
        border: 1px solid ${border};
        border-radius: 10px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            background: ${card};
            color: ${accent};
            padding: 12px;
            border-bottom: 1px solid ${border};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .dset {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .dset .ico {
            color: ${accent};
            display: flex;
            font-size: 18px;
        }
        .dset .name {
            font-weight: 600;
        }
        .dset .help {
            color: ${muted};
            font-size: 12px;
        }

        .checkWrap {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        .checkWrap input {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }
        .checkWrap .fake {
            width: 18px;
            height: 18px;
            border: 1px solid ${border};
            border-radius: 4px;
            display: inline-block;
            background: ${card};
            position: relative;
            transition: border-color 0.2s, background 0.2s;
        }
        .checkWrap input:checked + .fake {
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 14%, transparent);
        }
        .linkBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            text-decoration: none;
        }
        .linkBtn:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    LinksGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(${(p) => p.cols || 3}, minmax(0, 1fr));
        gap: 10px;
        .deepLink {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border: 1px dashed ${border};
            border-radius: 10px;
            text-decoration: none;
            background: color-mix(in oklab, ${card} 96%, transparent);
            transition: border-color 0.2s;
        }
        .deepLink:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    PrintCard: styled.section`
        margin-top: 18px;
        .printMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            color: ${muted};
            margin-bottom: 10px;
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `,

    Modal: styled.div`
        width: 520px;
        max-width: 92vw;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 16px;
        display: grid;
        gap: 10px;

        h3 {
            font-size: 18px;
        }
        p {
            color: ${muted};
        }

        .quickLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .quickLinks a {
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 8px;
            text-decoration: none;
        }
        .quickLinks a:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .modalActions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
    `,
};
