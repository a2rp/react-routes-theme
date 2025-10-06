import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        color: ${text};
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 16px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        margin: 12px 0;

        .left {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
                font-weight: 600;
            }
        }
        .meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            span {
                color: ${muted};
            }
            .tag {
                background: color-mix(in oklab, ${accent} 18%, transparent);
                border: 1px solid ${accent};
                color: ${accent};
                padding: 2px 8px;
                border-radius: 999px;
                font-size: 12px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        button,
        .linkish {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
            text-decoration: none;
        }
        button:hover,
        .linkish:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    Header: styled.div`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 16px;

        .brandBlock {
            display: flex;
            align-items: center;
            gap: 14px;
            .logo {
                width: 56px;
                height: 56px;
                display: grid;
                place-items: center;
                border-radius: 12px;
                background: color-mix(in oklab, ${accent} 18%, transparent);
                border: 1px solid ${accent};
                font-weight: 700;
                letter-spacing: 0.5px;
            }
            h1 {
                margin: 0;
                line-height: 1.2;
            }
            .brandName {
                color: ${accent};
                font-weight: 700;
            }
            .brandAddr {
                color: ${muted};
            }
        }

        .idBlock {
            display: grid;
            align-content: start;
            gap: 8px;
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: color-mix(in oklab, ${card} 96%, transparent);
                border: 1px solid ${border};
                border-radius: 8px;
                padding: 8px 10px;
                span {
                    color: ${muted};
                }
                strong {
                    font-weight: 700;
                }
            }
        }

        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,

    Parties: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;

        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .party {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            gap: 6px;
            h3 {
                margin: 0 0 4px 0;
            }
            .name {
                font-weight: 700;
            }
            .addr,
            .line {
                color: ${muted};
            }
            .links {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-top: 6px;
            }
            .links a {
                color: ${muted};
                border-bottom: 1px dashed ${border};
            }
            .links a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,

    Items: styled.div`
        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 0;
            box-shadow: ${shadow};
            overflow: hidden;
        }

        .tableHead,
        .row {
            display: grid;
            grid-template-columns: 56px 1fr 120px 140px 100px 180px;
            gap: 0;
        }
        .tableHead {
            background: color-mix(in oklab, ${card} 94%, transparent);
            border-bottom: 1px solid ${border};
            > div {
                padding: 10px 12px;
                font-weight: 700;
                color: ${accent};
                border-right: 1px solid ${border};
            }
            > div:last-child {
                border-right: 0;
            }
        }

        .row {
            border-bottom: 1px solid ${border};
            .col {
                padding: 12px;
                border-right: 1px solid ${border};
            }
            .col:last-child {
                border-right: 0;
            }
            .name a {
                color: ${text};
            }
            .name a:hover {
                color: ${accent};
            }
            .muted {
                color: ${muted};
                margin-top: 4px;
                font-size: 12px;
            }
            &:hover {
                background: color-mix(in oklab, ${accent} 6%, transparent);
            }
        }

        .empty {
            padding: 24px;
            text-align: center;
            .title {
                font-weight: 700;
                margin-bottom: 6px;
            }
            .desc {
                color: ${muted};
            }
            a {
                color: ${accent};
            }
        }

        @media (max-width: 1024px) {
            .tableHead,
            .row {
                grid-template-columns: 40px 1fr 100px 120px 80px 140px;
            }
        }
        @media (max-width: 760px) {
            .tableHead {
                display: none;
            }
            .row {
                display: grid;
                grid-template-columns: 1fr;
                .index {
                    display: none;
                }
                .qty,
                .rate,
                .tax,
                .amount {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    border-right: 0;
                }
                .qty::before {
                    content: "Qty";
                    color: ${muted};
                }
                .rate::before {
                    content: "Rate";
                    color: ${muted};
                }
                .tax::before {
                    content: "Tax";
                    color: ${muted};
                }
                .amount::before {
                    content: "Amount";
                    color: ${muted};
                }
            }
        }
    `,

    TotalsTerms: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .totals {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            gap: 8px;
            .line,
            .grand {
                display: flex;
                align-items: center;
                justify-content: space-between;
                span {
                    color: ${muted};
                }
            }
            .grand {
                margin-top: 6px;
                padding-top: 10px;
                border-top: 1px solid ${border};
                strong {
                    font-size: 18px;
                    color: ${accent};
                }
            }
        }

        .terms {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 12px;
            h3 {
                margin: 0 0 6px 0;
            }
            ul {
                padding-left: 18px;
                margin: 8px 0;
            }
            li {
                margin: 4px 0;
                color: ${text};
            }
            .attachments {
                padding-left: 18px;
            }
            .attachments li a {
                color: ${accent};
            }
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    SignBlock: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;

        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .sig {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 12px;
            .label {
                color: ${muted};
            }
            .value {
                font-weight: 700;
            }
            .muted {
                color: ${muted};
            }
            .signBox {
                margin-top: 18px;
                height: 72px;
                border: 1px solid ${border};
                border-radius: 8px;
                background: repeating-linear-gradient(
                    -45deg,
                    transparent 0 8px,
                    color-mix(in oklab, ${accent} 10%, transparent) 8px 16px
                );
            }
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    FooterBar: styled.div`
        margin: 12px 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        &.card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 12px 16px;
            box-shadow: ${shadow};
        }

        .left {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            span {
                color: ${muted};
            }
        }
        .right {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                color: ${muted};
                border-bottom: 1px dashed ${border};
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
            }
        }
    `,

    Toast: styled.div`
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 14px;
        border-radius: 999px;
        background: ${card};
        border: 1px solid ${border};
        box-shadow: ${shadow};
        color: ${text};
        z-index: 60;
        animation: fadeout 2.2s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;

        &[data-type="success"] {
            border-color: ${accent};
        }
        &[data-type="error"] {
            border-color: #d33;
        }
        &[data-type="info"] {
            border-color: ${border};
        }

        @keyframes fadeout {
            0% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            75% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateX(-50%) translateY(8px);
            }
        }
    `,
};

export { Styled as default };
