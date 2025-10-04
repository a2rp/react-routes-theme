import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        padding: 22px 0 64px;
        color: ${text};

        .container & {
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 6px;
            a {
                color: ${muted};
            }
            .current {
                color: ${text};
            }
        }
    `,

    Header: styled.header`
        padding: 16px 20px;
        margin-bottom: 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
            align-items: start;
        }
    `,

    Card: styled.section`
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);
        padding: 14px;
        outline: none;

        &:focus-visible {
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .counterWrap {
            display: grid;
            gap: 12px;
            padding: 8px 4px 16px;
        }

        .value {
            font-size: 42px;
            font-weight: 700;
            text-align: center;
            padding: 6px 0 10px;
        }

        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        button {
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s, transform 0.04s;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .hint {
            color: ${muted};
            font-size: 12px;
            text-align: center;
            margin-top: 2px;
        }

        .noteWrap {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.2fr 0.8fr;
            }
        }

        .editor .field {
            margin-bottom: 12px;
        }
        .editor .two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            align-items: end;
        }
        .editor label {
            color: ${muted};
            font-size: 12px;
            display: block;
            margin-bottom: 6px;
        }
        .editor input,
        .editor textarea {
            width: 100%;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 8px 10px;
        }
        .editor input:focus,
        .editor textarea:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .editor .actions {
            display: flex;
            gap: 8px;
        }

        .preview {
            padding: 12px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .preview .ph {
            color: ${muted};
            font-size: 12px;
            margin-bottom: 8px;
        }
        .preview h3 {
            margin-bottom: 10px;
        }
        .preview .body {
            white-space: pre-wrap;
            line-height: 1.6;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: ${text};
        }
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 6px 10px;
        border-bottom: 1px dashed ${border};
        margin: -6px -6px 12px -6px;

        .label {
            font-weight: 700;
            letter-spacing: 0.3px;
            padding: 0 8px;
        }
        .spacer {
            flex: 1;
        }

        button {
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s, transform 0.04s;
        }
        button:hover {
            border-color: ${accent};
            color: ${accent};
        }
        button:active {
            transform: translateY(1px);
        }
        button.primary {
            border-color: ${accent};
        }
    `,

    History: styled.div`
        margin-top: 12px;
        padding: 10px;
        border: 1px solid ${border};
        border-radius: 10px;
        background: color-mix(in oklab, ${card} 96%, transparent);

        .top {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }
        .title {
            font-weight: 700;
        }
        .meta {
            color: ${muted};
            font-size: 12px;
        }

        .slider {
            width: 100%;
            margin: 4px 0 10px;
            appearance: none;
            height: 4px;
            border-radius: 999px;
            background: linear-gradient(90deg, ${accent}, transparent);
            outline: none;
        }
        .slider::-webkit-slider-thumb {
            appearance: none;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            cursor: pointer;
        }
        .slider::-moz-range-thumb {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            cursor: pointer;
        }

        .list {
            display: grid;
            gap: 6px;
            max-height: 260px;
            overflow: auto;
        }

        .row {
            display: grid;
            grid-template-columns: 14px 28px 1fr;
            align-items: center;
            gap: 10px;
            text-align: left;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            border-radius: 8px;
            padding: 6px 8px;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .row:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .row.current {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
            justify-self: center;
        }
        .idx {
            font-variant-numeric: tabular-nums;
            color: ${muted};
        }
        .val {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12.5px;
            color: ${text};
        }
    `,

    Help: styled.section`
        margin-top: 16px;
        padding: 14px 16px;
        border: 1px solid ${border};
        border-radius: 12px;
        background: ${card};
        box-shadow: var(--shadow);

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 2fr;
            }
        }
        h3 {
            margin-bottom: 10px;
        }
        p,
        li {
            color: ${text};
        }
        ul {
            margin-left: 18px;
        }
    `,
};
