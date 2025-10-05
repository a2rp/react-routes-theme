import styled from "styled-components";

const text = "var(--text, #f3f4f6)";
const muted = "var(--muted, #a0a0a7)";
const card = "var(--card, #111318)";
const border = "var(--border, #23262d)";
const accent = "var(--accent, #5aa9ff)";
const accentSoft = "var(--accent-soft, rgba(90,169,255,0.15))";

export const Styled = {
    Page: styled.div`
        width: 100%;
        color: ${text};
    `,

    Breadcrumbs: styled.nav`
        margin-bottom: 10px;
        display: flex;
        gap: 8px;
        align-items: center;
        a {
            color: ${muted};
            text-decoration: none;
        }
        a:hover {
            color: ${accent};
        }
        strong {
            color: ${text};
        }
    `,

    Toolbar: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 14px;

        .left {
            display: grid;
            gap: 6px;
            h1 {
                font-size: 22px;
                line-height: 1.2;
            }
            .meta {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${muted};
                font-size: 12px;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;

            .divider {
                width: 1px;
                height: 22px;
                background: ${border};
                margin: 0 2px;
            }

            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
            }
            button.ghost:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
            button.primary {
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
            button.primary:hover {
                transform: translateY(-1px);
            }
            button.danger {
                border-color: ${border};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
            svg {
                font-size: 16px;
            }
        }
    `,

    Filters: styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 12px;
        flex-wrap: wrap;

        .input {
            position: relative;
            min-width: 260px;
            flex: 1 1 320px;
        }
        .input .icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: ${muted};
            pointer-events: none;
        }
        .input input {
            width: 100%;
            padding: 8px 10px 8px 34px;
            border-radius: 8px;
            border: 1px solid ${border};
            background: ${card};
            color: ${text};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input input:focus {
            outline: none;
            border-color: ${accent};
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .selects {
            display: flex;
            gap: 8px;
            align-items: center;
            select {
                padding: 8px 10px;
                border-radius: 8px;
                border: 1px solid ${border};
                background: ${card};
                color: ${text};
                min-width: 140px;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            select:focus {
                outline: none;
                border-color: ${accent};
                box-shadow: 0 0 0 3px ${accentSoft};
            }
        }
    `,

    TableWrap: styled.div`
        border: 1px solid ${border};
        border-radius: 12px;
        overflow: auto;
        background: ${card};

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }

        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${card};
            color: ${accent};
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid ${border};
        }

        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${border};
            vertical-align: top;
        }

        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .tenant {
            display: flex;
            gap: 10px;
            align-items: center;
            .avatar {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: rgba(255, 255, 255, 0.06);
                font-weight: 700;
                letter-spacing: 0.5px;
                border: 1px solid ${border};
            }
            .info .name {
                font-weight: 600;
            }
            .info .sub {
                color: ${muted};
                font-size: 12px;
            }
            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                font-size: 11px;
                padding: 2px 6px;
                border-radius: 999px;
                border: 1px dashed ${border};
                color: ${muted};
            }
        }

        .chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${border};
            font-weight: 600;
            font-size: 12px;
        }
        .chip.plan.starter {
            opacity: 0.9;
        }
        .chip.plan.business {
            opacity: 0.95;
        }
        .chip.plan.enterprise {
            box-shadow: 0 0 0 3px ${accentSoft};
        }

        .chip.status.active {
            color: ${accent};
            border-color: ${accent};
        }
        .chip.status.trial {
            color: ${text};
            background: rgba(255, 255, 255, 0.06);
        }
        .chip.status.suspended {
            color: ${muted};
        }
        .chip.status.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }

        .owner .email {
            color: ${muted};
            font-size: 12px;
        }

        .usage {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            svg {
                position: relative;
                top: 2px;
            }
        }

        .links {
            display: grid;
            gap: 4px;
            a {
                color: ${text};
                text-decoration: none;
            }
            a:hover {
                color: ${accent};
            }
        }

        .right {
            text-align: right;
        }

        .row-actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            button {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 6px 10px;
                border-radius: 6px;
                cursor: pointer;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button.ghost:hover {
                color: ${accent};
                border-color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
            button.danger:hover {
                border-color: ${accent};
                color: ${accent};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,

    Empty: styled.div`
        .card {
            background: ${card};
            border: 1px solid ${border};
            border-radius: 10px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
            h3 {
                margin-bottom: 6px;
            }
            p {
                color: ${muted};
            }
            .actions {
                margin-top: 12px;
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            .link {
                color: ${accent};
                text-decoration: none;
            }
            .link:hover {
                text-decoration: underline;
            }
            button.ghost {
                border: 1px solid ${border};
                background: transparent;
                color: ${text};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            button.ghost:hover {
                border-color: ${accent};
                color: ${accent};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,

    Modal: styled.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
        }
        .box {
            position: absolute;
            right: 20px;
            bottom: 20px;
            min-width: 320px;
            background: ${card};
            border: 1px solid ${border};
            border-radius: 12px;
            padding: 16px;
            z-index: 51;
            display: grid;
            gap: 10px;
        }
        .box h3 {
            margin: 0;
        }
        .box p {
            color: ${muted};
            margin: 0;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .actions .primary {
            border: 1px solid ${accent};
            color: ${text};
            background: transparent;
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 0 0 3px ${accentSoft};
        }
        .actions .primary:hover {
            transform: translateY(-1px);
        }
    `,
};
