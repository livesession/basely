import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Baseline } from '../../dist';
import '../../dist/index.css';

const meta: Meta<typeof Baseline> = {
  title: 'Components/Baseline',
  component: Baseline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collapsible component that displays tool compatibility information',
      },
    },
  },
  argTypes: {
    title: {
      description: 'The title displayed in the baseline component',
      control: 'text',
    },
    toolGroups: {
      description: 'Groups of tools with their compatibility status',
      control: 'object',
    },
    href: {
      description: 'The link for the title',
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Baseline>;

// Sample tool data for stories
const sampleTools = [
  { tool: 'bun', supported: true, label: 'Bun' },
  { tool: 'npm', supported: true, label: 'npm' },
  { tool: 'pnpm', supported: false, label: 'pnpm' },
];

export const Default: Story = {
  args: {
    title: 'Node.js Support',
    toolGroups: [sampleTools],
    href: 'https://basely.dev',
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: 'Node.js Support',
    toolGroups: [sampleTools],
  },
  render: (args) => (
    <div className="baseline--variant-blue">
      <style>{`
        .baseline--variant-blue bas-baseline {
          --color: blue;
          --baseline-high-check: var(--color);
          --baseline-high-bg: color-mix(in lab, var(--color) 5%, transparent);
          --baseline-high-engine-bg: color-mix(in lab, var(--color) 5%, transparent);
        }
      `}</style>
      <Baseline {...args} />
    </div>
  ),
};

