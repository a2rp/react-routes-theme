import styled from "styled-components";

const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Wrapper = styled.div`
    color: ${text};
    padding: 16px;
`;

export const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    a {
        color: ${muted};
        text-decoration: none;
    }
    a:hover {
        color: ${accent};
    }
    .spacer {
        flex: 1;
    }
    span {
        color: ${muted};
    }
`;

export const Header = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 16px;
    box-shadow: ${shadow};
    margin-bottom: 16px;

    .left {
        display: flex;
        gap: 14px;
        align-items: center;
    }
    .avatar {
        width: 72px;
        height: 72px;
        border-radius: 12px;
        border: 1px solid ${border};
        object-fit: cover;
    }
    .meta h1 {
        font-size: 22px;
        margin-bottom: 2px;
    }
    .row {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${muted};
    }
    .row .code {
        color: ${accent};
        font-weight: 600;
    }
    .row .dot {
        opacity: 0.6;
    }
    .tags {
        display: flex;
        gap: 6px;
        margin-top: 8px;
        flex-wrap: wrap;
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 12px;
    background: color-mix(in oklab, ${accent} 16%, transparent);
    border: 1px solid ${border};
    color: ${text};
`;

export const Toolbar = styled.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;

    .hint {
        margin-left: 6px;
        color: ${accent};
        font-size: 12px;
    }

    a,
    button {
        text-decoration: none;
        border: 1px solid ${border};
        background: ${bg};
        color: ${text};
        padding: 6px 10px;
        border-radius: 8px;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;
    }
    a:hover,
    button:hover {
        border-color: ${accent};
        color: ${accent};
        background: rgba(0, 0, 0, 0.08);
    }
    .ghost {
        background: ${card};
    }
    .danger {
        border-color: ${border};
    }
    button[disabled],
    button[aria-disabled] {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

export const KPIGrid = styled.div`
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const KPI = styled.div`
    background: ${bg};
    border: 1px solid ${border};
    border-radius: 10px;
    padding: 10px 12px;

    .label {
        color: ${muted};
        font-size: 12px;
        margin-bottom: 4px;
    }
    .value {
        font-weight: 600;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Section = styled.section`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${shadow};

    h3 {
        margin-bottom: 10px;
    }

    .list {
        display: grid;
        grid-template-columns: 120px 1fr;
        row-gap: 8px;
    }
    .list > div {
        display: contents;
    }
    .list span:first-child {
        color: ${muted};
    }
    .list a {
        color: ${text};
        text-decoration: none;
    }
    .list a:hover {
        color: ${accent};
    }

    .addr {
        color: ${text};
        line-height: 1.6;
    }
    .inline-links {
        margin-top: 8px;
    }
    .inline-links a {
        color: ${accent};
        text-decoration: none;
    }
`;

export const Tabs = styled.div`
    display: grid;
    grid-auto-rows: min-content;

    /* Tab headers */
    label {
        display: inline-flex;
        align-items: center;
        padding: 8px 12px;
        margin-right: 6px;
        margin-bottom: 8px;
        border-radius: 8px;
        border: 1px solid ${border};
        background: ${bg};
        color: ${text};
        cursor: pointer;
        user-select: none;
    }
    input[type="radio"] {
        display: none;
    }

    /* Panels */
    .panel {
        display: none;
    }
    #tab-overview:checked ~ label[for="tab-overview"],
    #tab-visits:checked ~ label[for="tab-visits"],
    #tab-presc:checked ~ label[for="tab-presc"],
    #tab-labs:checked ~ label[for="tab-labs"],
    #tab-imaging:checked ~ label[for="tab-imaging"],
    #tab-bill:checked ~ label[for="tab-bill"],
    #tab-activity:checked ~ label[for="tab-activity"],
    #tab-files:checked ~ label[for="tab-files"] {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
        color: ${accent};
    }

    #tab-overview:checked ~ [data-for="tab-overview"],
    #tab-visits:checked ~ [data-for="tab-visits"],
    #tab-presc:checked ~ [data-for="tab-presc"],
    #tab-labs:checked ~ [data-for="tab-labs"],
    #tab-imaging:checked ~ [data-for="tab-imaging"],
    #tab-bill:checked ~ [data-for="tab-bill"],
    #tab-activity:checked ~ [data-for="tab-activity"],
    #tab-files:checked ~ [data-for="tab-files"] {
        display: block;
    }
`;

export const SubGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${shadow};

    h4 {
        margin-bottom: 10px;
    }

    .links {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
    }
    .links a {
        text-decoration: none;
        border: 1px solid ${border};
        background: ${bg};
        padding: 8px 10px;
        border-radius: 8px;
        color: ${text};
    }
    .links a:hover {
        color: ${accent};
        border-color: ${accent};
    }

    .panel-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }
    .panel-head .btn-link {
        margin-left: auto;
        color: ${accent};
        text-decoration: none;
    }

    ul.timeline {
        list-style: none;
        display: grid;
        gap: 8px;
    }
    ul.timeline li {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 10px;
        padding: 10px;
        border: 1px solid ${border};
        border-radius: 8px;
        background: ${bg};
    }
    ul.timeline .when {
        color: ${muted};
    }
    ul.timeline .text {
        color: ${text};
    }
`;

export const TableWrap = styled.div`
    overflow: auto;
    border-radius: 8px;
    border: 1px solid ${border};

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        background: ${card};
        color: ${accent};
        text-align: left;
        border-bottom: 1px solid ${border};
        padding: 10px;
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${border};
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.08);
    }
    .muted {
        color: ${muted};
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.45);
    z-index: 60;
`;

export const ModalCard = styled.div`
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};
    padding: 16px;
    width: min(520px, 92vw);

    h3 {
        margin-bottom: 8px;
    }
    .muted {
        color: ${muted};
        margin-bottom: 12px;
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
    .actions button {
        background: ${bg};
        color: ${text};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
    }
    .actions button:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .actions button[disabled] {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;
