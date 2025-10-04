import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const danger = "var(--danger, #ef4444)";
const radius = "var(--radius, 16px)";

export const Styled = {
  Page: styled.div`
    padding: 24px 0 64px;
    color: ${text};

    .breadcrumbs {
      display: flex; gap: 8px; align-items: center; margin-top: 6px;
      a { color: ${muted}; }
      .current { color: ${text}; }
    }
  `,

  Header: styled.header`
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
    padding: 16px 20px; margin-bottom: 16px;

    .left h1 { font-size: 22px; letter-spacing: .4px; }
    .meta { margin-top: 6px; display: flex; gap: 8px; color: ${muted}; font-size: 12px; }

    .actions { display: flex; gap: 8px; flex-wrap: wrap; }

    .btnPrimary, .btnGhost, .btnDanger {
      border-radius: 8px; padding: 8px 14px; border: 1px solid ${border};
      background: ${card}; color: ${text}; font-weight: 600;
      transition: background .25s, color .25s, border-color .25s, box-shadow .25s, transform .05s ease-in-out;
    }
    .btnPrimary:hover { border-color: ${accent}; color: ${accent}; box-shadow: 0 0 0 3px ${accentSoft}; }
    .btnPrimary:active, .btnGhost:active, .btnDanger:active { transform: translateY(1px); }
    .btnDanger { border-color: ${danger}; color: ${danger}; }
    .btnDanger:hover { box-shadow: 0 0 0 3px rgba(239,68,68,.18); background: color-mix(in oklab, ${danger} 10%, transparent); }
    .btnGhost { opacity: .9; }
    .btnGhost:hover { border-color: ${accent}; color: ${accent}; }
  `,

  Banner: styled.div`
    margin: 12px 0; padding: 10px 14px;
    border: 1px solid ${border}; border-radius: 10px;
    background: color-mix(in oklab, ${accent} 10%, transparent);
    color: ${text};
  `,

  Grid: styled.div`
    display: grid; gap: 16px; grid-template-columns: 1fr;
    @media (min-width: 1100px) { grid-template-columns: 2fr 1fr; }

    .col.main.card { padding: 16px 18px; }

    .row { display: grid; gap: 16px; grid-template-columns: 1fr; margin-bottom: 18px; }
    .row.stack { align-items: start; }
    @media (min-width: 900px) { .row.stack { grid-template-columns: 280px 1fr; } }

    .two { display: grid; gap: 16px; grid-template-columns: 1fr; }
    .two.compact { gap: 12px; }
    @media (min-width: 900px) { .two { grid-template-columns: 1fr 1fr; } }

    .three { display: grid; gap: 16px; grid-template-columns: 1fr; }
    @media (min-width: 900px) { .three { grid-template-columns: repeat(3, 1fr); } }

    label { display: block; font-size: 12px; color: ${muted}; margin-bottom: 6px; }
    input, select, textarea { width: 100%; }

    .sub { padding: 14px; }
    .sub h3 { font-size: 14px; margin-bottom: 10px; }

    .mini { margin-top: 8px; color: ${muted}; font-size: 12px; }

    /* avatar */
    .avatar { display: grid; gap: 10px; }
    .avatar .pic {
      width: 120px; height: 120px; background: ${card}; background-size: cover; background-position: center;
      border: 1px solid ${border}; border-radius: ${radius};
    }
    .avatar .controls { display: flex; flex-wrap: wrap; gap: 8px; }
    .avatar .small { padding: 6px 10px; font-weight: 600; }
    .avatar .fileName { font-size: 12px; }

    /* radio */
    .radioRow { display: flex; gap: 10px; flex-wrap: wrap; }
    .radio {
      display: inline-flex; gap: 8px; align-items: center; padding: 6px 10px; border: 1px solid ${border};
      background: ${card}; border-radius: 999px; cursor: pointer; user-select: none;
      transition: border-color .2s, box-shadow .2s, color .2s;
    }
    .radio input { display: none; }
    .radio.active, .radio:hover { border-color: ${accent}; box-shadow: 0 0 0 3px ${accentSoft}; color: ${accent}; }

    /* password row */
    .pwdRow { margin-top: 12px; }
    .pwdBox { display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center; }

    /* switches */
    .switch { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 10px; cursor: pointer; }
    .switch input { display: none; }
    .switch .slider {
      width: 44px; height: 24px; border-radius: 20px; border: 1px solid ${border}; background: ${card};
      position: relative; transition: background .25s, border-color .25s, box-shadow .25s;
    }
    .switch .slider::after {
      content: ""; position: absolute; top: 50%; transform: translateY(-50%);
      left: 2px; width: 18px; height: 18px; border-radius: 50%; background: ${text};
      transition: left .25s ease;
    }
    .switch input:checked + .slider { border-color: ${accent}; box-shadow: 0 0 0 3px ${accentSoft}; }
    .switch input:checked + .slider::after { left: 24px; }
    .switch .label { color: ${text}; }

    /* range */
    .range { margin-top: 12px; }
    .range input[type="range"] { width: 100%; }

    /* tips */
    .tips { margin: 0; padding-left: 18px; display: grid; gap: 6px; }
    .tips li { color: ${muted}; }

    /* summary */
    .printSummary { display: grid; gap: 8px; }
    .printSummary .line { display: grid; grid-template-columns: 120px 1fr; gap: 10px; }
    .printSummary .k { color: ${muted}; }
    .printSummary .v { color: ${text}; }

    /* side */
    .side { display: grid; gap: 16px; }
    .preview { display: grid; grid-template-columns: 56px 1fr; gap: 10px; align-items: center; }
    .avatar.sm { width: 56px; height: 56px; background-size: cover; background-position: center; border: 1px solid ${border}; border-radius: ${radius}; }
    .details .muted { color: ${muted}; font-size: 12px; }
    .badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
    .chip {
      border: 1px solid ${border}; padding: 6px 10px; border-radius: 999px; color: ${text};
      background: color-mix(in oklab, ${accent} 8%, transparent);
    }

    /* links list */
    .links { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
    .links a { color: ${muted}; padding: 6px 8px; border-radius: 8px; border: 1px solid ${border}; background: ${card}; }
    .links a:hover { color: ${accent}; border-color: ${accent}; }
  `,

  Overlay: styled.div`
    position: fixed; inset: 0; background: rgba(2,6,23,.55);
    display: grid; place-items: center; z-index: 50;
  `,
  Modal: styled.div`
    width: min(520px, 92vw);
    border-radius: ${radius};
    border: 1px solid ${border};
    background: ${card};
    color: ${text};
    box-shadow: 0 20px 60px rgba(0,0,0,.35);
    overflow: hidden;

    header { padding: 14px 16px; border-bottom: 1px solid ${border}; }
    h4 { font-size: 18px; }
    .body { padding: 16px; color: ${text}; }
    footer { padding: 12px 16px; display: flex; gap: 8px; justify-content: flex-end; border-top: 1px solid ${border}; }

    .btnPrimary {
      border-radius: 8px; padding: 8px 14px; border: 1px solid ${border};
      background: ${card}; color: ${text}; font-weight: 600;
      transition: background .25s, color .25s, border-color .25s, box-shadow .25s;
    }
    .btnPrimary:hover { border-color: ${accent}; color: ${accent}; box-shadow: 0 0 0 3px ${accentSoft}; }
  `,
};
