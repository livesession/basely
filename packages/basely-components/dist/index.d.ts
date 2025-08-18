import * as React from 'react';

interface BaselineTool {
    tool: 'bun' | 'node' | 'npm' | 'pnpm' | string;
    supported: boolean;
    label?: React.ReactNode;
}
interface BaselineProps extends React.HTMLAttributes<HTMLDetailsElement> {
    title: string;
    toolGroups: BaselineTool[][];
}
declare function Baseline({ title, toolGroups, ...props }: BaselineProps): React.JSX.Element;

export { Baseline };
