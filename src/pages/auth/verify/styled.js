import styled from "styled-components";

/* CSS variable fallbacks */
const bg = "var(--bg, #0d1117)";
const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
  Wrap: styled.main`
    width: 100%;
    color: ${text};
    background: ${bg};
    padding: 22px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 22px;

    .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

    /* Header */
    .hdr {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 16px;
      align-items: center;

      .hdr-left {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h1 {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: "Antonio", sans-serif;
          font-weight: 700;
          letter-spacing: 0.4px;
          font-size: 26px;
          line-height: 1.2;
          outline: none;
        }
        .icon {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 34px; height: 34px;
          border-radius: 10px;
          background: color-mix(in oklab, ${accent} 16%, transparent);
          border: 1px solid ${border};
        }
        .sub {
          color: ${muted};
        }
        .mail { color: ${text}; display: inline-flex; align-items: center; gap: 6px; }
        .pill {
          align-self: flex-start;
          font-size: 12px;
          color: ${text};
          background: color-mix(in oklab, ${accent} 14%, transparent);
          border: 1px solid ${border};
          border-radius: 999px;
          padding: 4px 10px;
        }
      }

      .actions {
        display: inline-flex;
        gap: 10px;
        flex-wrap: wrap;

        .btnPrimary {
          background: ${accent};
          color: #fff;
          border: 1px solid ${accent};
          padding: 9px 14px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: transform .06s ease, box-shadow .2s ease, opacity .2s ease;
          box-shadow: ${shadow};
        }
        .btnPrimary:hover { opacity: .95; }
        .btnPrimary:active { transform: translateY(1px); }

        .btnGhost {
          background: ${card};
          color: ${text};
          border: 1px solid ${border};
          padding: 9px 14px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px;
          transition: color .2s ease, border-color .2s ease, background .2s ease;
          text-decoration: none;
        }
        .btnGhost:hover { color: ${accent}; border-color: ${accent}; }
      }
    }

    /* Banner (printable) */
    .banner {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 16px;
      background: ${card};
      border: 1px solid ${border};
      border-radius: 14px;
      padding: 16px;
      box-shadow: ${shadow};

      .banner-left {
        display: flex; flex-direction: column; gap: 14px;

        .status {
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid ${border};
          background: color-mix(in oklab, ${accent} 12%, transparent);
        }
        .status .dot {
          width: 8px; height: 8px; border-radius: 999px;
          background: ${accent};
          box-shadow: 0 0 0 3px ${accentSoft};
        }

        .sentMeta {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
        .row { display: flex; flex-direction: column; gap: 4px; }
        .lbl { color: ${muted}; display: inline-flex; align-items: center; gap: 6px; }
        .val { font-weight: 600; }
      }

      .banner-right {
        display: flex; flex-direction: column; gap: 12px;

        .tokenCard {
          border: 1px solid ${border};
          background: color-mix(in oklab, ${card} 96%, transparent);
          border-radius: 12px;
          padding: 12px;
          display: flex; flex-direction: column; gap: 10px;

          .tokenHead {
            display: flex; align-items: center; justify-content: space-between;
            font-weight: 600;
          }
          .btnTiny {
            background: ${card};
            border: 1px solid ${border};
            color: ${text};
            border-radius: 8px;
            padding: 6px 10px;
            cursor: pointer;
            transition: color .2s ease, border-color .2s ease, background .2s ease;
            display: inline-flex; align-items: center; gap: 6px;
          }
          .btnTiny:hover { color: ${accent}; border-color: ${accent}; }

          .token {
            padding: 10px 12px;
            border-radius: 8px;
            border: 1px dashed ${border};
            background: #00000022;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            user-select: all;
            overflow-wrap: anywhere;
          }

          .metaGrid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
            .k { color: ${muted}; font-size: 12px; }
            .v { font-weight: 600; }
          }
        }

        .ctaRow {
          display: flex; gap: 8px; flex-wrap: wrap;

          .btnDisabled {
            background: ${card};
            color: ${muted};
            border: 1px dashed ${border};
            padding: 9px 14px;
            border-radius: 10px;
            font-weight: 600;
            cursor: not-allowed;
          }
          .btnGhost {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 9px 14px;
            border-radius: 10px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex; align-items: center; gap: 8px;
          }
          .btnGhost:hover { color: ${accent}; border-color: ${accent}; }
        }
      }

      @media (max-width: 980px) {
        grid-template-columns: 1fr;
      }
    }

    /* Steps / Timeline */
    .steps {
      display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;

      .step {
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        padding: 14px;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: start;

        .badge {
          width: 34px; height: 34px; border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid ${border};
          background: color-mix(in oklab, ${accent} 10%, transparent);
        }
        .badge.done {
          background: color-mix(in oklab, ${accent} 16%, transparent);
        }
        .badge.pulse {
          box-shadow: 0 0 0 3px ${accentSoft};
        }
        .badge.idle {
          opacity: 0.7;
        }

        .body {
          display: flex; flex-direction: column; gap: 6px;
          .title { font-weight: 700; }
          .desc { color: ${muted}; }
        }
      }

      @media (max-width: 980px) {
        grid-template-columns: 1fr;
      }
    }

    /* Grid of navigation cards */
    .gridNav {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;

      .card {
        border: 1px solid ${border};
        background: ${card};
        border-radius: 12px;
        padding: 14px;
        box-shadow: ${shadow};

        h3 {
          font-family: "Antonio", sans-serif;
          margin-bottom: 8px;
          letter-spacing: .3px;
        }

        .links {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
        }
        .links a {
          display: inline-flex; align-items: center; justify-content: space-between;
          padding: 8px 10px; border-radius: 8px;
          border: 1px solid ${border};
          background: color-mix(in oklab, ${card} 96%, transparent);
          text-decoration: none;
          color: ${text};
          transition: color .2s ease, border-color .2s ease, background .2s ease;
        }
        .links a:hover { color: ${accent}; border-color: ${accent}; }
        .list { margin-left: 18px; color: ${muted}; }
        .list li { margin: 4px 0; }
      }

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 700px) {
        grid-template-columns: 1fr;
      }
    }

    /* Footer */
    .foot {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      padding-top: 6px;
      border-top: 1px solid ${border};
      color: ${muted};

      .hint { color: ${text}; font-weight: 600; margin-right: 6px; }

      .right {
        display: inline-flex; gap: 12px;
      }
      .right a {
        color: ${muted}; text-decoration: none; border-bottom: 1px dashed transparent;
      }
      .right a:hover { color: ${accent}; border-bottom-color: ${accent}; }
    }
  `,
};
