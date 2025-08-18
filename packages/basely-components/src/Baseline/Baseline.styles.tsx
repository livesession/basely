import { css } from "@linaria/core";

import checkUrl from "./check.svg"
import bunUrl from "./bun.svg"
import logoUrl from "./logo.svg"
import pnpmUrl from "./pnpm.svg"
import nodeUrl from "./node.svg"
import npmUrl from "./npm.svg"

export const BaselineHost = css`
    --baseline-logo-bun: url(${bunUrl});
    --baseline-logo-node: url(${nodeUrl});
    --baseline-logo-npm: url(${npmUrl});

    --baseline-high-bg: #e6f4ea;
    --baseline-high-engine-bg: #ceead6;
    --baseline-high-check: #099949;
    --baseline-high-img: url(${logoUrl});

    --baseline-bg: var(--baseline-high-bg);
    --baseline-engine-bg: var(--baseline-high-engine-bg);
    --baseline-img: var(--baseline-high-img);
    --baseline-check: var(--baseline-high-check);

    --baseline-cross: var(--baseline-limited-cross);
    --feedback-link-icon: var(--icon-primary);
   
    display: block;
    position: relative;
    
    a {
        text-decoration: none;
        color: inherit;
    }

    details {
        background: var(--baseline-bg);
        border-radius: 4px;
        margin: 16px 0;
        padding-left: 61px;
        position: relative;
        border: 1px solid var(--baseline-engine-bg);
    }

    summary {
        --chevron-size: 11px;
        --chevron-padding-left: 12px;
        --chevron-padding-right: 20px;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: space-between;
        padding: 16px 0;
        padding-right: calc(var(--chevron-padding-left) + var(--chevron-size) + var(--chevron-padding-right));
        position: relative;
    }

    [part="overlay"] {
        position: absolute;
        inset: 0;
        z-index: 1;
        display: block;
    }

    [part="icon"] {
        --width: 37px;
        background-image: var(--baseline-img);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        height: 36px;
        left: calc(-8px - var(--width));
        position: absolute;
        top: 16px;
        width: var(--width);
    }

    [part="title"] {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 1.5;
        margin: 0;
        padding: 6px 0;
    }

    [part="compatibility"] {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    [part="tools"] {
        background: var(--baseline-engine-bg);
        border-radius: 32px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px 10px;

        [data-tool] {
            display: flex;
            --baseline-tool-image: none;
        }
        [data-tool="bun"] {
            --baseline-tool-image: var(--baseline-logo-bun);
        }
        [data-tool="node"] {
            --baseline-tool-image: var(--baseline-logo-node);
        }
        [data-tool="npm"] {
            --baseline-tool-image: var(--baseline-logo-npm);
        }
        [data-tool="pnpm"] {
            --baseline-tool-image: url(${pnpmUrl});
        }

        [data-tool]::before {
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            display: block;
            height: 20px;
            width: 20px;
            background-image: var(--baseline-tool-image);
        }

        [data-tool]::after {
            background-color: var(--baseline-check);
            mask-image: url(${checkUrl});
            -webkit-mask-image: url(${checkUrl});

            content: "";
            display: block;
            height: 20px;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-size: contain;
            mask-size: contain;
            width: 16px;
        }
    }
`;
