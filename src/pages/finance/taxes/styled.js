import styled from "styled-components";

/* tokens from CSS variables with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        padding: 18px 20px 28px;
        color: ${text};
        background: ${bg};
    `,

    Header: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            .crumb {
                color: ${muted};
            }
            .sep {
                color: ${muted};
            }
            .here {
                color: ${text};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    transform 0.05s ease;
                box-shadow: ${shadow};
                svg {
                    font-size: 16px;
                }
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                &:active {
                    transform: translateY(1px);
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                &.ghost {
                    background: ${card};
                }
                &.primary {
                }
                &.danger {
                }
                .chip {
                    margin-left: 6px;
                    font-size: 11px;
                    padding: 2px 6px;
                    border-radius: 999px;
                    background: ${accentSoft};
                    color: ${text};
                    border: 1px solid ${border};
                }
            }
        }
    `,

    TopMeta: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 14px;
        margin-bottom: 16px;
        .left h1 {
            font-size: 26px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .left .muted {
            color: ${muted};
        }
        .right.links {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            .link {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${border};
                color: ${text};
                background: ${card};
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                svg {
                    position: relative;
                    top: 1px;
                }
            }
        }
    `,

    Tabs: styled.div`
        display: flex;
        gap: 8px;
        margin-bottom: 14px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &.active {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
                color: ${accent};
            }
        }
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        gap: 12px;
        margin-bottom: 14px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${shadow};
            h4 {
                font-size: 13px;
                color: ${muted};
                margin-bottom: 8px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 6px;
            }
            .sub {
                color: ${muted};
                font-size: 12px;
            }
        }
    `,

    GridTwo: styled.div`
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;
        margin-bottom: 14px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }
        .panel {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${shadow};
        }
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .linksList {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 8px;
            .item {
                display: block;
                padding: 10px 12px;
                border: 1px solid ${border};
                border-radius: 10px;
                color: ${text};
                background: color-mix(in oklab, ${card} 96%, transparent);
                transition: border-color 0.25s ease, box-shadow 0.25s ease,
                    transform 0.05s ease;
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                    transform: translateY(1px);
                }
            }
        }
        .calendar {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
            li {
                display: grid;
                grid-template-columns: 120px 1fr auto;
                gap: 8px;
                padding: 10px 12px;
                border: 1px solid ${border};
                border-radius: 10px;
                background: color-mix(in oklab, ${card} 96%, transparent);
                span {
                    font-weight: 600;
                }
                em {
                    color: ${muted};
                    font-style: normal;
                }
                strong {
                    color: ${text};
                }
            }
            .note {
                margin-top: 10px;
                color: ${muted};
            }
        }
    `,

    Activity: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${shadow};
        .panelHead {
            margin-bottom: 8px;
        }
        ol {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        li {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 12px;
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
            time {
                color: ${muted};
            }
            p {
                margin: 0;
            }
        }
    `,

    Rates: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        padding: 14px;
        box-shadow: ${shadow};
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .panelActions button {
            border: 1px solid ${border};
            background: ${bg};
            color: ${text};
            padding: 8px 10px;
            border-radius: 10px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease,
                transform 0.05s ease;
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            svg {
                position: relative;
                top: 1px;
            }
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            color: ${text};
            z-index: 1;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${card} 92%, transparent);
        }
        .lnk {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed ${border};
            &:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
        .pill {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 94%, transparent);
        }
        .pill.active {
            color: ${accent};
            border-color: ${accent};
        }
        td.go {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            text-decoration: none;
            color: ${text};
            background: ${bg};
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,

    Returns: styled.div`
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions {
            display: flex;
            gap: 8px;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border: 1px solid ${border};
            border-radius: 999px;
            color: ${text};
            text-decoration: none;
            background: ${card};
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(4, minmax(220px, 1fr));
            gap: 12px;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(220px, 1fr));
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }
            .card {
                background: ${card};
                border: 1px solid ${border};
                border-radius: 14px;
                padding: 14px;
                box-shadow: ${shadow};
                .head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                h4 {
                    margin: 0;
                }
                .pill {
                    display: inline-flex;
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${border};
                }
                .pill.filed {
                    color: ${accent};
                    border-color: ${accent};
                }
                .body {
                    display: grid;
                    gap: 8px;
                    margin-bottom: 10px;
                }
                .row {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 8px;
                }
                .foot {
                    display: flex;
                    gap: 8px;
                }
                .linkBtn {
                    display: inline-flex;
                    align-items: center;
                    padding: 6px 10px;
                    border: 1px solid ${border};
                    border-radius: 999px;
                    text-decoration: none;
                    color: ${text};
                    &:hover {
                        border-color: ${accent};
                        box-shadow: 0 0 0 3px ${accentSoft};
                    }
                }
            }
        }
    `,

    Exemptions: styled.div`
        .panelHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .panelActions button {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 10px;
            border-radius: 10px;
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px 12px;
            border-bottom: 1px solid ${border};
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            color: ${text};
            z-index: 1;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${card} 92%, transparent);
        }
        td.go {
            display: flex;
            gap: 8px;
        }
        .chipLink {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            text-decoration: none;
            color: ${text};
            background: color-mix(in oklab, ${card} 96%, transparent);
            &:hover {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,

    Settings: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(280px, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
        .panel {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${shadow};
            .panelHead {
                margin-bottom: 10px;
            }
            .links {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .links a {
                display: block;
                padding: 10px 12px;
                border: 1px solid ${border};
                border-radius: 10px;
                color: ${text};
                text-decoration: none;
                background: color-mix(in oklab, ${card} 96%, transparent);
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .scrim {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
        }
        .dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(520px, 92vw);
            background: ${card};
            border: 1px solid ${border};
            border-radius: 14px;
            box-shadow: ${shadow};
            padding: 16px;
            h3 {
                margin: 0 0 8px 0;
            }
            p {
                color: ${muted};
                margin: 0 0 12px;
            }
            .actions {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
            }
            .actions button {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                padding: 8px 12px;
                border-radius: 10px;
                &:hover {
                    border-color: ${accent};
                    box-shadow: 0 0 0 3px ${accentSoft};
                }
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
            .actions .primary {
            }
        }
    `,
};
