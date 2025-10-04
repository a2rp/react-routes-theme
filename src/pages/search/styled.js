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

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    SearchBar: styled.section`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            input {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                padding: 0 12px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input::placeholder {
                color: ${muted};
            }
            input:focus {
                border-color: ${accent};
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }

            .btnGhost {
                height: 40px;
                padding: 0 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                font-weight: 600;
            }
            .btnGhost:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .chips {
            margin-top: 12px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 8px;
            align-items: center;
            .chipLabel {
                color: ${muted};
                font-size: 12px;
                padding: 0 4px;
            }
            .chipWrap {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .chip {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${border};
                border-radius: 999px;
                padding: 6px 10px;
                background: ${card};
                color: ${text};
                font-weight: 600;
                font-size: 12px;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    box-shadow 0.25s;
            }
            .chip .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
            }
            .chip.on {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .chipActions .small {
                padding: 6px 10px;
                border-radius: 8px;
            }
            .btnGhost.small {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            .btnGhost.small:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .stats {
            margin-top: 10px;
            color: ${text};
            font-size: 13px;
        }
        .stats .muted {
            color: ${muted};
            margin-left: 8px;
        }
    `,

    Columns: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .quick ul {
            list-style: none;
            padding: 0;
            margin: 8px 0 0;
            display: grid;
            gap: 8px;
        }
        .quick a {
            display: block;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 10px;
            padding: 8px 10px;
        }
        .quick a:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,

    Group: styled.section`
        padding: 14px 16px;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
            h3 {
                font-size: 14px;
                letter-spacing: 0.3px;
            }
            .count {
                color: ${accent};
                border: 1px solid ${border};
                background: color-mix(in oklab, ${accent} 10%, transparent);
                padding: 2px 8px;
                border-radius: 999px;
                font-weight: 700;
                font-size: 12px;
            }
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${card};
            transition: border-color 0.25s, background 0.25s, transform 0.06s;
        }
        .row:hover {
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }

        .main .title {
            color: ${text};
            font-weight: 700;
        }
        .main .title:hover {
            color: ${accent};
        }
        .sub {
            color: ${muted};
            font-size: 12px;
            margin-top: 2px;
        }

        .meta {
            display: grid;
            gap: 6px;
            justify-items: end;
            .when {
                color: ${muted};
                font-size: 12px;
            }
            .actions {
                display: flex;
                gap: 6px;
            }
            .btnGhost.small {
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                border-radius: 8px;
                padding: 6px 10px;
                font-weight: 600;
                font-size: 12px;
                transition: border-color 0.25s, box-shadow 0.25s, color 0.25s;
            }
            .btnGhost.small:hover {
                border-color: ${accent};
                color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,

    Empty: styled.div`
        padding: 24px;
        text-align: center;
        .big {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${muted};
        }
        .helpLinks {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .helpLinks a {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .helpLinks a:hover {
            border-color: ${accent};
            color: ${accent};
        }
    `,
};
