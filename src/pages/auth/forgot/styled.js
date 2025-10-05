import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    Banner: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 14px;
        border: 1px solid ${border};
        background: color-mix(in oklab, ${card} 94%, transparent);
        border-radius: 10px;
        margin-bottom: 16px;

        .left {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .dot {
            color: ${muted};
        }
        a {
            color: ${text};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            padding-bottom: 1px;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        a:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,

    Header: styled.header`
        padding: 12px 0 10px 0;
        .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .subtitle {
            color: ${muted};
            margin-top: 6px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
            margin-top: 6px;
        }
    `,

    Body: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
        align-items: start;
        gap: 16px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 16px;
        box-shadow: var(--shadow);

        h2 {
            font-size: 18px;
            margin-bottom: 12px;
        }

        .row {
            margin-top: 12px;
        }
        label {
            display: inline-block;
            margin-bottom: 6px;
            color: ${text};
            font-weight: 600;
        }

        .field {
            position: relative;
            input {
                width: 100%;
                height: 40px;
                background: ${card};
                border: 1px solid ${border};
                color: ${text};
                padding: 0 12px 0 36px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            .icon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: ${muted};
            }
            input::placeholder {
                color: ${muted};
            }
            input:focus {
                border-color: ${accent};
                outline: none;
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            &.error input {
                border-color: #b14b4b;
            }
        }

        .hint {
            margin-top: 6px;
            color: ${muted};
        }
        .errorText {
            margin-top: 6px;
            color: #e07c7c;
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 16px;
            button,
            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                height: 40px;
                padding: 0 14px;
                border-radius: 8px;
                cursor: pointer;
                text-decoration: none;
                border: 1px solid ${border};
                transition: transform 0.05s ease, border-color 0.2s ease,
                    background 0.2s ease, color 0.2s ease;
            }
            .primary {
                background: color-mix(in oklab, ${accent} 18%, transparent);
                color: ${text};
                border-color: ${accent};
            }
            .primary:hover {
                background: color-mix(in oklab, ${accent} 28%, transparent);
            }
            .primary:active {
                transform: translateY(1px);
            }

            .ghost {
                background: transparent;
                color: ${text};
            }
            .ghost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .ghost:active {
                transform: translateY(1px);
            }
            .ghost svg {
                margin-right: 2px;
            }
        }

        .altRoutes {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 18px;
            @media (max-width: 800px) {
                grid-template-columns: 1fr;
            }
            .label {
                font-weight: 600;
                color: ${muted};
                margin-bottom: 6px;
            }
            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            a {
                display: inline-flex;
                align-items: center;
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${text};
                border: 1px dashed ${border};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                background: color-mix(in oklab, ${accent} 10%, transparent);
            }
        }
    `,

    Side: styled.aside`
        display: grid;
        gap: 12px;
    `,

    InfoCard: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 14px;
        box-shadow: var(--shadow);

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 16px;
        }
        p {
            color: ${muted};
            margin-bottom: 8px;
        }
        ul {
            padding-left: 16px;
        }
        li {
            color: ${text};
            margin: 6px 0;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .chips a {
            text-decoration: none;
            color: ${text};
            border: 1px dashed ${border};
            border-radius: 999px;
            padding: 6px 10px;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .chips a:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .small {
            color: ${muted};
            margin-top: 10px;
            font-size: 12px;
        }
    `,

    TinyCard: styled.div`
        background: ${card};
        border: 1px solid ${border};
        border-radius: 10px;
        padding: 10px;
        .row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px dashed ${border};
        }
        .row:last-child {
            border-bottom: 0;
        }
        .k {
            color: ${muted};
        }
        .v {
            color: ${text};
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 16px;
    `,

    ModalCard: styled.div`
        width: min(560px, 95vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 14px;
        padding: 16px;
        box-shadow: var(--shadow);
        position: relative;

        .close {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid ${border};
            border-radius: 8px;
            cursor: pointer;
            background: transparent;
            color: ${muted};
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        .close:hover {
            color: ${accent};
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .iconWrap {
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            margin-bottom: 8px;
            background: color-mix(in oklab, ${accent} 16%, transparent);
            color: ${text};
        }

        h3 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        p {
            color: ${muted};
            margin-bottom: 12px;
        }

        .ctaRow {
            display: flex;
            gap: 10px;
            margin-top: 4px;
            margin-bottom: 8px;
            a,
            button {
                height: 40px;
                padding: 0 14px;
                border-radius: 8px;
                text-decoration: none;
                border: 1px solid ${border};
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.05s ease, border-color 0.2s ease,
                    background 0.2s ease, color 0.2s ease;
            }
            .primary {
                background: color-mix(in oklab, ${accent} 18%, transparent);
                color: ${text};
                border-color: ${accent};
            }
            .primary:hover {
                background: color-mix(in oklab, ${accent} 28%, transparent);
            }
            .primary:active {
                transform: translateY(1px);
            }

            .ghost {
                background: transparent;
                color: ${text};
            }
            .ghost:hover {
                border-color: ${accent};
                color: ${accent};
            }
            .ghost:active {
                transform: translateY(1px);
            }
        }

        .footNote {
            color: ${muted};
            font-size: 12px;
        }
    `,
};
