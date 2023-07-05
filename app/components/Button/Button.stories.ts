import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click me!',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me!',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Click me!',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Click me!',
  },
};
