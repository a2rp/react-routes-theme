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
        padding: 16px 18px;
        margin-bottom: 12px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .sub {
            margin-top: 6px;
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .dot {
            opacity: 0.7;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.04s ease-in;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,

    Toolbar: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        padding: 12px 14px;
        margin-bottom: 12px;
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: var(--shadow);

        @media (min-width: 980px) {
            grid-template-columns: 1fr auto auto;
        }

        .search input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 10px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${muted};
        }
        .search input:focus {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            outline: none;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 7%, transparent);
            padding: 6px 10px;
            border-radius: 999px;
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${accent};
            color: ${accent};
            background: color-mix(in oklab, ${accent} 15%, transparent);
        }

        .controls {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-start;
        }
        @media (min-width: 980px) {
            .controls {
                justify-content: flex-end;
            }
        }

        .select {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${muted};
        }
        .select select {
            padding: 8px 10px;
            border-radius: 8px;
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
        }

        .view .toggle {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .view .toggle.active,
        .view .toggle:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,

    TableCard: styled.div`
        border: 1px solid ${border};
        border-radius: ${radius};
        background: ${card};
        box-shadow: var(--shadow);
        .tableWrap {
            overflow: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${card};
            text-align: left;
            border-bottom: 1px solid ${border};
            padding: 12px;
            color: ${accent};
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        tbody td {
            border-bottom: 1px solid ${border};
            padding: 12px;
            vertical-align: top;
        }

        .cell-customer {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid ${border};
            background: ${card};
            display: grid;
            place-items: center;
            font-weight: 700;
        }
        .meta .name {
            display: inline-block;
            font-weight: 700;
        }
        .meta .name:hover {
            color: ${accent};
        }
        .meta .code {
            font-size: 12px;
            color: ${muted};
        }

        .contact .email {
            display: inline-block;
        }
        .contact .email:hover {
            color: ${accent};
        }
        .contact .phone {
            color: ${muted};
            margin-top: 2px;
        }

        .tags .tag {
            display: inline-block;
            margin: 2px 6px 2px 0;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 700;
            background: color-mix(in oklab, ${accent} 8%, transparent);
            text-transform: capitalize;
        }
        .status.inactive {
            opacity: 0.7;
        }
        .status.prospect {
            background: color-mix(in oklab, ${accent} 12%, transparent);
        }

        .actions {
            white-space: nowrap;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .act {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .act:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .act.disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
        .act.disabled:hover {
            border-color: ${border};
            color: ${text};
        }

        /* skeletons */
        .skeleton .sk {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.06),
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.06)
            );
            background-size: 300% 100%;
            animation: skAnim 1.2s infinite;
            border-radius: 8px;
        }
        .skeleton .sk-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }
        .skeleton .sk-line {
            height: 14px;
            width: 220px;
        }
        .skeleton .sk-line.short {
            width: 120px;
        }
        .skeleton .sk-pill {
            width: 80px;
            height: 20px;
            border-radius: 999px;
        }
        .skeleton .sk-actions {
            width: 140px;
            height: 24px;
        }
        @keyframes skAnim {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    `,

    CardsGrid: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        @media (min-width: 660px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 980px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .item {
            border: 1px solid ${border};
            border-radius: ${radius};
            background: ${card};
            box-shadow: var(--shadow);
            padding: 14px;
            display: grid;
            gap: 10px;
        }

        .head {
            display: grid;
            grid-template-columns: 40px 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .head .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid ${border};
            display: grid;
            place-items: center;
            font-weight: 700;
        }
        .head .meta .name {
            font-weight: 700;
        }
        .head .meta .name:hover {
            color: ${accent};
        }
        .head .meta .code {
            color: ${muted};
            font-size: 12px;
        }
        .head .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: color-mix(in oklab, ${accent} 10%, transparent);
            text-transform: capitalize;
        }

        .body {
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 10px;
        }
        .k {
            color: ${muted};
            font-size: 12px;
        }
        .tags {
            margin-top: 6px;
        }
        .tag {
            display: inline-block;
            margin: 2px 6px 0 0;
            padding: 4px 8px;
            border: 1px solid ${border};
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
        }

        .foot {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost.small {
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost.small:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btnGhost.small.disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
        .btnGhost.small.disabled:hover {
            border-color: ${border};
            color: ${text};
        }

        /* skeleton */
        .skeleton .sk {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.06),
                rgba(255, 255, 255, 0.14),
                rgba(255, 255, 255, 0.06)
            );
            background-size: 300% 100%;
            animation: skAnim 1.2s infinite;
            border-radius: 8px;
        }
        .skeleton .sk-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .skeleton .sk-line {
            height: 14px;
            width: 70%;
        }
        .skeleton .sk-line.short {
            width: 40%;
        }
        .skeleton .sk-pill {
            width: 80px;
            height: 20px;
            border-radius: 999px;
        }
        @keyframes skAnim {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    `,

    Empty: styled.div`
        padding: 24px;
        text-align: center;
        .emoji {
            font-size: 36px;
            margin-bottom: 8px;
        }
        h3 {
            margin-bottom: 6px;
        }
        p {
            color: ${text};
        }
        .muted {
            color: ${muted};
            font-size: 12px;
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
        width: min(520px, 92vw);
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
            color: ${text};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
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
};
