import styled from "styled-components";

/* tokens with safe fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Wrap = styled.div`
    width: 100%;
    color: ${text};
`;

export const HeaderBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
`;

export const Breadcrumbs = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    a {
        color: ${muted};
    }
    a:hover {
        color: ${accent};
    }
    span {
        color: ${muted};
    }
    strong {
        color: ${text};
        letter-spacing: 0.2px;
    }
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
            background 0.2s;
    }
    .btn:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .ghost {
        background: transparent;
    }
`;

export const TopStrip = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const SearchBox = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 8px;
    border: 1px solid ${border};
    background: ${card};
    border-radius: 10px;
    padding: 8px 12px;
    svg {
        opacity: 0.9;
    }
    input {
        background: transparent;
        color: ${text};
        border: none;
        outline: none;
        height: 28px;
    }
    .clear {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        width: 28px;
        border: 1px solid ${border};
        background: transparent;
        color: ${muted};
        border-radius: 8px;
    }
    .clear:hover {
        color: ${accent};
        border-color: ${accent};
    }
`;

export const Filters = styled.div`
    display: flex;
    gap: 8px;
    label {
        display: grid;
        gap: 4px;
        font-size: 12px;
        color: ${muted};
    }
    select {
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        border-radius: 8px;
        height: 36px;
        padding: 0 10px;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    select:focus {
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Tabs = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
    button {
        border: 1px solid ${border};
        background: ${card};
        color: ${muted};
        padding: 6px 10px;
        border-radius: 999px;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    button:hover {
        color: ${accent};
        border-color: ${accent};
    }
    .active {
        color: ${text};
        border-color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Grid = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: 1.7fr 1.1fr;
    align-items: start;
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const ListPane = styled.section`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${card};
        border-bottom: 1px solid ${border};
        text-align: left;
        padding: 10px;
        color: ${accent};
        letter-spacing: 0.3px;
    }
    tbody td {
        border-bottom: 1px solid ${border};
        padding: 10px;
        vertical-align: top;
    }
    .idlink {
        color: ${text};
    }
    .idlink:hover {
        color: ${accent};
    }
    .name {
        font-weight: 600;
    }
    .vars {
        display: flex;
        gap: 6px;
        margin-top: 4px;
        flex-wrap: wrap;
    }
    .rowActions {
        white-space: nowrap;
        text-align: right;
    }
    .rowActions .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${border};
        background: transparent;
        color: ${muted};
        border-radius: 8px;
        height: 30px;
        width: 30px;
        margin-left: 6px;
        cursor: pointer;
    }
    .rowActions .icon:hover {
        color: ${accent};
        border-color: ${accent};
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    tbody tr.selected {
        background: color-mix(in oklab, ${accent} 10%, transparent);
    }
    .usage {
        font-variant-numeric: tabular-nums;
    }
    .muted {
        color: ${muted};
        font-size: 12px;
        margin-top: 2px;
    }
`;

export const ListFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px;
    color: ${muted};
    .quicklinks {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .quicklinks a {
        color: ${muted};
    }
    .quicklinks a:hover {
        color: ${accent};
    }
`;

export const DetailPane = styled.section`
    border: 1px solid ${border};
    background: ${card};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    min-height: 420px;
`;

export const PreviewCard = styled.div`
    padding: 16px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 12px;
    }
    .title {
        display: grid;
        gap: 8px;
    }
    h2 {
        font-size: 18px;
        letter-spacing: 0.3px;
    }
    .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .ghost {
        background: transparent;
    }
    .danger {
        border-color: ${border};
    }
    .danger:hover {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const MetaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
    .label {
        color: ${muted};
        font-size: 12px;
    }
    .value {
        font-weight: 600;
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
`;

export const Section = styled.section`
    margin-top: 12px;
    .sectionTitle {
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: 0.3px;
    }
    .rowBtns {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .btn.danger {
        background: color-mix(in oklab, ${accent} 10%, transparent);
    }
`;

export const SmsScreen = styled.div`
    border: 1px solid ${border};
    border-radius: 16px;
    padding: 12px;
    background: ${bg};
    .smsHeader {
        color: ${muted};
        margin-bottom: 10px;
    }
    .smsBubble {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        padding: 12px;
        line-height: 1.6;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    .smsBubble .token {
        padding: 2px 6px;
        border-radius: 6px;
        margin: 0 2px;
        background: color-mix(in oklab, ${accent} 12%, transparent);
        border: 1px dashed ${accent};
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
    .smsTime {
        color: ${muted};
        font-size: 12px;
        margin-top: 8px;
        text-align: right;
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 8px;
    border: 1px solid ${border};
    border-radius: 999px;
    font-size: 12px;
    color: ${text};
    background: color-mix(in oklab, ${card} 92%, transparent);
`;

export const Chips = styled.div`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    &.wrap {
        flex-wrap: wrap;
    }
    .chiplink {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        border: 1px solid ${border};
        color: ${text};
    }
    .chiplink:hover {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const Status = styled.span`
    display: inline-flex;
    align-items: center;
    height: 22px;
    padding: 0 8px;
    border-radius: 999px;
    font-size: 12px;
    border: 1px solid ${border};
    color: ${text};
    &[data-status="Active"] {
        background: color-mix(in oklab, ${accent} 12%, transparent);
        border-color: ${accent};
    }
    &[data-status="Paused"] {
        opacity: 0.75;
    }
    &[data-status="Draft"] {
        opacity: 0.6;
        font-style: italic;
    }
`;

export const LinksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
    a {
        border: 1px solid ${border};
        border-radius: 10px;
        padding: 10px;
        color: ${text};
        text-align: center;
        background: color-mix(in oklab, ${card} 94%, transparent);
    }
    a:hover {
        border-color: ${accent};
        color: ${accent};
    }
`;

export const EmptyState = styled.div`
    display: grid;
    place-content: center;
    min-height: 380px;
    text-align: center;
    gap: 8px;
    color: ${muted};
    .title {
        color: ${text};
        font-weight: 700;
        letter-spacing: 0.3px;
    }
    .sub {
        max-width: 520px;
    }
`;

export const Toast = styled.div`
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: ${card};
    color: ${text};
    border: 1px solid ${border};
    border-radius: 10px;
    padding: 10px 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`;

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.55);
    .box {
        width: min(620px, 92vw);
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    }
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${border};
    }
    .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        border-radius: 8px;
        border: 1px solid ${border};
        background: transparent;
        color: ${muted};
    }
    .icon:hover {
        color: ${accent};
        border-color: ${accent};
    }
    .body {
        padding: 14px;
        display: grid;
        gap: 8px;
    }
    .foot {
        padding: 12px 14px;
        border-top: 1px solid ${border};
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover {
        border-color: ${accent};
        color: ${accent};
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }
`;

export const Styled = {
    Wrap,
    HeaderBar,
    Breadcrumbs,
    HeaderActions,
    TopStrip,
    SearchBox,
    Filters,
    Tabs,
    Grid,
    ListPane,
    Table,
    ListFooter,
    DetailPane,
    PreviewCard,
    MetaGrid,
    Section,
    SmsScreen,
    Badge,
    Chips,
    Status,
    LinksGrid,
    EmptyState,
    Toast,
    Modal,
};
