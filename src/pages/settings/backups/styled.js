import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const StyledBackups = {
    Wrap: styled.div`
        color: ${text};
        display: flex;
        flex-direction: column;
        gap: 16px;

        .row-focus {
            outline: 2px dashed ${accent};
            outline-offset: 2px;
            border-radius: 6px;
        }
    `,

    Breadcrumbs: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
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

    HeaderBar: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        .title h1 {
            font-size: 20px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .title p {
            color: ${muted};
        }
        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions a,
        .actions button {
            text-decoration: none;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .ghost {
            background: transparent;
        }
        .actions button:active {
            transform: translateY(1px);
        }
        .actions button[aria-disabled="true"] {
            opacity: 0.7;
            cursor: not-allowed;
        }
    `,

    StatsGrid: styled.section`
        display: grid;
        grid-template-columns: repeat(5, minmax(180px, 1fr));
        gap: 12px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(1, minmax(180px, 1fr));
        }
    `,

    StatCard: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 14px;
        box-shadow: ${shadow};
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 6px;
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            font-weight: 700;
        }
        .s {
            color: ${muted};
            font-size: 12px;
        }
        .s.tag.ok {
            color: ${accent};
        }
    `,

    Row: styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${shadow};
        h3 {
            margin-bottom: 10px;
            font-size: 16px;
        }
        .bullets {
            padding-left: 18px;
        }
        .bullets li {
            margin: 6px 0;
            color: ${text};
        }
        .inline-links {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .inline-links a {
            color: ${muted};
            text-decoration: none;
        }
        .inline-links a:hover {
            color: ${accent};
        }
        .dest {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        .dest .item {
            display: grid;
            grid-template-columns: 140px 1fr;
            column-gap: 8px;
            row-gap: 2px;
            align-items: baseline;
        }
        .dest .k {
            color: ${muted};
            font-size: 12px;
        }
        .dest .v {
            font-weight: 600;
        }
        .dest .s {
            color: ${muted};
            font-size: 12px;
            grid-column: 2 / span 1;
        }
    `,

    TableCard: styled.section`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 0;
        box-shadow: ${shadow};
        .table-head {
            padding: 14px 14px 8px;
            border-bottom: 1px solid ${border};
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            h3 {
                margin-bottom: 2px;
            }
            p {
                color: ${muted};
                font-size: 12px;
            }
            input {
                width: 280px;
                max-width: 50vw;
                background: ${card};
                border: 1px solid ${border};
                border-radius: 8px;
                color: ${text};
                padding: 8px 10px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            input::placeholder {
                color: ${muted};
            }
            input:focus {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                outline: none;
            }
        }
        .table-foot {
            border-top: 1px solid ${border};
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            color: ${muted};
            .links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            a {
                color: ${muted};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }
        }
    `,

    TableWrap: styled.div`
        width: 100%;
        overflow: auto;
        border-radius: 12px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            border-bottom: 1px solid ${border};
            text-align: left;
            padding: 10px;
            color: ${accent};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${border};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        .truncate {
            max-width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tag {
            border: 1px solid ${border};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${text};
            background: rgba(0, 0, 0, 0.06);
        }
        .tag.success {
            color: ${accent};
            border-color: ${accent};
            background: ${accentSoft};
        }
        .actions {
            display: flex;
            gap: 8px;
            white-space: nowrap;
        }
        .actions a,
        .actions button {
            text-decoration: none;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 8px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
        }
        .actions a:hover,
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .small {
            padding: 4px 8px;
        }
        .actions .ghost {
            background: transparent;
        }
        @media (max-width: 900px) {
            .truncate {
                max-width: 160px;
            }
        }
    `,

    SectionNav: styled.nav`
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(160px, 1fr);
        gap: 10px;
        overflow: auto;
        padding-bottom: 2px;
        a {
            display: block;
            text-align: center;
            padding: 10px 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            text-decoration: none;
            color: ${muted};
            background: ${card};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
            white-space: nowrap;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
            background: rgba(0, 0, 0, 0.06);
        }
        a.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft} inset;
        }
    `,

    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 50;
    `,

    ModalCard: styled.div`
        width: min(560px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${shadow};
        h3 {
            margin-bottom: 8px;
        }
        p {
            color: ${muted};
            margin-bottom: 16px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .actions button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .actions button:hover {
            border-color: ${accent};
            color: ${accent};
            background: rgba(0, 0, 0, 0.08);
        }
    `,
};
