// src/pages/admin/users/detail/styled.js
import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";
const shadow = "var(--shadow, 0 10px 30px rgba(0,0,0,0.35))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
        display: block;

        .muted {
            color: ${muted};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .inline {
            color: ${accent};
            text-decoration: none;
        }
        .inline:hover {
            text-decoration: underline;
        }

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 12px;
            color: ${muted};
            a {
                color: ${muted};
            }
            a:hover {
                color: ${accent};
            }
            .current {
                color: ${text};
                font-weight: 600;
            }
        }

        .page-actions {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 16px;
            .left h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                margin-bottom: 6px;
            }
            .left .meta {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${muted};
            }
            .left .meta .sep {
                opacity: 0.6;
            }
            .badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 2px 8px;
                border-radius: 999px;
                font-size: 12px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
            }
            .badge.ok {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            .right {
                display: flex;
                gap: 8px;
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            margin: 10px 0 18px;
            a {
                padding: 8px 12px;
                border: 1px solid ${border};
                border-radius: 8px;
                text-decoration: none;
                color: ${muted};
                background: ${card};
                transition: 0.2s ease;
            }
            a:hover {
                color: ${accent};
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }

        .content-grid {
            display: grid;
            grid-template-columns: 2.2fr 1.3fr;
            gap: 16px;
        }

        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${shadow};
        }

        .identity {
            display: grid;
            grid-template-columns: 120px 1fr auto;
            gap: 16px;
            align-items: start;
        }

        .identity .avatar img {
            width: 120px;
            height: 120px;
            border-radius: 12px;
            object-fit: cover;
            border: 1px solid ${border};
        }

        .identity .who h2 {
            margin-bottom: 6px;
        }
        .identity .info-cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 18px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip,
        .chip.alt {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${border};
            text-decoration: none;
            color: ${muted};
            background: color-mix(in oklab, ${card} 92%, transparent);
            font-size: 12px;
            transition: 0.2s;
        }
        .chip:hover {
            color: ${accent};
            border-color: ${accent};
        }
        .chip.alt:hover {
            color: ${accent};
            border-color: ${accent};
        }

        .identity .actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            button {
                width: 220px;
            }
        }

        .kpis h3 {
            margin-bottom: 12px;
        }
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .kpi {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            border: 1px dashed ${border};
            border-radius: 12px;
            padding: 12px;
            text-decoration: none;
            color: ${text};
            background: color-mix(in oklab, ${card} 96%, transparent);
            transition: 0.2s;
        }
        .kpi:hover {
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
        .kpi .label {
            color: ${muted};
        }

        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            h3 {
                margin: 0;
            }
        }

        .security-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            margin-bottom: 14px;
        }
        .sec-block {
            border: 1px dashed ${border};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${card} 96%, transparent);
        }
        .sec-block .strong {
            font-weight: 700;
        }

        .sessions h4 {
            margin: 8px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            border-bottom: 1px solid ${border};
            padding: 10px;
            text-align: left;
        }
        thead th {
            color: ${accent};
            background: ${card};
        }

        .table-perms td,
        .table-perms th {
            white-space: nowrap;
        }

        .manager {
            margin-top: 10px;
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 12px;
            padding: 8px 0;
            border-bottom: 1px dashed ${border};
        }
        .timeline li:last-child {
            border-bottom: 0;
        }
        .timeline .when {
            color: ${muted};
        }
        .timeline .event a {
            text-decoration: none;
            color: ${text};
        }
        .timeline .event a:hover {
            color: ${accent};
        }

        .navhub .links {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
        }
        .hub-link {
            display: block;
            padding: 10px 12px;
            border: 1px solid ${border};
            border-radius: 10px;
            text-decoration: none;
            color: ${muted};
            background: color-mix(in oklab, ${card} 96%, transparent);
            transition: 0.2s;
        }
        .hub-link:hover {
            border-color: ${accent};
            color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .footer {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
            margin-top: 14px;
            padding-top: 8px;
            border-top: 1px solid ${border};
        }

        /* buttons */
        button {
            background: ${card};
            color: ${text};
            border: 1px solid ${border};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: 0.25s ease;
        }
        button:hover {
            color: ${accent};
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: none;
        }

        .btn-primary {
            background: color-mix(in oklab, ${accent} 18%, ${card});
            border-color: ${accent};
        }
        .btn-primary:hover {
            background: color-mix(in oklab, ${accent} 24%, ${card});
        }

        .btn-danger,
        .btn-danger-outline {
            border-color: #b33a3a;
        }
        .btn-danger {
            background: #2a1111;
        }
        .btn-danger-outline {
            background: transparent;
        }
        .btn-secondary {
            background: ${card};
        }

        .linklike {
            background: transparent;
            border: none;
            color: ${accent};
            cursor: pointer;
            padding: 0;
        }
        .linklike:hover {
            text-decoration: underline;
        }

        @media (max-width: 1200px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
            .identity {
                grid-template-columns: 100px 1fr;
            }
            .identity .actions {
                grid-column: 1 / -1;
                flex-direction: row;
                flex-wrap: wrap;
            }
            .security-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .kpi-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .timeline li {
                grid-template-columns: 1fr;
            }
            .navhub .links {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    `,

    ModalBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,

    ModalCard: styled.div`
        width: min(560px, 92vw);
        .modal-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 16px;
        }
        h3 {
            margin-bottom: 6px;
        }
    `,
};

export default Styled;
