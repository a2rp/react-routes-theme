import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Wrapper: styled.div`
    width: 100%;
    color: ${text};
    padding: 18px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }
    .breadcrumbs a { color: ${muted}; }
    .breadcrumbs a:hover { color: ${accent}; }
    .breadcrumbs .here { color: ${text}; font-weight: 600; }
    .breadcrumbs .sep { opacity: 0.5; }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn {
      background: ${card};
      color: ${text};
      border: 1px solid ${border};
      padding: 8px 12px;
      border-radius: 10px;
      font-size: 13px;
      line-height: 1;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(0,0,0,0.18);
    }
    .btn:hover { border-color: ${accent}; color: ${accent}; }
    .btn:focus-visible { outline: none; box-shadow: 0 0 0 3px ${accentSoft}; }
    .btn:disabled { opacity: .6; cursor: not-allowed; }
    .btn.ghost { background: transparent; }
    .btn.small { padding: 6px 10px; font-size: 12px; }
    .btn.primary { border-color: ${accent}; color: ${accent}; }

    .grid {
      display: grid;
      gap: 12px;
      margin-bottom: 16px;
    }
    .grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

    @media (max-width: 1200px) {
      .grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 700px) {
      .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
    }

    .card {
      background: ${card};
      border: 1px solid ${border};
      border-radius: 12px;
      padding: 14px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }

    .kpi .kpi-title { color: ${muted}; font-weight: 600; margin-bottom: 6px; letter-spacing: .2px; }
    .kpi .kpi-value { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
    .kpi .kpi-sub { color: ${muted}; font-size: 12px; }

    .section { margin-top: 8px; }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 8px;
    }
    .section .title { font-size: 16px; font-weight: 700; letter-spacing: .3px; }
    .section .links {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-size: 12px;
    }
    .section .links a { color: ${muted}; }
    .section .links a:hover { color: ${accent}; }
    .section .links .dot { opacity: .6; }

    /* Channels */
    .channel .channel-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 8px;
    }
    .channel h3 { font-size: 15px; }
    .muted { color: ${muted}; }

    .channel .list { margin: 8px 0 10px; padding-left: 18px; }
    .channel .list li { margin: 3px 0; }

    .channel .actions { display: flex; gap: 8px; flex-wrap: wrap; }

    /* Switch (decorative; disabled in demo) */
    .switch { position: relative; display: inline-flex; align-items: center; }
    .switch input { display: none; }
    .switch span {
      width: 40px; height: 22px; border-radius: 999px;
      background: #222833; border: 1px solid ${border}; position: relative;
      transition: all .2s ease;
    }
    .switch span::after {
      content: ""; position: absolute; top: 50%; transform: translateY(-50%);
      left: 2px; width: 18px; height: 18px; border-radius: 50%;
      background: ${text}; transition: all .2s ease;
    }
    .switch input:checked + span { border-color: ${accent}; box-shadow: 0 0 0 3px ${accentSoft}; }
    .switch input:checked + span::after { left: 20px; }

    /* Matrix */
    .table-scroll { overflow: auto; }
    table.table { width: 100%; border-collapse: collapse; font-size: 13px; }
    table.table th, table.table td {
      padding: 10px; border-bottom: 1px solid ${border};
      white-space: nowrap; text-align: left;
    }
    table.table th { color: ${accent}; background: ${card}; position: sticky; top: 0; z-index: 1; }
    .table .event { font-weight: 600; }
    .badge {
      display: inline-flex; align-items: center; justify-content: center;
      border: 1px solid ${border}; border-radius: 20px; padding: 2px 8px; font-size: 11px;
      background: rgba(0,0,0,.15);
    }
    .badge.on { border-color: ${accent}; color: ${accent}; }

    .tiny-link {
      display: inline-block; margin-right: 6px; font-size: 12px; color: ${muted}; text-decoration: none;
    }
    .tiny-link:hover { color: ${accent}; }

    /* Chips, code */
    .chips { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
    .chip {
      border: 1px solid ${border}; border-radius: 999px; padding: 4px 10px; font-size: 12px;
      background: rgba(0,0,0,.08);
    }
    .code {
      display: inline-block; background: rgba(0,0,0,.18); border: 1px solid ${border}; padding: 6px 10px; border-radius: 8px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 12px;
    }

    /* Templates */
    .templates { display: grid; gap: 6px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
    @media (max-width: 900px) { .templates { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 560px) { .templates { grid-template-columns: 1fr; } }
    .tpl {
      display: flex; align-items: center; gap: 8px;
      padding: 10px; border: 1px solid ${border}; border-radius: 10px; text-decoration: none;
      color: ${text}; background: ${card}; transition: border-color .2s ease, color .2s ease;
    }
    .tpl:hover { border-color: ${accent}; color: ${accent}; }
    .tpl .dot-bullet { width: 6px; height: 6px; border-radius: 50%; background: ${accent}; display: inline-block; }

    /* Endpoints */
    .endpoint .subhead { margin-bottom: 6px; }
    .endpoint .code { margin-top: 6px; display: block; }

    /* Timeline */
    .timeline ul { list-style: none; padding: 0; margin: 0; }
    .timeline li {
      display: grid; grid-template-columns: 200px 80px 1fr auto; gap: 10px; padding: 10px 0;
      border-bottom: 1px solid ${border}; align-items: center;
    }
    .timeline .time { color: ${muted}; font-size: 12px; white-space: nowrap; }
    .timeline .label {
      border: 1px solid ${border}; border-radius: 999px; padding: 3px 8px; font-size: 11px;
      color: ${accent};
    }
    .timeline .tiny-link { white-space: nowrap; }

    /* Utility */
    .subhead { font-size: 14px; font-weight: 700; }
    .note { margin-top: 8px; }
  `,
};
