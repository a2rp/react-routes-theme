import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const radius = "var(--radius, 16px)";

export const Styled = {
    Wrap: styled.div`
        color: ${text};
        padding: 20px 0 80px;
    `,

    Header: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${muted};
        }
        .breadcrumbs .current {
            color: ${text};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${muted};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
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
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,

    TopStrip: styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-bottom: 12px;

        .stepper {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .step {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid ${border};
            background: ${card};
            color: ${muted};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .step .num {
            width: 22px;
            height: 22px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid ${border};
        }
        .step.active {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .step:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .chip {
            border: 1px solid ${border};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${accent} 10%, transparent);
            color: ${text};
            white-space: nowrap;
        }
        .chip.alt {
            background: color-mix(in oklab, ${accent} 6%, transparent);
        }
    `,

    Grid: styled.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .block {
            margin-bottom: 16px;
        }

        .blockHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .blockHead.between {
            justify-content: space-between;
        }
        .blockHead h3 {
            font-size: 16px;
        }
        .blockHead .micro {
            color: ${muted};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .fields {
            display: grid;
            gap: 12px;
        }
        .two {
            grid-template-columns: 1fr;
        }
        .three {
            grid-template-columns: 1fr;
        }
        .four {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
            .four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${muted};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .twoCol {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1000px) {
            .twoCol {
                grid-template-columns: 1fr 1fr;
            }
        }
        .sub {
            padding: 14px;
        }

        .carrierGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
            .carrierGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .carrier {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            border: 1px solid ${border};
            background: ${card};
            padding: 12px;
            border-radius: 12px;
            cursor: pointer;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s;
        }
        .carrier:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .carrier input {
            margin-top: 3px;
        }
        .carrier .meta .t {
            font-weight: 700;
        }
        .carrier .meta .d {
            color: ${muted};
            font-size: 12px;
        }
        .carrier.active {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
            color: ${text};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${border};
            border-radius: 12px;
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
            background: ${card};
            color: ${accent};
            text-align: left;
        }
        td a {
            color: ${text};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .review {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
            .review {
                grid-template-columns: 1fr 1fr;
            }
        }
        .review .k {
            color: ${muted};
        }
        .review .v {
            color: ${text};
        }

        .ctaRow {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
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
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .chargeList {
            display: grid;
            gap: 8px;
        }
        .chargeList > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .chargeList .total {
            padding-top: 6px;
            border-top: 1px solid ${border};
            font-weight: 700;
        }

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .files a {
            color: ${text};
        }
        .miniActions {
            display: flex;
            gap: 8px;
            margin-top: 10px;
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
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${accent};
            border: 1px solid ${border};
        }
        .timeline .muted {
            color: ${muted};
            font-size: 12px;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${muted};
        }
        .printSummary .v {
            color: ${text};
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${border};
        }

        .btnPrimary {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
    `,
};
