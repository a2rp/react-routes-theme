import styled, { keyframes } from "styled-components";

/* theme tokens with fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,.35))";

export const Page = styled.div`
    width: 100%;
    color: ${text};
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    a {
        color: ${text};
        text-decoration: none;
    }
    a:hover {
        color: ${accent};
    }

    .card {
        background: ${card};
        border: 1px solid ${border};
        border-radius: 12px;
        box-shadow: ${shadow};
    }
`;

export const TopBar = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 14px;
    align-items: end;

    .left {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .crumbs {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${muted};
        font-size: 12px;
    }
    .crumbs .current {
        color: ${text};
    }

    h1 {
        font-size: 24px;
        line-height: 1.2;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        color: ${muted};
        font-size: 12px;
    }
    .meta b {
        color: ${text};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .actions button {
        background: ${card};
        border: 1px solid ${border};
        color: ${text};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
    }
    .actions button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const SectionNav = styled.nav`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 12px;
    background: ${card};
    border: 1px solid ${border};
    border-radius: 10px;

    a {
        padding: 6px 10px;
        border: 1px solid ${border};
        border-radius: 999px;
        font-size: 12px;
    }
    a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Summary = styled.section`
    padding: 16px;

    header {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
    }
    h2 {
        font-size: 18px;
    }
    .tags {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .tag {
        border: 1px solid ${border};
        padding: 4px 8px;
        border-radius: 999px;
        font-size: 11px;
        color: ${muted};
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 14px;
    }

    .note {
        margin-top: 8px;
        color: ${muted};
        font-style: italic;
    }

    .chips {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin: 6px 0;
    }
    .chip {
        border: 1px solid ${border};
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        color: ${muted};
    }
    .addr {
        color: ${muted};
        font-size: 12px;
        margin: 6px 0;
    }
`;

export const Block = styled.div`
    padding: 12px;
    border: 1px dashed ${border};
    border-radius: 10px;

    h4 {
        margin-bottom: 8px;
    }

    .title {
        font-weight: 600;
    }
    .muted {
        color: ${muted};
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }
    .links a {
        border: 1px solid ${border};
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 12px;
    }
    .links a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Meds = styled.section`
    padding: 16px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h2 {
        font-size: 18px;
    }
    .right button {
        background: ${card};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
    }
    .right button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }

    .tblWrap {
        overflow: auto;
        margin-top: 12px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        background: ${card};
        color: ${accent};
        text-align: left;
        border-bottom: 1px solid ${border};
        position: sticky;
        top: 0;
        padding: 10px;
    }
    tbody td {
        border-bottom: 1px solid ${border};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr:hover td {
        background: rgba(0, 0, 0, 0.06);
    }
    .sub {
        color: ${muted};
        font-size: 12px;
        margin-top: 2px;
    }
    .num {
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
    .linksRow {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
    }
    .linksRow a {
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Directions = styled.section`
    padding: 16px;
    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .bullets {
        margin-left: 18px;
        line-height: 1.8;
    }
    .linksRow {
        display: flex;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
    }
    .linksRow a {
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Panel = styled.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 12px;
    }
    .label {
        color: ${muted};
        font-size: 12px;
        margin-bottom: 4px;
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .linksRow {
        display: flex;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
    }
    .linksRow a {
        border: 1px solid ${border};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Attachments = styled.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 12px;
    }
    .file {
        padding: 12px;
    }
    .name {
        font-weight: 600;
    }
    .muted {
        color: ${muted};
        font-size: 12px;
        margin-top: 4px;
    }
    .btns {
        display: flex;
        gap: 8px;
        margin-top: 10px;
    }
    .btns a,
    .btns button {
        border: 1px solid ${border};
        background: ${card};
        color: ${text};
        padding: 6px 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
    }
    .btns a:hover,
    .btns button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;

export const Activity = styled.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }

    .timeline {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
    }
    .timeline li {
        display: grid;
        grid-template-columns: 16px 1fr;
        gap: 10px;
        align-items: start;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-top: 6px;
        background: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
    .dot.create {
    }
    .dot.print {
    }
    .dot.share {
    }
    .body .when {
        color: ${muted};
        font-size: 12px;
    }
    .body .what {
        font-weight: 600;
        margin: 2px 0;
    }
    .body .who {
        color: ${muted};
        font-size: 12px;
    }
`;

const pop = keyframes`
  from { transform: translateY(6px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;
export const Toast = styled.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    background: ${card};
    border: 1px solid ${border};
    color: ${text};
    padding: 8px 12px;
    border-radius: 10px;
    box-shadow: ${shadow};
    animation: ${pop} 0.2s ease-out both;
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`;
export const ModalCard = styled.div`
    width: min(520px, 96vw);
    padding: 16px;
    background: ${card};
    border: 1px solid ${border};
    border-radius: 12px;
    box-shadow: ${shadow};

    h3 {
        margin-bottom: 8px;
    }
    p {
        color: ${muted};
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 14px;
    }
    .actions button {
        background: ${card};
        color: ${text};
        border: 1px solid ${border};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .actions button:hover {
        border-color: ${accent};
        color: ${accent};
        box-shadow: 0 0 0 3px ${accentSoft};
    }
`;
