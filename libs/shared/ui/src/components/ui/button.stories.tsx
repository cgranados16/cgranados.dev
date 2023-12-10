import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Button</Button>,
};
export const Outline: Story = {
  render: () => <Button variant="outline">Button</Button>,
};
