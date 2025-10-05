import styled from "styled-components";

const bg = "var(--bg)";
const text = "var(--text)";
const muted = "var(--muted)";
const card = "var(--card)";
const border = "var(--border)";
const accent = "var(--accent)";
const accentSoft = "var(--accent-soft)";
const shadow = "var(--shadow)";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        padding: 18px;

        .muted {
            color: ${muted};
        }
        .small {
            font-size: 12px;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .btn {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${accent};
            color: ${accent};
        }
        .btn.primary {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.tiny {
            padding: 6px 8px;
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${border};
            background: ${card};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            margin-left: 6px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 16%, transparent);
            color: ${accent};
            border: 1px solid ${border};
            margin-right: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .status {
            border-color: ${accent};
            background: color-mix(in oklab, ${accent} 18%, transparent);
            color: ${text};
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 14px;
        }
        .breadcrumbs .sep {
            color: ${muted};
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs a:hover {
            color: ${accent};
        }
        .crumbActions {
            margin-left: auto;
            display: flex;
            gap: 8px;
        }

        .pageHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 18px;
            padding: 16px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            margin-bottom: 18px;
        }
        .pageHeader .title {
            font-size: 22px;
            line-height: 1.2;
        }
        .pageHeader .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .pageHeader .subMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin-top: 8px;
            color: ${muted};
        }
        .headerActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .gridTwo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-bottom: 18px;
        }
        @media (max-width: 900px) {
            .gridTwo {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            box-shadow: ${shadow};
            padding: 16px;
        }
        .card h3 {
            margin-bottom: 10px;
        }

        .infoCard .identity {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
        }
        .infoCard .avatar {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            background: color-mix(in oklab, ${accent} 14%, transparent);
            display: grid;
            place-items: center;
            font-weight: 800;
        }
        .infoCard .linkTitle {
            font-size: 16px;
            font-weight: 700;
        }
        .infoCard .rows {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 8px;
        }
        .infoCard .rows .label {
            color: ${muted};
            margin-right: 8px;
        }
        .infoCard .links {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .dl {
            display: grid;
            grid-template-columns: 160px 1fr;
            row-gap: 8px;
        }
        .dl dt {
            color: ${muted};
        }
        .dl dd {
            margin: 0;
        }

        .linkGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }
        @media (max-width: 1100px) {
            .linkGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 600px) {
            .linkGrid {
                grid-template-columns: 1fr;
            }
        }
        .linkTile {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
            text-decoration: none;
            color: ${text};
            display: block;
        }
        .linkTile:hover {
            border-color: ${accent};
            color: ${accent};
        }

        .vitalsGrid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
        }
        @media (max-width: 1200px) {
            .vitalsGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 600px) {
            .vitalsGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .vital {
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .vk {
            color: ${muted};
        }
        .vv {
            font-weight: 700;
            font-size: 15px;
        }

        .notes .noteRow {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid ${border};
        }
        .notes .noteRow:last-child {
            border-bottom: 0;
        }
        .noteLabel {
            color: ${muted};
            font-weight: 600;
        }
        .noteText {
            white-space: pre-line;
        }

        .tableWrap {
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${border};
        }
        th {
            text-align: left;
            color: ${accent};
        }

        .linkRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .linkRow .dot {
            color: ${muted};
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            position: relative;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 18px 1fr;
            gap: 10px;
            position: relative;
            padding: 8px 0;
        }
        .timeline li::before {
            content: "";
            position: absolute;
            left: 8px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: color-mix(in oklab, ${accent} 18%, transparent);
        }
        .tlDot {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: ${accent};
            position: relative;
            z-index: 1;
        }
        .tlBody .tlRow {
            display: flex;
            gap: 10px;
            align-items: baseline;
        }
        .tlLabel {
            font-weight: 700;
        }
        .tlWhen {
            color: ${muted};
            font-size: 12px;
        }
    `,
    Tabs: styled.section`
        margin-top: 6px;

        /* radio tabs (CSS-only) */
        input[type="radio"] {
            display: none;
        }

        .tabBar {
            display: flex;
            gap: 8px;
            align-items: center;
            border-bottom: 1px solid ${border};
            margin-bottom: 12px;
        }
        .tabBar label {
            padding: 8px 12px;
            border: 1px solid ${border};
            border-bottom: none;
            border-radius: 10px 10px 0 0;
            background: ${card};
            cursor: pointer;
            color: ${muted};
            user-select: none;
        }
        .tabBar label:hover {
            color: ${accent};
        }
        .tabBar .flexSpacer {
            flex: 1;
        }
        .tabBar .miniLink {
            font-size: 12px;
            color: ${muted};
            text-decoration: none;
        }
        .tabBar .miniLink:hover {
            color: ${accent};
        }

        /* panes */
        .tabPane {
            display: none;
        }
        #tab-summary:checked ~ .tabPane:nth-of-type(1) {
            display: block;
        }
        #tab-vitals:checked ~ .tabPane:nth-of-type(2) {
            display: block;
        }
        #tab-notes:checked ~ .tabPane:nth-of-type(3) {
            display: block;
        }
        #tab-related:checked ~ .tabPane:nth-of-type(4) {
            display: block;
        }
        #tab-activity:checked ~ .tabPane:nth-of-type(5) {
            display: block;
        }

        /* active tab style */
        #tab-summary:checked ~ .tabBar label[for="tab-summary"],
        #tab-vitals:checked ~ .tabBar label[for="tab-vitals"],
        #tab-notes:checked ~ .tabBar label[for="tab-notes"],
        #tab-related:checked ~ .tabBar label[for="tab-related"],
        #tab-activity:checked ~ .tabBar label[for="tab-activity"] {
            color: ${text};
            background: color-mix(in oklab, ${accent} 12%, ${card});
            box-shadow: 0 -3px 0 0 ${accent} inset;
        }
    `,
    StickyBar: styled.div`
        position: sticky;
        bottom: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        padding: 10px;
        margin-top: 18px;
        z-index: 5;

        .left {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .left .sep {
            color: ${muted};
        }
        .right {
            display: flex;
            gap: 8px;
        }
    `,
    ModalOverlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 1000;
    `,
    ModalCard: styled.div`
        width: min(520px, 96vw);
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
        .modalHeader {
            padding: 14px 16px;
            border-bottom: 1px solid ${border};
        }
        .modalBody {
            padding: 14px 16px;
        }
        .modalActions {
            padding: 12px 16px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            border-top: 1px solid ${border};
        }
    `,
};
