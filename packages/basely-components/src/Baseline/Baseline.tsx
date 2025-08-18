import * as React from 'react';

import * as cn from './Baseline.styles';

/**
 * Describes a single tool entry displayed inside the Baseline component.
 *
 * - **tool**: Identifier of the tool/engine. Built-ins: `bun`, `node`, `npm`, `pnpm`.
 * - **supported**: Whether the current feature is supported by this tool.
 * - **href**: Optional link to documentation or release notes.
 * - **label**: Optional custom label (text or React node) rendered next to the icon.
 *
 */
export interface BaselineTool {
    tool: 'bun' | 'node' | 'npm' | 'pnpm' | string
    supported: boolean;
    href?: string;
    label?: React.ReactNode;
}

/**
 * Props for the `Baseline` component.
 *
 */
export interface BaselineProps extends React.HTMLAttributes<HTMLDetailsElement> {
    /**
     * The title displayed in the summary row.
     */
    title: string;
    /**
     * Optional link for the entire block. When provided, the whole summary area
     * becomes a link. Clicking the link will not toggle the disclosure.
     */
    href?: string;
    /**
     * Optional `target` attribute for the link.
     */
    target?: React.HTMLAttributeAnchorTarget;
    /**
     * Optional `rel` attribute for the link.
     */
    rel?: string;
    /**
     * Groups of tools shown as rounded clusters. Each inner array is rendered
     * as a separate group, and each `BaselineTool` becomes an item with an icon
     * and optional label/checkmark state.
     */
    toolGroups: BaselineTool[][];
}

/**
 * A compact UI component that summarizes feature support across tools/engines.
 *
 * Renders a summary row with a title, followed by grouped tool badges indicating
 * support (checkmark) and optional labels. Useful for compatibility sections and
 * release notes.
 *
 * @category Component
 */
export function Baseline({ title, toolGroups, href, target, rel }: BaselineProps) {
    return (
        <bas-baseline className={cn.BaselineHost}>
            {href ? (
                <a
                    part="overlay"
                    href={href}
                    target={target}
                    rel={rel}
                />
            ) : null}

            <details>
                <summary>
                    <span part="icon" />
                    <div part="title">{title}</div>
                    <div part="compatibility">
                        {toolGroups.map((group, i) => (
                            <span part="tools" key={i}>
                                {group.map((tool, j) => (
                                    <span
                                        key={tool.tool + (tool.label ?? '') + j}
                                        data-tool={tool.tool}
                                        data-supported={tool.supported ? true : undefined}
                                    >
                                        {tool.label ? tool.label : null}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </div>
                </summary>
            </details>
        </bas-baseline>
    );
}
Baseline.displayName = 'Baseline';